"use client"
import { useEffect } from 'react'
import Aos from 'aos'

import 'aos/dist/aos.css'

export const AosInit = () => {
    useEffect(() => {
        Aos.init({
            duration: 750,
            delay: 0,
            easing: 'ease'
        })
    }, [])
    return null
}
