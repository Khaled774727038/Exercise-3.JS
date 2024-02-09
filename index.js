
//  Exercise 1

const checkAge = (age) =>{
    return  (age > 18) ? true: ("Do you have your parents permission to access this page?");

}
console.log(checkAge(20))
// Exercise 2

const pow = (x, n) => 
 n < 1 || n !== Math.floor(n)
    ? 'Please provide a natural number for n.'
    : n === 1
    ? x
    : x * pow(x, n - 1);
  
 console.log(pow(3, 3)); //this is print 27
   // console.log(pow(2, 10)); // this is print: 1024
   //console.log(pow(2, 0));  // this is print: Please provide a natural number for n.

// Exercise 3

const ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// Exercise 4

let calculator = {
    read() {
      this.n1 = Number(prompt("Enter the first Number"));
      this.n2 = Number(prompt("Enter the second Number"));
    },
    sum() {
      return this.n1 + this.n2;
    },
    mul() {
      return this.n1 * this.n2;
    },
  };
  
  calculator.read();
  alert( `The sum of your Numbers is :`+ ` ` + calculator.sum());
  alert(`The mul of your Numbers is :` +` `+ calculator.mul());

// Exercise 5

const min = (a, b) => (a < b ? a : b);
console.log(min(2, 5));

 