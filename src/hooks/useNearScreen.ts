import { useEffect, useRef, useState } from "react"


export const useNearScreen = function(config: { distance: string }) {
    const [ isNearScreen, setIsNearScreen ] = useState(false);
    const elementRef = useRef()

    useEffect(() => {
        let observer: IntersectionObserver;
                
        const cb: IntersectionObserverCallback = function(
            entries: IntersectionObserverEntry[], 
            obs    : IntersectionObserver,
        ){
            const el = entries[0]
            if (el.isIntersecting){
                setIsNearScreen(true);
                obs.disconnect()
            }
        }

        observer = new IntersectionObserver(cb, {
            rootMargin: config.distance,
        })
        
        if(elementRef.current) observer.observe(elementRef.current)

        return () => observer.disconnect()
    })

    return {
        isNearScreen,
        elementRef
    }
}