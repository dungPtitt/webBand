function isNumber(value) {
  if(typeof value =='number') return true
  return false
}
console.log(isNumber(10))
// console.log(typeof 10)
// function run(name, year_of_birth) {
// 	var d = new Date();
// 	var current_year = d.getFullYear();
// 	// define a object 
//   var emp = new Object();
// 	emp["name"] = name;
//   emp["year_of_birth"] = year_of_birth;
// 	var age = current_year - emp.year_of_birth;
	
// 	console.log(emp); // print object
// 	console.log(emp[name] + " is " + age + " years old");
// }

// run("Dung", 2018);