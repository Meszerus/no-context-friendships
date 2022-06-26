$("#randomise").click(() => {
    randomiseQuote();

    if(mode === "quiz") {
        $(".action_button").toggle({ duration: 1 });
    }
});

$("#reveal").click(() => {
    revealPerson();
    $(".action_button").toggle({ duration: 1 });
});

$("#mode").change(() => {
    mode = mode === "browse" ? "quiz" : "browse";
    randomiseQuote();

    if(mode === "quiz") {
        $("#reveal").show();
        $("#randomise").hide();
    } else {
        $("#randomise").show();
        $("#reveal").hide();
    }
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