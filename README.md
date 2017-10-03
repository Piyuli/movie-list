## Movie List
- A simple movie list app used to show how to use axios-middleware

## Add Axios and Axios Middleware

```
yarn add axios axios-middleware
```

## Import

```
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware
```

## Add Client
```
const client = axios.create({ //all axios can be used, shown in axios documentation
    baseURL:'https://api.themoviedb.org/3/movie/',
    responseType: 'json'
});
```

## Apply Middleware

Change Store

```
store = createStore(reducers, {})
```

to

```
store = createStore(reducers, {}, applyMiddleware(axiosMiddleware(client)))
```

## Add ComponentWillMount
```
componentWillMount() {
      this.props.movieActions.fetchMovies('top_rated') //upcoming, popular, top_rated, now_playing
  }
```