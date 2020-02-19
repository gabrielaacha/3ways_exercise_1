// Create a function will calculate a student degrees for 6 subjects,
// 1-if the average was less than 70 will print (F)
// 2-Over 70 and less than 80 (C)
// 3-over than 80 and less than 85 (B)
// 4-Over than 85 and less than 90 (A)
// 5-And over 90 print (A+)

function degree3(arr) {
  const num = arr.reduce((a, b) => a + b);
  const ave = num / arr.length;

  let one = ave < 70;
  let two = ave > 70 && ave < 80;
  let three = ave > 80 && ave < 85; // true
  let four = ave > 85 && ave < 90;
  let five = ave > 90;
  console.log(one, two, three, four, five);

  const newArr = [
    { uno: "F" },
    { dos: "C" },
    { tres: "B" },
    { cuatro: "A" },
    { cinco: "A+" }
  ];

  if ((one = true)) {
    return `you have an ${newArr.uno}`;
  } else if ((two = true)) {
    return `you have an ${newArr.dos}`;
  } else if ((three = true)) {
    return `you have an ${newArr.tres}`;
  } else if ((four = true)) {
    return `you have an ${newArr.cuatro}`;
  } else if ((five = true)) {
    return `you have an ${newArr.cinco}`;
  } else {
    return "else";
  }
}
console.log(degree3(grades));

//................................third way version 2..........................................................

function degree4(arr) {
  const num = arr.reduce((a, b) => a + b);
  const ave = num / arr.length;

  let one = ave < 70;
  let two = ave > 70 && ave < 80;
  let three = ave > 80 && ave < 85; // true
  let four = ave > 85 && ave < 90;
  let five = ave > 90;
  console.log(one, two, three, four, five);

  if (one == true) {
    return `you have an F`;
  } else if (two == true) {
    return `you have a C`;
  } else if (three == true) {
    return `you have a B`;
  } else if (four == true) {
    return `you have an A`;
  } else if (five == true) {
    return `you have an A+`;
  } else {
    return "else";
  }
}
console.log(degree4(grades));
