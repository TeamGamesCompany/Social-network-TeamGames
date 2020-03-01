let registration = 0;
let registratio = 0;
let registrati = 0;
let registrat = 0;
let registra = 0;
let passwordfox = 0;


function reg () {
	if (document.getElementById('one').value > '') {
		if (document.getElementById('two').value > '') {
			if (document.getElementById('passwordi').value > '') {
				if (document.getElementById('emaili').value > '') {
					ima.style.left = 537 + 'px';
					('#ima').css('left': '537px');
					$(registration).html('#one');
					$('#ima').html(registration);
					one.style.display = 'none';
					registratio = document.getElementById('two').value;
					document.getElementById('fama').innerHTML = registratio 
					two.style.display = 'none';
					fama.style.top = 230 + 'px';
					fama.style.left = 537 + 'px';
					registrati = document.getElementById('passwordi').value;
					document.getElementById('password').innerHTML = registrati;
					passwordfox = document.getElementById('passwordi').value;
					document.getElementById('pass').innerHTML = passwordfox;
					passwordi.style.display = 'none';
					password.style.display = 'none';
					registrat = document.getElementById('emaili').value;
					document.getElementById('email').innerHTML = registrat
					emaili.style.display = 'none';
					email.style.top = 190 + 'px';
					email.style.fontSize = 8 + 'pt';
					email.style.left = 525 + 'px';
					email.style.backgroundColor = '#00BFFF';
					email.style.border = '1px solid black';
					submitki.style.display = 'none';
					glavnoe.style.height = 250 + 'px';
					icon.style.left	= 540 + 'px';
					glavnoe.style.left = 500 + 'px';
					alert("Успешная регистрация!");
					submit.style.display = 'inline';
					icontwo.style.display = 'inline';
					pl.style.display = 'inline';
					icontwo.style.display = 'inline';
					news.style.display = 'inline';
					dtext.style.display = 'inline';
					headthree.style.display = 'inline';
					headtwo.style.display = 'inline';
				}
			}
		}
	}
		
}

function passkoks () {
	pass.style.display = 'inline';
	submit.style.display = 'none';
	submitkoks.style.display = 'inline';
}

function legal () {
	pass.style.display = 'none';
	submit.style.display = 'inline';
	submitkoks.style.display = 'none';
}

function lol () {
	document.getElementById('ima').innerHTML = 'Ваше имя'
	document.getElementById('fama').innerHTML = 'Ваша фамилия'
	document.getElementById('password').innerHTML = 'Пароль 🔐'
	password.style.display = 'inline';
	glavnoe.style.height = 570 + 'px';
	fama.style.top = 272 + 'px';
	emaili.style.display = 'inline';
	submitki.style.display = 'inline';
	passwordi.style.display = 'inline';
	password.style.display = 'inline';
	submit.style.display = 'none';
	submitkoks.style.display = 'none'
	two.style.display = 'inline';
	one.style.display = 'inline';
	email.style.top = 422 + 'px';
	document.getElementById('email').innerHTML = 'e-mail'
	email.style.backgroundColor = 'none';
	email.style.border = '0px solid black';
	email.style.fontSize = 15 + 'pt';
	email.style.left = 537 + 'px';
	pass.style.display = 'none';
	icontwo.style.display = 'none';
	email.style.backgroundColor = 'white';
	one.style.left = 537 + 'px';
	two.style.left = 537 + 'px';
	passwordi.style.left = 537 + 'px';
	emaili.style.left = 537 + 'px';
	submitki.style.left = 532 + 'px';
	password.style.left = 537 + 'px';
}
