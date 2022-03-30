export const seedData = {
  users: {
    _model: "User",
    homer: {
      firstName: "Homer",
      lastName: "Simpson",
      email: "homer@simpson.com",
      password: "secret"
    },
    marge: {
      firstName: "Marge",
      lastName: "Simpson",
      email: "marge@simpson.com",
      password: "secret"
    },
    bart: {
      firstName: "Bart",
      lastName: "Simpson",
      email: "bart@simpson.com",
      password: "secret"
    }
  },
  categories: {
    _model: "Category",
    broadleaf: {
      title: "Broadleaf",
      userid: "->users.bart"
    },
    conifer: {
      title: "Conifer",
      userid: "->users.bart"
    },
    mixed: {
      title: "Mixed",
      userid: "->users.bart"
    }
  },
  woods: {
    _model : "Wood",
    wood_1 : {
      title: "Clogrennane",
      description: "Raheendoran, Co. Carlow. This mostly broadleaved woodland contains a heritage site (stone bridge), and a small picnic area",
      latitude: 52.79719,
      longitude: -6.99034,
      categoryid: "->categories.broadleaf"
    },
    wood_2 : {
      title: "Dún a Rí Forest Park",
      description: "Kingscourt, County Cavan. This is a broadleaved woodland, small lake, heritage sites (holy wells, fairy rings), picnic area, toilets, and a viewpoint",
      latitude: 53.91902,
      longitude: -6.79264,
      categoryid: "->categories.broadleaf"
    },
    wood_3 : {
      title: "Ballyannan Wood",
      description: "Ballinacurra, County Cork. On the Owenacurra Estuary, south of Midleton, this woods has a heritage site (pillar), viewpoints, and picnic areas",
      latitude: 51.90048,
      longitude: -8.17594,
      categoryid: "->categories.broadleaf"
    },
    wood_4 : {
      title: "Dromillihy Wood",
      description: "East of Skibbereen on the N71, this wood contains picnic areas and well maintained walks",
      latitude: 51.59307,
      longitude: -9.10065,
      categoryid: "->categories.broadleaf"
    },
    wood_5 : {
      title: "Killegar",
      description: "A remote Wood, close to Glasshouse Lake. Particularly quiet, and serene. Sometimes is the site of a Mushroom Festival",
      latitude: 54.00355,
      longitude: -7.59778,
      categoryid: "->categories.broadleaf"
    },
    wood_6 : {
      title: "Ardan Wood",
      description: "Woodlands like Ardan are vital wildlife refuges. There is an established badger sett on site. Common and Soprano Pipistrelle bats have been recorded on the site too, with plenty of potential bat roosting sites in the trees. Pedunculate Oak is the dominant species in the woodland canopy.",
      latitude: 53.35747,
      longitude: -7.43464,
      categoryid: "->categories.broadleaf"
    },
    wood_7 : {
      title: "Humphreystown",
      description: "The seven and a half acre site sits south of Blessington lakes. The majority of trees are ash, birch, alder and oaks. A natural stream feeds into large man-made ponds. Otters, pine martens, badgers, foxes and red squirrels have all been seen on this site. The stream also contains white-clawed crayfish, an endangered species. This small site is such a vital refuge for so many sensitive species that it is currently not open to the public",
      latitude: 53.10922,
      longitude: -6.54802,
      categoryid: "->categories.broadleaf"
    },
    wood_8 : {
      title: "Blessington",
      description: "This Blessington reserve is located in County Wicklow, on the shoreline on the Blessington reservoir, and a wetland area in the centre of the site. Some of the oldest trees on site are non-native beech planted around 200 years ago. Willow and oak are in the process of regenerating. Long eared owls and buzzards roost around the site",
      latitude: 53.15202,
      longitude: -6.54593,
      categoryid: "->categories.broadleaf"
    },
    wood_9 : {
      title: "Camcor Wood",
      description: "Camcor Wood in Co Offaly, in the foothills of the Slieve Blooms mountains, is located beside Kinnitty Castle. The currently pristine Camcor River runs through it. The braided river results in small wooded islands filled with ancient hazel trees. There is a wide variety of ground in the woods and in the grasslands outside",
      latitude: 53.10077,
      longitude: -7.69339,
      categoryid: "->categories.broadleaf"
    },
    wood_10 : {
      title: "Kilbrannish Recreational Forest",
      description: "This conifer woodland, contains a heritage site (standing stone), picnic areas, and a viewpoint",
      latitude: 52.65739,
      longitude: -6.75407,
      categoryid: "->categories.conifer"
    },
    wood_11 : {
      title: "Bawnboy Wood",
      description: "West of Ballyconnell town, this mainly conifer woodland, has lakes, heritage site (fairy ring), cafe, and some lovely viewpoints",
      latitude: 54.13216,
      longitude: -7.70197,
      categoryid: "->categories.conifer"
    },
    wood_12 : {
      title: "Carrigfadda Wood",
      description: "Carrigfadda Wood, Co. Cork, contains a heritage site (holy year cross), pretty hill walk and viewpoints",
      latitude: 51.63456,
      longitude: -9.09346,
      categoryid: "->categories.conifer"
    },
    wood_13 : {
      title: "Glansheskin Woods",
      description: "Located at Glensheskin Woods , Co. Cork, is a heritage site (rath), viewpoint, and a small picnic area",
      latitude: 52.18892,
      longitude: -8.23382,
      categoryid: "->categories.conifer"
    },
    wood_14 : {
      title: "Gougane Barra National Forest Park",
      description: "20 km south west of Ballingeary, off the R584, this conifer woodland, has viewpoints, waterfalls, picnic areas, carpark and toilets",
      latitude: 51.83134,
      longitude: -9.33204,
      categoryid: "->categories.conifer"
    },
    wood_15 : {
      title: "Ards Forest Park",
      description: "Mid way between Creeslough and Dunfanaghy on N56, this forest is in a 481-hectare park with the ruins of ring forts & megalithic tombs, trails, viewpoints & a playground",
      latitude: 55.16137,
      longitude: -7.86734,
      categoryid: "->categories.conifer"
    },
    wood_16 : {
      title: "Tibradden Wood",
      description: "Spectacular hikes through a beautiful and dense forest along well marked and maintained trails. Passes over the summit of Tibradden Mountain and beside the prehistoric cairns. The trail meets up with the Wicklow way",
      latitude: 53.24418,
      longitude: -6.29492,
      categoryid: "->categories.conifer"
    },
    wood_17 : {
      title: "Woodstock",
      description: "Outside Inistioge, County Kilkenny, and beside the river Nore, this is a privately owned and beautifully maintained, broadleaved and conifer woodland. A part of the estate, theres an arboreum, picnic area, tea room (in the summer), and a car park",
      latitude: 52.47575,
      longitude: -7.06036,
      categoryid: "->categories.mixed"
    },
    wood_18 : {
      title: "Jenkinstown",
      description: "A broadleaved and conifer woodland, with a heritage well, deer reserve, viewpoints, picnic area, toilets. Two, small walking loops, within it, that are ideal for families with small kids",
      latitude: 52.73143,
      longitude: -7.28910,
      categoryid: "->categories.mixed"
    },
    wood_19 : {
      title: "Ballyhoura",
      description: "In Rockspring, County Limerick, this is a conifer woodland, which has heritage cairns, parking, and trails suitable for biking",
      latitude: 52.31860,
      longitude: -8.50600,
      categoryid: "->categories.mixed"
    },
    wood_20 : {
      title: "Belleek Woods",
      description: "North of Ballina, Co. Mayo, Belleek Woods has nice strolling walks, picnic areas and heritage points of interest. The woods are well maintained",
      latitude: 54.12766,
      longitude: -9.14449,
      categoryid: "->categories.mixed"
    },
    wood_21 : {
      title: "Brackloon Wood",
      description: "Brackloon Wood, Westport, Co. Mayo, has a nicely mixed forest. There's a carpark nearby from the forest entrance. Approx has a 4km loop walk, with a variety of plants dotted along",
      latitude: 53.75267,
      longitude: -9.55994,
      categoryid: "->categories.mixed"
    },
    wood_22 : {
      title: "Derrycassin Woods",
      description: "In Mullinroe, Co. Longford, Derrycassin Woods is situated alongside the south side of Lake Gamhna. Ideal for walking and varied grounds to discover. Marked path, picnic area nd playground are located here",
      latitude: 53.82289,
      longitude: -7.52706,
      categoryid: "->categories.mixed"
    },
  }
};
