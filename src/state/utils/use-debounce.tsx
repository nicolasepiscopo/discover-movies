import React, { useEffect, useState } from 'react'

const DEBOUNCE_MS = 1000

const useDebouncedEffect = (fn: Function, values: any, milliseconds: number = DEBOUNCE_MS) => {
    const [debouncedValues, setDebouncedValues] = useState([])

    useEffect(() => {
        fn()
    }, [debouncedValues])

    useEffect(() => {
        const timer = setTimeout(() => {
            let areEqual = values.length === debouncedValues.length

            values.forEach((value: any, index: number) => {
                if (value !== debouncedValues[index])
                    areEqual = false
            })

            if (!areEqual)
                setDebouncedValues(values)
        }, milliseconds)

        return () => {
            clearTimeout(timer)
        }
    }, values)

    return false
}

export default useDebouncedEffect
