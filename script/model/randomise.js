const seenQuotes = [];

const randomiseQuote = () => {
    const personNames = Object.keys(quotes);
    const personRandomIndex = personNames.length * Math.random() << 0;
    const personRandomName = Object.keys(quotes)[personRandomIndex].split("-")[0];

    const randomQuoteArray = quotes[personNames[personRandomIndex]];
    const randomQuoteIndex = Math.floor(Math.random() * randomQuoteArray.length);
    const chosenQuote = randomQuoteArray[randomQuoteIndex];

    if(!seenQuotes.includes(chosenQuote)) {
        $("#quote").text(chosenQuote);
        $("#person").text(personRandomName);
        seenQuotes.push(chosenQuote);
    } else {
        randomiseQuote();
    }
};