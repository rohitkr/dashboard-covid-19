"use strict";

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

var mapMetaData = {
  "fo": "FO",
  "faroe islands": "FO",
  "um": "UM",
  "united states minor outlying islands": "UM",
  "us": "US",
  "united states of america": "US",
  "jp": "JP",
  "japan": "JP",
  "sc": "SC",
  "seychelles": "SC",
  "in": "IN",
  "india": "IN",
  "fr": "FR",
  "france": "FR",
  "fm": "FM",
  "federated states of micronesia": "FM",
  "cn": "CN",
  "china": "CN",
  "pt": "PT",
  "portugal": "PT",
  "sw": "SW",
  "serranilla bank": "SW",
  "sh": "SH",
  "scarborough reef": "SH",
  "br": "BR",
  "brazil": "BR",
  "ki": "KI",
  "kiribati": "KI",
  "ph": "PH",
  "philippines": "PH",
  "mx": "MX",
  "mexico": "MX",
  "es": "ES",
  "spain": "ES",
  "bu": "BU",
  "bajo nuevo bank (petrel is.)": "BU",
  "mv": "MV",
  "maldives": "MV",
  "sp": "SP",
  "spratly islands": "SP",
  "gb": "GB",
  "united kingdom": "GB",
  "gr": "GR",
  "greece": "GR",
  "as": "AS",
  "american samoa": "AS",
  "dk": "DK",
  "denmark": "DK",
  "gl": "GL",
  "greenland": "GL",
  "gu": "GU",
  "guam": "GU",
  "mp": "MP",
  "northern mariana islands": "MP",
  "pr": "PR",
  "puerto rico": "PR",
  "vi": "VI",
  "united states virgin islands": "VI",
  "ca": "CA",
  "canada": "CA",
  "st": "ST",
  "sao tome and principe": "ST",
  "cv": "CV",
  "cape verde": "CV",
  "cabo verde": "CV",
  "dm": "DM",
  "dominica": "DM",
  "nl": "NL",
  "netherlands": "NL",
  "jm": "JM",
  "jamaica": "JM",
  "ws": "WS",
  "samoa": "WS",
  "om": "OM",
  "oman": "OM",
  "vc": "VC",
  "saint vincent and the grenadines": "VC",
  "tr": "TR",
  "turkey": "TR",
  "bd": "BD",
  "bangladesh": "BD",
  "lc": "LC",
  "saint lucia": "LC",
  "nr": "NR",
  "nauru": "NR",
  "no": "NO",
  "norway": "NO",
  "kn": "KN",
  "saint kitts and nevis": "KN",
  "bh": "BH",
  "bahrain": "BH",
  "to": "TO",
  "tonga": "TO",
  "fi": "FI",
  "finland": "FI",
  "id": "ID",
  "indonesia": "ID",
  "mu": "MU",
  "mauritius": "MU",
  "se": "SE",
  "sweden": "SE",
  "tt": "TT",
  "trinidad and tobago": "TT",
  "my": "MY",
  "malaysia": "MY",
  "pa": "PA",
  "panama": "PA",
  "pw": "PW",
  "palau": "PW",
  "tv": "TV",
  "tuvalu": "TV",
  "mh": "MH",
  "marshall islands": "MH",
  "cl": "CL",
  "chile": "CL",
  "th": "TH",
  "thailand": "TH",
  "gd": "GD",
  "grenada": "GD",
  "ee": "EE",
  "estonia": "EE",
  "ag": "AG",
  "antigua and barbuda": "AG",
  "tw": "TW",
  "taiwan": "TW",
  "taiwan*": "TW",
  "bb": "BB",
  "barbados": "BB",
  "it": "IT",
  "italy": "IT",
  "mt": "MT",
  "malta": "MT",
  "vu": "VU",
  "vanuatu": "VU",
  "sg": "SG",
  "singapore": "SG",
  "cy": "CY",
  "cyprus": "CY",
  "lk": "LK",
  "sri lanka": "LK",
  "km": "KM",
  "comoros": "KM",
  "fj": "FJ",
  "fiji": "FJ",
  "ru": "RU",
  "russia": "RU",
  "va": "VA",
  "vatican": "VA",
  "sm": "SM",
  "san marino": "SM",
  "kz": "KZ",
  "kazakhstan": "KZ",
  "az": "AZ",
  "azerbaijan": "AZ",
  "tj": "TJ",
  "tajikistan": "TJ",
  "ls": "LS",
  "lesotho": "LS",
  "uz": "UZ",
  "uzbekistan": "UZ",
  "ma": "MA",
  "morocco": "MA",
  "co": "CO",
  "colombia": "CO",
  "tl": "TL",
  "east timor": "TL",
  "timor-leste": "TL",
  "tz": "TZ",
  "united republic of tanzania": "TZ",
  "tanzania": "TZ",
  "ar": "AR",
  "argentina": "AR",
  "sa": "SA",
  "saudi arabia": "SA",
  "pk": "PK",
  "pakistan": "PK",
  "ye": "YE",
  "yemen": "YE",
  "ae": "AE",
  "united arab emirates": "AE",
  "ke": "KE",
  "kenya": "KE",
  "pe": "PE",
  "peru": "PE",
  "do": "DO",
  "dominican republic": "DO",
  "ht": "HT",
  "haiti": "HT",
  "pg": "PG",
  "papua new guinea": "PG",
  "ao": "AO",
  "angola": "AO",
  "kh": "KH",
  "cambodia": "KH",
  "vn": "VN",
  "vietnam": "VN",
  "mz": "MZ",
  "mozambique": "MZ",
  "cr": "CR",
  "costa rica": "CR",
  "bj": "BJ",
  "benin": "BJ",
  "ng": "NG",
  "nigeria": "NG",
  "ir": "IR",
  "iran": "IR",
  "sv": "SV",
  "el salvador": "SV",
  "sl": "SL",
  "sierra leone": "SL",
  "gw": "GW",
  "guinea bissau": "GW",
  "guinea-bissau": "GW",
  "hr": "HR",
  "croatia": "HR",
  "bz": "BZ",
  "belize": "BZ",
  "za": "ZA",
  "south africa": "ZA",
  "cf": "CF",
  "central african republic": "CF",
  "sd": "SD",
  "sudan": "SD",
  "cd": "CD",
  "democratic republic of the congo": "CD",
  "congo (kinshasa)": "CD",
  "kw": "KW",
  "kuwait": "KW",
  "de": "DE",
  "germany": "DE",
  "be": "BE",
  "belgium": "BE",
  "ie": "IE",
  "ireland": "IE",
  "kp": "KP",
  "north korea": "KP",
  "kr": "KR",
  "south korea": "KR",
  "korea, south": "KR",
  "gy": "GY",
  "guyana": "GY",
  "hn": "HN",
  "honduras": "HN",
  "mm": "MM",
  "myanmar": "MM",
  "ga": "GA",
  "gabon": "GA",
  "gq": "GQ",
  "equatorial guinea": "GQ",
  "ni": "NI",
  "nicaragua": "NI",
  "lv": "LV",
  "latvia": "LV",
  "ug": "UG",
  "uganda": "UG",
  "mw": "MW",
  "malawi": "MW",
  "am": "AM",
  "armenia": "AM",
  "sx": "SX",
  "somaliland": "SX",
  "tm": "TM",
  "turkmenistan": "TM",
  "zm": "ZM",
  "zambia": "ZM",
  "nc": "NC",
  "northern cyprus": "NC",
  "mr": "MR",
  "mauritania": "MR",
  "dz": "DZ",
  "algeria": "DZ",
  "lt": "LT",
  "lithuania": "LT",
  "et": "ET",
  "ethiopia": "ET",
  "er": "ER",
  "eritrea": "ER",
  "gh": "GH",
  "ghana": "GH",
  "si": "SI",
  "slovenia": "SI",
  "gt": "GT",
  "guatemala": "GT",
  "ba": "BA",
  "bosnia and herzegovina": "BA",
  "jo": "JO",
  "jordan": "JO",
  "sy": "SY",
  "syria": "SY",
  "mc": "MC",
  "monaco": "MC",
  "al": "AL",
  "albania": "AL",
  "uy": "UY",
  "uruguay": "UY",
  "cnm": "CNM",
  "cyprus no mans area": "CNM",
  "mn": "MN",
  "mongolia": "MN",
  "rw": "RW",
  "rwanda": "RW",
  "so": "SO",
  "somalia": "SO",
  "bo": "BO",
  "bolivia": "BO",
  "cm": "CM",
  "cameroon": "CM",
  "cg": "CG",
  "republic of congo": "CG",
  "congo (brazzaville)": "CG",
  "eh": "EH",
  "western sahara": "EH",
  "rs": "RS",
  "republic of serbia": "RS",
  "serbia": "RS",
  "me": "ME",
  "montenegro": "ME",
  "tg": "TG",
  "togo": "TG",
  "la": "LA",
  "laos": "LA",
  "af": "AF",
  "afghanistan": "AF",
  "ua": "UA",
  "ukraine": "UA",
  "sk": "SK",
  "slovakia": "SK",
  "jk": "JK",
  "siachen glacier": "JK",
  "bg": "BG",
  "bulgaria": "BG",
  "qa": "QA",
  "qatar": "QA",
  "li": "LI",
  "liechtenstein": "LI",
  "at": "AT",
  "austria": "AT",
  "sz": "SZ",
  "swaziland": "SZ",
  "hu": "HU",
  "hungary": "HU",
  "ro": "RO",
  "romania": "RO",
  "ne": "NE",
  "niger": "NE",
  "lu": "LU",
  "luxembourg": "LU",
  "ad": "AD",
  "andorra": "AD",
  "ci": "CI",
  "ivory coast": "CI",
  "lr": "LR",
  "liberia": "LR",
  "bn": "BN",
  "brunei": "BN",
  "iq": "IQ",
  "iraq": "IQ",
  "ge": "GE",
  "georgia": "GE",
  "gm": "GM",
  "gambia": "GM",
  "ch": "CH",
  "switzerland": "CH",
  "td": "TD",
  "chad": "TD",
  "kv": "KV",
  "kosovo": "KV",
  "lb": "LB",
  "lebanon": "LB",
  "dj": "DJ",
  "djibouti": "DJ",
  "bi": "BI",
  "burundi": "BI",
  "sr": "SR",
  "suriname": "SR",
  "il": "IL",
  "israel": "IL",
  "ml": "ML",
  "mali": "ML",
  "sn": "SN",
  "senegal": "SN",
  "gn": "GN",
  "guinea": "GN",
  "zw": "ZW",
  "zimbabwe": "ZW",
  "pl": "PL",
  "poland": "PL",
  "mk": "MK",
  "macedonia": "MK",
  "north macedonia": "MK",
  "py": "PY",
  "paraguay": "PY",
  "by": "BY",
  "belarus": "BY",
  "cz": "CZ",
  "czech republic": "CZ",
  "czechia": "CZ",
  "bf": "BF",
  "burkina faso": "BF",
  "na": "NA",
  "namibia": "NA",
  "ly": "LY",
  "libya": "LY",
  "tn": "TN",
  "tunisia": "TN",
  "bt": "BT",
  "bhutan": "BT",
  "md": "MD",
  "moldova": "MD",
  "ss": "SS",
  "south sudan": "SS",
  "bw": "BW",
  "botswana": "BW",
  "bs": "BS",
  "the bahamas": "BS",
  "bahamas": "BS",
  "nz": "NZ",
  "new zealand": "NZ",
  "cu": "CU",
  "cuba": "CU",
  "ec": "EC",
  "ecuador": "EC",
  "au": "AU",
  "australia": "AU",
  "ve": "VE",
  "venezuela": "VE",
  "sb": "SB",
  "solomon islands": "SB",
  "mg": "MG",
  "madagascar": "MG",
  "is": "IS",
  "iceland": "IS",
  "eg": "EG",
  "egypt": "EG",
  "kg": "KG",
  "kyrgyzstan": "KG",
  "np": "NP",
  "nepal": "NP"
},
    mapBackTrack = {
  US: "United States of America"
},
    covid19Data,
    consolidatedObj = {
  confirmed: 0,
  deaths: 0,
  recovered: 0
};

