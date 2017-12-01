var PinotNoir = {
    varietal: 'Pinot Noir',
    wineType: 'Red',
    production: 86662,
    climate: {
        cold: false,
        cool: true,
        medium: true,
        warm: false,
        hot: false,
    },
    skin: {
        veryThick: false,
        thick: false,
        medium: false,
        thin: true,
        veryThin: true,
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
    tannins: {
        veryHigh: false,
        high: false,
        medium: false,
        low: true,
        veryLow: false,
        none: false,
    },
    characteristics: {
        general: ['Cranberry', 'Cherry', 'Petrichor', 'Tobacco', 'Leather', 'Smoke', 'Spice', 'Earth', 'Barnyard'],
    },
    style: {
        country: {
            countries: ['France', 'United States', 'New Zealand'],
            characteristics: [['New Zealand', ['Fruit']]],
        },
        region: {
            regions: [['France', 'Burgundy'], ['United States', 'California'], ['United States', 'Oregon']],
            climate: [['Burgundy', 'Cool'], ['California', 'Medium'], ['Oregon', 'Cool']],
            characteristics: [['California', ['Fruit']]],
        },
    }
};
export default PinotNoir;
//# sourceMappingURL=PinotNoir.js.map