function getFileName2 () {
var file = document.getElementById ('ff_11').value;
file = file.replace(/\\/g, "/").split('/').pop();
document.getElementById ('file-name2').innerHTML = 'Имя файла 1: ' + file;
}