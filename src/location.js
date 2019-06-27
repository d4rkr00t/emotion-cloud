 /**
  * Lng / Lat
   * SF BBox: -122.527575,37.558172,-122.112155,37.81953
   * MTV BBox: -122.510009,37.208354,-121.742340,37.566249
   * SYD BBox: 150.570084,-34.206115,151.366593,-33.553976
   * India BBox: 77.395935,12.818497,77.787323,13.086167
   * JP BBox: 128.206329,30.088999,147.291641,45.928588
   * Turkey BBox: 32.575053,39.770110,33.025492,40.032437
   * Ukraine BBox: 22.382927,44.529801,40.312614,52.377276
   * Netherlands BBox: 3.262424,51.088860,7.085667,53.559073
   * Phil BBox: 116.059570,4.609278,129.858398,19.352611
   */

const locations = [
  {
    id: '516b18ae43d11ffad821a01306fcfbb7b1a699a1',
    name: 'Amsterdam, Netherlands',
    box: {
      upperLat: 51.088860,
      upperLon: 3.262424,
      lowerLat: 53.559073,
      lowerLon: 7.085667,
    }
  },
  {
  id: 'a12a50054f1a55944bb55f7e9f3a183f47ee23b6',
  name: 'Australia',
  box: {
    upperLat: -34.206115,
    upperLon: 150.570084,
    lowerLat: -33.553976,
    lowerLon: 151.366593,
  }
},
{
  id: 'f32746ce7bfe8c5af880d05befcbb17b0cdb9d83'
  name: "San Francisco, United States",
  box: {
    upperLat: 37.558172,
    upperLon: -122.527575,
    lowerLat: 37.81953,
    lowerLon: -122.112155,
  }
},
{
  id: "d97e538e8a103f8023d27937519b26aa72d60455",
  name: "Mountain View, United States"
  box: {
    upperLat: 37.208354,
    upperLon: -122.510009,
    lowerLat: 37.566249,
    lowerLon: -121.742340,
  }
},
{ 
  id: "fd6923b3ff11ab7edee1cb1038e3ed69a99e2b6e",
  name: "Bengaluru, India"
  box: {
    upperLat: 12.818497,
    upperLon: 77.395935,
    lowerLat: 13.086167,
    lowerLon: 77.787323,
  }
},
{
  id: '4d032d9ea3f111f849b9087725caaf3ff2075b0a',
  name: 'Ankara (Cepa), Turkey',
  box: {
    upperLat: 12.818497,
    upperLon: 77.395935,
    lowerLat: 13.086167,
    lowerLon: 77.787323,
  }
}
]

/**
 * coords: {
 *  latitude: number,
 *  longitude: number,
 * }
 */
function determineLocation(coords) {



}
