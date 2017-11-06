$(document).ready(function() {
    $('#death-table').DataTable( {
        "ajax": 'data.txt',


    } );
    buildChart();
    loadData();
} );

// this is the line chart for deaths in the top ten states

function buildChart(){
  var chart = c3.generate({
      bindto: '#chart',
      data: {
        columns: [
            ['1999', 2662, 997, 283, 825, 959, 366, 467, 990, 1087],
            ['2015', 4659, 3228, 1302, 1835, 2754, 1567, 3310, 3264, 2588],
        ],
        colors: {
            '1999': '#619FCF',
            '2015': '#124269',
        },
      },
// these are the labels for my states
      axis: {
        x: {
            type: 'category',
            categories: ['CA', 'FL', 'GA', 'IL', 'NY', 'NC', 'OH', 'PA', 'TX'],
            label: 'States'
        },

        y: {
          label: {
            text: 'Drug Related Deaths Deaths',
            position: 'outer-middle',

          },



        },


      }
  });
// this is the smaller line chart for deaths in california between 1999-2015
  var chart = c3.generate({
      bindto: '#chart-cali',
      data: {
        columns: [

            ['Drug Related Deaths', 2662, 2975, 3125, 3494, 3863, 4057, 4040, 4659],
        ],
        // this is one of  the colors i use throughout the charts
        colors: {
          // this one is lighter blue
            'Drug Related Deaths': '#619FCF',

        },
      },

      axis: {
        x: {
            type: 'category',
            categories: ['99', '02', '04', '06', '08', '10', '12', '15'],
            label: 'Year'
        },

        y: {
          label: {
            text: 'Number of Deaths',
            position: 'outer-middle',
            font: 'Cursive'
          },



        },


      }
  });
};
  // pie chart for california

  var chart = c3.generate({
    bindto: '#death-chart',
    data: {
        
        columns: [
            ['Drug Related Deaths in California Since 1999', 59427],
            ['Total Drug Related Deaths Since 1999', 568842],
        ],
        colors: {
            'Drug Related Deaths in California Since 1999': '#124269',
            'Total Drug Related Deaths Since 1999': '#619FCF',
        },
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});



// pie chart for ohio

var chart = c3.generate({
  bindto: '#death-chart2',
    data: {

        columns: [
            ['Drug Related Deaths in Ohio Since 1999', 26314],
            ['Total Drug Related Deaths Since 1999', 568842],
        ],
        colors: {
            'Drug Related Deaths in Ohio Since 1999': '#124269',
            'Total Drug Related Deaths Since 1999': '#619FCF',
        },
        type : 'pie',
        onclick: function (d, i) { console.log("onclick", d, i); },
        onmouseover: function (d, i) { console.log("onmouseover", d, i); },
        onmouseout: function (d, i) { console.log("onmouseout", d, i); }
    }
});



// map chart 2015 javascript
var map = AmCharts.makeChart( "chartdiv", {
  "type": "map",
  "theme": "light",
  "colorSteps": 10,

  "dataProvider": {
    "map": "usaLow",
    "areas": [ {
      "id": "US-AL",
      "value": 736
    }, {
      "id": "US-AK",
      "value": 122
    }, {
      "id": "US-AZ",
      "value": 1274
    }, {
      "id": "US-AR",
      "value": 392
    }, {
      "id": "US-CA",
      "value": 4659
    }, {
      "id": "US-CO",
      "value": 869
    }, {
      "id": "US-CT",
      "value": 800
    }, {
      "id": "US-DE",
      "value": 198
    }, {
      "id": "US-FL",
      "value": 3228
    }, {
      "id": "US-GA",
      "value": 1302
    }, {
      "id": "US-HI",
      "value": 169
    }, {
      "id": "US-ID",
      "value": 218
    }, {
      "id": "US-IL",
      "value": 1835
    }, {
      "id": "US-IN",
      "value": 1245
    }, {
      "id": "US-IA",
      "value": 309
    }, {
      "id": "US-KS",
      "value": 329
    }, {
      "id": "US-KY",
      "value": 1273
    }, {
      "id": "US-LA",
      "value": 861
    }, {
      "id": "US-ME",
      "value": 269
    }, {
      "id": "US-MD",
      "value": 1285
    }, {
      "id": "US-MA",
      "value": 1724
    }, {
      "id": "US-MI",
      "value": 1980
    }, {
      "id": "US-MN",
      "value": 581
    }, {
      "id": "US-MS",
      "value": 351
    }, {
      "id": "US-MO",
      "value": 1066
    }, {
      "id": "US-MT",
      "value": 138
    }, {
      "id": "US-NE",
      "value": 126
    }, {
      "id": "US-NV",
      "value": 619
    }, {
      "id": "US-NH",
      "value": 422
    }, {
      "id": "US-NJ",
      "value": 1454
    }, {
      "id": "US-NM",
      "value": 501
    }, {
      "id": "US-NY",
      "value": 2754
    }, {
      "id": "US-NC",
      "value": 1567
    }, {
      "id": "US-ND",
      "value": 61
    }, {
      "id": "US-OH",
      "value": 3310
    }, {
      "id": "US-OK",
      "value": 725
    }, {
      "id": "US-OR",
      "value": 505
    }, {
      "id": "US-PA",
      "value": 3264
    }, {
      "id": "US-RI",
      "value": 310
    }, {
      "id": "US-SC",
      "value": 761
    }, {
      "id": "US-SD",
      "value": 65
    }, {
      "id": "US-TN",
      "value": 1457
    }, {
      "id": "US-TX",
      "value": 2588
    }, {
      "id": "US-UT",
      "value": 646
    }, {
      "id": "US-VT",
      "value": 99
    }, {
      "id": "US-VA",
      "value": 1039
    }, {
      "id": "US-WA",
      "value": 1094
    }, {
      "id": "US-WV",
      "value": 725
    }, {
      "id": "US-WI",
      "value": 878
    }, {
      "id": "US-WY",
      "value": 96
    } ]
  },

  "areasSettings": {
    "autoZoom": true
  },

  "valueLegend": {
    "right": 10,
    "minValue": "little",
    "maxValue": "a lot!"
  },

  "export": {
    "enabled": true
  }

} );
