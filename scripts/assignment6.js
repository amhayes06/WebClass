let requestURL = "./static/assignment6.json";
let request = new XMLHttpRequest();
const dbParam = JSON.stringify({table:"Employees"})

request.onload = function() {
    const data = JSON.parse(this.responseText);
    populateTable(data);
}

function populateTable(jsonObj) {
    let text = "<table border='1'>"
    for (let x in jsonObj) {
        text += "<tr><td>" + jsonObj[x].firstName + "</td></tr>"
    }
    text += "</table>"
    document.getElementById("table").innerHTML = jsonObj[1].firstName;
}

request.open('GET', requestURL);
request.send("x=" + dbPa);