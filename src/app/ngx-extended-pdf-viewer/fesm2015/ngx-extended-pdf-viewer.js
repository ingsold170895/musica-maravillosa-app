import * as deburr from 'lodash.deburr';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Component, Input, Output, EventEmitter, ElementRef, HostListener, Injectable, Renderer2, Inject, ViewEncapsulation, ChangeDetectionStrategy, NgZone, PLATFORM_ID, ViewChild, defineInjectable, NgModule } from '@angular/core';
import { isPlatformBrowser, Location, DOCUMENT, CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _isIE11 = typeof window === 'undefined' ? false : !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
/** @type {?} */
const isEdge = /Edge\/\d./i.test(navigator.userAgent);
/** @type {?} */
const defaultOptions = {
    cursorToolOnLoad: 0,
    defaultUrl: '',
    defaultZoomValue: '',
    disableHistory: false,
    disablePageLabels: false,
    enablePrintAutoRotate: false,
    enableWebGL: false,
    eventBusDispatchToDOM: false,
    externalLinkRel: 'noopener noreferrer nofollow',
    externalLinkTarget: 0,
    historyUpdateUrl: false,
    imageResourcesPath: './images/',
    maxCanvasPixels: 16777216,
    pdfBugEnabled: false,
    removePageBorders: false,
    renderer: 'canvas',
    renderInteractiveForms: false,
    sidebarViewOnLoad: -1,
    scrollModeOnLoad: -1,
    spreadModeOnLoad: -1,
    textLayerMode: 1,
    useOnlyCssZoom: false,
    viewOnLoad: 0,
    cMapPacked: true,
    cMapUrl: '../assets/cmaps/',
    disableAutoFetch: false,
    disableCreateObjectURL: false,
    disableFontFace: false,
    disableRange: false,
    disableStream: false,
    isEvalSupported: true,
    maxImageSize: -1,
    pdfBug: false,
    postMessageTransfers: true,
    verbosity: 1,
    workerPort: null,
    workerSrc: _isIE11 || isEdge ? './assets/pdf.worker-es5.js' : './assets/pdf.worker.js',
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const ServiceWorkerOptions = {
    showUnverifiedSignatures: false
};
if (typeof window !== 'undefined') {
    ((/** @type {?} */ (window))).ServiceWorkerOptions = ServiceWorkerOptions;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const VerbosityLevel = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5,
};
VerbosityLevel[VerbosityLevel.ERRORS] = 'ERRORS';
VerbosityLevel[VerbosityLevel.WARNINGS] = 'WARNINGS';
VerbosityLevel[VerbosityLevel.INFOS] = 'INFOS';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const FindState = {
    FOUND: 0,
    NOT_FOUND: 1,
    WRAPPED: 2,
    PENDING: 3,
};
FindState[FindState.FOUND] = 'FOUND';
FindState[FindState.NOT_FOUND] = 'NOT_FOUND';
FindState[FindState.WRAPPED] = 'WRAPPED';
FindState[FindState.PENDING] = 'PENDING';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * List of all field that can be customized
 * @type {?}
 */
const requiredIds = [
    'toolbarViewer',
    'numPages',
    'pageNumber',
    'scaleSelectContainer',
    'customScaleOption',
    'previous',
    'next',
    'zoomIn',
    'zoomOut',
    'viewFind',
    'openFile',
    'print',
    'presentationMode',
    'download',
    'viewBookmark',
    'secondaryToolbar',
    'secondaryToolbarToggle',
    'secondaryToolbarButtonContainer',
    'secondaryPresentationMode',
    'secondaryOpenFile',
    'secondaryPrint',
    'secondaryDownload',
    'secondaryViewBookmark',
    'firstPage',
    'lastPage',
    'pageRotateCw',
    'pageRotateCcw',
    'cursorSelectTool',
    'cursorHandTool',
    'scrollVertical',
    'scrollHorizontal',
    'scrollWrapped',
    'spreadNone',
    'spreadOdd',
    'spreadEven',
    'documentProperties',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCw',
    'contextPageRotateCcw',
    'outerContainer',
    'viewerContainer',
    'sidebarToggle',
    'viewThumbnail',
    'viewOutline',
    'viewAttachments',
    'thumbnailView',
    'outlineView',
    'attachmentsView',
    'outerContainer',
    'sidebarResizer',
    'findbar',
    'viewFind',
    'findInput',
    'findInputMultiline',
    'findHighlightAll',
    'findMatchCase',
    'findEntireWord',
    'findMultipleSearchTexts',
    'findIgnoreAccents',
    'findMsg',
    'findResultsCount',
    'findPrevious',
    'findNext',
    'passwordOverlay',
    'passwordText',
    'password',
    'passwordSubmit',
    'passwordCancel',
    'documentPropertiesOverlay',
    'documentPropertiesClose',
    'fileNameField',
    'fileSizeField',
    'titleField',
    'authorField',
    'subjectField',
    'keywordsField',
    'creationDateField',
    'modificationDateField',
    'creatorField',
    'producerField',
    'versionField',
    'pageCountField',
    'pageSizeField',
    'linearizedField',
    'errorWrapper',
    'errorMessage',
    'errorClose',
    'errorMoreInfo',
    'errorShowMore',
    'errorShowLess',
    'scaleSelectContainer'
];
class PdfDummyComponentsComponent {
    /**
     * @return {?}
     */
    addMissingStandardWidgets() {
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        /** @type {?} */
        const container = (/** @type {?} */ (this.dummyComponentsContainer));
        if (container) {
            for (let i = 0; i < container.children.length; i++) {
                /** @type {?} */
                const child = container.firstChild;
                if (child) {
                    container.removeChild(child);
                }
            }
        }
        requiredIds.forEach((/**
         * @param {?} id
         * @return {?}
         */
        id => {
            if (this.needsDummyWidget(id)) {
                /** @type {?} */
                const dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                this.dummyComponentsContainer.appendChild(dummy);
            }
        }));
        if (this.needsDummyWidget('scaleSelect')) {
            /** @type {?} */
            const dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    }
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    needsDummyWidget(id) {
        /** @type {?} */
        const widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    }
}
PdfDummyComponentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-dummy-components',
                template: "<span class=\"invisible dummy-pdf-viewer-components\">\n</span>\n"
            }] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfSecondaryToolbarComponent {
    /**
     * @param {?} element
     */
    constructor(element) {
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
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        setTimeout((/**
         * @return {?}
         */
        () => this.checkVisibility()));
    }
    /**
     * @return {?}
     */
    onResize() {
        setTimeout((/**
         * @return {?}
         */
        () => this.checkVisibility()));
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.checkVisibility()));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        setTimeout((/**
         * @return {?}
         */
        () => this.checkVisibility()));
    }
    /**
     * @return {?}
     */
    checkVisibility() {
        /** @type {?} */
        let visibleButtons = 0;
        /** @type {?} */
        const e = (/** @type {?} */ (this.element.nativeElement));
        /** @type {?} */
        const f = e.children.item(0);
        if (f) {
            /** @type {?} */
            const g = f.children.item(0);
            if (g && g instanceof HTMLElement) {
                visibleButtons = this.checkVisibilityRecursively(g);
            }
        }
        this.secondaryMenuIsEmpty.emit(visibleButtons === 0);
    }
    /**
     * @private
     * @param {?} e
     * @return {?}
     */
    checkVisibilityRecursively(e) {
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
        const style = window.getComputedStyle(e);
        if (style.display === 'none') {
            return 0;
        }
        if (e instanceof HTMLButtonElement || e instanceof HTMLAnchorElement) {
            return 1;
        }
        /** @type {?} */
        let count = 0;
        /** @type {?} */
        const children = e.children;
        if (children && children.length) {
            for (let i = 0; i < children.length && count === 0; i++) {
                /** @type {?} */
                const child = children.item(i);
                if (child && child instanceof HTMLElement) {
                    count += this.checkVisibilityRecursively(child);
                }
            }
        }
        return count;
    }
}
PdfSecondaryToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-secondary-toolbar',
                template: "<ng-container [ngTemplateOutlet]=\"customSecondaryToolbar ? customSecondaryToolbar : defaultSecondaryToolbar\"> </ng-container>\n\n<ng-template #defaultSecondaryToolbar>\n  <div\n    id=\"secondaryToolbar\"\n    class=\"secondaryToolbar hidden doorHangerRight\"\n    [style.top]=\"secondaryToolbarTop\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'right top'\"\n  >\n    <div id=\"secondaryToolbarButtonContainer\">\n      <button\n        type=\"button\"\n        id=\"secondaryPresentationMode\"\n        [class.invisible]=\"!showPresentationModeButton\"\n        class=\"secondaryToolbarButton visibleLargeView\"\n        title=\"Switch to Presentation Mode\"\n        data-l10n-id=\"presentation_mode\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\n        </svg>\n        <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryOpenFile\"\n        [class.invisible]=\"!showOpenFileButton\"\n        class=\"secondaryToolbarButton visibleMediumView\"\n        title=\"Open File\"\n        data-l10n-id=\"open_file\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z\" />\n        </svg>\n        <span data-l10n-id=\"open_file_label\">Open</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryPrint\"\n        class=\"secondaryToolbarButton visibleSmallView\"\n        [class.invisible]=\"!showPrintButton\"\n        title=\"Print\"\n        data-l10n-id=\"print\"\n      >\n      <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z\" />\n    </svg>\n        <span data-l10n-id=\"print_label\">Print</span>\n      </button>\n\n      <button\n        type=\"button\"\n        id=\"secondaryDownload\"\n        class=\"secondaryToolbarButton visibleSmallView\"\n        [class.invisible]=\"!showDownloadButton\"\n        title=\"Download\"\n        data-l10n-id=\"download\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\n        </svg>\n        <span data-l10n-id=\"download_label\">Download</span>\n      </button>\n\n      <a\n        href=\"#\"\n        id=\"secondaryViewBookmark\"\n        class=\"secondaryToolbarButton bookmark visibleTinyView\"\n        [class.invisible]=\"!showBookmarkButton\"\n        title=\"Current view (copy or open in new window)\"\n        data-l10n-id=\"bookmark\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z\" />\n        </svg>\n        <span data-l10n-id=\"bookmark_label\">Current View</span>\n      </a>\n\n      <div class=\"horizontalToolbarSeparator visibleLargeView\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"firstPage\"\n        class=\"secondaryToolbarButton firstPage visibleLargeView\"\n        title=\"Go to First Page\"\n        data-l10n-id=\"first_page\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\n        </svg>\n        <span data-l10n-id=\"first_page_label\">Go to First Page</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPagingButtons\"\n        id=\"lastPage\"\n        class=\"secondaryToolbarButton lastPage visibleLargeView\"\n        title=\"Go to Last Page\"\n        data-l10n-id=\"last_page\"\n      >\n        <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z\" />\n        </svg>\n        <span data-l10n-id=\"last_page_label\">Go to Last Page</span>\n      </button>\n\n      <div [class.invisible]=\"!showRotateButton\" class=\"horizontalToolbarSeparator visibleXLView\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showRotateButton\"\n        id=\"pageRotateCw\"\n        class=\"secondaryToolbarButton rotateCw visibleXLView\"\n        title=\"Rotate Clockwise\"\n        data-l10n-id=\"page_rotate_cw\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\n        </svg>\n        <span data-l10n-id=\"page_rotate_cw_label\">Rotate Clockwise</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showRotateButton\"\n        id=\"pageRotateCcw\"\n        class=\"secondaryToolbarButton rotateCcw visibleXLView\"\n        title=\"Rotate Counterclockwise\"\n        data-l10n-id=\"page_rotate_ccw\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\n        </svg>\n        <span data-l10n-id=\"page_rotate_ccw_label\">Rotate Counterclockwise</span>\n      </button>\n\n      <div class=\"horizontalToolbarSeparator visibleXXLView\" [class.invisible]=\"!showHandToolButton\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showHandToolButton\"\n        id=\"cursorSelectTool\"\n        class=\"secondaryToolbarButton toggled visibleXXLView\"\n        title=\"Enable Text Selection Tool\"\n        data-l10n-id=\"cursor_text_select_tool\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\n        </svg>\n        <span data-l10n-id=\"cursor_text_select_tool_label\">Text Selection Tool</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showHandToolButton\"\n        id=\"cursorHandTool\"\n        class=\"secondaryToolbarButton visibleXXLView\"\n        title=\"Enable Hand Tool\"\n        data-l10n-id=\"cursor_hand_tool\"\n      >\n        <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z\" />\n        </svg>\n        <span data-l10n-id=\"cursor_hand_tool_label\">Hand Tool</span>\n      </button>\n\n      <div [class.invisible]=\"!showScrollingButton\" class=\"horizontalToolbarSeparator\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollVertical\"\n        class=\"secondaryToolbarButton scrollVertical toggled\"\n        title=\"Use Vertical Scrolling\"\n        data-l10n-id=\"scroll_vertical\"\n      >\n        <span data-l10n-id=\"scroll_vertical_label\">Vertical Scrolling</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollHorizontal\"\n        class=\"secondaryToolbarButton scrollHorizontal\"\n        title=\"Use Horizontal Scrolling\"\n        data-l10n-id=\"scroll_horizontal\"\n      >\n        <span data-l10n-id=\"scroll_horizontal_label\">Horizontal Scrolling</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showScrollingButton\"\n        id=\"scrollWrapped\"\n        class=\"secondaryToolbarButton scrollWrapped\"\n        title=\"Use Wrapped Scrolling\"\n        data-l10n-id=\"scroll_wrapped\"\n      >\n        <span data-l10n-id=\"scroll_wrapped_label\">Wrapped Scrolling</span>\n      </button>\n\n      <div [class.invisible]=\"!showSpreadButton\" class=\"horizontalToolbarSeparator\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadNone\"\n        class=\"secondaryToolbarButton spreadNone toggled\"\n        title=\"Do not join page spreads\"\n        data-l10n-id=\"spread_none\"\n        (click)=\"onSpreadChange('off')\"\n      >\n        <span data-l10n-id=\"spread_none_label\">No Spreads</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadOdd\"\n        class=\"secondaryToolbarButton spreadOdd\"\n        title=\"Join page spreads starting with odd-numbered pages\"\n        data-l10n-id=\"spread_odd\"\n        (click)=\"onSpreadChange('odd')\"\n      >\n        <span data-l10n-id=\"spread_odd_label\">Odd Spreads</span>\n      </button>\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showSpreadButton\"\n        id=\"spreadEven\"\n        class=\"secondaryToolbarButton spreadEven\"\n        title=\"Join page spreads starting with even-numbered pages\"\n        data-l10n-id=\"spread_even\"\n        (click)=\"onSpreadChange('even')\"\n      >\n        <span data-l10n-id=\"spread_even_label\">Even Spreads</span>\n      </button>\n\n      <div [class.invisible]=\"!showPropertiesButton\" class=\"horizontalToolbarSeparator spreadModeButtons\"></div>\n\n      <button\n        type=\"button\"\n        [class.invisible]=\"!showPropertiesButton\"\n        id=\"documentProperties\"\n        class=\"secondaryToolbarButton documentProperties\"\n        title=\"Document Properties\u2026\"\n        data-l10n-id=\"document_properties\"\n      >\n        <span data-l10n-id=\"document_properties_label\">Document Properties\u2026</span>\n      </button>\n    </div>\n  </div>\n</ng-template>\n",
                styles: ["svg{position:absolute;display:inline-block;top:0;left:0}"]
            }] }
];
/** @nocollapse */
PdfSecondaryToolbarComponent.ctorParameters = () => [
    { type: ElementRef }
];
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PDFNotificationService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
    }
}
PDFNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PDFNotificationService.ngInjectableDef = defineInjectable({ factory: function PDFNotificationService_Factory() { return new PDFNotificationService(); }, token: PDFNotificationService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const PdfCursorTools = {
    SELECT: 0,
    HAND: 1,
    ZOOM: 2,
};
PdfCursorTools[PdfCursorTools.SELECT] = 'SELECT';
PdfCursorTools[PdfCursorTools.HAND] = 'HAND';
PdfCursorTools[PdfCursorTools.ZOOM] = 'ZOOM';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
if (typeof window !== 'undefined') {
    ((/** @type {?} */ (window))).deburr = deburr; // #177
}
class NgxExtendedPdfViewerComponent {
    /**
     * @param {?} ngZone
     * @param {?} platformId
     * @param {?} notificationService
     * @param {?} location
     */
    constructor(ngZone, platformId, notificationService, location) {
        this.ngZone = ngZone;
        this.platformId = platformId;
        this.notificationService = notificationService;
        this.location = location;
        this.customFindbarButtons = undefined;
        this.srcChange = new EventEmitter();
        this.contextMenuAllowed = true;
        this.afterPrint = new EventEmitter();
        this.beforePrint = new EventEmitter();
        this.currentZoomFactor = new EventEmitter();
        this.enablePrint = true;
        /**
         * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
         * Most users can let this parameter safely at it's default value of zero.
         * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
         * after the PDF files, so they are not available when the PDF viewer is initialized).
         */
        this.delayFirstView = 0;
        /**
         * How many log messages should be printed?
         * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0)
         */
        this.logLevel = VerbosityLevel.WARNINGS;
        this.primaryMenuVisible = true;
        /**
         * option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
         * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash.
         */
        this.printResolution = null;
        this.rotationChange = new EventEmitter();
        this.minHeight = undefined;
        this._height = '100%';
        /**
         * If this flag is true, this components adds a link to the locale assets. The pdf viewer
         * sees this link and uses it to load the locale files automatically.
         * @param useBrowserLocale boolean
         */
        this.useBrowserLocale = false;
        this.backgroundColor = '#e8e8eb';
        /**
         * Allows the user to define the name of the file after clicking "download"
         */
        this.filenameForDownload = 'document.pdf';
        /**
         * Allows the user to disable the keyboard bindings completely
         */
        this.ignoreKeyboard = false;
        /**
         * Allows the user to disable a list of key bindings.
         */
        this.ignoreKeys = [];
        /**
         * Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored.
         */
        this.acceptKeys = [];
        /**
         * Allows the user to put the viewer's svg images into an arbitrary folder
         */
        this.imageResourcesPath = './assets/images/';
        /**
         * Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
         */
        this.language = undefined;
        /**
         * By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router
         */
        this.listenToURL = false;
        /**
         * Navigate to a certain "named destination"
         */
        this.nameddest = undefined;
        /**
         * allows you to pass a password to read password-protected files
         */
        this.password = undefined;
        this._showSidebarButton = true;
        this.viewerPositionTop = '32px';
        /**
         * pdf.js can show signatures, but fails to verify them. So they are switched off by default.
         * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
         */
        this.showUnverifiedSignatures = false;
        /**
         * If [showSideBarButton]="true", do you want the sidebar to be shown by default ([showSidebarOnLoad])="true")
         * or not? By default, this flag is undefined, telling the PDF viewer to use the last setting used with this particular
         * document, or to hide the sidebar if the document is opened for the first time.
         * @deprecated Use showSidebar instead; dreprecated since 1.8.0; to be removed with 2.0.0
         */
        this.showSidebarOnLoad = undefined;
        this.sidebarVisible = undefined;
        this.sidebarVisibleChange = new EventEmitter();
        this.showFindButton = undefined;
        this.showPagingButtons = true;
        this.showZoomButtons = true;
        this.showPresentationModeButton = false;
        this.showOpenFileButton = true;
        this.showPrintButton = true;
        this.showDownloadButton = true;
        this.showBookmarkButton = true;
        this.showSecondaryToolbarButton = true;
        /**
         * Set by the event (secondaryMenuIsEmpty)
         */
        this.hideKebabMenuForSecondaryToolbar = false;
        this.showRotateButton = true;
        this.handTool = true;
        this.handToolChange = new EventEmitter();
        this.showHandToolButton = false;
        this.showScrollingButton = true;
        this.showSpreadButton = true;
        this.showPropertiesButton = true;
        this.showBorders = false;
        this.spreadChange = new EventEmitter();
        this.page = undefined;
        this.pageChange = new EventEmitter();
        this.pageLabel = undefined;
        this.pageLabelChange = new EventEmitter();
        this.pagesLoaded = new EventEmitter();
        this.pageRendered = new EventEmitter();
        this.pdfDownloaded = new EventEmitter();
        this.pdfLoaded = new EventEmitter();
        this.pdfLoadingFailed = new EventEmitter();
        this.textLayer = undefined;
        /**
         * deprecated
         */
        this.textlayerRendered = new EventEmitter();
        this.textLayerRendered = new EventEmitter();
        this.updateFindMatchesCount = new EventEmitter();
        this.updateFindState = new EventEmitter();
        /**
         * Legal values: undefined, 'auto', 'page-actual', 'page_fit', 'page-width', or '50' (or any other percentage)
         */
        this.zoom = undefined;
        this.zoomChange = new EventEmitter();
        /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        this._mobileFriendlyZoom = '100%';
        this.mobileFriendlyZoomScale = 1;
        this.toolbarPaddingTop = '0px';
        this.toolbarWidth = '100%';
        this.toolbarWidthInPixels = 100;
        this.secondaryToolbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarTop = undefined;
        // dirty IE11 hack - temporary solution
        this.findbarLeft = undefined;
        this._top = undefined;
        if (isPlatformBrowser(this.platformId)) {
            if (!window['pdfjs-dist/build/pdf']) {
                /** @type {?} */
                const isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
                /** @type {?} */
                const isEdge = /Edge\/\d./i.test(navigator.userAgent);
                /** @type {?} */
                const script = document.createElement('script');
                script.src = this.location.normalize(isIE || isEdge ? 'assets/pdf-es5.js' : 'assets/pdf.js');
                script.type = 'text/javascript';
                script.async = true;
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            if (!((/** @type {?} */ (window))).webViewerLoad) {
                this.loadViewer();
            }
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set src(url) {
        if (url instanceof Uint8Array) {
            this._src = url.buffer;
        }
        else if (url instanceof Blob) {
            this._src = URL.createObjectURL(url);
        }
        else if (typeof url === 'string') {
            this._src = url;
            if (url.length > 980) {
                // minimal length of a base64 encoded PDF
                if (url.length % 4 === 0) {
                    if (/^[a-zA-Z\d\/+]+={0,2}$/.test(url)) {
                        console.error('The URL looks like a base64 encoded string. If so, please use the attribute base64 instead of src');
                    }
                }
            }
        }
        else {
            this._src = url;
        }
    }
    /**
     * @param {?} base64
     * @return {?}
     */
    set base64Src(base64) {
        /** @type {?} */
        const binary_string = window.atob(base64);
        /** @type {?} */
        const len = binary_string.length;
        /** @type {?} */
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
            bytes[i] = binary_string.charCodeAt(i);
        }
        this.src = bytes.buffer;
    }
    /**
     * @param {?} h
     * @return {?}
     */
    set height(h) {
        this.minHeight = undefined;
        if (h) {
            this._height = h;
        }
        else {
            this.height = '100%';
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.checkHeight();
        }));
    }
    /**
     * @return {?}
     */
    get height() {
        return this._height;
    }
    /**
     * @return {?}
     */
    get showSidebarButton() {
        return this._showSidebarButton;
    }
    /**
     * @param {?} show
     * @return {?}
     */
    set showSidebarButton(show) {
        this._showSidebarButton = show;
        /** @type {?} */
        const isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
        /** @type {?} */
        let factor = 1;
        if (isIE) {
            factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
        }
        if (this._showSidebarButton) {
            this.findbarLeft = (68 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
    }
    /**
     * @return {?}
     */
    get mobileFriendlyZoom() {
        return this._mobileFriendlyZoom;
    }
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     * @param {?} zoom
     * @return {?}
     */
    set mobileFriendlyZoom(zoom) {
        // tslint:disable-next-line:triple-equals - the type conversion is intended
        if (zoom == 'true') {
            zoom = '150%';
            // tslint:disable-next-line:triple-equals - the type conversion is intended
        }
        else if (zoom == 'false' || zoom === undefined || zoom === null) {
            zoom = '100%';
        }
        this._mobileFriendlyZoom = zoom;
        /** @type {?} */
        let factor = 1;
        if (!String(zoom).includes('%')) {
            zoom = 100 * Number(zoom) + '%';
        }
        factor = Number((zoom || '100').replace('%', '')) / 100;
        this.mobileFriendlyZoomScale = factor;
        this.toolbarWidth = (100 / factor).toString() + '%';
        this.toolbarPaddingTop = (factor - 1) * 8 + 'px';
        if (this.showSidebarButton) {
            this.findbarLeft = (68 * factor).toString() + 'px';
        }
        else {
            this.findbarLeft = '0px';
        }
        this.secondaryToolbarTop = (36 + 36 * (factor - 1)).toString() + 'px';
        this.findbarTop = (36 + 116 * (factor - 1)).toString() + 'px';
    }
    /**
     * Deprecated. Please use [mobileFriendlyZoom] instead.
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     * @param {?} mobileFriendlyZoom
     * @return {?}
     */
    set mobileZoom(mobileFriendlyZoom) {
        this.mobileFriendlyZoom = mobileFriendlyZoom;
    }
    /**
     * @return {?}
     */
    get sidebarPositionTop() {
        if (this._top) {
            return this._top;
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                const zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                return (2 + 0.29 * zoom).toString() + 'px';
            }
            if (this.mobileFriendlyZoom.endsWith('px')) {
                return this.mobileFriendlyZoom;
            }
            return (16 + 0.16 * Number(this.mobileFriendlyZoom)).toString() + 'px';
        }
        return '32px';
    }
    /**
     * @return {?}
     */
    calcViewerPositionTop() {
        if (this._top) {
            this.viewerPositionTop = this._top;
            return;
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                const zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                if (!this.isPrimaryMenuVisible()) {
                    this.viewerPositionTop = '0';
                }
                else {
                    this.viewerPositionTop = (1 + 0.32 * zoom).toString() + 'px';
                }
                return;
            }
            if (this.mobileFriendlyZoom.endsWith('px')) {
                this.viewerPositionTop = this.mobileFriendlyZoom;
                return;
            }
        }
        if (this.isPrimaryMenuVisible()) {
            this.viewerPositionTop = '32px';
        }
        else {
            this.viewerPositionTop = '0';
        }
    }
    /**
     * @private
     * @return {?}
     */
    loadViewer() {
        if (!window['pdfjs-dist/build/pdf']) {
            setTimeout((/**
             * @return {?}
             */
            () => this.loadViewer()), 25);
        }
        else {
            /** @type {?} */
            const isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
            /** @type {?} */
            const isEdge = /Edge\/\d./i.test(navigator.userAgent);
            /** @type {?} */
            const script2 = document.createElement('script');
            script2.src = this.location.normalize(isIE || isEdge ? 'assets/viewer-es5.js' : 'assets/viewer.js');
            script2.type = 'text/javascript';
            script2.async = true;
            document.getElementsByTagName('head')[0].appendChild(script2);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    emitZoomChange(value) {
        this.zoomChange.emit(value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.onResize();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (((/** @type {?} */ (window))).webViewerLoad) {
            this.doInitPDFViewer();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            () => this.ngAfterViewInit()), 50);
        }
    }
    /**
     * @private
     * @return {?}
     */
    assignTabindexes() {
        if (this.startTabindex) {
            /** @type {?} */
            const r = (/** @type {?} */ (this.root.nativeElement.cloneNode(true)));
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            /** @type {?} */
            const elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            /** @type {?} */
            const sorted = elements.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            }));
            for (let i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    }
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    showElementsRecursively(root) {
        root.classList.remove('hidden');
        root.classList.remove('invisible');
        root.classList.remove('hiddenXXLView');
        root.classList.remove('hiddenXLView');
        root.classList.remove('hiddenLargeView');
        root.classList.remove('hiddenMediumView');
        root.classList.remove('hiddenSmallView');
        root.classList.remove('hiddenTinyView');
        root.classList.remove('visibleXXLView');
        root.classList.remove('visibleXLView');
        root.classList.remove('visibleLargeView');
        root.classList.remove('visibleMediumView');
        root.classList.remove('visibleSmallView');
        root.classList.remove('visibleTinyView');
        if (root instanceof HTMLButtonElement || root instanceof HTMLAnchorElement || root instanceof HTMLInputElement || root instanceof HTMLSelectElement) {
            return;
        }
        else if (root.childElementCount > 0) {
            for (let i = 0; i < root.childElementCount; i++) {
                /** @type {?} */
                const c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    }
    /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    collectElementPositions(copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            /** @type {?} */
            const rect = copy.getBoundingClientRect();
            /** @type {?} */
            const elementAndPos = (/** @type {?} */ ({
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            }));
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (let i = 0; i < copy.childElementCount; i++) {
                /** @type {?} */
                const c = copy.children.item(i);
                /** @type {?} */
                const o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    }
    /**
     * @private
     * @return {?}
     */
    doInitPDFViewer() {
        /** @type {?} */
        const langLinks = document.querySelectorAll('link[type="application/l10n"]');
        /** @type {?} */
        const langCount = langLinks.length;
        if (langCount === 0) {
            /** @type {?} */
            const dict = document.querySelector('script[type="application/l10n"]');
            if (!dict) {
                if (!this.useBrowserLocale) {
                    console.error(
                    // tslint:disable-next-line:quotemark
                    "If you set the attribute 'useBrowserLocale' to false, you must provide the translations yourself in a script or link tag.");
                    console.error('The easiest way to do this is to add them to the index.html.');
                }
            }
            else if (this.useBrowserLocale) {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        else if (this.useBrowserLocale) {
            /** @type {?} */
            const o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        /** @type {?} */
        const callback = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
            document.removeEventListener('localized', callback);
            this.initTimeout = setTimeout((/**
             * @return {?}
             */
            () => {
                this.afterLibraryInit();
                this.openPDF();
                this.assignTabindexes();
            }), this.delayFirstView);
        });
        window.addEventListener('afterprint', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.afterPrint.emit();
        }));
        window.addEventListener('beforeprint', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            this.beforePrint.emit();
        }));
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        /** @type {?} */
        const onLoaded = (/**
         * @return {?}
         */
        () => {
            this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
        });
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout((/**
         * @return {?}
         */
        () => {
            // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
            this.primaryMenuVisible = true;
            /** @type {?} */
            const showSecondaryMenu = this.hideKebabMenuForSecondaryToolbar && this.showSecondaryToolbarButton;
            if (showSecondaryMenu) {
                if (!this.isPrimaryMenuVisible()) {
                    this.primaryMenuVisible = false;
                }
            }
            this.calcViewerPositionTop();
            this.dummyComponents.addMissingStandardWidgets();
            ((/** @type {?} */ (window))).webViewerLoad();
            /** @type {?} */
            const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
            PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
            PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
            /** @type {?} */
            const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('locale', this.language);
            PDFViewerApplicationOptions.set('imageResourcesPath', this.imageResourcesPath);
            PDFViewerApplication.isViewerEmbedded = true;
            if (PDFViewerApplication.printKeyDownListener) {
                window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            /** @type {?} */
            const pc = document.getElementById('printContainer');
            if (pc) {
                document.getElementsByTagName('body')[0].appendChild(pc);
            }
        }), 0);
    }
    /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    afterLibraryInit() {
        this.notificationService.onPDFJSInit.next();
    }
    /**
     * @return {?}
     */
    checkHeight() {
        /** @type {?} */
        const container = document.getElementsByClassName('zoom')[0];
        if (container.clientHeight === 0 && this._height.includes('%')) {
            /** @type {?} */
            const available = window.innerHeight;
            /** @type {?} */
            const rect = container.getBoundingClientRect();
            /** @type {?} */
            const top = rect.top;
            /** @type {?} */
            let mh = available - top;
            /** @type {?} */
            const factor = Number(this._height.replace('%', ''));
            mh = (mh * factor) / 100;
            if (mh > 100) {
                this.minHeight = mh + 'px';
            }
            else {
                this.minHeight = '100px';
            }
        }
    }
    /**
     * @param {?} newSpread
     * @return {?}
     */
    onSpreadChange(newSpread) {
        this.spreadChange.emit(newSpread);
    }
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    activateTextlayerIfNecessary(options) {
        if (this.textLayer === undefined) {
            if (!this.handTool) {
                if (options) {
                    options.set('textLayerMode', 1);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        // todo remove this hack:
                        /** @type {?} */
                        const viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        const findbar = (/** @type {?} */ (document.getElementById('findbar')));
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    }));
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', this.showHandToolButton ? 1 : 0);
                }
                if (!this.showHandToolButton) {
                    if (this.showFindButton || this.showFindButton === undefined) {
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            this.showFindButton = false;
                        }));
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        }
                    }
                    if (this.showHandToolButton) {
                        if (this.logLevel >= VerbosityLevel.WARNINGS) {
                            console.warn(
                            // tslint:disable-next-line:max-line-length
                            'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                            this.showHandToolButton = false;
                        }
                    }
                }
            }
        }
        else {
            if (this.textLayer) {
                if (options) {
                    options.set('textLayerMode', 1);
                }
                this.textLayer = true;
                if (this.showFindButton === undefined) {
                    this.showFindButton = true;
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        // todo remove this hack:
                        /** @type {?} */
                        const viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        const findbar = (/** @type {?} */ (document.getElementById('findbar')));
                        if (findbar) {
                            findbar.classList.remove('invisible');
                        }
                    }));
                }
            }
            else {
                if (options) {
                    options.set('textLayerMode', 0);
                }
                this.textLayer = false;
                if (this.showFindButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        // tslint:disable-next-line:max-line-length
                        console.warn('Hiding the "find" button because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the find button.');
                        this.ngZone.run((/**
                         * @return {?}
                         */
                        () => {
                            this.showFindButton = false;
                        }));
                    }
                }
                if (this.showHandToolButton) {
                    if (this.logLevel >= VerbosityLevel.WARNINGS) {
                        console.warn(
                        // tslint:disable-next-line:max-line-length
                        'Hiding the "hand tool / selection mode" menu because the text layer of the PDF file is not rendered. Use [textLayer]="true" to enable the the menu items.');
                        this.showHandToolButton = false;
                    }
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    overrideDefaultSettings() {
        /** @type {?} */
        const options = (/** @type {?} */ (((/** @type {?} */ (window))).PDFViewerApplicationOptions));
        // tslint:disable-next-line:forin
        for (const key in defaultOptions) {
            options.set(key, defaultOptions[key]);
        }
        options.set('disablePreferences', true);
        this.setZoom();
        options.set('ignoreKeyboard', this.ignoreKeyboard);
        options.set('ignoreKeys', this.ignoreKeys);
        options.set('acceptKeys', this.acceptKeys);
        this.activateTextlayerIfNecessary(options);
        /** @type {?} */
        let sidebarVisible = this.sidebarVisible;
        if (sidebarVisible === undefined) {
            sidebarVisible = this.showSidebarOnLoad;
        }
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (sidebarVisible !== undefined) {
            PDFViewerApplication.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            if (PDFViewerApplication.appConfig) {
                PDFViewerApplication.appConfig.sidebarViewOnLoad = sidebarVisible ? 1 : 0;
            }
            options.set('sidebarViewOnLoad', this.sidebarVisible ? 1 : 0);
        }
        if (this.spread === 'even') {
            options.set('spreadModeOnLoad', 2);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 2;
            }
            this.onSpreadChange('even');
        }
        else if (this.spread === 'odd') {
            options.set('spreadModeOnLoad', 1);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 1;
            }
            this.onSpreadChange('odd');
        }
        else {
            options.set('spreadModeOnLoad', 0);
            if (PDFViewerApplication.pdfViewer) {
                PDFViewerApplication.pdfViewer.spreadMode = 0;
            }
            this.onSpreadChange('off');
        }
        if (this.printResolution) {
            options.set('printResolution', this.printResolution);
        }
        if (this.showBorders) {
            options.set('showBorders', this.showBorders);
        }
    }
    /**
     * @private
     * @return {?}
     */
    openPDF() {
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.enablePrint = this.enablePrint;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = true;
        this.onResize();
        if (!this.listenToURL) {
            PDFViewerApplication.pdfLinkService.setHash = (/**
             * @return {?}
             */
            function () { });
        }
        this.initTimeout = null;
        this.selectCursorTool();
        PDFViewerApplication.eventBus.on('textlayerrendered', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.textlayerRendered.emit(x); // deprecated - kept to avoid a breaking change
            this.textLayerRendered.emit(x);
        }));
        PDFViewerApplication.eventBus.on('pagesloaded', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.pagesLoaded.emit(x);
            if (this.rotation) {
                /** @type {?} */
                const r = Number(this.rotation);
                if (r === 0 || r === 90 || r === 180 || r === 270) {
                    PDFViewerApplication.pdfViewer.pagesRotation = r;
                }
            }
            else {
                PDFViewerApplication.pdfViewer.pagesRotation = 0;
            }
            setTimeout((/**
             * @return {?}
             */
            () => {
                if (this.nameddest) {
                    PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                }
                else if (this.page) {
                    PDFViewerApplication.page = Number(this.page);
                }
                else if (this.pageLabel) {
                    PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                }
            }));
            this.setZoom();
        }));
        PDFViewerApplication.eventBus.on('pagerendered', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.pageRendered.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('download', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.pdfDownloaded.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('scalechanging', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.currentZoomFactor.emit(x.scale);
                        if (this.zoom !== 'auto' && this.zoom !== 'page-fit' && this.zoom !== 'page-actual' && this.zoom !== 'page-width') {
                            this.emitZoomChange(x.scale * 100);
                        }
                    }));
                }));
            }));
        }));
        PDFViewerApplication.eventBus.on('rotationchanging', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.rotationChange.emit(x.pagesRotation);
            }));
        }));
        PDFViewerApplication.eventBus.on('fileinputchange', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const path = x.fileInput.value.replace('C:\\fakepath\\', '');
                this.srcChange.emit(path);
            }));
        }));
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
            }));
        }));
        PDFViewerApplication.eventBus.on('sidebarviewchanged', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                this.sidebarVisibleChange.emit(x.view === 1);
            }));
        }));
        PDFViewerApplication.eventBus.on('updatefindcontrolstate', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (this.updateFindMatchesCount) {
                if (x.state === FindState.NOT_FOUND) {
                    this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
            if (this.updateFindState) {
                this.updateFindState.emit(x.state);
            }
        }));
        PDFViewerApplication.eventBus.on('updatefindmatchescount', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            if (this.updateFindMatchesCount) {
                if (x.matchesCount.total) {
                    this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
        }));
        PDFViewerApplication.eventBus.on('pagechanging', (/**
         * @param {?} x
         * @return {?}
         */
        (x) => {
            this.ngZone.run((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                /** @type {?} */
                const currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                this.pageChange.emit(currentPage);
                this.pageLabelChange.emit(currentPageLabel);
            }));
        }));
        this.checkHeight();
        // open a file in the viewer
        if (!!this._src) {
            /** @type {?} */
            const options = {
                password: this.password,
                verbosity: this.logLevel,
            };
            PDFViewerApplication.onError = (/**
             * @param {?} error
             * @return {?}
             */
            (error) => this.pdfLoadingFailed.emit(error));
            PDFViewerApplication.open(this._src, options).then((/**
             * @return {?}
             */
            () => this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount })));
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.page) {
                PDFViewerApplication.page = Number(this.page);
            }
        }), 100);
    }
    /**
     * @private
     * @return {?}
     */
    selectCursorTool() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
        if (this.initTimeout) {
            clearTimeout(this.initTimeout);
            this.initTimeout = undefined;
        }
        if (PDFViewerApplication) {
            PDFViewerApplication.cleanup();
            PDFViewerApplication.close();
            if (PDFViewerApplication.printKeyDownListener) {
                removeEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            if (PDFViewerApplication._boundEvents) {
                PDFViewerApplication.unbindWindowEvents();
            }
            /** @type {?} */
            const bus = PDFViewerApplication.eventBus;
            if (bus) {
                PDFViewerApplication.unbindEvents();
                for (const key in bus._listeners) {
                    if (bus._listeners[key]) {
                        /** @type {?} */
                        const list = bus._listeners[key];
                        // not sure if the for loop is necessary - but
                        // it might improve garbage collection if the "listeners"
                        // array is stored somewhere else
                        for (let i = 0; i < list.length; i++) {
                            list[i] = undefined;
                        }
                        bus._listeners[key] = undefined;
                    }
                }
            }
            ((/** @type {?} */ (PDFViewerApplication.eventBus))) = null;
        }
        /** @type {?} */
        const body = document.getElementsByTagName('body');
        if (body[0]) {
            /** @type {?} */
            const topLevelElements = body[0].children;
            for (let i = topLevelElements.length - 1; i >= 0; i--) {
                /** @type {?} */
                const e = topLevelElements.item(i);
                if (e && e.id === 'printContainer') {
                    body[0].removeChild(e);
                }
                else if (e && e.id === 'fileInput') {
                    body[0].removeChild(e);
                }
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    isPrimaryMenuVisible() {
        /** @type {?} */
        const visible = this.showBookmarkButton ||
            this.showDownloadButton ||
            this.showFindButton ||
            this.showOpenFileButton ||
            this.showPagingButtons ||
            this.showPresentationModeButton ||
            this.showPrintButton ||
            this.showPropertiesButton ||
            this.showSidebarButton ||
            this.showZoomButtons;
        if (visible) {
            return true;
        }
        return false;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            if ('src' in changes || 'base64Src' in changes) {
                if (!!this._src) {
                    this.overrideDefaultSettings();
                    PDFViewerApplication.open(this._src).then((/**
                     * @return {?}
                     */
                    () => this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount })), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    (error) => this.pdfLoadingFailed.emit(error)));
                }
            }
            if ('zoom' in changes) {
                this.setZoom();
            }
            if ('handTool' in changes) {
                this.selectCursorTool();
            }
            if ('page' in changes) {
                if (this.page) {
                    PDFViewerApplication.page = this.page;
                }
            }
            if ('pageLabel' in changes) {
                if (this.pageLabel) {
                    PDFViewerApplication.pdfViewer.currentPageLabel = this.pageLabel;
                }
            }
            if ('rotation' in changes) {
                if (this.rotation) {
                    /** @type {?} */
                    const r = Number(this.rotation);
                    if (r === 0 || r === 90 || r === 180 || r === 270) {
                        PDFViewerApplication.pdfViewer.pagesRotation = r;
                    }
                }
                else {
                    PDFViewerApplication.pdfViewer.pagesRotation = 0;
                }
            }
            if ('sidebarVisible' in changes) {
                if (this.sidebarVisible) {
                    PDFViewerApplication.pdfSidebar.open();
                }
                else {
                    PDFViewerApplication.pdfSidebar.close();
                }
            }
            if ('filenameForDownload' in changes) {
                PDFViewerApplication.appConfig.filenameForDownload = this.filenameForDownload;
            }
            if ('nameddest' in changes) {
                if (this.nameddest) {
                    PDFViewerApplication.pdfLinkService.navigateTo(this.nameddest);
                }
            }
            if ('spread' in changes) {
                if (this.spread === 'even') {
                    PDFViewerApplication.spreadModeOnLoad = 2;
                    PDFViewerApplication.pdfViewer.spreadMode = 2;
                    this.onSpreadChange('even');
                }
                else if (this.spread === 'odd') {
                    PDFViewerApplication.spreadModeOnLoad = 1;
                    PDFViewerApplication.pdfViewer.spreadMode = 1;
                    this.onSpreadChange('odd');
                }
                else {
                    PDFViewerApplication.spreadModeOnLoad = 0;
                    PDFViewerApplication.pdfViewer.spreadMode = 0;
                    this.onSpreadChange('off');
                }
            }
            this.primaryMenuVisible = true;
            if (!this.showSecondaryToolbarButton || !this.hideKebabMenuForSecondaryToolbar) {
                if (!this.isPrimaryMenuVisible()) {
                    this.primaryMenuVisible = false;
                }
            }
            this.calcViewerPositionTop();
        }
        this.onResize();
        if ('printResolution' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            /** @type {?} */
            const options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                /** @type {?} */
                const options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    /** @type {?} */
                    const viewer = (/** @type {?} */ (document.getElementById('viewer')));
                    if (this.showBorders) {
                        viewer.classList.remove('removePageBorders');
                    }
                    else {
                        viewer.classList.add('removePageBorders');
                    }
                    if (PDFViewerApplication.pdfViewer) {
                        PDFViewerApplication.pdfViewer.removePageBorders = !this.showBorders;
                    }
                    /** @type {?} */
                    const zoomEvent = (/** @type {?} */ ({
                        source: viewer,
                        // tslint:disable-next-line:no-bitwise
                        scale: (Number(this.zoom) | 100) / 100,
                        presetValue: this.zoom,
                    }));
                    PDFViewerApplication.eventBus.dispatch('scalechanging', zoomEvent);
                }
            }
        }
        if ('showUnverifiedSignatures' in changes) {
            if (PDFViewerApplication && PDFViewerApplication.pdfDocument) {
                PDFViewerApplication.pdfDocument._transport.messageHandler.send('showUnverifiedSignatures', this.showUnverifiedSignatures);
            }
        }
        if ('enablePrint' in changes) {
            if (!changes['enablePrint'].isFirstChange()) {
                PDFViewerApplication.enablePrint = this.enablePrint;
            }
        }
        if (('customFindbar' in changes && !changes['customFindbar'].isFirstChange()) ||
            ('customFindbarButtons' in changes && !changes['customFindbarButtons'].isFirstChange()) ||
            ('customFindbarInputArea' in changes && !changes['customFindbarInputArea'].isFirstChange()) ||
            ('customToolbar' in changes && !changes['customToolbar'].isFirstChange())) {
            if (this.dummyComponents) {
                this.dummyComponents.addMissingStandardWidgets();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    setZoom() {
        /** @type {?} */
        let zoomAsNumber = this.zoom;
        if (String(zoomAsNumber).endsWith('%')) {
            zoomAsNumber = Number(String(zoomAsNumber).replace('%', '')) / 100;
        }
        else if (!isNaN(Number(zoomAsNumber))) {
            zoomAsNumber = Number(zoomAsNumber) / 100;
        }
        if (!zoomAsNumber) {
            zoomAsNumber = 'auto';
        }
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication) {
            /** @type {?} */
            const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
        }
        if (PDFViewerApplication.pdfViewer) {
            PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber;
        }
    }
    /**
     * @return {?}
     */
    onResize() {
        /** @type {?} */
        const pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            /** @type {?} */
            const container = document.getElementById('outerContainer');
            if (container) {
                /** @type {?} */
                const width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
        }
    }
    /**
     * @return {?}
     */
    onContextMenu() {
        return this.contextMenuAllowed;
    }
    /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    onSecondaryMenuIsEmpty(hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
    }
}
NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized = false;
NgxExtendedPdfViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-extended-pdf-viewer',
                template: "<link *ngIf=\"useBrowserLocale\" rel=\"resource\" type=\"application/l10n\" href=\"assets/locale/locale.properties\" origin=\"ngx-extended-pdf-viewer\" />\n<pdf-dynamic-css [zoom]=\"mobileFriendlyZoomScale\" [width]=\"toolbarWidthInPixels\"></pdf-dynamic-css>\n<div class=\"zoom\" [style.height]=\"height\" [style.minHeight]=\"minHeight\" #root>\n  <div class=\"html\">\n    <div class=\"loadingInProgress body\" [style.backgroundColor]=\"backgroundColor\">\n      <div id=\"outerContainer\" (window:resize)=\"onResize()\">\n        <pdf-sidebar [sidebarPositionTop]=\"sidebarPositionTop\" [showSidebarButton]=\"showSidebarButton\"></pdf-sidebar>\n        <div id=\"mainContainer\">\n          <pdf-dummy-components></pdf-dummy-components>\n\n          <pdf-toolbar\n            [customToolbar]=\"customToolbar\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [primaryMenuVisible]=\"primaryMenuVisible\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showFindButton]=\"showFindButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showRotateButton]=\"showRotateButton\"\n            [showSecondaryToolbarButton]=\"showSecondaryToolbarButton && !hideKebabMenuForSecondaryToolbar\"\n            [showSidebarButton]=\"showSidebarButton\"\n            [showZoomButtons]=\"showZoomButtons\"\n            [textLayer]=\"textLayer\"\n            [toolbarPaddingTop]=\"toolbarPaddingTop\"\n            [toolbarWidth]=\"toolbarWidth\"\n            (zoomChange)=\"emitZoomChange($event)\"\n\n          ></pdf-toolbar>\n\n          <pdf-secondary-toolbar #pdfSecondaryToolbarComponent\n            [customSecondaryToolbar]=\"customSecondaryToolbar\"\n            [secondaryToolbarTop]=\"secondaryToolbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showPresentationModeButton]=\"showPresentationModeButton\"\n            [showOpenFileButton]=\"showOpenFileButton\"\n            [showPrintButton]=\"showPrintButton && enablePrint\"\n            [showDownloadButton]=\"showDownloadButton\"\n            [showBookmarkButton]=\"showBookmarkButton\"\n            [showPagingButtons]=\"showPagingButtons\"\n            [showRotateButton]=\"showRotateButton\"\n            [showHandToolButton]=\"showHandToolButton\"\n            [showScrollingButton]=\"showScrollingButton\"\n            [showSpreadButton]=\"showSpreadButton\"\n            [showPropertiesButton]=\"showPropertiesButton\"\n            (spreadChange)=\"onSpreadChange($event)\"\n            (secondaryMenuIsEmpty)=\"onSecondaryMenuIsEmpty($event)\"\n          >\n          </pdf-secondary-toolbar>\n\n          <pdf-findbar\n            [findbarLeft]=\"findbarLeft\"\n            [findbarTop]=\"findbarTop\"\n            [mobileFriendlyZoomScale]=\"mobileFriendlyZoomScale\"\n            [showFindButton]=\"showFindButton\"\n            [customFindbarInputArea]=\"customFindbarInputArea\"\n            [customFindbarButtons]=\"customFindbarButtons\"\n          >\n          </pdf-findbar>\n\n          <pdf-context-menu></pdf-context-menu>\n\n          <div id=\"viewerContainer\" [style.top]=\"viewerPositionTop\">\n            <div id=\"viewer\" class=\"pdfViewer\" [style.backgroundColor]=\"backgroundColor\"></div>\n          </div>\n\n          <div id=\"errorWrapper\" hidden=\"true\">\n            <div id=\"errorMessageLeft\">\n              <span id=\"errorMessage\"></span>\n              <button type=\"button\" id=\"errorShowMore\" data-l10n-id=\"error_more_info\">\n                More Information\n              </button>\n              <button type=\"button\" id=\"errorShowLess\" data-l10n-id=\"error_less_info\" hidden=\"true\">\n                Less Information\n              </button>\n            </div>\n            <div id=\"errorMessageRight\">\n              <button type=\"button\" id=\"errorClose\" data-l10n-id=\"error_close\">Close</button>\n            </div>\n            <div class=\"clearBoth\"></div>\n            <textarea id=\"errorMoreInfo\" hidden=\"true\" readonly=\"readonly\"></textarea>\n          </div>\n        </div>\n        <!-- mainContainer -->\n\n        <div id=\"overlayContainer\" class=\"hidden\">\n          <div id=\"passwordOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <p id=\"passwordText\" data-l10n-id=\"password_label\">\n                  Enter the password to open this PDF file:\n                </p>\n              </div>\n              <div class=\"row\">\n                <input id=\"password\" class=\"toolbarField\" />\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"passwordCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_cancel\">Cancel</span>\n                </button>\n                <button type=\"button\" id=\"passwordSubmit\" class=\"overlayButton\">\n                  <span data-l10n-id=\"password_ok\">OK</span>\n                </button>\n              </div>\n            </div>\n          </div>\n          <pdf-document-properties-overlay class=\"container hidden\" id=\"documentPropertiesOverlay\"> </pdf-document-properties-overlay>\n\n          <div id=\"printServiceOverlay\" class=\"container hidden\">\n            <div class=\"dialog\">\n              <div class=\"row\">\n                <span data-l10n-id=\"print_progress_message\">Preparing document for printing\u2026</span>\n              </div>\n              <div class=\"row\">\n                <progress value=\"0\" max=\"100\"></progress>\n                <span data-l10n-id=\"print_progress_percent\" data-l10n-args='{ \"progress\": 0 }' class=\"relative-progress\">0%</span>\n              </div>\n              <div class=\"buttonRow\">\n                <button type=\"button\" id=\"printCancel\" class=\"overlayButton\">\n                  <span data-l10n-id=\"print_progress_close\">Cancel</span>\n                </button>\n              </div>\n            </div>\n          </div>\n         </div>\n        <!-- overlayContainer -->\n      </div>\n      <!-- outerContainer -->\n      <div id=\"printContainer\"></div>\n    </div>\n  </div>\n</div>\n\n\n<!-- The (primary) toolbar is the black bar containing the buttons. -->\n",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [".textLayer{position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;opacity:.2;line-height:1}.textLayer>span{color:transparent;position:absolute;white-space:pre;cursor:text;-webkit-transform-origin:0 0;transform-origin:0 0}.textLayer .highlight{margin:-1px;padding:1px;background-color:rgba(180,0,170,1);border-radius:4px}.textLayer .highlight.begin{border-radius:4px 0 0 4px}.textLayer .highlight.end{border-radius:0 4px 4px 0}.textLayer .highlight.middle{border-radius:0}.textLayer .highlight.selected{background-color:rgba(0,100,0,1)}.textLayer ::-moz-selection{background:rgba(0,0,255,1)}.textLayer ::selection{background:rgba(0,0,255,1)}.textLayer .endOfContent{display:block;position:absolute;left:0;top:100%;right:0;bottom:0;z-index:-1;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.textLayer .endOfContent.active{top:0}.annotationLayer section{position:absolute}.annotationLayer .buttonWidgetAnnotation.pushButton>a,.annotationLayer .linkAnnotation>a{position:absolute;font-size:1em;top:0;left:0;width:100%;height:100%}.annotationLayer .buttonWidgetAnnotation.pushButton>a:hover,.annotationLayer .linkAnnotation>a:hover{opacity:.2;background:rgba(255,255,0,1);box-shadow:0 2px 10px rgba(255,255,0,1)}.annotationLayer .textAnnotation img{position:absolute;cursor:pointer}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input,.annotationLayer .choiceWidgetAnnotation select,.annotationLayer .textWidgetAnnotation input,.annotationLayer .textWidgetAnnotation textarea{background-color:rgba(0,54,255,.13);border:1px solid transparent;box-sizing:border-box;font-size:9px;height:100%;margin:0;padding:0 3px;vertical-align:top;width:100%}.annotationLayer .choiceWidgetAnnotation select option{padding:0}.annotationLayer .buttonWidgetAnnotation.radioButton input{border-radius:50%}.annotationLayer .textWidgetAnnotation textarea{font:message-box;font-size:9px;resize:none}.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled],.annotationLayer .choiceWidgetAnnotation select[disabled],.annotationLayer .textWidgetAnnotation input[disabled],.annotationLayer .textWidgetAnnotation textarea[disabled]{background:0 0;border:1px solid transparent;cursor:not-allowed}.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,.annotationLayer .buttonWidgetAnnotation.radioButton input:hover,.annotationLayer .choiceWidgetAnnotation select:hover,.annotationLayer .textWidgetAnnotation input:hover,.annotationLayer .textWidgetAnnotation textarea:hover{border:1px solid rgba(0,0,0,1)}.annotationLayer .choiceWidgetAnnotation select:focus,.annotationLayer .textWidgetAnnotation input:focus,.annotationLayer .textWidgetAnnotation textarea:focus{background:0 0;border:1px solid transparent}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{background-color:rgba(0,0,0,1);content:'';display:block;position:absolute}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{height:80%;left:45%;width:1px}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before{border-radius:50%;height:50%;left:30%;top:20%;width:50%}.annotationLayer .textWidgetAnnotation input.comb{font-family:monospace;padding-left:2px;padding-right:0}.annotationLayer .textWidgetAnnotation input.comb:focus{width:115%}.annotationLayer .buttonWidgetAnnotation.checkBox input,.annotationLayer .buttonWidgetAnnotation.radioButton input{-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0}.annotationLayer .popupWrapper{position:absolute;width:20em}.annotationLayer .popup{position:absolute;z-index:4;max-width:20em;background-color:rgba(255,255,153,1);box-shadow:0 2px 5px rgba(136,136,136,1);border-radius:2px;padding:6px;margin-left:5px;cursor:pointer;font:message-box;font-size:9px;word-wrap:break-word}.annotationLayer .popup>*{font-size:9px}.annotationLayer .popup h1{display:inline-block}.annotationLayer .popup span{display:inline-block;margin-left:5px}.annotationLayer .popup p{border-top:1px solid rgba(51,51,51,1);margin-top:2px;padding-top:2px}.annotationLayer .caretAnnotation,.annotationLayer .circleAnnotation svg ellipse,.annotationLayer .fileAttachmentAnnotation,.annotationLayer .freeTextAnnotation,.annotationLayer .highlightAnnotation,.annotationLayer .inkAnnotation svg polyline,.annotationLayer .lineAnnotation svg line,.annotationLayer .polygonAnnotation svg polygon,.annotationLayer .polylineAnnotation svg polyline,.annotationLayer .squareAnnotation svg rect,.annotationLayer .squigglyAnnotation,.annotationLayer .stampAnnotation,.annotationLayer .strikeoutAnnotation,.annotationLayer .underlineAnnotation{cursor:pointer}.pdfViewer .canvasWrapper{overflow:hidden}.pdfViewer .page{direction:ltr;width:816px;height:1056px;margin:1px auto -8px;position:relative;overflow:visible;border:9px solid transparent;background-clip:content-box;-o-border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;border-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAATCAQAAADYWf5HAAAA6UlEQVR4Xl2Pi2rEMAwE16fm1f7/r14v7w4rI0IzLAF7hLxNevBSEMEF5+OilNCsRd8ZMyn+a4NmsOT8WJw1lFbSYgGFzF2bLFoLjTClWjKKGRWpDYAGXUnZ4uhbBUzF3Oe/GG/ue2fn4GgsyXhNgysV2JnrhKEMg4fEZcALmiKbNhBBRFpSyDOj1G4QOVly6O1FV54ZZq8OVygrciDt6JazRgi1ljTPH0gbrPmHPXAbCiDd4GawIjip1TPh9tt2sz24qaCjr/jAb/GBFTbq9KZ7Ke/Cqt8nayUikZKsWZK7Fe6bg5dOUt8fZHWG2BHc+6EAAAAASUVORK5CYII=) 9 9 repeat;background-color:rgba(255,255,255,1)}.pdfViewer.removePageBorders .page{margin:0 auto 10px;border:none}.pdfViewer.singlePageView{display:inline-block}.pdfViewer.singlePageView .page{margin:0;border:none}.pdfViewer.scrollHorizontal,.pdfViewer.scrollWrapped,.spread{margin-left:3.5px;margin-right:3.5px;text-align:center}.pdfViewer.scrollHorizontal,.spread{white-space:nowrap}.pdfViewer.removePageBorders,.pdfViewer.scrollHorizontal .spread,.pdfViewer.scrollWrapped .spread{margin-left:0;margin-right:0}.pdfViewer.scrollHorizontal .page,.pdfViewer.scrollHorizontal .spread,.pdfViewer.scrollWrapped .page,.pdfViewer.scrollWrapped .spread,.spread .page{display:inline-block;vertical-align:middle}.pdfViewer.scrollHorizontal .page,.pdfViewer.scrollWrapped .page,.spread .page{margin-left:-3.5px;margin-right:-3.5px}.pdfViewer.removePageBorders .spread .page,.pdfViewer.removePageBorders.scrollHorizontal .page,.pdfViewer.removePageBorders.scrollWrapped .page{margin-left:5px;margin-right:5px}.pdfViewer .page canvas{margin:0;display:block}.pdfViewer .page canvas[hidden]{display:none}.pdfViewer .page .loadingIcon{position:absolute;display:block;left:0;top:0;right:0;bottom:0;background:url(data:image/gif;base64,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) center no-repeat}.pdfPresentationMode .pdfViewer{margin-left:0;margin-right:0}.pdfPresentationMode .pdfViewer .page,.pdfPresentationMode .pdfViewer .spread{display:block}.pdfPresentationMode .pdfViewer .page,.pdfPresentationMode .pdfViewer.removePageBorders .page{margin-left:auto;margin-right:auto}.pdfPresentationMode:-ms-fullscreen .pdfViewer .page{margin-bottom:100%!important}.pdfPresentationMode:-webkit-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:-moz-full-screen .pdfViewer .page{margin-bottom:100%;border:0}.pdfPresentationMode:fullscreen .pdfViewer .page{margin-bottom:100%;border:0}:root{--sidebar-width:200px;--sidebar-transition-duration:200ms;--sidebar-transition-timing-function:ease}.html *{padding:0;margin:0}.html{height:100%;width:100%;font-size:10px}.body{height:100%;width:100%;background-color:rgba(64,64,64,1);background-image:url(data:image/png;base64,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)}.body,.pdf-viewer button,.pdf-viewer input,.pdf-viewer select{font:message-box;outline:0}.hidden,[hidden]{display:none!important}#viewerContainer.pdfPresentationMode:-ms-fullscreen{top:0!important;overflow:hidden!important}#viewerContainer.pdfPresentationMode:-ms-fullscreen::-ms-backdrop{background-color:rgba(0,0,0,1)}#viewerContainer.pdfPresentationMode:-webkit-full-screen{top:0;border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:-moz-full-screen{top:0;border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;overflow:hidden;cursor:none;-moz-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:-ms-fullscreen{border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;cursor:none;-ms-user-select:none;user-select:none}#viewerContainer.pdfPresentationMode:fullscreen{top:0;border-top:2px solid transparent;background-color:rgba(0,0,0,1);width:100%;height:100%;overflow:hidden;cursor:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pdfPresentationMode:-webkit-full-screen a:not(.internalLink){display:none}.pdfPresentationMode:-moz-full-screen a:not(.internalLink){display:none}.pdfPresentationMode:-ms-fullscreen a:not(.internalLink){display:none}.pdfPresentationMode:fullscreen a:not(.internalLink){display:none}.pdfPresentationMode:-webkit-full-screen .textLayer>span{cursor:none}.pdfPresentationMode:-moz-full-screen .textLayer>span{cursor:none}.pdfPresentationMode:-ms-fullscreen .textLayer>span{cursor:none}.pdfPresentationMode:fullscreen .textLayer>span{cursor:none}.pdfPresentationMode.pdfPresentationModeControls .textLayer>span,.pdfPresentationMode.pdfPresentationModeControls>*{cursor:default}#outerContainer{width:100%;height:100%;position:relative}#sidebarContainer{position:absolute;top:32px;bottom:0;width:200px;width:var(--sidebar-width);visibility:hidden;z-index:2;border-top:1px solid rgba(51,51,51,1);transition-duration:.2s;transition-duration:var(--sidebar-transition-duration);transition-timing-function:ease;transition-timing-function:var(--sidebar-transition-timing-function)}html[dir=ltr] #sidebarContainer{transition-property:left;left:-200px;left:calc(0px - var(--sidebar-width))}html[dir=rtl] #sidebarContainer{transition-property:right;right:-200px;right:calc(0px - var(--sidebar-width))}.loadingInProgress #sidebarContainer{top:36px}#outerContainer.sidebarResizing #sidebarContainer{transition-duration:0s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#outerContainer.sidebarMoving #sidebarContainer,#outerContainer.sidebarOpen #sidebarContainer{visibility:visible}html[dir=ltr] #outerContainer.sidebarOpen #sidebarContainer{left:0}html[dir=rtl] #outerContainer.sidebarOpen #sidebarContainer{right:0}#mainContainer{position:absolute;top:0;right:0;bottom:0;left:0;min-width:320px}#sidebarContent{top:32px;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;width:100%;background-color:rgba(0,0,0,.1)}html[dir=ltr] #sidebarContent{left:0;box-shadow:inset -1px 0 0 rgba(0,0,0,.25)}html[dir=rtl] #sidebarContent{right:0;box-shadow:inset 1px 0 0 rgba(0,0,0,.25)}#viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;top:32px;right:0;bottom:0;left:0;outline:0}#viewerContainer:not(.pdfPresentationMode){transition-duration:.2s;transition-duration:var(--sidebar-transition-duration);transition-timing-function:ease;transition-timing-function:var(--sidebar-transition-timing-function)}html[dir=ltr] #viewerContainer{box-shadow:inset 1px 0 0 rgba(255,255,255,.05)}html[dir=rtl] #viewerContainer{box-shadow:inset -1px 0 0 rgba(255,255,255,.05)}#outerContainer.sidebarResizing #viewerContainer{transition-duration:0s}html[dir=ltr] #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:left;left:200px;left:var(--sidebar-width)}html[dir=rtl] #outerContainer.sidebarOpen #viewerContainer:not(.pdfPresentationMode){transition-property:right;right:200px;right:var(--sidebar-width)}.toolbar{position:relative;left:0;right:0;z-index:7;cursor:default}#toolbarContainer{width:100%}#toolbarSidebar{width:100%;height:32px;background-color:rgba(66,66,66,1);background-image:url(data:image/png;base64,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),linear-gradient(rgba(77,77,77,.99),rgba(64,64,64,.95))}html[dir=ltr] #toolbarSidebar{box-shadow:inset -1px 0 0 rgba(0,0,0,.25),inset 0 -1px 0 rgba(255,255,255,.05),0 1px 0 rgba(0,0,0,.15),0 0 1px rgba(0,0,0,.1)}html[dir=rtl] #toolbarSidebar{box-shadow:inset 1px 0 0 rgba(0,0,0,.25),inset 0 1px 0 rgba(255,255,255,.05),0 1px 0 rgba(0,0,0,.15),0 0 1px rgba(0,0,0,.1)}#sidebarResizer{position:absolute;top:0;bottom:0;width:6px;z-index:4;cursor:ew-resize}html[dir=ltr] #sidebarResizer{right:-6px}html[dir=rtl] #sidebarResizer{left:-6px}#toolbarContainer,.findbar,.secondaryToolbar{position:relative;height:32px;background-color:rgba(71,71,71,1);background-image:url(data:image/png;base64,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),linear-gradient(rgba(82,82,82,.99),rgba(69,69,69,.95))}.findbar,.secondaryToolbar,html[dir=ltr] #toolbarContainer,html[dir=rtl] #toolbarContainer{box-shadow:inset 0 1px 1px rgba(0,0,0,.15),inset 0 -1px 0 rgba(255,255,255,.05),0 1px 0 rgba(0,0,0,.15),0 1px 1px rgba(0,0,0,.1)}#toolbarViewer{height:32px}#loadingBar{position:relative;width:100%;height:4px;background-color:rgba(51,51,51,1);border-bottom:1px solid rgba(51,51,51,1)}#loadingBar .progress{position:absolute;top:0;left:0;width:0%;height:100%;background-color:rgba(221,221,221,1);overflow:hidden;transition:width .2s}@-webkit-keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}@keyframes progressIndeterminate{0%{left:-142px}100%{left:0}}#loadingBar .progress.indeterminate{background-color:rgba(153,153,153,1);transition:none}#loadingBar .progress.indeterminate .glimmer{position:absolute;top:0;left:0;height:100%;width:calc(100% + 150px);background:repeating-linear-gradient(135deg,rgba(187,187,187,1) 0,rgba(153,153,153,1) 5px,rgba(153,153,153,1) 45px,rgba(221,221,221,1) 55px,rgba(221,221,221,1) 95px,rgba(187,187,187,1) 100px);-webkit-animation:950ms linear infinite progressIndeterminate;animation:950ms linear infinite progressIndeterminate}.findbar,.secondaryToolbar{top:32px;position:absolute;z-index:7;height:auto;min-width:16px;padding:0 6px;margin:4px 2px;color:rgba(217,217,217,1);font-size:12px;line-height:14px;text-align:left;cursor:default}.findbar{min-width:300px}.findbar>div{height:32px}.findbar.wrapContainers>div{clear:both}.findbar.wrapContainers>div#findbarMessageContainer{height:auto}html[dir=ltr] .findbar{left:68px}html[dir=rtl] .findbar{right:68px}.findbar label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#findInput{width:200px}#findInput::-webkit-input-placeholder{color:rgba(191,191,191,1)}#findInput::-moz-placeholder{font-style:italic}#findInput:-ms-input-placeholder{font-style:italic}#findInput::-ms-input-placeholder{font-style:italic}#findInput::placeholder{font-style:italic}#findInput[data-status=pending]{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:right}html[dir=rtl] #findInput[data-status=pending]{background-position:left}.secondaryToolbar{padding:6px;height:auto;z-index:8}html[dir=ltr] .secondaryToolbar{right:4px}html[dir=rtl] .secondaryToolbar{left:4px}#secondaryToolbarButtonContainer{max-width:200px;max-height:400px;overflow-y:auto;-webkit-overflow-scrolling:touch;margin-bottom:-4px}#secondaryToolbarButtonContainer.hiddenScrollModeButtons>.scrollModeButtons,#secondaryToolbarButtonContainer.hiddenSpreadModeButtons>.spreadModeButtons{display:none!important}.doorHanger,.doorHangerRight{border:1px solid rgba(0,0,0,.5);border-radius:2px;box-shadow:0 1px 4px rgba(0,0,0,.3)}.doorHanger:after,.doorHanger:before,.doorHangerRight:after,.doorHangerRight:before{bottom:100%;border:solid transparent;content:\" \";height:0;width:0;position:absolute;pointer-events:none}.doorHanger:after,.doorHangerRight:after{border-bottom-color:rgba(82,82,82,.99);border-width:8px}.doorHanger:before,.doorHangerRight:before{border-bottom-color:rgba(0,0,0,.5);border-width:9px}html[dir=ltr] .doorHanger:after,html[dir=rtl] .doorHangerRight:after{left:13px;margin-left:-8px}html[dir=ltr] .doorHanger:before,html[dir=rtl] .doorHangerRight:before{left:13px;margin-left:-9px}html[dir=ltr] .doorHangerRight:after,html[dir=rtl] .doorHanger:after{right:13px;margin-right:-8px}html[dir=ltr] .doorHangerRight:before,html[dir=rtl] .doorHanger:before{right:13px;margin-right:-9px}#findResultsCount{background-color:rgba(217,217,217,1);color:rgba(82,82,82,1);text-align:center;padding:3px 4px}#findMsg{font-style:italic;color:rgba(166,183,208,1)}#findMsg:empty{display:none}#findInput.notFound{background-color:rgba(255,102,102,1)}#toolbarViewerMiddle{position:absolute;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}html[dir=ltr] #toolbarViewerLeft,html[dir=rtl] #toolbarViewerRight{float:left}html[dir=ltr] #toolbarViewerRight,html[dir=rtl] #toolbarViewerLeft{float:right}html[dir=ltr] #toolbarViewerLeft>*,html[dir=ltr] #toolbarViewerMiddle>*,html[dir=ltr] #toolbarViewerRight>*,html[dir=ltr] .findbar *{position:relative;float:left}html[dir=rtl] #toolbarViewerLeft>*,html[dir=rtl] #toolbarViewerMiddle>*,html[dir=rtl] #toolbarViewerRight>*,html[dir=rtl] .findbar *{position:relative;float:right}html[dir=ltr] .splitToolbarButton{margin:3px 2px 4px 0;display:inline-block}html[dir=rtl] .splitToolbarButton{margin:3px 0 4px 2px;display:inline-block}html[dir=ltr] .splitToolbarButton .toolbarButton{border-radius:0;float:left}html[dir=rtl] .splitToolbarButton .toolbarButton{border-radius:0;float:right}.overlayButton,.secondaryToolbarButton,.toolbarButton{border:0;background:0 0;width:32px;height:25px}.toolbarButton>span{display:inline-block;width:0;height:0;overflow:hidden}.overlayButton[disabled],.secondaryToolbarButton[disabled],.toolbarButton[disabled]{opacity:.5}.splitToolbarButton.toggled .toolbarButton{margin:0}.splitToolbarButton.toggled .toolbarButton,.splitToolbarButton:focus .toolbarButton,.splitToolbarButton:hover .toolbarButton,.toolbarButton.textButton{background-color:rgba(0,0,0,.12);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;border:1px solid rgba(0,0,0,.35);border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.15) inset,0 1px 0 rgba(255,255,255,.05)}.dropdownToolbarButton:hover,.overlayButton:focus,.overlayButton:hover,.splitToolbarButton .toolbarButton:focus,.splitToolbarButton .toolbarButton:hover,.toolbarButton.textButton:focus,.toolbarButton.textButton:hover{background-color:rgba(0,0,0,.2);box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.15) inset,0 0 1px rgba(0,0,0,.05);z-index:3}.dropdownToolbarButton:hover{background-color:rgba(0,0,0,.26)}.splitToolbarButton .toolbarButton{position:relative}html[dir=ltr] .splitToolbarButton .toolbarButton:first-child,html[dir=rtl] .splitToolbarButton .toolbarButton:last-child{position:relative;margin:0 -1px 0 0;border-top-left-radius:2px;border-bottom-left-radius:2px;border-right-color:transparent}html[dir=ltr] .splitToolbarButton .toolbarButton:last-child,html[dir=rtl] .splitToolbarButton .toolbarButton:first-child{position:relative;margin:0 0 0 -1px;border-top-right-radius:2px;border-bottom-right-radius:2px;border-left-color:transparent}.splitToolbarButtonSeparator{padding:8px 0;width:1px;background-color:rgba(0,0,0,.5);z-index:1;box-shadow:0 0 0 1px rgba(255,255,255,.08);display:inline-block;margin:5px 0}html[dir=ltr] .splitToolbarButtonSeparator{float:left}html[dir=rtl] .splitToolbarButtonSeparator{float:right}.splitToolbarButton.toggled .splitToolbarButtonSeparator,.splitToolbarButton:hover .splitToolbarButtonSeparator{padding:12px 0;margin:1px 0;box-shadow:0 0 0 1px rgba(255,255,255,.03)}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton,.toolbarButton{min-width:16px;padding:2px 6px 0;border:1px solid transparent;border-radius:2px;color:rgba(255,255,255,.8);font-size:12px;line-height:14px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}html[dir=ltr] .dropdownToolbarButton,html[dir=ltr] .overlayButton,html[dir=ltr] .toolbarButton{margin:3px 2px 4px 0}html[dir=rtl] .dropdownToolbarButton,html[dir=rtl] .overlayButton,html[dir=rtl] .toolbarButton{margin:3px 0 4px 2px}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton:focus,.secondaryToolbarButton:hover,.toolbarButton:focus,.toolbarButton:hover{background-color:rgba(0,0,0,.12);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;border:1px solid rgba(0,0,0,.35);border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.15) inset,0 1px 0 rgba(255,255,255,.05)}.dropdownToolbarButton:hover:active,.overlayButton:hover:active,.secondaryToolbarButton:hover:active,.toolbarButton:hover:active{background-color:rgba(0,0,0,.2);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));border-color:rgba(0,0,0,.35) rgba(0,0,0,.4) rgba(0,0,0,.45);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}.secondaryToolbarButton.toggled,.splitToolbarButton.toggled .toolbarButton.toggled,.toolbarButton.toggled{background-color:rgba(0,0,0,.3);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}.secondaryToolbarButton.toggled:hover:active,.splitToolbarButton.toggled .toolbarButton.toggled:hover:active,.toolbarButton.toggled:hover:active{background-color:rgba(0,0,0,.4);border-color:rgba(0,0,0,.4) rgba(0,0,0,.5) rgba(0,0,0,.55);box-shadow:0 1px 1px rgba(0,0,0,.2) inset,0 0 1px rgba(0,0,0,.3) inset,0 1px 0 rgba(255,255,255,.05)}.dropdownToolbarButton{width:140px;padding:0;overflow:hidden}.dropdownToolbarButton::after{position:absolute;display:inline-block;top:4px;content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAQCAYAAADagWXwAAAAMklEQVR4AWMYSPD//39+IF4AotElWIB4LRA/g9IsyJJLwBIIvIR8NxAylrCDML0ygAAAMdZbs0uKR4sAAAAASUVORK5CYII=)}html[dir=ltr] .dropdownToolbarButton::after{right:8px}html[dir=rtl] .dropdownToolbarButton::after{left:8px}.dropdownToolbarButton>select{width:162px;height:23px;font-size:12px;color:rgba(242,242,242,1);margin:0;padding:3px 2px 2px;border:none;background:rgba(0,0,0,0)}.dropdownToolbarButton>select>option{background:rgba(61,61,61,1)}#customScaleOption{display:none}#pageWidthOption{border-bottom:1px solid rgba(255,255,255,.5)}html[dir=ltr] .splitToolbarButton:first-child,html[dir=ltr] .toolbarButton:first-child,html[dir=rtl] .splitToolbarButton:last-child,html[dir=rtl] .toolbarButton:last-child{margin-left:4px}html[dir=ltr] .splitToolbarButton:last-child,html[dir=ltr] .toolbarButton:last-child,html[dir=rtl] .splitToolbarButton:first-child,html[dir=rtl] .toolbarButton:first-child{margin-right:4px}.toolbarButtonSpacer{width:30px;display:inline-block;height:1px}html[dir=ltr] #findPrevious,html[dir=rtl] #findNext{margin-left:3px}html[dir=ltr] #findNext,html[dir=rtl] #findPrevious{margin-right:3px}.secondaryToolbarButton::before,.toolbarButton::before{position:absolute;display:inline-block;top:4px;left:7px}html[dir=ltr] .secondaryToolbarButton::before{left:4px}html[dir=rtl] .secondaryToolbarButton::before{right:4px}.toolbarButton.zoomOut::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAH0lEQVR4AWMYUeD/OyyQAQSBCAwvYUIUBQwOWOAwAgBbHjPhdhuBHAAAAABJRU5ErkJggg==)}.toolbarButton.zoomIn::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAT0lEQVR4AWOgO/j/DggZkCHLf1QV39C1sKDx/5CsgBFqxWMo/wsQ80DZssgmvAcRGGyEAsY8qC/6gOwifN48CYRo3qTUFwyoBjI4ACGVAQCo9CsjniAahgAAAABJRU5ErkJggg==)}.secondaryToolbarButton.bookmark,.toolbarButton.bookmark{box-sizing:border-box;outline:0;padding-top:4px;text-decoration:none}.secondaryToolbarButton.bookmark{padding-top:5px}.bookmark[href='#']{opacity:.5;pointer-events:none}#viewThumbnail.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAgElEQVR4AY3QMQoCUQyE4bmSnsC7aqUHeLYigoWwtcWCiCzEgFeYJWyK8KZY81fflMEfx8ZfdibYOYaJn2yiOIZ3SRzDqySOYSyJQXwbn0veHN4ZDmywy7YA1KvHI8fsRLBzDAMf2UBxDPeSOIZbSRzDtSQGYXteluxgsM6wlT/MpbU5LLzvS6wAAAAASUVORK5CYII=)}html[dir=ltr] #viewOutline.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAeUlEQVR4AZ3QLa4CQRQF4drSYwXslcEwKAg/BhI8FoHAkeC67w6KVpMRN6Hz6tvAyaEjT56lKQmQuMQ1CHwnQPhjAcAy0ZU799J8EiBxiGMQ+Ez8d0OeG0dpXjPgpI51W6l4nwEn6ZauHFxL80iAlFUZCgVvid8/fAHeVdGNCJHufQAAAABJRU5ErkJggg==)}html[dir=rtl] #viewOutline.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAAeElEQVR4Aa3QLQ4CQRAF4boSnIC7shgWBeHHQILHIhA4EtzM3KBos8mKJqygvudn0kzIkiAcPQniK4G0c7s0iC0SETPmTMp3grB1J4iPBNL27fCvPzxHCGt7GSDeRpDa101lEPv29vS8JwidK0G8JpCyLF2B8uMOH2P50U1FXwBpAAAAAElFTkSuQmCC)}#viewAttachments.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABR0lEQVQoU2NgIAf8V/y/5f+l//v/G6JLCP93AJKa/85syGKwnBr379x/HhTpfwc+tP7X/Ht2ViqDCFCA/8ma7w7I0vtvzZzi+uf05GQGQbAI4+fdW00Q0ntvTZ/g/ufkpCQGgf+G/4v+M/2verKYgQsmvfvm1D63f8cmJ4Kk/xxf4fm/4tMafYgj/wv+23l7crfLvyOTEoDSBn+ONkV9rPm8Xs2MgQms4PeER3PY1X7NW5YFkv53qDHyU9XX9SbWUOn/zH/PdngyMLyafyvqv+WfAw0Rnyq/rgVKs0Cd95jz/8nTQLuKXb8t/72qOvxDxbdNNjZwaSBgerv6SymQ5mIwZDD6VPZtvb0jsjQQTI76d/J/9X/j/0b/u7+tc3BgYGVAA4JtiV9W/D///9STCbb2mNJgJQzG4i4cDgya2KUhgImBEZswAJoflq/YNGGGAAAAAElFTkSuQmCC)}.toolbarButton.pdfSidebarNotification::after{position:absolute;display:inline-block;top:1px;content:'';background-color:rgba(112,219,85,1);height:9px;width:9px;border-radius:50%}html[dir=ltr] .toolbarButton.pdfSidebarNotification::after{left:17px}html[dir=rtl] .toolbarButton.pdfSidebarNotification::after{right:17px}.secondaryToolbarButton{position:relative;margin:0 0 4px;padding:3px 0 1px;height:auto;min-height:25px;width:auto;min-width:100%;white-space:normal}html[dir=ltr] .secondaryToolbarButton{padding-left:24px;text-align:left}html[dir=rtl] .secondaryToolbarButton{padding-right:24px;text-align:right}html[dir=ltr] .secondaryToolbarButton.bookmark{padding-left:27px}html[dir=rtl] .secondaryToolbarButton.bookmark{padding-right:27px}html[dir=ltr] .secondaryToolbarButton>span{padding-right:4px}html[dir=rtl] .secondaryToolbarButton>span{padding-left:4px}.secondaryToolbarButton.scrollVertical::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAq0lEQVQ4y8WSTQpCIRRGz82IBjloCw3aQyt+E1fUIoKUoKCrTXwgcgNtkiDi58fx/gnGKqU8gHu9Sj29iBx679YCqKo65/YtU1Wz5TUBy7KcYoybVvPemwArfJl5ky/GG7BGUKqviMhxKAXgBcS+iMM1AHL9ed0AOgNQ4L2GXs88C8iGxswc7HptGBBCuKSU/jsHV8D1mYnIebSITyB1mp/tgjZt/GkOhtr4AeCVUDEo9o/6AAAAAElFTkSuQmCC)}.secondaryToolbarButton.scrollHorizontal::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAoUlEQVQ4y+2QsQpCMQxFT2zr6KRfo5P/+b7gfZgIDop0EEnjYKq1+gZnvVBCODe5pPDXQ2YmZibfcjGzHZBEZOnGA9Abi4isnO+BUucjcAQWjfkCnKrBa8uvwLk2EVB/VeoJ0tRPHMCiN1MGAOt4659coJ5szVAfYPWE1Ceo6jyEUBe8naCqKYRw/4NhGLallDZhPY7jLOf83PjKNz3/dd0AKIVY6yZsfmAAAAAASUVORK5CYII=)}.secondaryToolbarButton.scrollWrapped::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAA8ElEQVQ4y62SUUoEMQyGv9iignZBb6AP3sET92VO5CEWdoYFF0zjg+2QLdsdhM1Lm35p0uaPAJjZETjwZ1LXJCLPjs+c205EniKAqmoI4dFBU9XSHFUtIYQHf1tVFSAC5Jzf53m+8wEppTVBzvltyM1MGJiZyRaXutkDrYLVPpiIvAw4lb/G6pxck9YmumInYPHFgd3aA6DUQ3MV1F0onb/y6Jyf9vS6li64ONaSniUolyq4/fgFdQ7uL+m8xSPANE2fy7IM5+Aqv9UcfAGh/6OIfGzx1sTvTud+DjxvSqVeBXXwmgotRv8rY+lGXQF+AT5JoDHpim/qAAAAAElFTkSuQmCC)}.secondaryToolbarButton.spreadNone::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAeklEQVQ4y92TMQ6AIBAE9zxjRSz8kQ/maxaGxmI5GwpykQRiY6QclmGPBOB/y8xkZE8awQPAVCMAJiKbz86Nyy4Ap2PrU7AlIIDsmnJEkMsBKfXhhN0NrHonjgpY1bc3I+DNCJ71CUhSVRfPugUxxj2lpDULIeRv/p0bxlgxLtRRJCAAAAAASUVORK5CYII=)}.secondaryToolbarButton.spreadOdd::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABH0lEQVQ4y9XRvWpUURQF4O/MXARhGgUhkN7KxkawEPEZREgXEmwkeQNLSysfIFXAQpm3EAtrewu1ScgPMkQmuTcrzZnhEEimFBcczs/aa++19+H/R5JyG7eKL/VwjNHiHQUppdy7gVf5+129zNHjE47wGnebYnMc42NN8AprrZXDJI+TrCdZS/Ijya+GP0nyIMnTJM+T3KmulrYu8Ba7tUJw2Tg4xUt8wGYp5bw6XiaY42HdYairxQ5+llK2k7zDGXTXBIvqQx3kApf4Ukp5k2QPT647GOEzvuEv9nHQJJhV8TN8xXv8aR2kCtaxgd9NO3CWZKuJHy1mVKDv++/j8bhvGx6Goeu67tEqvoPpdPpiNpuN24DJZLL8hVX8v8UVGX2ZknnnEZIAAAAASUVORK5CYII=)}.secondaryToolbarButton.spreadEven::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABIklEQVQ4y9WSO0pEQRBFT/keYjDJGPhZgGBgYCYTKLgFPwsQIzP34AqMjEyNHAVTIw0EQz+B+EdMBBkQBkGYmWPSTxpBJxQr6bp1mqpbdMP/DzV+Y/14pKQFDFR1IAAjov4DJ/HhMokPoAXsJL0EjGXDPoAnYB8ogGVgNLfSUkfUhjqnDqapFX9O56I6ow5VvHLwBiwAq8B5RByr3cxBT31K9vci4lTt5Q4e1Au1mfSG+viNX6kTSW/mHPVO3Ur5dmp2m/F79Ua9VndT7SxfoR0Ra+oscAIcAevZCi8R0VCXgNdUGyR7mnd1BZhMtQGglzWoqwfAODCtHlYgADqdzmVRFJ38k3S73bIsy6l+vARoNpvz7Xa7yC/UarUvB/3438YnK2jWph8eMkkAAAAASUVORK5CYII=)}.secondaryToolbarButton.documentProperties::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAABWklEQVQYGU3BwUrCAAAG4H8Mdgn00K2Ll0p2EHKeuvYMHrp26EEqcOCI6u5lBUKaBUUkEYKBMJg6obAOQUFibnWwghzW9qc2R98HBBinRoM99mhQYxz/UaLq2+y5N93z7rl7w55vU6WEP5RYZPf1amMdy0gggeWt9dcrdnlECWNehs93ejSFCKai0dSdzmcvA4BxPjnlWRkCRnjKM4wJs7JT5iMX4Wb5sLcKARP9i/4F/gh7q3xwsxhUvwxEMJWEgqnIwBhU4d2+HCLEY54gZJe8W/iWnUeIbbYReit81/F+6VYRokULIff6vYz2LptUEGCddQSosHm/A3XFN4Z5iphwCk4RExSHed9QV4CZ5jZNblHEWBIKRihyk2ZzGzMAYnJHp8kDLiHAJPdpdvSYjAlhTmlk/RpbrDDHHCts+bWGNqdAQEDA/Fra0j5L/vVP5ePI0tbSWICAkV+DHsfDVCx2KwAAAABJRU5ErkJggg==)}.verticalToolbarSeparator{display:block;padding:8px 0;margin:8px 4px;width:1px;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px rgba(255,255,255,.08)}html[dir=ltr] .verticalToolbarSeparator{margin-left:2px}html[dir=rtl] .verticalToolbarSeparator{margin-right:2px}.horizontalToolbarSeparator{display:block;margin:0 0 4px;height:1px;width:100%;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px rgba(255,255,255,.08)}.toolbarField{padding:3px 6px;margin:4px 0;border-radius:2px;background-color:rgba(255,255,255,.09);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;border-width:1px;border-style:solid;border-color:rgba(0,0,0,.32) rgba(0,0,0,.38) rgba(0,0,0,.42);box-shadow:0 1px 0 rgba(0,0,0,.05) inset,0 1px 0 rgba(255,255,255,.05);color:rgba(242,242,242,1);font-size:12px;line-height:14px;outline-style:none}.toolbarField[type=checkbox]{display:inline-block;margin:8px 0}.toolbarField.pageNumber{-moz-appearance:textfield;min-width:16px;text-align:right;width:40px}.toolbarField.pageNumber.visiblePageIsLoading{background-image:url(data:image/png;base64,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);background-repeat:no-repeat;background-position:1px}.toolbarField.pageNumber::-webkit-inner-spin-button,.toolbarField.pageNumber::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.toolbarField:hover{background-color:rgba(255,255,255,.11);border-color:rgba(0,0,0,.4) rgba(0,0,0,.43) rgba(0,0,0,.45)}.toolbarField:focus{background-color:rgba(255,255,255,.15);border-color:rgba(77,184,255,.8) rgba(77,184,255,.85) rgba(77,184,255,.9)}.toolbarLabel{min-width:16px;padding:3px 6px 3px 2px;margin:4px 2px 4px 0;border:1px solid transparent;border-radius:2px;color:rgba(217,217,217,1);font-size:12px;line-height:14px;text-align:left;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}#thumbnailView{position:absolute;width:calc(100% - 60px);top:0;bottom:0;padding:10px 30px 0;overflow:auto;-webkit-overflow-scrolling:touch}#thumbnailView>a:active,#thumbnailView>a:focus{outline:0}.thumbnail{margin:0 10px 5px}html[dir=ltr] .thumbnail{float:left}html[dir=rtl] .thumbnail{float:right}#thumbnailView>a:last-of-type>.thumbnail{margin-bottom:10px}#thumbnailView>a:last-of-type>.thumbnail:not([data-loaded]){margin-bottom:9px}.thumbnail:not([data-loaded]){border:1px dashed rgba(255,255,255,.5);margin:-1px 9px 4px}.thumbnailImage{border:1px solid transparent;box-shadow:0 0 0 1px rgba(0,0,0,.5),0 2px 8px rgba(0,0,0,.3);opacity:.8;z-index:1;background-color:rgba(255,255,255,1);background-clip:content-box}.thumbnailSelectionRing{border-radius:2px;padding:7px}.thumbnail:hover>.thumbnailSelectionRing>.thumbnailImage,a:focus>.thumbnail>.thumbnailSelectionRing>.thumbnailImage{opacity:.9}.thumbnail:hover>.thumbnailSelectionRing,a:focus>.thumbnail>.thumbnailSelectionRing{background-color:rgba(255,255,255,.15);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.2) inset,0 0 1px rgba(0,0,0,.2);color:rgba(255,255,255,.9)}.thumbnail.selected>.thumbnailSelectionRing>.thumbnailImage{box-shadow:0 0 0 1px rgba(0,0,0,.5);opacity:1}.thumbnail.selected>.thumbnailSelectionRing{background-color:rgba(255,255,255,.3);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.1) inset,0 0 1px rgba(0,0,0,.2);color:rgba(255,255,255,1)}#attachmentsView,#outlineView{position:absolute;width:calc(100% - 8px);top:0;bottom:0;overflow:auto;-webkit-overflow-scrolling:touch;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#outlineView{padding:4px 4px 0}#attachmentsView{padding:3px 4px 0}html[dir=ltr] .outlineItem>.outlineItems,html[dir=ltr] .outlineWithDeepNesting>.outlineItem{margin-left:20px}html[dir=rtl] .outlineItem>.outlineItems,html[dir=rtl] .outlineWithDeepNesting>.outlineItem{margin-right:20px}.attachmentsItem>button,.outlineItem>a{text-decoration:none;display:inline-block;min-width:95%;min-width:calc(100% - 4px);height:auto;margin-bottom:1px;border-radius:2px;color:rgba(255,255,255,.8);font-size:13px;line-height:15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;white-space:normal}.attachmentsItem>button{border:0;background:0 0;cursor:pointer;width:100%}html[dir=ltr] .outlineItem>a{padding:2px 0 5px 4px}html[dir=ltr] .attachmentsItem>button{padding:2px 0 3px 7px;text-align:left}html[dir=rtl] .outlineItem>a{padding:2px 4px 5px 0}html[dir=rtl] .attachmentsItem>button{padding:2px 7px 3px 0;text-align:right}.outlineItemToggler{position:relative;height:0;width:0;color:rgba(255,255,255,.5)}.outlineItemToggler::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAARElEQVR4AWMgDrzofXEGBbYxvBB7cQhJYPcLAZC6MCQhN4hWphfzoQJ9CPNUX5wACux/IYpsSTZQyB/VXrYXFS8YIWwAuoI/FPk23zUAAAAASUVORK5CYII=);display:inline-block;position:absolute}html[dir=ltr] .outlineItemToggler.outlineItemsHidden::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAAR0lEQVQI12NgYHgx6YUSAyp4cebFyRc1L0RQhUDw0IukF+yoQiC45YXvCyZUIRAsQhVa/8IRWeP+FzEvWJFtLH8hgGwjmrsAP6JHRnPnejIAAAAASUVORK5CYII=)}html[dir=rtl] .outlineItemToggler.outlineItemsHidden::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAVklEQVR4AWN48eIFLqwExJNAbGySIkBcA8QngfgMuiJ2IE4C4kNQyTPIipiA2BeItyAkMBUV4ZA8g26dIxCvx6cIhlmBOAaI9+NWhMACQFyO5jvC4QQA24X45k/VhhIAAAAASUVORK5CYII=)}.outlineItemToggler.outlineItemsHidden~.outlineItems{display:none}html[dir=ltr] .outlineItemToggler{float:left}html[dir=rtl] .outlineItemToggler{float:right}html[dir=ltr] .outlineItemToggler::before{right:4px}html[dir=rtl] .outlineItemToggler::before{left:4px}.attachmentsItem>button:hover,.outlineItem>a:hover,.outlineItemToggler:hover,.outlineItemToggler:hover+a,.outlineItemToggler:hover~.outlineItems{background-color:rgba(255,255,255,.02);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.2) inset,0 0 1px rgba(0,0,0,.2);border-radius:2px;color:rgba(255,255,255,.9)}.outlineItem.selected{background-color:rgba(255,255,255,.08);background-image:linear-gradient(rgba(255,255,255,.05),rgba(255,255,255,0));background-clip:padding-box;box-shadow:0 1px 0 rgba(255,255,255,.05) inset,0 0 1px rgba(255,255,255,.1) inset,0 0 1px rgba(0,0,0,.2);color:rgba(255,255,255,1)}.noResults{font-size:12px;color:rgba(255,255,255,.8);font-style:italic;cursor:default}::-moz-selection{background:rgba(0,0,255,.3)}::selection{background:rgba(0,0,255,.3)}#errorWrapper{background:rgba(255,85,85,1);color:rgba(255,255,255,1);left:0;position:absolute;right:0;z-index:5;padding:3px;font-size:.8em}.loadingInProgress #errorWrapper{top:37px}#errorMessageLeft{float:left}#errorMessageRight{float:right}#errorMoreInfo{background-color:rgba(255,255,255,1);color:rgba(0,0,0,1);padding:3px;margin:3px;width:98%}.overlayButton{width:auto;margin:3px 4px 2px!important;padding:2px 6px 3px}#overlayContainer{display:table;position:absolute;width:100%;height:100%;background-color:rgba(0,0,0,.2);z-index:9}#overlayContainer>*{overflow:auto;-webkit-overflow-scrolling:touch}#overlayContainer>.container{display:table-cell;vertical-align:middle;text-align:center}#overlayContainer>.container .dialog{display:inline-block;padding:15px;border-spacing:4px;color:rgba(217,217,217,1);font-size:12px;line-height:14px;background-color:rgba(71,71,71,1);background-image:url(data:image/png;base64,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),linear-gradient(rgba(82,82,82,.99),rgba(69,69,69,.95));border:1px solid rgba(0,0,0,.5);border-radius:4px;box-shadow:0 1px 4px rgba(0,0,0,.3)}.dialog>.row{display:table-row}.dialog>.row>*{display:table-cell}.dialog .toolbarField{margin:5px 0}.dialog .separator{display:block;margin:4px 0;height:1px;width:100%;background-color:rgba(0,0,0,.5);box-shadow:0 0 0 1px rgba(255,255,255,.08)}.dialog .buttonRow{text-align:center;vertical-align:middle}.dialog :link{color:rgba(255,255,255,1)}#passwordOverlay>.dialog{text-align:center}#passwordOverlay .toolbarField{width:200px}#documentPropertiesOverlay>.dialog{text-align:left}#documentPropertiesOverlay .row>*{min-width:100px}html[dir=ltr] #documentPropertiesOverlay .row>*{text-align:left}html[dir=rtl] #documentPropertiesOverlay .row>*{text-align:right}#documentPropertiesOverlay .row>span{width:125px;word-wrap:break-word}#documentPropertiesOverlay .row>p{max-width:225px;word-wrap:break-word}#documentPropertiesOverlay .buttonRow{margin-top:10px}.clearBoth{clear:both}.fileInput{background:rgba(255,255,255,1);color:rgba(0,0,0,1);margin-top:5px;visibility:hidden;position:fixed;right:0;top:0}#PDFBug{background:rgba(255,255,255,1);border:1px solid rgba(102,102,102,1);position:fixed;top:32px;right:0;bottom:0;font-size:10px;padding:0;width:300px}#PDFBug .controls{background:rgba(238,238,238,1);border-bottom:1px solid rgba(102,102,102,1);padding:3px}#PDFBug .panels{bottom:0;left:0;overflow:auto;-webkit-overflow-scrolling:touch;position:absolute;right:0;top:27px}#PDFBug .panels>div{padding:5px}#PDFBug button.active{font-weight:700}.debuggerShowText{background:rgba(255,255,0,1);color:rgba(0,0,255,1)}.debuggerHideText:hover{background:rgba(255,255,0,1)}#PDFBug .stats{font-family:courier;font-size:10px;white-space:pre}#PDFBug .stats .title{font-weight:700}#PDFBug table{font-size:10px}#viewer.textLayer-visible .textLayer{opacity:1}#viewer.textLayer-visible .canvasWrapper{background-color:rgba(128,255,128,1)}#viewer.textLayer-visible .canvasWrapper canvas{mix-blend-mode:screen}#viewer.textLayer-visible .textLayer>span{background-color:rgba(255,255,0,.1);color:rgba(0,0,0,1);border:1px solid rgba(255,0,0,.5);box-sizing:border-box}#viewer.textLayer-hover .textLayer>span:hover{background-color:rgba(255,255,255,1);color:rgba(0,0,0,1)}#viewer.textLayer-shadow .textLayer>span{background-color:rgba(255,255,255,.6);color:rgba(0,0,0,1)}.grab-to-pan-grab{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAB/+AAA7/gAAM/8AAAP7AAAG2wAABtkAAAzYAAAM2AAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//wAD//4AA//+AAH//yAB///AAf//wAH//4AL//+AD///yB////z///////////////////////////////////////8=),move!important;cursor:-webkit-grab!important;cursor:grab!important}.grab-to-pan-grab :not(input):not(textarea):not(button):not(select):not(:link){cursor:inherit!important}.grab-to-pan-grab:active,.grab-to-pan-grabbing{cursor:url(data:image/cur;base64,AAACAAEAICAAAA8ADwAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4AAAB+AAAA/gAAAf8AAAP/AAAD/4AAAP+AAAD/gAAB/oAAAbYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////AP///wD///4A///8AH//+AB///gAP//8AD///gA///wAP//8AH///kn/////////////////////////////////////////////////////////////////8=),move!important;cursor:-webkit-grabbing!important;cursor:grabbing!important;position:fixed;background:rgba(0,0,0,0);display:block;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:10}@page{margin:0}#printContainer,.visibleLargeView,.visibleMediumView,.visibleSmallView{display:none}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){.toolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-5px}.secondaryToolbarButton::before{-webkit-transform:scale(.5);transform:scale(.5);top:-4px}html[dir=ltr] .toolbarButton::before,html[dir=rtl] .toolbarButton::before{left:-1px}html[dir=ltr] .secondaryToolbarButton::before{left:-2px}html[dir=rtl] .secondaryToolbarButton::before{left:186px}#findInput[data-status=pending],.toolbarField.pageNumber.visiblePageIsLoading{background-image:url(data:image/png;base64,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);background-size:16px 17px}.dropdownToolbarButton::after{-webkit-transform:scale(.5);transform:scale(.5);top:-5px;content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAgCAQAAACI54EcAAAAX0lEQVR4AWMYieB/PBAyICADEsf2/yMgtMUmqfz/+v9nQHgdyEKT5P9/GCgBhkAWP7Iky/+VQEE4BPJYEJLtUEEEbIdI4oA0kiToIMJewQwEgsFHOOAREDPK0OAwlQQAP2d+rjszeyAAAAAASUVORK5CYII=)}html[dir=ltr] .dropdownToolbarButton::after{right:4px}html[dir=rtl] .dropdownToolbarButton::after{left:4px}.toolbarButton.zoomIn::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAAZ0lEQVR4AWMYBGAUMOKT/P8OyhDCrYblPz4TvhN2AQte2f+UGvCPdANGDXiMJvsFh7gsLgM+4bDmE7Eu+IsuTaoX/lFoAGMBWkLsg4oXkZuZTkMZpiRnptGkjDBgoAsUxgYGeoBRAADcyxzU99YUOAAAAABJRU5ErkJggg==)}.toolbarButton.zoomOut::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAANElEQVR4AWMYjGAUjIJR8P8dkZABAYEICd4jDuI24BJxELcBx4mDOA1gcCASUh+MglEwCgByCshlS1ePZAAAAABJRU5ErkJggg==)}#viewThumbnail.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAoklEQVR4Ae2WRxqBQRAFn3AWdtIJnJcDcBfZSmYl00Z820ly1/fVruvPYaDcEZGacWZpPVafBCkYV5bmQYL6NMgB9nA2sE+CiKPEo//IA9ADODpKPHq9Ap93AJPJpGl7+cxsCySwJ0Vj2dJScP9xKCJSMbYsrcbqkyBZ48LSDEhQnwbZwR7OhvW8Avol1J+Rroj0AIbDYd82Ho1GfZCgXtcDJ2v6trc54vRYAAAAAElFTkSuQmCC)}html[dir=ltr] #viewOutline.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABEklEQVR4Ae3Uz0oCURiG8fcaupsCMcQLEYSiLkeYRRjeQ0ibmEhDw8q0v0NDtsps127mGDjn7cA3ZxUHvqVI7w9m+Sw+DoP1GOtMnDpR+lYCATpFwgUXRVJA8FPJB36eOefcPBoIzpV84Phw+ZQ/dA46EPxQ8gFsYQfb7uu3q7RBY433To0ofSn5I9oJZ5zZiYXgm5IPmFumTM3IQDBV8oGjfXOdX7X32hB8Vfp/B+GxypFTJUrvAXLEv1ZDTjldDVcQvAsIBcwFxxyb2EBwHBAKRM38PDuLmhEEbwJCAfW72KCxwp5TIUovSv6INuaAAxtbCF4q+cDylH32s24Gwb6SD7QaeTc7aTVaEOwprcX/4BdaviTCQo3L4wAAAABJRU5ErkJggg==)}html[dir=rtl] #viewOutline.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAABUUlEQVR4Ae3UzUoCURjG8ecauhPbFYghXoggFHU5Ay7CcGNtclViRVhaqNiXZh9SpKtK84N2M8fAmac5nCkXY3h2RfX+4A/v+rwc/IzhLl817BGeCBuuCEGAUofPGjqEYjfYZttu2LABGT5pgvJ2IzdxJSAAmcEhH6cb5AdQ1laG11Y9uZxEEpBBAAsaZvExM5jHnNtfNNxmR0OG8IR56QqP76DFBw0tQnGqbLLpVB04gAzvNUERZ3ITlc876Gd5N11/pw9ldUmcWOXEYgIJQAb/dwBusjVBmvCEWHGFCD9QqvNigjqhjEqssTYqjeAHGZ5/AYrIy03kBPwg003z1K+X7kGJx6wDcz8ei8NPJfDX3t0/XOethg3CE2TBFRzfQZnHGsqE4uRYZNHJjf+DI01Qhlm5mRkTJiDzkmJhum6qC8WIWhlzy4gaMACZb/0P3gH0LhwuZeBy2QAAAABJRU5ErkJggg==)}#viewAttachments.toolbarButton::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAADIklEQVR4Ad3MQ4DlAACD4axt27Zt27Zt27Zt27b9xrZto81rO+xIx/1z/oL/IKZ3BVma2YiYpQ8P4yd6SrPlPhZO70EWHqYbnQP/+nwT7enKPyxBEGnnJ+kcpFk3GS3QtN9Al+d0FJ8zc8oH3fiEHaP5CToF/hneG/kgl6NOM/9fdOSolA560J4OjjOiuWPgb4nnQEyZP66nXfCTYCTLRTva2D+oU17ix+kQ+GtEL+T4gHgbSJtw/XAkx21pbX+/dKMPWYXjtAv6MVTijlBtAq0DvgcgKd6d1rR0uCtzHqNtwHeZE6plCX1CS6PDRkiKW9HC4U6ZhhI/SuuAb7E8F2exEUEwk7CTVmGaCU0mIBEXLWnmcFvhR2gV8CWOi7dp47dO5txBqwiDHRORDVDzbqIFTexuKfwwLQI+D+sZw4VbNPd9O7qhxLfTUtDbNw0FIKXiNKOR3U2ZC4dpHvAxHr9JU9833TvXyc5tNBf0T8xCQUB90FU0paH9dZnzEE0DPgyK4zdo4vtK4VtpJuiemovCgPqgE42pb3+tTMONmbmPxgHv4vHrNPJ92VnhNBE1p+agCKA+KC5qqGt3tUxDZGJnGqn4NRr4Pu/SCdmEVTQWNefnqzgQJm8NdYLfNWqKTL7w3U7NjTmx/Cr1fZ/JnMtoxL9XFqMY1IXLe8u/XzYiiz2k7eFf3UEKzyZcoa7302huIP65tgglkDCC+fmPf651fQZlo/kn4gWbsJ5wgTo+jxW+lPr8fX1JEhywhGU5/uKvu9XyQVlRy9P8QyMa85/nfYUvoR5/3l+Jkkiq5VieT/zOHxZ18iJ6da4vsTlnf/HluootFa7DHw9XoDSSLbPrdX73mYC4SqIu6qEcMnMxNfz+cGUK/K28+fwa9py5CfUk/o9fX69HGSRfHXnlfR/wu3COBePhrFzFv/zyeh3KI9UyLR8c/po/xC9cwe5sxk6cJ77mb35+q/C0lHfxCP+H/Mxf/EcdaiT8RXz/YLnC01i+Su2erXK7Jn7gR34Me2l0cOQglEG6yoxyaFyiS8/+zftkbYuayIUMlRk5kA1pTgubqASwCGwwZgAAAABJRU5ErkJggg==)}.secondaryToolbarButton.scrollVertical::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABJElEQVRYw+1XwW3DMAy8C/p23/k3GxTdoitkh6yQUbpCtyi6QWP32Wcg/Svm4xgGIRmirSgIEgKGDJkgz6KPPBOZJiJ/MBjJdY7fkyGmqHXIlfBDaQChTyaRVSdmbtBVrqNz7tCDELWe74fLe/9T/AS6rts5555zfJum8XjYrRgNfeATwOsEPcexvkm+lwZwiFBPxzk/B8mXS/SBVCMKNRqRGPevBoAWUHNaMVS9pdYsiPV8WUpDKwBJ7LPmNxBLGKy0XkLD2OiVuSW5Og2z9YD3/jcy/7U+EACh9y17Am3b7h964O71wAeAt4k4YzZ8kdyWpuEGwDGz821qzYLFNvfHRCbKwEsB0O24yAlZAPwn3q7aNEyJEq2MTYBKiVJR4jS7DCdrO4IxIrnNqQAAAABJRU5ErkJggg==)}.secondaryToolbarButton.scrollHorizontal::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABE0lEQVRYw+1TwW0DIRCcjfj5kTacv/tIMy7BDaWDKyAVRDrFKeGQ30w+nLRZ7wJWpHzCSKcDsTMsMwBMTExM/HcIyY86PgB4F5FXXUDyDcBpUC/iv+g9AXD/pzoBgBuAoyN6rGs9sMGnmhfVBHQDe1eeMIyIPQmCmn1DzfnRRFIF0hDw1mjGET86hOtAROaA/VFNaRGTIstA962I0Ggg1E7GYnY2KCZLvS4dF8SLKg1Y7N0RPuAEjcv0GujlO2I1Bu4AozuAzsnoPDsGT7Hl4B3PRiANATox8IFovIPyqW6wi306AlcAyDmz1haTa1HfV8Bnztk+VwJgWpblrIqzI3AB8LyuK7Zt6+X9W/7ExMTE3+MbtVGT7qYHUMoAAAAASUVORK5CYII=)}.secondaryToolbarButton.scrollWrapped::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsUlEQVRYw+1XQU7DQAz0oJzLmXvzAhC/4AnwhvIF+Alf6C+AH7RZjhyr7J01l7RsjO3dpCCEVEtRkpXtzDq2xwsahJnfaYIAuMjf59o3uQ9xP+iKdzZ8Ms2QHEAaPsbKXX4ADgBpJzczWj/bP/R9vx1AsLjvnw9XjHEjPSv2OTDO/cYYt98iEEK47/v+vCZsi8UiyrUQwuoY+5P8mSCr4zURXTnZnWf+K4Ab0QfWRHQpMl0rYeT2OYCtU0IQDgjAUgDYGPpqCQJotT5gNaI0sRF5OiMgzQ92uJJe0qI7B4DV5djxAwuE1oqp0FKnRIpLv6eZolwR4qPIiJ1dYEYOeHZcigCM3aEAgJXqgceQjRFCq3658hdAsCCsCP9WGdYm7tc8EGN8U/hfzgdMRGnQHUmMMYgZwvSV2x8i0HXdwzF83nXd42ke+PfzwBMRXTt6eSY/A7gTdOzZS3kBcCvLsCWiXWXna421XSWAZS0XTBGe0LaLBxPvUFHq76wcbuRop3JBidFKEUoV/ODS8Ydz5JrLhqzNkxYAayjRwgdn5JLAUy0dp8IIBkdHhhvOgDPKgU/8BAgVvVaLzwAAAABJRU5ErkJggg==)}.secondaryToolbarButton.spreadNone::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAzElEQVRYw+1W2w3CMBCLEd9hCUboGuzFPqzBCOSDEZIBYn4KilBzuqbpSYhY6keq09nxPRTnBgYG/h3QBpK8OecmKaTIeQdw6S3gMZNAIP/kBXDW5D2ucCtXyJxCUBcBFP6jtQdaHMACKVtu3+oAF27f7MLWErAizEQAe+yBtT2AytyXpdjVASp7A5ZjaL4HKIwirMbwm+x9zhZNWKt5tugBrijP7g5Ia5lWDnDrUjpoA1NKz0KE+M2xfR0IIVxjjCdNrPc+jcfmwM/gBc7GXpo/qW9+AAAAAElFTkSuQmCC)}.secondaryToolbarButton.spreadOdd::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACNElEQVRYw+2Wu2sUURTGfyesaCGrrZBGjFgpokFRsLK2EC200MpGFAtBiaiVTUTEv8BarAO2qYJE0kgKQV1NfKCFCDvFhkWczyJnljs3985EUli4By47e893HnOeA2Ma05j+d7LqQdIcMJ3AKMYCS2Z2pgZalz/quJRMpctC+dCB9wFAGUcrPmY2FTnwLoMP70b/zWw/QCcAlAmhSrBMRCQXqTZMzZGJiFmd38BT4KB7ej3iK6O8OvPABU/pNHAOeO56y1C+k/D6A3DHzF5HvDIVyoT8nJndinjLwLKneSYXgcqzew6+JGlf4g3LBgdKYNZr4rCkBUmLkk445hkwbEvBAQfOANszIU45UAKfgAlJO4DLwG5gJ3DSC28IrDWlQMDdTCGppaUFTHr+Q32/gBcelb3uUNlUA8r0b5m4TxVh2D0D4LaZvZFkwP2oo5JtGDuTM5BKQWj8O3DDjXeABz6olHNAf/F2bXPgLXDVzH5I2gM8BA6ldHQyRqzBgDL8KkUrwBUz60s6Ajz2YiyDFra2FDQVYVM0hsBNNz4JPPJOWgsw28Lu6yTG5DXgm99Vvy+Bs/58HriYicC8mX30lvsCnN4QRukJcKopBZ/N7GttGZgNgFVX8LNhEA02sYFrEQy34WJizFq0QEZ8MzsevdmrzNKJ17PWxe1YUxGyxTZsauUajYqhKIrVaNYrMf8FyLE1CuRbT1EUKxtqoNfrzfb7/V2b+YzqdrtFfLdV+TGN6Z/RH9SvJLfI2RKxAAAAAElFTkSuQmCC)}.secondaryToolbarButton.spreadEven::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACfUlEQVRYw+2WPWhUQRSFv7smaCEJqCBRQQQtFCGgYoiVKCgWFoqIP+APpLAWBBs70UCK1BZaCCoIgqCRdEZEJSFiEDRiElQICBLEXZAkSt6xyN1lMnnzNmBh4V4YdmfmnOHOmTNzHzSiEY3438OqfyQ9AnblYBRjgWEzO7wANM/f6bg8TnUtC/lhAuMBQIlEq/OY2eYogbEEPhyr9c1sC0BTAMhySFVilqNISql6mAWJNCVIA8ANYNz7G4ETwFGgVCeBaeA28BiYBJqdfxI4knMsNQk/eOtJGUbSOceMJvijkjoK+F0xvxQdQQZ0O7hd0ktJg5I6HXMPmE1ILOAdMCapWdJlSW8lPZO0zTF3gbmiI5gESpJWAGeBVp/bA7wys1lJ0xEv3MBW4Hk0vgbYC7wHfnsCy1IJrAeeRmO/gCeuyiZgZYECcX/OfdTnY/td9azIhAqMMgNcMrNRSQZcqePwcO6+mV31xFdLOg9ciG5Urgfkv1+BM2Y2IKkJuOYPTRYvEvCVSPAH8Ab4GGNKOTuQA0/5ztuAW8ChCJNSoLqBY5JeS+oD9pnZiCswVZRABnwCusxsStIOd+72aHEVKJAFzYB1wGl//X4CI6kEMjfcRTMrS9oA9ADL/erNeJtLHAHAQ+AA0An0+6P0HXgQYFpz+ZKGJV2vV70k9UoaTvD7Ja0t4LZLGgr58S2YXkIFLfLAKuCmpDvAC+Cb3/k24CBwfFFRCrIbzKmEFhWQ2ryZdUS7G0oUnbg8a55uu/MUUJ0KpwJlsgS3sErWTFipVL5ELleO8wXIsQsi4NdtlUrl8yIPTExMdJfL5dalfEa1tLRU4rG/5TeiEf8s/gDDWIJiYZyY4wAAAABJRU5ErkJggg==)}.secondaryToolbarButton.documentProperties::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAADbElEQVR4AZWUX2hTZxjGHzMvEjAFd7cbbeiFpI3buitXLxyCF14IC1jEC4dTcRO8GJPeiMwVxCFbaRp6sYn0TnFr6dxwBVtLZ2zTNEebNC1mxjYxmVtnKJaMNX9Kcp69Hwdmer6msPd3OHx5/rznBEKw2bCJfvZylCkuCyk5BegXFTq65GEf/2Cef0n1T1osy6e8qEFxt1zg5JcqLNHNkaWScDZa0Gw+lMALi7X44u1Qz93uu92hnsXba3HRLJYl1bzZgjbzN7F/F7LpwS9OYx+82IW3hF1y2td9Oj3ILJX/QpJt9gXNZpI5RWHq4km0ogm2EaX14snClJWSdHP9Aqf5gFlFdqhlP9xoNO6W/dkhKykN538LapdFyjDzfGjnXjiw1Th27n0+pLLM1i7XUINc9JgZppkuhFrbsa0+zYOcEw4Sr8G21vZCSOWl5SFArPdxiUvm4pVj9qfX4ipYi9dQDxxXjpmLqrMeWAfoNlN8xmdLt/TvXn6snGK0iI3AvXRLOdJ0o/IhU4rr/uuw8+2nJaMYufHJDdj5TlqKih+FAJ/y6VoYTdDnTXTgfbnr07QWVr1CAP/8wiSTmYEM/icDqvf3CCoGn/BJ4lICOhxmTviR0ElcUr11A+YcF7gwf24eOkwqT+7QmT+nPHMOZowJJlJnU9ARxwI6qbPKMWOoTKkfS+5CDjriWEAnd0E5lTBe3WGMsZX+FeiIYwGdlX7lvPoJ6SBnOVueKENHHAvolCeUkw5i/GM+Emb5rh4S3QIa70hDnLFTOOGpTtOgUQwWYUd0C9gpBpVenT7hAbYn+xkVZunTglELTffxsdKT/dgOoOtANcwII9Wf6dwYzH+v9PwPedRDpyRVPtx1oAuQyzVzjdNCtBbkG8Rr0I4PhPdQN5LoY1TlZ67BBWt83tVhhgWDgQ1voeOUhKGyq8M+rw8+KQtwfHS4NMpJIco7bCMa0CZuVOVKo6cOb/z7cX12tHSPD4Uw4/yGb9vLonzNmLiSKd37vBMu2GbH8SOrgwxRMcM5jvErnmGncEZOY6LMWO7q4PEj2AF94NrdEblqTvABFZOM0OAjwZDTpKWaE5GruzvgQoNxoKXTv9Bbvc9fdar3F3o7/WiR1Jbjwh7voYHziZ6XN8sj5rg5Xh55eTPRM3Deewh79Gf/C1dTNwWJacanAAAAAElFTkSuQmCC)}.outlineItemToggler::before{-webkit-transform:scale(.5);transform:scale(.5);top:-1px;content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAc0lEQVR4AWOgM3gx4cUZAnACwwupF8fwKQHKSoPMSserKA1iIduLTbiUAGXYYO6yw6nIlrDzJ6D6URbT+UARKfSgyMDmZHRF7AjnI5yMqcwBRZEN4dDvwx1FciDnYzoZu/NT8Uc3x4vNLzZiOBnT+ZhOBgAIx/kNQRV40AAAAABJRU5ErkJggg==)}html[dir=ltr] .outlineItemToggler.outlineItemsHidden::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAXElEQVR4AWMAgRd9L6QZCIEXZ14cfZH2gp2AIjDc8MIWryIYBFlMUBHMYryK8FiMkMZjMUIKj8UICWwWE1a08YUdxdb1v5BBczimJRQGJsISTICwhNKkArYEDwAAaN/49eXnGYUAAAAASUVORK5CYII=)}html[dir=rtl] .outlineItemToggler.outlineItemsHidden::before{content:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAbklEQVR4AWN48eIFuVgaiPtgfHIMYAfiNCA+CsRnyDXIFog3QA04Q6JBCG8gNGMaRJI3yDMI0xuEDSLsDcIG4fQGGQZheoMSg+yAeCOyggH1GjqWAeJ+ahhEyLv0T5A4vUuBQYS9S+9ihLB3YXwAD0vcoqLfKjwAAAAASUVORK5CYII=)}html[dir=ltr] .outlineItemToggler::before{right:0}html[dir=rtl] .outlineItemToggler::before{left:0}}@media print{body{background:rgba(0,0,0,0)}#errorWrapper,#loadingBox,#secondaryToolbar,#sidebarContainer,.textLayer,.toolbar{display:none}#viewerContainer{overflow:visible}#mainContainer,#viewerContainer,.page,.page canvas{position:static;padding:0;margin:0}.page{float:left;display:none;border:none;box-shadow:none;background-clip:content-box;background-color:rgba(255,255,255,1)}.page[data-loaded]{display:block}.fileInput,body[data-pdfjsprinting] #outerContainer{display:none}#printContainer canvas,#printContainer img,body[data-pdfjsprinting] #printContainer{display:block}#printContainer{height:100%}#printContainer>div{position:relative;top:0;left:0;width:1px;height:1px;overflow:visible;page-break-after:always;page-break-inside:avoid}}", "#viewerContainer{overflow:auto;-webkit-overflow-scrolling:touch;position:absolute}.invisible{display:none!important}body[data-pdfjsprinting] #printContainer,body[data-pdfjsprinting] #printContainer *{padding:0;margin:0;font:message-box;outline:0}#printContainer canvas,#printContainer img{display:block!important}#outerContainer{-webkit-clip-path:inset(0 0 0 0);clip-path:inset(0 0 0 0)}@media print{body[data-pdfjsprinting]>*{display:none!important}body[data-pdfjsprinting] #printContainer{display:block!important}body[data-pdfjsprinting] #printContainer div img{height:100vh!important}body,html{overflow-y:visible!important}html.cdk-global-scrollblock{width:initial;position:initial}}html[dir=ltr] .splitToolbarButton,html[dir=rtl] .splitToolbarButton{display:inline}.textLayer .highlight.color0{background-color:rgba(180,0,170,.4)}.textLayer .highlight.color0.selected{background-color:#b400aa}.textLayer .highlight.color1{background-color:rgb(0,100,0,.4)}.textLayer .highlight.color1.selected{background-color:#006400}.textLayer .highlight.color2{background-color:rgb(0,0,255,.4)}.textLayer .highlight.color2.selected{background-color:#00f}.textLayer .highlight.color3{background-color:rgb(255,0,0,.4)}.textLayer .highlight.color3.selected{background-color:red}textLayer .highlight.color4{background-color:rgb(255,94,0,.4)}.textLayer .highlight.color4.selected{background-color:#ff5e00}html[dir=ltr] .dropdownToolbarButton,html[dir=ltr] .overlayButton,html[dir=ltr] .toolbarButton{margin:3px 0 4px}html[dir=ltr] .splitToolbarButton:last-child,html[dir=ltr] .toolbarButton:last-child,html[dir=rtl] .splitToolbarButton:first-child,html[dir=rtl] .toolbarButton:first-child{margin-right:0;margin-left:0}html[dir=ltr] #secondaryToolbarToggle{margin-right:4px;margin-left:0}html[dir=rtl] #secondaryToolbarToggle{margin-right:0;margin-left:4px}.dropdownToolbarButton,.overlayButton,.secondaryToolbarButton,.toolbarButton{padding-left:0;padding-right:0}.offscreen{position:fixed!important;left:-9999px!important;display:block!important;width:3000px!important}.offscreen #sidebarContainer{top:1000px!important}.dropdownToolbarButton,.toolbarButton{margin-left:-1px!important;margin-right:-2px!important}#numPages{padding-right:0}.dropdownToolbarButton::after{top:8px}"]
            }] }
];
/** @nocollapse */
NgxExtendedPdfViewerComponent.ctorParameters = () => [
    { type: NgZone },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
    { type: PDFNotificationService },
    { type: Location }
];
NgxExtendedPdfViewerComponent.propDecorators = {
    dummyComponents: [{ type: ViewChild, args: [PdfDummyComponentsComponent,] }],
    root: [{ type: ViewChild, args: ['root',] }],
    customFindbarInputArea: [{ type: Input }],
    customToolbar: [{ type: Input }],
    customFindbar: [{ type: Input }],
    customFindbarButtons: [{ type: Input }],
    customSecondaryToolbar: [{ type: Input }],
    secondaryToolbarComponent: [{ type: ViewChild, args: ['pdfSecondaryToolbarComponent',] }],
    srcChange: [{ type: Output }],
    contextMenuAllowed: [{ type: Input }],
    afterPrint: [{ type: Output }],
    beforePrint: [{ type: Output }],
    currentZoomFactor: [{ type: Output }],
    enablePrint: [{ type: Input }],
    delayFirstView: [{ type: Input }],
    logLevel: [{ type: Input }],
    printResolution: [{ type: Input }],
    rotation: [{ type: Input }],
    rotationChange: [{ type: Output }],
    src: [{ type: Input }],
    base64Src: [{ type: Input }],
    height: [{ type: Input }],
    useBrowserLocale: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    filenameForDownload: [{ type: Input }],
    ignoreKeyboard: [{ type: Input }],
    ignoreKeys: [{ type: Input }],
    acceptKeys: [{ type: Input }],
    imageResourcesPath: [{ type: Input }],
    language: [{ type: Input }],
    listenToURL: [{ type: Input }],
    nameddest: [{ type: Input }],
    password: [{ type: Input }],
    showUnverifiedSignatures: [{ type: Input }],
    startTabindex: [{ type: Input }],
    showSidebarButton: [{ type: Input }],
    showSidebarOnLoad: [{ type: Input }],
    sidebarVisible: [{ type: Input }],
    sidebarVisibleChange: [{ type: Output }],
    showFindButton: [{ type: Input }],
    showPagingButtons: [{ type: Input }],
    showZoomButtons: [{ type: Input }],
    showPresentationModeButton: [{ type: Input }],
    showOpenFileButton: [{ type: Input }],
    showPrintButton: [{ type: Input }],
    showDownloadButton: [{ type: Input }],
    showBookmarkButton: [{ type: Input }],
    showSecondaryToolbarButton: [{ type: Input }],
    showRotateButton: [{ type: Input }],
    handTool: [{ type: Input }],
    handToolChange: [{ type: Output }],
    showHandToolButton: [{ type: Input }],
    showScrollingButton: [{ type: Input }],
    showSpreadButton: [{ type: Input }],
    showPropertiesButton: [{ type: Input }],
    showBorders: [{ type: Input }],
    spread: [{ type: Input }],
    spreadChange: [{ type: Output }],
    page: [{ type: Input }],
    pageChange: [{ type: Output }],
    pageLabel: [{ type: Input }],
    pageLabelChange: [{ type: Output }],
    pagesLoaded: [{ type: Output }],
    pageRendered: [{ type: Output }],
    pdfDownloaded: [{ type: Output }],
    pdfLoaded: [{ type: Output }],
    pdfLoadingFailed: [{ type: Output }],
    textLayer: [{ type: Input }],
    textlayerRendered: [{ type: Output }],
    textLayerRendered: [{ type: Output }],
    updateFindMatchesCount: [{ type: Output }],
    updateFindState: [{ type: Output }],
    zoom: [{ type: Input }],
    zoomChange: [{ type: Output }],
    _mobileFriendlyZoom: [{ type: Input }],
    mobileFriendlyZoom: [{ type: Input }],
    mobileZoom: [{ type: Input }],
    onContextMenu: [{ type: HostListener, args: ['contextmenu',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxExtendedPdfViewerService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
    }
    /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    findMultiple(text, options = {}) {
        options = Object.assign({}, options, { findMultipleSearchTexts: true });
        /** @type {?} */
        const searchString = text.join('\n') + '\n';
        return this.find(searchString, options);
    }
    /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    find(text, options = {}) {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            /** @type {?} */
            const highlightAllCheckbox = (/** @type {?} */ (document.getElementById('findHighlightAll')));
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = options.highlightAll || false;
            }
            /** @type {?} */
            const matchCaseCheckbox = (/** @type {?} */ (document.getElementById('findMatchCase')));
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = options.matchCase || false;
            }
            /** @type {?} */
            const entireWordCheckbox = (/** @type {?} */ (document.getElementById('findEntireWord')));
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = options.wholeWords || false;
            }
            /** @type {?} */
            const findIgnoreAccentsCheckbox = (/** @type {?} */ (document.getElementById('findIgnoreAccents')));
            if (findIgnoreAccentsCheckbox) {
                findIgnoreAccentsCheckbox.checked = options.ignoreAccents || false;
            }
            /** @type {?} */
            const multipleSearchTerms = options.findMultipleSearchTexts || text.includes('\n') || false;
            /** @type {?} */
            const findMultipleSearchTextsCheckbox = (/** @type {?} */ (document.getElementById('findMultipleSearchTexts')));
            if (findMultipleSearchTextsCheckbox) {
                findMultipleSearchTextsCheckbox.checked = multipleSearchTerms;
            }
            /** @type {?} */
            const individualWordsModeCheckbox = (/** @type {?} */ (document.getElementById('individualWordsMode')));
            if (individualWordsModeCheckbox) {
                individualWordsModeCheckbox.checked = false;
            }
            /** @type {?} */
            const inputField = multipleSearchTerms ? document.getElementById('findInputMultiline') : document.getElementById('findInput');
            if (inputField) {
                if (inputField instanceof HTMLTextAreaElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    ((/** @type {?} */ (document.getElementById('findInput')))).classList.add('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsModeLabel')))).classList.remove('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsMode')))).classList.remove('hidden');
                    // end of the dirty hack
                }
                else if (inputField instanceof HTMLInputElement) {
                    inputField.value = text;
                    // todo dirty hack!
                    inputField.classList.remove('hidden');
                    ((/** @type {?} */ (document.getElementById('findInputMultiline')))).classList.add('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsModeLabel')))).classList.add('hidden');
                    ((/** @type {?} */ (document.getElementById('individualWordsMode')))).classList.add('hidden');
                    // end of the dirty hack
                }
                inputField.dispatchEvent(new Event('input'));
                return true;
            }
            else {
                // tslint:disable-next-line:quotemark
                console.error("Unexpected error: the input field used to search isn't part of the DOM.");
                return false;
            }
        }
    }
    /**
     * @return {?}
     */
    findNext() {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
            return false;
        }
        else {
            /** @type {?} */
            const button = document.getElementById('findNext');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
    /**
     * @return {?}
     */
    findPrevious() {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
            return false;
        }
        else {
            /** @type {?} */
            const button = document.getElementById('findPrevious');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    }
}
NgxExtendedPdfViewerService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NgxExtendedPdfViewerService.ctorParameters = () => [];
/** @nocollapse */ NgxExtendedPdfViewerService.ngInjectableDef = defineInjectable({ factory: function NgxExtendedPdfViewerService_Factory() { return new NgxExtendedPdfViewerService(); }, token: NgxExtendedPdfViewerService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfHandToolComponent {
    /**
     * @param {?} notificationService
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showHandToolButton = true;
        this.isSelected = false;
        /** @type {?} */
        const subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        () => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    onPdfJsInit() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ tool }) => (this.isSelected = tool === PdfCursorTools.HAND)));
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.HAND });
    }
}
PdfHandToolComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-hand-tool',
                template: "<button\n  (click)=\"onClick()\"\n  type=\"button\"\n  [class.invisible]=\"!showHandToolButton\"\n  [class.toggled]=\"isSelected\"\n  id=\"primaryCursorHandTool\"\n  class=\"toolbarButton hiddenXXLView\"\n  title=\"Enable hand tool\"\n  data-l10n-id=\"cursor_hand_tool\">\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M13,6V11H18V7.75L22.25,12L18,16.25V13H13V18H16.25L12,22.25L7.75,18H11V13H6V16.25L1.75,12L6,7.75V11H11V6H7.75L12,1.75L16.25,6H13Z\" />\n  </svg>\n  <span data-l10n-id=\"cursor_hand_tool_label\">Hand Tool</span>\n</button>\n",
                styles: [":host{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}"]
            }] }
];
/** @nocollapse */
PdfHandToolComponent.ctorParameters = () => [
    { type: PDFNotificationService }
];
PdfHandToolComponent.propDecorators = {
    showHandToolButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PageNumberComponent {
    constructor() {
        this.showPagingButtons = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PageNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'page-number',
                template: "<input\n  [class.invisible]=\"!showPagingButtons\"\n  type=\"number\"\n  id=\"pageNumber\"\n  class=\"toolbarField pageNumber\"\n  title=\"Page\"\n  value=\"1\"\n  size=\"4\"\n  min=\"1\"\n  data-l10n-id=\"page\"\n/>\n<span [class.invisible]=\"!showPagingButtons\" id=\"numPages\" class=\"toolbarLabel\"></span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PageNumberComponent.ctorParameters = () => [];
PageNumberComponent.propDecorators = {
    showPagingButtons: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfBookmarkComponent {
    constructor() {
        this.showBookmarkButton = true;
    }
}
PdfBookmarkComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-bookmark',
                template: "<a\n  href=\"#\"\n  [class.invisible]=\"!showBookmarkButton\"\n  id=\"viewBookmark\"\n  class=\"toolbarButton hiddenTinyView\"\n  title=\"Current view (copy or open in new window)\"\n  data-l10n-id=\"bookmark\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z\" />\n  </svg>\n  <span data-l10n-id=\"bookmark_label\">Current View</span>\n</a>\n",
                styles: [":host{margin-top:4px}:host:focus{outline:0}a:focus,svg:focus{outline:0}"]
            }] }
];
PdfBookmarkComponent.propDecorators = {
    showBookmarkButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfContextMenuComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfContextMenuComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-context-menu',
                template: "<!-- the context menu is deactivated because only Firefox supports it -->\n<div style=\"display:none\" type=\"context\" id=\"viewerContextMenu\">\n  <div style=\"display:none\" id=\"contextFirstPage\"></div>\n  <div style=\"display:none\" id=\"contextLastPage\"></div>\n  <div style=\"display:none\" id=\"contextPageRotateCw\"></div>\n  <div style=\"display:none\" id=\"contextPageRotateCcw\"></div>\n</div>\n",
                styles: [":host{margin-top:4px}"]
            }] }
];
/** @nocollapse */
PdfContextMenuComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfDocumentPropertiesOverlayComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfDocumentPropertiesOverlayComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-document-properties-overlay',
                template: "<div>\n  <div class=\"dialog\">\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_file_name\"\n        >File name:</span\n      >\n      <p id=\"fileNameField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_file_size\"\n        >File size:</span\n      >\n      <p id=\"fileSizeField\">-</p>\n    </div>\n    <div class=\"separator\"></div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_title\">Title:</span>\n      <p id=\"titleField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_author\">Author:</span>\n      <p id=\"authorField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_subject\">Subject:</span>\n      <p id=\"subjectField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_keywords\"\n        >Keywords:</span\n      >\n      <p id=\"keywordsField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_creation_date\"\n        >Creation Date:</span\n      >\n      <p id=\"creationDateField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_modification_date\"\n        >Modification Date:</span\n      >\n      <p id=\"modificationDateField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_creator\">Creator:</span>\n      <p id=\"creatorField\">-</p>\n    </div>\n    <div class=\"separator\"></div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_producer\"\n        >PDF Producer:</span\n      >\n      <p id=\"producerField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_version\"\n        >PDF Version:</span\n      >\n      <p id=\"versionField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_page_count\"\n        >Page Count:</span\n      >\n      <p id=\"pageCountField\">-</p>\n    </div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_page_size\"\n        >Page Size:</span\n      >\n      <p id=\"pageSizeField\">-</p>\n    </div>\n    <div class=\"separator\"></div>\n    <div class=\"row\">\n      <span data-l10n-id=\"document_properties_linearized\"\n        >Fast Web View:</span\n      >\n      <p id=\"linearizedField\">-</p>\n    </div>\n    <div class=\"buttonRow\">\n      <button type=\"button\" id=\"documentPropertiesClose\" class=\"overlayButton\">\n        <span data-l10n-id=\"document_properties_close\">Close</span>\n      </button>\n    </div>\n  </div>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfDocumentPropertiesOverlayComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfDownloadComponent {
    constructor() {
        this.showDownloadButton = true;
    }
}
PdfDownloadComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-download',
                template: "<button\n  type=\"button\"\n  id=\"download\"\n  class=\"toolbarButton hiddenSmallView\"\n  [class.invisible]=\"!showDownloadButton\"\n  title=\"Download\"\n  data-l10n-id=\"download\"\n>\n  <svg style=\"width:20px;height:20px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,19L8,15H10.5V12H13.5V15H16L12,19Z\" />\n  </svg>\n  <span data-l10n-id=\"download_label\">Download</span>\n</button>\n",
                styles: [":host{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
PdfDownloadComponent.propDecorators = {
    showDownloadButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindbarComponent {
    constructor() {
        this.showFindButton = true;
    }
}
PdfFindbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-findbar',
                template: "<ng-container [ngTemplateOutlet]=\"customFindbar ? customFindbar : defaultFindbar\">\n</ng-container>\n\n<ng-template #defaultFindbar>\n  <div\n    class=\"findbar hidden doorHanger\"\n    [class.invisible]=\"!showFindButton\"\n    id=\"findbar\"\n    [style.transform]=\"'scale(' + mobileFriendlyZoomScale + ')'\"\n    [style.transformOrigin]=\"'left center'\"\n    [style.left]=\"findbarLeft\"\n    [style.top]=\"findbarTop\"\n  >\n    <ng-container [ngTemplateOutlet]=\"customFindbarButtons ? customFindbarButtons : defaultFindbarButtons\"> </ng-container>\n    </div>\n</ng-template>\n\n<ng-template #defaultFindbarButtons>\n  <pdf-find-input-area [customFindbarInputArea]=\"customFindbarInputArea\"></pdf-find-input-area>\n  <pdf-findbar-options-one-container></pdf-findbar-options-one-container>\n  <pdf-findbar-options-two-container></pdf-findbar-options-two-container>\n  <pdf-findbar-options-three-container></pdf-findbar-options-three-container>\n  <pdf-findbar-message-container></pdf-findbar-message-container>\n</ng-template>\n",
                styles: [""]
            }] }
];
PdfFindbarComponent.propDecorators = {
    showFindButton: [{ type: Input }],
    mobileFriendlyZoomScale: [{ type: Input }],
    findbarLeft: [{ type: Input }],
    findbarTop: [{ type: Input }],
    customFindbarInputArea: [{ type: Input }],
    customFindbar: [{ type: Input }],
    customFindbarButtons: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindbarMessageContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindbarMessageContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-findbar-message-container',
                template: "<div id=\"findbarMessageContainer\">\n  <span id=\"findMsg\" class=\"toolbarLabel\"></span>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindbarMessageContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindbarOptionsOneContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindbarOptionsOneContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-findbar-options-one-container',
                template: "<div id=\"findbarOptionsOneContainer\">\n  <pdf-find-highlight-all></pdf-find-highlight-all>\n  <pdf-find-match-case></pdf-find-match-case>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindbarOptionsOneContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindbarOptionsThreeContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindbarOptionsThreeContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-findbar-options-three-container',
                template: "<div id=\"findbarOptionsThreeContainer\">\n  <pdf-find-ignore-accents></pdf-find-ignore-accents>\n  <pdf-find-results-count></pdf-find-results-count>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindbarOptionsThreeContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindbarOptionsTwoContainerComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindbarOptionsTwoContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-findbar-options-two-container',
                template: "<div id=\"findbarOptionsTwoContainer\">\n  <pdf-find-entire-word></pdf-find-entire-word>\n  <pdf-find-entire-phrase></pdf-find-entire-phrase>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindbarOptionsTwoContainerComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindButtonComponent {
    constructor() {
        this.showFindButton = undefined;
        this.textLayer = undefined;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-button',
                template: "<button\n  type=\"button\"\n  [class.invisible]=\"!showFindButton || !textLayer\"\n  id=\"viewFind\"\n  class=\"toolbarButton\"\n  title=\"Find in Document\"\n  data-l10n-id=\"findbar\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z\" />\n  </svg>\n  <span data-l10n-id=\"findbar_label\">Find</span>\n</button>\n",
                styles: ["button svg{margin-top:-2px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
/** @nocollapse */
PdfFindButtonComponent.ctorParameters = () => [];
PdfFindButtonComponent.propDecorators = {
    showFindButton: [{ type: Input }],
    textLayer: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindEntireWordComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindEntireWordComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-entire-word',
                template: "<input\n  type=\"checkbox\"\n  id=\"findEntireWord\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findEntireWord\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_entire_word_label\">\n  Whole words\n</label>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindEntireWordComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindHighlightAllComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindHighlightAllComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-highlight-all',
                template: "<input\n  type=\"checkbox\"\n  id=\"findHighlightAll\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findHighlightAll\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_highlight\">\n  Highlight all\n</label>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindHighlightAllComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindIgnoreAccentsComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindIgnoreAccentsComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-ignore-accents',
                template: "<input\n  type=\"checkbox\"\n  id=\"findIgnoreAccents\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findIgnoreAccents\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_ignore_accents\">\n    Ignore accents and diacritics\n</label>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindIgnoreAccentsComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindInputAreaComponent {
    constructor() { }
}
PdfFindInputAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-input-area',
                template: "<div id=\"findbarInputContainer\" *ngIf=\"!customFindbarInputArea\">\n  <pdf-search-input-field></pdf-search-input-field>\n  <div class=\"splitToolbarButton\"></div>\n  <pdf-find-previous></pdf-find-previous>\n  <pdf-split-toolbar-button></pdf-split-toolbar-button>\n  <pdf-find-next></pdf-find-next>\n</div>\n\n<ng-container [ngTemplateOutlet]=\"customFindbarInputArea\"> </ng-container>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindInputAreaComponent.ctorParameters = () => [];
PdfFindInputAreaComponent.propDecorators = {
    customFindbarInputArea: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindMatchCaseComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindMatchCaseComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-match-case',
                template: "<input\n  type=\"checkbox\"\n  id=\"findMatchCase\"\n  class=\"toolbarField\"\n/>\n<label\n  for=\"findMatchCase\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_match_case_label\">\n    Match case\n</label>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindMatchCaseComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindbarService {
    constructor() {
        this.individualWordsMode = true;
        this.multipleSearchTexts = false;
    }
}
PdfFindbarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PdfFindbarService.ngInjectableDef = defineInjectable({ factory: function PdfFindbarService_Factory() { return new PdfFindbarService(); }, token: PdfFindbarService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindMultipleSearchTextsComponent {
    /**
     * @param {?} pdfFindbarService
     */
    constructor(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PdfFindMultipleSearchTextsComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-entire-phrase',
                template: "<input\n  type=\"checkbox\"\n  id=\"findMultipleSearchTexts\"\n  class=\"toolbarField\"\n  [(ngModel)]=\"pdfFindbarService.multipleSearchTexts\"\n/>\n\n<label\n  for=\"findMultipleSearchTexts\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_multiple_texts_label\">\n  multiple search texts\n</label>\n\n<input [class.hidden]=\"!pdfFindbarService.multipleSearchTexts\"\n  type=\"checkbox\"\n  id=\"individualWordsMode\"\n  class=\"toolbarField\"\n  [(ngModel)]=\"pdfFindbarService.individualWordsMode\"\n/>\n\n<label [class.hidden]=\"!pdfFindbarService.multipleSearchTexts\"\n  for=\"individualWordsMode\"\n  id=\"individualWordsModeLabel\"\n  class=\"toolbarLabel\"\n  data-l10n-id=\"find_individual_words_label\">\n  separated by word boundaries\n</label>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindMultipleSearchTextsComponent.ctorParameters = () => [
    { type: PdfFindbarService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindNextComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindNextComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-next',
                template: "<button type=\"button\"\n  id=\"findNext\"\n  class=\"toolbarButton\"\n  title=\"Find the next occurrence of the phrase\"\n  data-l10n-id=\"find_next\">\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"find_next_label\">Next</span>\n</button>\n",
                styles: ["button.toolbarButton{margin-top:0}"]
            }] }
];
/** @nocollapse */
PdfFindNextComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindPreviousComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindPreviousComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-previous',
                template: "<button type=\"button\"\n  id=\"findPrevious\"\n  class=\"toolbarButton\"\n  title=\"Find the previous occurrence of the phrase\"\n  data-l10n-id=\"find_previous\"\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"find_previous_label\">Previous</span>\n</button>\n",
                styles: ["button.toolbarButton{margin-top:0}"]
            }] }
];
/** @nocollapse */
PdfFindPreviousComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFindResultsCountComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfFindResultsCountComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-find-results-count',
                template: "<span id=\"findResultsCount\" class=\"toolbarLabel hidden\"></span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFindResultsCountComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfFirstPageComponent {
    /**
     * @param {?} notificationService
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.disableFirstPage = true;
        /** @type {?} */
        const subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        () => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    firstPage() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    /**
     * @return {?}
     */
    onPdfJsInit() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.updateUIState(event)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateUIState(event) {
        this.disableFirstPage = event.pageNumber <= 1;
        this.button.nativeElement.disabled = this.disableFirstPage;
    }
}
PdfFirstPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-first-page',
                template: "<button type=\"button\"\n  class=\"toolbarButton hiddenLargeView\"\n  title=\"First page\"\n  id=\"primaryFirstPage\"\n  data-l10n-id=\"first_page\"\n  (click)=\"firstPage()\"\n  [disabled]=\"disableFirstPage\"\n  #button\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\n  </svg>\n  <span data-l10n-id=\"first_page_label\">First page</span>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfFirstPageComponent.ctorParameters = () => [
    { type: PDFNotificationService }
];
PdfFirstPageComponent.propDecorators = {
    button: [{ type: ViewChild, args: ['button',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfLastPageComponent {
    /**
     * @param {?} notificationService
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.disableLastPage = true;
        /** @type {?} */
        const subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        () => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    firstPage() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    }
    /**
     * @return {?}
     */
    onPdfJsInit() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        event => this.updateUIState(event)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateUIState(event) {
        this.disableLastPage = event.pageNumber === event.pagesCount;
        this.button.nativeElement.disabled = this.disableLastPage;
    }
    /**
     * @return {?}
     */
    lastPage() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('lastpage');
    }
}
PdfLastPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-last-page',
                template: "<button type=\"button\"\n  class=\"toolbarButton hiddenLargeView\"\n  title=\"Last page\"\n  id=\"primaryLastPage\"\n  data-l10n-id=\"last_page\"\n  (click)=\"lastPage()\"\n  [disabled]=\"disableLastPage\"\n  #button\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z\" />\n  </svg>\n  <span data-l10n-id=\"last_page_label\">Last page</span>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfLastPageComponent.ctorParameters = () => [
    { type: PDFNotificationService }
];
PdfLastPageComponent.propDecorators = {
    button: [{ type: ViewChild, args: ['button',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfNextPageComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PdfNextPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-next-page',
                template: "<button type=\"button\"\n  class=\"toolbarButton\"\n  title=\"Next Page\"\n  id=\"next\"\n  data-l10n-id=\"next\"\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"next_label\">Next</span>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfNextPageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfOpenFileComponent {
    constructor() {
        this.showOpenFileButton = true;
    }
}
PdfOpenFileComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-open-file',
                template: "<button type=\"button\"\n        [class.invisible]=\"!showOpenFileButton\"\n        id=\"openFile\"\n        class=\"toolbarButton hiddenMediumView\"\n        title=\"Open File\"\n        data-l10n-id=\"open_file\">\n  <svg style=\"width:24px;height:20px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M14,2L20,8V20A2,2 0 0,1 18,22H6A2,2 0 0,1 4,20V4A2,2 0 0,1 6,2H14M18,20V9H13V4H6V20H18M12,12L16,16H13.5V19H10.5V16H8L12,12Z\" />\n  </svg>\n  <span data-l10n-id=\"open_file_label\">Open</span>\n</button>\n",
                styles: [":host{margin-top:0}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
PdfOpenFileComponent.propDecorators = {
    showOpenFileButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfPageNumberComponent {
    constructor() {
        this.showPagingButtons = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PdfPageNumberComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-page-number',
                template: "<input\n  [class.invisible]=\"!showPagingButtons\"\n  type=\"number\"\n  id=\"pageNumber\"\n  class=\"toolbarField pageNumber\"\n  title=\"Page\"\n  value=\"1\"\n  size=\"4\"\n  min=\"1\"\n  data-l10n-id=\"page\"\n/>\n<span [class.invisible]=\"!showPagingButtons\" id=\"numPages\" class=\"toolbarLabel\"></span>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfPageNumberComponent.ctorParameters = () => [];
PdfPageNumberComponent.propDecorators = {
    showPagingButtons: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfPagingAreaComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
PdfPagingAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-paging-area',
                template: "<div\n[class.invisible]=\"!showPagingButtons\"\nclass=\"paging-left hiddenTinyView\"\n>\n<pdf-first-page style=\"margin-right: -3px;\"></pdf-first-page>\n<pdf-previous-page style=\"margin-left: -3px;\"></pdf-previous-page>\n</div>\n<pdf-page-number [showPagingButtons]=\"showPagingButtons\"></pdf-page-number>\n<div\n[class.invisible]=\"!showPagingButtons\"\nclass=\"paging-right hiddenTinyView\"\n>\n<pdf-next-page style=\"margin-right: -3px;margin-left: -3px;\"></pdf-next-page>\n<pdf-last-page style=\"margin-left: -3px;\"></pdf-last-page>\n</div>\n",
                styles: [".paging-right{float:right;display:block;margin-top:-2px}.paging-left{float:left;display:block;margin-top:-2px}"]
            }] }
];
PdfPagingAreaComponent.propDecorators = {
    showPagingButtons: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfPresentationModeComponent {
    constructor() {
        this.showPresentationModeButton = true;
    }
}
PdfPresentationModeComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-presentation-mode',
                template: "<button type=\"button\"\n        [class.invisible]=\"!showPresentationModeButton\"\n        id=\"presentationMode\"\n        class=\"toolbarButton hiddenLargeView\"\n        title=\"Switch to Presentation Mode\"\n        data-l10n-id=\"presentation_mode\">\n  <svg style=\"width:27px;height:27px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\n  </svg>\n  <span data-l10n-id=\"presentation_mode_label\">Presentation Mode</span>\n  </button>\n",
                styles: [":host{margin-top:-3px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
PdfPresentationModeComponent.propDecorators = {
    showPresentationModeButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfPreviousPageComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PdfPreviousPageComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-previous-page',
                template: "\n<button type=\"button\"\n  class=\"toolbarButton\"\n  title=\"Previous Page\"\n  id=\"previous\"\n  data-l10n-id=\"previous\"\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z\" />\n  </svg>\n  <span data-l10n-id=\"previous_label\">Previous</span>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfPreviousPageComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfPrintComponent {
    constructor() {
        this.showPrintButton = true;
    }
}
PdfPrintComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-print',
                template: "<button type=\"button\"\n    [class.invisible]=\"!showPrintButton\"\n    id=\"print\"\n    class=\"toolbarButton hiddenSmallView\"\n    title=\"Print\"\n    data-l10n-id=\"print\"\n    >\n    <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n        <path fill=\"currentColor\" d=\"M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z\" />\n    </svg>\n    <span data-l10n-id=\"print_label\">Print</span>\n</button>\n",
                styles: [":host{margin-top:-1px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
PdfPrintComponent.propDecorators = {
    showPrintButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfRotatePageComponent {
    /**
     * @param {?} notificationService
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showRotateButton = true;
        this.disableRotate = true;
        /** @type {?} */
        const subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        () => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    rotateCW() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    }
    /**
     * @return {?}
     */
    rotateCCW() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    }
    /**
     * @return {?}
     */
    onPdfJsInit() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        (event) => this.updateUIState(event)));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    updateUIState(event) {
        this.disableRotate = event.pagesCount === 0;
        this.button1.nativeElement.disabled = this.disableRotate;
        this.button2.nativeElement.disabled = this.disableRotate;
    }
}
PdfRotatePageComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-rotate-page',
                template: "<button\n  (click)=\"rotateCW()\"\n  type=\"button\"\n  [class.invisible]=\"!showRotateButton\"\n  id=\"primaryPageRotateCw\"\n  class=\"toolbarButton hiddenXLView rotateCw\"\n  title=\"Rotate Clockwise\"\n  data-l10n-id=\"page_rotate_cw\"\n  [disabled]=\"disableRotate\"\n  #button1>\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\n    </svg>\n</button>\n<button\n  (click)=\"rotateCCW()\"\n  type=\"button\"\n  [class.invisible]=\"!showRotateButton\"\n  id=\"primaryPageRotateCcw\"\n  class=\"toolbarButton hiddenXLView rotateCcw\"\n  title=\"Rotate Counterclockwise\"\n  data-l10n-id=\"page_rotate_ccw\"\n  [disabled]=\"disableRotate\"\n  #button2>\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\n    </svg>\n</button>\n",
                styles: [":host{margin-top:-1px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
/** @nocollapse */
PdfRotatePageComponent.ctorParameters = () => [
    { type: PDFNotificationService }
];
PdfRotatePageComponent.propDecorators = {
    showRotateButton: [{ type: Input }],
    button1: [{ type: ViewChild, args: ['button1',] }],
    button2: [{ type: ViewChild, args: ['button2',] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfSearchInputFieldComponent {
    /**
     * @param {?} pdfFindbarService
     */
    constructor(pdfFindbarService) {
        this.pdfFindbarService = pdfFindbarService;
    }
}
PdfSearchInputFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-search-input-field',
                template: "<input [class.hidden]=\"!pdfFindbarService.individualWordsMode\"\n  autocomplete=\"search-input-field\"\n  id=\"findInput\"\n  class=\"toolbarField\"\n  title=\"Find\"\n  [placeholder]=\"'Find in document\u2026'\"\n  data-l10n-id=\"find_input\"\n  name=\"search-input-field\"\n/>\n<textarea\n  [class.hidden]=\"pdfFindbarService.individualWordsMode\"\n  id=\"findInputMultiline\"\n  type=\"checkbox\"\n  class=\"toolbarField\"\n  placeholder=\"Multiple search terms. Each line is a search term.\"\n  data-l10n-id=\"find_input_line_by_line\"\n  lines=\"3\"\n></textarea>\n",
                styles: ["textarea{width:200px;height:3.5em}textarea::-webkit-input-placeholder{color:#bfbfbf}textarea::-moz-placeholder{font-style:italic}textarea:-ms-input-placeholder{font-style:italic}textarea::-ms-input-placeholder{font-style:italic}textarea::placeholder{font-style:italic}"]
            }] }
];
/** @nocollapse */
PdfSearchInputFieldComponent.ctorParameters = () => [
    { type: PdfFindbarService }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfSidebarComponent {
    constructor() {
        this.showSidebarButton = true;
    }
}
PdfSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-sidebar',
                template: "<div id=\"sidebarContainer\" [style.top]=\"sidebarPositionTop\">\n  <div\n    id=\"additionalSidebarContainer\"\n    [class.invisible]=\"!showSidebarButton\"\n  >\n    <div id=\"toolbarSidebar\">\n      <div class=\"splitToolbarButton toggled\">\n        <button type=\"button\"\n          id=\"viewThumbnail\"\n          class=\"toolbarButton toggled\"\n          title=\"Show Thumbnails\"\n          data-l10n-id=\"thumbs\"\n        >\n          <span data-l10n-id=\"thumbs_label\">Thumbnails</span>\n        </button>\n        <button type=\"button\"\n          id=\"viewOutline\"\n          class=\"toolbarButton\"\n          title=\"Show Document Outline (double-click to expand/collapse all items)\"\n          data-l10n-id=\"document_outline\"\n        >\n          <span data-l10n-id=\"document_outline_label\"\n            >Document Outline</span\n          >\n        </button>\n        <button type=\"button\"\n          id=\"viewAttachments\"\n          class=\"toolbarButton\"\n          title=\"Show Attachments\"\n          data-l10n-id=\"attachments\"\n        >\n          <span data-l10n-id=\"attachments_label\">Attachments</span>\n        </button>\n      </div>\n    </div>\n  </div>\n  <div id=\"sidebarContent\">\n    <div id=\"thumbnailView\"></div>\n    <div id=\"outlineView\" class=\"hidden\"></div>\n    <div id=\"attachmentsView\" class=\"hidden\"></div>\n  </div>\n  <div id=\"sidebarResizer\" class=\"hidden\"></div>\n</div>\n",
                styles: [""]
            }] }
];
PdfSidebarComponent.propDecorators = {
    sidebarPositionTop: [{ type: Input }],
    showSidebarButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfSplitToolbarButtonComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfSplitToolbarButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-split-toolbar-button',
                template: "<div class=\"splitToolbarButtonSeparator\"></div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfSplitToolbarButtonComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfToggleSecondaryToolbarComponent {
    constructor() {
        this.showSecondaryToolbarButton = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PdfToggleSecondaryToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-toggle-secondary-toolbar',
                template: "<button\n  type=\"button\"\n  [class.invisible]=\"!showSecondaryToolbarButton\"\n  id=\"secondaryToolbarToggle\"\n  class=\"toolbarButton\"\n  title=\"Tools\"\n  data-l10n-id=\"tools\"\n>\n  <svg style=\"width:27px;height:27px\" viewBox=\"0 0 24 24\" onclick=\"event.preventDefault(); return false;\">\n    <path fill=\"currentColor\" d=\"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z\" />\n  </svg>\n  <span data-l10n-id=\"tools_label\">Tools</span>\n</button>\n",
                styles: ["svg{margin-top:-3px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
/** @nocollapse */
PdfToggleSecondaryToolbarComponent.ctorParameters = () => [];
PdfToggleSecondaryToolbarComponent.propDecorators = {
    showSecondaryToolbarButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfToggleSidebarComponent {
    constructor() {
        this.showSidebarButton = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
PdfToggleSidebarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-toggle-sidebar',
                template: "<button\n  type=\"button\"\n  [class.invisible]=\"!showSidebarButton\"\n  id=\"sidebarToggle\"\n  title=\"Toggle Sidebar\"\n  class=\"toolbarButton\"\n  data-l10n-id=\"toggle_sidebar\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z\" />\n  </svg>\n  <span data-l10n-id=\"toggle_sidebar_label\">Toggle Sidebar</span>\n</button>\n",
                styles: ["button svg{margin-top:-2px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
            }] }
];
/** @nocollapse */
PdfToggleSidebarComponent.ctorParameters = () => [];
PdfToggleSidebarComponent.propDecorators = {
    showSidebarButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfToolbarComponent {
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfZoomDropdownComponent {
    constructor() {
        this.zoomChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    emitZoomChange() {
        /** @type {?} */
        const selectedIndex = this.sizeSelector.nativeElement.selectedIndex;
        if (selectedIndex || selectedIndex === 0) {
            /** @type {?} */
            const s = (/** @type {?} */ (this.sizeSelector.nativeElement.options[selectedIndex]));
            /** @type {?} */
            let value = s.label;
            if (value.endsWith('%')) {
                value = Number(value.replace('%', ''));
            }
            else {
                value = s.value;
            }
            this.zoomChange.emit(value);
        }
    }
}
PdfZoomDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-zoom-dropdown',
                template: "<span id=\"scaleSelectContainer\" class=\"dropdownToolbarButton\">\n  <select\n    id=\"scaleSelect\"\n    title=\"Zoom\"\n    data-l10n-id=\"zoom\"\n    #sizeSelector\n  >\n    <option\n      id=\"pageAutoOption\"\n      title=\"\"\n      value=\"auto\"\n      selected=\"selected\"\n      data-l10n-id=\"page_scale_auto\"\n      >Automatic Zoom</option\n    >\n    <option\n      id=\"pageActualOption\"\n      title=\"\"\n      value=\"page-actual\"\n      data-l10n-id=\"page_scale_actual\"\n      >Actual Size</option\n    >\n    <option\n      id=\"pageFitOption\"\n      title=\"\"\n      value=\"page-fit\"\n      data-l10n-id=\"page_scale_fit\"\n      >Page Fit</option\n    >\n    <option\n      id=\"pageWidthOption\"\n      title=\"\"\n      value=\"page-width\"\n      data-l10n-id=\"page_scale_width\"\n      >Page Width</option\n    >\n    <option\n      id=\"customScaleOption\"\n      title=\"\"\n      value=\"custom\"\n      disabled=\"disabled\"\n      hidden=\"true\"\n    ></option>\n    <option\n      title=\"\"\n      value=\"0.5\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 50 }\"\n      >50%</option\n    >\n    <option\n      title=\"\"\n      value=\"0.75\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 75 }\"\n      >75%</option\n    >\n    <option\n      title=\"\"\n      value=\"1\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 100 }\"\n      >100%</option\n    >\n    <option\n      title=\"\"\n      value=\"1.25\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 125 }\"\n      >125%</option\n    >\n    <option\n      title=\"\"\n      value=\"1.5\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 150 }\"\n      >150%</option\n    >\n    <option\n      title=\"\"\n      value=\"2\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 200 }\"\n      >200%</option\n    >\n    <option\n      title=\"\"\n      value=\"3\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 300 }\"\n      >300%</option\n    >\n    <option\n      title=\"\"\n      value=\"4\"\n      data-l10n-id=\"page_scale_percent\"\n      data-l10n-args=\"{ &quot;scale&quot;: 400 }\"\n      >400%</option\n    >\n  </select>\n</span>\n",
                styles: [".dropdownToolbarButton{display:table-cell;-webkit-appearance:none;width:150px;max-width:150px}.dropdownToolbarButton>select{width:170px}@media screen and (-webkit-min-device-pixel-ratio:1.1),screen and (min-resolution:1.1dppx){.dropdownToolbarButton::after{top:-1px}}"]
            }] }
];
/** @nocollapse */
PdfZoomDropdownComponent.ctorParameters = () => [];
PdfZoomDropdownComponent.propDecorators = {
    sizeSelector: [{ type: ViewChild, args: ['sizeSelector',] }],
    zoomChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfZoomInComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfZoomInComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-zoom-in',
                template: "<button type=\"button\"\n  id=\"zoomIn\"\n  class=\"toolbarButton zoomIn\"\n  title=\"Zoom In\"\n  data-l10n-id=\"zoom_in\">\n  <span data-l10n-id=\"zoom_in_label\">Zoom In</span>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfZoomInComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfZoomOutComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
PdfZoomOutComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-zoom-out',
                template: "<button type=\"button\"\n  id=\"zoomOut\"\n  class=\"toolbarButton zoomOut\"\n  title=\"Zoom Out\"\n  data-l10n-id=\"zoom_out\">\n  <span data-l10n-id=\"zoom_out_label\">Zoom Out</span>\n</button>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
PdfZoomOutComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfZoomToolbarComponent {
    constructor() {
        this.showZoomButtons = true;
        this.zoomChange = new EventEmitter();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    emitZoomChange(event) {
        this.zoomChange.emit(event);
    }
}
PdfZoomToolbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-zoom-toolbar',
                template: "<div [class.invisible]=\"!showZoomButtons\" id=\"toolbarViewerMiddle\">\n  <div class=\"splitToolbarButton\">\n    <pdf-zoom-out></pdf-zoom-out>\n    <div class=\"splitToolbarButtonSeparator\"></div>\n    <pdf-zoom-in></pdf-zoom-in>\n  </div>\n  <pdf-zoom-dropdown\n      style=\"width: unset; max-width: unset;padding-top:3px\"\n      (zoomChange)=\"emitZoomChange($event)\"></pdf-zoom-dropdown>\n</div>\n",
                styles: [""]
            }] }
];
PdfZoomToolbarComponent.propDecorators = {
    showZoomButtons: [{ type: Input }],
    zoomChange: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PdfSelectToolComponent {
    /**
     * @param {?} notificationService
     */
    constructor(notificationService) {
        this.notificationService = notificationService;
        this.showSelectToolButton = true;
        this.isSelected = true;
        /** @type {?} */
        const subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        () => {
            this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @private
     * @return {?}
     */
    onPdfJsInit() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} __0
         * @return {?}
         */
        ({ tool }) => (this.isSelected = tool === PdfCursorTools.SELECT)));
    }
    /**
     * @return {?}
     */
    onClick() {
        /** @type {?} */
        const PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
    }
}
PdfSelectToolComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-select-tool',
                template: "<button\n  (click)=\"onClick()\"\n  type=\"button\"\n  [class.invisible]=\"!showSelectToolButton\"\n  [class.toggled]=\"isSelected\"\n  id=\"primaryCursorSelectTool\"\n  class=\"toolbarButton hiddenXXLView\"\n  title=\"Enable text selection tool\"\n  data-l10n-id=\"cursor_text_select_tool\">\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\n  </svg>\n  <span data-l10n-id=\"cursor_text_select_tool_label\">Text selection tool</span>\n</button>\n",
                styles: [":host{margin-top:0;margin-right:-3px}:host:focus{outline:0}button:focus,svg:focus{outline:0}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}"]
            }] }
];
/** @nocollapse */
PdfSelectToolComponent.ctorParameters = () => [
    { type: PDFNotificationService }
];
PdfSelectToolComponent.propDecorators = {
    showSelectToolButton: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DynamicCssComponent {
    /**
     * @param {?} renderer
     * @param {?} document
     */
    constructor(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.zoom = 1.0;
        this.width = 100;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
    }
    /**
     * @return {?}
     */
    get style() {
        return `
@media all and (max-width: ${this.xl}px) {
  #toolbarViewerMiddle {
    display: table;
    margin: auto;
    left: auto;
    position: inherit;
    transform: none;
  }
}

@media all and (max-width: 840px) {
  #sidebarContent {
    background-color: rgba(0, 0, 0, 0.7);
  }

  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {
    left: 0px !important;
  }
  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {
    right: 0px !important;
  }

  #outerContainer .hiddenLargeView,
  #outerContainer .hiddenMediumView {
    display: inherit;
  }
  #outerContainer .visibleLargeView,
  #outerContainer .visibleMediumView {
    display: none;
  }
}

@media all and (max-width: ${this.lg}px) {
  .toolbarButtonSpacer {
    width: 15px;
  }

  #outerContainer .hiddenLargeView {
    display: none;
  }
  #outerContainer .visibleLargeView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  .toolbarButtonSpacer {
    display: none;
  }
  #outerContainer .hiddenMediumView {
    display: none;
  }
  #outerContainer .visibleMediumView {
    display: inherit;
  }
}

@media all and (max-width: ${this.sm}px) {
  .hiddenSmallView,
  .hiddenSmallView * {
    display: none;
  }
  .visibleSmallView {
    display: inherit;
  }
  .toolbarButtonSpacer {
    width: 0;
  }
  html[dir='ltr'] .findbar {
    left: 38px;
  }
  html[dir='rtl'] .findbar {
    right: 38px;
  }
}

@media all and (max-width: ${this.xs}px) {
  #scaleSelectContainer {
    display: none;
  }
}

.visibleXLView,
.visibleXXLView,
.visibleTinyView {
  display: none;
}

.hiddenXLView,
.hiddenXXLView {
  display: unset;
}

@media all and (max-width: ${this.xl}px) {
  #outerContainer .hiddenXLView {
    display: none;
  }
  #outerContainer .visibleXLView {
    display: inherit;
  }

  #toolbarViewerMiddle {
    -webkit-transform: translateX(-36%);
    transform: translateX(-36%);
    display: unset;
    margin: unset;
    left: 50%;
    position: absolute;
  }
}

@media all and (max-width: ${this.xxl}px) {
  #outerContainer .hiddenXXLView {
    display: none;
  }
  #outerContainer .visibleXXLView {
    display: inherit;
  }
}

@media all and (max-width: ${this.md}px) {
  #toolbarViewerMiddle {
    -webkit-transform: translateX(-26%);
    transform: translateX(-26%);
  }
}

@media all and (max-width: ${this.xs}px) {
  .hiddenTinyView,
  .hiddenTinyView * {
    display: none;
  }
  .visibleTinyView {
    display: inherit;
  }
}
  `;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.injectStyle();
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        /** @type {?} */
        const fullWith = this.document.body.clientWidth;
        /** @type {?} */
        const partialViewScale = fullWith / this.width;
        /** @type {?} */
        const scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * 490;
        this.sm = scaleFactor * 560;
        this.md = scaleFactor * 610;
        this.lg = scaleFactor * 660;
        this.xl = scaleFactor * 740;
        this.xxl = scaleFactor * 830;
        /** @type {?} */
        const styles = this.document.getElementById('pdf-dynamic-css');
        if (styles) {
            styles.innerHTML = this.style;
        }
    }
    /**
     * @private
     * @return {?}
     */
    injectStyle() {
        /** @type {?} */
        const styles = (/** @type {?} */ (this.document.createElement('STYLE')));
        styles.id = 'pdf-dynamic-css';
        styles.innerHTML = this.style;
        this.renderer.appendChild(this.document.head, styles);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        /** @type {?} */
        const styles = (/** @type {?} */ (this.document.getElementById('pdf-dynamic-css')));
        if (styles && styles.parentElement) {
            ((/** @type {?} */ (styles.parentElement))).removeChild(styles);
        }
    }
}
DynamicCssComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-dynamic-css',
                template: "",
                styles: [""]
            }] }
];
/** @nocollapse */
DynamicCssComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
DynamicCssComponent.propDecorators = {
    zoom: [{ type: Input }],
    width: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKeyIgnored(cmd, keycode) {
    /** @type {?} */
    const PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
    /** @type {?} */
    const ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    /** @type {?} */
    const acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
    if (keycode === 'WHEEL') {
        if (isKeyInList(ignoreKeys, cmd, 'WHEEL')) {
            return true;
        }
        if (!!acceptKeys && acceptKeys.length > 0) {
            return !isKeyInList(acceptKeys, cmd, 'WHEEL');
        }
        return false;
    }
    if (keycode === 16 || keycode === 17 || keycode === 18 || keycode === 224) {
        // ignore solitary SHIFT, ALT, CMD, and CTRL because they only make sense as two-key-combinations
        return true;
    }
    // cmd is a bit-array:
    // 1 == CTRL
    // 2 == ALT
    // 4 == SHIFT
    // 8 == META
    /** @type {?} */
    const ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
    if (!!ignoreKeyboard) {
        return true;
    }
    if (!!ignoreKeys && ignoreKeys.length > 0) {
        if (isKeyInList(ignoreKeys, cmd, keycode)) {
            return true;
        }
    }
    if (!!acceptKeys && acceptKeys.length > 0) {
        return !isKeyInList(acceptKeys, cmd, keycode);
    }
    return false;
}
/**
 * @param {?} settings
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKeyInList(settings, cmd, keycode) {
    if (!settings) {
        return true;
    }
    return settings.some((/**
     * @param {?} keyDef
     * @return {?}
     */
    keyDef => isKey(keyDef, cmd, keycode)));
}
/**
 * @param {?} keyDef
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKey(keyDef, cmd, keycode) {
    /** @type {?} */
    let cmdDef = 0;
    /** @type {?} */
    let key = 0;
    keyDef = keyDef.toLowerCase();
    // tslint:disable: no-bitwise
    if (keyDef.includes('ctrl+')) {
        cmdDef |= 1;
        keyDef = keyDef.replace('ctrl+', '');
    }
    if (keyDef.includes('cmd+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('cmd+', '');
    }
    if (keyDef.includes('alt+')) {
        cmdDef |= 2;
        keyDef = keyDef.replace('alt+', '');
    }
    if (keyDef.includes('shift+')) {
        cmdDef |= 4;
        keyDef = keyDef.replace('shift+', '');
    }
    if (keyDef.includes('meta+')) {
        cmdDef |= 8;
        keyDef = keyDef.replace('meta+', '');
    }
    if (keyDef === 'up') {
        key = 38;
    }
    else if (keyDef === 'down') {
        key = 40;
    }
    else if (keyDef === '+' || keyDef === '"+"') {
        key = 171;
    }
    else if (keyDef === '-' || keyDef === '"-"') {
        key = 173;
    }
    else if (keyDef === 'esc') {
        key = 27;
    }
    else if (keyDef === 'enter') {
        key = 13;
    }
    else if (keyDef === 'space') {
        key = 32;
    }
    else if (keyDef === 'f4') {
        key = 115;
    }
    else if (keyDef === 'backspace') {
        key = 8;
    }
    else if (keyDef === 'home') {
        key = 36;
    }
    else if (keyDef === 'end') {
        key = 35;
    }
    else if (keyDef === 'left') {
        key = 37;
    }
    else if (keyDef === 'right') {
        key = 39;
    }
    else if (keyDef === 'pagedown') {
        key = 34;
    }
    else if (keyDef === 'pageup') {
        key = 33;
    }
    else {
        key = keyDef.toUpperCase().charCodeAt(0);
    }
    if (keycode === 'WHEEL') {
        return keyDef === 'wheel' && cmd === cmdDef;
    }
    return key === keycode && cmd === cmdDef;
}
if (typeof window !== 'undefined') {
    ((/** @type {?} */ (window))).isKeyIgnored = isKeyIgnored;
}
class NgxExtendedPdfViewerModule {
    constructor() { }
}
NgxExtendedPdfViewerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [
                    DynamicCssComponent,
                    NgxExtendedPdfViewerComponent,
                    PdfZoomDropdownComponent,
                    PdfContextMenuComponent,
                    PdfPresentationModeComponent,
                    PdfOpenFileComponent,
                    PdfPrintComponent,
                    PdfDownloadComponent,
                    PdfBookmarkComponent,
                    PdfZoomToolbarComponent,
                    PdfPagingAreaComponent,
                    PdfFindbarComponent,
                    PdfSidebarComponent,
                    PdfHandToolComponent,
                    PdfSelectToolComponent,
                    PdfSecondaryToolbarComponent,
                    PdfDocumentPropertiesOverlayComponent,
                    PdfSearchInputFieldComponent,
                    PdfFindPreviousComponent,
                    PdfFindNextComponent,
                    PdfFindInputAreaComponent,
                    PdfFindbarOptionsTwoContainerComponent,
                    PdfFindbarOptionsOneContainerComponent,
                    PdfFindMatchCaseComponent,
                    PdfFindHighlightAllComponent,
                    PdfFindEntireWordComponent,
                    PdfFindMultipleSearchTextsComponent,
                    PdfFindIgnoreAccentsComponent,
                    PdfFindbarOptionsThreeContainerComponent,
                    PdfFindResultsCountComponent,
                    PdfFindbarMessageContainerComponent,
                    PdfSplitToolbarButtonComponent,
                    PdfToolbarComponent,
                    PdfFindButtonComponent,
                    PdfToggleSidebarComponent,
                    PdfToggleSecondaryToolbarComponent,
                    PdfLastPageComponent,
                    PdfFirstPageComponent,
                    PdfNextPageComponent,
                    PdfPreviousPageComponent,
                    PageNumberComponent,
                    PdfPageNumberComponent,
                    PdfRotatePageComponent,
                    PdfZoomInComponent,
                    PdfZoomOutComponent,
                    PdfDummyComponentsComponent
                ],
                providers: [NgxExtendedPdfViewerService, Location, { provide: LocationStrategy, useClass: PathLocationStrategy }],
                exports: [
                    PdfZoomDropdownComponent,
                    PdfContextMenuComponent,
                    PdfPresentationModeComponent,
                    PdfOpenFileComponent,
                    PdfPrintComponent,
                    PdfDownloadComponent,
                    PdfBookmarkComponent,
                    PdfZoomToolbarComponent,
                    PdfPagingAreaComponent,
                    PdfFindbarComponent,
                    PdfSidebarComponent,
                    PdfSecondaryToolbarComponent,
                    PdfDocumentPropertiesOverlayComponent,
                    PdfSearchInputFieldComponent,
                    PdfFindPreviousComponent,
                    PdfFindNextComponent,
                    PdfFindInputAreaComponent,
                    PdfFindbarOptionsTwoContainerComponent,
                    PdfFindbarOptionsOneContainerComponent,
                    PdfFindMatchCaseComponent,
                    PdfFindHighlightAllComponent,
                    PdfFindEntireWordComponent,
                    PdfFindMultipleSearchTextsComponent,
                    PdfFindIgnoreAccentsComponent,
                    PdfFindbarOptionsThreeContainerComponent,
                    PdfFindResultsCountComponent,
                    PdfFindbarMessageContainerComponent,
                    PdfRotatePageComponent,
                    PdfSplitToolbarButtonComponent,
                    PdfToolbarComponent,
                    PdfFindButtonComponent,
                    PdfToggleSidebarComponent,
                    PdfToggleSecondaryToolbarComponent,
                    PdfLastPageComponent,
                    PdfFirstPageComponent,
                    PdfNextPageComponent,
                    PdfPreviousPageComponent,
                    PageNumberComponent,
                    PdfPageNumberComponent,
                    PdfZoomInComponent,
                    PdfZoomOutComponent,
                    NgxExtendedPdfViewerComponent
                ]
            },] }
];
/** @nocollapse */
NgxExtendedPdfViewerModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const LinkTarget = {
    NONE: 0,
    SELF: 1,
    BLANK: 2,
    PARENT: 3,
    TOP: 4
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxExtendedPdfViewerComponent, NgxExtendedPdfViewerService, PDFNotificationService, NgxExtendedPdfViewerModule, defaultOptions, FindState, LinkTarget, VerbosityLevel, PdfFindNextComponent, PdfSearchInputFieldComponent, PdfSplitToolbarButtonComponent, PdfFindPreviousComponent, PdfToggleSecondaryToolbarComponent, PdfContextMenuComponent, PdfPresentationModeComponent, PdfOpenFileComponent, PdfPrintComponent, PdfDownloadComponent, PdfBookmarkComponent, PdfZoomToolbarComponent, PdfPagingAreaComponent, PdfFindbarComponent, PdfSidebarComponent, PdfSecondaryToolbarComponent, PdfDocumentPropertiesOverlayComponent, PdfFindInputAreaComponent, PdfFindbarOptionsTwoContainerComponent, PdfFindbarOptionsOneContainerComponent, PdfFindMatchCaseComponent, PdfFindHighlightAllComponent, PdfFindEntireWordComponent, PdfFindIgnoreAccentsComponent, PdfFindbarOptionsThreeContainerComponent, PdfFindResultsCountComponent, PdfFindbarMessageContainerComponent, PdfFindMultipleSearchTextsComponent, PdfToolbarComponent, PdfFindButtonComponent, PdfToggleSidebarComponent, PdfFirstPageComponent, PdfLastPageComponent, PdfNextPageComponent, PdfPreviousPageComponent, PageNumberComponent, PdfPageNumberComponent, PdfZoomInComponent, PdfZoomOutComponent, PdfZoomDropdownComponent, PdfRotatePageComponent, DynamicCssComponent as ɵb, PdfDummyComponentsComponent as ɵa, PdfFindbarService as ɵe, PdfHandToolComponent as ɵc, PdfSelectToolComponent as ɵd };

//# sourceMappingURL=ngx-extended-pdf-viewer.js.map