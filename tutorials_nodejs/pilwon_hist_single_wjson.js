// https://github.com/pilwon/node-yahoo-finance/blob/master/examples/callback/historical-single.js

var jsonfile = require('jsonfile')

var util = require('util');

require('colors');

require('dygraphs');
require('CanvasRenderingContext2D');

var yahooFinance = require('yahoo-finance');

var SYMBOL = 'BHEL.NS';//'AEGISLOG.BO';// 'BHEL.NS';//'BEML';
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

    //------------------------------------------------------------
    var my_file = './tmp.json';
    jsonfile.writeFile(my_file, quotes, {spaces:2}, function(err){
       console.error(err); 
    })
    //console.log(quotes);
    console.log(quotes[0]['open']);
    // the following for loop is not good in nodejs
    var open_val=[];
    for(var i = 0; i < quotes.length; i++)
    { 
        //console.log(quotes[i]['open']);
	open_val.push(quotes[i]['open']);
    }
    //console.log(open_val);


    //------------------------------------------------------------

  } else {
    console.log('N/A');
  }
});

