import {AfterViewInit, Component, OnInit} from '@angular/core';
import {LibroService} from '@app/_services/libro.service';
import {LibroAudio} from '@app/_models/LibroAudio';
//import {Track} from 'ngx-audio-player';
import {TipoAudio} from "@app/_models/TipoAudio";
import {Track} from "@app/ngx-audio-player/model/track.model";

@Component({
  selector: 'app-fonoteca',
  templateUrl: './fonoteca.component.html',
  styleUrls: ['./fonoteca.component.scss', './../../shared/css/icons-config.css', './../../../css/bootstrap.css']
})
export class FonotecaComponent implements OnInit, AfterViewInit {

  audiosList: LibroAudio[];
  temasList = [];
  displayedColumns: string[] = ['numberPage', 'titulo', 'tema'];
  dataSource = [];
  dataSourceByPage = [];
  dataSourceByTema = [];
  dataSourceByTipoAudio = [];
  pageSearched: number;
  topicSelected: string;
  tipoSelected: number;
  tiposAudio: TipoAudio[];

  msaapPageSizeOptions = [5];
  msaapDisplayTitle = false;
  msaapDisplayPlayList = true;
  msaapDisplayVolumeControls = true;
  msaapPlaylist: Track[] = [];

  letSearchByTipo: boolean;
  letSearchByPage: boolean;
  letSearchByTema: boolean;

  enableByTema: boolean;

  constructor(private libroService: LibroService) {
  }

  ngOnInit() {
    this.audiosList = this.libroService.currentPageAudios;
    this.temasList = this.libroService.currentPageContents.map(libroContenido => {
      return {numeroPagina: libroContenido.numeroPagina, tema: libroContenido.tema};
    });
    this.temasList = this.removeDuplicateItemsInTemas(this.temasList);

    this.enableByTema = this.temasList.length > 0;
    console.log(this.temasList);
    this.searchAll();
    console.log(this.libroService.tiposAudio);
    this.tiposAudio = this.libroService.tiposAudio;
    console.log(this.tiposAudio);
    this.letSearchByPage = true;
    this.letSearchByTema = false;
    this.letSearchByTipo = false;
  }


  searchAll() {
    this.dataSource = this.audiosList.map((audio, index) => {
      const temaFound = this.temasList.filter(t => t.numeroPagina === audio.numeroPagina)[0];
      return {
        numberPage: audio.numeroPagina,
        titulo: audio.titulo,
        nombreArchivo: audio.titulo,
        tema: (temaFound) ? temaFound.tema : '',
        tipoAudioId: audio.tipoAudioId
      }
        ;
    });
    this.getPathsOfAudios();
  }

  searchByPage(numberPage: number) {
    console.log('se buscara con:' + this.pageSearched);
    this.dataSourceByPage = this.audiosList.filter(a => a.numeroPagina === numberPage).map((audio, index) => {
      const temaFound = this.temasList.filter(t => t.numeroPagina === audio.numeroPagina)[0];
      let nombreTipo = '';
      if (audio.tipoAudioId === LibroService.TIPO_AUDIO_KARAOKE) nombreTipo = 'Karaoke';
      if (audio.tipoAudioId === LibroService.TIPO_AUDIO_NARRACION) nombreTipo = 'Narración';
      return {
        numberPage: audio.numeroPagina,
        titulo: audio.titulo.replace('.mp3', '') + ' ' + nombreTipo,
        nombreArchivo: audio.titulo,
        tema: (temaFound) ? temaFound.tema : '',
        tipoAudioId: audio.tipoAudioId
      };
    });
    this.joinDataSources();
  }

  searchByTipo(idTipoAudio: number) {
    this.dataSourceByTipoAudio = this.audiosList.filter(audio => audio.tipoAudioId === idTipoAudio).map(audio => {
      const temaFound = this.temasList.filter(t => t.numeroPagina === audio.numeroPagina)[0];
      let nombreTipo = '';
      if (audio.tipoAudioId === LibroService.TIPO_AUDIO_KARAOKE) nombreTipo = 'Karaoke';
      if (audio.tipoAudioId === LibroService.TIPO_AUDIO_NARRACION) nombreTipo = 'Narración';
      return {
        numberPage: audio.numeroPagina,
        titulo: audio.titulo.replace('.mp3', '') + ' ' + nombreTipo,
        nombreArchivo: audio.titulo,
        tema: (temaFound) ? temaFound.tema : '',
        tipoAudioId: audio.tipoAudioId
      };
    });
    this.joinDataSources();
  }

