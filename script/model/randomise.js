const seenQuotes = [];
const ATTEMPT_MAX = 30;
let currentAttempts = 0;

const hasBeenSeenBefore = (chosenQuote) => seenQuotes.includes(chosenQuote);

const getRandomEntry = (obj) => obj[Math.floor(Math.random() * obj.length)];

const getRandomPerson = () => {
    const personNames = Object.keys(quotes);
    const personRandomIndex = personNames.length * Math.random() << 0;
    return Object.keys(quotes)[personRandomIndex];
};

const randomiseQuote = () => {
    const randomPerson = selectedPerson.length > 0 ? selectedPerson : getRandomPerson();
    const condition = selectedCondition.length > 0
            ? selectedCondition
            : getRandomEntry(Object.keys(quotes[randomPerson]));
    const selectedConditionQuotes = quotes[randomPerson][condition];
    const chosenQuote = getRandomEntry(selectedConditionQuotes);

    if(!hasBeenSeenBefore(chosenQuote)) {
        $("#quote").text(chosenQuote);
        $("#person").text(randomPerson);
        seenQuotes.push(chosenQuote);
    } else if(currentAttempts < ATTEMPT_MAX) {
        currentAttempts++;
        randomiseQuote();
    }
};