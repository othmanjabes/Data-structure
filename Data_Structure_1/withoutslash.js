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
    let finel = []; // we concat every new element to this array
    let how_many_time_is_apper = 0; //count how many time the word is apper, after this return to zero value.
    
    punc ? arr = text.split(/[. ]+/) :arr = text.split(' ');

    //1. count the number of times the word appears
    //2. added the count & element -> to the finel Array
    let t;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
                if(arr[i].toUpperCase() === arr[j].toUpperCase() && caseSensitive){
                        how_many_time_is_apper++;
                        t = j;
                }
                else if(arr[i] === arr[j])
                {
                        how_many_time_is_apper++;
                        t = j;
                }
            }

        // add the element & count to the finel Array
        if(!finel.includes(arr[i]) && arr[i] !== '')
        {
            finel = finel.concat(arr[t],how_many_time_is_apper);
        }
        how_many_time_is_apper = 0; 
    }
    
    //converte from 1D to 2D array
    let arr2D = [];
    for (let i = 0; i < finel.length; i+=2) {
        arr2D.push(Array.of(finel[i],finel[i+1]));
    }
    return arr2D; //return the finel Array -> (result)
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
