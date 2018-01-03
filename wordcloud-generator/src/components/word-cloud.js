import React from 'react';
import { connect } from 'react-redux';

import cloud from 'd3-cloud';
import './word-cloud.css';

//dummy data- will be importing from store eventually
const words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    });

function end(words) { console.log(JSON.stringify(words)); } 

export class Wordcloud extends React.Component {

    componentDidMount() {
        console.log('here');
        cloud()
        .canvas(() => this.canvas)
        .words(words)
        .fontSize(function(d) { return d.size; })
        .on("end", end)
        .start();

    }

    render(){
        return(
            <canvas ref={(canvas) => {this.canvas = canvas}}/>
        )
    }
}

const mapStateToProps = state => ({
    view: state.view 
});
  
export default connect(mapStateToProps)(Wordcloud);