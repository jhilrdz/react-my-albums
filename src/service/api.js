async function retrieveAlbums(entity, term) {
    try {
        if (!term) return [];
        const response = await fetch(`/search?entity=${entity}&term=${term}`)
        const jsonBody = await response.json()
        return jsonBody.results
    } catch (error) {
        return [{
            'error': `Unable to retrieve ${entity}`,
            'more': JSON.stringify(error)
        }]
    }
}

async function retrieveAlbum(entity, id) {
    try {
        const response = await fetch(`/lookup?id=${id}&entity=${entity}`)
        const jsonBody = await response.json()
        return (!!jsonBody.results && !!jsonBody.results.length) ? jsonBody.results[0] : {}
    } catch (error) {
        return [{
            'error': `Unable to retrieve album id ${id}`,
            'more': JSON.stringify(error)
        }]
    }
}

export { retrieveAlbums, retrieveAlbum }