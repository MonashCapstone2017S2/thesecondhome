Survey.Survey.cssType = "bootstrap";
Survey.defaultBootstrapCss.navigationButton = "btn btn-green";

window.survey = new Survey.Model( { questions: [
    {name:"name", type:"text", title: "Please enter your name:", placeHolder:"Jon Snow", isRequired: true},
    {name:"birthdate", type:"text", inputType:"date", title: "Your birthdate:", isRequired: true},
    {name:"email", type:"text", inputType:"email", title: "Your e-mail:", placeHolder:"jon.snow@nightwatch.org", isRequired: true, validators: [{type:"email"}]},
    {name:"kidName", type:"text", title: "Please enter the name of the child", isRequired: true},
    { type: "radiogroup", name: "kidGender", title: "Please select the gender of the child", isRequired: true,
        colCount: 4, choices: ["Boy","Girl"]},
    { type: "dropdown", name: "Age", title: "What is the age of the child?", isRequired: true, colCount: 0,
        choices: ["0-6", "6-10", "10-14", "14-18"] },
    { type: "dropdown", name: "Relationship", title: "What is the relationship between you and the child?", isRequired: true, colCount: 0,
        choices: ["Neighborhood", "Friends", "Church Member", "Teacher", "Distant Relative", "Others"] },
    { type: "dropdown", name: "Friends", title: "How many friends do the child have?", isRequired: false, colCount: 0,
        choices: ["Few Friend", "One or Two Friends", "Many Friends", "Not Sure"] },
    { type: "checkbox", name: "Sports", title: "Have you noticed that the child engaged in any sports?", isRequired: false,
        colCount: 4, choices: ["Footy", "Basketball", "Tennis", "Swimming", "Skating", "Cycling"] },
    { type: "dropdown", name: "SocialEvents", title: "Does the child participate in community or church activities?", isRequired: false, colCount: 0,
        choices: ["Never", "Occasionally", "Frequently", "Not Sure"] },
    { type: "rating", name: "Emotion", title: "What do you think of the child's daily emotion?",
        mininumRateDescription: "Depressed", maximumRateDescription: "Optimistic" },
    { type: "comment", name: "SpecialSituation", title:"Have you noticed some special situation for this kids?(For Example: Domestic Violence)" }
]});
survey.onComplete.add(function(result) {
    document.querySelector('#surveyResult').innerHTML = "result: " + JSON.stringify(result.data);
});


$("#surveyElement").Survey({model:survey});