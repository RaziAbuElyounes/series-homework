export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => {
    return show.seasons[seasonIndex].episodes[episodeIndex].title;
};
export const getLastSeasonNumber = show => {
    return show.seasons.length > 0 ? show.seasons[show.seasons.length -1].number : 0;

};
export const getNextSeasonYear = show => {
    return show.nextSeason?.year ??  `No announcement`;
};
export const getById = (series, id) => {
    return series.find(show => show.id === id);
};
export const getSeasonsCount = series => {
    return series.map(show => ({title: show.title, seasons: show.seasons.length}));
};
export const hasTopEpisode = (show, minRating) => {
    return show.seasons.some(season => season.episodes.some(episode => episode.rating >= minRating));
};
export const  getCreatorsFrom = (series, country) => {
    return series.filter(show => show.creator.country === country).map(show => show.creator.name);
};
export const sortByStartYear = (series) => {
    return series.map(show => show).sort((a,b) => a.startYear - b.startYear);
};
export const renameSeries = (series, id, newTitle) => {
    return series.map(show => {
        if(show.id === id)
            return{...show, title: newTitle};
        else
            return show;
    });
};
export const addSeason = (series, showId, season) => {
    return series.map(show => {
        if (show.id === showId) {
            return {
                ...show,
                seasons: [...show.seasons, season] 
            };
        }
        return show;
    });
};
export const addEpisode = (series, showId, seasonNumber, episode) => {
    return series.map(show => {
        if (show.id === showId) {
            return {
                ...show,
                seasons: show.seasons.map(season => {
                    if (season.number === seasonNumber) {
                        return {
                            ...season,
                            episodes: [...season.episodes, episode]
                        };
                    }
                    return season;
                })
            };
        }
        return show;
    });
};