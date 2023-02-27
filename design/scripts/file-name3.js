function getFileName3 () {
var file = document.getElementById ('ff_12').value;
file = file.replace(/\\/g, "/").split('/').pop();
document.getElementById ('file-name3').innerHTML = 'Имя файла 2: ' + file;
}