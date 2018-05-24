const EXCHANGES = Object.freeze(['bittrex', 'binance', 'huobi', 'kucoin']);
const EXCHANGE_ABRV = Object.freeze({
  bittrex: 'Bt',
  binance: 'Bn',
  huobi: 'Hb',
  kucoin: 'Ku'
});

const BITTREX = Object.freeze([
  '1ST',
  '2GIVE',
  'ABY',
  'ADA',
  'ADT',
  'ADX',
  'AEON',
  'AGRS',
  'AMP',
  'ANT',
  'ARDR',
  'ARK',
  'AUR',
  'BAT',
  'BAY',
  'BCH',
  'BCPT',
  'BCY',
  'BITB',
  'BLITZ',
  'BLK',
  'BLOCK',
  'BNT',
  'BRK',
  'BRX',
  'BSD',
  'BTG',
  'BURST',
  'BYC',
  'CANN',
  'CFI',
  'CLAM',
  'CLOAK',
  'CLUB',
  'COVAL',
  'CPC',
  'CRB',
  'CRW',
  'CURE',
  'CVC',
  'DASH',
  'DCR',
  'DCT',
  'DGB',
  'DMD',
  'DNT',
  'DOGE',
  'DOPE',
  'DTB',
  'DYN',
  'EBST',
  'EDG',
  'EFL',
  'EGC',
  'EMC',
  'EMC2',
  'ENG',
  'ENRG',
  'ERC',
  'ETC',
  'ETH',
  'EXCL',
  'EXP',
  'FAIR',
  'FCT',
  'FLDC',
  'FLO',
  'FTC',
  'GAM',
  'GAME',
  'GBG',
  'GBYTE',
  'GCR',
  'GEO',
  'GLD',
  'GNO',
  'GNT',
  'GOLOS',
  'GRC',
  'GRS',
  'GTO',
  'GUP',
  'HMQ',
  'IGNIS',
  'INCNT',
  'INFX',
  'IOC',
  'ION',
  'IOP',
  'KMD',
  'KORE',
  'LBC',
  'LGD',
  'LMC',
  'LRC',
  'LSK',
  'LTC',
  'LUN',
  'MAID',
  'MANA',
  'MCO',
  'MEME',
  'MER',
  'MLN',
  'MONA',
  'MUE',
  'MUSIC',
  'NAV',
  'NBT',
  'NEO',
  'NEOS',
  'NGC',
  'NLG',
  'NMR',
  'NXC',
  'NXS',
  'NXT',
  'OK',
  'OMG',
  'OMNI',
  'PART',
  'PAY',
  'PDC',
  'PINK',
  'PIVX',
  'PKB',
  'POLY',
  'POT',
  'POWR',
  'PPC',
  'PRO',
  'PTC',
  'PTOY',
  'QRL',
  'QTUM',
  'QWARK',
  'RADS',
  'RBY',
  'RCN',
  'RDD',
  'REP',
  'RISE',
  'RLC',
  'SALT',
  'SBD',
  'SC',
  'SEQ',
  'SHIFT',
  'SIB',
  'SLR',
  'SLS',
  'SNRG',
  'SNT',
  'SPHR',
  'SPR',
  'SRN',
  'START',
  'STEEM',
  'STORJ',
  'STORM',
  'STRAT',
  'SWIFT',
  'SWT',
  'SYNX',
  'SYS',
  'THC',
  'TIX',
  'TKS',
  'TRST',
  'TRUST',
  'TRX',
  'TUSD',
  'TX',
  'UBQ',
  'UKG',
  'UNB',
  'VEE',
  'VIA',
  'VIB',
  'VOX',
  'VRC',
  'VRM',
  'VTC',
  'VTR',
  'WAVES',
  'WAX',
  'WINGS',
  'XCP',
  'XDN',
  'XEL',
  'XEM',
  'XLM',
  'XMG',
  'XMR',
  'XMY',
  'XRP',
  'XST',
  'XVC',
  'XVG',
  'XWC',
  'XZC',
  'ZCL',
  'ZEC',
  'ZEN',
  'ZRX'
]);

