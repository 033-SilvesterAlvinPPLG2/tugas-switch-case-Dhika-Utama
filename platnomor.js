let plat_nomor = ["B 1423 BCA"]
let tanggal = 1;
let nomor = plat_nomor[0].split(" ")
switch (true) {
    case (nomor[1] % 2 == 0 && tanggal % 2 ==0 || nomor[1] % 2 == 1 && tanggal % 2 == 1):
        console.log("silahkan dilanjutkan perjalanannya")
        break;
    default:
        console.log("eitss... sabar dulu")
        break;    
}