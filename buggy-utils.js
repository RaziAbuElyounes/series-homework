export const getDramas = series => series.filter(show => show.genre === "Drama");

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id == idText);

export const addEpisodeToFirstSeason = (show, episode) => {
    return {
        ...show,
        seasons: show.seasons.map((season, index) => {
            if (index === 0) {
                return {
                    ...season,
                    episodes: [...season.episodes, episode]
                };
            }
            return season;
        })
    };
};