const BINANCE = Object.freeze([
  'ADA',
  'ADX',
  'AE',
  'AION',
  'AMB',
  'APPC',
  'ARK',
  'ARN',
  'AST',
  'BAT',
  'BCH',
  'BCD',
  'BCPT',
  'BLZ',
  'BNB',
  'BNT',
  'BQX',
  'BRD',
  'BTG',
  'BTS',
  'CDT',
  'CHAT',
  'CLOAK',
  'CMT',
  'CND',
  'DASH',
  'DGD',
  'DLT',
  'DNT',
  'EDO',
  'ELF',
  'ENG',
  'ENJ',
  'EOS',
  'ETC',
  'ETH',
  'EVX',
  'FUEL',
  'FUN',
  'GAS',
  'GRS',
  'GTO',
  'GVT',
  'GXS',
  'HSR',
  'ICN',
  'ICX',
  'INS',
  'IOST',
  'IOTA',
  'KMD',
  'KNC',
  'LEND',
  'LINK',
  'LOOM',
  'LRC',
  'LSK',
  'LTC',
  'LUN',
  'MANA',
  'NANO',
  'MCO',
  'MDA',
  'MOD',
  'MTH',
  'MTL',
  'NAV',
  'NCASH',
  'NEBL',
  'NEO',
  'NULS',
  'OAX',
  'OMG',
  'ONT',
  'OST',
  'PIVX',
  'POA',
  'POE',
  'POWR',
  'PPT',
  'QLC',
  'QSP',
  'QTUM',
  'RCN',
  'RDN',
  'REQ',
  'RLC',
  'RPX',
  'SALT',
  'SKY',
  'SNGLS',
  'SNM',
  'SNT',
  'STEEM',
  'STORJ',
  'STORM',
  'STRAT',
  'SUB',
  'SYS',
  'TNB',
  'TNT',
  'TRIG',
  'TRX',
  'TUSD',
  'VEN',
  'VIA',
  'VIB',
  'VIBE',
  'WABI',
  'WAN',
  'WAVES',
  'WINGS',
  'WPR',
  'WTC',
  'XEM',
  'XLM',
  'XMR',
  'XRP',
  'XVG',
  'XZC',
  'YOYO',
  'ZEC',
  'ZEN',
  'ZIL',
  'ZRX'
]);

const HUOBI = Object.freeze([
  'ABT',
  'ACT',
  'ADA',
  'ADX',
  'AIDOC',
  'APPC',
  'AST',
  'BAT',
  'BCD',
  'BCH',
  'BCX',
  'BIFI',
  'BLZ',
  'BTG',
  'BTM',
  'BTS',
  'CHAT',
  'CMT',
  'CTXC',
  'CVC',
  'DASH',
  'DAT',
  'DBC',
  'DGD',
  'DTA',
  'EDU',
  'EKO',
  'ELA',
  'ELF',
  'ENG',
  'EOS',
  'ETC',
  'ETF',
  'ETH',
  'EVX',
  'GAS',
  'GNT',
  'GNX',
  'HSR',
  'HT',
  'ICX',
  'IOST',
  'IOTA',
  'ITC',
  'KAN',
  'KNC',
  'LBA',
  'LET',
  'LINK',
  'LSK',
  'LTC',
  'LUN',
  'MANA',
  'MCO',
  'MDS',
  'MEET',
  'MTL',
  'MTN',
  'MTX',
  'NAS',
  'NEO',
  'OCN',
  'OMG',
  'ONT',
  'OST',
  'PAY',
  'POWR',
  'PRO',
  'QASH',
  'QSP',
  'QTUM',
  'QUN',
  'RCN',
  'RDN',
  'REQ',
  'RPX',
  'RUFF',
  'SALT',
  'SBTC',
  'SMT',
  'SNC',
  'SNT',
  'SOC',
  'SRN',
  'STK',
  'STORJ',
  'SWFTC',
  'THETA',
  'TNB',
  'TNT',
  'TOPC',
  'TRX',
  'UTK',
  'VEN',
  'WAN',
  'WAX',
  'WICC',
  'WPR',
  'XEM',
  'XRP',
  'YEE',
  'ZEC',
  'ZIL',
  'ZLA',
  'ZRX'
]);

