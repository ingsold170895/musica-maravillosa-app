// En el proceso de renderizado (página web).
const { ipcRenderer } = require('electron');


var computerType = ipcRenderer.sendSync('typeComputer', 'typeComputer'); // get typeComputer
var cpus = ipcRenderer.sendSync('cpus', 'cpus'); // get cpus of computer
var platform = ipcRenderer.sendSync('platform', 'platform'); // get platform of computer


var version_app = function () {
  return ipcRenderer.sendSync('version-app', 'version-app');
}(); // get platform of computer

var DataComputer = function () {
  //return 'Windows_NT Intel(R) Core(TM) i5-6200U CPU @ 2.30GHz win32';
  let macIdent = computerType +" "+ cpus +" "+ platform;
  console.log(macIdent);
  return macIdent;
}();

var isUpdateReady = function() {
  console.log(ipcRenderer.sendSync('isUpdateReady'));
  return ipcRenderer.sendSync('isUpdateReady');
}();

function restartApp() {
  ipcRenderer.sendSync('restart_app');
};
/*
let printPentagramaButton = null;

var prepareButtonPrintPentagrama = function() {
  printPentagramaButton = document.getElementById('button-print-pentagrama');
  let divToPrint = document.getElementById('divPrintPentagrama');
  printPentagramaButton.addEventListener('click', function (event){
    ipcRenderer.send('printPDF', divToPrint.innerHTML);
  });

};

 */

