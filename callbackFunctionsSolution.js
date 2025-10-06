let even_predicate = function (value)
{
    return value % 2 === 0;
};

let odd_predicate = function (value)
{
   return value % 2 !== 0;
};

let undefined_predicate = function (value)
{
    return value === undefined;

};

let null_predicate = function (value)
{
    return value === null;
    
};


//We're defining a function that takes predicate function to 'callback' 
// and a value to check using the given predicate
let check = function (predicate,value)
{
    return predicate(value);
};

//DO NOT CHANGE ORDER OF OUTPUT
console.log(check(even_predicate, 9));
console.log(check(odd_predicate, 9));
console.log(check(even_predicate, 8));
console.log(check(odd_predicate, 8));
let x;
console.log(check(undefined_predicate, x));
console.log(check(null_predicate, x));