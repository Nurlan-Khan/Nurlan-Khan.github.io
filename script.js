window.odometerOptions = {
    format: " ddd", // https://github.hubspot.com/odometer/ Change how digit groups are formatted, and how many digits are shown after the decimal point
};

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
            numberstring = "" + numberstring
            j = 0
        }
        i++
    }

    numberstring = numberstring

    if (pv == 1) {
        document.getElementById("odometer").innerHTML = numberstring
    }
}


function now(year, month, date, hours, minutes, seconds) {
    startdatum = new Date(year, month, date, hours, minutes, seconds)

    /* после получения новых данных на 1 число, меняем "var now" (1 мая), var now2 и месяц в schuldstartdatum (1 мая) */

    var now = 18962892.0 /* 1 мая, текущая фактическая численность на 1 число */
    var now2 = 19007850.0 /* 1 июля, прогноз на 1 число через 2 месяца (численность, к которой будет стремиться счетчик) */
    var groeipercentage = (now2 - now) / now * 100
    var groeiperseconde = (now * (groeipercentage / 100)) / 60.0 / 24.0 / 60.0 / 60.0
    nu = new Date()
    schuldstartdatum = new Date(2021, 4, 1) /* (год, месяц, число), дата, от которой идет отсчет счетчика,"4" это май*/
    secondenoppagina = (nu.getTime() - startdatum.getTime()) / 1000
    totaleschuld = (nu.getTime() - schuldstartdatum.getTime()) / 1000 * groeiperseconde + now
    ChangeValue(totaleschuld, 1);


    timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())", 200)
}

window.onload = maind