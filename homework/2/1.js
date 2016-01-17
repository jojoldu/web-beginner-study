

function getRandomNum(size, count){
	var arr = [];
	for(var i=0;i<size;i++){
		arr.push(i+1);
	}
		
	var temp=0;
	for(var i=0;i<10;i++){
		var randomIndex = Math.floor((Math.random() * size) + 1);	
		temp = arr[0];
		arr[0] = arr[randomIndex];
		arr[randomIndex] = temp;
	}
		
	console.log(size+"개 숫자 중 랜덤한 숫자 " + count + "개는");

	for(var i=0;i<count;i++){
		console.log(arr[i]+" ");
	}
}

getRandomNum(20, 5);