//main function
/*
input:  "He saw her walking, so he asked her."
parseText(text,false,false)
output: [['He', 1],['saw', 1],['her', 1],['walking,', 1],['so', 1],['he', 1],['asked', 1],['her.', 1]]
*/

/* 
text:                'Hellow world!' -> ['Hellow','world!']
caseSensitive: true: 'He' ≠ 'he' | false 'He' == 'he'
punc: true:          'her,' ≠ 'her | false: 'her,' == 'her'
*/
function parseText(text,caseSensitive,punc){
    let arr; //this array we start them
    let arrayFinel_1D = []; // save node(word,count) in 1D array
    
    let how_many_time_is_apper = 0; //count how many time the word is apper, after this return to zero value.
    
    punc ? arr = text.split(/[. ]+/) :arr = text.split(' ');

    // - save the word we want to save, save the count the number of times the word appears
    let indexOfLastWord;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
                if(arr[i].toUpperCase() === arr[j].toUpperCase() && caseSensitive || arr[i] === arr[j]){
                        how_many_time_is_apper++;
                        indexOfLastWord = j;
                }
            }

        // add the element & count to the arrayFinel_1D
        if(!arrayFinel_1D.includes(arr[i]) && arr[i] !== '')
        {
            arrayFinel_1D = arrayFinel_1D.concat(arr[indexOfLastWord],how_many_time_is_apper);
        }
        how_many_time_is_apper = 0; 
    }
    
    //converte from 1D to 2D array
    let arrayFinel_2D = [];
    for (let i = 0; i < arrayFinel_1D.length; i+=2) {
        arrayFinel_2D.push(Array.of(arrayFinel_1D[i],arrayFinel_1D[i+1]));
    }
    return arrayFinel_2D; //return 2D Array -> (result)
}

//sort the array by first column
function sort2D(arr){
    return arr.sort((a, b) => a[0].localeCompare(b[0]));
}





//Section of RUN and TEST
let text = "He saw her walking, so he asked her."
console.log('  orginal Array  :',text.split(' ')); //this for show orginal Array

let result1 = parseText(text,true,true);
let result2 = parseText(text,true,false);
let result3 = parseText(text,false,true);
let result4 = parseText(text,false,false);


//Test our appliction
console.log('caseSenstive  ,  :',parseText(text,true,true));
console.log('caseSenstive     :',parseText(text,true,false));
console.log('              ,  :',parseText(text,false,true));
console.log('                 :',parseText(text,false,false));
