(function () {

  // import data from json
  d3.json("BehaviorAppropriatenessMeanData.json", function (data)
  {
    var width = 1000;
    var height = 1000;

    var sim = d3.forceSimulation()
      .force("xforce", d3.forceX(width /2 ).strength(0.05))
      .force("yforce", d3.forceY(height /2 ).strength(0.05))
      .force("collisions", d3.forceCollide(function(d){
        return((d.run * 10) + 2)
      }))


    var svg = d3.select("#grid")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .append("g")
      .attr("transform", "translate(0,0)")

    var circles = svg.selectAll(".run")
      .data(data)
      .enter()
        .append("circle")
        .attr("class", "run")
        //make the radius the mean * 10
        .attr("r", function(d) {
          return (d.run * 10)
        })
        .attr("fill", "#FF8A80")
        .attr("cx", 100)
        .attr("cy", 300)

    sim.nodes(data)
      .on('tick', updateXY)

    function updateXY() {
      circles
        .attr("cx", function (d) {
          return d.x
        })
        .attr("cy", function (d) {
          return d.y
        })
    }

  })


})();
