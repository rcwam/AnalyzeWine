var PinotNoir = {
    varietal: 'Pinot Noir',
    wineType: 'Red',
    production: 86662,
    climate: {
        cool: true,
        medium: true,
        warm: false,
    },
    skin: {
        thick: false,
        medium: false,
        thin: true,
    },
    acidity: {
        high: true,
        medium: true,
        low: false,
    },
    viscosity: {
        high: false,
        medium: true,
        low: true,
    },
    tannins: {
        high: false,
        medium: false,
        low: true,
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