<script>
  export let colors = [];
  let map = AmCharts.makeChart("map", {
    type: "map",
    pathToImages: "http://www.amcharts.com/lib/3/images/",
    addClassNames: true,
    fontSize: 15,
    color: "#FFFFFF",
    projection: "mercator",
    backgroundAlpha: 1,
    backgroundColor: "rgba(80,80,80,1)",
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
      color: "rgba(100,100,100,1)",
      outlineColor: "rgba(80,80,80,1)",
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
      right: 38,
      bottom: 30,
      minZoomLevel: 0.25,
      gridHeight: 100,
      gridAlpha: 0.1,
      gridBackgroundAlpha: 0,
      gridColor: "#FFFFFF",
      draggerAlpha: 1,
      buttonCornerRadius: 2
    }
  });

  $: {
    colors.forEach(color => {
      let area = map.getObjectById(color.id);
      area.color = color.color;
      if (area.validate) {
        area.validate();
      }
    });
  }
</script>

<div id="map" style="width: 100vw; height: 100vh;" />
