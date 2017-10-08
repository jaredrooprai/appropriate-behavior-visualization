(function () {

  // import data from json
  d3.json("BehaviorAppropriatenessMeanData.json", function (data)
  {

    chart("talk", "#FF9E80");
    chart("laugh", "#FF8A80");
    chart("eat", "#FF80AB");
    chart("read", "#EA80FC");
    chart("kiss", "#B388FF");
    chart("write", "#8C9EFF");
    chart("mumble", "#82B1FF");
    chart("cry", "#80D8FF");
    chart("argue", "#84FFFF");
    chart("jump", "#A7FFEB");
    chart("sleep", "#B9F6CA");
    chart("shout", "#CCFF90");
    chart("run", "#FFF176");
    chart("belch", "#FFE57F");
    chart("fight", "#FFD180");


    function chart( category, color,) {
      var width = 200;
      var height = 200;
      var cat = category;
      var fill_color = color;

      var forcex = d3.forceX(function(d){
        return (width/2)
      }).strength(0.05)

      var forcey = d3.forceY(function(d) {
        return (height/2)
      }).strength(0.05)

      var sim = d3.forceSimulation()
        .force("xforce", forcex)
        .force("yforce", forcey)
        .force("collisions", d3.forceCollide(function(d){
          return((checker(cat, d) * 2) + 1)
        }))

      var svg = d3.select("#grid")
        .append("h4")
        .text(cat)
        .append("svg")
        .attr("height", height)
        .attr("width", width)

      sim.nodes(data)
        .on('tick', updateXY)

      var circles = svg.selectAll(cat)
        .data(data)
        .enter()
          .append("circle")
          .attr("class", cat)
          .attr("fill", fill_color)
          .attr("cx", 300)
          .attr("cy", 300)
          .attr("r", function(d) {
            return checker(cat, d) * 2;
          })

      function updateXY() {
        circles
          .attr("cx", function (d) {
            return d.x
          })
          .attr("cy", function (d) {
            return d.y
          })
      }
    }


    function checker(cat, d) {
      if (cat == "run"){
        return d.run;
      }
      else if (cat == "talk"){
        return d.talk
      }
      else if (cat == "kiss"){
        return d.kiss
      }
      else if (cat == "write"){
        return d.write
      }
      else if (cat == "eat"){
        return d.eat
      }
      else if (cat == "sleep"){
        return d.sleep
      }
      else if (cat == "mumble"){
        return d.mumble
      }
      else if (cat == "read"){
        return d.read
      }
      else if (cat == "fight"){
        return d.fight
      }
      else if (cat == "belch"){
        return d.belch
      }
      else if (cat == "argue"){
        return d.argue
      }
      else if (cat == "jump"){
        return d.jump
      }
      else if (cat == "cry"){
        return d.cry
      }
      else if (cat == "laugh"){
        return d.laugh
      }
      else if (cat == "shout"){
        return d.shout
      }
      else {
        console.log("error");
      }
    }

  })

})();
