$("#randomise").click(() => {
    randomiseQuote();
});

$("#new").click(() => {
    const emailUser = "deicideisfun";
    const emailDomain = "gmail.com"
    window.open(`mailto:${emailUser}@${emailDomain}?subject=new-quote`);
});

$("input[name='condition']").on("click", function() {
    selectedConditions[$(this).val()] = $(this).prop("checked");
});

$("#conditions").on("change", function() {
    selectedCondition = $(this).val();
});

$("#people").on("change", function() {
    selectedPerson = $(this).val();
});