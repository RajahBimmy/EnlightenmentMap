// South and West are Negative
$(document).ready(function(){
  var map;

  var index = 0;
  var globalMarkers = [];

  var crusoe = [
      {latLng: [53.9583, -1.0803], name: 'York', style: {fill: '#F8E23B'},
        info: "<h1>York, 1632</h1><h3>Crusoe is born and raised.</h3><p><i></i></p>"},
      
      {latLng: [51.5072, -0.1275], name: 'London', style: {fill: '#F8E23B'},
        info: "<h1>London, 1651</h1><h3>Crusoe disobeys his father and sets sail on the open seas.</h3><p></p>"},
      
      {latLng: [34.0333, -6.8000], name: 'Sallee', style: {fill: '#F8E23B'},
        info: "<h1>Sallee, 1653</h1><h3>Crusoe is made a slave, but escapes shortly thereafter.</h3><p></p>"},
      
      {latLng: [-15.7833, -47.8667], name: 'Brazil', style: {fill: '#F8E23B', r:10, opacity:0.5},
        info: "<h1>Brazil, 1656-1659</h1><h3>Crusoe founds a plantation in the New World.</h3><p></p>"},
      
      {latLng: [-33, -78], name: "Alexander Selkirk's Island", style: {fill: '#F8E23B'},
        info: "<h1>Alexander Selkirk's Island, 1704-1709</h1><h3>The Island where Alexander Selkirk was stranded, serving as the basis for Defoe's tale.</h3>"},
      
      {latLng: [14.01, -60.98], name: "Robinson Crusoe's Island", style: {fill: '#F8E23B', r:10, opacity:0.5},
        info: "<h1>Robinson Crusoe's Island, 1659-1686</h1><h3>Crusoe is stranded for 28 years.</h3><p></p>"},
      
      {latLng: [13.16, -61.23], name: "Nearby Island Under Spanish Regime", style: {fill: '#F8E23B'},
        info: "<h1>Nearby Island, 1661</h1><h3>After two years, Crusoe explores his realm and discovers a distant Spanish isle.</h3><p></p>"},
      
      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#F8E23B'},
        info: "<h1>Lisbon, 1687</h1><h3>Returning to Europe from his long journey, Crusoe is updated on his financial status by the Portugese Captain.</h3><p></p>"},
      
      {latLng: [42.8167, -1.6500], name: 'Pampeluna', style: {fill: '#F8E23B'},
        info: "<h1>Pampeluna, 1687</h1><h3>Crusoe stops in modern Pampelona with Friday.</h3><p></p>"},
      
      {latLng: [43.6045, 1.4440], name: 'Toulouse', style: {fill: '#F8E23B'},
        info: "<h1>Toulouse, 1687</h1><h3>Crusoe's entourage is attacked by wolves. Friday manages to hold them off.</h3><p></p>"},
      
      {latLng: [51.1295, 1.1089], name: 'Dover', style: {fill: '#F8E23B'},
        info: "<h1>Dover, England</h1><h3>Crusoe marries and settles into a new home by the sea, but only remains a short while before returning to his island.</h3><p></p>"}
    ];

  var candide = [
      {latLng: [52.2833, 8.0500], name: 'Westphalia', style: {fill: '#FF69B4', r:10, opacity:0.5},
        info: "<h1>The Kingdom of Thunder-ten-Tronckh, 1753</h1><h3>Candide is evicted for his relations with Cunegonde, and is subsequently thrown into battle with the Bulgars.</h3><p></p>"},
      
      {latLng: [52.3167, 5.5500], name: 'Holland', style: {fill: '#FF69B4'},
        info: "<h1>Holland, 1754</h1><h3>Candide is taken in by Jacques and discovers Pangloss as a beggar.</h3><p></p>"},
      
      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#FF69B4', r:10, opacity:0.5},
        info: "<h1>Lisbon, 1755</h1><h3>The Great Earthquake</h3><p></p>"},
      
      {latLng: [36.5333, -6.2833], name: "Cadiz", style: {fill: '#FF69B4'},
        info: "<h1>Cadiz, 1755-1756</h1><h3>Candide and Cunegonde are reunited before hitting the high seas.</h3><p></p>"},
      
      {latLng: [-34.6033, -58.3817], name: "Buenos Aires", style: {fill: '#FF69B4'},
        info: "<h1>Buenos Aires, 1756</h1><h3>Candide is introduced to Don Fernando d’Ibaraa y Figueora y Mascarenes y Lampourdos y Souza</h3><p></p>"},
      
      {latLng: [5.3494, -71.1712], name: "Meta River", style: {fill: '#FF69B4'},
        info: "<h1>The Meta River, 1757</h1><h3>Candide and Cacambo head upstream and discover a village where jewels are as plentiful as pebbles.</h3><p></p>"},
      
      {latLng: [4.5981, -74.0758], name: 'El Dorado', style: {fill: '#FF69B4', r:10, opacity:0.5},
        info: "<h1>El Dorado, 1757</h1><h3>Candide and Cacambo discover the city of El Dorado.</h3><p></p>"},
      
      {latLng: [5.8333, -55.1667], name: 'Surinam', style: {fill: '#FF69B4'},
        info: "<h1>Surinam, 1758</h1><h3>Vanderdendur steals Candide's loot from El Dorado.</h3><p></p>"},
      
      {latLng: [44.8400, 0.5800], name: 'Bordeaux', style: {fill: '#FF69B4'},
        info: "<h1>Bordeaux, 1759</h1><h3>Vanderdendur's ship is defeated just outside the port city.</h3><p></p>"},
      
      {latLng: [48.8567, 2.3508], name: 'Paris', style: {fill: '#FF69B4'},
        info: "<h1>Paris, 1760</h1><h3>Candide falls ill and is easily manipulated by the abba.</h3><p></p>"},
      
      {latLng: [45.4375, 12.3358], name: 'Venice', style: {fill: '#FF69B4'},
        info: "<h1>Venice, 1762</h1><h3>Candide searches for Cunegonde, and discovers that she may be in Constantinople.</h3><p></p>"},
      
      {latLng: [41.0136, 28.9550], name: 'Constantinople', style: {fill: '#FF69B4'},
        info: "<h1>Constantinople, 1763</h1><h3>Candide purchases the Old Woman and Cunegonde, thus saving the day.</h3><p></p>"}
    ];

  var equiano = [
      {latLng: [5, 7.4], name: 'Eboe', style: {fill: '#7D26CD', r:10, opacity:0.5}, 
        info: "<h1>Eboe, 1745</h1><h3>Equiano is born and raised in modern Nigeria.</h3><p><i>\"some interesting scene of real life, such as a great achievement, domestic employment, a pathetic story, or some rural sport; and as the subject is generally founded on some recent event, it's therefore ever new.\"</i></p>"},
      
      {latLng: [37.5000, -79.0000], name: 'Virginia', style: {fill: '#7D26CD'},
        info: "<h1>Virginia, 1756</h1><h3>After being placed into slavery, Equiano is first assigned to Virginia, and is given a new name along the way.</h3><p></p>"},
      
      {latLng: [51.5072, -0.1275], name: 'London', style: {fill: '#7D26CD', r:10, opacity:0.5},
        info: "<h1>London, 1767-1797</h1><h3>After coming here as a slave (in 1756), Equiano returns to work for Dr. Charles Irving. Later he marries Susanna Cullen (1792) and passes away here (1797).</h3><p></p>"},
      
      {latLng: [52.3167, 5.5500], name: 'Holland', style: {fill: '#7D26CD'},
        info: "<h1>Holland, 1757</h1><h3>Equiano travels as a slave.</h3><p></p>"},
      
      {latLng: [55.9500, -3.1833], name: 'Scotland', style: {fill: '#7D26CD'},
        info: "<h1>Scotland, 1758</h1><h3>Equiano travels as a slave.</h3><p></p>"},
      
      {latLng: [36.1430, -5.3530], name: 'Gibraltar', style: {fill: '#7D26CD'},
        info: "<h1>Gibraltar, 1759</h1><h3>Equiano travels as a slave.</h3><p></p>"},
      
      {latLng: [45.0000, -63.0000], name: 'Nova Scotia', style: {fill: '#7D26CD'},
        info: "<h1>Nova Scotia, 1760</h1><h3>Equiano travels as a slave.</h3><p></p>"},
      
      {latLng: [18.1824, -77.3218], name: 'Jamaica', style: {fill: '#7D26CD'},
        info: "<h1>The Caribbean, 1761</h1><h3>Equiano travels as a slave. In 1770, he returns here a free man.</h3><p></p>"},
      
      {latLng: [32.9605, -83.1132], name: 'Georgia', style: {fill: '#7D26CD'},
        info: "<h1>Georgia, 1762</h1><h3>Equiano travels as a slave.</h3><p></p>"},
      
      {latLng: [34.0000, -81.0000], name: 'South Carolina', style: {fill: '#7D26CD'},
        info: "<h1>South Carolina</h1><h3>Equiano travels as a slave.</h3><p></p>"},
      
      {latLng: [39.9500, -75.1667], name: 'Philadelphia', style: {fill: '#7D26CD', r:10, opacity:0.5},
        info: "<h1>Philadelphia, 1763-1766</h1><h3>Equiano is purchased by Robert King, and after three years saves up enough money to buy his own freedom.</h3><p></p>"},
      
      {latLng: [41.0136, 28.9550], name: 'Constantinople', style: {fill: '#7D26CD'},
        info: "<h1>Constantinople, 1768</h1><h3>Equiano travels as a free man.</h3><p></p>"},
      
      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#7D26CD'},
        info: "<h1>Lisbon, 1769</h1><h3>Equiano travels as a free man.</h3><p></p>"},
      
      {latLng: [41.9000, 12.4833], name: 'Italy', style: {fill: '#7D26CD'},
        info: "<h1>Italy, 1770</h1><h3>Equiano travels as a free man.</h3><p></p>"},
      
      {latLng: [12.0500, -61.7500], name: 'Grenada', style: {fill: '#7D26CD'},
        info: "<h1>Grenada, 1771</h1><h3>Equiano travels as a free man.</h3><p></p>"}
    ];

  map = new jvm.Map({
    map: 'world_mill',
    container: $('#map'),
    scaleColors: ['#C8EEFF', '#0071A4'],
    normalizeFunction: 'polynomial',
    hoverOpacity: 0.7,
    hoverColor: false,
    regionStyle: {
      initial: {
        fill: '#4CAF50'
      }
    },
    markerStyle: {
      initial: {
        fill: '#F8E23B',
        stroke: '#000000'
      }
    },
    backgroundColor: '#1C6BA0',
    markers: [],
    onMarkerClick: function(events, index) {
      $("#info").html(globalMarkers[index].info);
    }
  });
  
  document.getElementById("crusoe").addEventListener("click", toggleCrusoe);
  document.getElementById("candide").addEventListener("click", toggleCandide);
  document.getElementById("equiano").addEventListener("click", toggleEquiano);

  // Plots Crusoe's coordinates on the map.
  function toggleCrusoe(){
    for(i = 0; i < crusoe.length; i++){
      map.addMarker(index, crusoe[i]);
      globalMarkers[index] = crusoe[i];
      index++;
    }
  }

  // Plots Candide's coordinates on the map.
  function toggleCandide(){
    for(i = 0; i < candide.length; i++){
      map.addMarker(index, candide[i]);
      globalMarkers[index] = candide[i];
      index++;
    }
  }

  // Plots Equiano's coordinates on the map.
  function toggleEquiano(){
    for(i = 0; i < equiano.length; i++){
      map.addMarker(index, equiano[i]);
      globalMarkers[index] = equiano[i];
      index++;
    }
  }
});