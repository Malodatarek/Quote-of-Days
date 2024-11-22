var arrayofQuotes = [
   {
    'author' : 'Jim Rohn',
    'quote' : 'Beware of what you become in pursuit of what you want.'
   },

   {
    'author' : 'Epictetus',
    'quote' : "It's not what happens to you, but how you react to it that matters."
   },

   {
    'author' : 'Frank Sinatra',
    'quote' : "The best revenge is massive success."
   },

   {
    'author' : 'Nelson Mandela',
    'quote' : "Resentment is like drinking poison and waiting for your enemies to die."
   },

   {
    'author' : 'Wayne Gretzy',
    'quote' : "You miss 100% of the shots you don't take."
   },

   {
    'author' : 'Elbert Hubbard',
    'quote' : "Do not take life too seriously. You will not get out alive."
   },

];


function generateQuote(){
   var random = Number.parseInt(Math.random()*arrayofQuotes.length + 1)
   document.querySelector('#quoteoutput').textContent = `\"${arrayofQuotes[random].quote}\"`
   document.querySelector('#authoroutput').textContent = `--${arrayofQuotes[random].author}`;   
}