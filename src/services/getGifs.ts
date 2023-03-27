import { APIConfig } from '../config'
import { Gif, GifsAPIResponse } from '@/types'

export const getGifs = function (keyword = 'Morty', limit = 25, page = 0) {
    const API_KEY = APIConfig.API_KEY
    const offset  = limit * page
    const API_URL = `${APIConfig.BASE_URL}search?
        api_key = ${API_KEY} &
        q       = ${keyword} &
        limit   = ${limit}   &
        offset  = ${offset}  &
        rating  = g          &
        lang    = en`
        .replace(/\s/g, '')

    return fetch(API_URL)
        .then((response) => response.json())
        .then((response) => {
            const { data } = response
            const gifs: Gif[] = data.map((image: GifsAPIResponse) => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}
