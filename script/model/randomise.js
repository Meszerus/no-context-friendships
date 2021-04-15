const randomiseQuote = () => {
    var randomPerson = Math.floor(Math.random() * quotes.length);
    var randomQuote = Math.floor(Math.random() * quotes[randomPerson].length);
    $("#quote").text(quotes[randomPerson][randomQuote]);
};