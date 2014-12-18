$(document).ready(function(){
	var temp_input = $('#input').val();
	var text1 = $('#text1')
	var name;

	income_hash = { 'Larry Ellison' : 41100000000, 
 	'Ingvar Kamprad' : 43500000000, 
 	'Warren Buffett' : 48100000000, 
	'Amancio Ortega' : 53100000000, 
	'Bill Gates' : 64800000000, 
	'Carlos Slim Helu' : 74500000000 }

	icome_noted = { 'Larry Ellison' : '41.1 Billion', 
 	'Ingvar Kamprad' : '43.5 Billion', 
 	'Warren Buffett' : '48.1 Billion', 
	'Amancio Ortega' : '53.1 Billion', 
	'Bill Gates' : '64.8 Billion', 
	'Carlos Slim Helu' : '74.5 Billion'
	}

	var calculate_income = function(number){
		number = number / 365
	}
	var run = function(your_income, billionair_income){
				var your_income_pday = (your_income/365)
				var how_long = (billionair_income/ your_income_pday)
				var days = how_long % 365
				var years = how_long / 365
				var lifetimes = years/75

				$('#jq_result').html('It would take ' + '<h3 id="years">' + years.toFixed(2)  + ' years, ' + '</h3>' + '<h3 id="days">' + days.toFixed(2) + ' days' + ' or around ' + lifetimes.toFixed(0) + ' lifetimes' + '</h3>' + ' to make ' + '<h5>' + name + '</h5>' + ' net wealth!');
	}
	$('#table td').click(function(){
		$(this).fadeOut(3000, function(){
			var temp_html = $(this).html();
			$(this).html(icome_noted[name] + ' Net Worth')
			$(this).fadeIn(5000, function(){
				$(this).html(temp_html);
			});
		})
	})
	$('#table').delegate('td', 'click', function(e){
			name = $(this).data('bill')
			console.log($(this).data('bill'))
			console.log(income_hash[name])
		text1.hover(function(){
			console.log(text1.val())
			if(text1.val().length <= 0){
				$('#jq_result').hide();
				console.log('this is the input length ' + text1.val().length)
			}
			else{
				$('#jq_result').show();
				run(text1.val(), income_hash[name]);
			}
		// $('#jq_result').fadeOut('5000');
	});
// 	var text_box2 = $('#input2')
// 	var blank = 0;
// 	input_number = text_box1.html();
// 	console.log(input_number);
// 	in
// 	var change_input_box2 = function(calcualted_number, number){

// 	}
// 	change_input_box2(
	})
});