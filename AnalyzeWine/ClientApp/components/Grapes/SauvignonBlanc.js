var SauvignonBlanc = {
    varietal: 'Sauvignon Blanc',
    wineType: 'White',
    production: 110138,
    climate: {
        cold: false,
        cool: true,
        medium: true,
        warm: false,
        hot: false,
    },
    acidity: {
        veryHigh: true,
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
        general: ['Grapefruit', 'Tropical Fruit', 'Gooseberry', 'Cut Grass', 'Herbal', 'Cat Urine'],
    },
    style: {
        country: {
            countries: ['United States', 'France', 'New Zealand'],
            sweetness: [['All', 'Dry']],
            bulkAging: [['France', 'Inert'], ['United States', 'Any']],
            characteristics: [['New Zealand', ['Grapefruit', 'Tropical Fruit']]],
            malolactic: [['France', 'Never']],
        },
        region: {
            regions: [['United States', 'California'], ['France', 'Loire Valley']],
            alias: [['California', 'Fume Blanc']],
            characteristics: [['Loire Valley', ['Cut Grass', 'Herbal']], ['California', ['Butter']]],
            malolactic: [['California', 'Sometimes']],
        },
        appellation: {
            appellations: [['France', 'Loire Valley', 'Sancerre'], ['France', 'Loire Valley', 'Pouilly-Fume']]
        },
    }
};
export default SauvignonBlanc;
//# sourceMappingURL=SauvignonBlanc.js.map