import { Component, OnInit, ElementRef } from '@angular/core';
import * as d3 from 'd3';
// import cloud from 'd3-cloud';


@Component({
  selector: 'app-word-cloud-chart',
  templateUrl: './word-cloud-chart.component.html',
  styleUrls: ['./word-cloud-chart.component.css']
})
export class WordCloudChartComponent  implements OnInit {

  title = 'Word chart';

  constructor(private container: ElementRef){

} 

ngOnInit() {

  // var myWords = [{word: "Running", size: "10"}, {word: "Surfing", size: "20"}, {word: "Climbing", size: "50"}, {word: "Kiting", size: "30"}, {word: "Sailing", size: "20"}, {word: "Snowboarding", size: "60"} ]
    
  // // set the dimensions and margins of the graph
  // var margin = {top: 10, right: 10, bottom: 10, left: 10},
  //     width = 450 - margin.left - margin.right,
  //     height = 450 - margin.top - margin.bottom;
  
  // // append the svg object to the body of the page
  // var svg = d3.select("#my_dataviz").append("svg")
  //     .attr("width", width + margin.left + margin.right)
  //     .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //     .attr("transform",
  //           "translate(" + margin.left + "," + margin.top + ")");
  
  // // Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
  // // Wordcloud features that are different from one word to the other must be here
  // var layout = cloud()
  //   .size([width, height])
  //   .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  //   .padding(5)        //space between words
  //   .rotate(function() { return ~~(Math.random() * 2) * 90; })
  //   .fontSize(function(d) { return d.size; })      // font size of words
  //   .on("end", draw);
  // layout.start();
  
  // // This function takes the output of 'layout' above and draw the words
  // // Wordcloud features that are THE SAME from one word to the other can be here
  // function draw(words:any) {
  //   svg
  //     .append("g")
  //       .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
  //       .selectAll("text")
  //         .data(words)
  //       .enter().append("text")
  //         .style("font-size", function(d:any) { return d.size; })
  //         .style("fill", "#69b3a2")
  //         .attr("text-anchor", "middle")
  //         .style("font-family", "Impact")
  //         .attr("transform", function(d:any) {
  //           return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
  //         })
  //         .text(function(d:any) { return d.text; });
  // }

}


}
