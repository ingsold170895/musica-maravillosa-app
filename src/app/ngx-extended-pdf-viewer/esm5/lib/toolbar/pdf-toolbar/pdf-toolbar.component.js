/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, TemplateRef, Output, EventEmitter } from '@angular/core';
var PdfToolbarComponent = /** @class */ (function () {
    function PdfToolbarComponent() {
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
    PdfToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} value
     * @return {?}
     */
    PdfToolbarComponent.prototype.emitZoomChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.zoomChange.emit(value);
    };
    PdfToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-toolbar',
                    template: "<div class=\"toolbar\" [class.invisible]=\"!primaryMenuVisible\" >\n  <div\n    id=\"toolbarContainer\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left center'\"\n    [style.width]=\"toolbarWidth\"\n    [style.paddingTop]=\"toolbarPaddingTop\"\n  >\n    <ng-content *ngTemplateOutlet=\"customToolbar ? customToolbar : defaultToolbar\"></ng-content>\n    <div id=\"loadingBar\">\n      <div class=\"progress\"><div class=\"glimmer\"></div></div>\n    </div>\n  </div>\n</div>\n\n<ng-template #defaultToolbar>\n  <div id=\"toolbarViewer\">\n    <div id=\"toolbarViewerLeft\">\n      <pdf-toggle-sidebar [showSidebarButton]=\"showSidebarButton\"></pdf-toggle-sidebar>\n      <pdf-find-button [showFindButton]=\"showFindButton\" [textLayer]=\"textLayer\"></pdf-find-button>\n      <pdf-paging-area [showPagingButtons]=\"showPagingButtons\"></pdf-paging-area>\n    </div>\n    <pdf-zoom-toolbar [showZoomButtons]=\"showZoomButtons\" (zoomChange)=\"emitZoomChange($event)\"></pdf-zoom-toolbar>\n    <div id=\"toolbarViewerRight\">\n      <pdf-hand-tool [showHandToolButton]=\"showHandToolButton\"></pdf-hand-tool>\n      <pdf-select-tool [showSelectToolButton]=\"showHandToolButton\"></pdf-select-tool>\n      <pdf-rotate-page [showRotateButton]=\"showRotateButton\"></pdf-rotate-page>\n      <pdf-presentation-mode [showPresentationModeButton]=\"showPresentationModeButton\"></pdf-presentation-mode>\n      <pdf-open-file [showOpenFileButton]=\"showOpenFileButton\"></pdf-open-file>\n      <pdf-print [showPrintButton]=\"showPrintButton\"></pdf-print>\n      <pdf-download [showDownloadButton]=\"showDownloadButton\"></pdf-download>\n      <pdf-bookmark [showBookmarkButton]=\"showBookmarkButton\"></pdf-bookmark>\n      <div [class.invisible]=\"!showSecondaryToolbarButton\" class=\"verticalToolbarSeparator hiddenSmallView\"></div>\n      <pdf-toggle-secondary-toolbar [showSecondaryToolbarButton]=\"showSecondaryToolbarButton\"></pdf-toggle-secondary-toolbar>\n    </div>\n   </div>\n</ng-template>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfToolbarComponent.ctorParameters = function () { return []; };
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
    return PdfToolbarComponent;
}());
export { PdfToolbarComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTVGO0lBK0RFO1FBckRPLDRCQUF1QixHQUFHLENBQUMsQ0FBQztRQUc1Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixtQkFBYyxHQUF3QixTQUFTLENBQUM7UUFHaEQsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQixvQkFBZSxHQUFHLElBQUksQ0FBQztRQUd2QixzQkFBaUIsR0FBRyxJQUFJLENBQUM7UUFHekIsK0JBQTBCLEdBQUcsS0FBSyxDQUFDO1FBR25DLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUd4QiwrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFHbEMsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLGNBQVMsR0FBd0IsU0FBUyxDQUFDO1FBRzNDLHNCQUFpQixHQUFHLEtBQUssQ0FBQztRQUcxQixpQkFBWSxHQUFHLE1BQU0sQ0FBQztRQUd0QixlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQStCLENBQUM7SUFFckQsQ0FBQzs7OztJQUVoQixzQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7OztJQUVOLDRDQUFjOzs7O0lBQXJCLFVBQXNCLEtBQXNCO1FBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlCLENBQUM7O2dCQXJFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLG1oRUFBMkM7O2lCQUU1Qzs7Ozs7Z0NBRUUsS0FBSzswQ0FHTCxLQUFLO3FDQUdMLEtBQUs7cUNBR0wsS0FBSztxQ0FHTCxLQUFLO2lDQUdMLEtBQUs7cUNBR0wsS0FBSztxQ0FHTCxLQUFLO2tDQUdMLEtBQUs7b0NBR0wsS0FBSzs2Q0FHTCxLQUFLO21DQUdMLEtBQUs7NkNBR0wsS0FBSztvQ0FHTCxLQUFLO2tDQUdMLEtBQUs7NEJBR0wsS0FBSztvQ0FHTCxLQUFLOytCQUdMLEtBQUs7NkJBR0wsTUFBTTs7SUFVVCwwQkFBQztDQUFBLEFBdEVELElBc0VDO1NBakVZLG1CQUFtQjs7O0lBQzlCLDRDQUN1Qzs7SUFFdkMsc0RBQ21DOztJQUVuQyxpREFDaUM7O0lBRWpDLGlEQUNpQzs7SUFFakMsaURBQ2lDOztJQUVqQyw2Q0FDdUQ7O0lBRXZELGlEQUNpQzs7SUFFakMsaURBQ2lDOztJQUVqQyw4Q0FDOEI7O0lBRTlCLGdEQUNnQzs7SUFFaEMseURBQzBDOztJQUUxQywrQ0FDK0I7O0lBRS9CLHlEQUN5Qzs7SUFFekMsZ0RBQ2dDOztJQUVoQyw4Q0FDOEI7O0lBRTlCLHdDQUNrRDs7SUFFbEQsZ0RBQ2lDOztJQUVqQywyQ0FDNkI7O0lBRTdCLHlDQUNvRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi10b29sYmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXRvb2xiYXIuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBkZlRvb2xiYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tVG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RG93bmxvYWRCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93RmluZEJ1dHRvbjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJlc2VudGF0aW9uTW9kZUJ1dHRvbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dab29tQnV0dG9ucyA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHRleHRMYXllcjogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdG9vbGJhclBhZGRpbmdUb3AgPSAnMHB4JztcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdG9vbGJhcldpZHRoID0gJzEwMCUnO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge31cblxuICBuZ09uSW5pdCgpIHt9XG5cbiAgcHVibGljIGVtaXRab29tQ2hhbmdlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==