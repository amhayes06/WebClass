let requestURL = "./static/assignment6.json";
let request = new XMLHttpRequest();
const dbParam = JSON.stringify({table:"Employees"})

request.onload = function() {
    const data = JSON.parse(this.responseText);
    populateTable(data);
}

function populateTable(jsonObj) {
    let text = "<table><th>Phase</th><th>"
    for (let x in jsonObj) {
        text += "<tr><td>" + jsonObj[x].firstName + "</td>"
        text += "<td><img src=\"" + jsonObj[x].image + "\"></td></tr>"
    }
    text += "</table>"
    document.getElementById("table").innerHTML = text;
}

request.open('GET', requestURL);
request.send("x=" + dbParam);