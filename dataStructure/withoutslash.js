function parseText(text,caseSensitive,punc){
    let arr;
    let arrayFinel_1D = [];
    
    let how_many_time_is_apper = 0;
    
    punc ? arr = text.split(/[., ]+/) :arr = text.split(' ');
    //arr.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
    let indexOfLastWord;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
                if(arr[i].toUpperCase() === arr[j].toUpperCase() && caseSensitive || arr[i] === arr[j]){
                        how_many_time_is_apper++;
                        indexOfLastWord = j;
                }
            }

        if(!arrayFinel_1D.includes(arr[i]) && arr[i] !== '')
        {
            arrayFinel_1D = arrayFinel_1D.concat(arr[indexOfLastWord],how_many_time_is_apper);
        }
        how_many_time_is_apper = 0; 
    }
    
    let arrayFinel_2D = [];
    for (let i = 0; i < arrayFinel_1D.length; i+=2) {
        arrayFinel_2D.push(Array.of(arrayFinel_1D[i],arrayFinel_1D[i+1]));
    }
    return arrayFinel_2D; 
}

function sort2D(arr){
    return arr.sort((a, b) => a[0].localeCompare(b[0]));
}

function Test(){
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
}

Test();