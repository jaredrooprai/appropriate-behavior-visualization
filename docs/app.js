(function () {

  // import data from json
  d3.json("BehaviorAppropriatenessMeanData.json", function (data)
  {

    var talk_color = "#FF9E80"
    var laugh_color = "#FF8A80"
    var eat_color = "#FF80AB"
    var read_color = "#EA80FC"
    var kiss_color = "#B388FF"
    var write_color = "#8C9EFF"
    var mumble_color = "#82B1FF"
    var cry_color = "#80D8FF"
    var argue_color =  "#84FFFF"
    var jump_color = "#A7FFEB"
    var sleep_color = "#B9F6CA"
    var shout_color = "#CCFF90"
    var run_color = "#FFF176"
    var belch_color = "#FFE57F"
    var fight_color = "#FFD180"


    chart("talking", talk_color);
    chart("laughing", laugh_color);
    chart("eating", eat_color);
    chart("reading",read_color);
    chart("kissing", kiss_color);
    chart("writing", write_color);
    chart("mumbling", mumble_color);
    chart("crying", cry_color);
    chart("arguing", argue_color);
    chart("jumping", jump_color);
    chart("sleeping", sleep_color);
    chart("shouting", shout_color);
    chart("running", run_color);
    chart("belching", belch_color);
    chart("fighting", fight_color);


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
            return((checker(cat, d) * 2.3) + 1)
          }))

        var svg = d3.select("#grid")
          .append("h4")
          .text(cat)
          .style("text-decoration", "underline")
          .style("text-decoration-color", fill_color)
          .style("text-decoration-style", "solid")
          .append("svg")
          .attr("height", height)
          .attr("width", width)

        sim.nodes(data)
          .on('tick', updateXY)

        var circles = svg.selectAll(cat)
          .data(data)
          .enter()
            .append("circle")
            .attr("id", function(d,i){
              return returnPlace(i);
            })
            .attr("class",cat)
            .attr("fill", fill_color)
            .attr("cx", 300)
            .attr("cy", 300)
            .attr("r", function(d) {
              return checker(cat, d) * 2.3;
            })
            .on("mouseover", function(d, i){
              handleMouseOver(d, returnPlace(i), cat);
            })
            .on("mouseout", function(d, i){
              handleMouseOut(returnPlace(i));
            })
            .on("mousemove", function(d,i){
              handleMouseMove(i);
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

    var tooltip = d3.select("#grid")
      .append("div")
      .attr("class", "tooltip");

    tooltip.append("div")
      .attr("class", "label");


    tooltip.append("div")
      .attr("class","percent");

    function returnPlace(i){
      if (i == 0){
        return "in\xa0class";
      }
      else if (i == 1){
        return "at\xa0a\xa0date";
      }
      else if (i == 2){
        return "in\xa0a\xa0bus";
      }
      else if (i == 3){
        return "at\xa0a\xa0family\xa0dinner";
      }
      else if (i == 4){
        return "at\xa0a\xa0park";
      }
      else if (i == 5){
        return "in\xa0church";
      }
      else if (i == 6){
        return "at\xa0a\xa0job\xa0interview";
      }
      else if (i == 7){
        return "on\xa0the\xa0sidewalk";
      }
      else if (i == 8){
        return "at\xa0the\xa0movies";
      }
      else if (i == 9){
        return "at\xa0the\xa0bar";
      }
      else if (i == 10){
        return "in\xa0an\xa0elevator";
      }
      else if (i == 11){
        return "in\xa0a\xa0restroom";
      }
      else if (i == 12){
        return "in\xa0your\xa0own\xa0room";
      }
      else if (i == 13){
        return "in\xa0a\xa0dorm\xa0lounge";
      }
      else if (i == 14){
        return "at\xa0a\xa0football\xa0game";
      }
      else {
        console.log("error");
      }

    }

    function handleMouseOver(d, i, y) {  // Add interactivity
      // Use D3 to select element, change color and size
      tooltip.select(".label").html(i + ":\xa0" + checker(y,d));
      tooltip.style("display","block");
      d3.selectAll("#"+i).attr("fill","black");

    }

    function handleMouseOut(i) {  // Add interactivity
      // Use D3 to select element, change color and size
      d3.selectAll(".talking").attr("fill",talk_color);
      d3.selectAll(".laughing").attr("fill",laugh_color);
      d3.selectAll(".eating").attr("fill",eat_color);
      d3.selectAll(".reading").attr("fill",read_color);
      d3.selectAll(".kissing").attr("fill",kiss_color);
      d3.selectAll(".writing").attr("fill",write_color);
      d3.selectAll(".mumbling").attr("fill",mumble_color);
      d3.selectAll(".crying").attr("fill",cry_color);
      d3.selectAll(".arguing").attr("fill",argue_color);
      d3.selectAll(".jumping").attr("fill",jump_color);
      d3.selectAll(".sleeping").attr("fill",sleep_color);
      d3.selectAll(".shouting").attr("fill",shout_color);
      d3.selectAll(".running").attr("fill",run_color);
      d3.selectAll(".belching").attr("fill",belch_color);
      d3.selectAll(".fighting").attr("fill",fight_color);
      tooltip.style("display","none");

    }

    function handleMouseMove(i){
      tooltip.style('top', (d3.event.layerY + 10) + 'px')
      .style('left', (d3.event.layerX + 10) + 'px');
    }

    function checker(cat, d) {
      if (cat == "running"){
        return d.running;
      }
      else if (cat == "talking"){
        return d.talking
      }
      else if (cat == "kissing"){
        return d.kissing
      }
      else if (cat == "writing"){
        return d.writing
      }
      else if (cat == "eating"){
        return d.eating
      }
      else if (cat == "sleeping"){
        return d.sleeping
      }
      else if (cat == "mumbling"){
        return d.mumbling
      }
      else if (cat == "reading"){
        return d.reading
      }
      else if (cat == "fighting"){
        return d.fighting
      }
      else if (cat == "belching"){
        return d.belching
      }
      else if (cat == "arguing"){
        return d.arguing
      }
      else if (cat == "jumping"){
        return d.jumping
      }
      else if (cat == "crying"){
        return d.crying
      }
      else if (cat == "laughing"){
        return d.laughing
      }
      else if (cat == "shouting"){
        return d.shouting
      }
      else {
        console.log("error");
      }
    }

  })

})();
