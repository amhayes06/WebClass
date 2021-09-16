let requestURL = "./static/assignment6.json";
let request = new XMLHttpRequest();
const table = document.querySelector('header');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const dataText = request.response;
    const data = JSON.parse(dataText);
    populateTable(data);
}

function populateTable(jsonObj) {
    for (let x in jsonObj) {
        text += "<tr><td>" + jsonObj[x].name + "</td></tr>"
    }
    text += "</table>"
    document.getElementById("table").innerHTML = text;
}