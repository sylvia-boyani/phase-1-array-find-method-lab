// code your solution here
const superbowlWin = (records) => {
    let wins = records.find((record) => record.result === "W");
 
       return wins == undefined ? undefined : wins.year;
  }; 