var getDataFromServer = async function getDataFromServer(url) {
  return fetch(url).then(function (data) {
    return data.json();
  });
};

var parseMapData = function parseMapData(data) {
  var mapData = [],
      mapObj = {},
      name;

  for (var countryName in data) {
    name = mapMetaData[countryName.toLowerCase()] || ''; // mapData.push([name.toLowerCase(), data[countryName][data[countryName].length - 1].confirmed ]);

    mapData.push({
      "hc-key": name.toLowerCase(),
      value: data[countryName][data[countryName].length - 1].confirmed,
      confirmed: data[countryName][data[countryName].length - 1].confirmed,
      deaths: data[countryName][data[countryName].length - 1].deaths,
      recovered: data[countryName][data[countryName].length - 1].recovered,
      drilldown: name.toLowerCase(),
      countryName: countryName
    });
  }

  return mapData;
};

var parseChartData = function parseChartData(data, countries) {
  var chartData = [];
  countries.forEach(function (country) {
    var dataObj = {
      name: "",
      data: []
    };
    dataObj.name = country;
    data[country].forEach(function (val) {
      dataObj.data.push([+new Date(val.date), val.confirmed]);
    });
    chartData.push(dataObj);
  });
  return {
    title: {
      text: 'Spread velocity in different countries'
    },
    series: chartData
  };
}; // Top Five countries affeceted by Covid-19


