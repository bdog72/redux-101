//
//

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesList } from './actions';
import { bindActionCreators } from 'redux';

// import Functional from './functional';
import Hooks from './hooks';

class App extends Component {
  componentDidMount() {
    // this.props.getMoviesList();
  }

  render() {
    // console.log(this.props);

    return (
      <div>
        {/* <Functional /> */}
        <Hooks />
        {/* {this.props.movies
          ? this.props.movies.map(item => {
              return <div key={item.id}>{item.name}</div>;
            })
          : null} */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movies: state.movies
});

// const mapStateToProps = state => {
//   return {
//     movies: state.movies
//   };
// };

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getMoviesList }, dispatch);

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ getMoviesList }, dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(App);
