function generateRandomPassword() {
	const length = document.getElementById('length').value;
	const includeSymbols = document.getElementById('includeSymbols').checked;
	const includeNumbers = document.getElementById('includeNumbers').checked;
	const includeUppercase = document.getElementById('includeUppercase').checked;

	let characters = 'abcdefghijklmnopqrstuvwxyz';
	if (includeSymbols) {
			characters += '!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?';
	}
	if (includeNumbers) {
			characters += '0123456789';
	}
	if (includeUppercase) {
		characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	}

	let result = '';
	for (let i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * characters.length));
	}

	document.getElementById('result').innerText = result;
}

function exportPassword() {
	const password = document.getElementById('result').innerText;
	if (!password) {
			alert('Generate a password first.');
			return;
	}

	const blob = new Blob([password], { type: 'text/plain' });
	const anchor = document.createElement('a');
	anchor.download = 'password.txt';
	anchor.href = window.URL.createObjectURL(blob);
	anchor.target = '_blank';
	anchor.style.display = 'none';
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
}

document.getElementById('length').addEventListener('input', function() {
	var lengthDisplay = document.getElementById('lengthDisplay');
	lengthDisplay.textContent = this.value;
});