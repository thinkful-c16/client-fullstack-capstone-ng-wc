import React from 'react';
import { connect } from 'react-redux';
import {fetchSingleCloud} from '../actions';

export class LibraryList extends React.Component {
  render() {

    const clouds = this.props.clouds.map((cloud, index) => (
        <li key={index}>
          <a className="list-item" onClick={() => this.props.dispatch(fetchSingleCloud(cloud.id))}>
            {cloud.title}
          </a>
        </li>
      ));

    return (
      <ul>
        {clouds}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  clouds: state.clouds
});

export default connect(mapStateToProps) (LibraryList);
