/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter, TemplateRef, ElementRef, HostListener } from '@angular/core';
var PdfSecondaryToolbarComponent = /** @class */ (function () {
    function PdfSecondaryToolbarComponent(element) {
        this.element = element;
        this.showPresentationModeButton = true;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.showBookmarkButton = true;
        this.showPagingButtons = true;
        this.showRotateButton = true;
        this.showHandToolButton = true;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.spreadChange = new EventEmitter();
        this.secondaryMenuIsEmpty = new EventEmitter();
    }
    /**
     * @param {?} newSpread
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.onSpreadChange = /**
     * @param {?} newSpread
     * @return {?}
     */
    function (newSpread) {
        this.spreadChange.emit(newSpread);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () { return _this.checkVisibility(); }));
    };
    /**
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.checkVisibility = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var visibleButtons = 0;
        /** @type {?} */
        var e = (/** @type {?} */ (this.element.nativeElement));
        /** @type {?} */
        var f = e.children.item(0);
        if (f) {
            /** @type {?} */
            var g = f.children.item(0);
            if (g && g instanceof HTMLElement) {
                visibleButtons = this.checkVisibilityRecursively(g);
            }
        }
        this.secondaryMenuIsEmpty.emit(visibleButtons === 0);
    };
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    PdfSecondaryToolbarComponent.prototype.checkVisibilityRecursively = /**
     * @private
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.style.display === 'none') {
            return 0;
        }
        if (e.classList.contains('hidden')) {
            return 0;
        }
        if (e.classList.contains('invisible')) {
            return 0;
        }
        /** @type {?} */
        var style = window.getComputedStyle(e);
        if (style.display === 'none') {
            return 0;
        }
        if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
            return 1;
        }
        /** @type {?} */
        var count = 0;
        /** @type {?} */
        var children = e.children;
        if (children && children.length) {
            for (var i = 0; i < children.length && count === 0; i++) {
                /** @type {?} */
                var child = children.item(i);
                if (child && child instanceof HTMLElement) {
                    count += this.checkVisibilityRecursively(child);
                }
            }
        }
        return count;
    };
    PdfSecondaryToolbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-secondary-toolbar',
                    template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\n\n<ng-template #defaultSecondaryToolbar>\n  <div\n    id=\"secondaryToolbar\"\n    class=\"secondaryToolbar hidden doorHangerRight\"\n    [style.top]=\"secondaryToolbarTop\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'right top'\"\n  >\n    <div id=\"secondaryToolbarButtonContainer\">\n      <button\n        type=\"button\"\n        id=\"secondaryPresentationMode\"\n        [class.invisible]=\"!showPresentationModeButton\"\n        class=\"secondaryToolbarButton visibleLargeView\"\n        title=\"Switch to Presentation Mode\"\n        data-l10n-id=\"presentation_mode\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\n        </svg>\n        <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryOpenFile\"\n        [class.invisible]=\"!showOpenFileButton\"\n        class=\"secondaryToolbarButton visibleMediumView\"\n        title=\"Open File\"\n        data-l10n-id=\"open_file\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z\" />\n        </svg>\n        <span data-l10n-id=\"open_file_label\">Open</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryPrint\"\n        class=\"secondaryToolbarButton visibleSmallView\"\n        [class.invisible]=\"!showPrintButton\"\n        title=\"Print\"\n        data-l10n-id=\"print\"\n      >\n      <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z\" />\n    </svg>\n        <span data-l10n-id=\"print_label\">Print</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryDownload\"\n        class=\"secondaryToolbarButton visibleSmallView\"\n        [class.invisible]=\"!showDownloadButton\"\n        title=\"Download\"\n        data-l10n-id=\"download\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\n        </svg>\n        <span data-l10n-id=\"download_label\">Download</span>\n      </button>\n\n      <a\n        href=\"#\"\n        id=\"secondaryViewBookmark\"\n        class=\"secondaryToolbarButton bookmark visibleTinyView\"\n        [class.invisible]=\"!showBookmarkButton\"\n        title=\"Current view (copy or open in new window)\"\n        data-l10n-id=\"bookmark\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z\" />\n        </svg>\n        <span data-l10n-id=\"bookmark_label\">Current View</span>\n      </a>\n\n      <div class=\"horizontalToolbarSeparator visibleLargeView\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"firstPage\"\n        class=\"secondaryToolbarButton firstPage visibleLargeView\"\n        title=\"Go to First Page\"\n        data-l10n-id=\"first_page\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\n        </svg>\n        <span data-l10n-id=\"first_page_label\">Go to First Page</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"lastPage\"\n        class=\"secondaryToolbarButton lastPage visibleLargeView\"\n        title=\"Go to Last Page\"\n        data-l10n-id=\"last_page\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z\" />\n        </svg>\n        <span data-l10n-id=\"last_page_label\">Go to Last Page</span>\n      </button>\n\n      <div [class.invisible]=\"!showRotateButton\" class=\"horizontalToolbarSeparator visibleXLView\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showRotateButton\"\n        id=\"pageRotateCw\"\n        class=\"secondaryToolbarButton rotateCw visibleXLView\"\n        title=\"Rotate Clockwise\"\n        data-l10n-id=\"page_rotate_cw\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\n        </svg>\n        <span data-l10n-id=\"page_rotate_cw_label\">Rotate Clockwise</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showRotateButton\"\n        id=\"pageRotateCcw\"\n        class=\"secondaryToolbarButton rotateCcw visibleXLView\"\n        title=\"Rotate Counterclockwise\"\n        data-l10n-id=\"page_rotate_ccw\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\n        </svg>\n        <span data-l10n-id=\"page_rotate_ccw_label\">Rotate Counterclockwise</span>\n      </button>\n\n      <div class=\"horizontalToolbarSeparator visibleXXLView\" [class.invisible]=\"!showHandToolButton\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showHandToolButton\"\n        id=\"cursorSelectTool\"\n        class=\"secondaryToolbarButton toggled visibleXXLView\"\n        title=\"Enable Text Selection Tool\"\n        data-l10n-id=\"cursor_text_select_tool\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\n        </svg>\n        <span data-l10n-id=\"cursor_text_select_tool_label\">Text Selection Tool</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showHandToolButton\"\n        id=\"cursorHandTool\"\n        class=\"secondaryToolbarButton visibleXXLView\"\n        title=\"Enable Hand Tool\"\n        data-l10n-id=\"cursor_hand_tool\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z\" />\n        </svg>\n        <span data-l10n-id=\"cursor_hand_tool_label\">Hand Tool</span>\n      </button>\n\n      <div [class.invisible]=\"!showScrollingButton\" class=\"horizontalToolbarSeparator\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollVertical\"\n        class=\"secondaryToolbarButton scrollVertical toggled\"\n        title=\"Use Vertical Scrolling\"\n        data-l10n-id=\"scroll_vertical\"\n      >\n        <span data-l10n-id=\"scroll_vertical_label\">Vertical Scrolling</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollHorizontal\"\n        class=\"secondaryToolbarButton scrollHorizontal\"\n        title=\"Use Horizontal Scrolling\"\n        data-l10n-id=\"scroll_horizontal\"\n      >\n        <span data-l10n-id=\"scroll_horizontal_label\">Horizontal Scrolling</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollWrapped\"\n        class=\"secondaryToolbarButton scrollWrapped\"\n        title=\"Use Wrapped Scrolling\"\n        data-l10n-id=\"scroll_wrapped\"\n      >\n        <span data-l10n-id=\"scroll_wrapped_label\">Wrapped Scrolling</span>\n      </button>\n\n      <div [class.invisible]=\"!showSpreadButton\" class=\"horizontalToolbarSeparator\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadNone\"\n        class=\"secondaryToolbarButton spreadNone toggled\"\n        title=\"Do not join page spreads\"\n        data-l10n-id=\"spread_none\"\n        (click)=\"onSpreadChange('off')\"\n      >\n        <span data-l10n-id=\"spread_none_label\">No Spreads</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadOdd\"\n        class=\"secondaryToolbarButton spreadOdd\"\n        title=\"Join page spreads starting with odd-numbered pages\"\n        data-l10n-id=\"spread_odd\"\n        (click)=\"onSpreadChange('odd')\"\n      >\n        <span data-l10n-id=\"spread_odd_label\">Odd Spreads</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadEven\"\n        class=\"secondaryToolbarButton spreadEven\"\n        title=\"Join page spreads starting with even-numbered pages\"\n        data-l10n-id=\"spread_even\"\n        (click)=\"onSpreadChange('even')\"\n      >\n        <span data-l10n-id=\"spread_even_label\">Even Spreads</span>\n      </button>\n\n      <div [class.invisible]=\"!showPropertiesButton\" class=\"horizontalToolbarSeparator spreadModeButtons\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPropertiesButton\"\n        id=\"documentProperties\"\n        class=\"secondaryToolbarButton documentProperties\"\n        title=\"Document Properties\u2026\"\n        data-l10n-id=\"document_properties\"\n      >\n        <span data-l10n-id=\"document_properties_label\">Document Properties\u2026</span>\n      </button>\n    </div>\n  </div>\n</ng-template>\n",
                    styles: ["svg{position:absolute;display:inline-block;top:0;left:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfSecondaryToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    PdfSecondaryToolbarComponent.propDecorators = {
        customSecondaryToolbar: [{ type: Input }],
        secondaryToolbarTop: [{ type: Input }],
        mobileFriendlyZoomScale: [{ type: Input }],
        showPresentationModeButton: [{ type: Input }],
        showOpenFileButton: [{ type: Input }],
        showPrintButton: [{ type: Input }],
        showDownloadButton: [{ type: Input }],
        showBookmarkButton: [{ type: Input }],
        showPagingButtons: [{ type: Input }],
        showRotateButton: [{ type: Input }],
        showHandToolButton: [{ type: Input }],
        showScrollingButton: [{ type: Input }],
        showSpreadButton: [{ type: Input }],
        showPropertiesButton: [{ type: Input }],
        spreadChange: [{ type: Output }],
        secondaryMenuIsEmpty: [{ type: Output }],
        onResize: [{ type: HostListener, args: ['window:resize',] }]
    };
    return PdfSecondaryToolbarComponent;
}());
export { PdfSecondaryToolbarComponent };
if (false) {
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.customSecondaryToolbar;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.secondaryToolbarTop;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.mobileFriendlyZoomScale;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPresentationModeButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showOpenFileButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPrintButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showDownloadButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showBookmarkButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPagingButtons;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showRotateButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showHandToolButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showScrollingButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showSpreadButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.showPropertiesButton;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.spreadChange;
    /** @type {?} */
    PdfSecondaryToolbarComponent.prototype.secondaryMenuIsEmpty;
    /**
     * @type {?}
     * @private
     */
    PdfSecondaryToolbarComponent.prototype.element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUdaLFdBQVcsRUFDWCxVQUFVLEVBQ1YsWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFDO0FBRXZCO0lBc0RFLHNDQUFvQixPQUFtQjtRQUFuQixZQUFPLEdBQVAsT0FBTyxDQUFZO1FBdENoQywrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFHbEMsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBRzFCLG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBR3ZCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUcxQix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDO1FBR3pCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUd4Qix1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFHMUIsd0JBQW1CLEdBQUcsSUFBSSxDQUFDO1FBRzNCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUd4Qix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFHNUIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzFDLHlCQUFvQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7SUFFaEIsQ0FBQzs7Ozs7SUFFcEMscURBQWM7Ozs7SUFBckIsVUFBc0IsU0FBaUI7UUFDckMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7SUFFTSxrREFBVzs7OztJQUFsQixVQUFtQixPQUFz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MENBR0wsS0FBSzs2Q0FHTCxLQUFLO3FDQUdMLEtBQUs7a0NBR0wsS0FBSztxQ0FHTCxLQUFLO3FDQUdMLEtBQUs7b0NBR0wsS0FBSzttQ0FHTCxLQUFLO3FDQUdMLEtBQUs7c0NBR0wsS0FBSzttQ0FHTCxLQUFLO3VDQUdMLEtBQUs7K0JBR0wsTUFBTTt1Q0FHTixNQUFNOzJCQWFOLFlBQVksU0FBQyxlQUFlOztJQXlEL0IsbUNBQUM7Q0FBQSxBQXpIRCxJQXlIQztTQXBIWSw0QkFBNEI7OztJQUN2Qyw4REFDZ0Q7O0lBRWhELDJEQUMyQjs7SUFFM0IsK0RBQ3VDOztJQUV2QyxrRUFDeUM7O0lBRXpDLDBEQUNpQzs7SUFFakMsdURBQzhCOztJQUU5QiwwREFDaUM7O0lBRWpDLDBEQUNpQzs7SUFFakMseURBQ2dDOztJQUVoQyx3REFDK0I7O0lBRS9CLDBEQUNpQzs7SUFFakMsMkRBQ2tDOztJQUVsQyx3REFDK0I7O0lBRS9CLDREQUNtQzs7SUFFbkMsb0RBQ2lEOztJQUVqRCw0REFDMEQ7Ozs7O0lBRTlDLCtDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgQWZ0ZXJWaWV3SW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXNlY29uZGFyeS10b29sYmFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVNlY29uZGFyeVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNlY29uZGFyeVRvb2xiYXJUb3A7XG5cbiAgQElucHV0KClcbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlOiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd09wZW5GaWxlQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Jvb2ttYXJrQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gdHJ1ZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTcHJlYWRCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbiA9IHRydWU7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzcHJlYWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNlY29uZGFyeU1lbnVJc0VtcHR5ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZikge31cblxuICBwdWJsaWMgb25TcHJlYWRDaGFuZ2UobmV3U3ByZWFkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJylcbiAgcHVibGljIG9uUmVzaXplKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XG4gIH1cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jaGVja1Zpc2liaWxpdHkoKSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrVmlzaWJpbGl0eSgpKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja1Zpc2liaWxpdHkoKTogdm9pZCB7XG4gICAgbGV0IHZpc2libGVCdXR0b25zID0gMDtcbiAgICBjb25zdCBlID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZiA9IGUuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICBpZiAoZikge1xuICAgICAgY29uc3QgZyA9IGYuY2hpbGRyZW4uaXRlbSgwKTtcbiAgICAgIGlmIChnICYmIGcgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICB2aXNpYmxlQnV0dG9ucyA9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2Vjb25kYXJ5TWVudUlzRW1wdHkuZW1pdCh2aXNpYmxlQnV0dG9ucyA9PT0gMCk7XG4gIH1cblxuICBwcml2YXRlIGNoZWNrVmlzaWJpbGl0eVJlY3Vyc2l2ZWx5KGU6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBpZiAoZS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoZS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGRlbicpKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgaWYgKGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbnZpc2libGUnKSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuXG4gICAgY29uc3Qgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlKTtcbiAgICBpZiAoc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG5cbiAgICBpZiAoZSBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IGUgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIGxldCBjb3VudCA9IDA7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBlLmNoaWxkcmVuO1xuICAgIGlmIChjaGlsZHJlbiAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoICYmIGNvdW50ID09PSAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoY2hpbGQgJiYgY2hpbGQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgIGNvdW50ICs9IHRoaXMuY2hlY2tWaXNpYmlsaXR5UmVjdXJzaXZlbHkoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjb3VudDtcbiAgfVxufVxuIl19