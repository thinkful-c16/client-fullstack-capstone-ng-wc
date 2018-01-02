import React from 'react';
// import { connect } from 'react-redux';
// import canvas from 'canvas';
import cloud from 'd3-cloud';

//dummy data- will be importing from store eventually
const words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    });

function end(words) { console.log(JSON.stringify(words)); } 

export default class Wordcloud extends React.Component {

    componentDidMount() {
        console.log('here');
        cloud().size([960, 500])
        .canvas(() => this.canvas)
        .words(words)
        .fontSize(function(d) { return d.size; })
        .on("end", end)
        .start();

    }

    render(){
        return(
            <canvas className='word-cloud' id='wordCloud' width='960' height='500' ref={(canvas) => {this.canvas = canvas}}>
            </canvas>
        )
    }
}