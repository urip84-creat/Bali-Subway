var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_TrasePhase1_2 = new ol.format.GeoJSON();
var features_TrasePhase1_2 = format_TrasePhase1_2.readFeatures(json_TrasePhase1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrasePhase1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrasePhase1_2.addFeatures(features_TrasePhase1_2);
var lyr_TrasePhase1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrasePhase1_2, 
                style: style_TrasePhase1_2,
                popuplayertitle: 'Trase Phase 1',
                interactive: true,
                title: '<img src="styles/legend/TrasePhase1_2.png" /> Trase Phase 1'
            });
var format_LokasiStasiun_3 = new ol.format.GeoJSON();
var features_LokasiStasiun_3 = format_LokasiStasiun_3.readFeatures(json_LokasiStasiun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokasiStasiun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokasiStasiun_3.addFeatures(features_LokasiStasiun_3);
var lyr_LokasiStasiun_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokasiStasiun_3, 
                style: style_LokasiStasiun_3,
                popuplayertitle: 'Lokasi Stasiun',
                interactive: true,
                title: '<img src="styles/legend/LokasiStasiun_3.png" /> Lokasi Stasiun'
            });
var format_TrasePhase2_4 = new ol.format.GeoJSON();
var features_TrasePhase2_4 = format_TrasePhase2_4.readFeatures(json_TrasePhase2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrasePhase2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrasePhase2_4.addFeatures(features_TrasePhase2_4);
var lyr_TrasePhase2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrasePhase2_4, 
                style: style_TrasePhase2_4,
                popuplayertitle: 'Trase Phase 2',
                interactive: true,
                title: '<img src="styles/legend/TrasePhase2_4.png" /> Trase Phase 2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_TrasePhase1_2.setVisible(true);lyr_LokasiStasiun_3.setVisible(true);lyr_TrasePhase2_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_GoogleSatellite_1,lyr_TrasePhase1_2,lyr_LokasiStasiun_3,lyr_TrasePhase2_4];
lyr_TrasePhase1_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Jarak_km': 'Jarak_km', });
lyr_LokasiStasiun_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Keterangan': 'Keterangan', });
lyr_TrasePhase2_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'Panjang_m': 'Panjang_m', });
lyr_TrasePhase1_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Jarak_km': 'TextEdit', });
lyr_LokasiStasiun_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Keterangan': 'TextEdit', });
lyr_TrasePhase2_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'Panjang_m': 'TextEdit', });
lyr_TrasePhase1_2.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Jarak_km': 'no label', });
lyr_LokasiStasiun_3.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'Keterangan': 'no label', });
lyr_TrasePhase2_4.set('fieldLabels', {'id': 'no label', 'Nama': 'no label', 'Panjang_m': 'no label', });
lyr_TrasePhase2_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});