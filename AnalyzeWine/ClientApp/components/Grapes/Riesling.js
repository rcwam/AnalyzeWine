var Riesling = {
    varietal: 'Riesling',
    wineType: 'White',
    production: 50060,
    climate: {
        cold: true,
        cool: true,
        medium: false,
        warm: false,
        hot: false,
    },
    acidity: {
        veryHigh: true,
        high: true,
        medium: false,
        low: false,
        none: false,
    },
    viscosity: {
        high: true,
        medium: false,
        low: true,
    },
    characteristics: {
        general: ['Apricot', 'Nectarine', 'Peach', 'Apple', 'Pear', 'Pineapple', 'Lime', 'Lemon', 'Honey', 'Honeycomb', 'Beeswax', 'Ginger', 'Citrus Blossom', 'Rubber'],
        byAge: {
            old: ['Diesel', 'Petrol', 'Lanolin'],
        },
        pairing: ['Spicy Food', 'Indian', 'Thai', 'Asian Cuisine', 'Roasted Vegetables', 'Soft Cheese'],
    },
    style: {
        country: {
            production: [['Germany', 56000], ['Australia', 10300], ['United States', 9000], ['France', 8700], ['Austria', 4600], ['New Zealand', 1830]],
            climate: [['All', 'Cool']],
            bulkAging: [['All', 'Inert']],
            sweetness: [['Germany', 'Dessert'], ['Germany', 'Off-Dry']],
            malolactic: [['All', 'Never']],
        },
        region: {
            regions: [['Germany', 'Pfalz'], ['Germany', 'Mosel'], ['Germany', 'Rheinsessen'], ['Austria', 'Lake Neusiedl'], ['Australia', 'Clare Valley'], ['Australia', 'Eden Valley'], ['United States', 'Washington'], ['United States', 'California'], ['United States', 'Finger Lakes'], ['France', 'Alsace'], ['New Zealand', 'Gisbourne'], ['New Zealand', 'Waitaki Valley'], ['New Zealand', 'Wairarapa'], ['New Zealand', 'Marlborough'], ['New Zealand', 'Central Otago'], ['New Zealand', 'Nelson'], ['New Zealand', 'Canterbury'], ['New Zealand', 'Waipara Valley']],
            sweetness: [['Lake Neusiedl', 'Dessert']],
            characteristics: [['Clare Valley', ['Crisp Citrus', 'Toast', 'Honeysuckle']]],
        }
    }
};
export default Riesling;
//# sourceMappingURL=Riesling.js.map