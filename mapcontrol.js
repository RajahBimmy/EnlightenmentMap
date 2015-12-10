// South and West are Negative
$(document).ready(function(){
  var map;

  // Current index and global array of markers to keep pace with the one local to the map.
  var index = 0;
  var globalMarkers = [];

  // Array of coordinates, name, color data, and descriptions of Crusoe's travels.
  var crusoe = [
      {latLng: [53.9583, -1.0803], name: 'York', style: {fill: '#F8E23B'},
        info: "<h1>York, 1632</h1><h4>Crusoe is born and raised.</h4><p><i>\"we are now called—nay we call ourselves and write our name—Crusoe; and so my companions always called me.\"</i><br>(Defoe, 1)</p>"},

      {latLng: [51.5072, -0.1275], name: 'London', style: {fill: '#F8E23B'},
        info: "<h1>London, 1651</h1><h4>Crusoe disobeys his father and sets sail on the open seas.</h4><p><i>\"But being one day at Hull, where I went casually, and without any purpose of making an elopement at that time; but, I say, being there, and one of my companions being about to sail to London in his father’s ship, and prompting me to go with them with the common allurement of seafaring men, that it should cost me nothing for my passage, I consulted neither father nor mother any more, nor so much as sent them word of it; but leaving them to hear of it as they might, without asking God’s blessing or my father’s, without any consideration of circumstances or consequences, and in an ill hour, God knows, on the 1st of September 1651, I went on board a ship bound for London.\"</i><br>(Defoe, 5)</p>"},

      {latLng: [34.0333, -6.8000], name: 'Sallee', style: {fill: '#F8E23B'},
        info: "<h1>Sallee, 1653</h1><h4>Crusoe is made a slave, but escapes shortly thereafter.</h4><p><i>\"However, to cut short this melancholy part of our story, our ship being disabled, and three of our men killed, and eight wounded, we were obliged to yield, and were carried all prisoners into Sallee, a port belonging to the Moors.\"</i><br>(Crusoe, 16)</p>"},

      {latLng: [-15.7833, -47.8667], name: 'Brazil', style: {fill: '#F8E23B', r:10, opacity:0.75},
        info: "<h1>Brazil, 1656-1659</h1><h4>Crusoe founds a plantation in the New World.</h4><p><i>\"To this purpose, getting a kind of letter of naturalisation, I purchased as much land that was uncured as my money would reach, and formed a plan for my plantation and settlement; such a one as might be suitable to the stock which I proposed to myself to receive from England.\"</i><br>(Crusoe, 32)</p>"},

      {latLng: [-33, -78], name: "Alexander Selkirk's Island", style: {fill: '#F8E23B'},
        info: "<h1>Alexander Selkirk's Island, 1704-1709</h1><h4>The Island where Alexander Selkirk was stranded, serving as the basis for Defoe's tale.</h4>"},

      {latLng: [14.01, -60.98], name: "Robinson Crusoe's Island", style: {fill: '#F8E23B', r:10, opacity:0.75},
        info: "<h1>Robinson Crusoe's Island, 1659-1686</h1><h4>Crusoe is stranded for 28 years.</h4><p><i>\"My reign, or my captivity, whichever you please.\"</i><br>(Defoe 129)</p>"},

      {latLng: [13.16, -61.23], name: "Nearby Island Under Spanish Regime", style: {fill: '#F8E23B'},
        info: "<h1>Nearby Island, 1661</h1><h4>After two years, Crusoe explores his realm and discovers a distant Spanish isle.</h4><p><i>\"I could not tell what part of the world this might be, otherwise than that I knew it must be part of America, and, as I concluded by all my observations, must be near the Spanish dominions, and perhaps was all inhabited by savages, where, if I had landed, I had been in a worse condition than I was now; and therefore I acquiesced in the dispositions of Providence, which I began now to own and to believe ordered everything for the best; I say I quieted my mind with this, and left off afflicting myself with fruitless wishes of being there.\"</i><br>(Defoe, 101)</p>"},

      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#F8E23B'},
        info: "<h1>Lisbon, 1687</h1><h4>Returning to Europe from his long journey, Crusoe is updated on his financial status by the Portugese Captain.</h4><p><i>\"After a few days’ further conference with this ancient friend, he brought me an account of the first six years’ income of my plantation, signed by my partner and the merchant-trustees, being always delivered in goods, viz. tobacco in roll, and sugar in chests, besides rum, molasses, &c., which is the consequence of a sugar-work; and I found by this account, that every year the income considerably increased; but, as above, the disbursements being large, the sum at first was small: however, the old man let me see that he was debtor to me four hundred and seventy moidores of gold, besides sixty chests of sugar and fifteen double rolls of tobacco, which were lost in his ship; he having been shipwrecked coming home to Lisbon, about eleven years after my having the place.\"</i><br>(Defoe, 258)</p>"},

      {latLng: [42.8167, -1.6500], name: 'Pampeluna', style: {fill: '#F8E23B'},
        info: "<h1>Pampeluna, 1687</h1><h4>Crusoe stops in modern Pampelona with Friday.</h4><p><i>\"When we came to Pampeluna itself, we found it so indeed; and to me, that had been always used to a hot climate, and to countries where I could scarce bear any clothes on, the cold was insufferable; nor, indeed, was it more painful than surprising to come but ten days before out of Old Castile, where the weather was not only warm but very hot, and immediately to feel a wind from the Pyrenean Mountains so very keen, so severely cold, as to be intolerable and to endanger benumbing and perishing of our fingers and toes.\"</i><br>(Defoe, 265)</p>"},

      {latLng: [43.6045, 1.4440], name: 'Toulouse', style: {fill: '#F8E23B'},
        info: "<h1>Toulouse, 1687</h1><h4>Crusoe's entourage is attacked by wolves. Friday manages to hold them off.</h4><p><i>\"It was about two hours before night when, our guide being something before us, and not just in sight, out rushed three monstrous wolves, and after them a bear, from a hollow way adjoining to a thick wood; two of the wolves made at the guide, and had he been far before us, he would have been devoured before we could have helped him; one of them fastened upon his horse, and the other attacked the man with such violence, that he had not time, or presence of mind enough, to draw his pistol, but hallooed and cried out to us most lustily.  My man Friday being next me, I bade him ride up and see what was the matter.  As soon as Friday came in sight of the man, he hallooed out as loud as the other, “O master! O master!” but like a bold fellow, rode directly up to the poor man, and with his pistol shot the wolf in the head that attacked him.\"</i><br>(Defoe, 267)</p>"},

      {latLng: [51.1295, 1.1089], name: 'Dover', style: {fill: '#F8E23B'},
        info: "<h1>Dover, England</h1><h4>Crusoe marries and settles into a new home by the sea, but only remains a short while before returning to his island.</h4><p><i>\"When I came to England I was as perfect a stranger to all the world as if I had never been known there.\"</i><br>(Defoe, 270)</p>"}
    ];

  // Array of coordinates, name, color data, and descriptions of Candide's travels.
  var candide = [
      {latLng: [52.2833, 8.0500], name: 'Westphalia', style: {fill: '#FF69B4', r:10, opacity:0.75},
        info: "<h1>The Kingdom of Thunder-ten-Tronckh, 1753</h1><h4>Candide is evicted for his relations with Cunegonde, and is subsequently thrown into battle with the Bulgars.</h4><p><i>\"In a castle of Westphalia, belonging to the Baron of Thunder-ten-Tronckh, lived a youth, whom nature had endowed with the most gentle manners. His countenance was a true picture of his soul. He combined a true judgment with simplicity of spirit, which was the reason, I apprehend, of his being called Candide.\"</i><br>(Voltaire, 1)</p>"},

      {latLng: [52.3167, 5.5500], name: 'Holland', style: {fill: '#FF69B4'},
        info: "<h1>Holland, 1754</h1><h4>Candide is taken in by Jacques and discovers Pangloss as a beggar.</h4><p><i>\"Pangloss made answer in these terms: \"Oh, my dear Candide, you remember Paquette, that pretty wench who waited on our noble Baroness; in her arms I tasted the delights of paradise, which produced in me those hell torments with which you see me devoured; she was infected with them, she is perhaps dead of them. This present Paquette received of a learned Grey Friar, who had traced it to its source; he had had it of an old countess, who had received it from a cavalry captain, who owed it to a marchioness, who took it from a page, who had received it from a Jesuit, who when a novice had it in a direct line from one of the companions of Christopher Columbus. For my part I shall give it to nobody, I am dying.\"</i><br>(Voltaire, 15)</p>"},

      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#FF69B4', r:10, opacity:0.75},
        info: "<h1>Lisbon, 1755</h1><h4>The Great Earthquake</h4><p><i>\"Scarcely had they reached the city, lamenting the death of their benefactor, when they felt the earth tremble under their feet. The sea swelled and foamed in the harbour, and beat to pieces the vessels riding at anchor. Whirlwinds of fire and ashes covered the streets and public places; houses fell, roofs were flung upon the pavements, and the pavements were scattered. Thirty thousand inhabitants of all ages and sexes were crushed under the ruins.\"</i><br>(Voltaire, 19)</p>"},

      {latLng: [36.5333, -6.2833], name: "Cadiz", style: {fill: '#FF69B4'},
        info: "<h1>Cadiz, 1755-1756</h1><h4>Candide and Cunegonde are reunited before hitting the high seas.</h4><p><i>\"Candide having been in the Bulgarian service, performed the military exercise before the general of this little army with so graceful an address, with so intrepid an air, and with such agility and expedition, that he was given the command of a company of foot. Now, he was a captain! He set sail with Miss Cunegonde, the old woman, two valets, and the two Andalusian horses, which had belonged to the grand Inquisitor of Portugal.\"</i><br>(Voltaire, 39)</p>"},

      {latLng: [-34.6033, -58.3817], name: "Buenos Aires", style: {fill: '#FF69B4'},
        info: "<h1>Buenos Aires, 1756</h1><h4>Candide is introduced to Don Fernando d'Ibaraa y Figueora y Mascarenes y Lampourdos y Souza</h4><p><i>\"They landed at Buenos Ayres. Cunegonde, Captain Candide, and the old woman, waited on the Governor, Don Fernando d'Ibaraa, y Figueora, y Mascarenes, y Lampourdos, y Souza. This nobleman had a stateliness becoming a person who bore so many[Pg 55] names. He spoke to men with so noble a disdain, carried his nose so loftily, raised his voice so unmercifully, assumed so imperious an air, and stalked with such intolerable pride, that those who saluted him were strongly inclined to give him a good drubbing.\"</i><br>(Voltaire, 55)</p>"},

      {latLng: [5.3494, -71.1712], name: "Meta River", style: {fill: '#FF69B4'},
        info: "<h1>The Meta River, 1757</h1><h4>Candide and Cacambo head upstream and discover a village where jewels are as plentiful as pebbles.</h4><p><i>\"He stepped out with Cacambo towards the first village which he saw. Some children dressed in tattered brocades played at quoits on the outskirts. Our travellers from the other world amused themselves by looking on. The quoits were large round pieces, yellow, red, and green, which cast a singular lustre! The travellers picked a few of them off the ground; this was of gold, that of emeralds, the other of rubies—the least of them would have been the greatest ornament on the Mogul's throne.\"</i><br>(Voltaire, 76)</p>"},

      {latLng: [4.5981, -74.0758], name: 'El Dorado', style: {fill: '#FF69B4', r:10, opacity:0.75},
        info: "<h1 style=\"color: #FFD700\">El Dorado, 1757</h1><h4>Candide and Cacambo discover the city of El Dorado.</h4><p><i>\"This is vastly different from Westphalia and the Baron's castle. Had our friend Pangloss seen El Dorado he would no longer have said that the castle of Thunder-ten-Tronckh was the finest upon earth. It is evident that one must travel.\"</i><br>(Voltaire, 86)</p>"},

      {latLng: [5.8333, -55.1667], name: 'Surinam', style: {fill: '#FF69B4'},
        info: "<h1>Surinam, 1758</h1><h4>Vanderdendur steals Candide's loot from El Dorado.</h4><p><i>\"Candide sold two small diamonds, the least of which was worth more than what the skipper asked for his freight. He paid him in advance. The two sheep were put on board. Candide followed in a little boat to join the vessel in the roads. The skipper seized his opportunity, set sail, and put out to sea, the wind favouring him. Candide, dismayed and stupefied, soon lost sight of the vessel.\"</i><br>(Voltaire, 94)</p>"},

      {latLng: [44.8400, 0.5800], name: 'Bordeaux', style: {fill: '#FF69B4'},
        info: "<h1>Bordeaux, 1759</h1><h4>Vanderdendur's ship is defeated just outside the port city.</h4><p><i>\"\"But for what end, then, has this world been formed?\" said Candide.<br>\"To plague us to death,\" answered Martin.\"</i><br>(Voltaire, 103)</p>"},

      {latLng: [48.8567, 2.3508], name: 'Paris', style: {fill: '#FF69B4'},
        info: "<h1>Paris, 1760</h1><h4>Candide falls ill and is easily manipulated by the abba.</h4><p><i>\"However, the Abbé whispered to the Marchioness, who half rose, honoured Candide with a gracious smile, and Martin with a condescending nod; she gave a seat and a pack of cards to Candide, who lost fifty thousand francs in two deals, after which they supped very gaily, and every one was astonished that Candide was not moved by his loss\"</i><br>(Voltaire, 111)</p>"},

      {latLng: [45.4375, 12.3358], name: 'Venice', style: {fill: '#FF69B4'},
        info: "<h1>Venice, 1762</h1><h4>Candide searches for Cunegonde, and discovers that she may be in Constantinople.</h4><p><i>\"Upon their arrival at Venice, Candide went to search for Cacambo at every inn and coffee-house, and among all the ladies of pleasure, but to no purpose. He sent every day to inquire on all the ships that came in. But there was no news of Cacambo.\"</i><br>(Voltaire, 125)</p>"},

      {latLng: [41.0136, 28.9550], name: 'Constantinople', style: {fill: '#FF69B4'},
        info: "<h1>Constantinople, 1763</h1><h4>Candide purchases the Old Woman and Cunegonde, thus saving the day.</h4><p><i>\"\"All that is very well,\" answered Candide, \"but let us cultivate our garden.\"\"</i><br>(Voltaire, 169)</p>"}
    ];

  // Array of coordinates, name, color data, and descriptions of Equiano 6's travels.
  var equiano = [
      {latLng: [5, 7.4], name: 'Eboe', style: {fill: '#7D26CD', r:10, opacity:0.75},
        info: "<h1>Eboe, 1745</h1><h4>Equiano is born and raised in what is known as Nigeria today.</h4><p><i>\"some interesting scene of real life, such as a great achievement, domestic employment, a pathetic story, or some rural sport; and as the subject is generally founded on some recent event, it's therefore ever new.\"</i><br>(Equiano, 11)</p>"},

      {latLng: [37.5000, -79.0000], name: 'Virginia', style: {fill: '#7D26CD'},
        info: "<h1>Virginia, 1756</h1><h4>After being placed into slavery, Equiano is first assigned to Virginia, and is given a new name along the way.</h4><p><i>\"The white men had some spell or magic they put in the water when they liked in order to stop the vessel. I was exceedingly amazed at this account, and really thought they were spirits.\"</i><br>(Equiano, 77)</p>"},

      {latLng: [51.5072, -0.1275], name: 'London', style: {fill: '#7D26CD', r:10, opacity:0.75},
        info: "<h1>London, 1767-1797</h1><h4>After arriving as a slave (in 1756), Equiano returns to work for Dr. Charles Irving. Later he marries Susanna Cullen (1792) and passes away here (1797).</h4><p><i>\"\"</i><br></p>"},

      {latLng: [52.3167, 5.5500], name: 'Holland', style: {fill: '#7D26CD'},
        info: "<h1>Holland, 1757</h1><h4>Equiano travels as a slave.</h4><p><i>\"I remained in this ship a considerable time, during which we made several cruises, and visited a variety of places: among others we were twice in Holland, and brought over several persons of distinction from it, whose names I do not now remember.\"</i><br>(Equiano, 112)</p>"},

      {latLng: [55.9500, -3.1833], name: 'Scotland', style: {fill: '#7D26CD'},
        info: "<h1>Scotland, 1758</h1><h4>Equiano travels as a slave.</h4><p><i>\"Sometime afterwards the ship went to Leith in Scotland, and from thence to the Orkneys, where I was surprised in seeing scarcely any night: and from thence we sailed with a great fleet, full of soldiers, for England.\"</i><br>(Equiano, 113)</p>"},

      {latLng: [36.1430, -5.3530], name: 'Gibraltar', style: {fill: '#7D26CD'},
        info: "<h1>Gibraltar, 1759</h1><h4>Equiano travels as a slave.</h4><p><i>\"When I came to Spithead, I found we were destined for the Mediterranean, with a large fleet, which was now ready to put to sea. We only waited for the arrival of the admiral, who soon came on board; and about the begining of the spring 1759, having weighed anchor, and got under way, failed for the Mediterranean; and in eleven days, from the Land's End, we got to Gibraltar. While we were here I used to be often on shore, and got various fruits in great plenty, and very cheap.\"</i><br>(Equiano, 137)</p>"},

      {latLng: [45.0000, -63.0000], name: 'Nova Scotia', style: {fill: '#7D26CD'},
        info: "<h1>Nova Scotia, 1760</h1><h4>Equiano travels as a slave.</h4><p><i>\"We were here joined by different men of war and transport ships with soldiers; after which, our fleet being increased to a prodigious number of ships of all kinds, we sailed for Cape Breton in Nova Scotia. We had the good and gallant General Wolfe on board our ship, whose affability made him highly esteemed and beloved by all the men.\"</i><br>(Equiano, 121)</p>"},

      {latLng: [18.1824, -77.3218], name: 'Jamaica', style: {fill: '#7D26CD'},
        info: "<h1>Jamaica, 1770</h1><h4>Equiano returns here a free man after briefly passing through while enslaved.</h4><p><i>\"I have since often seen in Jamaica and other islands free men, whom I have known in America, thus villainously trepanned and held in bondage.\"</i><br>(Equiano, 249)</p>"},

      {latLng: [32.9605, -83.1132], name: 'Georgia', style: {fill: '#7D26CD'},
        info: "<h1>Georgia, 1762</h1><h4>Equiano travels as a slave.</h4><p><i>\"When we got to our destined places, Georgia and Charles Town, I expected I should have an opportunity of selling my little property to advantage: but here, particularly in Charles Town, I met with buyers, white men, who imposed on me as in other places. Notwithstanding, I was resolved to have fortitude; thinking no lot or trial is too hard when kind Heaven is the rewarder.\"</i><br>(Equiano, 254)</p>"},

      {latLng: [34.0000, -81.0000], name: 'South Carolina', style: {fill: '#7D26CD'},
        info: "<h1>South Carolina</h1><h4>Equiano travels as a slave.</h4><p><i>\"My captain also said he could get much more than a hundred guineas for me in Carolina. This I knew to be a fact; for the gentleman that wanted to buy me came off several times on board of us, and spoke to me to live with him, and said he would use me well.\"</i><br>(Equiano, 256)</p>"},

      {latLng: [39.9500, -75.1667], name: 'Philadelphia', style: {fill: '#7D26CD', r:10, opacity:0.75},
        info: "<h1>Philadelphia, 1763-1766</h1><h4>Equiano is purchased by Robert King, and after three years saves enough money to buy his own freedom.</h4><p><i>\"By his kind treatment I did at last endeavour to compose myself; and with fortitude, though moneyless, determined to face whatever fate had decreed for me. Mr. King soon asked me what I could do; and at the same time said he did not mean to treat me as a common slave.\"</i><br>(Equiano, 195)</p>"},

      {latLng: [41.0136, 28.9550], name: 'Constantinople', style: {fill: '#7D26CD'},
        info: "<h1>Constantinople, 1768</h1><h4>Equiano travels as a free man.</h4><p><i>\"When he was going he wished me to stay on board the Preston, to learn the French horn; but the ship being ordered for Turkey I could not think of leaving my master, to whom I was very warmly attached; and I told him if he left me behind it would break my heart. This prevailed on him to take me with him; but he left Dick on board the Preston, whom I embraced at parting for the last time.\"</i><br>(Equiano, 118)</p>"},

      {latLng: [38.7139, -9.1394], name: 'Lisbon', style: {fill: '#7D26CD'},
        info: "<h1>Lisbon, 1769</h1><h4>Equiano travels as a free man.</h4><p><i>\"The Ocean, and another large French ship, called the Redoubtable, endeavouring to escape, ran ashore at Cape Logas, on the coast of Portugal; and the French admiral and some of the crew got ashore; but we, finding it impossible to get the ships off, set fire to them both. About midnight I saw the Ocean blow up, with a most dreadful explosion. I never beheld a more awful scene. In less than a minute the midnight for a certain space seemed turned into day by the blaze, which was attended with a noise louder and more terrible than thunder, that seemed to rend every element around us.\"</i><br>(Equiano, 148)</p>"},

      {latLng: [41.9000, 12.4833], name: 'Italy', style: {fill: '#7D26CD'},
        info: "<h1>Italy, 1770</h1><h4>Equiano travels as a free man.</h4><p></p>"},

      {latLng: [12.0500, -61.7500], name: 'Grenada', style: {fill: '#7D26CD'},
        info: "<h1>Grenada, 1771</h1><h4>Equiano travels as a free man.</h4><p><i>\"Once in the Grenada islands, when I and about eight others were pulling a large boat with two puncheons of water in it, a surf struck us, and drove the boat and all in it about half a stone's throw, among some trees, and above the high water mark.\"</i><br>(Equiano, 245)</p>"}
    ];

  // Constructor for a new map on the page.
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

    // Function to enable information to display on the page.
    onMarkerClick: function(events, index) {
      $("#info").html(globalMarkers[index].info);
    }
  });

  // Event listeners to display info for each work.
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
