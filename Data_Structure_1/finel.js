//sort
//converte to 2D


function parseText(text,caseSensitive,punc){
    let arr; //this array we start them
    let finel = []; // we concat every new element to this array
    let how_many_time_is_apper = 0; //count how many time the word is apper, after this return to zero value.
    
    // for remove the ' ' && '.'
    if(punc)
    {
        //if true remeve space and point | you can add any char you want remove
        arr = text.split(/[. ]+/);
    }else{
        //if false splite only by white space and return array
        arr = text.split(' ');
    }

    //1. count the number of times the word appears
    //2. added the count & element -> to the finel Array
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(caseSensitive){
                if(arr[i].toUpperCase() === arr[j].toUpperCase()){
                    how_many_time_is_apper++;
                }
            }else{
                if(arr[i] === arr[j]){
                    how_many_time_is_apper++;
                }
            }
        }

        // add the element & count to the new Array
        if(!finel.includes(arr[i]) && arr[i] !== '')
        {
            //temp -> to create temp['word',count] of array
            let temp = [];
            temp = temp.concat(arr[i],how_many_time_is_apper);

            //هذا السطر فقط لعملية الفحس
            // يمكن مسحه وتفعيل السطر االذي يليه بعد الإنتهاء من البرنامج
            finel = finel.concat(temp);
            
            //add the temp to finel array
            // [['word1',count],['word2',count],['word3',count]]
            //finel.push(temp); //enable, that converte to 2D
        }
        how_many_time_is_apper = 0; 
    }

    //This function only works if the user requests
    //Delete repeated words, whether they are uppercase or lowercase
    if(caseSensitive){
        /*
        If a word appears twice with a capital letter and once with a lowercase letter,
        no word will be deleted, but the program will count the two and give the value to these two elements
        example below:
        1. before work this function
        ['He', 2, 'saw', 1, 'her', 1, 'walking,', 1, 'so', 1, 'he', 2, 'asked', 1, 'her.', 1]
        2. after run this function
        ['He', 2, 'saw', 1, 'her', 1, 'walking,', 1, 'so', 1, 'asked', 1, 'her.', 1]
        === see ['He', 2] & ['he', 2] and think what the diferent
        */
        for (let i = 0; i < finel.length-1; i++) {
            let c = 0;
            for (let j = 0; j < finel.length-1; j++) {
                let sI = finel[i].toString().toUpperCase();
                let sJ = finel[j].toString().toUpperCase();
                if(sI === sJ && isNaN(sI) && isNaN(sJ)){
                    c++;
                    if(c > 1){
                        finel.splice(j,2);
                    }
                }
            }
            c = 0;
        }
    }

    return finel; //return the finel Array -> (result)
}


//Test our appliction
let text = "He saw her walking, so he asked her."
console.log(text.split(' ')); //this for show orginal Array
console.log('caseSenstive  ,  :',parseText(text,true,true));
console.log('caseSenstive     :',parseText(text,true,false));
console.log('              ,  :',parseText(text,false,true));
console.log('                 :',parseText(text,false,false));

