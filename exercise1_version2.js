// Create a function will calculate a student degrees for 6 subjects,
// 1-if the average was less than 70 will print (F)
// 2-Over 70 and less than 80 (C)
// 3-over than 80 and less than 85 (B)
// 4-Over than 85 and less than 90 (A)
// 5-And over 90 print (A+)

function degree2(arr) {
  let sumPoints = arr.reduce((a, b) => a + b);
  let average = sumPoints / arr.length;
  let marks = ["A+", "A", "B", "C", "F"];

  if (average < 70) {
    return `your mark is ${marks[4]}`;
  } else if (average > 70 && average < 80) {
    return `your mark is ${marks[3]}`;
  } else if (average > 80 && average < 85) {
    return `your mark is ${marks[2]}`;
  } else if (average > 85 && average < 90) {
    return `your mark is ${marks[1]}`;
  } else if (average > 90) {
    return `your mark is ${marks[0]}`;
  }
}

console.log(degree2(grades));
