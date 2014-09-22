require('sillyheader-theme');
var HeaderComponent = require('sillyheader');

function main(req, res) {
  var document = createDocument();

  var eye = new HeaderComponent(document.body);

  res.render('index', { content: document.body.innerHTML });
}

function createDocument() {
  var dom =require('jsdom').jsdom;
  var window = dom().parentWindow;
  return window.document;
}

module.exports = main;
