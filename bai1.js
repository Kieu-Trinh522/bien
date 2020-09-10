ly = prompt("nhap diem vat ly");
Hoa = prompt("nhap diem hoa");
Sinh = prompt("nhap diem sinh");
let physical = parseInt(ly);
let chemistry = parseInt(Hoa);
let biology = parseInt(Sinh);
let tb = (physical + chemistry + biology)/3;
let tong = physical + chemistry + biology
document.write(' tb = ' + tb);
document.write('tong' + tong)
