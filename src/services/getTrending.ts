import { APIConfig } from '../config'
import { Gif, GifsAPIResponse } from '@/types'

export const getTrendingGifs = function (limit: number, offset: number) {
    const API_KEY = APIConfig.API_KEY
    const BASE_URL = APIConfig.BASE_URL
    const API_URL = `${BASE_URL}trending?
        api_key = ${API_KEY} &
        limit   = ${limit}   &
        offset  = ${offset}  &
        rating  = g          &
    `.replace(/\s/g, '')

    return fetch(API_URL)
        .then((response) => response.json())
        .then((response) => {
            console.log('response')
            console.log(response)
            const { data } = response
            const gifs: Gif[] = data.map((image: GifsAPIResponse) => {
                const { images, title, id } = image
                const { url } = images.downsized_medium
                return { title, id, url }
            })
            return gifs
        })
}
