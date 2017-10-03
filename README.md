## Movie List
- A simple movie list app used to show how to use axios-middleware

## Clone Repository

```
git clone https://github.com/bradrisse/movie-list.git
cd movie-list
```

## Add Axios and Axios Middleware

```
yarn add axios redux-axios-middleware
```

## Import

- add these to top of src/index.js

```
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
```

## Add Client

- add this below let store = null

```
const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'https://api.themoviedb.org/3/movie/',
    responseType: 'json'
});
```

## Apply Middleware

- modify this in src/index.js

Change Store

```
store = createStore(reducers, {})
```

to

```
store = createStore(reducers, {}, applyMiddleware(axiosMiddleware(client)))
```

## Add ComponentWillMount

add this inside src/App.js component, above render

```
componentWillMount() {
      this.props.movieActions.fetchMovies('top_rated') //upcoming, popular, top_rated, now_playing
  }
```

## Add TMDB API Key
-- add this to /reducers/movies inside fetchMovies action

```
api_key: 'YOUR_API_KEY_HERE',
```

## Start App

```
yarn start
```