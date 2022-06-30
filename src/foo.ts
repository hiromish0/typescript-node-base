class Person {
	name: string;
	age: number;
	
	constructor(name: string, age: number){
		this.name = name;
		this.age = age;
	}
	
	sayHello(){
		return `My name is ${this.name}. I'm ${this.age} years old.`;
	}
} 

let p = new Person('Mike', 25);
let s = p.sayHello();
let div = document.getElementById("div1");
if (div != null){
	div.innerHTML! = s;
}
