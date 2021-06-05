// Plan to have blank page 1 button, press to begin animation - start with green background and counter at 0, building up as graph is drawing, showing dates along the way, background is slowly changing to red/dark red until hits today, and show the below JS code for population.

function maind() {
    startdate = new Date()
    now(startdate.getYear(), startdate.getMonth(), startdate.getDate(), startdate.getHours(), startdate.getMinutes(), startdate.getSeconds())
}


function ChangeValue(number, pv) {
    numberstring = ""
    var j = 0
    var i = 0
    while (number > 1) {

        numberstring = (Math.round(number - 0.5) % 10) + numberstring
        number = number / 10
        j++
        if (number > 1 && j == 3) {
            numberstring = "," + numberstring
            j = 0
        }
        i++
    }

    numberstring = numberstring

    if (pv == 1) {
        document.getElementById("worldpop").innerHTML = numberstring
    }
}


function now(year, month, date, hours, minutes, seconds) {
    startdatum = new Date(year, month, date, hours, minutes, seconds)

    var now = 5600000000.0
    var now2 = 5690000000.0
    var groeipercentage = (now2 - now) / now * 100
    var groeiperseconde = (now * (groeipercentage / 100)) / 365.0 / 24.0 / 60.0 / 60.0
    nu = new Date()
    schuldstartdatum = new Date(96, 1, 1)
    secondenoppagina = (nu.getTime() - startdatum.getTime()) / 1000
    totaleschuld = (nu.getTime() - schuldstartdatum.getTime()) / 1000 * groeiperseconde + now
    ChangeValue(totaleschuld, 1);


    timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())", 200)
}

window.onload = maind


// chart.js
// Population estimates: https://en.wikipedia.org/wiki/World_population_estimates

// include better timeline with https://dima117.github.io/Chart.Scatter/ ?

Chart.defaults.global.legend.display = false;

var ctx = document.getElementById("myChart");
var myChart = new Chart.Line(ctx, {
    type: 'line',
    data: {
        labels: ['10,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '9,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '8,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '7,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '6,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '5,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '4,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '3,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '2,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '1,000 BC', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', '0', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000', '1100', '1200', '1300', '1400', '1500', '1600', '1700', '1800', '1900', '2000', '2015', '2020', '2025', '2030', '2035', '2040', '2045', '2050'],
        datasets: [{
            data: ['2', '2', '2', '2', '2', '2', '2', '2', '2', '2', '4', '4', '4', '4', '4', '4', '4', '4', '4', '4', '5', '5', '5', '5', '5', '5', '5', '5', '5', '5', '8', '8', '8', '8', '8', '8', '8', '8', '8', '8', '11', '11', '11', '11', '11', '11', '11', '11', '11', '11', '18', '18', '18', '18', '18', '18', '18', '18', '18', '18', '28', '28', '28', '28', '28', '28', '28', '28', '28', '28', '45', '45', '45', '45', '45', '45', '45', '45', '45', '45', '72', '72', '72', '72', '72', '72', '72', '72', '72', '72', '115', '115', '115', '115', '115', '115', '115', '115', '150', '150', '188', '195', '202', '205', '209', '210', '213', '226', '240', '269', '295', '353', '393', '392', '390', '461', '554', '603', '989', '1654', '6089', '7256'],
            fillColor: "rgba(151,205,187,0.2)",
            strokeColor: "rgba(151,205,187,1)",
            pointColor: "rgba(151,205,187,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(151,205,187,1)",
        }, {
            data: ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', 'null', '7256', '7758', '8142', '8501', '8839', '9157', '9454', '9725'],
            fillColor: "rgba(205,151,187,0.2)",
            strokeColor: "rgba(205,151,187,1)",
            pointColor: "rgba(205,151,187,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(205,151,187,1)",
        }]
    },
    options: {
        scales: {
            xAxes: [{
                position: "bottom",
                time: {
                    // string/callback - By default, date objects are expected. You may use a pattern string from https://momentjs.com/docs/#/parsing/string-format/ to parse a time string format, or use a callback function that is passed the label, and must return a moment() instance.
                    parser: false,
                    // string - By default, unit will automatically be detected.  Override with 'week', 'month', 'year', etc. (see supported time measurements)
                    unit: false,

                    // Number - The number of steps of the above unit between ticks
                    unitStepSize: 1,

                    // string - By default, no rounding is applied.  To round, set to a supported time unit eg. 'week', 'month', 'year', etc.
                    round: false,

                    // Moment js for each of the units. Replaces `displayFormat`
                    // To override, use a pattern string from https://momentjs.com/docs/#/displaying/format/
                    displayFormats: {
                        'year': 'YYYY', // 2015
                    },
                    // Sets the display format used in tooltip generation
                    tooltipFormat: ''
                },
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});