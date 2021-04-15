const randomiseQuote = () => {
    var randomNumber = Math.floor(Math.random() * quotes.length);
    $("#quote").text(quotes[randomNumber]);
};