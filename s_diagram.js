Highcharts.chart('container', {

    chart: {
        type: 'area',
        animation: Highcharts.svg, // don't animate in old IE
        marginRight: 10,

        zoomType: 'x',
        panning: true,
        panKey: 'shift',
        scrollablePlotArea: {
            minWidth: 600
        },
        style: {
            fontFamily: 'inherit'
        },

        events: {
            load: function() {

                // set up the updating of the chart each second
                var series = this.series[0];
                var pop = [16451.7, 16426.5, 16334.9, 15956.7, 15675.8, 15480.6, 15188.2, 14955.1, 14901.6, 14865.6, 14851.1, 14866.8, 14951.2, 15074.8, 15219.3, 15396.9, 15571.5, 15982.4, 16203.3, 16440.5, 16673.9, 16910.2, 17160.9, 17415.7, 17669.9, 17918.2, 18157.3, 18395.6, 18631.8, 18879.6];
                var year = [1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];

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

                }, 1000);

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
        text: 'Чтобы посмотреть конкретный исторический период, на графике нажмите и проведите мышью (пальцем) в районе интересующего Вас временного диапазона. Для возврата графика в исходное состояние, нажмите на появившуюся справа вверху кнопку "Reset zoom"'
    },

    title: {
        text: 'Население Казахстана за годы независимости',
        margin: 5
    },

    subtitle: {
        text: 'на начало года, в тыс. человек'
    },


    credits: {
        enabled: false,
        text: 'Бюро национальной статистики РК',
        href: 'http://www.stat.gov.kz'
    },

    series: [{
        name: 'Население',
        keys: ['y', 'x'],
        data: [
            [16451.7, 1992],
            [16426.5, 1993],
            [16334.9, 1994],
            [15956.7, 1995],
            [15675.8, 1996]
        ],
        threshold: 16452,
        negativeColor: 'red',
        color: '#3984B9',
        tooltip: {
            valueDecimals: 2
        }
    }],

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
        tickPixelInterval: 150,

    },

    yAxis: {
        startOnTick: true,
        endOnTick: false,
        maxPadding: 0.25,

        title: {
            text: ''
        },
        labels: {
            format: '{value}'
        },
        plotLines: [{
            label: {
                text: '',
            },
            color: 'orange',
            width: 2,
            value: 16452,
            dashStyle: 'Dash'
        }]
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