/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
export class PdfToolbarComponent {
    constructor() {
        this.mobileFriendlyZoomScale = 1;
        this.primaryMenuVisible = true;
        this.showBookmarkButton = true;
        this.showDownloadButton = true;
        this.showFindButton = undefined;
        this.showHandToolButton = true;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showPagingButtons = true;
        this.showPresentationModeButton = false;
        this.showRotateButton = true;
        this.showSecondaryToolbarButton = true;
        this.showSidebarButton = true;
        this.showZoomButtons = true;
        this.textLayer = undefined;
        this.toolbarPaddingTop = '0px';
        this.toolbarWidth = '100%';
        this.zoomChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} value
     * @return {?}
     */
    emitZoomChange(value) {
        this.zoomChange.emit(value);
    }
}
PdfToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-toolbar',
                template: "<div class=\"toolbar\" [class.invisible]=\"!primaryMenuVisible\" >\n  <div\n    id=\"toolbarContainer\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left center'\"\n    [style.width]=\"toolbarWidth\"\n    [style.paddingTop]=\"toolbarPaddingTop\"\n  >\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\n    <div id=\"loadingBar\">\n      <div class=\"progress\"><div class=\"glimmer\"></div></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultToolbar>\n  <div id=\"toolbarViewer\">\n    <div id=\"toolbarViewerLeft\">\n      <pdf-toggle-sidebar [showSidebarButton]=\"showSidebarButton\"></pdf-toggle-sidebar>\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\"></pdf-find-button>\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\n    </div>\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" (zoomChange)=\"emitZoomChange($event)\"></pdf-zoom-toolbar>\n    <div id=\"toolbarViewerRight\">\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\"></pdf-rotate-page>\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\n      <pdf-bookmark [showBookmarkButton]=\"showBookmarkButton\"></pdf-bookmark>\n      <div [class.invisible]=\"!showSecondaryToolbarButton\" class=\"verticalToolbarSeparator hiddenSmallView\"></div>\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"></pdf-toggle-secondary-toolbar>\n    </div>\n   </div>\n</ng-template>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfToolbarComponent.ctorParameters = () => [];
PdfToolbarComponent.propDecorators = {
    customToolbar: [{ type: Input }],
    mobileFriendlyZoomScale: [{ type: Input }],
    primaryMenuVisible: [{ type: Input }],
    showBookmarkButton: [{ type: Input }],
    showDownloadButton: [{ type: Input }],
    showFindButton: [{ type: Input }],
    showHandToolButton: [{ type: Input }],
    showOpenFileButton: [{ type: Input }],
    showPrintButton: [{ type: Input }],
    showPagingButtons: [{ type: Input }],
    showPresentationModeButton: [{ type: Input }],
    showRotateButton: [{ type: Input }],
    showSecondaryToolbarButton: [{ type: Input }],
    showSidebarButton: [{ type: Input }],
    showZoomButtons: [{ type: Input }],
    textLayer: [{ type: Input }],
    toolbarPaddingTop: [{ type: Input }],
    toolbarWidth: [{ type: Input }],
    zoomChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    PdfToolbarComponent.prototype.customToolbar;
    /** @type {?} */
    PdfToolbarComponent.prototype.mobileFriendlyZoomScale;
    /** @type {?} */
    PdfToolbarComponent.prototype.primaryMenuVisible;
    /** @type {?} */
    PdfToolbarComponent.prototype.showBookmarkButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showDownloadButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showFindButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showHandToolButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showOpenFileButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showPrintButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showPagingButtons;
    /** @type {?} */
    PdfToolbarComponent.prototype.showPresentationModeButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showRotateButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showSecondaryToolbarButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showSidebarButton;
    /** @type {?} */
    PdfToolbarComponent.prototype.showZoomButtons;
    /** @type {?} */
    PdfToolbarComponent.prototype.textLayer;
    /** @type {?} */
    PdfToolbarComponent.prototype.toolbarPaddingTop;
    /** @type {?} */
    PdfToolbarComponent.prototype.toolbarWidth;
    /** @type {?} */
    PdfToolbarComponent.prototype.zoomChange;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzVGLE1BQU0sT0FBTyxtQkFBbUI7SUEwRDlCO1FBckRPLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUd2QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO1FBR25DLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUd4QiwrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLGNBQVMsR0FBd0IsU0FBUyxDQUFDO1FBRzNDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUd0QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7SUFFckQsQ0FBQzs7OztJQUVoQixRQUFRLEtBQUksQ0FBQzs7Ozs7SUFFTixjQUFjLENBQUMsS0FBc0I7UUFDMUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDOUIsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsbWhFQUEyQzs7YUFFNUM7Ozs7OzRCQUVFLEtBQUs7c0NBR0wsS0FBSztpQ0FHTCxLQUFLO2lDQUdMLEtBQUs7aUNBR0wsS0FBSzs2QkFHTCxLQUFLO2lDQUdMLEtBQUs7aUNBR0wsS0FBSzs4QkFHTCxLQUFLO2dDQUdMLEtBQUs7eUNBR0wsS0FBSzsrQkFHTCxLQUFLO3lDQUdMLEtBQUs7Z0NBR0wsS0FBSzs4QkFHTCxLQUFLO3dCQUdMLEtBQUs7Z0NBR0wsS0FBSzsyQkFHTCxLQUFLO3lCQUdMLE1BQU07Ozs7SUF0RFAsNENBQ3VDOztJQUV2QyxzREFDbUM7O0lBRW5DLGlEQUNpQzs7SUFFakMsaURBQ2lDOztJQUVqQyxpREFDaUM7O0lBRWpDLDZDQUN1RDs7SUFFdkQsaURBQ2lDOztJQUVqQyxpREFDaUM7O0lBRWpDLDhDQUM4Qjs7SUFFOUIsZ0RBQ2dDOztJQUVoQyx5REFDMEM7O0lBRTFDLCtDQUMrQjs7SUFFL0IseURBQ3lDOztJQUV6QyxnREFDZ0M7O0lBRWhDLDhDQUM4Qjs7SUFFOUIsd0NBQ2tEOztJQUVsRCxnREFDaUM7O0lBRWpDLDJDQUM2Qjs7SUFFN0IseUNBQ29FIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBUZW1wbGF0ZVJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXRvb2xiYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXRvb2xiYXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtdG9vbGJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGRmVG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBtb2JpbGVGcmllbmRseVpvb21TY2FsZSA9IDE7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dCb29rbWFya0J1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dSb3RhdGVCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0b29sYmFyUGFkZGluZ1RvcCA9ICcwcHgnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB6b29tQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmcgfCBudW1iZXIgfCB1bmRlZmluZWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge31cblxuICBwdWJsaWMgZW1pdFpvb21DaGFuZ2UodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuem9vbUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19