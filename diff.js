const { BINANCE, BITTREX, TIME } = require('./constants');
const formatDate = require('./date');
const { sendNotification } = require('./twilio');

const CRYPTO = BITTREX.filter(currency => BINANCE.includes(currency));

const diffLogs = CRYPTO.reduce((logs, currency) => {
  logs[currency] = {
    difference: 0,
    level: 0,
    lastNotification: undefined,
    numNotifications: 0
  };

  return logs;
}, {});

const notificationLog = [];

let lastNotification = Date.now() - 5 * TIME.MINUTE;

exports.getNotifications = function getNotifications() {
  return { notifications: notificationLog };
};

exports.diff = function diff(prices) {
  const now = Date.now();
  const notifications = [];
  const urgent = [];

  CRYPTO.forEach(currency => {
    const bittrex = prices.bittrexPrices[currency].last;
    const binance = prices.binancePrices[currency];

    const difference = bittrex - binance;
    const percentage = Number((Math.abs(difference)/Math.min(bittrex, binance) * 100).toFixed(2));

    const cheaperExchange = difference > 0 ? 'Binance' : 'Bittrex';
    const diffLog = diffLogs[currency];

    let level = 0;

    if (percentage > 50) level += 1;
    if (percentage > 40) level += 1;
    if (percentage > 30) level += 1;
    if (percentage > 25) level += 1;
    if (percentage > 20) level += 1;
    if (percentage > 15) level += 1;
    if (percentage > 10) level += 1;
    if (percentage > 7)  level += 1;
    if (percentage > 5)  level += 1;
    if (percentage > 4)  level += 1;
    if (percentage > 2)  level += 1;
    if (percentage > 1)  level += 1;

    if (level > 1) {
      console.log(`${currency} is cheaper at ${cheaperExchange}: ${percentage}%`);
      console.log(`Bittrex: ${bittrex}, Binance: ${binance}`);
      console.log(`Previously the difference was ${diffLog.difference}%`);

      notifications.push(`${currency}: ${percentage}%, Bt ${bittrex}, Bn ${binance}`);

      diffLog.lastNotification = now;
      diffLog.numNotifications += 1;
    }

    if (level > 0) {
      if (notificationLog.length > 500) notificationLog.shift();

      notificationLog.push([
        `${currency} is cheaper at ${cheaperExchange}: ${percentage}%`,
        `Bittrex: ${bittrex}, Binance: ${binance}`,
        `Previously the difference was ${diffLog.difference}%`,
        formatDate(new Date())
      ].join('\n'))
    }

    if (
      level > 3
        && prices.bittrexWallets[currency].walletActive
        && prices.bittrexWallets[currency].withdrawQueueDepth < 50
        && prices.bittrexPrices[currency].marketActive
    ) urgent.push(`${currency}: ${percentage}%, Bt ${bittrex}, Bn ${binance}`);

    diffLog.difference = percentage;
    diffLog.level = level;
  });

  if (now - lastNotification > 5 * TIME.MINUTE && notifications.length > 0) {
    lastNotification = now;

    console.log('Sending notifications', notifications.join('; '));

    sendNotification(notifications.join('; '));
  } else if (now - lastNotification > 30 * TIME.SECOND && urgent.length > 0) {
    lastNotification = now;

    console.log('Sending urgent notifications', urgent.join('; '));

    sendNotification(urgent.join('; '));
  }
}
