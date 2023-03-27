import React from 'react'
import { Category } from '@/types'
import { getCategories } from '@/services/getCategories'

export function useCategories() {
    const [loading, setLoading] = React.useState(false)
    const [categories, setCategories] = React.useState<Category[]>([])

    React.useEffect(() => {
        setLoading(true)

        getCategories().then((c) => {
            setCategories(c)
            setLoading(false)
        })
    }, [])

    return { loading, categories }
}
