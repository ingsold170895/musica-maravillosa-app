/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewEncapsulation, Input, Output, EventEmitter, ChangeDetectionStrategy, HostListener, NgZone, TemplateRef, Inject, PLATFORM_ID, ViewChild, } from '@angular/core';
import { defaultOptions } from './options/default-options';
import { ServiceWorkerOptions } from './options/service-worker-options';
import * as deburr from 'lodash.deburr'; // #177
// #177
import { VerbosityLevel } from './options/verbosity-level';
import { FindState } from './events/find-result';
import { isPlatformBrowser } from '@angular/common';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { ElementRef } from '@angular/core';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PDFNotificationService } from './pdf-notification-service';
import { PdfCursorTools } from './options/pdf-cursor-tools';
import { Location } from '@angular/common';
if (typeof window !== 'undefined') {
    ((/** @type {?} */ (window))).deburr = deburr; // #177
}
/**
 * @record
 */
function ElementAndPosition() { }
if (false) {
    /** @type {?} */
    ElementAndPosition.prototype.element;
    /** @type {?} */
    ElementAndPosition.prototype.x;
    /** @type {?} */
    ElementAndPosition.prototype.y;
}
export class NgxExtendedPdfViewerComponent {
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
if (false) {
    /** @type {?} */
    NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized;
    /**
     * The dummy components are inserted automatically when the user customizes the toolbar
     * without adding every original toolbar item. Without the dummy components, the
     * initialization code of pdf.js crashes because it assume that every standard widget is there.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.dummyComponents;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.root;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFindbarInputArea;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customToolbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFindbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customFindbarButtons;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.customSecondaryToolbar;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.secondaryToolbarComponent;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype._src;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.srcChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.contextMenuAllowed;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.afterPrint;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.beforePrint;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.currentZoomFactor;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.enablePrint;
    /**
     * Number of milliseconds to wait between initializing the PDF viewer and loading the PDF file.
     * Most users can let this parameter safely at it's default value of zero.
     * Set this to 1000 or higher if you run into timing problems (typically caused by loading the locale files
     * after the PDF files, so they are not available when the PDF viewer is initialized).
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.delayFirstView;
    /**
     * store the timeout id so it can be canceled if user leaves the page before the PDF is shown
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.initTimeout;
    /**
     * How many log messages should be printed?
     * Legal values: VerbosityLevel.INFOS (= 5), VerbosityLevel.WARNINGS (= 1), VerbosityLevel.ERRORS (= 0)
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.logLevel;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.primaryMenuVisible;
    /**
     * option to increase (or reduce) print resolution. Default is 150 (dpi). Sensible values
     * are 300, 600, and 1200. Note the increase memory consumption, which may even result in a browser crash.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.printResolution;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.rotation;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.rotationChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.minHeight;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype._height;
    /**
     * If this flag is true, this components adds a link to the locale assets. The pdf viewer
     * sees this link and uses it to load the locale files automatically.
     * \@param useBrowserLocale boolean
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.useBrowserLocale;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.backgroundColor;
    /**
     * Allows the user to define the name of the file after clicking "download"
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.filenameForDownload;
    /**
     * Allows the user to disable the keyboard bindings completely
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ignoreKeyboard;
    /**
     * Allows the user to disable a list of key bindings.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ignoreKeys;
    /**
     * Allows the user to enable a list of key bindings explicitly. If this property is set, every other key binding is ignored.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.acceptKeys;
    /**
     * Allows the user to put the viewer's svg images into an arbitrary folder
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.imageResourcesPath;
    /**
     * Override the default locale. This must be the complete locale name, such as "es-ES". The string is allowed to be all lowercase.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.language;
    /**
     * By default, listening to the URL is deactivated because often the anchor tag is used for the Angular router
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.listenToURL;
    /**
     * Navigate to a certain "named destination"
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.nameddest;
    /**
     * allows you to pass a password to read password-protected files
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.password;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype._showSidebarButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.viewerPositionTop;
    /**
     * pdf.js can show signatures, but fails to verify them. So they are switched off by default.
     * Set "[showUnverifiedSignatures]"="true" to display e-signatures nonetheless.
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.showUnverifiedSignatures;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.startTabindex;
    /**
     * If [showSideBarButton]="true", do you want the sidebar to be shown by default ([showSidebarOnLoad])="true")
     * or not? By default, this flag is undefined, telling the PDF viewer to use the last setting used with this particular
     * document, or to hide the sidebar if the document is opened for the first time.
     * @deprecated Use showSidebar instead; dreprecated since 1.8.0; to be removed with 2.0.0
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.showSidebarOnLoad;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.sidebarVisible;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.sidebarVisibleChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showFindButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPagingButtons;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showZoomButtons;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPresentationModeButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showOpenFileButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPrintButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showDownloadButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showBookmarkButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showSecondaryToolbarButton;
    /**
     * Set by the event (secondaryMenuIsEmpty)
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.hideKebabMenuForSecondaryToolbar;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showRotateButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.handTool;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.handToolChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showHandToolButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showScrollingButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showSpreadButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showPropertiesButton;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.showBorders;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.spread;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.spreadChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.page;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageLabel;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageLabelChange;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pagesLoaded;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pageRendered;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pdfDownloaded;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pdfLoaded;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.pdfLoadingFailed;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.textLayer;
    /**
     * deprecated
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.textlayerRendered;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.textLayerRendered;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.updateFindMatchesCount;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.updateFindState;
    /**
     * Legal values: undefined, 'auto', 'page-actual', 'page_fit', 'page-width', or '50' (or any other percentage)
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype.zoom;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.zoomChange;
    /**
     * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
     * This attribute is a string with a percent character at the end (e.g. "150%").
     * @type {?}
     */
    NgxExtendedPdfViewerComponent.prototype._mobileFriendlyZoom;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.mobileFriendlyZoomScale;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.toolbarPaddingTop;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.toolbarWidth;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.toolbarWidthInPixels;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.secondaryToolbarTop;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.findbarTop;
    /** @type {?} */
    NgxExtendedPdfViewerComponent.prototype.findbarLeft;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype._top;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.platformId;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.notificationService;
    /**
     * @type {?}
     * @private
     */
    NgxExtendedPdfViewerComponent.prototype.location;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBSUwsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sZUFBZSxDQUFDLENBQUMsT0FBTzs7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sc0JBQXNCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdB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c0RBQ3lDOzs7Ozs7OztJQTBCekMsMERBQzBEOztJQUUxRCx1REFDdUQ7O0lBRXZELDZEQUMwRDs7SUFFMUQsdURBQ3VEOztJQUN2RCwwREFDZ0M7O0lBQ2hDLHdEQUM4Qjs7SUFDOUIsbUVBQzBDOztJQUMxQywyREFDaUM7O0lBQ2pDLHdEQUM4Qjs7SUFDOUIsMkRBQ2lDOztJQUNqQywyREFDaUM7O0lBRWpDLG1FQUN5Qzs7Ozs7SUFHekMseUVBQWdEOztJQUVoRCx5REFDK0I7O0lBQy9CLGlEQUN1Qjs7SUFDdkIsdURBQ29EOztJQUNwRCwyREFDa0M7O0lBQ2xDLDREQUNrQzs7SUFDbEMseURBQytCOztJQUMvQiw2REFDbUM7O0lBQ25DLG9EQUMyQjs7SUFFM0IsK0NBQ3NDOztJQUV0QyxxREFDaUU7O0lBRWpFLDZDQUM0Qzs7SUFFNUMsbURBQzJEOztJQUUzRCxrREFDaUQ7O0lBRWpELHdEQUNnRTs7SUFFaEUsb0RBQzBEOztJQUUxRCxxREFDNEQ7O0lBRTVELHNEQUM4RDs7SUFFOUQsa0RBQ3NEOztJQUV0RCx5REFDb0Q7O0lBRXBELGtEQUNrRDs7Ozs7SUFHbEQsMERBQ3NFOztJQUV0RSwwREFDc0U7O0lBRXRFLCtEQUMyRTs7SUFFM0Usd0RBQ3VEOzs7OztJQUd2RCw2Q0FDcUQ7O0lBRXJELG1EQUNvRTs7Ozs7O0lBS3BFLDREQUFzQzs7SUFFdEMsZ0VBQW1DOztJQUVuQywwREFBaUM7O0lBRWpDLHFEQUE2Qjs7SUFFN0IsNkRBQWtDOztJQUVsQyw0REFBMkQ7O0lBRzNELG1EQUFrRDs7SUFHbEQsb0RBQW1EOzs7OztJQTRDbkQsNkNBQTZDOzs7OztJQTZDakMsK0NBQXNCOzs7OztJQUFFLG1EQUF1Qzs7Ozs7SUFBRSw0REFBbUQ7Ozs7O0lBQ3BILGlEQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBIb3N0TGlzdGVuZXIsXG4gIE5nWm9uZSxcbiAgVGVtcGxhdGVSZWYsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VzTG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlcy1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgUGFnZVJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wYWdlLXJlbmRlcmVkLWV2ZW50JztcbmltcG9ydCB7IFBkZkRvd25sb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1kb3dubG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IFBkZkxvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGRmLWxvYWRlZC1ldmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0T3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9kZWZhdWx0LW9wdGlvbnMnO1xuaW1wb3J0IHsgU2NhbGVDaGFuZ2luZ0V2ZW50IH0gZnJvbSAnLi9ldmVudHMvc2NhbGUtY2hhbmdpbmctZXZlbnQnO1xuaW1wb3J0IHsgUGFnZXNSb3RhdGlvbkV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtcm90YXRpb24tZXZlbnQnO1xuaW1wb3J0IHsgRmlsZUlucHV0Q2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2ZpbGUtaW5wdXQtY2hhbmdlZCc7XG5pbXBvcnQgeyBTaWRlYmFydmlld0NoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3NpZGViYXJ2aWV3LWNoYW5nZWQnO1xuaW1wb3J0IHsgSGFuZHRvb2xDaGFuZ2VkIH0gZnJvbSAnLi9ldmVudHMvaGFuZHRvb2wtY2hhbmdlZCc7XG5pbXBvcnQgeyBQYWdlTnVtYmVyQ2hhbmdlIH0gZnJvbSAnLi9ldmVudHMvcGFnZS1udW1iZXItY2hhbmdlJztcbmltcG9ydCB7IFNlcnZpY2VXb3JrZXJPcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3NlcnZpY2Utd29ya2VyLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgZGVidXJyIGZyb20gJ2xvZGFzaC5kZWJ1cnInOyAvLyAjMTc3XG5pbXBvcnQgeyBWZXJib3NpdHlMZXZlbCB9IGZyb20gJy4vb3B0aW9ucy92ZXJib3NpdHktbGV2ZWwnO1xuaW1wb3J0IHsgRmluZFN0YXRlLCBGaW5kUmVzdWx0TWF0Y2hlc0NvdW50LCBGaW5kUmVzdWx0IH0gZnJvbSAnLi9ldmVudHMvZmluZC1yZXN1bHQnO1xuaW1wb3J0IHsgaXNQbGF0Zm9ybUJyb3dzZXIgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24nO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uLW9wdGlvbnMnO1xuaW1wb3J0IHsgUGRmU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IFBkZkN1cnNvclRvb2xzIH0gZnJvbSAnLi9vcHRpb25zL3BkZi1jdXJzb3ItdG9vbHMnO1xuaW1wb3J0IHsgVGV4dExheWVyUmVuZGVyZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3RleHRsYXllci1yZW5kZXJlZCc7XG5pbXBvcnQgeyBMb2NhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAod2luZG93IGFzIGFueSkuZGVidXJyID0gZGVidXJyOyAvLyAjMTc3XG59XG5cbmludGVyZmFjZSBFbGVtZW50QW5kUG9zaXRpb24ge1xuICBlbGVtZW50OiBIVE1MRWxlbWVudDtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLXdpdGgtaW1hZ2VzLTIuMi5jc3MnLCAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuY3NzJ10sXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwdWJsaWMgc3RhdGljIG5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGR1bW15IGNvbXBvbmVudHMgYXJlIGluc2VydGVkIGF1dG9tYXRpY2FsbHkgd2hlbiB0aGUgdXNlciBjdXN0b21pemVzIHRoZSB0b29sYmFyXG4gICAqIHdpdGhvdXQgYWRkaW5nIGV2ZXJ5IG9yaWdpbmFsIHRvb2xiYXIgaXRlbS4gV2l0aG91dCB0aGUgZHVtbXkgY29tcG9uZW50cywgdGhlXG4gICAqIGluaXRpYWxpemF0aW9uIGNvZGUgb2YgcGRmLmpzIGNyYXNoZXMgYmVjYXVzZSBpdCBhc3N1bWUgdGhhdCBldmVyeSBzdGFuZGFyZCB3aWRnZXQgaXMgdGhlcmUuXG4gICAqL1xuICBAVmlld0NoaWxkKFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudClcbiAgcHVibGljIGR1bW15Q29tcG9uZW50czogUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50O1xuXG4gIEBWaWV3Q2hpbGQoJ3Jvb3QnKVxuICBwdWJsaWMgcm9vdDogRWxlbWVudFJlZjtcblxuICAvKiBVSSB0ZW1wbGF0ZXMgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJJbnB1dEFyZWE6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbVRvb2xiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXI6IFRlbXBsYXRlUmVmPGFueT47XG5cbiAgQElucHV0KClcbiAgcHVibGljIGN1c3RvbUZpbmRiYXJCdXR0b25zOiBUZW1wbGF0ZVJlZjxhbnk+IHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21TZWNvbmRhcnlUb29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBWaWV3Q2hpbGQoJ3BkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQnKVxuICBwcml2YXRlIHNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ6IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQ7XG5cbiAgLyogcmVndWxhciBhdHRyaWJ1dGVzICovXG5cbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNyY0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjb250ZXh0TWVudUFsbG93ZWQgPSB0cnVlO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgYWZ0ZXJQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGJlZm9yZVByaW50ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgY3VycmVudFpvb21GYWN0b3IgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgZW5hYmxlUHJpbnQgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBOdW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHdhaXQgYmV0d2VlbiBpbml0aWFsaXppbmcgdGhlIFBERiB2aWV3ZXIgYW5kIGxvYWRpbmcgdGhlIFBERiBmaWxlLlxuICAgKiBNb3N0IHVzZXJzIGNhbiBsZXQgdGhpcyBwYXJhbWV0ZXIgc2FmZWx5IGF0IGl0J3MgZGVmYXVsdCB2YWx1ZSBvZiB6ZXJvLlxuICAgKiBTZXQgdGhpcyB0byAxMDAwIG9yIGhpZ2hlciBpZiB5b3UgcnVuIGludG8gdGltaW5nIHByb2JsZW1zICh0eXBpY2FsbHkgY2F1c2VkIGJ5IGxvYWRpbmcgdGhlIGxvY2FsZSBmaWxlc1xuICAgKiBhZnRlciB0aGUgUERGIGZpbGVzLCBzbyB0aGV5IGFyZSBub3QgYXZhaWxhYmxlIHdoZW4gdGhlIFBERiB2aWV3ZXIgaXMgaW5pdGlhbGl6ZWQpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGRlbGF5Rmlyc3RWaWV3ID0gMDtcblxuICAvKiogc3RvcmUgdGhlIHRpbWVvdXQgaWQgc28gaXQgY2FuIGJlIGNhbmNlbGVkIGlmIHVzZXIgbGVhdmVzIHRoZSBwYWdlIGJlZm9yZSB0aGUgUERGIGlzIHNob3duICovXG4gIHByaXZhdGUgaW5pdFRpbWVvdXQ6IGFueTtcblxuICAvKiogSG93IG1hbnkgbG9nIG1lc3NhZ2VzIHNob3VsZCBiZSBwcmludGVkP1xuICAgKiBMZWdhbCB2YWx1ZXM6IFZlcmJvc2l0eUxldmVsLklORk9TICg9IDUpLCBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUyAoPSAxKSwgVmVyYm9zaXR5TGV2ZWwuRVJST1JTICg9IDApICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsb2dMZXZlbCA9IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTO1xuXG4gIHB1YmxpYyBwcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xuXG4gIC8qKiBvcHRpb24gdG8gaW5jcmVhc2UgKG9yIHJlZHVjZSkgcHJpbnQgcmVzb2x1dGlvbi4gRGVmYXVsdCBpcyAxNTAgKGRwaSkuIFNlbnNpYmxlIHZhbHVlc1xuICAgKiBhcmUgMzAwLCA2MDAsIGFuZCAxMjAwLiBOb3RlIHRoZSBpbmNyZWFzZSBtZW1vcnkgY29uc3VtcHRpb24sIHdoaWNoIG1heSBldmVuIHJlc3VsdCBpbiBhIGJyb3dzZXIgY3Jhc2guICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwcmludFJlc29sdXRpb24gPSBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyByb3RhdGlvbjogMCB8IDkwIHwgMTgwIHwgMjcwO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcm90YXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPDAgfCA5MCB8IDE4MCB8IDI3MD4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IHNyYyh1cmw6IHN0cmluZyB8IEFycmF5QnVmZmVyIHwgVWludDhBcnJheSkge1xuICAgIGlmICh1cmwgaW5zdGFuY2VvZiBVaW50OEFycmF5KSB7XG4gICAgICB0aGlzLl9zcmMgPSB1cmwuYnVmZmVyO1xuICAgIH0gZWxzZSBpZiAodXJsIGluc3RhbmNlb2YgQmxvYikge1xuICAgICAgdGhpcy5fc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTCh1cmwpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuX3NyYyA9IHVybDtcbiAgICAgIGlmICh1cmwubGVuZ3RoID4gOTgwKSB7XG4gICAgICAgIC8vIG1pbmltYWwgbGVuZ3RoIG9mIGEgYmFzZTY0IGVuY29kZWQgUERGXG4gICAgICAgIGlmICh1cmwubGVuZ3RoICUgNCA9PT0gMCkge1xuICAgICAgICAgIGlmICgvXlthLXpBLVpcXGRcXC8rXSs9ezAsMn0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBVUkwgbG9va3MgbGlrZSBhIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gSWYgc28sIHBsZWFzZSB1c2UgdGhlIGF0dHJpYnV0ZSBiYXNlNjQgaW5zdGVhZCBvZiBzcmMnKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc3JjID0gdXJsO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgYmFzZTY0U3JjKGJhc2U2NDogc3RyaW5nKSB7XG4gICAgY29uc3QgYmluYXJ5X3N0cmluZyA9IHdpbmRvdy5hdG9iKGJhc2U2NCk7XG4gICAgY29uc3QgbGVuID0gYmluYXJ5X3N0cmluZy5sZW5ndGg7XG4gICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShsZW4pO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGJ5dGVzW2ldID0gYmluYXJ5X3N0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIH1cbiAgICB0aGlzLnNyYyA9IGJ5dGVzLmJ1ZmZlcjtcbiAgfVxuXG4gIHB1YmxpYyBtaW5IZWlnaHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwcml2YXRlIF9oZWlnaHQgPSAnMTAwJSc7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBoZWlnaHQoaDogc3RyaW5nKSB7XG4gICAgdGhpcy5taW5IZWlnaHQgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGgpIHtcbiAgICAgIHRoaXMuX2hlaWdodCA9IGg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaGVpZ2h0KCkge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhpcyBmbGFnIGlzIHRydWUsIHRoaXMgY29tcG9uZW50cyBhZGRzIGEgbGluayB0byB0aGUgbG9jYWxlIGFzc2V0cy4gVGhlIHBkZiB2aWV3ZXJcbiAgICogc2VlcyB0aGlzIGxpbmsgYW5kIHVzZXMgaXQgdG8gbG9hZCB0aGUgbG9jYWxlIGZpbGVzIGF1dG9tYXRpY2FsbHkuXG4gICAqIEBwYXJhbSB1c2VCcm93c2VyTG9jYWxlIGJvb2xlYW5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB1c2VCcm93c2VyTG9jYWxlID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGJhY2tncm91bmRDb2xvciA9ICcjZThlOGViJztcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSBhZnRlciBjbGlja2luZyBcImRvd25sb2FkXCIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGZpbGVuYW1lRm9yRG93bmxvYWQgPSAnZG9jdW1lbnQucGRmJztcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIGRpc2FibGUgdGhlIGtleWJvYXJkIGJpbmRpbmdzIGNvbXBsZXRlbHkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGlnbm9yZUtleWJvYXJkID0gZmFsc2U7XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MuICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBlbmFibGUgYSBsaXN0IG9mIGtleSBiaW5kaW5ncyBleHBsaWNpdGx5LiBJZiB0aGlzIHByb3BlcnR5IGlzIHNldCwgZXZlcnkgb3RoZXIga2V5IGJpbmRpbmcgaXMgaWdub3JlZC4gKi9cbiAgQElucHV0KClcbiAgcHVibGljIGFjY2VwdEtleXM6IEFycmF5PHN0cmluZz4gPSBbXTtcblxuICAvKiogQWxsb3dzIHRoZSB1c2VyIHRvIHB1dCB0aGUgdmlld2VyJ3Mgc3ZnIGltYWdlcyBpbnRvIGFuIGFyYml0cmFyeSBmb2xkZXIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGltYWdlUmVzb3VyY2VzUGF0aCA9ICcuL2Fzc2V0cy9pbWFnZXMvJztcblxuICAvKiogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgbG9jYWxlLiBUaGlzIG11c3QgYmUgdGhlIGNvbXBsZXRlIGxvY2FsZSBuYW1lLCBzdWNoIGFzIFwiZXMtRVNcIi4gVGhlIHN0cmluZyBpcyBhbGxvd2VkIHRvIGJlIGFsbCBsb3dlcmNhc2UuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbGFuZ3VhZ2U6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvKiogQnkgZGVmYXVsdCwgbGlzdGVuaW5nIHRvIHRoZSBVUkwgaXMgZGVhY3RpdmF0ZWQgYmVjYXVzZSBvZnRlbiB0aGUgYW5jaG9yIHRhZyBpcyB1c2VkIGZvciB0aGUgQW5ndWxhciByb3V0ZXIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGxpc3RlblRvVVJMID0gZmFsc2U7XG5cbiAgLyoqIE5hdmlnYXRlIHRvIGEgY2VydGFpbiBcIm5hbWVkIGRlc3RpbmF0aW9uXCIgKi9cbiAgQElucHV0KClcbiAgcHVibGljIG5hbWVkZGVzdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBhbGxvd3MgeW91IHRvIHBhc3MgYSBwYXNzd29yZCB0byByZWFkIHBhc3N3b3JkLXByb3RlY3RlZCBmaWxlcyAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcGFzc3dvcmQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgX3Nob3dTaWRlYmFyQnV0dG9uID0gdHJ1ZTtcblxuICBwdWJsaWMgdmlld2VyUG9zaXRpb25Ub3AgPSAnMzJweCc7XG5cbiAgLyoqIHBkZi5qcyBjYW4gc2hvdyBzaWduYXR1cmVzLCBidXQgZmFpbHMgdG8gdmVyaWZ5IHRoZW0uIFNvIHRoZXkgYXJlIHN3aXRjaGVkIG9mZiBieSBkZWZhdWx0LlxuICAgKiBTZXQgXCJbc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzXVwiPVwidHJ1ZVwiIHRvIGRpc3BsYXkgZS1zaWduYXR1cmVzIG5vbmV0aGVsZXNzLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzdGFydFRhYmluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGdldCBzaG93U2lkZWJhckJ1dHRvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1NpZGViYXJCdXR0b247XG4gIH1cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzaG93U2lkZWJhckJ1dHRvbihzaG93OiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NpZGViYXJCdXR0b24gPSBzaG93O1xuICAgIGNvbnN0IGlzSUUgPSAvbXNpZVxcc3x0cmlkZW50XFwvL2kudGVzdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgbGV0IGZhY3RvciA9IDE7XG4gICAgaWYgKGlzSUUpIHtcbiAgICAgIGZhY3RvciA9IE51bWJlcigodGhpcy5fbW9iaWxlRnJpZW5kbHlab29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fc2hvd1NpZGViYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAoNjggKiBmYWN0b3IpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XG4gICAgfVxuICB9XG5cbiAgLyoqIElmIFtzaG93U2lkZUJhckJ1dHRvbl09XCJ0cnVlXCIsIGRvIHlvdSB3YW50IHRoZSBzaWRlYmFyIHRvIGJlIHNob3duIGJ5IGRlZmF1bHQgKFtzaG93U2lkZWJhck9uTG9hZF0pPVwidHJ1ZVwiKVxuICAgKiBvciBub3Q/IEJ5IGRlZmF1bHQsIHRoaXMgZmxhZyBpcyB1bmRlZmluZWQsIHRlbGxpbmcgdGhlIFBERiB2aWV3ZXIgdG8gdXNlIHRoZSBsYXN0IHNldHRpbmcgdXNlZCB3aXRoIHRoaXMgcGFydGljdWxhclxuICAgKiBkb2N1bWVudCwgb3IgdG8gaGlkZSB0aGUgc2lkZWJhciBpZiB0aGUgZG9jdW1lbnQgaXMgb3BlbmVkIGZvciB0aGUgZmlyc3QgdGltZS5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHNob3dTaWRlYmFyIGluc3RlYWQ7IGRyZXByZWNhdGVkIHNpbmNlIDEuOC4wOyB0byBiZSByZW1vdmVkIHdpdGggMi4wLjBcbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2lkZWJhck9uTG9hZDogYm9vbGVhbiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2lkZWJhclZpc2libGU6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzaWRlYmFyVmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0ZpbmRCdXR0b246IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Wm9vbUJ1dHRvbnMgPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dPcGVuRmlsZUJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJpbnRCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0Rvd25sb2FkQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dCb29rbWFya0J1dHRvbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uID0gdHJ1ZTtcblxuICAvKiogU2V0IGJ5IHRoZSBldmVudCAoc2Vjb25kYXJ5TWVudUlzRW1wdHkpICovXG4gIHB1YmxpYyBoaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIGhhbmRUb29sID0gdHJ1ZTtcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBoYW5kVG9vbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1Njcm9sbGluZ0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U3ByZWFkQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcm9wZXJ0aWVzQnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dCb3JkZXJzID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJztcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHNwcmVhZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8J29mZicgfCAnZXZlbicgfCAnb2RkJz4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZTogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBwYWdlTGFiZWw6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VMYWJlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgdW5kZWZpbmVkPigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZXNMb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VzTG9hZGVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBhZ2VSZW5kZXJlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGRmRG93bmxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmRG93bmxvYWRlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGRmTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQZGZMb2FkZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBkZkxvYWRpbmdGYWlsZWQgPSBuZXcgRXZlbnRFbWl0dGVyPEVycm9yPigpO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyB0ZXh0TGF5ZXI6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqIGRlcHJlY2F0ZWQgKi9cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB0ZXh0bGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGV4dExheWVyUmVuZGVyZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHRleHRMYXllclJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxUZXh0TGF5ZXJSZW5kZXJlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdXBkYXRlRmluZE1hdGNoZXNDb3VudCA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFJlc3VsdE1hdGNoZXNDb3VudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHVwZGF0ZUZpbmRTdGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8RmluZFN0YXRlPigpO1xuXG4gIC8qKiBMZWdhbCB2YWx1ZXM6IHVuZGVmaW5lZCwgJ2F1dG8nLCAncGFnZS1hY3R1YWwnLCAncGFnZV9maXQnLCAncGFnZS13aWR0aCcsIG9yICc1MCcgKG9yIGFueSBvdGhlciBwZXJjZW50YWdlKSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgem9vbTogc3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nIHwgbnVtYmVyIHwgdW5kZWZpbmVkPigpO1xuXG4gIC8qKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxuICAgKi9cbiAgQElucHV0KCkgX21vYmlsZUZyaWVuZGx5Wm9vbSA9ICcxMDAlJztcblxuICBwdWJsaWMgbW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSAxO1xuXG4gIHB1YmxpYyB0b29sYmFyUGFkZGluZ1RvcCA9ICcwcHgnO1xuXG4gIHB1YmxpYyB0b29sYmFyV2lkdGggPSAnMTAwJSc7XG5cbiAgcHVibGljIHRvb2xiYXJXaWR0aEluUGl4ZWxzID0gMTAwO1xuXG4gIHB1YmxpYyBzZWNvbmRhcnlUb29sYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXG4gIHB1YmxpYyBmaW5kYmFyVG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLy8gZGlydHkgSUUxMSBoYWNrIC0gdGVtcG9yYXJ5IHNvbHV0aW9uXG4gIHB1YmxpYyBmaW5kYmFyTGVmdDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBnZXQgbW9iaWxlRnJpZW5kbHlab29tKCkge1xuICAgIHJldHVybiB0aGlzLl9tb2JpbGVGcmllbmRseVpvb207XG4gIH1cbiAgLyoqXG4gICAqIFRoaXMgYXR0cmlidXRlcyBhbGxvd3MgeW91IHRvIGluY3JlYXNlIHRoZSBzaXplIG9mIHRoZSBVSSBlbGVtZW50cyBzbyB5b3UgY2FuIHVzZSB0aGVtIG9uIHNtYWxsIG1vYmlsZSBkZXZpY2VzLlxuICAgKiBUaGlzIGF0dHJpYnV0ZSBpcyBhIHN0cmluZyB3aXRoIGEgcGVyY2VudCBjaGFyYWN0ZXIgYXQgdGhlIGVuZCAoZS5nLiBcIjE1MCVcIikuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSh6b29tOiBzdHJpbmcpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFscyAtIHRoZSB0eXBlIGNvbnZlcnNpb24gaXMgaW50ZW5kZWRcbiAgICBpZiAoem9vbSA9PSAndHJ1ZScpIHtcbiAgICAgIHpvb20gPSAnMTUwJSc7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6dHJpcGxlLWVxdWFscyAtIHRoZSB0eXBlIGNvbnZlcnNpb24gaXMgaW50ZW5kZWRcbiAgICB9IGVsc2UgaWYgKHpvb20gPT0gJ2ZhbHNlJyB8fCB6b29tID09PSB1bmRlZmluZWQgfHwgem9vbSA9PT0gbnVsbCkge1xuICAgICAgem9vbSA9ICcxMDAlJztcbiAgICB9XG4gICAgdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tID0gem9vbTtcbiAgICBsZXQgZmFjdG9yID0gMTtcbiAgICBpZiAoIVN0cmluZyh6b29tKS5pbmNsdWRlcygnJScpKSB7XG4gICAgICB6b29tID0gMTAwICogTnVtYmVyKHpvb20pICsgJyUnO1xuICAgIH1cbiAgICBmYWN0b3IgPSBOdW1iZXIoKHpvb20gfHwgJzEwMCcpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tU2NhbGUgPSBmYWN0b3I7XG4gICAgdGhpcy50b29sYmFyV2lkdGggPSAoMTAwIC8gZmFjdG9yKS50b1N0cmluZygpICsgJyUnO1xuICAgIHRoaXMudG9vbGJhclBhZGRpbmdUb3AgPSAoZmFjdG9yIC0gMSkgKiA4ICsgJ3B4JztcbiAgICBpZiAodGhpcy5zaG93U2lkZWJhckJ1dHRvbikge1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICg2OCAqIGZhY3RvcikudG9TdHJpbmcoKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAnMHB4JztcbiAgICB9XG4gICAgdGhpcy5zZWNvbmRhcnlUb29sYmFyVG9wID0gKDM2ICsgMzYgKiAoZmFjdG9yIC0gMSkpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIHRoaXMuZmluZGJhclRvcCA9ICgzNiArIDExNiAqIChmYWN0b3IgLSAxKSkudG9TdHJpbmcoKSArICdweCc7XG4gIH1cblxuICAvKiogRGVwcmVjYXRlZC4gUGxlYXNlIHVzZSBbbW9iaWxlRnJpZW5kbHlab29tXSBpbnN0ZWFkLlxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLiovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgbW9iaWxlWm9vbShtb2JpbGVGcmllbmRseVpvb206IHN0cmluZykge1xuICAgIHRoaXMubW9iaWxlRnJpZW5kbHlab29tID0gbW9iaWxlRnJpZW5kbHlab29tO1xuICB9XG5cbiAgcHJpdmF0ZSBfdG9wOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIGdldCBzaWRlYmFyUG9zaXRpb25Ub3AoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5fdG9wKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdG9wO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20pIHtcbiAgICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgIGNvbnN0IHpvb20gPSBOdW1iZXIodGhpcy5tb2JpbGVGcmllbmRseVpvb20uc3Vic3RyaW5nKDAsIHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgcmV0dXJuICgyICsgMC4yOSAqIHpvb20pLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbTtcbiAgICAgIH1cbiAgICAgIHJldHVybiAoMTYgKyAwLjE2ICogTnVtYmVyKHRoaXMubW9iaWxlRnJpZW5kbHlab29tKSkudG9TdHJpbmcoKSArICdweCc7XG4gICAgfVxuICAgIHJldHVybiAnMzJweCc7XG4gIH1cbiAgcHVibGljIGNhbGNWaWV3ZXJQb3NpdGlvblRvcCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5fdG9wKSB7XG4gICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gdGhpcy5fdG9wO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20pIHtcbiAgICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5lbmRzV2l0aCgnJScpKSB7XG4gICAgICAgIGNvbnN0IHpvb20gPSBOdW1iZXIodGhpcy5tb2JpbGVGcmllbmRseVpvb20uc3Vic3RyaW5nKDAsIHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmxlbmd0aCAtIDEpKTtcbiAgICAgICAgaWYgKCF0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gJzAnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAoMSArIDAuMzIgKiB6b29tKS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20uZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9IHRoaXMubW9iaWxlRnJpZW5kbHlab29tO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzUHJpbWFyeU1lbnVWaXNpYmxlKCkpIHtcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMzJweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSAnMCc7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSwgQEluamVjdChQTEFURk9STV9JRCkgcHJpdmF0ZSBwbGF0Zm9ybUlkLCBwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgbG9jYXRpb246IExvY2F0aW9uKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIGlmICghd2luZG93WydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XG4gICAgICAgIGNvbnN0IGlzSUUgPSAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xuICAgICAgICBjb25zdCBpc0VkZ2UgPSAvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuXG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoaXNJRSB8fCBpc0VkZ2UgPyAnYXNzZXRzL3BkZi1lczUuanMnIDogJ2Fzc2V0cy9wZGYuanMnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfVxuICAgICAgaWYgKCEod2luZG93IGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xuICAgICAgICB0aGlzLmxvYWRWaWV3ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRWaWV3ZXIoKTogdm9pZCB7XG4gICAgaWYgKCF3aW5kb3dbJ3BkZmpzLWRpc3QvYnVpbGQvcGRmJ10pIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5sb2FkVmlld2VyKCksIDI1KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNJRSA9ICEhKDxhbnk+d2luZG93KS5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhISg8YW55PmRvY3VtZW50KS5kb2N1bWVudE1vZGU7XG4gICAgICBjb25zdCBpc0VkZ2UgPSAvRWRnZVxcL1xcZC4vaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgICAgY29uc3Qgc2NyaXB0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgc2NyaXB0Mi5zcmMgPSB0aGlzLmxvY2F0aW9uLm5vcm1hbGl6ZShpc0lFIHx8IGlzRWRnZSA/ICdhc3NldHMvdmlld2VyLWVzNS5qcycgOiAnYXNzZXRzL3ZpZXdlci5qcycpO1xuICAgICAgc2NyaXB0Mi50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICBzY3JpcHQyLmFzeW5jID0gdHJ1ZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0Mik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGVtaXRab29tQ2hhbmdlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnpvb21DaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS53ZWJWaWV3ZXJMb2FkKSB7XG4gICAgICB0aGlzLmRvSW5pdFBERlZpZXdlcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubmdBZnRlclZpZXdJbml0KCksIDUwKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzc2lnblRhYmluZGV4ZXMoKSB7XG4gICAgaWYgKHRoaXMuc3RhcnRUYWJpbmRleCkge1xuICAgICAgY29uc3QgciA9IHRoaXMucm9vdC5uYXRpdmVFbGVtZW50LmNsb25lTm9kZSh0cnVlKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIHIuY2xhc3NMaXN0LmFkZCgnb2Zmc2NyZWVuJyk7XG4gICAgICB0aGlzLnNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KHIpO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhyLCB0aGlzLnJvb3QubmF0aXZlRWxlbWVudCwgW10pO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChyKTtcbiAgICAgIGNvbnN0IHNvcnRlZCA9IGVsZW1lbnRzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEueSAtIGIueSA+IDE1KSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGIueSAtIGEueSA+IDE1KSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhLnggLSBiLng7XG4gICAgICB9KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNvcnRlZFtpXS5lbGVtZW50LnRhYkluZGV4ID0gdGhpcy5zdGFydFRhYmluZGV4ICsgaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNob3dFbGVtZW50c1JlY3Vyc2l2ZWx5KHJvb3Q6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5YWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5YTFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbkxhcmdlVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuTWVkaXVtVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuU21hbGxWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5UaW55VmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVhYTFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYTFZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVMYXJnZVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVNZWRpdW1WaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlU21hbGxWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlVGlueVZpZXcnKTtcblxuICAgIGlmIChyb290IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgcm9vdCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAocm9vdC5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9vdC5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGMgPSByb290LmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgIGlmIChjKSB7XG4gICAgICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMoY29weTogRWxlbWVudCwgb3JpZ2luYWw6IEVsZW1lbnQsIGVsZW1lbnRzOiBBcnJheTxFbGVtZW50QW5kUG9zaXRpb24+KTogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPiB7XG4gICAgaWYgKGNvcHkgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCB8fCBjb3B5IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxTZWxlY3RFbGVtZW50KSB7XG4gICAgICBjb25zdCByZWN0ID0gY29weS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIGNvbnN0IGVsZW1lbnRBbmRQb3MgPSB7XG4gICAgICAgIGVsZW1lbnQ6IG9yaWdpbmFsLFxuICAgICAgICB4OiBNYXRoLnJvdW5kKHJlY3QubGVmdCksXG4gICAgICAgIHk6IE1hdGgucm91bmQocmVjdC50b3ApLFxuICAgICAgfSBhcyBFbGVtZW50QW5kUG9zaXRpb247XG4gICAgICBlbGVtZW50cy5wdXNoKGVsZW1lbnRBbmRQb3MpO1xuICAgIH0gZWxzZSBpZiAoY29weS5jaGlsZEVsZW1lbnRDb3VudCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29weS5jaGlsZEVsZW1lbnRDb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGMgPSBjb3B5LmNoaWxkcmVuLml0ZW0oaSk7XG4gICAgICAgIGNvbnN0IG8gPSBvcmlnaW5hbC5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoYyAmJiBvKSB7XG4gICAgICAgICAgZWxlbWVudHMgPSB0aGlzLmNvbGxlY3RFbGVtZW50UG9zaXRpb25zKGMsIG8sIGVsZW1lbnRzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZWxlbWVudHM7XG4gIH1cblxuICBwcml2YXRlIGRvSW5pdFBERlZpZXdlcigpIHtcbiAgICBjb25zdCBsYW5nTGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaW5rW3R5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCJdJyk7XG4gICAgY29uc3QgbGFuZ0NvdW50ID0gbGFuZ0xpbmtzLmxlbmd0aDtcblxuICAgIGlmIChsYW5nQ291bnQgPT09IDApIHtcbiAgICAgIGNvbnN0IGRpY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2wxMG5cIl0nKTtcbiAgICAgIGlmICghZGljdCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlQnJvd3NlckxvY2FsZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXG4gICAgICAgICAgICBcIklmIHlvdSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UsIHlvdSBtdXN0IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIlxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVGhlIGVhc2llc3Qgd2F5IHRvIGRvIHRoaXMgaXMgdG8gYWRkIHRoZW0gdG8gdGhlIGluZGV4Lmh0bWwuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgICAgIFwiUGxlYXNlIHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSBpZiB5b3UgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcbiAgICAgIGNvbnN0IG8gPSBsYW5nTGlua3NbMF0uYXR0cmlidXRlc1snb3JpZ2luJ107XG4gICAgICBpZiAobyAmJiBvLnZhbHVlICE9PSAnbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXInKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgICAgIFwiUGxlYXNlIHNldCB0aGUgYXR0cmlidXRlICd1c2VCcm93c2VyTG9jYWxlJyB0byBmYWxzZSBpZiB5b3UgcHJvdmlkZSB0aGUgdHJhbnNsYXRpb25zIHlvdXJzZWxmIGluIGEgc2NyaXB0IG9yIGxpbmsgdGFnLlwiXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNhbGxiYWNrID0gKGUpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvY2FsaXplZCcsIGNhbGxiYWNrKTtcbiAgICAgIHRoaXMuaW5pdFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5hZnRlckxpYnJhcnlJbml0KCk7XG4gICAgICAgIHRoaXMub3BlblBERigpO1xuICAgICAgICB0aGlzLmFzc2lnblRhYmluZGV4ZXMoKTtcbiAgICAgIH0sIHRoaXMuZGVsYXlGaXJzdFZpZXcpO1xuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYWZ0ZXJwcmludCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5hZnRlclByaW50LmVtaXQoKTtcbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmVwcmludCcsIChldmVudCkgPT4ge1xuICAgICAgdGhpcy5iZWZvcmVQcmludC5lbWl0KCk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XG5cbiAgICBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgY29uc29sZS5lcnJvcihcIllvdSdyZSB0cnlpbmcgdG8gb3BlbiB0d28gaW5zdGFuY2VzIG9mIHRoZSBQREYgdmlld2VyLiBNb3N0IGxpa2VseSwgdGhpcyB3aWxsIHJlc3VsdCBpbiBlcnJvcnMuXCIpO1xuICAgIH1cbiAgICBjb25zdCBvbkxvYWRlZCA9ICgpID0+IHtcbiAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3dlYnZpZXdlcmxvYWRlZCcsIG9uTG9hZGVkKTtcbiAgICB9O1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3dlYnZpZXdlcmxvYWRlZCcsIG9uTG9hZGVkKTtcblxuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShudWxsKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gVGhpcyBpbml0aWFsaXplcyB0aGUgd2Vidmlld2VyLCB0aGUgZmlsZSBtYXkgYmUgcGFzc2VkIGluIHRvIGl0IHRvIGluaXRpYWxpemUgdGhlIHZpZXdlciB3aXRoIGEgcGRmIGRpcmVjdGx5XG4gICAgICB0aGlzLnByaW1hcnlNZW51VmlzaWJsZSA9IHRydWU7XG4gICAgICBjb25zdCBzaG93U2Vjb25kYXJ5TWVudSA9IHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgJiYgdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbjtcblxuICAgICAgaWYgKHNob3dTZWNvbmRhcnlNZW51KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKTtcbiAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcbiAgICAgICg8YW55PndpbmRvdykud2ViVmlld2VyTG9hZCgpO1xuXG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmRlZmF1bHRVcmwgPSAnJzsgLy8gSUUgYnVnZml4XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZmlsZW5hbWVGb3JEb3dubG9hZCA9IHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZDtcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2xvY2FsZScsIHRoaXMubGFuZ3VhZ2UpO1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLnNldCgnaW1hZ2VSZXNvdXJjZXNQYXRoJywgdGhpcy5pbWFnZVJlc291cmNlc1BhdGgpO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5pc1ZpZXdlckVtYmVkZGVkID0gdHJ1ZTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lcikge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpbnRDb250YWluZXInKTtcbiAgICAgIGlmIChwYykge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmFwcGVuZENoaWxkKHBjKTtcbiAgICAgIH1cbiAgICB9LCAwKTtcbiAgfVxuXG4gIC8qKiBOb3RpZmllcyBldmVyeSB3aWRnZXQgdGhhdCBpbXBsZW1lbnRzIG9uTGlicmFyeUluaXQoKSB0aGF0IHRoZSBQREYgdmlld2VyIG9iamVjdHMgYXJlIGF2YWlsYWJsZSAqL1xuICBwcml2YXRlIGFmdGVyTGlicmFyeUluaXQoKSB7XG4gICAgdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0Lm5leHQoKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGVja0hlaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd6b29tJylbMF07XG4gICAgaWYgKGNvbnRhaW5lci5jbGllbnRIZWlnaHQgPT09IDAgJiYgdGhpcy5faGVpZ2h0LmluY2x1ZGVzKCclJykpIHtcbiAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgICAgIGNvbnN0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCB0b3AgPSByZWN0LnRvcDtcbiAgICAgIGxldCBtaCA9IGF2YWlsYWJsZSAtIHRvcDtcbiAgICAgIGNvbnN0IGZhY3RvciA9IE51bWJlcih0aGlzLl9oZWlnaHQucmVwbGFjZSgnJScsICcnKSk7XG4gICAgICBtaCA9IChtaCAqIGZhY3RvcikgLyAxMDA7XG4gICAgICBpZiAobWggPiAxMDApIHtcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSBtaCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm1pbkhlaWdodCA9ICcxMDBweCc7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uU3ByZWFkQ2hhbmdlKG5ld1NwcmVhZDogJ29mZicgfCAnZXZlbicgfCAnb2RkJyk6IHZvaWQge1xuICAgIHRoaXMuc3ByZWFkQ2hhbmdlLmVtaXQobmV3U3ByZWFkKTtcbiAgfVxuXG4gIHByaXZhdGUgYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50ZXh0TGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKCF0aGlzLmhhbmRUb29sKSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCAxKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRleHRMYXllciA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vIHRvZG8gcmVtb3ZlIHRoaXMgaGFjazpcbiAgICAgICAgICAgIGNvbnN0IHZpZXdGaW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdGaW5kJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAodmlld0ZpbmQpIHtcbiAgICAgICAgICAgICAgdmlld0ZpbmQuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaW5kYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRiYXInKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmIChmaW5kYmFyKSB7XG4gICAgICAgICAgICAgIGZpbmRiYXIuY2xhc3NMaXN0LnJlbW92ZSgnaW52aXNpYmxlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgICAgb3B0aW9ucy5zZXQoJ3RleHRMYXllck1vZGUnLCB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA/IDEgOiAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gfHwgdGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLnNob3dGaW5kQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJmaW5kXCIgYnV0dG9uIGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgZmluZCBidXR0b24uJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnRleHRMYXllcikge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24pIHtcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgY29uc29sZS53YXJuKCdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLicpO1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLmxvZ0xldmVsID49IFZlcmJvc2l0eUxldmVsLldBUk5JTkdTKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgICAgJ0hpZGluZyB0aGUgXCJoYW5kIHRvb2wgLyBzZWxlY3Rpb24gbW9kZVwiIG1lbnUgYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSB0aGUgbWVudSBpdGVtcy4nXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIGFzIElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGVmYXVsdE9wdGlvbnMpIHtcbiAgICAgIG9wdGlvbnMuc2V0KGtleSwgZGVmYXVsdE9wdGlvbnNba2V5XSk7XG4gICAgfVxuICAgIG9wdGlvbnMuc2V0KCdkaXNhYmxlUHJlZmVyZW5jZXMnLCB0cnVlKTtcbiAgICB0aGlzLnNldFpvb20oKTtcblxuICAgIG9wdGlvbnMuc2V0KCdpZ25vcmVLZXlib2FyZCcsIHRoaXMuaWdub3JlS2V5Ym9hcmQpO1xuICAgIG9wdGlvbnMuc2V0KCdpZ25vcmVLZXlzJywgdGhpcy5pZ25vcmVLZXlzKTtcbiAgICBvcHRpb25zLnNldCgnYWNjZXB0S2V5cycsIHRoaXMuYWNjZXB0S2V5cyk7XG4gICAgdGhpcy5hY3RpdmF0ZVRleHRsYXllcklmTmVjZXNzYXJ5KG9wdGlvbnMpO1xuXG4gICAgbGV0IHNpZGViYXJWaXNpYmxlID0gdGhpcy5zaWRlYmFyVmlzaWJsZTtcbiAgICBpZiAoc2lkZWJhclZpc2libGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgc2lkZWJhclZpc2libGUgPSB0aGlzLnNob3dTaWRlYmFyT25Mb2FkO1xuICAgIH1cbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgaWYgKHNpZGViYXJWaXNpYmxlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNpZGViYXJWaWV3T25Mb2FkID0gc2lkZWJhclZpc2libGUgPyAxIDogMDtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLnNpZGViYXJWaWV3T25Mb2FkID0gc2lkZWJhclZpc2libGUgPyAxIDogMDtcbiAgICAgIH1cbiAgICAgIG9wdGlvbnMuc2V0KCdzaWRlYmFyVmlld09uTG9hZCcsIHRoaXMuc2lkZWJhclZpc2libGUgPyAxIDogMCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNwcmVhZCA9PT0gJ2V2ZW4nKSB7XG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDIpO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XG4gICAgICB9XG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdldmVuJyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdzcHJlYWRNb2RlT25Mb2FkJywgMSk7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29kZCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDApO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDA7XG4gICAgICB9XG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZmYnKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucHJpbnRSZXNvbHV0aW9uKSB7XG4gICAgICBvcHRpb25zLnNldCgncHJpbnRSZXNvbHV0aW9uJywgdGhpcy5wcmludFJlc29sdXRpb24pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zaG93Qm9yZGVycykge1xuICAgICAgb3B0aW9ucy5zZXQoJ3Nob3dCb3JkZXJzJywgdGhpcy5zaG93Qm9yZGVycyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvcGVuUERGKCkge1xuICAgIFNlcnZpY2VXb3JrZXJPcHRpb25zLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyA9IHRoaXMuc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgICBpZiAoIXRoaXMubGlzdGVuVG9VUkwpIHtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLnNldEhhc2ggPSBmdW5jdGlvbiAoKSB7fTtcbiAgICB9XG4gICAgdGhpcy5pbml0VGltZW91dCA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndGV4dGxheWVycmVuZGVyZWQnLCAoeDogVGV4dExheWVyUmVuZGVyZWRFdmVudCkgPT4ge1xuICAgICAgdGhpcy50ZXh0bGF5ZXJSZW5kZXJlZC5lbWl0KHgpOyAvLyBkZXByZWNhdGVkIC0ga2VwdCB0byBhdm9pZCBhIGJyZWFraW5nIGNoYW5nZVxuICAgICAgdGhpcy50ZXh0TGF5ZXJSZW5kZXJlZC5lbWl0KHgpO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VzbG9hZGVkJywgKHg6IFBhZ2VzTG9hZGVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMucGFnZXNMb2FkZWQuZW1pdCh4KTtcbiAgICAgIGlmICh0aGlzLnJvdGF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XG4gICAgICAgIGlmIChyID09PSAwIHx8IHIgPT09IDkwIHx8IHIgPT09IDE4MCB8fCByID09PSAyNzApIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5uYW1lZGRlc3QpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5uYXZpZ2F0ZVRvKHRoaXMubmFtZWRkZXN0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBhZ2UpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlTGFiZWwpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbCA9IHRoaXMucGFnZUxhYmVsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0Wm9vbSgpO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlcmVuZGVyZWQnLCAoeDogUGFnZVJlbmRlcmVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlcmVkLmVtaXQoeCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignZG93bmxvYWQnLCAoeDogUGRmRG93bmxvYWRlZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBkZkRvd25sb2FkZWQuZW1pdCh4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzY2FsZWNoYW5naW5nJywgKHg6IFNjYWxlQ2hhbmdpbmdFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFpvb21GYWN0b3IuZW1pdCh4LnNjYWxlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnpvb20gIT09ICdhdXRvJyAmJiB0aGlzLnpvb20gIT09ICdwYWdlLWZpdCcgJiYgdGhpcy56b29tICE9PSAncGFnZS1hY3R1YWwnICYmIHRoaXMuem9vbSAhPT0gJ3BhZ2Utd2lkdGgnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZW1pdFpvb21DaGFuZ2UoeC5zY2FsZSAqIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncm90YXRpb25jaGFuZ2luZycsICh4OiBQYWdlc1JvdGF0aW9uRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMucm90YXRpb25DaGFuZ2UuZW1pdCh4LnBhZ2VzUm90YXRpb24pO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2ZpbGVpbnB1dGNoYW5nZScsICh4OiBGaWxlSW5wdXRDaGFuZ2VkKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBwYXRoID0geC5maWxlSW5wdXQudmFsdWUucmVwbGFjZSgnQzpcXFxcZmFrZXBhdGhcXFxcJywgJycpO1xuICAgICAgICB0aGlzLnNyY0NoYW5nZS5lbWl0KHBhdGgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJywgKHg6IEhhbmR0b29sQ2hhbmdlZCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kVG9vbENoYW5nZS5lbWl0KHgudG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdzaWRlYmFydmlld2NoYW5nZWQnLCAoeDogU2lkZWJhcnZpZXdDaGFuZ2UpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuc2lkZWJhclZpc2libGVDaGFuZ2UuZW1pdCh4LnZpZXcgPT09IDEpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRlZmluZGNvbnRyb2xzdGF0ZScsICh4OiBGaW5kUmVzdWx0KSA9PiB7XG4gICAgICBpZiAodGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50KSB7XG4gICAgICAgIGlmICh4LnN0YXRlID09PSBGaW5kU3RhdGUuTk9UX0ZPVU5EKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50LmVtaXQoeyBjdXJyZW50OiAwLCB0b3RhbDogMCB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh4Lm1hdGNoZXNDb3VudC50b3RhbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHgubWF0Y2hlc0NvdW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy51cGRhdGVGaW5kU3RhdGUpIHtcbiAgICAgICAgdGhpcy51cGRhdGVGaW5kU3RhdGUuZW1pdCh4LnN0YXRlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigndXBkYXRlZmluZG1hdGNoZXNjb3VudCcsICh4OiBGaW5kUmVzdWx0KSA9PiB7XG4gICAgICBpZiAodGhpcy51cGRhdGVGaW5kTWF0Y2hlc0NvdW50KSB7XG4gICAgICAgIGlmICh4Lm1hdGNoZXNDb3VudC50b3RhbCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHgubWF0Y2hlc0NvdW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3BhZ2VjaGFuZ2luZycsICh4OiBQYWdlTnVtYmVyQ2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UGFnZSA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZU51bWJlcjtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2VMYWJlbCA9IFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsO1xuXG4gICAgICAgIHRoaXMucGFnZUNoYW5nZS5lbWl0KGN1cnJlbnRQYWdlKTtcbiAgICAgICAgdGhpcy5wYWdlTGFiZWxDaGFuZ2UuZW1pdChjdXJyZW50UGFnZUxhYmVsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5jaGVja0hlaWdodCgpO1xuICAgIC8vIG9wZW4gYSBmaWxlIGluIHRoZSB2aWV3ZXJcbiAgICBpZiAoISF0aGlzLl9zcmMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICB2ZXJib3NpdHk6IHRoaXMubG9nTGV2ZWwsXG4gICAgICB9O1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ub25FcnJvciA9IChlcnJvcjogRXJyb3IpID0+IHRoaXMucGRmTG9hZGluZ0ZhaWxlZC5lbWl0KGVycm9yKTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4odGhpcy5fc3JjLCBvcHRpb25zKS50aGVuKCgpID0+IHRoaXMucGRmTG9hZGVkLmVtaXQoeyBwYWdlc0NvdW50OiBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlc0NvdW50IH0pKTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSBOdW1iZXIodGhpcy5wYWdlKTtcbiAgICAgIH1cbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RDdXJzb3JUb29sKCkge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IHRoaXMuaGFuZFRvb2wgPyAxIDogMCB9KTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLmluaXRUaW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5pbml0VGltZW91dCk7XG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmNsZWFudXAoKTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmNsb3NlKCk7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgcmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5fYm91bmRFdmVudHMpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24udW5iaW5kV2luZG93RXZlbnRzKCk7XG4gICAgICB9XG4gICAgICBjb25zdCBidXMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cztcbiAgICAgIGlmIChidXMpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24udW5iaW5kRXZlbnRzKCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGJ1cy5fbGlzdGVuZXJzKSB7XG4gICAgICAgICAgaWYgKGJ1cy5fbGlzdGVuZXJzW2tleV0pIHtcbiAgICAgICAgICAgIGNvbnN0IGxpc3QgPSBidXMuX2xpc3RlbmVyc1trZXldO1xuICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgdGhlIGZvciBsb29wIGlzIG5lY2Vzc2FyeSAtIGJ1dFxuICAgICAgICAgICAgLy8gaXQgbWlnaHQgaW1wcm92ZSBnYXJiYWdlIGNvbGxlY3Rpb24gaWYgdGhlIFwibGlzdGVuZXJzXCJcbiAgICAgICAgICAgIC8vIGFycmF5IGlzIHN0b3JlZCBzb21ld2hlcmUgZWxzZVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgIGxpc3RbaV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidXMuX2xpc3RlbmVyc1trZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgKFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzIGFzIGFueSkgPSBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xuICAgIGlmIChib2R5WzBdKSB7XG4gICAgICBjb25zdCB0b3BMZXZlbEVsZW1lbnRzID0gYm9keVswXS5jaGlsZHJlbjtcbiAgICAgIGZvciAobGV0IGkgPSB0b3BMZXZlbEVsZW1lbnRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGNvbnN0IGUgPSB0b3BMZXZlbEVsZW1lbnRzLml0ZW0oaSk7XG4gICAgICAgIGlmIChlICYmIGUuaWQgPT09ICdwcmludENvbnRhaW5lcicpIHtcbiAgICAgICAgICBib2R5WzBdLnJlbW92ZUNoaWxkKGUpO1xuICAgICAgICB9IGVsc2UgaWYgKGUgJiYgZS5pZCA9PT0gJ2ZpbGVJbnB1dCcpIHtcbiAgICAgICAgICBib2R5WzBdLnJlbW92ZUNoaWxkKGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1ByaW1hcnlNZW51VmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCB2aXNpYmxlID1cbiAgICAgIHRoaXMuc2hvd0Jvb2ttYXJrQnV0dG9uIHx8XG4gICAgICB0aGlzLnNob3dEb3dubG9hZEJ1dHRvbiB8fFxuICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiB8fFxuICAgICAgdGhpcy5zaG93T3BlbkZpbGVCdXR0b24gfHxcbiAgICAgIHRoaXMuc2hvd1BhZ2luZ0J1dHRvbnMgfHxcbiAgICAgIHRoaXMuc2hvd1ByZXNlbnRhdGlvbk1vZGVCdXR0b24gfHxcbiAgICAgIHRoaXMuc2hvd1ByaW50QnV0dG9uIHx8XG4gICAgICB0aGlzLnNob3dQcm9wZXJ0aWVzQnV0dG9uIHx8XG4gICAgICB0aGlzLnNob3dTaWRlYmFyQnV0dG9uIHx8XG4gICAgICB0aGlzLnNob3dab29tQnV0dG9ucztcblxuICAgIGlmICh2aXNpYmxlKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgICBpZiAoTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQubmd4RXh0ZW5kZWRQZGZWaWV3ZXJJbml0aWFsaXplZCkge1xuICAgICAgaWYgKCdzcmMnIGluIGNoYW5nZXMgfHwgJ2Jhc2U2NFNyYycgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAoISF0aGlzLl9zcmMpIHtcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ub3Blbih0aGlzLl9zcmMpLnRoZW4oXG4gICAgICAgICAgICAoKSA9PiB0aGlzLnBkZkxvYWRlZC5lbWl0KHsgcGFnZXNDb3VudDogUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudCB9KSxcbiAgICAgICAgICAgIChlcnJvcjogRXJyb3IpID0+IHRoaXMucGRmTG9hZGluZ0ZhaWxlZC5lbWl0KGVycm9yKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgnem9vbScgaW4gY2hhbmdlcykge1xuICAgICAgICB0aGlzLnNldFpvb20oKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCdoYW5kVG9vbCcgaW4gY2hhbmdlcykge1xuICAgICAgICB0aGlzLnNlbGVjdEN1cnNvclRvb2woKTtcbiAgICAgIH1cbiAgICAgIGlmICgncGFnZScgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IHRoaXMucGFnZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCdwYWdlTGFiZWwnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZUxhYmVsKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwgPSB0aGlzLnBhZ2VMYWJlbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJ3JvdGF0aW9uJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnJvdGF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgciA9IE51bWJlcih0aGlzLnJvdGF0aW9uKTtcbiAgICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IHI7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5wYWdlc1JvdGF0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCdzaWRlYmFyVmlzaWJsZScgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5zaWRlYmFyVmlzaWJsZSkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIub3BlbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlNpZGViYXIuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKCdmaWxlbmFtZUZvckRvd25sb2FkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5maWxlbmFtZUZvckRvd25sb2FkID0gdGhpcy5maWxlbmFtZUZvckRvd25sb2FkO1xuICAgICAgfVxuICAgICAgaWYgKCduYW1lZGRlc3QnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UubmF2aWdhdGVUbyh0aGlzLm5hbWVkZGVzdCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCdzcHJlYWQnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc3ByZWFkID09PSAnZXZlbicpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMjtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDI7XG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3ByZWFkID09PSAnb2RkJykge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnNwcmVhZE1vZGVPbkxvYWQgPSAxO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5zcHJlYWRNb2RlID0gMTtcbiAgICAgICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZGQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMDtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDA7XG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xuICAgICAgaWYgKCF0aGlzLnNob3dTZWNvbmRhcnlUb29sYmFyQnV0dG9uIHx8ICF0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5jYWxjVmlld2VyUG9zaXRpb25Ub3AoKTtcbiAgICB9XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuXG4gICAgaWYgKCdwcmludFJlc29sdXRpb24nIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBvcHRpb25zLnNldCgncHJpbnRSZXNvbHV0aW9uJywgdGhpcy5wcmludFJlc29sdXRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ2lnbm9yZUtleWJvYXJkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ2lnbm9yZUtleXMnIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnYWNjZXB0S2V5cycgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdzaG93Qm9yZGVycycgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKCFjaGFuZ2VzWydzaG93Qm9yZGVycyddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgICAgICBjb25zdCB2aWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld2VyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMpIHtcbiAgICAgICAgICAgIHZpZXdlci5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmVQYWdlQm9yZGVycycpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2aWV3ZXIuY2xhc3NMaXN0LmFkZCgncmVtb3ZlUGFnZUJvcmRlcnMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XG4gICAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucmVtb3ZlUGFnZUJvcmRlcnMgPSAhdGhpcy5zaG93Qm9yZGVycztcbiAgICAgICAgICB9XG4gICAgICAgICAgY29uc3Qgem9vbUV2ZW50ID0ge1xuICAgICAgICAgICAgc291cmNlOiB2aWV3ZXIsXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICAgICAgc2NhbGU6IChOdW1iZXIodGhpcy56b29tKSB8IDEwMCkgLyAxMDAsXG4gICAgICAgICAgICBwcmVzZXRWYWx1ZTogdGhpcy56b29tLFxuICAgICAgICAgIH0gYXMgU2NhbGVDaGFuZ2luZ0V2ZW50O1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzY2FsZWNoYW5naW5nJywgem9vbUV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24gJiYgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmRG9jdW1lbnQuX3RyYW5zcG9ydC5tZXNzYWdlSGFuZGxlci5zZW5kKCdzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMnLCB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCdlbmFibGVQcmludCcgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKCFjaGFuZ2VzWydlbmFibGVQcmludCddLmlzRmlyc3RDaGFuZ2UoKSkge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5lbmFibGVQcmludCA9IHRoaXMuZW5hYmxlUHJpbnQ7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChcbiAgICAgICgnY3VzdG9tRmluZGJhcicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhciddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICgnY3VzdG9tRmluZGJhckJ1dHRvbnMnIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXJCdXR0b25zJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxuICAgICAgKCdjdXN0b21GaW5kYmFySW5wdXRBcmVhJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFySW5wdXRBcmVhJ10uaXNGaXJzdENoYW5nZSgpKSB8fFxuICAgICAgKCdjdXN0b21Ub29sYmFyJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21Ub29sYmFyJ10uaXNGaXJzdENoYW5nZSgpKVxuICAgICkge1xuICAgICAgaWYgKHRoaXMuZHVtbXlDb21wb25lbnRzKSB7XG4gICAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzLmFkZE1pc3NpbmdTdGFuZGFyZFdpZGdldHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldFpvb20oKSB7XG4gICAgbGV0IHpvb21Bc051bWJlciA9IHRoaXMuem9vbTtcbiAgICBpZiAoU3RyaW5nKHpvb21Bc051bWJlcikuZW5kc1dpdGgoJyUnKSkge1xuICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKFN0cmluZyh6b29tQXNOdW1iZXIpLnJlcGxhY2UoJyUnLCAnJykpIC8gMTAwO1xuICAgIH0gZWxzZSBpZiAoIWlzTmFOKE51bWJlcih6b29tQXNOdW1iZXIpKSkge1xuICAgICAgem9vbUFzTnVtYmVyID0gTnVtYmVyKHpvb21Bc051bWJlcikgLyAxMDA7XG4gICAgfVxuICAgIGlmICghem9vbUFzTnVtYmVyKSB7XG4gICAgICB6b29tQXNOdW1iZXIgPSAnYXV0byc7XG4gICAgfVxuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG5cbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24pIHtcbiAgICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2RlZmF1bHRab29tVmFsdWUnLCB6b29tQXNOdW1iZXIpO1xuICAgIH1cbiAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFNjYWxlVmFsdWUgPSB6b29tQXNOdW1iZXI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uUmVzaXplKCk6IHZvaWQge1xuICAgIGNvbnN0IHBkZlZpZXdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2h0bWwnKTtcbiAgICBpZiAocGRmVmlld2VyICYmIHBkZlZpZXdlci5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0ZXJDb250YWluZXInKTtcbiAgICAgIGlmIChjb250YWluZXIpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHRoaXMudG9vbGJhcldpZHRoSW5QaXhlbHMgPSB3aWR0aDtcbiAgICAgICAgaWYgKHRoaXMuc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCkge1xuICAgICAgICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudC5jaGVja1Zpc2liaWxpdHkoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NvbnRleHRtZW51JylcbiAgcHVibGljIG9uQ29udGV4dE1lbnUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29udGV4dE1lbnVBbGxvd2VkO1xuICB9XG5cbiAgcHVibGljIG9uU2Vjb25kYXJ5TWVudUlzRW1wdHkoaGlkZUtlYmFiQnV0dG9uOiBib29sZWFuKSB7XG4gICAgdGhpcy5oaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhciA9IGhpZGVLZWJhYkJ1dHRvbjtcbiAgfVxufVxuIl19