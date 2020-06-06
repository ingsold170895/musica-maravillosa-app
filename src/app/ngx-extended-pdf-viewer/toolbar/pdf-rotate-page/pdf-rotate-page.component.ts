import { PDFNotificationService } from './../../pdf-notification-service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { IPDFViewerApplication } from '../../options/pdf-viewer-application';
import { UpdateUIStateEvent } from '../../events/update-ui-state-event';

@Component({
  selector: 'pdf-rotate-page',
  templateUrl: './pdf-rotate-page.component.html',
  styleUrls: ['./pdf-rotate-page.component.css']
})
export class PdfRotatePageComponent  {
  @Input()
  public showRotateButton = true;

  public disableRotate = true;

  // @ts-ignore
  @ViewChild('button1')
  private button1: ElementRef<HTMLButtonElement>;

  // @ts-ignore
  @ViewChild('button2')
  private button2: ElementRef<HTMLButtonElement>;

  constructor(private notificationService: PDFNotificationService) {
    const subscription = this.notificationService.onPDFJSInit.subscribe(() => {
      this.onPdfJsInit();
      subscription.unsubscribe();
    });
  }

  public rotateCW(): void {
    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch('rotatecw');
  }

  public rotateCCW(): void {
    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
    PDFViewerApplication.eventBus.dispatch('rotateccw');
  }


  public onPdfJsInit(): void {
    const PDFViewerApplication: IPDFViewerApplication = (window as any).PDFViewerApplication;
    PDFViewerApplication.eventBus.on('updateuistate', (event) => this.updateUIState(event));
  }

  public updateUIState(event: UpdateUIStateEvent): void {
    this.disableRotate = event.pagesCount === 0;
    this.button1.nativeElement.disabled = this.disableRotate;
    this.button2.nativeElement.disabled = this.disableRotate;
  }
}
