const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//show error message
function showError(input,message) {
	const formControl = input.parentElement; //overriding the class name of the parent of the grabbed element
	formControl.className = 'form-control error';
	const small = formControl.querySelector('small');
	small.innerText = message;
}

//show success message

function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

//check the valididty of the email
function isValidEmail(input) {
	  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(re.test(input.value.trim()))
      {
      	showSuccess(input);
      }
      else
      {
      	showError(input,`Invalid Email`);
      }
}

//get the name
function getName(input)
{
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//check the input 
function checkInput(inputArr)
{
	inputArr.forEach(function(e) {
		if(e.value.trim() === '')
		{
			showError(e,`${getName(e)} is required`);
		}
		else
		{
			 showSuccess(e);
		}
	});
}

//check the length of the input
function checkLength(input,min,max)
{
	if(input.value.length < min)
	{
		showError(input,`${getName(input)} must be of ${min} length`);
	}
	else if(input.value.length > max)
	{
		showError(input, `${getName(input)} must be of ${max} length`);
	}
	else
	{
		showSuccess(input);
	}
}

//check the password match
function doMatchPassword(input1, input2) {
	if(input1.value !== input2.value)
	{
		showError(input2,`${getName(input2)} did'nt match`);
	}
}

//event handler
form.addEventListener('submit',function(e) {
	/*for actual submiion there is need of there */
	e.preventDefault(); 
	checkInput([username, email, password,password2]);
	isValidEmail(email);
	checkLength(username,3,8);
	checkLength(password,6,12);
	doMatchPassword(password, password2);
	
});