import React, { useEffect } from 'react'
import { getGifs } from '@/services/getGifs'
import { Gif } from '@/types'

const INITIAL_PAGE = 0
const LIMIT = 30

function useGifs(keyword?: string) {
    const [loading, setLoading] = React.useState(false)
    const [loadingNextPage, setLoadingNextPage] = React.useState(false)
    const [page, setPage] = React.useState(INITIAL_PAGE)
    const [gifs, setGifs] = React.useState<Gif[]>([])

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'Random'

    React.useEffect(() => {
        setLoading(true)

        getGifs(keywordToUse, LIMIT).then((gifs) => {
            setGifs(gifs)
            setLoading(false)
            if (keyword) localStorage.setItem('lastKeyword', keyword)
        })
    }, [keyword, keywordToUse])

    useEffect(() => {
        if (page === INITIAL_PAGE) return

        setLoadingNextPage(true)

        getGifs(keywordToUse, LIMIT, page).then((nextGifs) => {
            setGifs((prevGifs) => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)
        })
    }, [keywordToUse, page])

    return { loading, loadingNextPage, gifs, setPage }
}

export default useGifs