  searchByTopic(topicSelected: string) {
    console.log(topicSelected);
    const paginasConTema = this.temasList.filter(t => t.tema === topicSelected).map(topic => {
      return topic.numeroPagina;
    });
    console.log(paginasConTema);
    this.dataSourceByTema = this.audiosList.filter(audio => paginasConTema.includes(audio.numeroPagina)).map((audio, index) => {
      let nombreTipo = '';
      if (audio.tipoAudioId === LibroService.TIPO_AUDIO_KARAOKE) nombreTipo = 'Karaoke';
      if (audio.tipoAudioId === LibroService.TIPO_AUDIO_NARRACION) nombreTipo = 'Narración';
      return {
        numberPage: audio.numeroPagina,
        titulo: audio.titulo.replace('.mp3', '') + ' ' + nombreTipo,
        nombreArchivo: audio.titulo,
        tema: this.temasList.filter(t => t.numeroPagina === audio.numeroPagina)[0].tema,
        tipoAudioId: audio.tipoAudioId
      };
    });
    this.joinDataSources();
  }

  getPathsOfAudios() {
    if (this.dataSource.length !== 0) {
      this.msaapPlaylist = this.dataSource.map((audio, index) => {
        let tipo = '';
        if (audio.tipoAudioId === LibroService.TIPO_AUDIO_NARRACION) tipo = 'narrador';
        if (audio.tipoAudioId === LibroService.TIPO_AUDIO_CANCION) tipo = 'audios';
        if (audio.tipoAudioId === LibroService.TIPO_AUDIO_OTROS) tipo = 'audios';
        if (audio.tipoAudioId === LibroService.TIPO_AUDIO_KARAOKE) tipo = 'karaoke';
        return {
          title: audio.titulo,
          link: `assets/audios/${this.libroService.currentBook.titulo}/${tipo}/${audio.nombreArchivo}`
        };
      });
    } else {
      console.log('no hay audios');
      this.msaapPlaylist = [{title: 'Sin Audios', link: ''}];
    }
  }

  controlMediaPlayerView() {
    const audioPlayer = document.getElementById('audio-player');

    const divTextItems = audioPlayer.getElementsByClassName('mat-paginator-page-size-label');
    divTextItems[0].textContent = 'Audios por Página:';
    // @ts-ignore
    divTextItems[0].style.height = '20px';

    const tablePlayList = audioPlayer.getElementsByTagName('table');
    if (tablePlayList[0].childNodes[0].nodeName === 'THEAD') {
      tablePlayList[0].removeChild(tablePlayList[0].childNodes[0]);
    }
  }

  ngAfterViewInit(): void {
    this.controlMediaPlayerView();
  }

  joinDataSources() {
    this.dataSource = [];
    let dataJoin = [];
    if (this.letSearchByPage) {
      dataJoin = this.dataSourceByPage;
    } else {
      if (this.letSearchByTipo) {
        dataJoin = this.dataSourceByTipoAudio;
      } else {
        if (this.letSearchByTema) {
          dataJoin = this.dataSourceByTema;
        }
      }
    }
    let add = false;
    console.log(this.letSearchByPage);
    console.log(this.letSearchByTema);
    console.log(this.letSearchByTipo);
    dataJoin = dataJoin.concat(this.dataSourceByPage, this.dataSourceByTipoAudio, this.dataSourceByTema);
    dataJoin.map(audioSource => {
      add = true;
      if (this.letSearchByPage) {
        add = add && this.dataSourceByPage.filter(a => a.titulo === audioSource.titulo).length > 0;
      }
      if (this.letSearchByTema) {
        add = add && this.dataSourceByTema.filter(a => a.titulo === audioSource.titulo).length > 0;
      }
      if (this.letSearchByTipo) {
        add = add && this.dataSourceByTipoAudio.filter(a => a.titulo === audioSource.titulo).length > 0;
      }
      console.log('add here is:', add);
      if (add) this.dataSource.push(audioSource);
    });

    console.log(this.dataSource);
    this.dataSource = this.removeDuplicateItems(this.dataSource);
    console.log(this.dataSource);
    //this.dataSource.push(this.dataSourceByTema);
    //this.dataSource.push(this.dataSourceByTipoAudio);

    console.log(dataJoin);
    console.log(this.dataSourceByPage);
    console.log(this.dataSourceByTipoAudio);
    console.log(this.dataSourceByTema);
    console.log(this.dataSource);
    this.getPathsOfAudios();
  }

  removeDuplicateItems(duplicates: any[]): any[] {
    let cleaData = [];
    duplicates.map(obj => {
      console.log(obj);
      let existItem = cleaData.filter(item => item.titulo === obj.titulo);
      if (existItem.length === 0) {
        cleaData.push(obj);
      } else {
        console.log('ya existe en clean data', obj);
      }
    });
    return cleaData;
  }

  removeDuplicateItemsInTemas(duplicates: any[]): any[] {
    if(!duplicates) return;
    let cleanData = [];
    duplicates.map(obj => {
      console.log(obj);
      let existItem = cleanData.filter(item => item.tema === obj.tema);
      if (existItem.length === 0) {
        cleanData.push(obj);
      } else {
        console.log('ya existe en clean data', obj);
      }
    });
    return cleanData;
  }


}
