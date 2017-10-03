import React, { Component } from 'react';
import { Navbar, NavbarBrand, Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';
import { actions as movieActions} from 'reducers/movies'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  render() {
    const { movies } = this.props
    return (
      <div className="App">
          <Navbar color="primary" light toggleable>
              <NavbarBrand href="/">Movie List</NavbarBrand>
          </Navbar>

          <div className="movieList">
              <Row>
                  {movies.status === 'fetching' && <div>Loading...</div>}
                  {movies.status === 'fetched' && movies.all.map((movie, index) => (
                      <Col xs="12" sm="6" md="3" key={index}>
                          <Card className="movie-card">
                              <CardImg top width="100%" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="Card image cap" />
                              <CardBlock className="movie-content">
                                  <CardTitle>{movie.title}</CardTitle>
                                  <CardSubtitle>{new Date(movie.release_date).toDateString()}</CardSubtitle>
                                  <CardText>{movie.overview.substring(0,200)}</CardText>
                              </CardBlock>
                          </Card>
                      </Col>
                  ))}
              </Row>
          </div>
      </div>
    );
  }
}

App.propTypes = {
    movieActions: PropTypes.object,
    movies: PropTypes.object
}

const mapStateToProps = state => ({ movies: state.movies });

function mapPropsToDispatch(dispatch) {
    return {
        movieActions: bindActionCreators(movieActions, dispatch)
    }
}

export default connect( mapStateToProps, mapPropsToDispatch )(App);
