import fs from 'fs';
import { loadData } from './load.js';
import { addSeason } from './series-service.js'; 

const data = loadData();

const season = {
    number: 1,
    episodes: [{ id: 801, title: "First Contact", rating: 8, duration: 44 }]
};

const updatedSeries = addSeason(data.series, 5, season);

const updatedData = {
    ...data,
    series: updatedSeries
};

fs.writeFileSync(
    'series-updated.json',
    JSON.stringify(updatedData, null, 2)
);

console.log('Successfully saved to series-updated.json');