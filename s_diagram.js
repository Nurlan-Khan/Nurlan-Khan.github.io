var name_title = '1950 жылдан бастап Қазақстан халық тарихы';
var name_subtitle = 'жыл басына, мың  адам';
var name_caption = 'Деректер дереккөзі: архив деректері, ҚР Ұлттық статистика бюросы.';
var name_headerFormat = ' жыл';
var name_pointFormat = ' мың адам';


var myChart = Highcharts.chart('container', {

    chart: {

        type: 'area',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,


        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 120,
            scrollPositionX: 1
        },
        style: {
            fontFamily: 'inherit',

        },

        events: {
            load: function() {

                // set up the updating of the chart each second
                var series = this.series[0];
                var pop = [6591.6, 6812.9, 7078.3, 7185.6, 7355.4, 7700.8, 8282.7, 8568.2, 8876.0, 9278.4, 9754.8, 10236.0, 10723.0, 11192.0, 11449.0, 11771.0, 12047.0, 12323.0, 12588.0, 12800.0, 13006.0, 13211.0, 13430.0, 13637.0, 13847.0, 14063.0, 14209.0, 14349.0, 14501.0, 14682.3, 14819.2, 14971.2, 15127.0, 15282.1, 15434.8, 15586.0, 15730.9, 15899.2, 16047.7, 16190.9, 16295.3, 16355.5, 16451.7, 16426.5, 16334.9, 15956.7, 15675.8, 15480.6, 15188.2, 14955.1, 14901.6, 14865.6, 14851.1, 14866.8, 14951.2, 15074.8, 15219.3, 15396.9, 15571.5, 15982.4, 16203.3, 16440.5, 16673.9, 16910.2, 17160.9, 17415.7, 17669.9, 17918.2, 18157.3, 18395.6, 18631.8, 18879.6];
                var year = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];


                let i = 0;
                let id = setInterval(function run() {

                    if (i == pop.length) {
                        clearInterval(id);
                        alert("Hello! I am an alert box!!"); // всплывающее окно
                    } else {
                        var x = year[i], // current time
                            y = pop[i];
                        series.addPoint([y, x], true, false);

                    }

                    i++

                }, 500);

            },

            click: function() {
                this.update({
                    chart: {
                        width: document.getElementById('container').clientWidth,
                        //document.documentElement.clientWidth;
                        //window.innerHeight;
                        height: document.getElementById('container').clientHeight,

                    }
                });
            },

            //            chart: {
            //                renderTo: document.getElementById('container')
            //            },

            render: function() {
                points = this.series[0].points;
                this.tooltip.refresh(points[points.length - 1]);

                //document.getElementById("container").style.width = "auto"
            }
        }
    },


    caption: {
        text: '<em>' + name_caption + '</em>'
    },

    title: {
        text: name_title,
        margin: 15,
        style: {
            fontSize: '20px',
        }
    },

    subtitle: {
        text: name_subtitle,
        style: {
            fontSize: '14px',
        }
    },


    credits: {
        enabled: false,
        text: 'Бюро национальной статистики РК',
        href: 'http://www.stat.gov.kz'
    },



    tooltip: {

        headerFormat: '{point.x:.0f} ' + name_headerFormat + ' <br>',
        pointFormat: '<b>{point.y}</b><br/>',
        /*'{series.name}: <b>{point.y}</b><br/>' */
        valueSuffix: name_pointFormat,
        shared: true,
        stickOnContact: true

    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    xAxis: {
        /* labels: {
                 format: '{text} год'
        },*/
        type: 'category',
        tickPixelInterval: 100,

        /*plotLines: [{
            color: 'orange',
            width: 2,
            value: 1993,
            dashStyle: 'shortdash',
            label: {
                text: '',
                style: {
                    color: 'orange',
                    fontWeight: 'bold'
                },
                rotation: 0,
                textAlign: 'right',
                x: -3
            }
        }, {
            color: 'orange',
            width: 2,
            value: 2011,
            dashStyle: 'shortdash',
            label: {
                text: '',
                style: {
                    color: 'orange',
                    fontWeight: 'bold'
                },
                rotation: 0,
                textAlign: 'right',
                x: -3
            },


        }],*/

    },

    series: [{
        name: 'Население',
        keys: ['y', 'x'],
        data: [
            /*            [6591.6, 1950],
                        [6812.9, 1951],
                        [7078.3, 1952],
                        [7185.6, 1953],
                        [7355.4, 1954]  */
        ],

        id: 'dataseries',
        zoneAxis: 'x',
        zones: [{
                value: 1993,
                className: 'zone-0',
                color: '#3984B9',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
            },
            {
                value: 2002.0001,
                className: 'zone-1',
                color: 'red',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[8]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[8]).setOpacity(0).get('rgba')]
                    ]
                },
            },
            {
                className: 'zone-0',
                color: '#3984B9',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[0]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                    ]
                },
            }
        ],

        /*pointStart: 1991,*/
        /*pointInterval: 5,*/
        /*threshold: 16452,*/
        /*negativeColor: 'red',*/
        /*color: '#3984B9',*/
        /*tooltip: {
            valueDecimals: 2
        }*/
    }],

    yAxis: {
        min: 0,
        /*6250*/
        startOnTick: false,
        endOnTick: false,
        maxPadding: 0.25,

        title: {
            text: ''
        },
        labels: {
            format: '{value}'
        },

    },
    /* 
       annotations: [{

            labelOptions: {
                borderRadius: 5,
                backgroundColor: {
                    linearGradient: [0, 0, 0, 60],
                    stops: [
                        [0, '#FFFFFF'],
                        [1, '#E0E0E0']
                    ]
                },
                /* если не устанавливать backgroundColor:, то по умолчанию фон черный*/
    /*   verticalAlign: 'top',
       /* если необходимо ниже кривой, то: verticalAlign: 'top', y: 15; выше кривой: bottom */
    /*    y: 15,
            borderWidth: 1,
            borderColor: '#AAA',
            padding: 5,
            distance: -50,
            shadow: true,

            style: {
                fontSize: '12px',
                fontWeight: 'bold',
                color: 'black'
            },

        },
        labels: [{
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1951.5,
                y: 6812.9,
            },
            text: '1951<br>7 млн. человек',
            id: '7',
            zIndex: 7
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1955.5,
                y: 7700.8,
                draggable: ''
            },
            text: '1955<br>8 млн. человек',
            id: '8',
            zIndex: 8,
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1958.5,
                y: 8876.0,
            },
            text: '1958<br>9 млн. человек',
            id: '9',
            zIndex: 9
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1960.5,
                y: 9754.8,
            },
            text: '1960<br>10 млн. человек',
            id: '10',
            zIndex: 10
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1962.5,
                y: 10723.0,
            },
            text: '1962<br>11 млн. человек',
            id: '11',
            zIndex: 11
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1965.5,
                y: 11771.0,
            },
            text: '1965<br>12 млн. человек',
            id: '12',
            zIndex: 12
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1969.5,
                y: 12800.0,
                draggable: ''
            },
            text: '1969<br>13 млн. человек',
            id: '13',
            zIndex: 13
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1974.5,
                y: 13847.0,
            },
            text: '1974<br>14 млн. человек',
            id: '14',
            zIndex: 14
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1981.5,
                y: 14971.2,
            },
            text: '1981<br>15 млн. человек',
            id: '15',
            zIndex: 15
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1987.5,
                y: 15899.2,
            },
            text: '1987<br>16 млн. человек',
            id: '16',
            zIndex: 16
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2013.5,
                y: 16910.2,
            },
            text: '2013<br>17 млн. человек',
            id: '17',
            zIndex: 17
        }, {
            crop: false,
            distance: 20,
            allowOverlap: true,
            overflow: 'justify',
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2017.5,
                y: 17918.2,
            },
            text: '2017<br>18 млн. человек',
            id: '18',
            zIndex: 18
        }]
    }] */
});


