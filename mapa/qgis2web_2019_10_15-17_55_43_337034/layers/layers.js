var wms_layers = [];
var format_GERADORMT_0 = new ol.format.GeoJSON();
var features_GERADORMT_0 = format_GERADORMT_0.readFeatures(json_GERADORMT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GERADORMT_0 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GERADORMT_0.addFeatures(features_GERADORMT_0);var lyr_GERADORMT_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GERADORMT_0, 
                style: style_GERADORMT_0,
                title: '<img src="styles/legend/GERADORMT_0.png" /> GERADOR MT'
            });var format_CONSUMIDORAT_1 = new ol.format.GeoJSON();
var features_CONSUMIDORAT_1 = format_CONSUMIDORAT_1.readFeatures(json_CONSUMIDORAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONSUMIDORAT_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CONSUMIDORAT_1.addFeatures(features_CONSUMIDORAT_1);var lyr_CONSUMIDORAT_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONSUMIDORAT_1, 
                style: style_CONSUMIDORAT_1,
                title: '<img src="styles/legend/CONSUMIDORAT_1.png" /> CONSUMIDOR AT'
            });var format_COMPENSADORDEREATIVOAT_2 = new ol.format.GeoJSON();
var features_COMPENSADORDEREATIVOAT_2 = format_COMPENSADORDEREATIVOAT_2.readFeatures(json_COMPENSADORDEREATIVOAT_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COMPENSADORDEREATIVOAT_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_COMPENSADORDEREATIVOAT_2.addFeatures(features_COMPENSADORDEREATIVOAT_2);var lyr_COMPENSADORDEREATIVOAT_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_COMPENSADORDEREATIVOAT_2, 
                style: style_COMPENSADORDEREATIVOAT_2,
                title: '<img src="styles/legend/COMPENSADORDEREATIVOAT_2.png" /> COMPENSADOR DE REATIVO AT'
            });var format_SECCIONADORAT_3 = new ol.format.GeoJSON();
var features_SECCIONADORAT_3 = format_SECCIONADORAT_3.readFeatures(json_SECCIONADORAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECCIONADORAT_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SECCIONADORAT_3.addFeatures(features_SECCIONADORAT_3);var lyr_SECCIONADORAT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECCIONADORAT_3, 
                style: style_SECCIONADORAT_3,
                title: '<img src="styles/legend/SECCIONADORAT_3.png" /> SECCIONADOR AT'
            });var format_SECCIONADORBT_4 = new ol.format.GeoJSON();
var features_SECCIONADORBT_4 = format_SECCIONADORBT_4.readFeatures(json_SECCIONADORBT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECCIONADORBT_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SECCIONADORBT_4.addFeatures(features_SECCIONADORBT_4);var lyr_SECCIONADORBT_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECCIONADORBT_4, 
                style: style_SECCIONADORBT_4,
                title: '<img src="styles/legend/SECCIONADORBT_4.png" /> SECCIONADOR BT'
            });var format_GERADORAT_5 = new ol.format.GeoJSON();
var features_GERADORAT_5 = format_GERADORAT_5.readFeatures(json_GERADORAT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GERADORAT_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_GERADORAT_5.addFeatures(features_GERADORAT_5);var lyr_GERADORAT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GERADORAT_5, 
                style: style_GERADORAT_5,
                title: '<img src="styles/legend/GERADORAT_5.png" /> GERADOR AT'
            });var format_SEGMENTODEDISTRIBUICAOAT_6 = new ol.format.GeoJSON();
var features_SEGMENTODEDISTRIBUICAOAT_6 = format_SEGMENTODEDISTRIBUICAOAT_6.readFeatures(json_SEGMENTODEDISTRIBUICAOAT_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGMENTODEDISTRIBUICAOAT_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SEGMENTODEDISTRIBUICAOAT_6.addFeatures(features_SEGMENTODEDISTRIBUICAOAT_6);var lyr_SEGMENTODEDISTRIBUICAOAT_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEGMENTODEDISTRIBUICAOAT_6, 
                style: style_SEGMENTODEDISTRIBUICAOAT_6,
                title: '<img src="styles/legend/SEGMENTODEDISTRIBUICAOAT_6.png" /> SEGMENTO DE DISTRIBUICAO AT'
            });var format_CONSUMIDORMT_7 = new ol.format.GeoJSON();
var features_CONSUMIDORMT_7 = format_CONSUMIDORMT_7.readFeatures(json_CONSUMIDORMT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONSUMIDORMT_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CONSUMIDORMT_7.addFeatures(features_CONSUMIDORMT_7);var lyr_CONSUMIDORMT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONSUMIDORMT_7, 
                style: style_CONSUMIDORMT_7,
                title: '<img src="styles/legend/CONSUMIDORMT_7.png" /> CONSUMIDOR MT'
            });
        var lyr_GoogleSatellite_8 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_CONJUNTO_9 = new ol.format.GeoJSON();
var features_CONJUNTO_9 = format_CONJUNTO_9.readFeatures(json_CONJUNTO_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONJUNTO_9 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CONJUNTO_9.addFeatures(features_CONJUNTO_9);var lyr_CONJUNTO_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONJUNTO_9, 
                style: style_CONJUNTO_9,
                title: '<img src="styles/legend/CONJUNTO_9.png" /> CONJUNTO'
            });var format_SUBESTACAO_10 = new ol.format.GeoJSON();
var features_SUBESTACAO_10 = format_SUBESTACAO_10.readFeatures(json_SUBESTACAO_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBESTACAO_10 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SUBESTACAO_10.addFeatures(features_SUBESTACAO_10);var lyr_SUBESTACAO_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBESTACAO_10, 
                style: style_SUBESTACAO_10,
                title: '<img src="styles/legend/SUBESTACAO_10.png" /> SUBESTACAO'
            });var format_SEGMENTODEDISTRIBUICAOMT_11 = new ol.format.GeoJSON();
var features_SEGMENTODEDISTRIBUICAOMT_11 = format_SEGMENTODEDISTRIBUICAOMT_11.readFeatures(json_SEGMENTODEDISTRIBUICAOMT_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGMENTODEDISTRIBUICAOMT_11 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SEGMENTODEDISTRIBUICAOMT_11.addFeatures(features_SEGMENTODEDISTRIBUICAOMT_11);var lyr_SEGMENTODEDISTRIBUICAOMT_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEGMENTODEDISTRIBUICAOMT_11, 
                style: style_SEGMENTODEDISTRIBUICAOMT_11,
                title: '<img src="styles/legend/SEGMENTODEDISTRIBUICAOMT_11.png" /> SEGMENTO DE DISTRIBUICAO MT'
            });var format_PONTONOTAVEL_12 = new ol.format.GeoJSON();
var features_PONTONOTAVEL_12 = format_PONTONOTAVEL_12.readFeatures(json_PONTONOTAVEL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PONTONOTAVEL_12 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PONTONOTAVEL_12.addFeatures(features_PONTONOTAVEL_12);var lyr_PONTONOTAVEL_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PONTONOTAVEL_12, 
                style: style_PONTONOTAVEL_12,
                title: '<img src="styles/legend/PONTONOTAVEL_12.png" /> PONTO NOTAVEL'
            });var format_SECCIONADORMT_13 = new ol.format.GeoJSON();
