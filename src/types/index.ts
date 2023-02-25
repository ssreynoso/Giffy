export type Gif = {
    title: string,
    id: string,
    url: string,
}

export type Category = {
    name: string,
    subcategories: {
        name: string,
    }[],
    gif: Gif,
}