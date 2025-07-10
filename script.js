
const quotes = [
  { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { text: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
  { text: "It’s not whether you get knocked down, it’s whether you get up.", author: "Vince Lombardi" },
  { text: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
];

const quoteText = document.getElementById('quote');
const quoteAuthor = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');
const newQuoteBtn = document.getElementById('new-quote');
const tweetBtn = document.getElementById('tweet-quote');

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function updateQuote() {

  quoteBox.classList.add('fade-out');

  setTimeout(() => {
    const quote = getRandomQuote();
    quoteText.innerText = quote.text;
    quoteAuthor.innerText = `— ${quote.author}`;
    tweetBtn.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" — ${quote.author}`)}`;

   
    quoteBox.classList.remove('fade-out');
  }, 400);
}

newQuoteBtn.addEventListener('click', updateQuote);

updateQuote();