var parseTopFiveData = function parseTopFiveData(data) {
  var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  var chartData = [],
      chartFinalData = [{
    name: 'Confirmed',
    color: 'rgb(0, 82, 180)',
    pointPlacement: -0.4,
    data: []
  }, {
    name: 'Recovered',
    color: 'rgb(255, 217, 68)',
    pointPlacement: -0.2,
    data: []
  }, {
    name: 'Deaths',
    color: 'rgb(215, 0, 38)',
    data: []
  }],
      categories = [],
      unsortedData = []; // 0 = country, 1 = confirmed, 2 = deaths, 3 = recovered

  for (var country in data) {
    var currentData = data[country][data[country].length - 1];
    chartData.push([country, currentData.confirmed, currentData.deaths, currentData.recovered]);
  }

  chartData.forEach((val) => {
    // calculateSum
    consolidatedObj.confirmed += val[1];
    consolidatedObj.deaths += val[2];
    consolidatedObj.recovered += val[3];
  });
  
  chartData.sort(function (val1, val2) {
    return val1[1] > val2[1] ? -1 : 1;
  });

  if (_instanceof(count, Array)) {
    for (var i = 0; i < count.length; i++) {
      var val = data[count[i]];
      val = val[val.length - 1];
      unsortedData.push({
        country: count[i],
        confirmed: val.confirmed,
        recovered: val.recovered,
        deaths: val.deaths
      });
    }
  } else {
    for (var i = 0; i < count; i++) {
      var _val = chartData[i];
      unsortedData.push({
        country: _val[0],
        confirmed: _val[1],
        recovered: _val[3],
        deaths: _val[2]
      });
    }
  }

  categories = [];
  chartFinalData[0].data = [];
  chartFinalData[1].data = [];
  chartFinalData[2].data = [];
  unsortedData.sort(function (a, b) {
    return a.confirmed < b.confirmed ? 1 : -1;
  });
  unsortedData.forEach(function (val) {
    categories.push(val.country);
    chartFinalData[0].data.push(val.confirmed); // confirmed

    chartFinalData[1].data.push(val.recovered); // recovered

    chartFinalData[2].data.push(val.deaths); // deaths  
  });
  return {
    chart: {
      height: $('.chart-main-container').height() - 10,
      type: 'column'
    },
    title: {
      text: 'Confirmed vs Death vs Recovered'
    },
    plotOptions: {
      series: {
        grouping: false,
        borderWidth: 0
      }
    },
    series: chartFinalData,
    xAxis: {
      categories: categories
    }
  };
};

