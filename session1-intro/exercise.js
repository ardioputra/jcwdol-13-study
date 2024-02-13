/* 
Problem:
Write a code to find area of rectangular

Hint:
1. Find out how to count area of rectangle
2. area equals to length times width

Solutions:
1. declare variable for length and width and assign its value
    const rectangleLength = 5;
    const rectagleWidth = 3;
2. declare variable to keep the result
    const rectangleArea = rectangleLength * rectangleWidth
*/

const rectangleLength = 5;
const rectangleWidth = 3;
const rectangleArea = rectangleLength * rectangleWidth;
console.log(rectangleArea);

/* 
Problem:
Write a code to find perimeter of rectangle

Hint:
1. Find out how to count perimeter of rectangle
2. perimeter equals to 2 times (length plus width)

Solutions:
1. declare variable for length and width and assign its value
    const rectangleLength = 5;
    const rectagleWidth = 3;
2. declare variable to keep the result
    const rectanglePerimeter = 2 * (rectangleLength + rectangleWidth)
*/

const rectanglePerimeter = 2 * (rectangleLength + rectangleWidth);
console.log(rectanglePerimeter);

/* 
Problem:
Write a code to find diameter, circumference and area of a circle.

Hint:
1. Find out how to find diameter and count circumference and area of circle
2. diameter equals to 2 times radius
3. circumference equals to phi times diameter
4. area equals to phi times squared radius

Solutions:
1. declare variable for radius and assign its value
    const circleRadius = 5;
2. declare constant variable phi
    const phi = Math.PI;
3. declare variable to keep the result
    const circleDiameter = 2 * circleRadius;
    const circleCircumference = phi * circleDiameter;
    const circleArea = phi * circleRadius * circleRadius;
*/

const circleRadius = 5;
const phi = Math.PI;
const circleDiameter = 2 * circleRadius;
const circleCircumference = phi * circleDiameter;
const circleArea = phi * circleRadius * circleRadius;

console.log(
  `diameter = ${circleDiameter}, 
  circumference = ${circleCircumference.toFixed(4)}, 
  area = ${circleArea.toFixed(4)}`
);

/* 
Problem:
Write a code to find angles of triangle if two angles are given.

Hint:
1. Find out how to find angles of triangle if two angles are given
2. thirdAngle equals to 180 minus (firstAngle plus secondAngle) 

Solutions:
1. declare variable for first and second angle and assign its value
    const a = 80;
    const b = 65;
2. declare variable to keep the result
    const thirdAngle = 180 - (a + b);
*/

const a = 80;
const b = 65;
const thirdAngle = 180 - (a + b);
console.log(thirdAngle);

/* 
Problem:
Write a code to get difference between dates in days.

Hint:
1. Find out how to get difference between dates in days
2. timeDifferences equals to time date 2 minus time date 1
3. dayDifferences equals to timeDifferences divided by (1000 times 60 times 60 times 24)

Solutions:
1. declare variable for date and assign its value
    const date1 = new Date("2022/01/20");
    const date2 = new Date("2022/01/22");
2. declare variable to keep the result
    const timeDifferences = date2.getTime() - date1.getTime()
    const dayDifferences = timeDifferences/(1000*3600*24)
*/

const date1 = new Date("2022/01/20");
const date2 = new Date("2022/01/22");

const timeDifferences = date2.getTime() - date1.getTime();
const dayDifferences = timeDifferences / (1000 * 3600 * 24);
console.log(dayDifferences);

/* 
Problem:
Write a code to convert days to years, months and days.

Hint:
1. Find out how to turn days into years, months and days
2. years equals to floor (days divided by 365)
3. months equals to floor ((days modulo 365) divided by 30)
4. days equals to floor (days modulo 365 modulo 30)

Solutions:
1. declare function for converting days to years, months, days
    const convertDays = (days) => {
        let year = Math.floor(days/365);
        let month = Math.floor((days%365)/30);
        let day = Math.floor(days%365%30)
        return console.log(`${year} year, ${month} month, ${day} day`)
    }
*/

const convertDays = (days) => {
  let year = Math.floor(days / 365);
  let month = Math.floor((days % 365) / 30);
  let day = Math.floor((days % 365) % 30);
  return console.log(`${year} year, ${month} month, ${day} day`);
};

convertDays(400);
convertDays(366);