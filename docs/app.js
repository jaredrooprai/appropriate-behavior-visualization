importData()


function importData () {
  d3.json("BehaviorAppropriatenessMeanData.json", function (data)
  {
    console.log(data);
  })
}
