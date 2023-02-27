function getFileName () {
var file = document.getElementById ('ff_7').value;
file = file.replace(/\\/g, "/").split('/').pop();
document.getElementById ('file-name1').innerHTML = 'Имя файла: ' + file;
}