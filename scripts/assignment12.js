let requestURL = "./static/assignment12.json";
let request = new XMLHttpRequest();
const dbParam = JSON.stringify({table:"CMS"})

request.onload = function() {
    const data = JSON.parse(this.responseText);
    populateTable(data);
}

function populateTable(jsonObj) {
    let text = "<table><th>Site Name</th><th>Image</th><th>Produced By</th><th>Technology Base</th><th>Major Capabilities</th><th>Major Limitations</th><th>Details</th>"
    for (let x in jsonObj) {
        text += "<tr><td>" + jsonObj[x].site + "</td>"
        text += "<td><img src=\"" + jsonObj[x].image + "\"></td>"
        text += "<td>" + jsonObj[x].produced + "</td>"
        text += "<td>" + jsonObj[x].tech + "</td>"
        text += "<td>" + jsonObj[x].pros + "</td>"
        text += "<td>" + jsonObj[x].cons + "</td>"
        text += "<td>" + jsonObj[x].details + "</td></tr>"
    }
    text += "</table>"
    document.getElementById("table").innerHTML = text;
}

request.open('GET', requestURL);
request.send("x=" + dbParam);