$(document).ready(function () {
    $('#satu').click(function () {
        document.forms.display.value += 1;
    });
    $('#dua').click(function () {
        document.forms.display.value += 2;
    });
    $('#tiga').click(function () {
        document.forms.display.value += 3;
    });
    $('#empat').click(function () {
        document.forms.display.value += 4;
    });
    $('#lima').click(function () {
        document.forms.display.value += 5;
    });
    $('#enam').click(function () {
        document.forms.display.value += 6;
    });
    $('#tujuh').click(function () {
        document.forms.display.value += 7;
    });
    $('#delapan').click(function () {
        document.forms.display.value += 8;
    });
    $('#sembilan').click(function () {
        document.forms.display.value += 9;
    });
    $('#nol').click(function () {
        document.forms.display.value += 0;
    });
    $('#tambah').click(function () {
        document.forms.display.value += '+';
    });
    $('#kurang').click(function () {
        document.forms.display.value += '-';
    });
    $('#bagi').click(function () {
        document.forms.display.value += '/';
    });
    $('#kali').click(function () {
        document.forms.display.value += '*';
    });
    $('#titik').click(function () {
        document.forms.display.value += '.';
    });
    $('#equal').click(function () {
        if (display.value == "") {
            alert("Silahkan masukkan angka");
        } else {
            document.forms.display.value = eval(document.forms.display.value);
        }
    });
    $('#clear').click(function () {
        document.forms.display.value = "";
    });
})