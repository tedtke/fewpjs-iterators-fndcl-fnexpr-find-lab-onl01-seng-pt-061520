// const testVar = {}

// function testFunc() {
//   return "hi"
// }



function superbowlWin(record){
  let result = record.find( win => win.result === "W")
  return !!result ? result.year : undefined
}