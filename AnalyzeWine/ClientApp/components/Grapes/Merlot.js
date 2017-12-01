var Merlot = {
    varietal: 'Merlot',
    wineType: 'Red',
    production: 267169,
    climate: {
        cold: false,
        cool: true,
        medium: true,
        warm: true,
        hot: false,
    },
    skin: {
        veryThick: true,
        thick: true,
        medium: false,
        thin: false,
        veryThin: false,
    },
    acidity: {
        veryHigh: false,
        high: false,
        medium: false,
        low: true,
        none: false,
    },
    viscosity: {
        high: true,
        medium: true,
        low: false,
    },
    tannins: {
        veryHigh: false,
        high: true,
        medium: true,
        low: false,
        veryLow: false,
        none: false,
    },
    characteristics: {
        general: ['Blueberry', 'Black Cherry', 'Plum', 'Chocolate', 'Spice', 'Cedar', 'Vanilla'],
        byAge: {
            young: ['Dark Berry'],
        },
    },
    style: {
        country: {
            countries: ['France', 'United States'],
        },
        region: {
            regions: [['France', 'Bordeaux'], ['United States', 'California'], ['United States', 'Washington']],
            climate: [['Washington', 'Cool']],
        },
    }
};
export default Merlot;
//# sourceMappingURL=Merlot.js.map