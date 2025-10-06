let getDictionary = function (lang)
{
    /*
       The value of the lang could be
        -'E' for English
        or
        - 'F' for French 

        Based on the value of this argument, a simplified dictionary function would be returned.
        both dictionary functions receive a number and return its name in the corresponding language.
        if the value of lang is 'E' , the englishDictioary function is returned 
        and if the value of lang is 'F' , the frenchDictionary function is returned

    */

    /*
        Complete the definition of the englishDictionary function
    */
    let englishDictionary = function (number)
    {
        switch(number){
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            default: return "unknown";
        }
    }

    /*
        Complete the definiton of the englishDictionary function
    */
    let frenchDictionary = function (number)
    {
      switch(number){
            case 1: return "un";
            case 2: return "deux";
            case 3: return "trios";
            default: return "inconnu";
        }     
    }

    if (lang=='E'){
        return englishDictionary;
    }else if (lang=='F'){
        return frenchDictionary;
    }else{
        return function(){return "invalid language";}
    }
}

// Call the getDictionay function in a way that allows us to use the binding names below as the corresponding dictionary function
let english = getDictionary('E');
let french = getDictionary('F');


// DO NOT change the lines below
console.log(english(1));
console.log(french(1));
console.log(english(2));
console.log(french(2));
console.log(english(3));
console.log(french(3));
