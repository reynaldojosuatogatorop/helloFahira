var session = localStorage.getItem("loginSessionData");
if (session == null) {
	$('#btnCart').hide();
	$("#footer-menu").load("menu/default.html");
	$('#btnPengaturanMenu').hide();
}else{
	const dataDecrypt = JSON.parse(window.atob(session));
	$('#namaProfil').html(dataDecrypt.nama);
	$('#emailProfil').html(dataDecrypt.email);
	$('#btnLogin').hide();
	
	$("#gambarProfil").attr("src",dataDecrypt.gambar);

	if(dataDecrypt.akses_level == "Pembeli")
	{
		$("#footer-menu").load("menu/pembeli.html");
		$("#sideMenu").load("menu/side/pembeli.html");

	}else{
		$("#footer-menu").load("menu/admin.html");
		$("#sideMenu").load("menu/side/admin.html");
	}
}

function tampilModalPerbaharuiProfil()
{
	const dataDecrypt = JSON.parse(window.atob(session));
	if (dataDecrypt.jenis_kelamin == "Perempuan") {
		$('#perempuan_perbaharui_profil').attr('checked', true);
	}else{
		$('#laki_laki_perbaharui_profil').attr('checked', true);
	}
        $('#btnPerbaharuiProfil').attr('onclick', "perbaharuiProfil('"+localStorage.getItem("loginSessionID")+"')");

	$('#nama_perbaharui_profil').val(dataDecrypt.nama);
	$('#email_perbaharui_profil').val(dataDecrypt.email);
	$('#password_users_perbaharui_profil').val(dataDecrypt.users_pass);
	$('#nomor_telepon_perbaharui_profil').val(dataDecrypt.nomor_telepon);
	$('#alamat_perbaharui_profil').val(dataDecrypt.alamat);
	$('#modalCheckout').modal();
	$('#modalCheckout').modal('open'); 
}