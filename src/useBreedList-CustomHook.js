//no jsx so no jsx extension

import { useEffect, useState } from 'react'

let localCache = {}

export default function useBreedList(animal) {
    //custom hook
    let [breedList, setBreedList] = useState([])
    let [status, setStatus] = useState('unloaded')

    useEffect(() => {
        if (!animal) {
            setBreedList([])
        } else if (localCache[animal]) {
            setBreedList(localCache[animal])
        } else {
            requestBreedList()
        }

        async function requestBreedList() {
            setBreedList([])
            setStatus('loading')

            const res = await fetch(
                `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
            )

            const jsonResult = await res.json()
            // debugger
            localCache[animal] = jsonResult.breeds || []
            setBreedList(localCache[animal])
            setStatus('loaded')
        }
    }, [animal])

    return [breedList, status]
}
