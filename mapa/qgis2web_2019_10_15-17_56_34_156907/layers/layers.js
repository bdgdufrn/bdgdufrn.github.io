var wms_layers = [];

        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });var format_CONJUNTO_1 = new ol.format.GeoJSON();
var features_CONJUNTO_1 = format_CONJUNTO_1.readFeatures(json_CONJUNTO_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONJUNTO_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_CONJUNTO_1.addFeatures(features_CONJUNTO_1);var lyr_CONJUNTO_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONJUNTO_1, 
                style: style_CONJUNTO_1,
                title: '<img src="styles/legend/CONJUNTO_1.png" /> CONJUNTO'
            });var format_SUBESTACAO_2 = new ol.format.GeoJSON();
var features_SUBESTACAO_2 = format_SUBESTACAO_2.readFeatures(json_SUBESTACAO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBESTACAO_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SUBESTACAO_2.addFeatures(features_SUBESTACAO_2);var lyr_SUBESTACAO_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUBESTACAO_2, 
                style: style_SUBESTACAO_2,
                title: '<img src="styles/legend/SUBESTACAO_2.png" /> SUBESTACAO'
            });var format_SEGMENTODEDISTRIBUICAOMT_3 = new ol.format.GeoJSON();
var features_SEGMENTODEDISTRIBUICAOMT_3 = format_SEGMENTODEDISTRIBUICAOMT_3.readFeatures(json_SEGMENTODEDISTRIBUICAOMT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEGMENTODEDISTRIBUICAOMT_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SEGMENTODEDISTRIBUICAOMT_3.addFeatures(features_SEGMENTODEDISTRIBUICAOMT_3);var lyr_SEGMENTODEDISTRIBUICAOMT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEGMENTODEDISTRIBUICAOMT_3, 
                style: style_SEGMENTODEDISTRIBUICAOMT_3,
                title: '<img src="styles/legend/SEGMENTODEDISTRIBUICAOMT_3.png" /> SEGMENTO DE DISTRIBUICAO MT'
            });var format_PONTONOTAVEL_4 = new ol.format.GeoJSON();
var features_PONTONOTAVEL_4 = format_PONTONOTAVEL_4.readFeatures(json_PONTONOTAVEL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PONTONOTAVEL_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PONTONOTAVEL_4.addFeatures(features_PONTONOTAVEL_4);var lyr_PONTONOTAVEL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PONTONOTAVEL_4, 
                style: style_PONTONOTAVEL_4,
                title: '<img src="styles/legend/PONTONOTAVEL_4.png" /> PONTO NOTAVEL'
            });var format_SECCIONADORMT_5 = new ol.format.GeoJSON();
var features_SECCIONADORMT_5 = format_SECCIONADORMT_5.readFeatures(json_SECCIONADORMT_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SECCIONADORMT_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SECCIONADORMT_5.addFeatures(features_SECCIONADORMT_5);var lyr_SECCIONADORMT_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SECCIONADORMT_5, 
                style: style_SECCIONADORMT_5,
                title: '<img src="styles/legend/SECCIONADORMT_5.png" /> SECCIONADOR MT'
            });var format_TRANSFORMADORDEDISTRIBUICAO_6 = new ol.format.GeoJSON();
var features_TRANSFORMADORDEDISTRIBUICAO_6 = format_TRANSFORMADORDEDISTRIBUICAO_6.readFeatures(json_TRANSFORMADORDEDISTRIBUICAO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSFORMADORDEDISTRIBUICAO_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TRANSFORMADORDEDISTRIBUICAO_6.addFeatures(features_TRANSFORMADORDEDISTRIBUICAO_6);var lyr_TRANSFORMADORDEDISTRIBUICAO_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRANSFORMADORDEDISTRIBUICAO_6, 
                style: style_TRANSFORMADORDEDISTRIBUICAO_6,
                title: '<img src="styles/legend/TRANSFORMADORDEDISTRIBUICAO_6.png" /> TRANSFORMADOR DE DISTRIBUICAO'
            });var format_TRANSFORMADORDESUBESTACAO_7 = new ol.format.GeoJSON();
