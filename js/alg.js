var take = function(array, action){
	for(i =0; array.length - 1; i++){
		console.log(action(array[i]))
	}
}

var take_4 = function(number){
	 number * 4
}

take([1,2,3,4], take_4);