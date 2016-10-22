// https://github.com/pilwon/node-yahoo-finance/blob/master/examples/callback/historical-single.js

var util = require('util');

require('colors');

var yahooFinance = require('yahoo-finance');

var SYMBOL = 'AEGISLOG.BO';// 'BHEL.NS';//'BEML';
//var SYMBOL = 'AAPL';
//var SYMBOL = 'IBM';//'ADBE';

yahooFinance.historical({
  symbol: SYMBOL,
  from: '2016-01-01',
  to: '2016-03-31',
  period: 'd'
}, function (err, quotes) {
  if (err) { throw err; }
  console.log(util.format(
    '=== %s (%d) ===',
    SYMBOL,
    quotes.length
  ).cyan);
  if (quotes[0]) {
    console.log(
      '%s\n...\n%s',
      JSON.stringify(quotes[0], null, 2),
      JSON.stringify(quotes[quotes.length - 1], null, 2)
    );
  } else {
    console.log('N/A');
  }
});