var features_TRANSFORMADORDESUBESTACAO_7 = format_TRANSFORMADORDESUBESTACAO_7.readFeatures(json_TRANSFORMADORDESUBESTACAO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRANSFORMADORDESUBESTACAO_7 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_TRANSFORMADORDESUBESTACAO_7.addFeatures(features_TRANSFORMADORDESUBESTACAO_7);var lyr_TRANSFORMADORDESUBESTACAO_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRANSFORMADORDESUBESTACAO_7, 
                style: style_TRANSFORMADORDESUBESTACAO_7,
                title: '<img src="styles/legend/TRANSFORMADORDESUBESTACAO_7.png" /> TRANSFORMADOR DE SUBESTACAO'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_CONJUNTO_1.setVisible(true);lyr_SUBESTACAO_2.setVisible(true);lyr_SEGMENTODEDISTRIBUICAOMT_3.setVisible(true);lyr_PONTONOTAVEL_4.setVisible(true);lyr_SECCIONADORMT_5.setVisible(true);lyr_TRANSFORMADORDEDISTRIBUICAO_6.setVisible(true);lyr_TRANSFORMADORDESUBESTACAO_7.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_CONJUNTO_1,lyr_SUBESTACAO_2,lyr_SEGMENTODEDISTRIBUICAOMT_3,lyr_PONTONOTAVEL_4,lyr_SECCIONADORMT_5,lyr_TRANSFORMADORDEDISTRIBUICAO_6,lyr_TRANSFORMADORDESUBESTACAO_7];
