let angka = 0;
for (angka; angka<=20; angka++) {
    console.log(angka)
}

function cek(){
      var bilangan = parseInt(document.getElementById('inputBilangan').value);
      var notif;
      if (cek%2==0) {
        notif = "Bilangan "+bilangan+" Adalah Bilangan Genap";
				} else {
					notif = "Bilangan "+bilangan+" Adalah Bilangan Ganjil";
				}
      alert(notif);
    }
 