var createSelectBox = function createSelectBox(data, id, preSelected) {
  var options = [];

  for (var value in data) {
    options.push({
      name: value,
      value: value,
      checked: preSelected && preSelected.indexOf(value) >= 0
    });
  }

  $("#select-country").append($("<select id=".concat(id, " multiple=\"multiple\" ></select>")));
  $("#".concat(id)).multiselect({
    columns: 3,
    search: true,
    texts: {
      placeholder: 'Select Country',
      search: 'Search Country'
    },
    onOptionClick: function onOptionClick(element, option) {
      renderChart(parseTopFiveData(covid19Data, $(element).val()), 'chart-container2');
      renderStockChart(parseChartData(covid19Data, $(element).val()), 'chart-container1');
    }
  });
  $("#".concat(id)).multiselect('loadOptions', options);
};

async function render() {
  // var mapData = await getDataFromServer("https://coronavirus-19-api.herokuapp.com/countries");
  // confirmed, deaths, recovered
  covid19Data = await getDataFromServer("https://pomber.github.io/covid19/timeseries.json"); // covid19Data = covidData;

  $('.dropdown').show();
  renderMap(parseMapData(covid19Data));
  var topFiveCountriesData = parseTopFiveData(covid19Data);
  renderChart(topFiveCountriesData, 'chart-container2');
  createSelectBox(covid19Data, 'country-1', topFiveCountriesData.xAxis.categories);
  renderStockChart(parseChartData(covid19Data, topFiveCountriesData.xAxis.categories), 'chart-container1');
  renderImpactChart(consolidatedObj, 'chart-container3', 'Worldwide', 410, 190);
}

