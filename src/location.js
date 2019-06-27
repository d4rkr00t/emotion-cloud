const locations = [
  {
    id: '516b18ae43d11ffad821a01306fcfbb7b1a699a1',
    name: 'Amsterdam, Netherlands',
    box: {
      upperLat: 51.08886,
      upperLon: 3.262424,
      lowerLat: 53.559073,
      lowerLon: 7.085667
    }
  },
  {
    id: 'a12a50054f1a55944bb55f7e9f3a183f47ee23b6',
    name: 'Australia',
    box: {
      upperLat: -34.206115,
      upperLon: 150.570084,
      lowerLat: -33.553976,
      lowerLon: 151.366593
    }
  },
  {
    id: 'f32746ce7bfe8c5af880d05befcbb17b0cdb9d83',
    name: 'San Francisco, United States',
    box: {
      upperLat: 37.558172,
      upperLon: -122.527575,
      lowerLat: 37.81953,
      lowerLon: -122.112155
    }
  },
  {
    id: 'd97e538e8a103f8023d27937519b26aa72d60455',
    name: 'Mountain View, United States',
    box: {
      upperLat: 37.208354,
      upperLon: -122.510009,
      lowerLat: 37.566249,
      lowerLon: -121.74234
    }
  },
  {
    id: 'fd6923b3ff11ab7edee1cb1038e3ed69a99e2b6e',
    name: 'Bengaluru, India',
    box: {
      upperLat: 12.818497,
      upperLon: 77.395935,
      lowerLat: 13.086167,
      lowerLon: 77.787323
    }
  },
  {
    id: '8b30de8d0026b9a13991ae34e9156dae60320522',
    name: 'Ankara, Turkey',
    box: {
      upperLat: 39.77011,
      upperLon: 32.575053,
      lowerLat: 40.032437,
      lowerLon: 33.025492
    }
  },
  {
    id: 'c0f9e76ae87a44d09f4ecc3638893280374d4d9d',
    name: 'Austin, United States',
    box: {
      upperLat: 30.143344,
      upperLon: -97.986226,
      lowerLat: 30.472938,
      lowerLon: -97.489782
    }
  },
  {
    id: 'f346ebea1e75403daab6d606573cee04feb64890',
    name: 'Boston, United States',
    box: {
      upperLat: 42.229205,
      upperLon: -71.229697,
      lowerLat: 42.525432,
      lowerLon: -70.816337
    }
  },
  {
    id: '133286126346044a11684c98194097d0d9e80aaf',
    name: 'Falls Church, United States',
    box: {
      upperLat: 38.859142,
      upperLon: -77.143134,
      lowerLat: 38.898364,
      lowerLon: -77.062367
    }
  },
  {
    id: '89669a88161843d8f82875bc1ac0bb10a814c15d',
    name: 'Gdansk, Poland',
    box: {
      upperLat: 54.227824,
      upperLon: 18.340355,
      lowerLat: 54.487105,
      lowerLon: 18.914391
    }
  },
  {
    id: 'e301220d593fa1756ae0dfe89a6dba74164a4cb3',
    name: 'Georgetown, United States',
    box: {
      upperLat: 38.900068,
      upperLon: -77.081692,
      lowerLat: 38.918068,
      lowerLon: -77.051094
    }
  },
  {
    id: 'c4a315a05b9a529c54af2caccc5ae9bb8662059c',
    name: 'Kuala Lumpur, Malaysia',
    box: {
      upperLat: 2.547323,
      upperLon: 100.913415,
      lowerLat: 3.501791,
      lowerLon: 102.160363
    }
  },
  {
    id: '5e8d5f3446f5a0aafbd528523c50c7af683e1143',
    name: 'Lviv, Ukraine',
    box: {
      upperLat: 44.529801,
      upperLon: 22.382927,
      lowerLat: 52.377276,
      lowerLon: 40.312614
    }
  },
  {
    id: 'd40655e729700e8c723336383e0b17ccdd947625',
    name: 'Manila, Philippines',
    box: {
      upperLat: 4.609278,
      upperLon: 116.05957,
      lowerLat: 19.352611,
      lowerLon: 129.858398
    }
  },
  {
    id: '1f3533226035e0d6f3ac71ddf0d327bc9fc4f178',
    name: 'New York, United States',
    box: {
      upperLat: 40.615353,
      upperLon: -74.340934,
      lowerLat: 40.970923,
      lowerLon: -73.569831
    }
  },
  {
    id: 'a23e3ba4ad7dddafd1c17bffaaae42ec5b7bdf1d',
    name: 'Porto Alegre, Brazil',
    box: {
      upperLat: -30.413437,
      upperLon: -51.784465,
      lowerLat: -29.802807,
      lowerLon: -50.727031
    }
  },
  {
    id: '2f1e3b97386fe65984f83bedd6a0d22b8d02cd34',
    name: 'Sao Paulo, Brazil',
    box: {
      upperLat: -23.838839,
      upperLon: -46.991272,
      lowerLat: -23.383327,
      lowerLon: -46.241455
    }
  },
  {
    id: 'b3b30a080f4801c52a9b2ae8fe1a11c044a8655c',
    name: 'Yokohama, Japan',
    box: {
      upperLat: 30.088999,
      upperLon: 128.206329,
      lowerLat: 45.928588,
      lowerLon: 147.291641
    }
  }
];

const homeOffice = {
  id: "64c10e153b7e2d9b40cee7e9f7d5ca1865eeb01a",
  name: "Home Office"
};


function between(l, r) {
  const lower = Math.min(l, r);
  const upper = Math.max(l, r);
  return x => x >= lower && x <= upper;
}

function isCoordInside(location) {
  const { box } = location;
  const latBetween = between(box.lowerLat, box.upperLat);
  const lonBetween = between(box.lowerLon, box.upperLon);
  return coords => latBetween(coords.latitude) && lonBetween(coords.longitude);
}

const fns = locations.map(isCoordInside);

/**
 * coords: {
 *  latitude: number,
 *  longitude: number,
 * }
 */
export function determineLocation(coords) {
  let location = homeOffice;
  fns.map((fn, idx) => {
    if (fn(coords)) {
      location = locations[idx];
    }
  });
  return location;
}
