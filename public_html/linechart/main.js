var dataArray = [[
        {key: "Jelly", value: 60, date: "2014/01/01"},
        {key: "Jelly", value: 58, date: "2014/01/02"},
        {key: "Jelly", value: 59, date: "2014/01/03"},
        {key: "Jelly", value: 56, date: "2014/01/04"},
        {key: "Jelly", value: 57, date: "2014/01/05"},
        {key: "Jelly", value: 55, date: "2014/01/06"},
        {key: "Jelly", value: 56, date: "2014/01/07"},
        {key: "Jelly", value: 52, date: "2014/01/08"},
        {key: "Jelly", value: 54, date: "2014/01/09"},
        {key: "Jelly", value: 57, date: "2014/01/10"},
        {key: "Jelly", value: 56, date: "2014/01/11"},
        {key: "Jelly", value: 59, date: "2014/01/12"},
        {key: "Jelly", value: 56, date: "2014/01/13"},
        {key: "Jelly", value: 52, date: "2014/01/14"},
        {key: "Jelly", value: 48, date: "2014/01/15"},
        {key: "Jelly", value: 47, date: "2014/01/16"},
        {key: "Jelly", value: 48, date: "2014/01/17"},
        {key: "Jelly", value: 45, date: "2014/01/18"},
        {key: "Jelly", value: 43, date: "2014/01/19"},
        {key: "Jelly", value: 41, date: "2014/01/20"},
        {key: "Jelly", value: 37, date: "2014/01/21"},
        {key: "Jelly", value: 36, date: "2014/01/22"},
        {key: "Jelly", value: 39, date: "2014/01/23"},
        {key: "Jelly", value: 41, date: "2014/01/24"},
        {key: "Jelly", value: 42, date: "2014/01/25"},
        {key: "Jelly", value: 40, date: "2014/01/26"},
        {key: "Jelly", value: 43, date: "2014/01/27"},
        {key: "Jelly", value: 41, date: "2014/01/28"},
        {key: "Jelly", value: 39, date: "2014/01/29"},
        {key: "Jelly", value: 40, date: "2014/01/30"},
        {key: "Jelly", value: 39, date: "2014/01/31"}
    ], [
        {key: "Jelly", value: 60, date: "2014/01/01"},
        {key: "Jelly", value: 58, date: "2014/01/02"},
        {key: "Jelly", value: 59, date: "2014/01/03"},
        {key: "Jelly", value: 56, date: "2014/01/04"},
        {key: "Jelly", value: 57, date: "2014/01/05"},
        {key: "Jelly", value: 55, date: "2014/01/06"},
        {key: "Jelly", value: 56, date: "2014/01/07"},
        {key: "Jelly", value: 85, date: "2014/01/08"},
        {key: "Jelly", value: 54, date: "2014/01/09"},
        {key: "Jelly", value: 57, date: "2014/01/10"},
        {key: "Jelly", value: 56, date: "2014/01/11"},
        {key: "Jelly", value: 59, date: "2014/01/12"},
        {key: "Jelly", value: 56, date: "2014/01/13"},
        {key: "Jelly", value: 21, date: "2014/01/14"},
        {key: "Jelly", value: 48, date: "2014/01/15"},
        {key: "Jelly", value: 67, date: "2014/01/16"},
        {key: "Jelly", value: 48, date: "2014/01/17"},
        {key: "Jelly", value: 45, date: "2014/01/18"},
        {key: "Jelly", value: 43, date: "2014/01/19"},
        {key: "Jelly", value: 41, date: "2014/01/20"},
        {key: "Jelly", value: 37, date: "2014/01/21"},
        {key: "Jelly", value: 36, date: "2014/01/22"},
        {key: "Jelly", value: 39, date: "2014/01/23"},
        {key: "Jelly", value: 12, date: "2014/01/24"},
        {key: "Jelly", value: 42, date: "2014/01/25"},
        {key: "Jelly", value: 40, date: "2014/01/26"},
        {key: "Jelly", value: 43, date: "2014/01/27"},
        {key: "Jelly", value: 41, date: "2014/01/28"},
        {key: "Jelly", value: 39, date: "2014/01/29"},
        {key: "Jelly", value: 40, date: "2014/01/30"},
        {key: "Jelly", value: 39, date: "2014/01/31"},
        {key: "Jelly", value: 19, date: "2014/02/01"},
        {key: "Jelly", value: 49, date: "2014/02/02"}
    ]];

