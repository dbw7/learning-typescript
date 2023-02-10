//Prims

let age: number = 55;

age = 23.1;

let userName: string;

userName = "D";

let isLoggedIn: boolean;

isLoggedIn = true;


let hobbies: string[];

hobbies = ['sports', 'cooking'];

type Person = {
    name: string,
    age: number,
};

let person: Person;

let people: Person[];


person = {
    name: 'name',
    age: 33,
}

let course: string | number = "Complete guide";

course = 12345;



function add(a: number, b: number): number{
    return a + b;
}

function printx(value: any): void{
    console.log(value);
}

//Generics
//By adding <T> typescript is able to recognize that the type of the array should match the type of the value
//But that's the only restriction, I can call the function on any array and value type as long as they match
function insertAtBeginning<T>(array: T[], value:T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArr = [1,2,3];
const updatedArr = insertAtBeginning(demoArr, -1);

