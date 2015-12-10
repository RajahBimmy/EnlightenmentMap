// South and West are Negative
$(function(){
  var map;

  var index = 0;
  var globalMarkers = [];

  var crusoe = [
      {latLng: [53.9583, -1.0803], name: 'York'},
      {latLng: [51.5072, -0.1275], name: 'London'},
      // Yarmouth
      {latLng: [34.0333, -6.8000], name: 'Sallee'},
      // 150 Miles South of Sallee
      // Brazil
      // Sea in between Brazil and the island
      {latLng: [-33, -78], name: "Robinson Crusoe Island"},
      {latLng: [14.01, -60.98], name: "More likely Crusoe's Island"},
      {latLng: [13.16, -61.23], name: "Adjacent Island Under Spanish Regime"},
      {latLng: [38.7139, -9.1394], name: 'Lisbon'},
      {latLng: [42.8167, -1.6500], name: 'Pampeluna'},
      {latLng: [43.6045, 1.4440], name: 'Toulouse'},
      {latLng: [51.1295, 1.1089], name: 'Dover'}
    ];

  var candide = [
      {latLng: [53.9583, -1.0803], name: 'York'},
      {latLng: [51.5072, -0.1275], name: 'London'},
      // Yarmouth
      {latLng: [34.0333, -6.8000], name: 'Sallee'},
      // 150 Miles South of Sallee
      // Brazil
      // Sea in between Brazil and the island
      {latLng: [-33, -78], name: "Robinson Crusoe Island"},
      {latLng: [14.01, -60.98], name: "More likely Crusoe's Island"},
      {latLng: [13.16, -61.23], name: "Adjacent Island Under Spanish Regime"},
      {latLng: [38.7139, -9.1394], name: 'Lisbon'},
      {latLng: [42.8167, -1.6500], name: 'Pampeluna'},
      {latLng: [43.6045, 1.4440], name: 'Toulouse'},
      {latLng: [51.1295, 1.1089], name: 'Dover'}
    ];

  var equiano = [
      {latLng: [5, 7.4], name: 'Eboe', style: {fill: '#7D26CD'}, 
        info: "<h1>Eboe, 1745</h1><h3>Equiano is born and raised in modern Nigeria</h3><p><i>\"some interesting scene of real life, such as a great achievement, domestic employment, a pathetic story, or some rural sport; and as the subject is generally founded on some recent event, it's therefore ever new.\"</i></p>"},
      {latLng: [37.5000, -79.0000], name: 'Virginia', style: {fill: '#7D26CD'},
        info: "<h1>/blah/bar</h1>"},
      {latLng: [51.5072, -0.1275], name: 'London', style: {fill: '#7D26CD'}},
      {latLng: [52.3167, 5.5500], name: 'Holland', style: {fill: '#7D26CD'}},
      {latLng: [55.9500, -3.1833], name: 'Scotland', style: {fill: '#7D26CD'}},
      {latLng: [36.1430, -5.3530], name: 'Gibraltar', style: {fill: '#7D26CD'}},
      {latLng: [45.0000, -63.0000], name: 'Nova Scotia', style: {fill: '#7D26CD'}},
      {latLng: [18.1824, -77.3218], name: 'Caribbean', style: {fill: '#7D26CD'}},
      {latLng: [41.0000, -77.5000], name: 'Pennsylvania', style: {fill: '#7D26CD'}},
      {latLng: [32.9605, -83.1132], name: 'Georgia', style: {fill: '#7D26CD'}},
      {latLng: [34.0000, -81.0000], name: 'South Carolina', style: {fill: '#7D26CD'}},
      {latLng: [39.9500, -75.1667], name: 'Philadelphia', style: {fill: '#7D26CD'}},
      {latLng: [41.0136, 28.9550], name: 'Constantinople', style: {fill: '#7D26CD'}},
      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#7D26CD'}},
      {latLng: [41.9000, 12.4833], name: 'Italy', style: {fill: '#7D26CD'}},
      {latLng: [12.0500, -61.7500], name: 'Grenada', style: {fill: '#7D26CD'}}
    ];

  map = new jvm.Map({
    map: 'world_mill',
    container: $('#map'),
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#000000'
      }
    },
    backgroundColor: '#1C6BA0',
    markers: [],
    onMarkerClick: function(events, index) {
      //alert(globalMarkers[index].info);
      $("#info").html(globalMarkers[index].info);
    }
  });
  
  document.getElementById("crusoe").addEventListener("click", toggleCrusoe);
  document.getElementById("candide").addEventListener("click", toggleCandide);
  document.getElementById("equiano").addEventListener("click", toggleEquiano);

  function toggleCrusoe(){
    for(i = 0; i < crusoe.length; i++){
      map.addMarker(index, crusoe[i]);
      globalMarkers[index] = crusoe[i];
      index++;
    }
  }

  function toggleCandide(){
    for(i = 0; i < candide.length; i++){
      map.addMarker(index, candide[i]);
      globalMarkers[index] = candide[i];
      index++;
    }
  }

  function toggleEquiano(){
    for(i = 0; i < equiano.length; i++){
      map.addMarker(index, equiano[i]);
      globalMarkers[index] = equiano[i];
      index++;
    }
  }
});