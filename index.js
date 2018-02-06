
var margin = {top: 10, right: 40, bottom: 150, left: 50}, //First define the margin sizes:top, right, bottom, left.
    width = 760 - margin.left - margin.right,//Then define the inner dimensions of the chart area with width and height.
    height = 500 - margin.top - margin.bottom;

// Define SVG. "g" means group SVG elements together.
var svg = d3.select("#graph").append("svg") //Set up SVG
    .attr("width", width + margin.left + margin.right) //Definr width and height of svg.
    .attr("height", height + margin.top + margin.bottom)
    .append("g") // Define svg as a g element
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")"); //Translate the origin to the top-left corner of the chart area.