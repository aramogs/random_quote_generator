//Array[] of objects {} Quotes from different people, used to be displayed randomly
var quotes = [
  {
    quote: "If living is just dreaming, let's do good dreaming",
    source: 'Amado Nervo'
  },
  {
    quote: 'Among individuals, as among nations, respect for the rights of others is peace',
    source: 'Benito Juarez',
    citation: 'Manifesto'
  },
  {
    quote: 'A room without books is like a body without a soul',
    source: 'Marcus Tullius Cicero',
    year:'103BC - 43BC'
  },
  {
    quote: 'Without music, life would be a mistake',
    source: 'Friedrich Nietzschee'
  },
  {
    quote: 'A friend is someone who knows all about you and still loves you',
    source: 'Elbert Hubbard'
  },
  {
    quote:"Children's lies are signs of great talent",
    source:'Gabriel Garcia Marquez',
    citation: 'Living to tell the tale',
    year:'2002'
  }
  
];
// Array of objects{} Colors to be picked randomly for the background
var colors = [
  '#57606f' ,
  '#2f3542',
  '#70a1ff',
  '#7bed9f',
  '#eccc68',
  '#ff6348' 
];
// Variable that triggers the printQuote function every 30s
var intervalID = window.setInterval(printQuote, 30000);
/*Function to get random number depending on the length of 'quotes' or 'colors' arrays
  sending the desire information to the funciton using req example getRandomQuote(colors)  */
function getRandomQuote(req) {
  random =  Math.floor(Math.random()*req.length);
  return req[random]
}
//Function to change the background color as well as the button loadQuote every time the printQuote function gets triggered
function randColor(){
  var random =    getRandomQuote(colors);
  document.body.style.background = random;
  document.getElementById("loadQuote").style.background = random;
  
  //console.log(random,"Color") //Console to veryfy the function is working correctly
  }
//Function to print information on the html file index.html
function printQuote() {
//Declaring variables, and requesting randomnumber from getRandomQuote(quotes) function
    var random =        getRandomQuote(quotes);
    var quoteItself =   random.quote;
    var quoteSource =   random.source;
    var quoteCitation = random.citation;
    var quoteYear =     random.year;
  //Manipulating the DOM by changing quote-box to the deisered information  
    var print =         document.getElementById('quote-box');
    
    print.innerHTML=  '<p class="quote">' +quoteItself+ '</p>'
  //Verifying the information is not empty if it is do not show it, if it is show it
  if (quoteCitation !== undefined && quoteYear !== undefined) {
    print.innerHTML += '<p class="source">'+quoteSource+'<span class="citation">'+quoteCitation+'</span><span class="year">'+quoteYear+'</span></p>';
  }else if (quoteCitation !== undefined && quoteYear === undefined) {
    print.innerHTML += '<p class="source">'+quoteSource+'<span class="citation">'+quoteCitation+'</span></p>';
  }else if (quoteCitation === undefined && quoteYear !== undefined){
    print.innerHTML += '<p class="source">'+quoteSource+'<span class="year">'+quoteYear+'</span></p>';
  }else{
    print.innerHTML += '<p class="source">'+quoteSource+'</p>';
  }
  //Calling the function randColor to change the color every time the EventListener is clicked
  randColor();
}
//Eventlistener for clicks of the button loadQuote
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
