// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxatY5vJ45YLEB1O9VpgwjBYPtQ4fJj-0",
  authDomain: "penjualan-8c598.firebaseapp.com",
  projectId: "penjualan-8c598",
  storageBucket: "penjualan-8c598.appspot.com",
  messagingSenderId: "419204671027",
  appId: "1:419204671027:web:a74696cc1b92d7a19d2546",
  measurementId: "G-ZQ021B9PD1"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function formatRupiah(angka){
  const numb = angka;
  const format = numb.toString().split('').reverse().join('');
  const convert = format.match(/\d{1,3}/g);
  const rupiah = 'Rp. ' + convert.join('.').split('').reverse().join('');
  return rupiah;
}
function loginData()
{
  db.collection("users").where("email", "==", $('#email').val())
  .get()
  .then((querySnapshot) => {
    if (querySnapshot.size <= 0) {
      alert("Maaf email belum terdaftar");
    }else{
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.users_pass != $('#password').val()) {
          alert("Maaf password yang anda masukkan salah !");
        }else{
          session = 1;
          localStorage.setItem('loginSessionID', doc.id);
          localStorage.setItem('loginSessionData', window.btoa(JSON.stringify(doc.data())));
          window.location.href = 'index.html'; 
        }
      });
    }
  })
  .catch((error) => {
    console.log("Error getting documents: ", error);
  });
}

function registerData()
{
  const data = {
    'nama'          : $('#nama').val(),
    'email'         : $('#email').val(),
    'users_pass'     : $('#password_users').val(),
    'nomor_telepon' : $('#nomor_telepon').val(),
    'alamat'        : $('#alamat').val(),
    'jenis_kelamin' : $("#jenis_kelamin:checked").val(),
    'akses_level'   : "Pembeli",
  }

  db.collection("users").add(data)
  .then((docRef) => {
    alert("ANDA BERHASIL REGISTRASI");
    location.reload(true);
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}

function logOut()
{
  window.localStorage.clear();
  window.location.href = 'index.html'; 

}
function simpanDataProduk(){
  const data = {
    'nama_produk' : $('#nama_produk').val(),
    'harga' : $('#harga').val(),
    'status_ketersediaan' : $("#status_ketersediaan:checked").val(),
    'deskripsi' : $('#deskripsi').val(),
    'gambar' :gambar,
  }

  db.collection("produk").add(data)
  .then((docRef) => {
    swal("Berhasil", "Data berhasil disimpan", "success").then((value) => {
      location.reload(true);
    });

    
  })
  .catch((error) => {
    console.error("Error adding document: ", error);
  });
}

var totalCart = 0;
db.collection("cart").where("id_doc_users", "==", localStorage.getItem("loginSessionID")).where('status','==','Keranjang')
.get()
.then((querySnapshot) => {
  $('#totalCart').html(querySnapshot.size);
  $('#sideCartMenu').html(querySnapshot.size);
  
}) 
.catch((error) => {
  console.log("Error getting documents: ", error);
});