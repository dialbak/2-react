import * as axios from "axios";
import {log} from "./log"

/**
 * headers Authorization allows us to authenticate to the external API.
 *
 * In fact Bearer means that we use a JSON Web Token, also called JWT token,
 * its role is to tell an API that the user is correctly identified.
 */
export const apiMovie = axios.create();

apiMovie.interceptors.request.use(req => {
    req.headers["Authorization"] = `Bearer ${log.apiKey}`;
    return req;
});

/**
 *  create a template of the format of the answer I want
 *  for each movies
 * @param m
 * @returns {{img: string, description: *, details: string, title}}
 */
export const apiMovieMap = m => ({
    img: "https://image.tmdb.org/t/p/w500" + m.poster_path,
    title: m.title,
    details: `${m.release_date} | ${m.vote_average}/10 (${m.vote_count})`,
    description: m.overview
});

export default {
    /**
     * this method is call back in fetchMovies()
     * in Header Component the filter parameter is provide to build the request
     */
    searchMovies: filter => {
        const query =
            "?" +
            Object.keys(filter)
                .map(k => `${k}=${filter[k]}&`)
                .join("");
        return apiMovie
            .get("/search/movie" + query)
            .then(response => response.data.results)
            .then(moviesApi => moviesApi.map(apiMovieMap))
    }
};
