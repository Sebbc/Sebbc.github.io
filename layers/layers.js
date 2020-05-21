var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Nous_1 = new ol.format.GeoJSON();
var features_Nous_1 = format_Nous_1.readFeatures(json_Nous_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nous_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nous_1.addFeatures(features_Nous_1);
var lyr_Nous_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Nous_1, 
                style: style_Nous_1,
                interactive: true,
                title: '<img src="styles/legend/Nous_1.png" /> Nous'
            });
var format_100kmNOUS_2 = new ol.format.GeoJSON();
var features_100kmNOUS_2 = format_100kmNOUS_2.readFeatures(json_100kmNOUS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100kmNOUS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100kmNOUS_2.addFeatures(features_100kmNOUS_2);
var lyr_100kmNOUS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100kmNOUS_2, 
                style: style_100kmNOUS_2,
                interactive: true,
                title: '<img src="styles/legend/100kmNOUS_2.png" /> 100kmNOUS'
            });
var format_EvelyneChristian_3 = new ol.format.GeoJSON();
var features_EvelyneChristian_3 = format_EvelyneChristian_3.readFeatures(json_EvelyneChristian_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EvelyneChristian_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EvelyneChristian_3.addFeatures(features_EvelyneChristian_3);
var lyr_EvelyneChristian_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EvelyneChristian_3, 
                style: style_EvelyneChristian_3,
                interactive: true,
                title: '<img src="styles/legend/EvelyneChristian_3.png" /> Evelyne Christian'
            });
var format_100kmEC_4 = new ol.format.GeoJSON();
var features_100kmEC_4 = format_100kmEC_4.readFeatures(json_100kmEC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_100kmEC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_100kmEC_4.addFeatures(features_100kmEC_4);
var lyr_100kmEC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_100kmEC_4, 
                style: style_100kmEC_4,
                interactive: true,
                title: '<img src="styles/legend/100kmEC_4.png" /> 100kmEC'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Nous_1.setVisible(true);lyr_100kmNOUS_2.setVisible(true);lyr_EvelyneChristian_3.setVisible(true);lyr_100kmEC_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Nous_1,lyr_100kmNOUS_2,lyr_EvelyneChristian_3,lyr_100kmEC_4];
lyr_Nous_1.set('fieldAliases', {'id': 'id', });
lyr_100kmNOUS_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_EvelyneChristian_3.set('fieldAliases', {'id': 'id', });
lyr_100kmEC_4.set('fieldAliases', {'id': 'id', });
lyr_Nous_1.set('fieldImages', {'id': 'TextEdit', });
lyr_100kmNOUS_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_EvelyneChristian_3.set('fieldImages', {'id': '', });
lyr_100kmEC_4.set('fieldImages', {'id': '', });
lyr_Nous_1.set('fieldLabels', {'id': 'no label', });
lyr_100kmNOUS_2.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_EvelyneChristian_3.set('fieldLabels', {'id': 'no label', });
lyr_100kmEC_4.set('fieldLabels', {'id': 'no label', });
lyr_100kmEC_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});