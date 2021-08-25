$(window).load(function(){

    var a = 0;
    var b = 0;
    var c = 0;
    var n = 0;
    var x = new Array();
    var y = new Array();
    var v = new Array();

    function calculateY(a, b, c, x) {
      return a * x * x + b * x + c;
    }

    function calculate() {
      a = Number($('#a').val());
      b = Number($('#b').val());
      c = Number($('#c').val());
      var xmin = Number($('#xmin').val());
      var xmax = Number($('#xmax').val());
      var xt = 0;


      var i = 0;
      for (xt = xmin; xt <= xmax; xt++) {
        x[i] = xt;
        y[i] = calculateY(a, b, c, xt);
        v[i] = [x[i], y[i]];
        i++;
      }
      n = i - 1;

    }

    function displayValues() {
      var s = "";

      s = "Y = ";
      s += a + " x<sup>2</sup> + ";
      s += b + " x + ";
      s += c + "<br>";

      for (var i = 0; i <= n; i++) {
        s += " Y = " + y[i] + "  @ X = " + x[i] + "<br/>";
      }

      output.innerHTML = s;
    }

    function plotValues() {
      calculate();
      chart = new Highcharts.Chart({
        chart: {
          renderTo: 'container',
          type: 'line',
          marginRight: 130,
          marginBottom: 25
        },
        title: {
          text: 'Equation Graph',
          x: -20
        },
        xAxis: {
          title: {
            text: 'X'
          }
        },
        yAxis: {
          title: {
            text: 'Y'
          }
        },

        plotOptions: {
          scatter: {
            marker: {
              radius: 5,
              states: {
                hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)'
                }
              }
            },
            states: {
              hover: {
                marker: {
                  enabled: false
                }
              }
            }
          }
        },

        series: [{
          name: 'Mouseover Dot To See Y Values',
          color: 'rgba(223, 83, 83, .5)',
          data: v
        }]
      })
    }

    $('#calculate').click(function() {
      calculate();
      displayValues();
    });

    $('#plot').click(function() {
      calculate();
      plotValues();
    });
    });