
function reverseNum(num){
	var sum=0;
	var add=0;
	
	while(true) {
		
		if(num < 10){
			sum = sum*10 + num;
			break;
		}
			
		add = parseInt(num%10);
		sum = sum*10 + add;
		num = parseInt(num/10);
	}

	console.log("역순은 : " + sum);
}

reverseNum(54321);

reverseNum(9876);