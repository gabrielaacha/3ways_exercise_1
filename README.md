# 3ways_exercise_1

![screenshot code](/images/Screenshot from 2020-02-20 15-17-05.png)

# Exercise 1 solution 1

* I created an emty counter called sumMarks, default value 0;

```let sumMarks = 0; ```

* I created a variable called realAverage with default value 0, in order to calculate the average mark out of the 6 marks

``` let realAverage = 0; ```

* then I created a loop in order to go through the array and perform calculations

``` for (let i = 0; i < arr.length; i++){} ```

* then I added each index of the array to the sumMarks variable, so each value will be added up

``` sumMarks += arr[i] ```

* then I calculated the read average dividing the average between the amount of marks (6). I used math.floor to round up the number (get the decimals out)

``` realAverage = Math.floor(sumMarks / arr.length); ```

* then I created a multiple condition, each line returning a final mark (A+,A,B,C,F) console.log to visualise the result in the terminal

``` if (realAverage < 70) {
    return "sorry your mark is F";
  } else if (realAverage > 70 && realAverage < 80) {
    return "your mark is C";
  } else if (realAverage > 80 && realAverage < 85) {
    return "your mark is B";
  } else if (realAverage > 85 && realAverage < 90) {
    return "your mark is A";
  } else if (realAverage > 90) {
    return "congratulations your mark is A+";
  } ```

* I console.logged the function call
``` console.log(degree(grades)); ```

***
***
