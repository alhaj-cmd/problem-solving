// write a function  which will take 3 integers and return the largest number.
 // you need to do it in 2 ways-has return and no return. 

 //  -----do it in console---

 function findLarger(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        console.log(num1);
    }
    else if (num2 > num1 && num2 > num3){
        console.log(num2);  
    }
    else {
        console.log(num3);
    }
 }

 findLarger (2, 3, 1);
 findLarger (5, 8, 1);
 findLarger (5, 8, 10);


 // check the number of return

 function findlargest(num1,num2,num3){
    if (num1 > num2 && num1 > num3){
        return "num1";

    }  else if (num2 > num1 && num2 > num3){
        return "num2";  
    }
    else {
       return "num3";
    }
}

console.log(findLarger (2, 3, 1));
console.log(findLarger (5, 8, 1));
console.log(findLarger (5, 8, 10));