export type Gif = {
    title: string
    id: string
    url: string
}

export type Category = {
    name: string
    subcategories: {
        name: string
    }[]
    gif: Gif
}

export type GifsAPIResponse = {
    images: {
        downsized_medium: {
            url: string
        }
    }
    title: string
    id: string
}
