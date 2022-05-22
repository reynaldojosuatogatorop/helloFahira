var full_url = document.URL;
var url_array = full_url.split('=');
var halaman = url_array[url_array.length-1];
if (halaman == 'cart') {
	$("#loadHalaman").load("cart.html"); 
	$('#judulHalaman').html("Keranjang");
	$("#menu-home").addClass("active");
	$("#sideHomeMenu").addClass("active");
}else if (halaman == 'detail') {
	$("#loadHalaman").load("detail.html"); 
	$('#judulHalaman').html("Detail Produk");
}else if (halaman == 'master-data') {
	$("#loadHalaman").load("admin/data-produk.html"); 
	$('#judulHalaman').html("Master Data");
	$("#sideMasterDataMenu").addClass("active");

}else if (halaman == 'tambah-data-produk') {
	$("#loadHalaman").load("admin/tambah-data-produk.html"); 
	$('#judulHalaman').html("Master Data");
}else if (halaman == 'pesanan-masuk' ) {
	$("#loadHalaman").load("admin/pesanan-masuk.html"); 
	$('#judulHalaman').html("Pesanan Masuk");
}else if (halaman == 'pesanan') {
	$("#loadHalaman").load("pembeli/pesanan.html"); 
	$('#judulHalaman').html("Pesanan Saya");
}else{
	$("#loadHalaman").load("home.html"); 
	$('#judulHalaman').html("Daftar Produk");
	$('#tombolKembali').hide();
}