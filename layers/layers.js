var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_data_1 = new ol.format.GeoJSON();
var features_data_1 = format_data_1.readFeatures(json_data_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_data_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_data_1.addFeatures(features_data_1);
var lyr_data_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_data_1, 
                style: style_data_1,
                interactive: true,
                title: '<img src="styles/legend/data_1.png" /> data'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_data_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_data_1];
lyr_data_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Y': 'Y', 'X': 'X', 'Ketinggian': 'Ketinggian', 'Foto': 'Foto', 'img': 'img', });
lyr_data_1.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', 'Y': '', 'X': '', 'Ketinggian': '', 'Foto': '', 'img': '', });
lyr_data_1.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Y': 'no label', 'X': 'no label', 'Ketinggian': 'no label', 'Foto': 'no label', 'img': 'no label', });
lyr_data_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});