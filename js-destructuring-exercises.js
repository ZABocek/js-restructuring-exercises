/**
 * let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
 * let {numPlanets, yearNeptuneDiscovered} = facts;
 * 
 * If you print numPlanets, you will get 8.
 * If you print yearNeptuneDiscovered, you will get 1846.
 * 
 * Next Problem:
 * 
 * let planetFacts = {
 * numPlanets: 8,
 * yearNeptuneDiscovered: 1846,
 * yearMarsDiscovered: 1659
 * };
 * 
 * let {numPlanets, ...discoveryYears} = planetFacts;
 * 
 * Now, if you print out discoveryYears, you will get:
 * {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}
 * 
 * Next Problem:
 * 
 * function getUserData({firstName, favoriteColor="green"}){
 * return `Your name is ${firstName} and you like ${favoriteColor}`;
 * }
 * 
 * Now, if you type
 * getUserData({firstName: "Alejandro", favoiteColor: "purple"})
 * You will end up printing
 * Your name is Alejandro and you like purple
 * 
 * If you instead type
 * getUserData({firstName: "Melissa"})
 * the function will choose green as the default color
 * and you will print
 * Your name is Melissa and you like green
 * 
 * Lastly, if you don't give a first name or favorite color,
 * you will simply print
 * Your name is undefined and you like green
 * 
 * Next problem:
 * 
 * let [first, second, third] = ["Maya", "Marisa", "Chi"];
 * 
 * If you want to print first, you will get Maya,
 * printing second will give you Marisa,
 * and third will give you Chi
 * 
 * Next Problem:
 * 
 * let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
 * "Raindrops on roses",
 * "whiskers on kittens",
 * "Bright copper kettles",
 * "warm woolen mittens",
 * "Brown paper packages tied up with strings"
 * ]
 * 
 * If you want to print out the variable "raindrops",
 * it will print Raindrops on roses, if you want to 
 * print out "whiskers", it will print
 * whiskers on kittens. Finally, if you type
 * console.log(aFewOfMyFavoriteThings);
 * You will get:
 * ["Bright copper kettles", "warm woolen mittens", etc.]
 * 
 * Next Problem:
 * 
 * let numbers = [10, 20, 30];
 * [numbers[1], numbers[2]] = [numbers[2], numbers[1]]
 * 
 * Now, if you console.log(numbers),
 * you will print
 * [10, 30, 20]
 * 
 * Next are some restructuring and refactoring
 * exercises to turn code from ES5 version to 
 * ES2015-compliant version:
 * 
 * You can choose to write code the old way:
 * var obj = {
 * numbers: {
 * a: 1,
 * b: 2
 * }
 * };
 * 
 * var a = obj.numbers.a;
 * var b = obj.numbers.b;
 * 
 * Or the new way:
 * const obj = {
 * numbers: {
 * a: 1,
 * b: 2
 * }
 * };
 * 
 * const {a, b} = obj.numbers
 * 
 * The following is the ES5 version of how to swap an array:
 * 
 * var arr = [1, 2];
 * var temp = arr[0];
 * arr[0] = arr[1];
 * arr[1] = temp;
 * 
 * This is the new, much shorter way:
 * 
 * [arr[0], arr[1]] = [arr[1], arr[0]]
 * 
 * 
 * Finally, we want to write a function called raceResults
 * which accepts a  single array argument and it 
 * should return an object with keys named
 * first, second, third, and rest.
 * 
 * First, you can assign values to the keys of the 
 * object the old way:
 * 
 * raceResults(['Tom','Margaret','Allison','David','Pierre'])
 * 
 * Here's the old way of doing it:
 * {first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"]}
 * 
 * Here's the new way:
 * const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})
 */