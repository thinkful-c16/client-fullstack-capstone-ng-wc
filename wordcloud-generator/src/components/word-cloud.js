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

// var fill = d3.scale.category20();

// const layout = cloud()
//     .size([500, 500])
//     .words([
//       "Hello", "world", "normally", "you", "want", "more", "words",
//       "than", "this"].map(function(d) {
//       return {text: d, size: 10 + Math.random() * 90, test: "haha"};
//     }))
//     .padding(5)
//     .rotate(function() { return ~~(Math.random() * 2) * 90; })
//     .font("Impact")
//     .fontSize(function(d) { return d.size; })
//     .on("end", draw);

// layout.start();

// function draw(words) {
//   d3.select("body").append("svg")
//       .attr("width", layout.size()[0])
//       .attr("height", layout.size()[1])
//     .append("g")
//       .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
//     .selectAll("text")
//       .data(words)
//     .enter().append("text")
//       .style("font-size", function(d) { return d.size + "px"; })
//       .style("font-family", "Impact")
//       .style("fill", function(d, i) { return fill(i); })
//       .attr("text-anchor", "middle")
//       .attr("transform", function(d) {
//         return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
//       })
//       .text(function(d) { return d.text; });
// }