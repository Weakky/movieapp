/**
 * Created by desver_f on 17/02/17.
 */

export const API_KEY = '264c4672aaa42f969cdcddb5b724e5de';

export const routes = {
    discover: 'https://api.themoviedb.org/3/discover/movie?api_key=:api_key&language=:lang&sort_by=popularity.desc&page=5',
    poster: 'http://image.tmdb.org/t/p/w185/:poster_name',
};