function renderImpactChart(data, container, country, w, h) {
  var dataObj = data,
      isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    w = w / 2;
    h = h;
  }

  renderChart({
    chart: {
      // height:  $('.chart-main-container').height() - 10,
      height: h,
      width: w,
      type: 'column'
    },
    title: {
      text: "Total Impact ".concat(country)
    },
    legend: {
      enabled: false
    },
    series: [{
      name: "",
      data: [{
        color: 'rgb(0, 82, 180)',
        y: dataObj.confirmed
      }, {
        color: 'rgb(255, 217, 68)',
        y: dataObj.recovered
      }, {
        color: 'rgb(215, 0, 38)',
        y: dataObj.deaths
      }]
    }],
    xAxis: {
      categories: ["Confirmed", "Recovered", "Deaths"]
    }
  }, container);
}

function renderMap(mapData) {
  // console.log('mapH: ', $(window).height())
  Highcharts.mapChart('map-container', {
    chart: {
      // height:  $('.map-main-container').height() - 10,
      height: $(window).height() - 120,
      map: 'custom/world',
      events: {
        drilldown: function drilldown(e) {
          if (!e.seriesOptions) {
            var chart = this,
                countryName = e.point.countryName,
                data,
                // mapKey = 'countries/' + e.point.drilldown + '-all',
            mapKey = Highcharts.mapDataIndex.Countries[mapBackTrack[countryName] || countryName];

            if (!mapKey) {
              console.log("Unable to load ".concat(countryName, "!"));
              return;
            }

            mapKey = mapKey.replace(/\.js/, ''); // Handle error, the timeout is cleared on success

            var fail = setTimeout(function () {
              if (!Highcharts.maps[mapKey]) {
                chart.showLoading('<i class="icon-frown"></i> Failed loading ' + e.point.name);
                fail = setTimeout(function () {
                  chart.hideLoading();
                }, 1000);
              }
            }, 3000); // Show the spinner
            // Show loading

            if (Highcharts.charts[0]) {
              Highcharts.charts[0].showLoading('<i class="fa fa-spinner fa-spin fa-2x"></i>');
            } // chart.showLoading('<i class="icon-spinner icon-spin icon-3x"></i>'); // Font Awesome spinner
            // Load the drilldown map


            $.getScript('https://code.highcharts.com/mapdata/' + mapKey + '.js', function () {

              data = Highcharts.geojson(Highcharts.maps[mapKey]); // Set a non-random bogus value

              $.each(data, function (i) {
                this.value = e.point.value;
              }); // Render the chart

              renderImpactChart(covid19Data[countryName][covid19Data[countryName].length - 1], 'chart-container3', e.point.name, 410, 190); // Hide loading and add series

              chart.hideLoading();
              clearTimeout(fail);
              chart.addSeriesAsDrilldown(e.point, {
                name: ' ',
                data: data,
                tooltip: {
                  pointFormat: "\n                            <b>".concat(e.point.name, "</b> <br/>\n                            Confirmed: <b>{point.value} </b><br/>\n                            Deaths: <b>").concat(e.point.deaths, " </b><br/>\n                            Recovered: <b>").concat(e.point.recovered, " </b><br/>\n                          ")
                },
                dataLabels: {
                  enabled: false,
                  formatter: function formatter() {
                    return this.point.properties && this.point.properties['hc-a2'] || this.point.name;
                  }
                }
              });
            });
          }
        },
        drillup: function drillup() {
          renderImpactChart(consolidatedObj, 'chart-container3', 'Worldwide', 410, 190);
          this.setTitle(null, {
            text: ''
          });
        }
      }
    },
    mapNavigation: {
      enabled: true,
      enableMouseWheelZoom: false,
      buttonOptions: {
        verticalAlign: 'bottom'
      },
      enableDoubleClickZoomTo: true
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    colorAxis: {
      min: 1,
      type: 'logarithmic',
      minColor: '#d8dde6',
      maxColor: '#113880',
      _stops: [[0, '#0e46a1'], [0.67, '#5c82bf'], [1, '#abbdd9']]
    },
    tooltip: {
      pointFormat: "\n        <b>{point.name}</b> <br/>\n        Confirmed: <b>{point.value} </b><br/>\n        Deaths: <b>{point.deaths} </b><br/>\n        Recovered: <b>{point.recovered} </b><br/>\n      " // pointFormat: 'Country: {point.name} <br/> Confirmed: <b>{point.value} </b><br/>',

    },
    series: [{
      data: mapData,
      name: ' ',
      states: {
        hover: {
          color: '#BADA55'
        }
      },
      dataLabels: {
        enabled: false,
        formatter: function formatter() {
          return this.point.properties && this.point.properties['hc-a2'] || this.point.name;
        }
      }
    }],
    drilldown: {
      activeDataLabelStyle: {
        color: '#FFFFFF',
        textDecoration: 'none',
        textOutline: '1px #000000'
      },
      drillUpButton: {
        relativeTo: 'spacingBox',
        position: {
          x: 0,
          y: 60
        }
      }
    }
  });
}

function renderChart(data, container) {
  Highcharts.chart(container, Object.assign({
    chart: {
      height: $('.chart-main-container').height() - 10
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    yAxis: {
      title: {
        text: 'Number of Cases'
      }
    },
    xAxis: {
      accessibility: {
        rangeDescription: 'Time'
      }
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false
        } // pointStart: 2010

      }
    },
    series: data,
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom'
          }
        }
      }]
    }
  }, data));
}

