var inputText = document.querySelector("#input");
var btnSumbit = document.querySelector("#btn-sumbit");
var outputText = document.querySelector("#output");

serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong with server! try again after some time")
}

function clickHandler(){
     var textInput = inputText.value;

    fetch(getTranslationURL(textInput))
        .then(response => response.json())
        .then(json => {
            var textOutput = json.contents.translated;
            outputText.innerText = textOutput;
        })
        .catch(errorHandler)
}

btnSumbit.addEventListener("click", clickHandler);
