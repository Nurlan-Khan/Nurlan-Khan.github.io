# Nurlan-Khan.github.io
Мой сайт
<html>
<body style="text-align: center; font-family:helvetica;">

<script type="text/javascript">

/*
* Derived from World Populution Counter - based on JavaScript Kit (http://www.javascriptkit.com) and code by Adam Brown
*/

function maind(){
	startdate = new Date()
	now(startdate.getYear(),startdate.getMonth(),startdate.getDate(),startdate.getHours(),startdate.getMinutes(),startdate.getSeconds())
}


function ChangeValue(number,pv){
	numberstring =""
	var j=0 
	var i=0
	while (number > 1)
	 { 

	    numberstring = (Math.round(number-0.5) % 10) + numberstring
	    number= number / 10
	    j++
	    if (number > 1 && j==3) { 
			numberstring = "," + numberstring 
			j=0}
	    i++
	 }

	 numberstring=numberstring

if (pv==1) {document.getElementById("mobilepop").innerHTML=numberstring }
}

function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}



function now(year,month,date,hours,minutes,seconds){       
startdatum = new Date(year,month,date,hours,minutes,seconds)

var tot2011 = getUrlVars()["tot2011"];
var growthpersecond = getUrlVars()["gps"];
var title = getUrlVars()["title"];

document.getElementById("title").innerHTML=decodeURI(title);


/*var tot2011 = 5400000000.0
var growthpersecond = 19.03*/

nu = new Date ()                
startdatum2011 = new Date (2011,1,1)                            
totalnow= (nu.getTime() - startdatum2011.getTime())/1000.0*growthpersecond + parseFloat(tot2011)
ChangeValue(totalnow,1);


timerID = setTimeout("now(startdatum.getYear(),startdatum.getMonth(),startdatum.getDate(),startdatum.getHours(),startdatum.getMinutes(),startdatum.getSeconds())",200)
}

window.onload=maind
</script>

<br />
<br />
<br />
<br />
<br />
Estimated number of <span id="title"></span>
<br />

<div id="mobilepop" style="font-weight: bold;font-size: 128;"></div>

<br />



</body>
</html>
