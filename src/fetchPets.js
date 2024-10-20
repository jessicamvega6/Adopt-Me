//no jsx

let fetchPet = async ({ queryKey }) => {
    let id = queryKey[1]
    // debugger
    let apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?id=${id}`)
    if (!apiRes.ok) {
        throw new Error(`details/${id} fetch not ok`)
    }

    return apiRes.json()
}

export default fetchPet
