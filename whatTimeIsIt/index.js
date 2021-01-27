const whatTimeIsIt = (time) => {
  // do code here
  const split = time.split("");
  const tes = split[0].split(":");
  const num1 = tes[0];
  const num2 = tes[1].split("");
  const backNum = num2[0];
  const backNum1 = num2[1];
  const firstWord = "it's";
  const bilangan = [0, 1, 2, 3, 4, 5];
  const huruf = ["zero", "ten", "twenty", "thirty", "forty", "fifty"];
  const times = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ];
  const jam = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  let nomor1;
  let nomor2;
  let nomor3;
  let tampung = "x";
  times.forEach((val, i) => {
    if(num1 == val){
      nomor1 = jam[i]
    }
  });
  bilangan.forEach((valx, ix) => {
    if (backNum == valx){
      nomor2 = huruf[ix]
    }
  })
  times.forEach((vals, is) => {
    if(backNum1 == vals){
      nomor3 = jam[is]
    }
  })
  let point;
  if(split[1] == "pm"){
    if(num1 != "12"){
      point = "afternoon"
    } else {
      point = "noon"
    }
  }
  if(split[1] == "am"){
    if(num2 != "12"){
      point = "morning"
    } else {
      point = "midnight"
    }
  }

  const concat = nomor1 + "_" + nomor2 + "_"nomor3;
  if(concat == "twelve_zero_zero"){
    if (point == "noon"){
      tampung = firstWord + "" + point;
    } else {
      tampung =  firstWord + "" + point;
    }
  }else {
    let xs = concat.split("_");
    if(xs[1] == "ten"){
      times.forEach((val, i) => {
        if(backNum + backNum1 == val)
      })
    }
  }

  console.log(tes);
};

// do not change this code below
const test = (testCase, result) => console.log(testCase === result);

test(whatTimeIsIt("12:00 pm"), "It's noon");
test(whatTimeIsIt("3:49 pm"), "It's three past forty nine in the afternoon");
test(whatTimeIsIt("12:00 am"), "It's midnight");
test(whatTimeIsIt("5:31 am"), "It's five past thirty one in the morning");
test(whatTimeIsIt("9:11 am"), "It's nine past eleven in the morning");
