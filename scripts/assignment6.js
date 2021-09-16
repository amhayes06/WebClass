let requestURL = "./static/assignment6.json";
let request = new XMLHttpRequest();
const table = document.querySelector('header');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    const data = request.response;
    populateTable(data);
}

function populateTable(jsonObj) {
    let text = "<table border='1'>"
    for (let x in jsonObj) {
        text += "<tr><td>" + jsonObj[x].firstName + "</td></tr>"
    }
    text += "</table>"
    document.getElementById("table").innerHTML = text;
}