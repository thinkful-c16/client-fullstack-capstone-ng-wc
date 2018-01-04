import React from 'react';
import { connect } from 'react-redux';

import TagCloud from 'react-tag-cloud';
import randomColor from 'randomcolor';
import './word-cloud.css';

export class Wordcloud extends React.Component {

    render() {

        const words = this.props.activeCloud.words.map((word, index) => (
            <div key={index}>{word}</div>
          ));

        return (
            <div className="word-cloud-outer">
                <div className='word-cloud-inner'>
                    <TagCloud 
                        className="tag-cloud"
                        style={{
                        fontFamily: 'sans-serif',
                        fontSize: 30,
                        fontWeight: 'bold',
                        fontStyle: 'italic',
                        color: () => randomColor(),
                        padding: 5
                        }}>
                        {words}
                    </TagCloud>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    activeCloud: state.activeCloud 
});
  
export default connect(mapStateToProps)(Wordcloud);