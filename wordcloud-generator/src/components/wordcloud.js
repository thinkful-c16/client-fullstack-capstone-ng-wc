import React from 'react';
import { connect } from 'react-redux';
import { canvas } from 'canvas';
import { cloud } from '../../../d3-cloud/index';

//dummy data- will be importing from store eventually
const words = ["Hello", "world", "normally", "you", "want", "more", "words", "than", "this"]
    .map(function(d) {
      return {text: d, size: 10 + Math.random() * 90};
    });

function end(words) { console.log(JSON.stringify(words)); } 

export class Wordcloud extends React.Component {
    render(){
        const wordcloud = cloud().size([960, 500])
        .canvas(function() { return new Canvas(1, 1); })
        .words(words)
        .padding(5)
        .rotate(function() { return ~~(Math.random() * 2) * 90; })
        .font("Impact")
        .fontSize(function(d) { return d.size; })
        .on("end", end)
        .start();

        return(
            <div className='word-cloud' id='wordCloud'>
                {wordcloud}
            </div>
        )
    }
}