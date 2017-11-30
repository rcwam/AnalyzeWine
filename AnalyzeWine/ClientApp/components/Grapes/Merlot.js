var Merlot = {
    varietal: 'Merlot',
    wineType: 'Red',
    production: 267169,
    climate: {
        cool: true,
        medium: true,
        warm: true,
    },
    skin: {
        thick: true,
        medium: false,
        thin: false,
    },
    acidity: {
        high: false,
        medium: false,
        low: true,
    },
    viscosity: {
        high: true,
        medium: true,
        low: false,
    },
    tannins: {
        high: true,
        medium: true,
        low: false,
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