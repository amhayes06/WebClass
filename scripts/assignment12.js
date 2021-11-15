let requestURL = "./static/assignment12.json";
let request = new XMLHttpRequest();
const dbParam = JSON.stringify({table:"CMS"})

request.onload = function() {
    const data = JSON.parse(this.responseText);
    populateTable(data);
}

function populateTable(jsonObj) {
    let text = "<table><th>Phase</th><th>Image</th><th>Details</th>"
    for (let x in jsonObj) {
        text += "<tr><td>" + jsonObj[x].site + "</td>"
        text += "<td><img src=\"" + jsonObj[x].image + "\"></td>"
        text += "<td>" + jsonObj[x].details + "</td></tr>"
    }
    text += "</table>"
    document.getElementById("table").innerHTML = text;
}

request.open('GET', requestURL);
request.send("x=" + dbParam);