var articles = require('../data/articles');

var wordsGroupped = articles.map((article) => {
  return article.toLowerCase().match(/([a-z]+)/g);
}).reduce((total, article) => {
  return total.concat(article);
}, []).reduce((total, word) => {
  var indexOfWord = total[0].indexOf(word);
  if( indexOfWord > 0 ) {
    total[1][indexOfWord]++;
  } else {
    total[0].push(word);
    total[1].push(1);
  }
  return total;
}, [[], []]);

wordsGroupped
var wordCountted = [];
wordsGroupped[0].forEach((word, index) => {
  wordCountted.push([word, wordsGroupped[1][index]])
})

var result = wordCountted.reduce((result, item) => {
  result[item[1]] = result[item[1]] || [];
  result[item[1]].push(item[0]);
  return result;
}, {});

console.log(result);