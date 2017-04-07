





var map = new ol.Map({
    target: 'map'
});
var osm = new ol.layer.Tile({
    source: new ol.source.OSM()
});
map.addLayer(osm);

// map.setView(view);
var lon = 121.48;
var lat = 31.22;
var center = ol.proj.fromLonLat([lon, lat], new ol.proj.Projection({code: "EPSG:3857"}));
var view = new ol.View({
    center: center,
    zoom: 16
});
map.setView(view);
document.getElementById("zoom-out").onclick = function () {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom - 1);
};
document.getElementById("zoom-in").onclick = function () {
    var view = map.getView();
    var zoom = view.getZoom();
    view.setZoom(zoom + 1);
};