/*myChart.addAnnotation({
    id: 8,
    labels: [{
        point: {
            xAxis: 0,
            yAxis: 0,
            x: 1951.5,
            y: 6812.9,
        },
        text: 'Hi there1'
    }]
});


myChart.addAnnotation({
    id: 9,
    labels: [{
        point: {
            xAxis: 0,
            yAxis: 0,
            x: 1965.5,
            y: 11771.0,
        },
        text: 'Hi there2'
    }]
});


/*var serie = chart.series[1];
serie[serie.visible ? 'hide' : 'show']();*/


/*
var pop_a = [6812.9, 7700.8, 8876.0, 9754.8, 10723.0, 11771.0, 12800.0, 13847.0, 14971.2, 15899.2, 16910.2, 17918.2];
var year_a = [1951.5, 1955.5, 1958.5, 1960.5, 1962.5, 1965.5, 1969.5, 1974.5, 1981.5, 1987.5, 2013.5, 2017.5];
var w = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]



var m = 1;
var n = 0;
let id = setInterval(function run() {

    if (m == pop_a.length) {
        clearInterval(id);

    } else {


        myChart.addAnnotation({
            id: m,
            labels: [{
                point: {
                    xAxis: 0,
                    yAxis: 0,
                    x: year_a[m],
                    y: pop_a[m],
                },
                text: (m + 7) + " v"
            }],


        });



        m = m + 1

    }


}, 500);



/*
if (m > n) {

    myChart.addAnnotation({
        id: m,
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: year_a[m],
                y: pop_a[m],
            },
            text: (m + 7) + " v"
        }]
    });

    n = n + 2

} else {
    m = m + 2
    myChart.removeAnnotation(7);


} */

// The button handler
//document.getElementById('button').addEventListener('click', function() {
//    myChart.fullscreen.toggle();
//});