function parseText(text,caseSensitive,punc){
    let arr;
    // for remove the ' ' && '.'
    if(punc === true)
    {
        arr = text.split(/[. ]+/);
    }else{
        arr = text.split(' ');
    }
    //
    const newArr = [].concat(arr);
    let finel = [];
    let how_many_time_is_apper = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if(caseSensitive){
                if(arr[i].toUpperCase() === arr[j].toUpperCase()){
                    newArr.splice(i,1);
                    how_many_time_is_apper++;
                }
            }else{
                if(arr[i] === arr[j]){
                    newArr.splice(i,1);
                    how_many_time_is_apper++;
                }
            }
        }

        // add the element with count to new array
        if(!finel.includes(arr[i]) && arr[i] !== '')
        {
            //temp -> to create temp['word',count] of array
            let temp = [];
            temp = temp.concat(arr[i]);
            temp = temp.concat(how_many_time_is_apper);

            //هذا السطر فقط لعملية الفحس
            // يمكن مسحه وتفعيل السطر االذي يليه بعد الإنتهاء من البرنامج
            finel = finel.concat(temp);
            
            //add the temp to finel array
            // [['word1',count],['word2',count],['word3',count]]
            //finel.push(temp); //enable, that converte to 2D
        }
        how_many_time_is_apper = 0;
    }

    //remove replace word if A or a
    if(caseSensitive === true){
        for (let i = 0; i < finel.length-1; i++) {
            let c = 0;
            for (let j = 0; j < finel.length-1; j++) {
                let sI = finel[i].toString().toUpperCase();
                let sJ = finel[j].toString().toUpperCase();
                if(sI === sJ && isNaN(sI) && isNaN(sJ)){
                    c++;
                    if(c > 1){
                        finel.splice(i,2);
                    }
                }
            }
        }
    }

    //return the finel Array -> (result)
    return finel;
}

//Test our appliction
let text = "He saw her walking, so he asked her."
console.log(text.split(' ')); //this for show orginal Array
console.log('caseSenstive  ,  :',parseText(text,true,true));
console.log('caseSenstive     :',parseText(text,true,false));
console.log('              ,  :',parseText(text,false,true));
console.log('                 :',parseText(text,false,false));

