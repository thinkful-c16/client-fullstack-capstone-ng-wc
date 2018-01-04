import React from 'react';
import Wordcloud from './word-cloud';
import { connect } from 'react-redux';

export class CloudFocus extends React.Component {

  render(){
    return (
      <section className="cloud-focus-view">
        <div className="cloud-container">
          <Wordcloud />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  activeCloud: state.activeCloud
})

export default connect(mapStateToProps)(CloudFocus);

{/* <form onSubmit={(event) => this.onSubmit(event)}>
          <button type="submit" name="submit" id="editWordCloud" className="button">
              Edit Word Cloud
          </button>
          <div>
            <span>{this.props.activeCloud.upvotes}</span> <a onClick={() => this.props.dispatch(upVoteCloud(this.props.activeCloud.id, this.props.activeCloud.upvotes++))} href="#thumbsUp" className="thumbs-up"><i className="fa fa-thumbs-up" aria-hidden="true"></i></a>
            <span>{this.props.activeCloud.upvotes}</span> <a onClick={() => this.props.dispatch(downVoteCloud(this.props.activeCloud.id, this.props.activeCloud.downvotes--))} href="#thumbsDown" className="thumbs-down"><i className="fa fa-thumbs-down" aria-hidden="true"></i></a>
          </div>
        </form> */}