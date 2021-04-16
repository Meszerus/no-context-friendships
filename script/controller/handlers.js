$("#randomise").click(() => {
    randomiseQuote();
});

$("#new").click(() => {
    const emailUser = "deicideisfun";
    const emailDomain = "gmail.com"
    window.open(`mailto:${emailUser}@${emailDomain}?subject=new-quote`);
});