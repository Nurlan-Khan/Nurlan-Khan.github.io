Highcharts.chart('container', {

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
            fontFamily: 'inherit'
        },

        events: {
            load: function() {

                // set up the updating of the chart each second
                var series = this.series[0];
                var pop = [6591.6, 6812.9, 7078.3, 7185.6, 7355.4, 7700.8, 8282.7, 8568.2, 8876.0, 9278.4, 9754.8, 10236.0, 10723.0, 11192.0, 11449.0, 11771.0, 12047.0, 12323.0, 12588.0, 12800.0, 13006.0, 13211.0, 13430.0, 13637.0, 13847.0, 14063.0, 14209.0, 14349.0, 14501.0, 14682.3, 14819.2, 14971.2, 15127.0, 15282.1, 15434.8, 15586.0, 15730.9, 15899.2, 16047.7, 16190.9, 16295.3, 16355.5, 16451.7, 16426.5, 16334.9, 15956.7, 15675.8, 15480.6, 15188.2, 14955.1, 14901.6, 14865.6, 14851.1, 14866.8, 14951.2, 15074.8, 15219.3, 15396.9, 15571.5, 15982.4, 16203.3, 16440.5, 16673.9, 16910.2, 17160.9, 17415.7, 17669.9, 17918.2, 18157.3, 18395.6, 18631.8, 18879.6];
                var year = [1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

                let i = 5;
                let id = setInterval(function run() {

                    if (i == pop.length) {
                        clearInterval(id);
                    } else {
                        var x = year[i], // current time
                            y = pop[i];
                        series.addPoint([y, x], true, false);
                    }

                    i++

                }, 500);

            }
        }
    },

    time: {
        useUTC: false
    },

    accessibility: {
        announceNewData: {
            enabled: true,
            minAnnounceInterval: 15000,
            announcementFormatter: function(allSeries, newSeries, newPoint) {
                if (newPoint) {
                    return 'New point added. Value: ' + newPoint.y;
                }
                return false;
            }
        }
    },


    accessibility: {
        description: 'This line chart uses the Highcharts Annotations feature to place labels at various points of interest. The labels are responsive and will be hidden to avoid overlap on small screens. Image description: An annotated line chart illustrates the 8th stage of the 2017 Tour de France cycling race from the start point in Dole to the finish line at Station des Rousses. Altitude is plotted on the Y-axis, and distance is plotted on the X-axis. The line graph is interactive, and the user can trace the altitude level along the stage. The graph is shaded below the data line to visualize the mountainous altitudes encountered on the 187.5-kilometre stage. The three largest climbs are highlighted at Col de la Joux, Côte de Viry and the final 11.7-kilometer, 6.4% gradient climb to Montée de la Combe de Laisia Les Molunes which peaks at 1200 meters above sea level. The stage passes through the villages of Arbois, Montrond, Bonlieu, Chassal and Saint-Claude along the route.',
        landmarkVerbosity: 'one'
    },

    lang: {
        accessibility: {
            screenReaderSection: {
                annotations: {
                    descriptionNoPoints: '{annotationText}, at distance {annotation.options.point.x}km, elevation {annotation.options.point.y} meters.'
                }
            }
        }
    },

    caption: {
        text: '<em>Источники данных: архивные данные, Бюро национальной статистики РК.</em>'
    },

    title: {
        text: 'История населения Казахстана с 1950 года',
        margin: 15,
        style: {
            fontSize: '20px',
        }
    },

    subtitle: {
        text: 'на начало года, в тыс. человек',
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
        headerFormat: '{point.x:.0f} год<br>',
        pointFormat: '<b>{point.y}</b><br/>',
        /*'{series.name}: <b>{point.y}</b><br/>' */
        valueSuffix: ' тыс. чел.',
        shared: true
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
            [6591.6, 1950],
            [6812.9, 1951],
            [7078.3, 1952],
            [7185.6, 1953],
            [7355.4, 1954]
        ],

        zoneAxis: 'x',
        zones: [{
                value: 1993,
                className: 'zone-0',
                color: '#3984B9',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0.3,
                        y2: 0.8
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
                        x2: 0.3,
                        y2: 0.8
                    },
                    stops: [
                        [0, Highcharts.getOptions().colors[8]],
                        [1, Highcharts.color(Highcharts.getOptions().colors[8]).setOpacity(0).get('rgba')]
                    ]
                },
            },
            {
                value: 2011.0001,
                className: 'zone-1',
                color: '#2ca25f',
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0.3,
                        y2: 0.8
                    },
                    stops: [
                        [0, '#2ca25f'],
                        [1, Highcharts.color('#2ca25f').setOpacity(0).get('rgba')]
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
                        x2: 0.3,
                        y2: 0.8
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
        min: 6250,
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

    /*  annotations: [{
          draggable: '',
          labelOptions: {
              borderRadius: 5,
              backgroundColor: 'rgba(255, 255, 225, 0.75)',
              /* если не устанавливать backgroundColor:, то по умолчанию фон черный*/
    /* verticalAlign: 'top',*/
    /* если необходимо ниже кривой, то: verticalAlign: 'top', y: 15; выше кривой: bottom */
    /*       borderWidth: 1,
            borderColor: '#AAA',
            padding: 4,
            distance: -50,
            shadow: true,
            allowOverlap: 0
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1991,
                y: 16426.5,
            },
            text: 'Появление тенге',
        }, {
            crop: true,
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1994,
                y: 16334.9,
            },
            text: 'Из РК эммигрировало<br>480 тыс. человек',
        }, {
            crop: true,
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1995,
                y: 15956.7,
            },
            text: 'Ожидаемая продолжительность жизни 63.5 лет<br>(самое низкое значение за годы независимости РК)',
        }, {
            crop: true,
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2004,
                y: 14951.2,
            },
            text: 'С начала независимости РК впервые сложилось положительное сальдо внешней миграции',
        }, {
            crop: true,
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2008,
                y: 15571.5,
            },
            text: 'Казахстан перешел на новые критерии живорождения, рекомендованные ВОЗ',
        }, {
            crop: true,
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 2021,
                y: 18879.6,
            },
            text: 'родилось рекордное число детей (426,8 тыс.) за всю историю Казахстана<br>умерло 161333 человек, что больше среднего ежегодного значения за последнте 10 лет на 25 тыс. человек',
        }]
    }, {
        draggable: '',
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1990,
                y: 15675.8
            },
            x: -10,
            text: 'Col de la Joux'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 138.5,
                y: 748
            },
            text: 'Côte de Viry'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 176.4,
                y: 1202
            },
            text: 'Montée de la Combe <br>de Laisia Les Molunes'
        }]
    }, {
        draggable: '',
        labelOptions: {
            shape: 'connector',
            align: 'right',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.8em',
                textOutline: '1px white'
            }
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 1990,
                y: 14851.1
            },
            text: '6.1 km climb <br>4.6% on avg.'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 134.5,
                y: 540
            },
            text: '7.6 km climb <br>5.2% on avg.'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 172.2,
                y: 925
            },
            text: '11.7 km climb <br>6.4% on avg.'
        }] 

    }] */
});