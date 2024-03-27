// Code your solution here
function findMatching(arr, name) {
  return arr.filter((item) =>{
    return item.toLowerCase() === name.toLowerCase()
});
}

function fuzzyMatch(arr,str) {
  return arr.filter(item =>
     item.toLowerCase().startsWith(str.toLowerCase())
  );
}

function matchName(arr, str) {
  return arr.filter(item =>
    item.name.toLowerCase() === str.toLowerCase()
  );
}

/*
const arr = [
  { name: 'Alice', hometown: 'Seattle' },
  { name: 'Bob', hometown: 'New York' },
  { name: 'Charlie', hometown: 'San Francisco' },
  { name: 'alice', hometown: 'Los Angeles' }
];
*/