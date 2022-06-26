const quotes = { };
let selectedCondition = "";
let selectedPerson = "";
let mode = "browse";
let currentQuote = { quote: "", person: "", revealed: true };

$(document).ready(function() {
    randomiseQuote();
});