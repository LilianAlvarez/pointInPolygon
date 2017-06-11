function(userPositionX, userPositionY, polygonTab) {
    var i;
    var j;
    var c = 0;

    for (i = 0, j = polygonTab.length-1; i < polygonTab.length; j = i++) {
      if (((polygonTab[i].longitude>userPositionY) !== (polygonTab[j].longitude>userPositionY)) &&
            (userPositionX < (polygonTab[j].latitude-polygonTab[i].latitude) * (userPositionY-polygonTab[i].longitude) / (polygonTab[j].longitude-polygonTab[i].longitude) + polygonTab[i].latitude))
          c = !c;
    }
    return c;
}
