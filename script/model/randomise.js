const randomiseQuote = () => {
    const personNames = Object.keys(quotes);
    const personRandomIndex = personNames.length * Math.random() << 0;
    const personRandomName = Object.keys(quotes)[personRandomIndex].split("-")[0];

    const randomQuoteArray = quotes[personNames[personRandomIndex]];
    const randomQuoteIndex = Math.floor(Math.random() * randomQuoteArray.length);

    $("#quote").text(randomQuoteArray[randomQuoteIndex]);
    $("#person").text(personRandomName);
};