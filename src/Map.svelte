<script>
  export let mapData;
  let map = AmCharts.makeChart("map", {
    type: "map",
    pathToImages: "http://www.amcharts.com/lib/3/images/",
    addClassNames: true,
    fontSize: 15,
    color: "#FFFFFF",
    projection: "mercator",
    backgroundAlpha: 1,
    backgroundColor: "rgba(30,30,30,1)",
    dataProvider: {
      map: "worldLow",
      getAreasFromMap: true,
      images: [],
      areas: [
        {
          id: "AU",
          title: "Australia",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "IN",
          title: "India",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "JP",
          title: "Japan",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "NL",
          title: "Netherlands",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "PH",
          title: "Philippines",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "TR",
          title: "Turkey",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "UA",
          title: "Ukraine",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "US",
          title: "United States",
          color: "rgba(129,129,129,1)"
        },
        {
          id: "BR",
          title: "Brazil",
          color: "rgba(75,216,181,0.8)"
        },
        {
          id: "MY",
          title: "Malaysia",
          color: "rgba(75,216,181,0.8)"
        },
        {
          id: "PL",
          title: "Poland",
          color: "rgba(75,216,181,0.8)"
        }
      ]
    },
    balloon: {
      horizontalPadding: 15,
      borderAlpha: 0,
      borderThickness: 1,
      verticalPadding: 15
    },
    areasSettings: {
      color: "rgba(50,50,50,1)",
      outlineColor: "rgba(90,90,90,1)",
      rollOverOutlineColor: "rgba(80,80,80,1)",
      rollOverBrightness: 20,
      selectedBrightness: 20,
      selectable: true,
      unlistedAreasAlpha: 0,
      unlistedAreasOutlineAlpha: 0
    },
    imagesSettings: {
      alpha: 1,
      color: "rgba(129,129,129,1)",
      outlineAlpha: 0,
      rollOverOutlineAlpha: 0,
      outlineColor: "rgba(80,80,80,1)",
      rollOverBrightness: 20,
      selectedBrightness: 20,
      selectable: true
    },
    linesSettings: {
      color: "rgba(129,129,129,1)",
      selectable: true,
      rollOverBrightness: 20,
      selectedBrightness: 20
    },
    zoomControl: {
      zoomControlEnabled: true,
      homeButtonEnabled: false,
      panControlEnabled: false,
      right: 25,
      bottom: 35,
      minZoomLevel: 1,
      maxZoomLevel: 6,
      gridHeight: 100,
      gridAlpha: 0.1,
      gridBackgroundAlpha: 0,
      gridColor: "#FFFFFF",
      draggerAlpha: 1,
      buttonCornerRadius: 2
    }
  });

  setTimeout(() => {
    try {
      map.zoomToLongLat(3, 140, -20);
    } catch (e) {}
  }, 1000);

  $: {
    map.clearLabels();
    Object.values(mapData.offices).forEach(office => {
      let area = map.getObjectById(office.id);
      area.color = office.color;
      area.title = office.label;
      if (area.validate) {
        area.validate();
      }
    });
  }
</script>

<div id="map" style="width: 100%; height: 100%;" />
