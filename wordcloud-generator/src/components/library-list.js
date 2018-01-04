import React from 'react';
import { connect } from 'react-redux';
import {fetchSingleCloud} from '../actions';

export class LibraryList extends React.Component {
  render() {

    const clouds = this.props.clouds.map((cloud, index) => (
        <li key={index}>
            <i className="fa fa-thumbs-up" aria-hidden="true"></i><span>{cloud.upvotes}</span> 
            <i className="fa fa-thumbs-down" aria-hidden="true"></i><span>{cloud.downvotes}</span> 
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