const KUCOIN = Object.freeze([
  'ABT',
  'ABTC',
  'ACAT',
  'ACT',
  'ADB',
  'AGI',
  'AION',
  'AIX',
  'AMB',
  'APH',
  'ARN',
  'ARY',
  'AXP',
  'BCD',
  'BCH',
  'BCPT',
  'BHC',
  'BNTY',
  'BOS',
  'BPT',
  'BRD',
  'BTCP',
  'BTG',
  'BTM',
  'CAG',
  'CAN',
  'CAPP',
  'CAT',
  'CFD',
  'CHP',
  'CHSB',
  'COFI',
  'COV',
  'CS',
  'CV',
  'CVC',
  'CXO',
  'DADI',
  'DASH',
  'DAT',
  'DATX',
  'DBC',
  'DEB',
  'DENT',
  'DGB',
  'DNA',
  'DOCK',
  'DRGN',
  'DTA',
  'EBTC',
  'ELEC',
  'ELF',
  'ELIX',
  'ENJ',
  'EOS',
  'ETC',
  'ETF',
  'ETH',
  'ETN',
  'EVX',
  'EXY',
  'FLIXX',
  'FOTA',
  'GALA',
  'GAS',
  'GAT',
  'GLA',
  'GOD',
  'GVT',
  'HAT',
  'HAV',
  'HKN',
  'HPB',
  'HSR',
  'HST',
  'IHT',
  'ING',
  'INS',
  'IOST',
  'ITC',
  'J8T',
  'JNT',
  'KCS',
  'KEY',
  'KICK',
  'KNC',
  'LA',
  'LALA',
  'LEND',
  'LOCI',
  'LOOM',
  'LTC',
  'LYM',
  'MAN',
  'MANA',
  'MEE',
  'MEET',
  'MOD',
  'MTH',
  'MTN',
  'MWAT',
  'NANO',
  'NEBL',
  'NEO',
  'NULS',
  'OCN',
  'OMG',
  'ONION',
  'ONT',
  'OPEN',
  'PARETO',
  'PAY',
  'PBL',
  'PLAY',
  'POE',
  'POLL',
  'POLY',
  'POWR',
  'PPT',
  'PRL',
  'PURA',
  'QLC',
  'QSP',
  'QTUM',
  'R',
  'RDN',
  'REQ',
  'RHOC',
  'RPX',
  'SAY',
  'SHL',
  'SNC',
  'SNM',
  'SNOV',
  'SNT',
  'SPF',
  'SPHTX',
  'SRN',
  'STK',
  'STX',
  'SUB',
  'TEL',
  'TFL',
  'TIME',
  'TIO',
  'TKY',
  'TNC',
  'TOMO',
  'TRAC',
  'UKG',
  'UTK',
  'VEN',
  'WAN',
  'WAX',
  'WPR',
  'WTC',
  'XAS',
  'XLR',
  'ZIL',
  'ZPT'
]);

const KRAKEN = Object.freeze([
  'BCH',
  'DASH',
  'DOGE',
  'EOS',
  'ETC',
  'ETH',
  'GNO',
  'ICN',
  'LTC',
  'MLN',
  'REP',
  'XLM',
  'XMR',
  'XRP',
  'ZEC'
]);

const EXCHANGE_COINS = new Set();
const SHARED_COINS = new Set();

[BITTREX, BINANCE, HUOBI, KUCOIN, KRAKEN].forEach(coins => {
  coins.forEach(coin => {
    if (EXCHANGE_COINS.has(coin)) return void SHARED_COINS.add(coin);

    EXCHANGE_COINS.add(coin);
  });
});

const CRYPTO = Object.freeze(Array.from(SHARED_COINS).sort());

const MILLISECOND = 1;
const SECOND = 1000 * MILLISECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

const TIME = Object.freeze({ SECOND, MINUTE, HOUR });

const MAX_BACKOFF = HOUR;
const MIN_BACKOFF = 2 * SECOND;

exports.CRYPTO = CRYPTO;
exports.EXCHANGES = EXCHANGES;
exports.EXCHANGE_ABRV = EXCHANGE_ABRV;
exports.BITTREX = BITTREX;
exports.BINANCE = BINANCE;
exports.HUOBI = HUOBI;
exports.KUCOIN = KUCOIN;
exports.KRAKEN = KRAKEN;
exports.TIME = TIME;
exports.MAX_BACKOFF = MAX_BACKOFF;
exports.MIN_BACKOFF = MIN_BACKOFF;