lyr_CONJUNTO_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'NOME': 'NOME', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SUBESTACAO_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'NOME': 'NOME', 'CARGA_INSTALADA': 'CARGA_INSTALADA', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SEGMENTODEDISTRIBUICAOMT_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'TRANSFORMADOR_SUBESTACAO': 'TRANSFORMADOR_SUBESTACAO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PONTO_NOTAVEL_CONECTADO_1': 'PONTO_NOTAVEL_CONECTADO_1', 'PONTO_NOTAVEL_CONECTADO_2': 'PONTO_NOTAVEL_CONECTADO_2', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'GEOMETRIA_CABO': 'GEOMETRIA_CABO', 'FORMACAO_CABO': 'FORMACAO_CABO', 'BITOLA_FASE': 'BITOLA_FASE', 'BITOLA_NEUTRO': 'BITOLA_NEUTRO', 'METERIAL_FASE': 'METERIAL_FASE', 'MATERIAL_NEUTRO': 'MATERIAL_NEUTRO', 'ISOLACAO_FASE': 'ISOLACAO_FASE', 'ISOLACAO_NEUTRO': 'ISOLACAO_NEUTRO', 'NUMERO_CONDUTORES_POR_FASE': 'NUMERO_CONDUTORES_POR_FASE', 'RESISTENCIA_SEQ_POSITIVA': 'RESISTENCIA_SEQ_POSITIVA', 'REATANCIA_SEQ_POSITIVA': 'REATANCIA_SEQ_POSITIVA', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'CORRENTE_MAXIMA': 'CORRENTE_MAXIMA', 'COMPRIMENTO': 'COMPRIMENTO', 'DESCRICAO': 'DESCRICAO', 'Shape_Length': 'Shape_Length', });
lyr_PONTONOTAVEL_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'TIPO_PONTO_NOTAVEL': 'TIPO_PONTO_NOTAVEL', 'ESTRUTURA': 'ESTRUTURA', 'MATERIAL': 'MATERIAL', 'ESFORCO': 'ESFORCO', 'ALTURA': 'ALTURA', 'TIPO_ESTRUTURA': 'TIPO_ESTRUTURA', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_SECCIONADORMT_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'TRANSFORMADOR_SUBESTACAO': 'TRANSFORMADOR_SUBESTACAO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'FASES_CONEXAO': 'FASES_CONEXAO', 'MEIO_DE_ISOLACAO': 'MEIO_DE_ISOLACAO', 'ABERTURA_SOB_CARGA': 'ABERTURA_SOB_CARGA', 'POSICAO_NORMAL_DE_OPERACAO': 'POSICAO_NORMAL_DE_OPERACAO', 'CAPACIDADE_ELO': 'CAPACIDADE_ELO', 'CORRENTE_NOMINAL': 'CORRENTE_NOMINAL', 'SITUACAO_DE_ATIVACAO': 'SITUACAO_DE_ATIVACAO', 'TELECOMANDADO': 'TELECOMANDADO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_TRANSFORMADORDEDISTRIBUICAO_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'CIRCUITO_MEDIA_TENSAO': 'CIRCUITO_MEDIA_TENSAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'TIPO_TRAFO': 'TIPO_TRAFO', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'TENSAO_NOMINAL_PRIMARIO': 'TENSAO_NOMINAL_PRIMARIO', 'TENSAO_NOMINAL_SECUNDARIO': 'TENSAO_NOMINAL_SECUNDARIO', 'TAP': 'TAP', 'ESQUEMA_LIGACAO': 'ESQUEMA_LIGACAO', 'FASES_CONEXAO_PRIMARIA': 'FASES_CONEXAO_PRIMARIA', 'FASES_CONEXAO_SECUNDARIA': 'FASES_CONEXAO_SECUNDARIA', 'CAPACIDADE_ELO_FUSIVEL': 'CAPACIDADE_ELO_FUSIVEL', 'CAPACIDADE_CHAVE_FUSIVEL': 'CAPACIDADE_CHAVE_FUSIVEL', 'POTENCIA_NOMINAL_(KVA)': 'POTENCIA_NOMINAL_(KVA)', 'PERDA_FERRO_(W)': 'PERDA_FERRO_(W)', 'PERDA_TOTAL_(W)': 'PERDA_TOTAL_(W)', 'RESISTENCIA_PERCENTUAL_(%)': 'RESISTENCIA_PERCENTUAL_(%)', 'REATANCIA_PERCENTUAL_(%)': 'REATANCIA_PERCENTUAL_(%)', 'IMPEDANCIA_PERCENTUAL_(%)': 'IMPEDANCIA_PERCENTUAL_(%)', 'ATRIBUICAO_PERDAS': 'ATRIBUICAO_PERDAS', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'POSTO': 'POSTO', 'CONFIGURACAO_DO_CIRCUITO': 'CONFIGURACAO_DO_CIRCUITO', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'DESCRICAO': 'DESCRICAO', });
lyr_TRANSFORMADORDESUBESTACAO_7.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COD_ID': 'COD_ID', 'DISTRIBUIDORA': 'DISTRIBUIDORA', 'CONJUNTO': 'CONJUNTO', 'SUBESTACAO': 'SUBESTACAO', 'PAC_1': 'PAC_1', 'PAC_2': 'PAC_2', 'TIPO_UNIDADE': 'TIPO_UNIDADE', 'TIPO_TRAFO': 'TIPO_TRAFO', 'REFRIGERACAO': 'REFRIGERACAO', 'CLASSE_TENSAO': 'CLASSE_TENSAO', 'TENSAO_NOMINAL_PRIMARIO': 'TENSAO_NOMINAL_PRIMARIO', 'TENSAO_NOMINAL_SECUNDARIO': 'TENSAO_NOMINAL_SECUNDARIO', 'ESQUEMA_LIGACAO': 'ESQUEMA_LIGACAO', 'FASES_CONEXAO_PRIMARIA': 'FASES_CONEXAO_PRIMARIA', 'FASES_CONEXAO_SECUNDARIA': 'FASES_CONEXAO_SECUNDARIA', 'SITUACAO_ATIVACAO': 'SITUACAO_ATIVACAO', 'AREA_LOCALIZACAO': 'AREA_LOCALIZACAO', 'POTENCIA_NOMINAL': 'POTENCIA_NOMINAL', 'POTENCIA_VENTILACAO_FORCADA_01': 'POTENCIA_VENTILACAO_FORCADA_01', 'POTENCIA_VENTILACAO_FORCADA_02': 'POTENCIA_VENTILACAO_FORCADA_02', 'PERDA_FERRO': 'PERDA_FERRO', 'PERDA_TOTAL': 'PERDA_TOTAL', 'RESISTENCIA_PERCENTUAL': 'RESISTENCIA_PERCENTUAL', 'REATANCIA_PERCENTUAL': 'REATANCIA_PERCENTUAL', 'IMPEDANCIA_PERCENTUAL': 'IMPEDANCIA_PERCENTUAL', 'DATA_FABRICACAO': 'DATA_FABRICACAO', 'DATA_CONEXAO': 'DATA_CONEXAO', 'MUNICIPIO': 'MUNICIPIO', 'ALOCACAO_PERDAS': 'ALOCACAO_PERDAS', 'ENES_01': 'ENES_01', 'ENES_02': 'ENES_02', 'ENES_03': 'ENES_03', 'ENES_04': 'ENES_04', 'ENES_05': 'ENES_05', 'ENES_06': 'ENES_06', 'ENES_07': 'ENES_07', 'ENES_08': 'ENES_08', 'ENES_09': 'ENES_09', 'ENES_10': 'ENES_10', 'ENES_11': 'ENES_11', 'ENES_12': 'ENES_12', 'DESCRICAO': 'DESCRICAO', });
lyr_CONJUNTO_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'NOME': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SUBESTACAO_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'ValueRelation', 'NOME': 'TextEdit', 'CARGA_INSTALADA': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SEGMENTODEDISTRIBUICAOMT_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'ValueRelation', 'SUBESTACAO': 'ValueRelation', 'TRANSFORMADOR_SUBESTACAO': 'ValueRelation', 'CIRCUITO_MEDIA_TENSAO': 'ValueRelation', 'PONTO_NOTAVEL_CONECTADO_1': 'TextEdit', 'PONTO_NOTAVEL_CONECTADO_2': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'FASES_CONEXAO': 'ValueRelation', 'GEOMETRIA_CABO': 'ValueRelation', 'FORMACAO_CABO': 'ValueRelation', 'BITOLA_FASE': 'ValueRelation', 'BITOLA_NEUTRO': 'ValueRelation', 'METERIAL_FASE': 'ValueRelation', 'MATERIAL_NEUTRO': 'ValueRelation', 'ISOLACAO_FASE': 'ValueRelation', 'ISOLACAO_NEUTRO': 'ValueRelation', 'NUMERO_CONDUTORES_POR_FASE': 'TextEdit', 'RESISTENCIA_SEQ_POSITIVA': 'TextEdit', 'REATANCIA_SEQ_POSITIVA': 'TextEdit', 'CORRENTE_NOMINAL': 'TextEdit', 'CORRENTE_MAXIMA': 'TextEdit', 'COMPRIMENTO': 'TextEdit', 'DESCRICAO': 'TextEdit', 'Shape_Length': 'TextEdit', });
lyr_PONTONOTAVEL_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'TIPO_PONTO_NOTAVEL': 'ValueRelation', 'ESTRUTURA': 'ValueRelation', 'MATERIAL': 'ValueRelation', 'ESFORCO': 'ValueRelation', 'ALTURA': 'ValueRelation', 'TIPO_ESTRUTURA': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_SECCIONADORMT_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'SUBESTACAO': 'ValueRelation', 'TRANSFORMADOR_SUBESTACAO': 'ValueRelation', 'CIRCUITO_MEDIA_TENSAO': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'AREA_LOCALIZACAO': 'ValueRelation', 'TIPO_UNIDADE': 'ValueRelation', 'CLASSE_TENSAO': 'ValueRelation', 'FASES_CONEXAO': 'ValueRelation', 'MEIO_DE_ISOLACAO': 'ValueRelation', 'ABERTURA_SOB_CARGA': 'ValueMap', 'POSICAO_NORMAL_DE_OPERACAO': 'ValueRelation', 'CAPACIDADE_ELO': 'ValueRelation', 'CORRENTE_NOMINAL': 'ValueRelation', 'SITUACAO_DE_ATIVACAO': 'ValueRelation', 'TELECOMANDADO': 'ValueMap', 'DATA_CONEXAO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_TRANSFORMADORDEDISTRIBUICAO_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'CIRCUITO_MEDIA_TENSAO': 'ValueRelation', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'TIPO_UNIDADE': 'ValueRelation', 'TIPO_TRAFO': 'ValueRelation', 'CLASSE_TENSAO': 'ValueRelation', 'TENSAO_NOMINAL_PRIMARIO': 'ValueRelation', 'TENSAO_NOMINAL_SECUNDARIO': 'ValueRelation', 'TAP': 'TextEdit', 'ESQUEMA_LIGACAO': 'ValueRelation', 'FASES_CONEXAO_PRIMARIA': 'ValueRelation', 'FASES_CONEXAO_SECUNDARIA': 'ValueRelation', 'CAPACIDADE_ELO_FUSIVEL': 'ValueRelation', 'CAPACIDADE_CHAVE_FUSIVEL': 'ValueRelation', 'POTENCIA_NOMINAL_(KVA)': 'ValueRelation', 'PERDA_FERRO_(W)': 'TextEdit', 'PERDA_TOTAL_(W)': 'TextEdit', 'RESISTENCIA_PERCENTUAL_(%)': 'TextEdit', 'REATANCIA_PERCENTUAL_(%)': 'TextEdit', 'IMPEDANCIA_PERCENTUAL_(%)': 'TextEdit', 'ATRIBUICAO_PERDAS': 'ValueMap', 'AREA_LOCALIZACAO': 'ValueRelation', 'POSTO': 'ValueRelation', 'CONFIGURACAO_DO_CIRCUITO': 'ValueRelation', 'SITUACAO_ATIVACAO': 'ValueRelation', 'DATA_CONEXAO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_TRANSFORMADORDESUBESTACAO_7.set('fieldImages', {'OBJECTID': 'TextEdit', 'COD_ID': 'TextEdit', 'DISTRIBUIDORA': 'TextEdit', 'CONJUNTO': 'TextEdit', 'SUBESTACAO': 'TextEdit', 'PAC_1': 'TextEdit', 'PAC_2': 'TextEdit', 'TIPO_UNIDADE': 'ValueRelation', 'TIPO_TRAFO': 'ValueRelation', 'REFRIGERACAO': 'TextEdit', 'CLASSE_TENSAO': 'ValueRelation', 'TENSAO_NOMINAL_PRIMARIO': 'ValueRelation', 'TENSAO_NOMINAL_SECUNDARIO': 'ValueRelation', 'ESQUEMA_LIGACAO': 'ValueRelation', 'FASES_CONEXAO_PRIMARIA': 'ValueRelation', 'FASES_CONEXAO_SECUNDARIA': 'ValueRelation', 'SITUACAO_ATIVACAO': 'ValueRelation', 'AREA_LOCALIZACAO': 'ValueRelation', 'POTENCIA_NOMINAL': 'ValueRelation', 'POTENCIA_VENTILACAO_FORCADA_01': 'TextEdit', 'POTENCIA_VENTILACAO_FORCADA_02': 'TextEdit', 'PERDA_FERRO': 'TextEdit', 'PERDA_TOTAL': 'TextEdit', 'RESISTENCIA_PERCENTUAL': 'TextEdit', 'REATANCIA_PERCENTUAL': 'TextEdit', 'IMPEDANCIA_PERCENTUAL': 'TextEdit', 'DATA_FABRICACAO': 'TextEdit', 'DATA_CONEXAO': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'ALOCACAO_PERDAS': 'TextEdit', 'ENES_01': 'TextEdit', 'ENES_02': 'TextEdit', 'ENES_03': 'TextEdit', 'ENES_04': 'TextEdit', 'ENES_05': 'TextEdit', 'ENES_06': 'TextEdit', 'ENES_07': 'TextEdit', 'ENES_08': 'TextEdit', 'ENES_09': 'TextEdit', 'ENES_10': 'TextEdit', 'ENES_11': 'TextEdit', 'ENES_12': 'TextEdit', 'DESCRICAO': 'TextEdit', });
lyr_CONJUNTO_1.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'NOME': 'header label', 'DESCRICAO': 'header label', 'Shape_Length': 'header label', 'Shape_Area': 'header label', });
lyr_SUBESTACAO_2.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'NOME': 'header label', 'CARGA_INSTALADA': 'header label', 'DESCRICAO': 'header label', 'Shape_Length': 'header label', 'Shape_Area': 'header label', });
lyr_SEGMENTODEDISTRIBUICAOMT_3.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'SUBESTACAO': 'header label', 'TRANSFORMADOR_SUBESTACAO': 'header label', 'CIRCUITO_MEDIA_TENSAO': 'header label', 'PONTO_NOTAVEL_CONECTADO_1': 'header label', 'PONTO_NOTAVEL_CONECTADO_2': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'AREA_LOCALIZACAO': 'header label', 'FASES_CONEXAO': 'header label', 'GEOMETRIA_CABO': 'header label', 'FORMACAO_CABO': 'header label', 'BITOLA_FASE': 'header label', 'BITOLA_NEUTRO': 'header label', 'METERIAL_FASE': 'header label', 'MATERIAL_NEUTRO': 'header label', 'ISOLACAO_FASE': 'header label', 'ISOLACAO_NEUTRO': 'header label', 'NUMERO_CONDUTORES_POR_FASE': 'header label', 'RESISTENCIA_SEQ_POSITIVA': 'header label', 'REATANCIA_SEQ_POSITIVA': 'header label', 'CORRENTE_NOMINAL': 'header label', 'CORRENTE_MAXIMA': 'header label', 'COMPRIMENTO': 'header label', 'DESCRICAO': 'header label', 'Shape_Length': 'header label', });
lyr_PONTONOTAVEL_4.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'TIPO_PONTO_NOTAVEL': 'header label', 'ESTRUTURA': 'header label', 'MATERIAL': 'header label', 'ESFORCO': 'header label', 'ALTURA': 'header label', 'TIPO_ESTRUTURA': 'header label', 'AREA_LOCALIZACAO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_SECCIONADORMT_5.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'SUBESTACAO': 'header label', 'TRANSFORMADOR_SUBESTACAO': 'header label', 'CIRCUITO_MEDIA_TENSAO': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'AREA_LOCALIZACAO': 'header label', 'TIPO_UNIDADE': 'header label', 'CLASSE_TENSAO': 'header label', 'FASES_CONEXAO': 'header label', 'MEIO_DE_ISOLACAO': 'header label', 'ABERTURA_SOB_CARGA': 'header label', 'POSICAO_NORMAL_DE_OPERACAO': 'header label', 'CAPACIDADE_ELO': 'header label', 'CORRENTE_NOMINAL': 'header label', 'SITUACAO_DE_ATIVACAO': 'header label', 'TELECOMANDADO': 'header label', 'DATA_CONEXAO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_TRANSFORMADORDEDISTRIBUICAO_6.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'CIRCUITO_MEDIA_TENSAO': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'TIPO_UNIDADE': 'header label', 'TIPO_TRAFO': 'header label', 'CLASSE_TENSAO': 'header label', 'TENSAO_NOMINAL_PRIMARIO': 'header label', 'TENSAO_NOMINAL_SECUNDARIO': 'header label', 'TAP': 'header label', 'ESQUEMA_LIGACAO': 'header label', 'FASES_CONEXAO_PRIMARIA': 'header label', 'FASES_CONEXAO_SECUNDARIA': 'header label', 'CAPACIDADE_ELO_FUSIVEL': 'header label', 'CAPACIDADE_CHAVE_FUSIVEL': 'header label', 'POTENCIA_NOMINAL_(KVA)': 'header label', 'PERDA_FERRO_(W)': 'header label', 'PERDA_TOTAL_(W)': 'header label', 'RESISTENCIA_PERCENTUAL_(%)': 'header label', 'REATANCIA_PERCENTUAL_(%)': 'header label', 'IMPEDANCIA_PERCENTUAL_(%)': 'header label', 'ATRIBUICAO_PERDAS': 'header label', 'AREA_LOCALIZACAO': 'header label', 'POSTO': 'header label', 'CONFIGURACAO_DO_CIRCUITO': 'header label', 'SITUACAO_ATIVACAO': 'header label', 'DATA_CONEXAO': 'header label', 'MUNICIPIO': 'header label', 'DESCRICAO': 'header label', });
lyr_TRANSFORMADORDESUBESTACAO_7.set('fieldLabels', {'OBJECTID': 'header label', 'COD_ID': 'header label', 'DISTRIBUIDORA': 'header label', 'CONJUNTO': 'header label', 'SUBESTACAO': 'header label', 'PAC_1': 'header label', 'PAC_2': 'header label', 'TIPO_UNIDADE': 'header label', 'TIPO_TRAFO': 'header label', 'REFRIGERACAO': 'header label', 'CLASSE_TENSAO': 'header label', 'TENSAO_NOMINAL_PRIMARIO': 'header label', 'TENSAO_NOMINAL_SECUNDARIO': 'header label', 'ESQUEMA_LIGACAO': 'header label', 'FASES_CONEXAO_PRIMARIA': 'header label', 'FASES_CONEXAO_SECUNDARIA': 'header label', 'SITUACAO_ATIVACAO': 'header label', 'AREA_LOCALIZACAO': 'header label', 'POTENCIA_NOMINAL': 'header label', 'POTENCIA_VENTILACAO_FORCADA_01': 'header label', 'POTENCIA_VENTILACAO_FORCADA_02': 'header label', 'PERDA_FERRO': 'header label', 'PERDA_TOTAL': 'header label', 'RESISTENCIA_PERCENTUAL': 'header label', 'REATANCIA_PERCENTUAL': 'header label', 'IMPEDANCIA_PERCENTUAL': 'header label', 'DATA_FABRICACAO': 'header label', 'DATA_CONEXAO': 'header label', 'MUNICIPIO': 'header label', 'ALOCACAO_PERDAS': 'header label', 'ENES_01': 'header label', 'ENES_02': 'header label', 'ENES_03': 'header label', 'ENES_04': 'header label', 'ENES_05': 'header label', 'ENES_06': 'header label', 'ENES_07': 'header label', 'ENES_08': 'header label', 'ENES_09': 'header label', 'ENES_10': 'header label', 'ENES_11': 'header label', 'ENES_12': 'header label', 'DESCRICAO': 'header label', });
lyr_TRANSFORMADORDESUBESTACAO_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});