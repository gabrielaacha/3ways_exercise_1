# 3ways_exercise_1

![screenshot code](images/3ways_exercise1/Screenshot from 2020-02-20 15-23-46.png)

# Exercise 1 Solution 2

* I created a variable called sumPoints to calculate the total of all 6 marks. I used the method reduced with simple parameters a and b in the callback function

``` let sumPoints = arr.reduce((a, b) => a + b); ```


* I created a second variable called average using sumPoints to calculate the average of all 6 marks

``` let average = sumPoints / arr.length; ```

* I created an arry with all the possible end marks

``` let marks = ["A+", "A", "B", "C", "F"]; ```

* I created a condition for all the end mark possibilities. Depending of the average mark the condition will return a backtick including the right index of the mark array

``` if (average < 70) {
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
```
* console.log the function call to see results

``` console.log(degree2(grades)); ```

* expected outcome

``` your mark is B ```
