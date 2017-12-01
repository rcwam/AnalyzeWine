var Chardonnay = {
    varietal: 'Chardonnay',
    wineType: 'White',
    production: 198793,
    climate: {
        cold: true,
        cool: true,
        medium: true,
        warm: true,
        hot: true,
    },
    acidity: {
        veryHigh: false,
        high: false,
        medium: true,
        low: true,
        none: false,
    },
    viscosity: {
        high: true,
        medium: true,
        low: false,
    },
    characteristics: {
        general: [/*Old World*/ 'Citrus', 'Green Apple', 'Olive', 'Nut', 'Mineral', /*New World*/ 'Pear', 'Apple Pie', 'Pineapple', 'Toffee', 'Butter', 'Vanilla', 'Spice'],
    },
    style: {
        country: {
            countries: ['France', 'United States', 'Australia', 'New Zealand', 'South Africa', 'Argentina', 'Chile'],
            alias: [['Austria', 'Morillon']],
            bulkAging: [['All', 'Oak']],
            sweetness: [['All', 'Dry']],
        },
        region: {
            regions: [['United States', 'California'], ['France', 'Burgundy'], ['France', 'Chablis'], ['France', 'Champagne'], ['France', 'Cote d\'Or'], ['Australia', 'Victoria']],
            climate: [['Chablis', 'Cool'], ['Cote d\'Or', 'Medium'], ['Pouilly-Fuisse', 'Warm'], ['Champagne', 'Cool'], ['California', 'Medium'], ['Oregan', 'Cool']],
            characteristics: [['Chablis', ['Mineral']], ['Cote d\'Or', ['Oak']], ['California', ['Oak', 'Butter']]],
        },
    },
};
export default Chardonnay;
//# sourceMappingURL=Chardonnay.js.map