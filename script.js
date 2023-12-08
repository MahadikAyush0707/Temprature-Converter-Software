var input = document.getElementById('input');
var result = document.getElementById('result');
var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');
var option_from,option_to;


input.addEventListener("keyup",myResult);
inputType.addEventListener("change",myResult);
resultType.addEventListener("change",myResult);


option_from = inputType.value;
option_to   = resultType.value;


function myResult(){




	option_from = inputType.value;
	option_to = resultType.value;




	if(option_from === "Celcius" && option_to==="fahrenheit"){
	
		result.value = (Number(input.value) * 1.8)+32;
	}else if(option_from === "Celcius" && option_to==="Kelvin"){

		 
		result.value = Number(input.value)+273.15;

	}else if(option_from === "Celcius" && option_to==="Celcius"){
		
		result.value = input.value
	}



	if(option_from === "fahrenheit" && option_to==="Celcius"){
		
		result.value = (Number(input.value)-32)/1.8;
	}else if(option_from === "fahrenheit" && option_to==="Kelvin"){
	
		result.value = ((Number(input.value)-32)/1.8)+273.15;
	}else if(option_from === "fahrenheit" && option_to==="fahrenheit"){

		result.value = input.value
	}

	if(option_from === "Kelvin" && option_to==="Celcius"){
		
		result.value = Number(input.value)-273.15;
	}else if(option_from === "Kelvin" && option_to==="fahrenheit"){
	
		result.value = ((Number(input.value)-273.15)*1.8)+32;
	}else if(option_from === "Kelvin" && option_to==="Kelvin"){

		result.value = input.value
	}
	





}