let mainLagi = true;

while (mainLagi) {

    let player = prompt("Pilih Batu Gunting Kertas");

    if (player === null) {
        alert("Game selesai!");
        break;
    }

    let pilihan_user = player.toLowerCase();

    let pilihan = ["batu", "gunting", "kertas"];

    let randomNumber = Math.floor(Math.random() * 3);

    let bot = pilihan[randomNumber];


    if (!pilihan.includes(pilihan_user)) {

        alert("Pilihan tidak Valid!");

        let kembali = confirm("Mau kembali memilih?");

        if (kembali) {
            continue;
        } else {
            alert("Game selesai!");
            break;
        }

    } else {

        alert("Kamu memilih: " + pilihan_user + " dan Komputer memilih: " + bot);
        
        if (pilihan_user === bot) {

            alert("Seri");

        } else if (
            pilihan_user === "batu" &&
            bot === "gunting"
        ) {

            alert("Kamu menang!");

        } else if (
            pilihan_user === "gunting" &&
            bot === "kertas"
        ) {

            alert("Kamu menang!");

        } else if (
            pilihan_user === "kertas" &&
            bot === "batu"
        ) {

            alert("Kamu menang!");

        } else {

            alert("Kamu kalah!");

        }


        mainLagi = confirm("Mau main lagi?");

        if (!mainLagi) {
            alert("Terima kasih sudah bermain!");
        }
    }
}