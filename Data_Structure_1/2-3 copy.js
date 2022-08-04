//func1
const arr =  ['He', 'saw', 'her', 'walking,', 'so', 'he', 'asked', 'her.'];
const newArr = [].concat(arr);
let finel = [];
let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        if(arr[i].toUpperCase() === arr[j].toUpperCase()){
            newArr.splice(i,1);
            count++;
        }
    }

    if(!finel.includes(arr[i]))
    {
        finel = finel.concat(arr[i]);
        finel = finel.concat(count);
    }
    count = 0;
}

// remove replace word if A or a
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
console.log(finel);
console.log(arr);
