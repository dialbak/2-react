import * as axios from 'axios';
import {log} from "./log"

/**
 * export two method
 * Get favoris movies from database
 * Update favoris movies to the database
 *
 * to avoid a bug i use a ternary to return an empty array if request failed
 */
export const apiFirebase = axios.create({
    baseURL: `${log.databaseUrl}`
});

export default {
    fetchFavoris: () =>
        apiFirebase.get('favoris.json')
            .then(
                response => response.data ? response.data : []
            ),

    saveFavoris: favoris => apiFirebase.put('favoris.json', favoris)
}
