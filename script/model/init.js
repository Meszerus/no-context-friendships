const personNames = [ "matt-t", "will-g", "charlie-t" ];
let quotes = { };

$(document).ready(function() {
    loadQuotes();
    setTimeout(function() { randomiseQuote(); }, 150);
});

const loadQuotes = () => {
    personNames.forEach(personName =>
        $.get(`./resource/${personName}.txt`, data => quotes[personName] = data.split("\n")));
};