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
var format_Kelompok7_1 = new ol.format.GeoJSON();
var features_Kelompok7_1 = format_Kelompok7_1.readFeatures(json_Kelompok7_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelompok7_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelompok7_1.addFeatures(features_Kelompok7_1);
var lyr_Kelompok7_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelompok7_1, 
                style: style_Kelompok7_1,
                interactive: true,
                title: '<img src="styles/legend/Kelompok7_1.png" /> Kelompok 7'
            });
var format_Kelompok2_2 = new ol.format.GeoJSON();
var features_Kelompok2_2 = format_Kelompok2_2.readFeatures(json_Kelompok2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelompok2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelompok2_2.addFeatures(features_Kelompok2_2);
var lyr_Kelompok2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelompok2_2, 
                style: style_Kelompok2_2,
                interactive: true,
                title: '<img src="styles/legend/Kelompok2_2.png" /> Kelompok 2'
            });
var format_Kelompok3_3 = new ol.format.GeoJSON();
var features_Kelompok3_3 = format_Kelompok3_3.readFeatures(json_Kelompok3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelompok3_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelompok3_3.addFeatures(features_Kelompok3_3);
var lyr_Kelompok3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelompok3_3, 
                style: style_Kelompok3_3,
                interactive: true,
                title: '<img src="styles/legend/Kelompok3_3.png" /> Kelompok 3'
            });
var format_Kelompok6_4 = new ol.format.GeoJSON();
var features_Kelompok6_4 = format_Kelompok6_4.readFeatures(json_Kelompok6_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelompok6_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelompok6_4.addFeatures(features_Kelompok6_4);
var lyr_Kelompok6_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelompok6_4, 
                style: style_Kelompok6_4,
                interactive: true,
                title: '<img src="styles/legend/Kelompok6_4.png" /> Kelompok 6'
            });
var format_Kelompok1_5 = new ol.format.GeoJSON();
var features_Kelompok1_5 = format_Kelompok1_5.readFeatures(json_Kelompok1_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelompok1_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelompok1_5.addFeatures(features_Kelompok1_5);
var lyr_Kelompok1_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelompok1_5, 
                style: style_Kelompok1_5,
                interactive: true,
                title: '<img src="styles/legend/Kelompok1_5.png" /> Kelompok 1'
            });
var format_Kelompok4_6 = new ol.format.GeoJSON();
var features_Kelompok4_6 = format_Kelompok4_6.readFeatures(json_Kelompok4_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kelompok4_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kelompok4_6.addFeatures(features_Kelompok4_6);
var lyr_Kelompok4_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kelompok4_6, 
                style: style_Kelompok4_6,
                interactive: true,
                title: '<img src="styles/legend/Kelompok4_6.png" /> Kelompok 4'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Kelompok7_1.setVisible(true);lyr_Kelompok2_2.setVisible(true);lyr_Kelompok3_3.setVisible(true);lyr_Kelompok6_4.setVisible(true);lyr_Kelompok1_5.setVisible(true);lyr_Kelompok4_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Kelompok7_1,lyr_Kelompok2_2,lyr_Kelompok3_3,lyr_Kelompok6_4,lyr_Kelompok1_5,lyr_Kelompok4_6];
lyr_Kelompok7_1.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'IMAGE': 'IMAGE', 'KETINGGIAN': 'KETINGGIAN', 'img': 'img', });
lyr_Kelompok2_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'Lokasi': 'Lokasi', 'Kode_Foto': 'Kode_Foto', 'Tinggi_Ban': 'Tinggi_Ban', 'img': 'img', });
lyr_Kelompok3_3.set('fieldAliases', {'x': 'x', 'y': 'y', 'nm_img': 'nm_img', 'image': 'image', 'ketinggian': 'ketinggian', 'img': 'img', });
lyr_Kelompok6_4.set('fieldAliases', {'x': 'x', 'y': 'y', 'foto': 'foto', 'ketingian': 'ketingian', 'img': 'img', });
lyr_Kelompok1_5.set('fieldAliases', {'No': 'No', 'X': 'X', 'Y': 'Y', 'Jalan': 'Jalan', 'Photo': 'Photo', 'Ketinggian': 'Ketinggian', 'img': 'img', });
lyr_Kelompok4_6.set('fieldAliases', {'Y': 'Y', 'X': 'X', 'Ketinggian': 'Ketinggian', 'Foto': 'Foto', 'imge': 'imge', });
lyr_Kelompok7_1.set('fieldImages', {'Y': '', 'X': '', 'IMAGE': '', 'KETINGGIAN': '', 'img': '', });
lyr_Kelompok2_2.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'Lokasi': 'TextEdit', 'Kode_Foto': 'TextEdit', 'Tinggi_Ban': 'TextEdit', 'img': 'TextEdit', });
lyr_Kelompok3_3.set('fieldImages', {'x': 'TextEdit', 'y': 'TextEdit', 'nm_img': 'TextEdit', 'image': 'TextEdit', 'ketinggian': 'TextEdit', 'img': 'TextEdit', });
lyr_Kelompok6_4.set('fieldImages', {'x': '', 'y': '', 'foto': '', 'ketingian': '', 'img': '', });
lyr_Kelompok1_5.set('fieldImages', {'No': '', 'X': '', 'Y': '', 'Jalan': '', 'Photo': '', 'Ketinggian': '', 'img': '', });
lyr_Kelompok4_6.set('fieldImages', {'Y': '', 'X': '', 'Ketinggian': '', 'Foto': '', 'imge': '', });
lyr_Kelompok7_1.set('fieldLabels', {'Y': 'inline label', 'X': 'inline label', 'IMAGE': 'no label', 'KETINGGIAN': 'inline label', 'img': 'no label', });
lyr_Kelompok2_2.set('fieldLabels', {'X': 'inline label', 'Y': 'inline label', 'Lokasi': 'inline label', 'Kode_Foto': 'no label', 'Tinggi_Ban': 'inline label', 'img': 'no label', });
lyr_Kelompok3_3.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'nm_img': 'inline label', 'image': 'no label', 'ketinggian': 'inline label', 'img': 'no label', });
lyr_Kelompok6_4.set('fieldLabels', {'x': 'inline label', 'y': 'inline label', 'foto': 'no label', 'ketingian': 'inline label', 'img': 'no label', });
lyr_Kelompok1_5.set('fieldLabels', {'No': 'inline label', 'X': 'inline label', 'Y': 'inline label', 'Jalan': 'inline label', 'Photo': 'no label', 'Ketinggian': 'inline label', 'img': 'no label', });
lyr_Kelompok4_6.set('fieldLabels', {'Y': 'inline label', 'X': 'inline label', 'Ketinggian': 'inline label', 'Foto': 'no label', 'imge': 'no label', });
lyr_Kelompok4_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});