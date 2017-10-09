// Pleause don't laugh at my hardcoded checkers. I literally don't know javascirpt and couldn't figure out how to not use them ._.
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


    chart("talk", talk_color);
    chart("laugh", laugh_color);
    chart("eat", eat_color);
    chart("read",read_color);
    chart("kiss", kiss_color);
    chart("write", write_color);
    chart("mumble", mumble_color);
    chart("cry", cry_color);
    chart("argue", argue_color);
    chart("jump", jump_color);
    chart("sleep", sleep_color);
    chart("shout", shout_color);
    chart("run", run_color);
    chart("belch", belch_color);
    chart("fight", fight_color);


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
          .style("text-decoration", "underline")
          .style("text-decoration-color", fill_color)
          .style("text-decoration-style", "solid")
          .append("svg")
          .attr("height", height)
          .attr("width", width)

          // Define the div for the tooltip
        var div = d3.select("body").append("div")
          .attr("class", "tooltip")
          .style("opacity", 0);

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
              return checker(cat, d) * 2;
            })
            .on("mouseover", function(d, i){
              handleMouseOver(returnPlace(i));
            })
            .on("mouseout", function(d, i){
              handleMouseOut(returnPlace(i));
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

    function returnPlace(i){
      if (i == 0){
        return "class";
      }
      else if (i == 1){
        return "date";
      }
      else if (i == 2){
        return "bus";
      }
      else if (i == 3){
        return "family_dinner";
      }
      else if (i == 4){
        return "park";
      }
      else if (i == 5){
        return "church";
      }
      else if (i == 6){
        return "job_interview";
      }
      else if (i == 7){
        return "sidewalk";
      }
      else if (i == 8){
        return "movies";
      }
      else if (i == 9){
        return "bar";
      }
      else if (i == 10){
        return "elevator";
      }
      else if (i == 11){
        return "restroom";
      }
      else if (i == 12){
        return "own_room";
      }
      else if (i == 13){
        return "dorm_lounge";
      }
      else if (i == 14){
        return "football_game";
      }
      else {
        console.log("error");
      }

    }

    function handleMouseOver(i) {  // Add interactivity
      // Use D3 to select element, change color and size
      d3.selectAll("#"+i).attr("fill","black");
    }

    function handleMouseOut(i) {  // Add interactivity
      // Use D3 to select element, change color and size
      d3.selectAll(".talk").attr("fill",talk_color);
      d3.selectAll(".laugh").attr("fill",laugh_color);
      d3.selectAll(".eat").attr("fill",eat_color);
      d3.selectAll(".read").attr("fill",read_color);
      d3.selectAll(".kiss").attr("fill",kiss_color);
      d3.selectAll(".write").attr("fill",write_color);
      d3.selectAll(".mumble").attr("fill",mumble_color);
      d3.selectAll(".cry").attr("fill",cry_color);
      d3.selectAll(".argue").attr("fill",argue_color);
      d3.selectAll(".jump").attr("fill",jump_color);
      d3.selectAll(".sleep").attr("fill",sleep_color);
      d3.selectAll(".shout").attr("fill",shout_color);
      d3.selectAll(".run").attr("fill",run_color);
      d3.selectAll(".belch").attr("fill",belch_color);
      d3.selectAll(".fight").attr("fill",fight_color);
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