function renderStockChart(data, container) {

  console.log(Object.assign({
    chart: {
      // height:  $('.chart-main-container').height() - 10
      height: '400'
    },
    rangeSelector: {
      selected: 4
    },
    yAxis: {
      labels: {
        formatter: function formatter() {
          return (this.value > 0 ? ' + ' : '') + this.value;
        }
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },
    scrollbar: {
      enabled: false
    },
    navigator: {
      enabled: true
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true
      }
    },
    tooltip: {
      // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true
    },
    series: []
  }, data));

  Highstock.stockChart(container, Object.assign({
    chart: {
      // height:  $('.chart-main-container').height() - 10
      height: '400'
    },
    rangeSelector: {
      selected: 4
    },
    yAxis: {
      labels: {
        formatter: function formatter() {
          return (this.value > 0 ? ' + ' : '') + this.value;
        }
      },
      plotLines: [{
        value: 0,
        width: 2,
        color: 'silver'
      }]
    },
    scrollbar: {
      enabled: false
    },
    navigator: {
      enabled: true
    },
    legend: {
      enabled: false
    },
    plotOptions: {
      series: {
        compare: 'percent',
        showInNavigator: true
      }
    },
    tooltip: {
      // pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
      valueDecimals: 2,
      split: true
    },
    series: []
  }, data));
}

render(); // window.addEventListener('resize', render);