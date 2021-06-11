// Code your selectRandomEntry function here:
let idNumbers = [291, 414, 503, 599, 796, 890];

function selectRandomEntry(nums) {
  let randomNumbers = [];
  while (randomNumbers.length < 3) {
  let  numberSelected = Math.floor(Math.random() * nums.length);
    if (randomNumbers.includes(nums[numberSelected])){
      numberSelected = Math.floor(Math.random() * nums.length);  
    } else{
    randomNumbers.push(nums[numberSelected]);
    }
  }return randomNumbers;
}
console.log(selectRandomEntry(idNumbers));
let lottery = (selectRandomEntry(idNumbers));
// Code your buildCrewArray function here:



// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

// Code your template literal and console.log statements:
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

function buildCrewArray(nums, animal) {
  let crew = [];
  for (let i=0; i<nums.length; i++) {
    for (let a=0; a<animal.length; a++) {
  if (animal[a].astronautID === nums[i]) {
    crew.push(animal[a].name);
    } 
   }
  }
  console.log(`${crew[0]}, ${crew[1]}, and ${crew[2]} are going to space!`);
    return crew;
}
console.log(buildCrewArray(lottery, animals));