function bmi()
{
	
	//alert("Function call successful");
	let height, weight, name, result;
	height = document.querySelector('#h').value;
	weight = document.querySelector('#w').value;
	name = document.querySelector('#n').value;

	result = weight/(height*height);

	if (result < 18.5)
	{
		alert("Hello " + name + ", your BMI is " + result + ". You are underweight. Seek advise from a healcare provider.");
	}

	if (result > 18.5 && result < 24.9)
	{
		alert("Hello " + name + ", your BMI is " + result + ". You are of normal BMI. Congratulations.");
	}
	if (result > 24.9)
	{
		alert("Hello " + name + ", your BMI is " + result + ". You are overweight. Seek advise from a healcare provider.");
	}
	
}