var dataIndex = 0;
var w = 800;
var h = 450;
var margin = {
    top: 58,
    bottom: 100,
    left: 80,
    right: 40
};
var width = w - margin.left - margin.right;
var height = h - margin.top - margin.bottom;

var params =
        {
            data: dataArray[dataIndex],
            height: height,
            width: width


        };


var dateParser = d3.time.format("%Y/%m/%d").parse;
var chart = null;

/* global d3 */
function init()
{
    var svg = d3.select("#graphLocation").append("svg")
            .attr("id", "chart")
            .attr("width", w)
            .attr("height", h);
    chart = svg.append("g")
            .classed("display", true)
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    plot.call(chart, params, true);



}

function drawAxis(params, x, y, initialize)
{


    var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom")
            .ticks(d3.time.days, 7)
            .tickFormat(d3.time.format("%m/%d"));
    var yAxis = d3.svg.axis()
            .scale(y)
            .orient("left")
            .ticks(5);

    if (initialize)
    {
        this.append("g")
                .classed("x axis", true)
                .attr("transform", "translate(0," + height + ")")
                .call(xAxis);
        this.append("g")
                .classed("y axis", true)
                .attr("transform", "translate(0,0)")
                .call(yAxis);
    } else
    {
        this.selectAll("g.x.axis").transition().duration(500)
                .call(xAxis);
        

        this.selectAll("g.y.axis").transition().duration(500)
                 
                .call(yAxis);
    }


}

function plot(params, initialize) {


    var line = d3.svg.line()
            .x(function (d) {
                var date = dateParser(d.date);
                return x(date);
            })
            .y(function (d) {
                return y(d.value);
            })
    // .interpolate('step-after');

    var area = d3.svg.area()
            .x(function (d) {
                var date = dateParser(d.date);
                return x(date);
            })
            .y0(params.height)
            .y1(function (d) {
                return y(d.value);
            })
    //.interpolate('step-after'); 


    var x = d3.time.scale()
            .domain(d3.extent(params.data, function (d) {
                var date = dateParser(d.date);
                return date;
            }))
            .range([0, width]);
    var y = d3.scale.linear()
            .domain([0, d3.max(params.data, function (d) {
                    return d.value;
                })])
            .range([height, 0]);



    //enter()
    this.selectAll(".area")
            .data([params.data])
            .enter()
            .append("path")
            .attr({
                'fill': '#ddeeff'


            })
            .classed("area", true);
    this.selectAll(".trendline")
            .data([params.data])
            .enter()
            .append("path")
            .attr({
                'fill': 'none',
                'stroke': '#bbbbff',
                'stroke-width': '1.5'

            }) 
            .classed("trendline", true);
    this.selectAll(".point")
            .data(params.data)
            .enter()
            .append("circle")
            .style({'fill': 'darkgrey', 'opacity': 1, 'stroke': 'darkred', 'stroke-width': '2'})
            .classed("point", true)
            .attr("r", 4);



    //update
    this.selectAll('.point').transition()
                .duration(500)
            .attr("cx", function (d, i) {
                return x(dateParser(d.date));
            })
            .attr("cy", function (d, i) {
                return y(d.value);
            }) ;
    this.selectAll(".trendline").transition()
                .duration(500)
            .attr("d", function (d) {
                return line(d);
            })
    this.selectAll(".area") 
            .attr("d", function (d) {
                return area(d);
            })



    //exit()
    this.selectAll(".point")
            .data(params.data)
            .exit().remove();

    this.selectAll(".trendline")
            .data([params.data])
            .exit()
            .remove();
    
    this.selectAll(".area")
            .data([params.data])
            .exit()
            .remove();

    drawAxis.call(this, params, x, y, initialize);

}

function updateData()
{
    dataIndex = (dataIndex + 1) % 2;
    params.data = dataArray[dataIndex]
    plot.call(chart, params, false);
}

