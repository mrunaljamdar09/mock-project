import { Component } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.css']
})
export class DonutChartComponent {

  ngOnInit() {
    this.bindChart();
 
   }

   bindChart()
  {
 var data:any = [
      // { name: 'IE', percent: 39.10 },
      // { name: 'Chrome', percent: 32.51 },
      // { name: 'Safari', percent: 13.68 },
      // { name: 'Firefox', percent: 8.71 },
      // { name: 'Others', percent: 6.01 }
      {name: "Promoter", value: 39.15, color: "#23B574"},

{name: "Detractor", value: 17.45, color: "#FF3333"},

{name: "Passive", value: 11, color: "#F2F28D"},

// {name: "Project Count", value: 13, color: "#296972"}
    ];
    var width = 270, height = 270;

     var outerRadius=width/2;
    var innerRadius=80;

    var pie1 = d3.pie()
      .value(function (d:any) {  return d.value; })
      .sort(null);

    var arc:any = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius)
      .cornerRadius(3)
      .padAngle(0.015);

    var outerArc = d3.arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);

    var svg  = d3.select('#chart').append('svg')
      .attr('width', width )
      .attr('height', height)
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    svg.append('g').attr('class', 'slices');
    svg.append('g').attr('class', 'labelName');
    svg.append('g').attr('class', 'lines');

    var path = svg.selectAll('path')
      .data(pie1(data))
      .enter()
      .append('path')
      .attr('d', arc)
       .attr('fill',function(d:any){
                    return d.data.color;
                });

  path.transition()
      .duration(1000)
      .attrTween('d', function (d:any) {
        const interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
        return function (t:any) {
          return arc(interpolate(t));
        };
      });

    var restOfTheData=function(){
        var text=svg.selectAll('text')
                .data(pie1(data))
                .enter()
                .append("text")
                .transition()
                .duration(200)
                .attr("transform", function (d:any) {
                    return "translate(" + arc.centroid(d) + ")";
                })
                .attr("dy", ".4em")
                .attr("text-anchor", "middle")
                .text(function(d:any){
                    return d.data.value+"%";
                })
                .style('fill','#fff')
                    .style('font-size','10px');

        var legendRectSize=20;
        var legendSpacing=7;
        var legendHeight=legendRectSize+legendSpacing;

debugger;
        var legend=svg.selectAll('.legend')
                .data(data)
                .enter()
                .append('g')
                .attr('class','legend')
                    .attr('transform',function(d:any,i:any){
                        //Just a calculation for x & y position
                        return 'translate(-50,' + ((i*legendHeight)-55) + ')';
                    });
        legend.append('rect')
                .attr('width',legendRectSize)
                   .attr('height',legendRectSize)
                    .attr('rx',20)
                    .attr('ry',20)                
                .style('fill',function(d:any){
                    return d.color;
                })
                    .style('stroke',function(d:any){
                    return d.color;
                });
             

        legend.append('text')
                .attr('x',30)
                    .attr('y',15)                
                .text(function(d:any){
                    console.log(d.name);
                    return d.name;
                }).style('fill',function(d:any){
                
                    return d.color;
                })
                    .style('font-size','14px');
    };

    setTimeout(restOfTheData,1000);
  }

}