var features_SECCIONADORMT_13 = format_SECCIONADORMT_13.readFeatures(json_SECCIONADORMT_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECCIONADORMT_13 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SECCIONADORMT_13.addFeatures(features_SECCIONADORMT_13);var lyr_SECCIONADORMT_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECCIONADORMT_13, 
                style: style_SECCIONADORMT_13,
                title: '<img src="styles/legend/SECCIONADORMT_13.png" /> SECCIONADOR MT'
            });var format_TRANSFORMADORDEDISTRIBUICAO_14 = new ol.format.GeoJSON();
var features_TRANSFORMADORDEDISTRIBUICAO_14 = format_TRANSFORMADORDEDISTRIBUICAO_14.readFeatures(json_TRANSFORMADORDEDISTRIBUICAO_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSFORMADORDEDISTRIBUICAO_14 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TRANSFORMADORDEDISTRIBUICAO_14.addFeatures(features_TRANSFORMADORDEDISTRIBUICAO_14);var lyr_TRANSFORMADORDEDISTRIBUICAO_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRANSFORMADORDEDISTRIBUICAO_14, 
                style: style_TRANSFORMADORDEDISTRIBUICAO_14,
                title: '<img src="styles/legend/TRANSFORMADORDEDISTRIBUICAO_14.png" /> TRANSFORMADOR DE DISTRIBUICAO'
            });var format_TRANSFORMADORDESUBESTACAO_15 = new ol.format.GeoJSON();
var features_TRANSFORMADORDESUBESTACAO_15 = format_TRANSFORMADORDESUBESTACAO_15.readFeatures(json_TRANSFORMADORDESUBESTACAO_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSFORMADORDESUBESTACAO_15 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TRANSFORMADORDESUBESTACAO_15.addFeatures(features_TRANSFORMADORDESUBESTACAO_15);var lyr_TRANSFORMADORDESUBESTACAO_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRANSFORMADORDESUBESTACAO_15, 
                style: style_TRANSFORMADORDESUBESTACAO_15,
                title: '<img src="styles/legend/TRANSFORMADORDESUBESTACAO_15.png" /> TRANSFORMADOR DE SUBESTACAO'
            });
var group_CAMADAS_NAO_USADAS = new ol.layer.Group({
                                layers: [lyr_GERADORMT_0,lyr_CONSUMIDORAT_1,lyr_COMPENSADORDEREATIVOAT_2,lyr_SECCIONADORAT_3,lyr_SECCIONADORBT_4,lyr_GERADORAT_5,lyr_SEGMENTODEDISTRIBUICAOAT_6,lyr_CONSUMIDORMT_7,],
                                title: "CAMADAS_NAO_USADAS"});

