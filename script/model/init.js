const personNames = [ "matt-t", "will-g", "charlie-t" ];
let quotes = { };

$(document).ready(function() {
    loadQuotes();
    randomiseQuote();
});

const loadQuotes = () => {
    personNames.forEach(personName =>
        $.get(`./resource/${personName}.txt`, data => quotes[personName] = data.split("\n")));
};