var xmlhttp = new XMLHttpRequest();
var url = "http://www.wafflecoder.net/static/assignment6.json";

xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
        out += '<table border="1">';

    for(i = 0; i < arr.length; i++) {
        out += '<tr>';
        out += '<td>' + arr[i].Name  + '</td>';
        out += '<td><a href="' + arr[i].URL + '" target="_blank" >' + arr[i].URL + '</a></td>';
        out += '<tr>';

    }

        out += '</table>';

    document.getElementById("output").innerHTML = out;
}