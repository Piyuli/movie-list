export const types = {
    FETCH_MOVIES: 'FETCH_MOVIES'
}

export const initial = {
    all: [],
    status: 'fetching'
}

export default function (state = initial, action) {
    switch (action.type) {
        case `${types.FETCH_MOVIES}`:
            return {...state, all: [], status: 'fetching'}
        case `${types.FETCH_MOVIES}_SUCCESS`:
            return {...state, all: action.payload.data.results, status: 'fetched'}
        default:
            return state
    }
}

export const actions = {
    fetchMovies: type => ({
        type: types.FETCH_MOVIES,
        payload: {
            request:{
                url:type,
                params: {
                    api_key: 'YOUR_API_KEY_HERE',
                    language: 'en-US',
                    page: 1
                }
            }
        }
    }),
}