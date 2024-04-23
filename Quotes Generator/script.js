const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('#new-quote');

 async function getQuote(){
    const quotes = await fetch("https://api.quotable.io/quotes/random");
    const data = await quotes.json();
    quote.innerHTML = data[0].content;
    author.textContent = "-"+" "+data[0].author;
}

btn.addEventListener('click',getQuote);