var PinotGris = {
    varietal: 'Pinot Gris',
    wineType: 'White',
    production: 43563,
    climate: {
        cold: false,
        cool: true,
        medium: true,
        warm: false,
        hot: false,
    },
    acidity: {
        veryHigh: false,
        high: true,
        medium: true,
        low: false,
        none: false,
    },
    viscosity: {
        high: false,
        medium: true,
        low: true,
    },
    characteristics: {
        general: [/*Oaked*/ 'Ripe Apple', 'Peache', 'Almond', 'Cream', /*UnOaked*/ 'Green Apple', 'Citrus', 'Mineral', 'Spice'],
    },
    style: {
        country: {
            countries: ['Germany', 'Austria', 'France', 'Italy', 'United States'],
            alias: [['Germany', 'Rulander'], ['Austria', 'Rulander'], ['Italy', 'Pinot Grigio']],
            sweetness: [['Most', 'Dry']],
            bulkAging: [['France', 'Oak'], ['Italy', 'Inert'], ['Germany', 'Oak'], ['United States', 'Oak']],
            characteristics: [['France', ['Ripe Apple', 'Peache', 'Almond', 'Cream']], ['Italy', ['Green Apple', 'Citrus', 'Mineral', 'Spice']]]
        },
        region: {
            regions: [['France', 'Alsace'], ['United States', 'Oregon'], ['United States', 'California']],
        },
        note: 'Unoaked Pinot Gris is usually called Pinot Grigio.'
    }
};
export default PinotGris;
//# sourceMappingURL=PinotGris.js.map