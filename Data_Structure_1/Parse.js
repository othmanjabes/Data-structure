function parseText(text, mycase=true, punc=true){
	var arrayStr = text.split(" ");
	console.log(JSON.stringify(arrayStr));
	var matStr = new Array();
	var flag;
	var tmpStr="";
	matStr.push(new Array(arrayStr[0], 1));
	for(var i = 1; i < arrayStr.length; i++) {
		flag = true;
		for	(var j = 0; j < matStr.length && flag; j++) {
			if(punc) {
				tmpStr = arrayStr[i];				
			} else {
				tmpStr = arrayStr[i].replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
			}
			if(mycase) {
				if(matStr[j][0] == tmpStr) { //if(str1.equals(str2) == true) {
					flag = false;
					matStr[j][1]++;
				}
			} else {
				if(matStr[j][0].toUpperCase() == tmpStr.toUpperCase()) {
					flag = false;
					matStr[j][1]++;
				}
			}
		}
		if(flag) {
			matStr.push(new Array(tmpStr, 1));
		}
	}
	console.log(JSON.stringify(matStr));
	return matStr;
}

function sortText(arr, word) {
	if(word) {
		console.log(JSON.stringify(arr.sort(sortByChar)));
		return arr.sort(sortByChar);
	} else {
		console.log(JSON.stringify(arr.sort(sortByInstance)));
		return arr.sort(sortByInstance);
	}
}
function sortByChar(val1, val2) {
	if(val1[0] > val2[0]) {
		return 1;
	} else if(val1[0] < val2[0]) {
		return -1;
	}
	return 0;
}
function sortByInstance(val1, val2) {
	//return val1[1] - val2[1];
	if(val1[1] > val2[1]) {
		return 1;
	} else if(val1[1] < val2[1]) {
		return -1;
	}
	return 0;
}