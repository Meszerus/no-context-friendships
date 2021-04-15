const personNames = [ "matt-t", "will-g", "charlie-t" ];
let quotes = [];

$(document).ready(function() {
    loadQuotes();
});

const loadQuotes = () => {
    personNames.forEach(personName =>
        $.get(`./resource/${personName}.txt`, data => quotes.push(data.split("\n"))));
};