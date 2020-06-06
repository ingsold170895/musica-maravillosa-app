const path = require('path');
const { MSICreator } = require('electron-wix-msi');

const msiCreator = new MSICreator({
  appDirectory: path.resolve(__dirname, './MusicaMaravillosa-win32-x64'),
  outputDirectory: path.resolve(__dirname, './MusicaMaravillosa Installer Windows'),

  exe: 'MusicaMaravillosa',
  name: 'Musica Maravillosa',
  description: 'Musica Maravillosa',
  manufacturer: 'Musica Maravillosa',
  version: '1.0.0'
});

async function build() {
  await msiCreator.create();
  await msiCreator.compile();
}

build().catch(console.error);
