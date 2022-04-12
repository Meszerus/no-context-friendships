const personNames = [ "matt-t", "will-g", "charlie-t", "dylan-s", "kerrigan-j", "stevie-m", "tasha-m" ];
let quotes = { };

$(document).ready(function() {
    loadQuotes();
    setTimeout(function() { randomiseQuote(); }, 1000);
});

const loadQuotes = () => {
    personNames.forEach(personName =>
        $.get(`./resource/${personName}.txt`, data => quotes[personName] = data.split("\n")));
};