lyr_GERADORMT_0.setVisible(true);lyr_CONSUMIDORAT_1.setVisible(true);lyr_COMPENSADORDEREATIVOAT_2.setVisible(true);lyr_SECCIONADORAT_3.setVisible(true);lyr_SECCIONADORBT_4.setVisible(true);lyr_GERADORAT_5.setVisible(true);lyr_SEGMENTODEDISTRIBUICAOAT_6.setVisible(true);lyr_CONSUMIDORMT_7.setVisible(true);lyr_GoogleSatellite_8.setVisible(true);lyr_CONJUNTO_9.setVisible(true);lyr_SUBESTACAO_10.setVisible(true);lyr_SEGMENTODEDISTRIBUICAOMT_11.setVisible(true);lyr_PONTONOTAVEL_12.setVisible(true);lyr_SECCIONADORMT_13.setVisible(true);lyr_TRANSFORMADORDEDISTRIBUICAO_14.setVisible(true);lyr_TRANSFORMADORDESUBESTACAO_15.setVisible(true);
var layersList = [group_CAMADAS_NAO_USADAS,lyr_GoogleSatellite_8,lyr_CONJUNTO_9,lyr_SUBESTACAO_10,lyr_SEGMENTODEDISTRIBUICAOMT_11,lyr_PONTONOTAVEL_12,lyr_SECCIONADORMT_13,lyr_TRANSFORMADORDEDISTRIBUICAO_14,lyr_TRANSFORMADORDESUBESTACAO_15];
lyr_GERADORMT_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON': 'PN_CON', 'DIST': 'DIST', 'PAC': 'PAC', 'CEG': 'CEG', 'CTMT': 'CTMT', 'UNI_TR_S': 'UNI_TR_S', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'LGRD': 'LGRD', 'BRR': 'BRR', 'CEP': 'CEP', 'CNAE': 'CNAE', 'FAS_CON': 'FAS_CON', 'GRU_TEN': 'GRU_TEN', 'TEN_FORN': 'TEN_FORN', 'SIT_ATIV': 'SIT_ATIV', 'DAT_CON': 'DAT_CON', 'POT_INST': 'POT_INST', 'POT_CONT': 'POT_CONT', 'DEM_01': 'DEM_01', 'DEM_02': 'DEM_02', 'DEM_03': 'DEM_03', 'DEM_04': 'DEM_04', 'DEM_05': 'DEM_05', 'DEM_06': 'DEM_06', 'DEM_07': 'DEM_07', 'DEM_08': 'DEM_08', 'DEM_09': 'DEM_09', 'DEM_10': 'DEM_10', 'DEM_11': 'DEM_11', 'DEM_12': 'DEM_12', 'ENE_01': 'ENE_01', 'ENE_02': 'ENE_02', 'ENE_03': 'ENE_03', 'ENE_04': 'ENE_04', 'ENE_05': 'ENE_05', 'ENE_06': 'ENE_06', 'ENE_07': 'ENE_07', 'ENE_08': 'ENE_08', 'ENE_09': 'ENE_09', 'ENE_10': 'ENE_10', 'ENE_11': 'ENE_11', 'ENE_12': 'ENE_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCR': 'DESCR', });
lyr_CONSUMIDORAT_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'CIRCUITO_DE_ALTA_TENSAO': 'CIRCUITO_DE_ALTA_TENSAO', 'PONTO_NOTAVEL_CONECTADO': 'PONTO_NOTAVEL_CONECTADO', 'PAC': 'PAC', 'FASES_CONEXAO': 'FASES_CONEXAO', 'CLASSE_SUBCLASSE': 'CLASSE_SUBCLASSE', 'GRUPO_TENSAO': 'GRUPO_TENSAO', 'GRUPO_TARIFARIO': 'GRUPO_TARIFARIO', 'TENSAO_FORNECIMENTO': 'TENSAO_FORNECIMENTO', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'DATA_CONEXAO': 'DATA_CONEXAO', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'MUNICIPIO': 'MUNICIPIO', 'LOGRADOURO': 'LOGRADOURO', 'BAIRRO': 'BAIRRO', 'CEP': 'CEP', 'DEM_P_01': 'DEM_P_01', 'DEM_P_02': 'DEM_P_02', 'DEM_P_03': 'DEM_P_03', 'DEM_P_04': 'DEM_P_04', 'DEM_P_05': 'DEM_P_05', 'DEM_P_06': 'DEM_P_06', 'DEM_P_07': 'DEM_P_07', 'DEM_P_08': 'DEM_P_08', 'DEM_P_09': 'DEM_P_09', 'DEM_P_10': 'DEM_P_10', 'DEM_P_11': 'DEM_P_11', 'DEM_P_12': 'DEM_P_12', 'DEM_F_01': 'DEM_F_01', 'DEM_F_02': 'DEM_F_02', 'DEM_F_03': 'DEM_F_03', 'DEM_F_04': 'DEM_F_04', 'DEM_F_05': 'DEM_F_05', 'DEM_F_06': 'DEM_F_06', 'DEM_F_07': 'DEM_F_07', 'DEM_F_08': 'DEM_F_08', 'DEM_F_09': 'DEM_F_09', 'DEM_F_10': 'DEM_F_10', 'DEM_F_11': 'DEM_F_11', 'DEM_F_12': 'DEM_F_12', 'ENE_P_01': 'ENE_P_01', 'ENE_P_02': 'ENE_P_02', 'ENE_P_03': 'ENE_P_03', 'ENE_P_04': 'ENE_P_04', 'ENE_P_05': 'ENE_P_05', 'ENE_P_06': 'ENE_P_06', 'ENE_P_07': 'ENE_P_07', 'ENE_P_08': 'ENE_P_08', 'ENE_P_09': 'ENE_P_09', 'ENE_P_10': 'ENE_P_10', 'ENE_P_11': 'ENE_P_11', 'ENE_P_12': 'ENE_P_12', 'ENE_F_01': 'ENE_F_01', 'ENE_F_02': 'ENE_F_02', 'ENE_F_03': 'ENE_F_03', 'ENE_F_04': 'ENE_F_04', 'ENE_F_05': 'ENE_F_05', 'ENE_F_06': 'ENE_F_06', 'ENE_F_07': 'ENE_F_07', 'ENE_F_08': 'ENE_F_08', 'ENE_F_09': 'ENE_F_09', 'ENE_F_10': 'ENE_F_10', 'ENE_F_11': 'ENE_F_11', 'ENE_F_12': 'ENE_F_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCRICAO': 'DESCRICAO', });
lyr_COMPENSADORDEREATIVOAT_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DIST': 'DIST', 'FAS_CON': 'FAS_CON', 'SIT_ATIV': 'SIT_ATIV', 'TIP_UNID': 'TIP_UNID', 'POT_NOM': 'POT_NOM', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'SUB': 'SUB', 'CONJ': 'CONJ', 'MUN': 'MUN', 'ARE_LOC': 'ARE_LOC', 'DAT_CON': 'DAT_CON', 'BANC': 'BANC', 'POS': 'POS', 'DESCR': 'DESCR', });
lyr_SECCIONADORAT_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'MEIO_DE_ISOLACAO': 'MEIO_DE_ISOLACAO', 'ABERTURA_SOB_CARGA': 'ABERTURA_SOB_CARGA', 'POSICAO_NORMAL_DE_OPERACAO': 'POSICAO_NORMAL_DE_OPERACAO', 'CAPACIDADE_ELO': 'CAPACIDADE_ELO', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'TELECOMANDADO': 'TELECOMANDADO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_SECCIONADORBT_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'TRANSFORMADOR_SUBESTACAO': 'TRANSFORMADOR_SUBESTACAO', 'TRANSFORMADOR_DISTRIBUICAO': 'TRANSFORMADOR_DISTRIBUICAO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'MEIO_DE_ISOLACAO': 'MEIO_DE_ISOLACAO', 'ABERTURA_SOB_CARGA': 'ABERTURA_SOB_CARGA', 'POSICAO_NORMAL_DE_OPERACAO': 'POSICAO_NORMAL_DE_OPERACAO', 'CAPACIDADE_ELO': 'CAPACIDADE_ELO', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'TELECOMANDADO': 'TELECOMANDADO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_GERADORAT_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'PN_CON': 'PN_CON', 'DIST': 'DIST', 'PAC': 'PAC', 'CTAT': 'CTAT', 'CEG': 'CEG', 'CONJ': 'CONJ', 'MUN': 'MUN', 'SUB': 'SUB', 'LGRD': 'LGRD', 'BRR': 'BRR', 'CEP': 'CEP', 'CNAE': 'CNAE', 'FAS_CON': 'FAS_CON', 'GRU_TEN': 'GRU_TEN', 'TEN_FORN': 'TEN_FORN', 'SIT_ATIV': 'SIT_ATIV', 'DAT_CON': 'DAT_CON', 'POT_INST': 'POT_INST', 'POT_CONT': 'POT_CONT', 'DEM_P_01': 'DEM_P_01', 'DEM_P_02': 'DEM_P_02', 'DEM_P_03': 'DEM_P_03', 'DEM_P_04': 'DEM_P_04', 'DEM_P_05': 'DEM_P_05', 'DEM_P_06': 'DEM_P_06', 'DEM_P_07': 'DEM_P_07', 'DEM_P_08': 'DEM_P_08', 'DEM_P_09': 'DEM_P_09', 'DEM_P_10': 'DEM_P_10', 'DEM_P_11': 'DEM_P_11', 'DEM_P_12': 'DEM_P_12', 'DEM_F_01': 'DEM_F_01', 'DEM_F_02': 'DEM_F_02', 'DEM_F_03': 'DEM_F_03', 'DEM_F_04': 'DEM_F_04', 'DEM_F_05': 'DEM_F_05', 'DEM_F_06': 'DEM_F_06', 'DEM_F_07': 'DEM_F_07', 'DEM_F_08': 'DEM_F_08', 'DEM_F_09': 'DEM_F_09', 'DEM_F_10': 'DEM_F_10', 'DEM_F_11': 'DEM_F_11', 'DEM_F_12': 'DEM_F_12', 'ENE_P_01': 'ENE_P_01', 'ENE_P_02': 'ENE_P_02', 'ENE_P_03': 'ENE_P_03', 'ENE_P_04': 'ENE_P_04', 'ENE_P_05': 'ENE_P_05', 'ENE_P_06': 'ENE_P_06', 'ENE_P_07': 'ENE_P_07', 'ENE_P_08': 'ENE_P_08', 'ENE_P_09': 'ENE_P_09', 'ENE_P_10': 'ENE_P_10', 'ENE_P_11': 'ENE_P_11', 'ENE_P_12': 'ENE_P_12', 'ENE_F_01': 'ENE_F_01', 'ENE_F_02': 'ENE_F_02', 'ENE_F_03': 'ENE_F_03', 'ENE_F_04': 'ENE_F_04', 'ENE_F_05': 'ENE_F_05', 'ENE_F_06': 'ENE_F_06', 'ENE_F_07': 'ENE_F_07', 'ENE_F_08': 'ENE_F_08', 'ENE_F_09': 'ENE_F_09', 'ENE_F_10': 'ENE_F_10', 'ENE_F_11': 'ENE_F_11', 'ENE_F_12': 'ENE_F_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCR': 'DESCR', });
lyr_SEGMENTODEDISTRIBUICAOAT_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'PONTO_NOTAVEL_CONECTADO_1': 'PONTO_NOTAVEL_CONECTADO_1', 'PONTO_NOTAVEL_CONECTADO_2': 'PONTO_NOTAVEL_CONECTADO_2', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'GEOMETRIA_CABO': 'GEOMETRIA_CABO', 'FORMACAO_CABO': 'FORMACAO_CABO', 'BITOLA_FASE': 'BITOLA_FASE', 'BITOLA_NEUTRO': 'BITOLA_NEUTRO', 'METERIAL_FASE': 'METERIAL_FASE', 'MATERIAL_NEUTRO': 'MATERIAL_NEUTRO', 'ISOLACAO_FASE': 'ISOLACAO_FASE', 'ISOLACAO_NEUTRO': 'ISOLACAO_NEUTRO', 'NUMERO_CONDUTORES_POR_FASE': 'NUMERO_CONDUTORES_POR_FASE', 'RESISTENCIA_SEQ_POSITIVA': 'RESISTENCIA_SEQ_POSITIVA', 'REATANCIA_SEQ_POSITIVA': 'REATANCIA_SEQ_POSITIVA', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'CORRENTE_MAXIMA': 'CORRENTE_MAXIMA', 'COMPRIMENTO': 'COMPRIMENTO', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', });
lyr_CONSUMIDORMT_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'TRANSFORMADOR_SUBESTACAO': 'TRANSFORMADOR_SUBESTACAO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PONTO_NOTAVEL_CONECTADO': 'PONTO_NOTAVEL_CONECTADO', 'PAC': 'PAC', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'CLASSE_SUBCLASSE': 'CLASSE_SUBCLASSE', 'GRUPO_TENSAO': 'GRUPO_TENSAO', 'TENSAO_FORNECIMENTO': 'TENSAO_FORNECIMENTO', 'GRUPO_TARIFARIO': 'GRUPO_TARIFARIO', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'DATA_CONEXAO': 'DATA_CONEXAO', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'MUNICIPIO': 'MUNICIPIO', 'LOGRADOURO': 'LOGRADOURO', 'BAIRRO': 'BAIRRO', 'CEP': 'CEP', 'DEM_01': 'DEM_01', 'DEM_02': 'DEM_02', 'DEM_03': 'DEM_03', 'DEM_04': 'DEM_04', 'DEM_05': 'DEM_05', 'DEM_06': 'DEM_06', 'DEM_07': 'DEM_07', 'DEM_08': 'DEM_08', 'DEM_09': 'DEM_09', 'DEM_10': 'DEM_10', 'DEM_11': 'DEM_11', 'DEM_12': 'DEM_12', 'ENE_01': 'ENE_01', 'ENE_02': 'ENE_02', 'ENE_03': 'ENE_03', 'ENE_04': 'ENE_04', 'ENE_05': 'ENE_05', 'ENE_06': 'ENE_06', 'ENE_07': 'ENE_07', 'ENE_08': 'ENE_08', 'ENE_09': 'ENE_09', 'ENE_10': 'ENE_10', 'ENE_11': 'ENE_11', 'ENE_12': 'ENE_12', 'DIC': 'DIC', 'FIC': 'FIC', 'DESCRICAO': 'DESCRICAO', });
lyr_CONJUNTO_9.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SUBESTACAO_10.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'NOME': 'NOME', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SEGMENTODEDISTRIBUICAOMT_11.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'TRANSFORMADOR_SUBESTACAO': 'TRANSFORMADOR_SUBESTACAO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PONTO_NOTAVEL_CONECTADO_1': 'PONTO_NOTAVEL_CONECTADO_1', 'PONTO_NOTAVEL_CONECTADO_2': 'PONTO_NOTAVEL_CONECTADO_2', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'GEOMETRIA_CABO': 'GEOMETRIA_CABO', 'FORMACAO_CABO': 'FORMACAO_CABO', 'BITOLA_FASE': 'BITOLA_FASE', 'BITOLA_NEUTRO': 'BITOLA_NEUTRO', 'METERIAL_FASE': 'METERIAL_FASE', 'MATERIAL_NEUTRO': 'MATERIAL_NEUTRO', 'ISOLACAO_FASE': 'ISOLACAO_FASE', 'ISOLACAO_NEUTRO': 'ISOLACAO_NEUTRO', 'NUMERO_CONDUTORES_POR_FASE': 'NUMERO_CONDUTORES_POR_FASE', 'RESISTENCIA_SEQ_POSITIVA': 'RESISTENCIA_SEQ_POSITIVA', 'REATANCIA_SEQ_POSITIVA': 'REATANCIA_SEQ_POSITIVA', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'CORRENTE_MAXIMA': 'CORRENTE_MAXIMA', 'COMPRIMENTO': 'COMPRIMENTO', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', });
lyr_PONTONOTAVEL_12.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'TIPO_PONTO_NOTAVEL': 'TIPO_PONTO_NOTAVEL', 'ESTRUTURA': 'ESTRUTURA', 'MATERIAL': 'MATERIAL', 'ESFORCO': 'ESFORCO', 'ALTURA': 'ALTURA', 'TIPO_ESTRUTURA': 'TIPO_ESTRUTURA', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_SECCIONADORMT_13.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'TRANSFORMADOR_SUBESTACAO': 'TRANSFORMADOR_SUBESTACAO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'MEIO_DE_ISOLACAO': 'MEIO_DE_ISOLACAO', 'ABERTURA_SOB_CARGA': 'ABERTURA_SOB_CARGA', 'POSICAO_NORMAL_DE_OPERACAO': 'POSICAO_NORMAL_DE_OPERACAO', 'CAPACIDADE_ELO': 'CAPACIDADE_ELO', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'TELECOMANDADO': 'TELECOMANDADO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_TRANSFORMADORDEDISTRIBUICAO_14.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'TIPO_TRAFO': 'TIPO_TRAFO', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'TENSAO_NOMINAL_PRIMARIO': 'TENSAO_NOMINAL_PRIMARIO', 'TENSAO_NOMINAL_SECUNDARIO': 'TENSAO_NOMINAL_SECUNDARIO', 'TAP': 'TAP', 'ESQUEMA_LIGACAO': 'ESQUEMA_LIGACAO', 'FASES_CONEXAO_PRIMARIA': 'FASES_CONEXAO_PRIMARIA', 'FASES_CONEXAO_SECUNDARIA': 'FASES_CONEXAO_SECUNDARIA', 'CAPACIDADE_ELO_FUSIVEL': 'CAPACIDADE_ELO_FUSIVEL', 'CAPACIDADE_CHAVE_FUSIVEL': 'CAPACIDADE_CHAVE_FUSIVEL', 'POTENCIA_NOMINAL_(KVA)': 'POTENCIA_NOMINAL_(KVA)', 'PERDA_FERRO_(W)': 'PERDA_FERRO_(W)', 'PERDA_TOTAL_(W)': 'PERDA_TOTAL_(W)', 'RESISTENCIA_PERCENTUAL_(%)': 'RESISTENCIA_PERCENTUAL_(%)', 'REATANCIA_PERCENTUAL_(%)': 'REATANCIA_PERCENTUAL_(%)', 'IMPEDANCIA_PERCENTUAL_(%)': 'IMPEDANCIA_PERCENTUAL_(%)', 'ATRIBUICAO_PERDAS': 'ATRIBUICAO_PERDAS', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'POSTO': 'POSTO', 'CONFIGURACAO_DO_CIRCUITO': 'CONFIGURACAO_DO_CIRCUITO', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_TRANSFORMADORDESUBESTACAO_15.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'TIPO_TRAFO': 'TIPO_TRAFO', 'REFRIGERACAO': 'REFRIGERACAO', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'TENSAO_NOMINAL_PRIMARIO': 'TENSAO_NOMINAL_PRIMARIO', 'TENSAO_NOMINAL_SECUNDARIO': 'TENSAO_NOMINAL_SECUNDARIO', 'ESQUEMA_LIGACAO': 'ESQUEMA_LIGACAO', 'FASES_CONEXAO_PRIMARIA': 'FASES_CONEXAO_PRIMARIA', 'FASES_CONEXAO_SECUNDARIA': 'FASES_CONEXAO_SECUNDARIA', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'POTENCIA_NOMINAL': 'POTENCIA_NOMINAL', 'POTENCIA_VENTILACAO_FORCADA_01': 'POTENCIA_VENTILACAO_FORCADA_01', 'POTENCIA_VENTILACAO_FORCADA_02': 'POTENCIA_VENTILACAO_FORCADA_02', 'PERDA_FERRO': 'PERDA_FERRO', 'PERDA_TOTAL': 'PERDA_TOTAL', 'RESISTENCIA_PERCENTUAL': 'RESISTENCIA_PERCENTUAL', 'REATANCIA_PERCENTUAL': 'REATANCIA_PERCENTUAL', 'IMPEDANCIA_PERCENTUAL': 'IMPEDANCIA_PERCENTUAL', 'DATA_FABRICACAO': 'DATA_FABRICACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'ALOCACAO_PERDAS': 'ALOCACAO_PERDAS', 'ENES_01': 'ENES_01', 'ENES_02': 'ENES_02', 'ENES_03': 'ENES_03', 'ENES_04': 'ENES_04', 'ENES_05': 'ENES_05', 'ENES_06': 'ENES_06', 'ENES_07': 'ENES_07', 'ENES_08': 'ENES_08', 'ENES_09': 'ENES_09', 'ENES_10': 'ENES_10', 'ENES_11': 'ENES_11', 'ENES_12': 'ENES_12', 'DESCRICAO': 'DESCRICAO', });
lyr_GERADORMT_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON': 'ValueRelation', 'DIST': 'TextEdit', 'PAC': 'TextEdit', 'CEG': 'TextEdit', 'CTMT': 'ValueRelation', 'UNI_TR_S': 'ValueRelation', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'LGRD': 'TextEdit', 'BRR': 'TextEdit', 'CEP': 'TextEdit', 'CNAE': 'TextEdit', 'FAS_CON': 'ValueRelation', 'GRU_TEN': 'ValueRelation', 'TEN_FORN': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'DAT_CON': 'TextEdit', 'POT_INST': 'TextEdit', 'POT_CONT': 'TextEdit', 'DEM_01': 'TextEdit', 'DEM_02': 'TextEdit', 'DEM_03': 'TextEdit', 'DEM_04': 'TextEdit', 'DEM_05': 'TextEdit', 'DEM_06': 'TextEdit', 'DEM_07': 'TextEdit', 'DEM_08': 'TextEdit', 'DEM_09': 'TextEdit', 'DEM_10': 'TextEdit', 'DEM_11': 'TextEdit', 'DEM_12': 'TextEdit', 'ENE_01': 'TextEdit', 'ENE_02': 'TextEdit', 'ENE_03': 'TextEdit', 'ENE_04': 'TextEdit', 'ENE_05': 'TextEdit', 'ENE_06': 'TextEdit', 'ENE_07': 'TextEdit', 'ENE_08': 'TextEdit', 'ENE_09': 'TextEdit', 'ENE_10': 'TextEdit', 'ENE_11': 'TextEdit', 'ENE_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCR': 'TextEdit', });
lyr_CONSUMIDORAT_1.set('fieldImages', {'OBJECTID': '', 'COD_ID': '', 'DISTRIBUIDORA': '', 'CONJUNTO': '', 'SUBESTACAO': '', 'CIRCUITO_DE_ALTA_TENSAO': '', 'PONTO_NOTAVEL_CONECTADO': '', 'PAC': '', 'FASES_CONEXAO': '', 'CLASSE_SUBCLASSE': '', 'GRUPO_TENSAO': '', 'GRUPO_TARIFARIO': '', 'TENSAO_FORNECIMENTO': '', 'CARGA_INSTALADA': '', 'DATA_CONEXAO': '', 'SITUACAO_ATIVACAO': '', 'AREA_LOCALIZACAO': '', 'MUNICIPIO': '', 'LOGRADOURO': '', 'BAIRRO': '', 'CEP': '', 'DEM_P_01': '', 'DEM_P_02': '', 'DEM_P_03': '', 'DEM_P_04': '', 'DEM_P_05': '', 'DEM_P_06': '', 'DEM_P_07': '', 'DEM_P_08': '', 'DEM_P_09': '', 'DEM_P_10': '', 'DEM_P_11': '', 'DEM_P_12': '', 'DEM_F_01': '', 'DEM_F_02': '', 'DEM_F_03': '', 'DEM_F_04': '', 'DEM_F_05': '', 'DEM_F_06': '', 'DEM_F_07': '', 'DEM_F_08': '', 'DEM_F_09': '', 'DEM_F_10': '', 'DEM_F_11': '', 'DEM_F_12': '', 'ENE_P_01': '', 'ENE_P_02': '', 'ENE_P_03': '', 'ENE_P_04': '', 'ENE_P_05': '', 'ENE_P_06': '', 'ENE_P_07': '', 'ENE_P_08': '', 'ENE_P_09': '', 'ENE_P_10': '', 'ENE_P_11': '', 'ENE_P_12': '', 'ENE_F_01': '', 'ENE_F_02': '', 'ENE_F_03': '', 'ENE_F_04': '', 'ENE_F_05': '', 'ENE_F_06': '', 'ENE_F_07': '', 'ENE_F_08': '', 'ENE_F_09': '', 'ENE_F_10': '', 'ENE_F_11': '', 'ENE_F_12': '', 'DIC': '', 'FIC': '', 'DESCRICAO': '', });
lyr_COMPENSADORDEREATIVOAT_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DIST': 'TextEdit', 'FAS_CON': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'TIP_UNID': 'ValueRelation', 'POT_NOM': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'SUB': 'ValueRelation', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'ARE_LOC': 'ValueRelation', 'DAT_CON': 'TextEdit', 'BANC': 'TextEdit', 'POS': 'ValueRelation', 'DESCR': 'TextEdit', });
lyr_SECCIONADORAT_3.set('fieldImages', {'OBJECTID': '', 'COD_ID': '', 'DISTRIBUIDORA': '', 'CONJUNTO': '', 'PAC_1': '', 'PAC_2': '', 'AREA_LOCALIZACAO': '', 'TIPO_UNIDADE': '', 'CLASSE_TENSAO': '', 'FASES_CONEXAO': '', 'MEIO_DE_ISOLACAO': '', 'ABERTURA_SOB_CARGA': '', 'POSICAO_NORMAL_DE_OPERACAO': '', 'CAPACIDADE_ELO': '', 'CORRENTE_NOMINAL': '', 'SITUACAO_DE_ATIVACAO': '', 'TELECOMANDADO': '', 'DATA_CONEXAO': '', 'MUNICIPIO': '', 'DESCRICAO': '', });
lyr_SECCIONADORBT_4.set('fieldImages', {'OBJECTID': '', 'COD_ID': '', 'DISTRIBUIDORA': '', 'CONJUNTO': '', 'SUBESTACAO': '', 'TRANSFORMADOR_SUBESTACAO': '', 'TRANSFORMADOR_DISTRIBUICAO': '', 'CIRCUITO_MEDIA_TENSAO': '', 'PAC_1': '', 'PAC_2': '', 'AREA_LOCALIZACAO': '', 'TIPO_UNIDADE': '', 'CLASSE_TENSAO': '', 'FASES_CONEXAO': '', 'MEIO_DE_ISOLACAO': '', 'ABERTURA_SOB_CARGA': '', 'POSICAO_NORMAL_DE_OPERACAO': '', 'CAPACIDADE_ELO': '', 'CORRENTE_NOMINAL': '', 'SITUACAO_DE_ATIVACAO': '', 'TELECOMANDADO': '', 'DATA_CONEXAO': '', 'MUNICIPIO': '', 'DESCRICAO': '', });
lyr_GERADORAT_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'PN_CON': 'ValueRelation', 'DIST': 'TextEdit', 'PAC': 'TextEdit', 'CTAT': 'ValueRelation', 'CEG': 'TextEdit', 'CONJ': 'ValueRelation', 'MUN': 'TextEdit', 'SUB': 'ValueRelation', 'LGRD': 'TextEdit', 'BRR': 'TextEdit', 'CEP': 'TextEdit', 'CNAE': 'TextEdit', 'FAS_CON': 'ValueRelation', 'GRU_TEN': 'ValueRelation', 'TEN_FORN': 'ValueRelation', 'SIT_ATIV': 'ValueRelation', 'DAT_CON': 'TextEdit', 'POT_INST': 'TextEdit', 'POT_CONT': 'TextEdit', 'DEM_P_01': 'TextEdit', 'DEM_P_02': 'TextEdit', 'DEM_P_03': 'TextEdit', 'DEM_P_04': 'TextEdit', 'DEM_P_05': 'TextEdit', 'DEM_P_06': 'TextEdit', 'DEM_P_07': 'TextEdit', 'DEM_P_08': 'TextEdit', 'DEM_P_09': 'TextEdit', 'DEM_P_10': 'TextEdit', 'DEM_P_11': 'TextEdit', 'DEM_P_12': 'TextEdit', 'DEM_F_01': 'TextEdit', 'DEM_F_02': 'TextEdit', 'DEM_F_03': 'TextEdit', 'DEM_F_04': 'TextEdit', 'DEM_F_05': 'TextEdit', 'DEM_F_06': 'TextEdit', 'DEM_F_07': 'TextEdit', 'DEM_F_08': 'TextEdit', 'DEM_F_09': 'TextEdit', 'DEM_F_10': 'TextEdit', 'DEM_F_11': 'TextEdit', 'DEM_F_12': 'TextEdit', 'ENE_P_01': 'TextEdit', 'ENE_P_02': 'TextEdit', 'ENE_P_03': 'TextEdit', 'ENE_P_04': 'TextEdit', 'ENE_P_05': 'TextEdit', 'ENE_P_06': 'TextEdit', 'ENE_P_07': 'TextEdit', 'ENE_P_08': 'TextEdit', 'ENE_P_09': 'TextEdit', 'ENE_P_10': 'TextEdit', 'ENE_P_11': 'TextEdit', 'ENE_P_12': 'TextEdit', 'ENE_F_01': 'TextEdit', 'ENE_F_02': 'TextEdit', 'ENE_F_03': 'TextEdit', 'ENE_F_04': 'TextEdit', 'ENE_F_05': 'TextEdit', 'ENE_F_06': 'TextEdit', 'ENE_F_07': 'TextEdit', 'ENE_F_08': 'TextEdit', 'ENE_F_09': 'TextEdit', 'ENE_F_10': 'TextEdit', 'ENE_F_11': 'TextEdit', 'ENE_F_12': 'TextEdit', 'DIC': 'TextEdit', 'FIC': 'TextEdit', 'DESCR': 'TextEdit', });
lyr_SEGMENTODEDISTRIBUICAOAT_6.set('fieldImages', {'OBJECTID': '', 'COD_ID': '', 'DISTRIBUIDORA': '', 'CONJUNTO': '', 'SUBESTACAO': '', 'PONTO_NOTAVEL_CONECTADO_1': '', 'PONTO_NOTAVEL_CONECTADO_2': '', 'PAC_1': '', 'PAC_2': '', 'AREA_LOCALIZACAO': '', 'FASES_CONEXAO': '', 'GEOMETRIA_CABO': '', 'FORMACAO_CABO': '', 'BITOLA_FASE': '', 'BITOLA_NEUTRO': '', 'METERIAL_FASE': '', 'MATERIAL_NEUTRO': '', 'ISOLACAO_FASE': '', 'ISOLACAO_NEUTRO': '', 'NUMERO_CONDUTORES_POR_FASE': '', 'RESISTENCIA_SEQ_POSITIVA': '', 'REATANCIA_SEQ_POSITIVA': '', 'CORRENTE_NOMINAL': '', 'CORRENTE_MAXIMA': '', 'COMPRIMENTO': '', 'DESCRICAO': '', 'Shape_Length': '', });
lyr_CONSUMIDORMT_7.set('fieldImages', {'OBJECTID': '', 'COD_ID': '', 'DISTRIBUIDORA': '', 'CONJUNTO': '', 'SUBESTACAO': '', 'TRANSFORMADOR_SUBESTACAO': '', 'CIRCUITO_MEDIA_TENSAO': '', 'PONTO_NOTAVEL_CONECTADO': '', 'PAC': '', 'AREA_LOCALIZACAO': '', 'FASES_CONEXAO': '', 'CLASSE_SUBCLASSE': '', 'GRUPO_TENSAO': '', 'TENSAO_FORNECIMENTO': '', 'GRUPO_TARIFARIO': '', 'CARGA_INSTALADA': '', 'DATA_CONEXAO': '', 'SITUACAO_DE_ATIVACAO': '', 'MUNICIPIO': '', 'LOGRADOURO': '', 'BAIRRO': '', 'CEP': '', 'DEM_01': '', 'DEM_02': '', 'DEM_03': '', 'DEM_04': '', 'DEM_05': '', 'DEM_06': '', 'DEM_07': '', 'DEM_08': '', 'DEM_09': '', 'DEM_10': '', 'DEM_11': '', 'DEM_12': '', 'ENE_01': '', 'ENE_02': '', 'ENE_03': '', 'ENE_04': '', 'ENE_05': '', 'ENE_06': '', 'ENE_07': '', 'ENE_08': '', 'ENE_09': '', 'ENE_10': '', 'ENE_11': '', 'ENE_12': '', 'DIC': '', 'FIC': '', 'DESCRICAO': '', });
lyr_CONJUNTO_9.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'NOME': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SUBESTACAO_10.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'ValueRelation', 'NOME': 'TextEdit', 'CARGA_INSTALADA': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SEGMENTODEDISTRIBUICAOMT_11.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'ValueRelation', 'SUBESTACAO': 'ValueRelation', 'TRANSFORMADOR_SUBESTACAO': 'ValueRelation', 'CIRCUITO_MEDIA_TENSAO': 'ValueRelation', 'PONTO_NOTAVEL_CONECTADO_1': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_2': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'FASES_CONEXAO': 'ValueRelation', 'GEOMETRIA_CABO': 'ValueRelation', 'FORMACAO_CABO': 'ValueRelation', 'BITOLA_FASE': 'ValueRelation', 'BITOLA_NEUTRO': 'ValueRelation', 'METERIAL_FASE': 'ValueRelation', 'MATERIAL_NEUTRO': 'ValueRelation', 'ISOLACAO_FASE': 'ValueRelation', 'ISOLACAO_NEUTRO': 'ValueRelation', 'NUMERO_CONDUTORES_POR_FASE': 'TextEdit', 'RESISTENCIA_SEQ_POSITIVA': 'TextEdit', 'REATANCIA_SEQ_POSITIVA': 'TextEdit', 'CORRENTE_NOMINAL': 'TextEdit', 'CORRENTE_MAXIMA': 'TextEdit', 'COMPRIMENTO': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PONTONOTAVEL_12.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'TIPO_PONTO_NOTAVEL': 'ValueRelation', 'ESTRUTURA': 'ValueRelation', 'MATERIAL': 'ValueRelation', 'ESFORCO': 'ValueRelation', 'ALTURA': 'ValueRelation', 'TIPO_ESTRUTURA': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_SECCIONADORMT_13.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'SUBESTACAO': 'ValueRelation', 'TRANSFORMADOR_SUBESTACAO': 'ValueRelation', 'CIRCUITO_MEDIA_TENSAO': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'TIPO_UNIDADE': 'ValueRelation', 'CLASSE_TENSAO': 'ValueRelation', 'FASES_CONEXAO': 'ValueRelation', 'MEIO_DE_ISOLACAO': 'ValueRelation', 'ABERTURA_SOB_CARGA': 'ValueMap', 'POSICAO_NORMAL_DE_OPERACAO': 'ValueRelation', 'CAPACIDADE_ELO': 'ValueRelation', 'CORRENTE_NOMINAL': 'ValueRelation', 'SITUACAO_DE_ATIVACAO': 'ValueRelation', 'TELECOMANDADO': 'ValueMap', 'DATA_CONEXAO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_TRANSFORMADORDEDISTRIBUICAO_14.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'CIRCUITO_MEDIA_TENSAO': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'TIPO_UNIDADE': 'ValueRelation', 'TIPO_TRAFO': 'ValueRelation', 'CLASSE_TENSAO': 'ValueRelation', 'TENSAO_NOMINAL_PRIMARIO': 'ValueRelation', 'TENSAO_NOMINAL_SECUNDARIO': 'ValueRelation', 'TAP': 'TextEdit', 'ESQUEMA_LIGACAO': 'ValueRelation', 'FASES_CONEXAO_PRIMARIA': 'ValueRelation', 'FASES_CONEXAO_SECUNDARIA': 'ValueRelation', 'CAPACIDADE_ELO_FUSIVEL': 'ValueRelation', 'CAPACIDADE_CHAVE_FUSIVEL': 'ValueRelation', 'POTENCIA_NOMINAL_(KVA)': 'ValueRelation', 'PERDA_FERRO_(W)': 'TextEdit', 'PERDA_TOTAL_(W)': 'TextEdit', 'RESISTENCIA_PERCENTUAL_(%)': 'TextEdit', 'REATANCIA_PERCENTUAL_(%)': 'TextEdit', 'IMPEDANCIA_PERCENTUAL_(%)': 'TextEdit', 'ATRIBUICAO_PERDAS': 'ValueMap', 'AREA_LOCALIZACAO': 'ValueRelation', 'POSTO': 'ValueRelation', 'CONFIGURACAO_DO_CIRCUITO': 'ValueRelation', 'SITUACAO_ATIVACAO': 'ValueRelation', 'DATA_CONEXAO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_TRANSFORMADORDESUBESTACAO_15.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'SUBESTACAO': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'TIPO_UNIDADE': 'ValueRelation', 'TIPO_TRAFO': 'ValueRelation', 'REFRIGERACAO': 'TextEdit', 'CLASSE_TENSAO': 'ValueRelation', 'TENSAO_NOMINAL_PRIMARIO': 'ValueRelation', 'TENSAO_NOMINAL_SECUNDARIO': 'ValueRelation', 'ESQUEMA_LIGACAO': 'ValueRelation', 'FASES_CONEXAO_PRIMARIA': 'ValueRelation', 'FASES_CONEXAO_SECUNDARIA': 'ValueRelation', 'SITUACAO_ATIVACAO': 'ValueRelation', 'AREA_LOCALIZACAO': 'ValueRelation', 'POTENCIA_NOMINAL': 'ValueRelation', 'POTENCIA_VENTILACAO_FORCADA_01': 'TextEdit', 'POTENCIA_VENTILACAO_FORCADA_02': 'TextEdit', 'PERDA_FERRO': 'TextEdit', 'PERDA_TOTAL': 'TextEdit', 'RESISTENCIA_PERCENTUAL': 'TextEdit', 'REATANCIA_PERCENTUAL': 'TextEdit', 'IMPEDANCIA_PERCENTUAL': 'TextEdit', 'DATA_FABRICACAO': 'TextEdit', 'DATA_CONEXAO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ALOCACAO_PERDAS': 'TextEdit', 'ENES_01': 'TextEdit', 'ENES_02': 'TextEdit', 'ENES_03': 'TextEdit', 'ENES_04': 'TextEdit', 'ENES_05': 'TextEdit', 'ENES_06': 'TextEdit', 'ENES_07': 'TextEdit', 'ENES_08': 'TextEdit', 'ENES_09': 'TextEdit', 'ENES_10': 'TextEdit', 'ENES_11': 'TextEdit', 'ENES_12': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_GERADORMT_0.set('fieldLabels', {});
lyr_CONSUMIDORAT_1.set('fieldLabels', {});
lyr_COMPENSADORDEREATIVOAT_2.set('fieldLabels', {});
lyr_SECCIONADORAT_3.set('fieldLabels', {});
lyr_SECCIONADORBT_4.set('fieldLabels', {});
lyr_GERADORAT_5.set('fieldLabels', {});
lyr_SEGMENTODEDISTRIBUICAOAT_6.set('fieldLabels', {});
lyr_CONSUMIDORMT_7.set('fieldLabels', {});
lyr_CONJUNTO_9.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'NOME': 'header label', 'DESCRICAO': 'header label', 'Shape_Length': 'header label', 'Shape_Area': 'header label', });
lyr_SUBESTACAO_10.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'NOME': 'header label', 'CARGA_INSTALADA': 'header label', 'DESCRICAO': 'header label', 'Shape_Length': 'header label', 'Shape_Area': 'header label', });
lyr_SEGMENTODEDISTRIBUICAOMT_11.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'SUBESTACAO': 'header label', 'TRANSFORMADOR_SUBESTACAO': 'header label', 'CIRCUITO_MEDIA_TENSAO': 'header label', 'PONTO_NOTAVEL_CONECTADO_1': 'header label', 'PONTO_NOTAVEL_CONECTADO_2': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'AREA_LOCALIZACAO': 'header label', 'FASES_CONEXAO': 'header label', 'GEOMETRIA_CABO': 'header label', 'FORMACAO_CABO': 'header label', 'BITOLA_FASE': 'header label', 'BITOLA_NEUTRO': 'header label', 'METERIAL_FASE': 'header label', 'MATERIAL_NEUTRO': 'header label', 'ISOLACAO_FASE': 'header label', 'ISOLACAO_NEUTRO': 'header label', 'NUMERO_CONDUTORES_POR_FASE': 'header label', 'RESISTENCIA_SEQ_POSITIVA': 'header label', 'REATANCIA_SEQ_POSITIVA': 'header label', 'CORRENTE_NOMINAL': 'header label', 'CORRENTE_MAXIMA': 'header label', 'COMPRIMENTO': 'header label', 'DESCRICAO': 'header label', 'Shape_Length': 'header label', });
lyr_PONTONOTAVEL_12.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'TIPO_PONTO_NOTAVEL': 'header label', 'ESTRUTURA': 'header label', 'MATERIAL': 'header label', 'ESFORCO': 'header label', 'ALTURA': 'header label', 'TIPO_ESTRUTURA': 'header label', 'AREA_LOCALIZACAO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_SECCIONADORMT_13.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'SUBESTACAO': 'header label', 'TRANSFORMADOR_SUBESTACAO': 'header label', 'CIRCUITO_MEDIA_TENSAO': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'AREA_LOCALIZACAO': 'header label', 'TIPO_UNIDADE': 'header label', 'CLASSE_TENSAO': 'header label', 'FASES_CONEXAO': 'header label', 'MEIO_DE_ISOLACAO': 'header label', 'ABERTURA_SOB_CARGA': 'header label', 'POSICAO_NORMAL_DE_OPERACAO': 'header label', 'CAPACIDADE_ELO': 'header label', 'CORRENTE_NOMINAL': 'header label', 'SITUACAO_DE_ATIVACAO': 'header label', 'TELECOMANDADO': 'header label', 'DATA_CONEXAO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_TRANSFORMADORDEDISTRIBUICAO_14.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'CIRCUITO_MEDIA_TENSAO': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'TIPO_UNIDADE': 'header label', 'TIPO_TRAFO': 'header label', 'CLASSE_TENSAO': 'header label', 'TENSAO_NOMINAL_PRIMARIO': 'header label', 'TENSAO_NOMINAL_SECUNDARIO': 'header label', 'TAP': 'header label', 'ESQUEMA_LIGACAO': 'header label', 'FASES_CONEXAO_PRIMARIA': 'header label', 'FASES_CONEXAO_SECUNDARIA': 'header label', 'CAPACIDADE_ELO_FUSIVEL': 'header label', 'CAPACIDADE_CHAVE_FUSIVEL': 'header label', 'POTENCIA_NOMINAL_(KVA)': 'header label', 'PERDA_FERRO_(W)': 'header label', 'PERDA_TOTAL_(W)': 'header label', 'RESISTENCIA_PERCENTUAL_(%)': 'header label', 'REATANCIA_PERCENTUAL_(%)': 'header label', 'IMPEDANCIA_PERCENTUAL_(%)': 'header label', 'ATRIBUICAO_PERDAS': 'header label', 'AREA_LOCALIZACAO': 'header label', 'POSTO': 'header label', 'CONFIGURACAO_DO_CIRCUITO': 'header label', 'SITUACAO_ATIVACAO': 'header label', 'DATA_CONEXAO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_TRANSFORMADORDESUBESTACAO_15.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'SUBESTACAO': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'TIPO_UNIDADE': 'header label', 'TIPO_TRAFO': 'header label', 'REFRIGERACAO': 'header label', 'CLASSE_TENSAO': 'header label', 'TENSAO_NOMINAL_PRIMARIO': 'header label', 'TENSAO_NOMINAL_SECUNDARIO': 'header label', 'ESQUEMA_LIGACAO': 'header label', 'FASES_CONEXAO_PRIMARIA': 'header label', 'FASES_CONEXAO_SECUNDARIA': 'header label', 'SITUACAO_ATIVACAO': 'header label', 'AREA_LOCALIZACAO': 'header label', 'POTENCIA_NOMINAL': 'header label', 'POTENCIA_VENTILACAO_FORCADA_01': 'header label', 'POTENCIA_VENTILACAO_FORCADA_02': 'header label', 'PERDA_FERRO': 'header label', 'PERDA_TOTAL': 'header label', 'RESISTENCIA_PERCENTUAL': 'header label', 'REATANCIA_PERCENTUAL': 'header label', 'IMPEDANCIA_PERCENTUAL': 'header label', 'DATA_FABRICACAO': 'header label', 'DATA_CONEXAO': 'header label', 'MUNICIPIO': 'header label', 'ALOCACAO_PERDAS': 'header label', 'ENES_01': 'header label', 'ENES_02': 'header label', 'ENES_03': 'header label', 'ENES_04': 'header label', 'ENES_05': 'header label', 'ENES_06': 'header label', 'ENES_07': 'header label', 'ENES_08': 'header label', 'ENES_09': 'header label', 'ENES_10': 'header label', 'ENES_11': 'header label', 'ENES_12': 'header label', 'DESCRICAO': 'header label', });
lyr_TRANSFORMADORDESUBESTACAO_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});