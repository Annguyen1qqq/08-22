var password = "05262005";

function passcheck() {
	if(document.getElementById('pass1').value != password) {
		alert('Mày Không Phải Phương Anh, Hoặc Mày là Phương Anh Nhưng Mày Ghi sai Mật Khẩu. GHI LẠI!!!');
		return false;
	}
	if(document.getElementById('pass1').value == password) {
		aleart('Đúng Rồi vào đi!!');
	}
}

