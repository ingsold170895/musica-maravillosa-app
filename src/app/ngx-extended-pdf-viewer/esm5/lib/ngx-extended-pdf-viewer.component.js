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
var NgxExtendedPdfViewerComponent = /** @class */ (function () {
    function NgxExtendedPdfViewerComponent(ngZone, platformId, notificationService, location) {
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
                var isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
                /** @type {?} */
                var isEdge = /Edge\/\d./i.test(navigator.userAgent);
                /** @type {?} */
                var script = document.createElement('script');
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
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "src", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "base64Src", {
        set: /**
         * @param {?} base64
         * @return {?}
         */
        function (base64) {
            /** @type {?} */
            var binary_string = window.atob(base64);
            /** @type {?} */
            var len = binary_string.length;
            /** @type {?} */
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                bytes[i] = binary_string.charCodeAt(i);
            }
            this.src = bytes.buffer;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "height", {
        get: /**
         * @return {?}
         */
        function () {
            return this._height;
        },
        set: /**
         * @param {?} h
         * @return {?}
         */
        function (h) {
            var _this = this;
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
            function () {
                _this.checkHeight();
            }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "showSidebarButton", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSidebarButton;
        },
        set: /**
         * @param {?} show
         * @return {?}
         */
        function (show) {
            this._showSidebarButton = show;
            /** @type {?} */
            var isIE = /msie\s|trident\//i.test(window.navigator.userAgent);
            /** @type {?} */
            var factor = 1;
            if (isIE) {
                factor = Number((this._mobileFriendlyZoom || '100').replace('%', '')) / 100;
            }
            if (this._showSidebarButton) {
                this.findbarLeft = (68 * factor).toString() + 'px';
            }
            else {
                this.findbarLeft = '0px';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "mobileFriendlyZoom", {
        get: /**
         * @return {?}
         */
        function () {
            return this._mobileFriendlyZoom;
        },
        /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         */
        set: /**
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         * @param {?} zoom
         * @return {?}
         */
        function (zoom) {
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
            var factor = 1;
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "mobileZoom", {
        /** Deprecated. Please use [mobileFriendlyZoom] instead.
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").*/
        set: /**
         * Deprecated. Please use [mobileFriendlyZoom] instead.
         * This attributes allows you to increase the size of the UI elements so you can use them on small mobile devices.
         * This attribute is a string with a percent character at the end (e.g. "150%").
         * @param {?} mobileFriendlyZoom
         * @return {?}
         */
        function (mobileFriendlyZoom) {
            this.mobileFriendlyZoom = mobileFriendlyZoom;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxExtendedPdfViewerComponent.prototype, "sidebarPositionTop", {
        get: /**
         * @return {?}
         */
        function () {
            if (this._top) {
                return this._top;
            }
            if (this.mobileFriendlyZoom) {
                if (this.mobileFriendlyZoom.endsWith('%')) {
                    /** @type {?} */
                    var zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
                    return (2 + 0.29 * zoom).toString() + 'px';
                }
                if (this.mobileFriendlyZoom.endsWith('px')) {
                    return this.mobileFriendlyZoom;
                }
                return (16 + 0.16 * Number(this.mobileFriendlyZoom)).toString() + 'px';
            }
            return '32px';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.calcViewerPositionTop = /**
     * @return {?}
     */
    function () {
        if (this._top) {
            this.viewerPositionTop = this._top;
            return;
        }
        if (this.mobileFriendlyZoom) {
            if (this.mobileFriendlyZoom.endsWith('%')) {
                /** @type {?} */
                var zoom = Number(this.mobileFriendlyZoom.substring(0, this.mobileFriendlyZoom.length - 1));
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
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.loadViewer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (!window['pdfjs-dist/build/pdf']) {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.loadViewer(); }), 25);
        }
        else {
            /** @type {?} */
            var isIE = !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
            /** @type {?} */
            var isEdge = /Edge\/\d./i.test(navigator.userAgent);
            /** @type {?} */
            var script2 = document.createElement('script');
            script2.src = this.location.normalize(isIE || isEdge ? 'assets/viewer-es5.js' : 'assets/viewer.js');
            script2.type = 'text/javascript';
            script2.async = true;
            document.getElementsByTagName('head')[0].appendChild(script2);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.emitZoomChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.zoomChange.emit(value);
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.onResize();
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (((/** @type {?} */ (window))).webViewerLoad) {
            this.doInitPDFViewer();
        }
        else {
            setTimeout((/**
             * @return {?}
             */
            function () { return _this.ngAfterViewInit(); }), 50);
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.assignTabindexes = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.startTabindex) {
            /** @type {?} */
            var r = (/** @type {?} */ (this.root.nativeElement.cloneNode(true)));
            r.classList.add('offscreen');
            this.showElementsRecursively(r);
            document.body.appendChild(r);
            /** @type {?} */
            var elements = this.collectElementPositions(r, this.root.nativeElement, []);
            document.body.removeChild(r);
            /** @type {?} */
            var sorted = elements.sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                if (a.y - b.y > 15) {
                    return 1;
                }
                if (b.y - a.y > 15) {
                    return -1;
                }
                return a.x - b.x;
            }));
            for (var i = 0; i < sorted.length; i++) {
                sorted[i].element.tabIndex = this.startTabindex + i;
            }
        }
    };
    /**
     * @private
     * @param {?} root
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.showElementsRecursively = /**
     * @private
     * @param {?} root
     * @return {?}
     */
    function (root) {
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
            for (var i = 0; i < root.childElementCount; i++) {
                /** @type {?} */
                var c = root.children.item(i);
                if (c) {
                    this.showElementsRecursively(c);
                }
            }
        }
    };
    /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.collectElementPositions = /**
     * @private
     * @param {?} copy
     * @param {?} original
     * @param {?} elements
     * @return {?}
     */
    function (copy, original, elements) {
        if (copy instanceof HTMLButtonElement || copy instanceof HTMLAnchorElement || copy instanceof HTMLInputElement || copy instanceof HTMLSelectElement) {
            /** @type {?} */
            var rect = copy.getBoundingClientRect();
            /** @type {?} */
            var elementAndPos = (/** @type {?} */ ({
                element: original,
                x: Math.round(rect.left),
                y: Math.round(rect.top),
            }));
            elements.push(elementAndPos);
        }
        else if (copy.childElementCount > 0) {
            for (var i = 0; i < copy.childElementCount; i++) {
                /** @type {?} */
                var c = copy.children.item(i);
                /** @type {?} */
                var o = original.children.item(i);
                if (c && o) {
                    elements = this.collectElementPositions(c, o, elements);
                }
            }
        }
        return elements;
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.doInitPDFViewer = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var langLinks = document.querySelectorAll('link[type="application/l10n"]');
        /** @type {?} */
        var langCount = langLinks.length;
        if (langCount === 0) {
            /** @type {?} */
            var dict = document.querySelector('script[type="application/l10n"]');
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
            var o = langLinks[0].attributes['origin'];
            if (o && o.value !== 'ngx-extended-pdf-viewer') {
                console.error(
                // tslint:disable-next-line:quotemark
                "Please set the attribute 'useBrowserLocale' to false if you provide the translations yourself in a script or link tag.");
            }
        }
        /** @type {?} */
        var callback = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            document.removeEventListener('localized', callback);
            _this.initTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                _this.afterLibraryInit();
                _this.openPDF();
                _this.assignTabindexes();
            }), _this.delayFirstView);
        });
        window.addEventListener('afterprint', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.afterPrint.emit();
        }));
        window.addEventListener('beforeprint', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.beforePrint.emit();
        }));
        document.addEventListener('localized', callback);
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("You're trying to open two instances of the PDF viewer. Most likely, this will result in errors.");
        }
        /** @type {?} */
        var onLoaded = (/**
         * @return {?}
         */
        function () {
            _this.overrideDefaultSettings();
            document.removeEventListener('webviewerloaded', onLoaded);
        });
        document.addEventListener('webviewerloaded', onLoaded);
        this.activateTextlayerIfNecessary(null);
        setTimeout((/**
         * @return {?}
         */
        function () {
            // This initializes the webviewer, the file may be passed in to it to initialize the viewer with a pdf directly
            _this.primaryMenuVisible = true;
            /** @type {?} */
            var showSecondaryMenu = _this.hideKebabMenuForSecondaryToolbar && _this.showSecondaryToolbarButton;
            if (showSecondaryMenu) {
                if (!_this.isPrimaryMenuVisible()) {
                    _this.primaryMenuVisible = false;
                }
            }
            _this.calcViewerPositionTop();
            _this.dummyComponents.addMissingStandardWidgets();
            ((/** @type {?} */ (window))).webViewerLoad();
            /** @type {?} */
            var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
            PDFViewerApplication.appConfig.defaultUrl = ''; // IE bugfix
            PDFViewerApplication.appConfig.filenameForDownload = _this.filenameForDownload;
            /** @type {?} */
            var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('locale', _this.language);
            PDFViewerApplicationOptions.set('imageResourcesPath', _this.imageResourcesPath);
            PDFViewerApplication.isViewerEmbedded = true;
            if (PDFViewerApplication.printKeyDownListener) {
                window.addEventListener('keydown', PDFViewerApplication.printKeyDownListener, true);
            }
            /** @type {?} */
            var pc = document.getElementById('printContainer');
            if (pc) {
                document.getElementsByTagName('body')[0].appendChild(pc);
            }
        }), 0);
    };
    /** Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available */
    /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.afterLibraryInit = /**
     * Notifies every widget that implements onLibraryInit() that the PDF viewer objects are available
     * @private
     * @return {?}
     */
    function () {
        this.notificationService.onPDFJSInit.next();
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.checkHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var container = document.getElementsByClassName('zoom')[0];
        if (container.clientHeight === 0 && this._height.includes('%')) {
            /** @type {?} */
            var available = window.innerHeight;
            /** @type {?} */
            var rect = container.getBoundingClientRect();
            /** @type {?} */
            var top_1 = rect.top;
            /** @type {?} */
            var mh = available - top_1;
            /** @type {?} */
            var factor = Number(this._height.replace('%', ''));
            mh = (mh * factor) / 100;
            if (mh > 100) {
                this.minHeight = mh + 'px';
            }
            else {
                this.minHeight = '100px';
            }
        }
    };
    /**
     * @param {?} newSpread
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onSpreadChange = /**
     * @param {?} newSpread
     * @return {?}
     */
    function (newSpread) {
        this.spreadChange.emit(newSpread);
    };
    /**
     * @private
     * @param {?} options
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.activateTextlayerIfNecessary = /**
     * @private
     * @param {?} options
     * @return {?}
     */
    function (options) {
        var _this = this;
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
                    function () {
                        // todo remove this hack:
                        /** @type {?} */
                        var viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        var findbar = (/** @type {?} */ (document.getElementById('findbar')));
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
                        function () {
                            _this.showFindButton = false;
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
                    function () {
                        // todo remove this hack:
                        /** @type {?} */
                        var viewFind = (/** @type {?} */ (document.getElementById('viewFind')));
                        if (viewFind) {
                            viewFind.classList.remove('invisible');
                        }
                        /** @type {?} */
                        var findbar = (/** @type {?} */ (document.getElementById('findbar')));
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
                        function () {
                            _this.showFindButton = false;
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
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.overrideDefaultSettings = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = (/** @type {?} */ (((/** @type {?} */ (window))).PDFViewerApplicationOptions));
        // tslint:disable-next-line:forin
        for (var key in defaultOptions) {
            options.set(key, defaultOptions[key]);
        }
        options.set('disablePreferences', true);
        this.setZoom();
        options.set('ignoreKeyboard', this.ignoreKeyboard);
        options.set('ignoreKeys', this.ignoreKeys);
        options.set('acceptKeys', this.acceptKeys);
        this.activateTextlayerIfNecessary(options);
        /** @type {?} */
        var sidebarVisible = this.sidebarVisible;
        if (sidebarVisible === undefined) {
            sidebarVisible = this.showSidebarOnLoad;
        }
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
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
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.openPDF = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        ServiceWorkerOptions.showUnverifiedSignatures = this.showUnverifiedSignatures;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
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
        function (x) {
            _this.textlayerRendered.emit(x); // deprecated - kept to avoid a breaking change
            _this.textLayerRendered.emit(x);
        }));
        PDFViewerApplication.eventBus.on('pagesloaded', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.pagesLoaded.emit(x);
            if (_this.rotation) {
                /** @type {?} */
                var r = Number(_this.rotation);
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
            function () {
                if (_this.nameddest) {
                    PDFViewerApplication.pdfLinkService.navigateTo(_this.nameddest);
                }
                else if (_this.page) {
                    PDFViewerApplication.page = Number(_this.page);
                }
                else if (_this.pageLabel) {
                    PDFViewerApplication.pdfViewer.currentPageLabel = _this.pageLabel;
                }
            }));
            _this.setZoom();
        }));
        PDFViewerApplication.eventBus.on('pagerendered', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.pageRendered.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('download', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.pdfDownloaded.emit(x);
            }));
        }));
        PDFViewerApplication.eventBus.on('scalechanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.currentZoomFactor.emit(x.scale);
                        if (_this.zoom !== 'auto' && _this.zoom !== 'page-fit' && _this.zoom !== 'page-actual' && _this.zoom !== 'page-width') {
                            _this.emitZoomChange(x.scale * 100);
                        }
                    }));
                }));
            }));
        }));
        PDFViewerApplication.eventBus.on('rotationchanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.rotationChange.emit(x.pagesRotation);
            }));
        }));
        PDFViewerApplication.eventBus.on('fileinputchange', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var path = x.fileInput.value.replace('C:\\fakepath\\', '');
                _this.srcChange.emit(path);
            }));
        }));
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.handToolChange.emit(x.tool === PdfCursorTools.HAND);
            }));
        }));
        PDFViewerApplication.eventBus.on('sidebarviewchanged', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                _this.sidebarVisibleChange.emit(x.view === 1);
            }));
        }));
        PDFViewerApplication.eventBus.on('updatefindcontrolstate', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.updateFindMatchesCount) {
                if (x.state === FindState.NOT_FOUND) {
                    _this.updateFindMatchesCount.emit({ current: 0, total: 0 });
                }
                else if (x.matchesCount.total) {
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
            if (_this.updateFindState) {
                _this.updateFindState.emit(x.state);
            }
        }));
        PDFViewerApplication.eventBus.on('updatefindmatchescount', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            if (_this.updateFindMatchesCount) {
                if (x.matchesCount.total) {
                    _this.updateFindMatchesCount.emit(x.matchesCount);
                }
            }
        }));
        PDFViewerApplication.eventBus.on('pagechanging', (/**
         * @param {?} x
         * @return {?}
         */
        function (x) {
            _this.ngZone.run((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var currentPage = PDFViewerApplication.pdfViewer.currentPageNumber;
                /** @type {?} */
                var currentPageLabel = PDFViewerApplication.pdfViewer.currentPageLabel;
                _this.pageChange.emit(currentPage);
                _this.pageLabelChange.emit(currentPageLabel);
            }));
        }));
        this.checkHeight();
        // open a file in the viewer
        if (!!this._src) {
            /** @type {?} */
            var options = {
                password: this.password,
                verbosity: this.logLevel,
            };
            PDFViewerApplication.onError = (/**
             * @param {?} error
             * @return {?}
             */
            function (error) { return _this.pdfLoadingFailed.emit(error); });
            PDFViewerApplication.open(this._src, options).then((/**
             * @return {?}
             */
            function () { return _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount }); }));
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.page) {
                PDFViewerApplication.page = Number(_this.page);
            }
        }), 100);
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.selectCursorTool = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: this.handTool ? 1 : 0 });
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
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
            var bus = PDFViewerApplication.eventBus;
            if (bus) {
                PDFViewerApplication.unbindEvents();
                for (var key in bus._listeners) {
                    if (bus._listeners[key]) {
                        /** @type {?} */
                        var list = bus._listeners[key];
                        // not sure if the for loop is necessary - but
                        // it might improve garbage collection if the "listeners"
                        // array is stored somewhere else
                        for (var i = 0; i < list.length; i++) {
                            list[i] = undefined;
                        }
                        bus._listeners[key] = undefined;
                    }
                }
            }
            ((/** @type {?} */ (PDFViewerApplication.eventBus))) = null;
        }
        /** @type {?} */
        var body = document.getElementsByTagName('body');
        if (body[0]) {
            /** @type {?} */
            var topLevelElements = body[0].children;
            for (var i = topLevelElements.length - 1; i >= 0; i--) {
                /** @type {?} */
                var e = topLevelElements.item(i);
                if (e && e.id === 'printContainer') {
                    body[0].removeChild(e);
                }
                else if (e && e.id === 'fileInput') {
                    body[0].removeChild(e);
                }
            }
        }
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.isPrimaryMenuVisible = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var visible = this.showBookmarkButton ||
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        /** @type {?} */
        var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
        if (NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            if ('src' in changes || 'base64Src' in changes) {
                if (!!this._src) {
                    this.overrideDefaultSettings();
                    PDFViewerApplication.open(this._src).then((/**
                     * @return {?}
                     */
                    function () { return _this.pdfLoaded.emit({ pagesCount: PDFViewerApplication.pagesCount }); }), (/**
                     * @param {?} error
                     * @return {?}
                     */
                    function (error) { return _this.pdfLoadingFailed.emit(error); }));
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
                    var r = Number(this.rotation);
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
            var options = PDFViewerApplicationOptions;
            if (options) {
                options.set('printResolution', this.printResolution);
            }
        }
        if ('ignoreKeyboard' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('ignoreKeys' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('acceptKeys' in changes) {
            /** @type {?} */
            var options = PDFViewerApplicationOptions;
            if (options) {
                this.overrideDefaultSettings();
            }
        }
        if ('showBorders' in changes) {
            if (!changes['showBorders'].isFirstChange()) {
                /** @type {?} */
                var options = PDFViewerApplicationOptions;
                if (options) {
                    this.overrideDefaultSettings();
                    /** @type {?} */
                    var viewer = (/** @type {?} */ (document.getElementById('viewer')));
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
                    var zoomEvent = (/** @type {?} */ ({
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
    };
    /**
     * @private
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.setZoom = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var zoomAsNumber = this.zoom;
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
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        if (PDFViewerApplication) {
            /** @type {?} */
            var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
            PDFViewerApplicationOptions.set('defaultZoomValue', zoomAsNumber);
        }
        if (PDFViewerApplication.pdfViewer) {
            PDFViewerApplication.pdfViewer.currentScaleValue = zoomAsNumber;
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onResize = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var pdfViewer = document.getElementsByClassName('html');
        if (pdfViewer && pdfViewer.length > 0) {
            /** @type {?} */
            var container = document.getElementById('outerContainer');
            if (container) {
                /** @type {?} */
                var width = container.clientWidth;
                this.toolbarWidthInPixels = width;
                if (this.secondaryToolbarComponent) {
                    this.secondaryToolbarComponent.checkVisibility();
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onContextMenu = /**
     * @return {?}
     */
    function () {
        return this.contextMenuAllowed;
    };
    /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    NgxExtendedPdfViewerComponent.prototype.onSecondaryMenuIsEmpty = /**
     * @param {?} hideKebabButton
     * @return {?}
     */
    function (hideKebabButton) {
        this.hideKebabMenuForSecondaryToolbar = hideKebabButton;
    };
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
    NgxExtendedPdfViewerComponent.ctorParameters = function () { return [
        { type: NgZone },
        { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: PDFNotificationService },
        { type: Location }
    ]; };
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
    return NgxExtendedPdfViewerComponent;
}());
export { NgxExtendedPdfViewerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULGlCQUFpQixFQUNqQixLQUFLLEVBSUwsTUFBTSxFQUNOLFlBQVksRUFDWix1QkFBdUIsRUFDdkIsWUFBWSxFQUNaLE1BQU0sRUFDTixXQUFXLEVBQ1gsTUFBTSxFQUNOLFdBQVcsRUFDWCxTQUFTLEdBRVYsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBTzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ3hFLE9BQU8sS0FBSyxNQUFNLE1BQU0sZUFBZSxDQUFDLENBQUMsT0FBTzs7QUFDaEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxTQUFTLEVBQXNDLE1BQU0sc0JBQXNCLENBQUM7QUFDckYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEQsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sdURBQXVELENBQUM7QUFDcEcsT0FBTyxFQUFpQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUQsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMkVBQTJFLENBQUM7QUFDekgsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdB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QUNwSCxpREFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgSG9zdExpc3RlbmVyLFxuICBOZ1pvbmUsXG4gIFRlbXBsYXRlUmVmLFxuICBJbmplY3QsXG4gIFBMQVRGT1JNX0lELFxuICBWaWV3Q2hpbGQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYWdlc0xvYWRlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZXMtbG9hZGVkLWV2ZW50JztcbmltcG9ydCB7IFBhZ2VSZW5kZXJlZEV2ZW50IH0gZnJvbSAnLi9ldmVudHMvcGFnZS1yZW5kZXJlZC1ldmVudCc7XG5pbXBvcnQgeyBQZGZEb3dubG9hZGVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy9wZGYtZG93bmxvYWRlZC1ldmVudCc7XG5pbXBvcnQgeyBQZGZMb2FkZWRFdmVudCB9IGZyb20gJy4vZXZlbnRzL3BkZi1sb2FkZWQtZXZlbnQnO1xuaW1wb3J0IHsgZGVmYXVsdE9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvZGVmYXVsdC1vcHRpb25zJztcbmltcG9ydCB7IFNjYWxlQ2hhbmdpbmdFdmVudCB9IGZyb20gJy4vZXZlbnRzL3NjYWxlLWNoYW5naW5nLWV2ZW50JztcbmltcG9ydCB7IFBhZ2VzUm90YXRpb25FdmVudCB9IGZyb20gJy4vZXZlbnRzL3BhZ2VzLXJvdGF0aW9uLWV2ZW50JztcbmltcG9ydCB7IEZpbGVJbnB1dENoYW5nZWQgfSBmcm9tICcuL2V2ZW50cy9maWxlLWlucHV0LWNoYW5nZWQnO1xuaW1wb3J0IHsgU2lkZWJhcnZpZXdDaGFuZ2UgfSBmcm9tICcuL2V2ZW50cy9zaWRlYmFydmlldy1jaGFuZ2VkJztcbmltcG9ydCB7IEhhbmR0b29sQ2hhbmdlZCB9IGZyb20gJy4vZXZlbnRzL2hhbmR0b29sLWNoYW5nZWQnO1xuaW1wb3J0IHsgUGFnZU51bWJlckNoYW5nZSB9IGZyb20gJy4vZXZlbnRzL3BhZ2UtbnVtYmVyLWNoYW5nZSc7XG5pbXBvcnQgeyBTZXJ2aWNlV29ya2VyT3B0aW9ucyB9IGZyb20gJy4vb3B0aW9ucy9zZXJ2aWNlLXdvcmtlci1vcHRpb25zJztcbmltcG9ydCAqIGFzIGRlYnVyciBmcm9tICdsb2Rhc2guZGVidXJyJzsgLy8gIzE3N1xuaW1wb3J0IHsgVmVyYm9zaXR5TGV2ZWwgfSBmcm9tICcuL29wdGlvbnMvdmVyYm9zaXR5LWxldmVsJztcbmltcG9ydCB7IEZpbmRTdGF0ZSwgRmluZFJlc3VsdE1hdGNoZXNDb3VudCwgRmluZFJlc3VsdCB9IGZyb20gJy4vZXZlbnRzL2ZpbmQtcmVzdWx0JztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IEFmdGVyVmlld0luaXQsIEVsZW1lbnRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBQZGZDdXJzb3JUb29scyB9IGZyb20gJy4vb3B0aW9ucy9wZGYtY3Vyc29yLXRvb2xzJztcbmltcG9ydCB7IFRleHRMYXllclJlbmRlcmVkRXZlbnQgfSBmcm9tICcuL2V2ZW50cy90ZXh0bGF5ZXItcmVuZGVyZWQnO1xuaW1wb3J0IHsgTG9jYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5pZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgKHdpbmRvdyBhcyBhbnkpLmRlYnVyciA9IGRlYnVycjsgLy8gIzE3N1xufVxuXG5pbnRlcmZhY2UgRWxlbWVudEFuZFBvc2l0aW9uIHtcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3ZpZXdlci13aXRoLWltYWdlcy0yLjIuY3NzJywgJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50LmNzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHVibGljIHN0YXRpYyBuZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgLyoqXG4gICAqIFRoZSBkdW1teSBjb21wb25lbnRzIGFyZSBpbnNlcnRlZCBhdXRvbWF0aWNhbGx5IHdoZW4gdGhlIHVzZXIgY3VzdG9taXplcyB0aGUgdG9vbGJhclxuICAgKiB3aXRob3V0IGFkZGluZyBldmVyeSBvcmlnaW5hbCB0b29sYmFyIGl0ZW0uIFdpdGhvdXQgdGhlIGR1bW15IGNvbXBvbmVudHMsIHRoZVxuICAgKiBpbml0aWFsaXphdGlvbiBjb2RlIG9mIHBkZi5qcyBjcmFzaGVzIGJlY2F1c2UgaXQgYXNzdW1lIHRoYXQgZXZlcnkgc3RhbmRhcmQgd2lkZ2V0IGlzIHRoZXJlLlxuICAgKi9cbiAgQFZpZXdDaGlsZChQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnQpXG4gIHB1YmxpYyBkdW1teUNvbXBvbmVudHM6IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudDtcblxuICBAVmlld0NoaWxkKCdyb290JylcbiAgcHVibGljIHJvb3Q6IEVsZW1lbnRSZWY7XG5cbiAgLyogVUkgdGVtcGxhdGVzICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFySW5wdXRBcmVhOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21Ub29sYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBjdXN0b21GaW5kYmFyQnV0dG9uczogVGVtcGxhdGVSZWY8YW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY3VzdG9tU2Vjb25kYXJ5VG9vbGJhcjogVGVtcGxhdGVSZWY8YW55PjtcblxuICBAVmlld0NoaWxkKCdwZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50JylcbiAgcHJpdmF0ZSBzZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50OiBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50O1xuXG4gIC8qIHJlZ3VsYXIgYXR0cmlidXRlcyAqL1xuXG4gIHByaXZhdGUgX3NyYzogc3RyaW5nIHwgQXJyYXlCdWZmZXI7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzcmNDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgY29udGV4dE1lbnVBbGxvd2VkID0gdHJ1ZTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGFmdGVyUHJpbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBiZWZvcmVQcmludCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIGN1cnJlbnRab29tRmFjdG9yID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIGVuYWJsZVByaW50ID0gdHJ1ZTtcblxuICAvKipcbiAgICogTnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB3YWl0IGJldHdlZW4gaW5pdGlhbGl6aW5nIHRoZSBQREYgdmlld2VyIGFuZCBsb2FkaW5nIHRoZSBQREYgZmlsZS5cbiAgICogTW9zdCB1c2VycyBjYW4gbGV0IHRoaXMgcGFyYW1ldGVyIHNhZmVseSBhdCBpdCdzIGRlZmF1bHQgdmFsdWUgb2YgemVyby5cbiAgICogU2V0IHRoaXMgdG8gMTAwMCBvciBoaWdoZXIgaWYgeW91IHJ1biBpbnRvIHRpbWluZyBwcm9ibGVtcyAodHlwaWNhbGx5IGNhdXNlZCBieSBsb2FkaW5nIHRoZSBsb2NhbGUgZmlsZXNcbiAgICogYWZ0ZXIgdGhlIFBERiBmaWxlcywgc28gdGhleSBhcmUgbm90IGF2YWlsYWJsZSB3aGVuIHRoZSBQREYgdmlld2VyIGlzIGluaXRpYWxpemVkKS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBkZWxheUZpcnN0VmlldyA9IDA7XG5cbiAgLyoqIHN0b3JlIHRoZSB0aW1lb3V0IGlkIHNvIGl0IGNhbiBiZSBjYW5jZWxlZCBpZiB1c2VyIGxlYXZlcyB0aGUgcGFnZSBiZWZvcmUgdGhlIFBERiBpcyBzaG93biAqL1xuICBwcml2YXRlIGluaXRUaW1lb3V0OiBhbnk7XG5cbiAgLyoqIEhvdyBtYW55IGxvZyBtZXNzYWdlcyBzaG91bGQgYmUgcHJpbnRlZD9cbiAgICogTGVnYWwgdmFsdWVzOiBWZXJib3NpdHlMZXZlbC5JTkZPUyAoPSA1KSwgVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MgKD0gMSksIFZlcmJvc2l0eUxldmVsLkVSUk9SUyAoPSAwKSAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgbG9nTGV2ZWwgPSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUztcblxuICBwdWJsaWMgcHJpbWFyeU1lbnVWaXNpYmxlID0gdHJ1ZTtcblxuICAvKiogb3B0aW9uIHRvIGluY3JlYXNlIChvciByZWR1Y2UpIHByaW50IHJlc29sdXRpb24uIERlZmF1bHQgaXMgMTUwIChkcGkpLiBTZW5zaWJsZSB2YWx1ZXNcbiAgICogYXJlIDMwMCwgNjAwLCBhbmQgMTIwMC4gTm90ZSB0aGUgaW5jcmVhc2UgbWVtb3J5IGNvbnN1bXB0aW9uLCB3aGljaCBtYXkgZXZlbiByZXN1bHQgaW4gYSBicm93c2VyIGNyYXNoLiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgcHJpbnRSZXNvbHV0aW9uID0gbnVsbDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcm90YXRpb246IDAgfCA5MCB8IDE4MCB8IDI3MDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHJvdGF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjwwIHwgOTAgfCAxODAgfCAyNzA+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBzcmModXJsOiBzdHJpbmcgfCBBcnJheUJ1ZmZlciB8IFVpbnQ4QXJyYXkpIHtcbiAgICBpZiAodXJsIGluc3RhbmNlb2YgVWludDhBcnJheSkge1xuICAgICAgdGhpcy5fc3JjID0gdXJsLmJ1ZmZlcjtcbiAgICB9IGVsc2UgaWYgKHVybCBpbnN0YW5jZW9mIEJsb2IpIHtcbiAgICAgIHRoaXMuX3NyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwodXJsKTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB0aGlzLl9zcmMgPSB1cmw7XG4gICAgICBpZiAodXJsLmxlbmd0aCA+IDk4MCkge1xuICAgICAgICAvLyBtaW5pbWFsIGxlbmd0aCBvZiBhIGJhc2U2NCBlbmNvZGVkIFBERlxuICAgICAgICBpZiAodXJsLmxlbmd0aCAlIDQgPT09IDApIHtcbiAgICAgICAgICBpZiAoL15bYS16QS1aXFxkXFwvK10rPXswLDJ9JC8udGVzdCh1cmwpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgVVJMIGxvb2tzIGxpa2UgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIElmIHNvLCBwbGVhc2UgdXNlIHRoZSBhdHRyaWJ1dGUgYmFzZTY0IGluc3RlYWQgb2Ygc3JjJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NyYyA9IHVybDtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IGJhc2U2NFNyYyhiYXNlNjQ6IHN0cmluZykge1xuICAgIGNvbnN0IGJpbmFyeV9zdHJpbmcgPSB3aW5kb3cuYXRvYihiYXNlNjQpO1xuICAgIGNvbnN0IGxlbiA9IGJpbmFyeV9zdHJpbmcubGVuZ3RoO1xuICAgIGNvbnN0IGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkobGVuKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBieXRlc1tpXSA9IGJpbmFyeV9zdHJpbmcuY2hhckNvZGVBdChpKTtcbiAgICB9XG4gICAgdGhpcy5zcmMgPSBieXRlcy5idWZmZXI7XG4gIH1cblxuICBwdWJsaWMgbWluSGVpZ2h0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHJpdmF0ZSBfaGVpZ2h0ID0gJzEwMCUnO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgaGVpZ2h0KGg6IHN0cmluZykge1xuICAgIHRoaXMubWluSGVpZ2h0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChoKSB7XG4gICAgICB0aGlzLl9oZWlnaHQgPSBoO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlaWdodCA9ICcxMDAlJztcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNoZWNrSGVpZ2h0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xuICB9XG5cbiAgLyoqXG4gICAqIElmIHRoaXMgZmxhZyBpcyB0cnVlLCB0aGlzIGNvbXBvbmVudHMgYWRkcyBhIGxpbmsgdG8gdGhlIGxvY2FsZSBhc3NldHMuIFRoZSBwZGYgdmlld2VyXG4gICAqIHNlZXMgdGhpcyBsaW5rIGFuZCB1c2VzIGl0IHRvIGxvYWQgdGhlIGxvY2FsZSBmaWxlcyBhdXRvbWF0aWNhbGx5LlxuICAgKiBAcGFyYW0gdXNlQnJvd3NlckxvY2FsZSBib29sZWFuXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgdXNlQnJvd3NlckxvY2FsZSA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBiYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZThlYic7XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGZpbGUgYWZ0ZXIgY2xpY2tpbmcgXCJkb3dubG9hZFwiICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBmaWxlbmFtZUZvckRvd25sb2FkID0gJ2RvY3VtZW50LnBkZic7XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBkaXNhYmxlIHRoZSBrZXlib2FyZCBiaW5kaW5ncyBjb21wbGV0ZWx5ICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpZ25vcmVLZXlib2FyZCA9IGZhbHNlO1xuXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZGlzYWJsZSBhIGxpc3Qgb2Yga2V5IGJpbmRpbmdzLiAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFtdO1xuXG4gIC8qKiBBbGxvd3MgdGhlIHVzZXIgdG8gZW5hYmxlIGEgbGlzdCBvZiBrZXkgYmluZGluZ3MgZXhwbGljaXRseS4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBzZXQsIGV2ZXJ5IG90aGVyIGtleSBiaW5kaW5nIGlzIGlnbm9yZWQuICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gW107XG5cbiAgLyoqIEFsbG93cyB0aGUgdXNlciB0byBwdXQgdGhlIHZpZXdlcidzIHN2ZyBpbWFnZXMgaW50byBhbiBhcmJpdHJhcnkgZm9sZGVyICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBpbWFnZVJlc291cmNlc1BhdGggPSAnLi9hc3NldHMvaW1hZ2VzLyc7XG5cbiAgLyoqIE92ZXJyaWRlIHRoZSBkZWZhdWx0IGxvY2FsZS4gVGhpcyBtdXN0IGJlIHRoZSBjb21wbGV0ZSBsb2NhbGUgbmFtZSwgc3VjaCBhcyBcImVzLUVTXCIuIFRoZSBzdHJpbmcgaXMgYWxsb3dlZCB0byBiZSBhbGwgbG93ZXJjYXNlLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIGxhbmd1YWdlOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgLyoqIEJ5IGRlZmF1bHQsIGxpc3RlbmluZyB0byB0aGUgVVJMIGlzIGRlYWN0aXZhdGVkIGJlY2F1c2Ugb2Z0ZW4gdGhlIGFuY2hvciB0YWcgaXMgdXNlZCBmb3IgdGhlIEFuZ3VsYXIgcm91dGVyICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBsaXN0ZW5Ub1VSTCA9IGZhbHNlO1xuXG4gIC8qKiBOYXZpZ2F0ZSB0byBhIGNlcnRhaW4gXCJuYW1lZCBkZXN0aW5hdGlvblwiICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBuYW1lZGRlc3Q6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICAvKiogYWxsb3dzIHlvdSB0byBwYXNzIGEgcGFzc3dvcmQgdG8gcmVhZCBwYXNzd29yZC1wcm90ZWN0ZWQgZmlsZXMgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHBhc3N3b3JkOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgcHVibGljIF9zaG93U2lkZWJhckJ1dHRvbiA9IHRydWU7XG5cbiAgcHVibGljIHZpZXdlclBvc2l0aW9uVG9wID0gJzMycHgnO1xuXG4gIC8qKiBwZGYuanMgY2FuIHNob3cgc2lnbmF0dXJlcywgYnV0IGZhaWxzIHRvIHZlcmlmeSB0aGVtLiBTbyB0aGV5IGFyZSBzd2l0Y2hlZCBvZmYgYnkgZGVmYXVsdC5cbiAgICogU2V0IFwiW3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlc11cIj1cInRydWVcIiB0byBkaXNwbGF5IGUtc2lnbmF0dXJlcyBub25ldGhlbGVzcy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc3RhcnRUYWJpbmRleDogbnVtYmVyIHwgdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBnZXQgc2hvd1NpZGViYXJCdXR0b24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uO1xuICB9XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzZXQgc2hvd1NpZGViYXJCdXR0b24oc2hvdzogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uID0gc2hvdztcbiAgICBjb25zdCBpc0lFID0gL21zaWVcXHN8dHJpZGVudFxcLy9pLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGxldCBmYWN0b3IgPSAxO1xuICAgIGlmIChpc0lFKSB7XG4gICAgICBmYWN0b3IgPSBOdW1iZXIoKHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbSB8fCAnMTAwJykucmVwbGFjZSgnJScsICcnKSkgLyAxMDA7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Nob3dTaWRlYmFyQnV0dG9uKSB7XG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gKDY4ICogZmFjdG9yKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maW5kYmFyTGVmdCA9ICcwcHgnO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBJZiBbc2hvd1NpZGVCYXJCdXR0b25dPVwidHJ1ZVwiLCBkbyB5b3Ugd2FudCB0aGUgc2lkZWJhciB0byBiZSBzaG93biBieSBkZWZhdWx0IChbc2hvd1NpZGViYXJPbkxvYWRdKT1cInRydWVcIilcbiAgICogb3Igbm90PyBCeSBkZWZhdWx0LCB0aGlzIGZsYWcgaXMgdW5kZWZpbmVkLCB0ZWxsaW5nIHRoZSBQREYgdmlld2VyIHRvIHVzZSB0aGUgbGFzdCBzZXR0aW5nIHVzZWQgd2l0aCB0aGlzIHBhcnRpY3VsYXJcbiAgICogZG9jdW1lbnQsIG9yIHRvIGhpZGUgdGhlIHNpZGViYXIgaWYgdGhlIGRvY3VtZW50IGlzIG9wZW5lZCBmb3IgdGhlIGZpcnN0IHRpbWUuXG4gICAqIEBkZXByZWNhdGVkIFVzZSBzaG93U2lkZWJhciBpbnN0ZWFkOyBkcmVwcmVjYXRlZCBzaW5jZSAxLjguMDsgdG8gYmUgcmVtb3ZlZCB3aXRoIDIuMC4wXG4gICAqL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NpZGViYXJPbkxvYWQ6IGJvb2xlYW4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNpZGViYXJWaXNpYmxlOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgc2lkZWJhclZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dGaW5kQnV0dG9uOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1BhZ2luZ0J1dHRvbnMgPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1pvb21CdXR0b25zID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uID0gZmFsc2U7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93T3BlbkZpbGVCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1ByaW50QnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dEb3dubG9hZEJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiA9IHRydWU7XG5cbiAgLyoqIFNldCBieSB0aGUgZXZlbnQgKHNlY29uZGFyeU1lbnVJc0VtcHR5KSAqL1xuICBwdWJsaWMgaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1JvdGF0ZUJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBoYW5kVG9vbCA9IHRydWU7XG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgaGFuZFRvb2xDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93SGFuZFRvb2xCdXR0b24gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTY3JvbGxpbmdCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd1NwcmVhZEJ1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UHJvcGVydGllc0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9yZGVycyA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCc7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBzcHJlYWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPCdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCc+KCk7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHBhZ2U6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlciB8IHVuZGVmaW5lZD4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgcGFnZUxhYmVsOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwYWdlTGFiZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IHVuZGVmaW5lZD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBhZ2VzTG9hZGVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlc0xvYWRlZEV2ZW50PigpO1xuXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgcGFnZVJlbmRlcmVkID0gbmV3IEV2ZW50RW1pdHRlcjxQYWdlUmVuZGVyZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBkZkRvd25sb2FkZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFBkZkRvd25sb2FkZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHBkZkxvYWRlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGRmTG9hZGVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyBwZGZMb2FkaW5nRmFpbGVkID0gbmV3IEV2ZW50RW1pdHRlcjxFcnJvcj4oKTtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgdGV4dExheWVyOiBib29sZWFuIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8qKiBkZXByZWNhdGVkICovXG4gIEBPdXRwdXQoKVxuICBwdWJsaWMgdGV4dGxheWVyUmVuZGVyZWQgPSBuZXcgRXZlbnRFbWl0dGVyPFRleHRMYXllclJlbmRlcmVkRXZlbnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB0ZXh0TGF5ZXJSZW5kZXJlZCA9IG5ldyBFdmVudEVtaXR0ZXI8VGV4dExheWVyUmVuZGVyZWRFdmVudD4oKTtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHVwZGF0ZUZpbmRNYXRjaGVzQ291bnQgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRSZXN1bHRNYXRjaGVzQ291bnQ+KCk7XG5cbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB1cGRhdGVGaW5kU3RhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEZpbmRTdGF0ZT4oKTtcblxuICAvKiogTGVnYWwgdmFsdWVzOiB1bmRlZmluZWQsICdhdXRvJywgJ3BhZ2UtYWN0dWFsJywgJ3BhZ2VfZml0JywgJ3BhZ2Utd2lkdGgnLCBvciAnNTAnIChvciBhbnkgb3RoZXIgcGVyY2VudGFnZSkgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHpvb206IHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBAT3V0cHV0KClcbiAgcHVibGljIHpvb21DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZyB8IG51bWJlciB8IHVuZGVmaW5lZD4oKTtcblxuICAvKiogVGhpcyBhdHRyaWJ1dGVzIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS5cbiAgICovXG4gIEBJbnB1dCgpIF9tb2JpbGVGcmllbmRseVpvb20gPSAnMTAwJSc7XG5cbiAgcHVibGljIG1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gMTtcblxuICBwdWJsaWMgdG9vbGJhclBhZGRpbmdUb3AgPSAnMHB4JztcblxuICBwdWJsaWMgdG9vbGJhcldpZHRoID0gJzEwMCUnO1xuXG4gIHB1YmxpYyB0b29sYmFyV2lkdGhJblBpeGVscyA9IDEwMDtcblxuICBwdWJsaWMgc2Vjb25kYXJ5VG9vbGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxuICBwdWJsaWMgZmluZGJhclRvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIC8vIGRpcnR5IElFMTEgaGFjayAtIHRlbXBvcmFyeSBzb2x1dGlvblxuICBwdWJsaWMgZmluZGJhckxlZnQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcblxuICBwdWJsaWMgZ2V0IG1vYmlsZUZyaWVuZGx5Wm9vbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbW9iaWxlRnJpZW5kbHlab29tO1xuICB9XG4gIC8qKlxuICAgKiBUaGlzIGF0dHJpYnV0ZXMgYWxsb3dzIHlvdSB0byBpbmNyZWFzZSB0aGUgc2l6ZSBvZiB0aGUgVUkgZWxlbWVudHMgc28geW91IGNhbiB1c2UgdGhlbSBvbiBzbWFsbCBtb2JpbGUgZGV2aWNlcy5cbiAgICogVGhpcyBhdHRyaWJ1dGUgaXMgYSBzdHJpbmcgd2l0aCBhIHBlcmNlbnQgY2hhcmFjdGVyIGF0IHRoZSBlbmQgKGUuZy4gXCIxNTAlXCIpLlxuICAgKi9cbiAgQElucHV0KClcbiAgcHVibGljIHNldCBtb2JpbGVGcmllbmRseVpvb20oem9vbTogc3RyaW5nKSB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXG4gICAgaWYgKHpvb20gPT0gJ3RydWUnKSB7XG4gICAgICB6b29tID0gJzE1MCUnO1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnRyaXBsZS1lcXVhbHMgLSB0aGUgdHlwZSBjb252ZXJzaW9uIGlzIGludGVuZGVkXG4gICAgfSBlbHNlIGlmICh6b29tID09ICdmYWxzZScgfHwgem9vbSA9PT0gdW5kZWZpbmVkIHx8IHpvb20gPT09IG51bGwpIHtcbiAgICAgIHpvb20gPSAnMTAwJSc7XG4gICAgfVxuICAgIHRoaXMuX21vYmlsZUZyaWVuZGx5Wm9vbSA9IHpvb207XG4gICAgbGV0IGZhY3RvciA9IDE7XG4gICAgaWYgKCFTdHJpbmcoem9vbSkuaW5jbHVkZXMoJyUnKSkge1xuICAgICAgem9vbSA9IDEwMCAqIE51bWJlcih6b29tKSArICclJztcbiAgICB9XG4gICAgZmFjdG9yID0gTnVtYmVyKCh6b29tIHx8ICcxMDAnKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbVNjYWxlID0gZmFjdG9yO1xuICAgIHRoaXMudG9vbGJhcldpZHRoID0gKDEwMCAvIGZhY3RvcikudG9TdHJpbmcoKSArICclJztcbiAgICB0aGlzLnRvb2xiYXJQYWRkaW5nVG9wID0gKGZhY3RvciAtIDEpICogOCArICdweCc7XG4gICAgaWYgKHRoaXMuc2hvd1NpZGViYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuZmluZGJhckxlZnQgPSAoNjggKiBmYWN0b3IpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbmRiYXJMZWZ0ID0gJzBweCc7XG4gICAgfVxuICAgIHRoaXMuc2Vjb25kYXJ5VG9vbGJhclRvcCA9ICgzNiArIDM2ICogKGZhY3RvciAtIDEpKS50b1N0cmluZygpICsgJ3B4JztcbiAgICB0aGlzLmZpbmRiYXJUb3AgPSAoMzYgKyAxMTYgKiAoZmFjdG9yIC0gMSkpLnRvU3RyaW5nKCkgKyAncHgnO1xuICB9XG5cbiAgLyoqIERlcHJlY2F0ZWQuIFBsZWFzZSB1c2UgW21vYmlsZUZyaWVuZGx5Wm9vbV0gaW5zdGVhZC5cbiAgICogVGhpcyBhdHRyaWJ1dGVzIGFsbG93cyB5b3UgdG8gaW5jcmVhc2UgdGhlIHNpemUgb2YgdGhlIFVJIGVsZW1lbnRzIHNvIHlvdSBjYW4gdXNlIHRoZW0gb24gc21hbGwgbW9iaWxlIGRldmljZXMuXG4gICAqIFRoaXMgYXR0cmlidXRlIGlzIGEgc3RyaW5nIHdpdGggYSBwZXJjZW50IGNoYXJhY3RlciBhdCB0aGUgZW5kIChlLmcuIFwiMTUwJVwiKS4qL1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2V0IG1vYmlsZVpvb20obW9iaWxlRnJpZW5kbHlab29tOiBzdHJpbmcpIHtcbiAgICB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbSA9IG1vYmlsZUZyaWVuZGx5Wm9vbTtcbiAgfVxuXG4gIHByaXZhdGUgX3RvcDogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xuXG4gIHB1YmxpYyBnZXQgc2lkZWJhclBvc2l0aW9uVG9wKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMuX3RvcCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3RvcDtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tKSB7XG4gICAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20uZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICBjb25zdCB6b29tID0gTnVtYmVyKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLnN1YnN0cmluZygwLCB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5sZW5ndGggLSAxKSk7XG4gICAgICAgIHJldHVybiAoMiArIDAuMjkgKiB6b29tKS50b1N0cmluZygpICsgJ3B4JztcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2JpbGVGcmllbmRseVpvb207XG4gICAgICB9XG4gICAgICByZXR1cm4gKDE2ICsgMC4xNiAqIE51bWJlcih0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbSkpLnRvU3RyaW5nKCkgKyAncHgnO1xuICAgIH1cbiAgICByZXR1cm4gJzMycHgnO1xuICB9XG4gIHB1YmxpYyBjYWxjVmlld2VyUG9zaXRpb25Ub3AoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3RvcCkge1xuICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9IHRoaXMuX3RvcDtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tKSB7XG4gICAgICBpZiAodGhpcy5tb2JpbGVGcmllbmRseVpvb20uZW5kc1dpdGgoJyUnKSkge1xuICAgICAgICBjb25zdCB6b29tID0gTnVtYmVyKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLnN1YnN0cmluZygwLCB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbS5sZW5ndGggLSAxKSk7XG4gICAgICAgIGlmICghdGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICAgICAgdGhpcy52aWV3ZXJQb3NpdGlvblRvcCA9ICcwJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gKDEgKyAwLjMyICogem9vbSkudG9TdHJpbmcoKSArICdweCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMubW9iaWxlRnJpZW5kbHlab29tLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICAgIHRoaXMudmlld2VyUG9zaXRpb25Ub3AgPSB0aGlzLm1vYmlsZUZyaWVuZGx5Wm9vbTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc1ByaW1hcnlNZW51VmlzaWJsZSgpKSB7XG4gICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gJzMycHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdlclBvc2l0aW9uVG9wID0gJzAnO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZCwgcHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIGxvY2F0aW9uOiBMb2NhdGlvbikge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICBpZiAoIXdpbmRvd1sncGRmanMtZGlzdC9idWlsZC9wZGYnXSkge1xuICAgICAgICBjb25zdCBpc0lFID0gISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcbiAgICAgICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcblxuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnNyYyA9IHRoaXMubG9jYXRpb24ubm9ybWFsaXplKGlzSUUgfHwgaXNFZGdlID8gJ2Fzc2V0cy9wZGYtZXM1LmpzJyA6ICdhc3NldHMvcGRmLmpzJyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5hc3luYyA9IHRydWU7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgIH1cbiAgICAgIGlmICghKHdpbmRvdyBhcyBhbnkpLndlYlZpZXdlckxvYWQpIHtcbiAgICAgICAgdGhpcy5sb2FkVmlld2VyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBsb2FkVmlld2VyKCk6IHZvaWQge1xuICAgIGlmICghd2luZG93WydwZGZqcy1kaXN0L2J1aWxkL3BkZiddKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMubG9hZFZpZXdlcigpLCAyNSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGlzSUUgPSAhISg8YW55PndpbmRvdykuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISEoPGFueT5kb2N1bWVudCkuZG9jdW1lbnRNb2RlO1xuICAgICAgY29uc3QgaXNFZGdlID0gL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgICAgIGNvbnN0IHNjcmlwdDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgIHNjcmlwdDIuc3JjID0gdGhpcy5sb2NhdGlvbi5ub3JtYWxpemUoaXNJRSB8fCBpc0VkZ2UgPyAnYXNzZXRzL3ZpZXdlci1lczUuanMnIDogJ2Fzc2V0cy92aWV3ZXIuanMnKTtcbiAgICAgIHNjcmlwdDIudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgc2NyaXB0Mi5hc3luYyA9IHRydWU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHNjcmlwdDIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBlbWl0Wm9vbUNoYW5nZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy56b29tQ2hhbmdlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGlmICgod2luZG93IGFzIGFueSkud2ViVmlld2VyTG9hZCkge1xuICAgICAgdGhpcy5kb0luaXRQREZWaWV3ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLm5nQWZ0ZXJWaWV3SW5pdCgpLCA1MCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3NpZ25UYWJpbmRleGVzKCkge1xuICAgIGlmICh0aGlzLnN0YXJ0VGFiaW5kZXgpIHtcbiAgICAgIGNvbnN0IHIgPSB0aGlzLnJvb3QubmF0aXZlRWxlbWVudC5jbG9uZU5vZGUodHJ1ZSkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICByLmNsYXNzTGlzdC5hZGQoJ29mZnNjcmVlbicpO1xuICAgICAgdGhpcy5zaG93RWxlbWVudHNSZWN1cnNpdmVseShyKTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocik7XG4gICAgICBjb25zdCBlbGVtZW50cyA9IHRoaXMuY29sbGVjdEVsZW1lbnRQb3NpdGlvbnMociwgdGhpcy5yb290Lm5hdGl2ZUVsZW1lbnQsIFtdKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocik7XG4gICAgICBjb25zdCBzb3J0ZWQgPSBlbGVtZW50cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgIGlmIChhLnkgLSBiLnkgPiAxNSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiLnkgLSBhLnkgPiAxNSkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYS54IC0gYi54O1xuICAgICAgfSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICBzb3J0ZWRbaV0uZWxlbWVudC50YWJJbmRleCA9IHRoaXMuc3RhcnRUYWJpbmRleCArIGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzaG93RWxlbWVudHNSZWN1cnNpdmVseShyb290OiBFbGVtZW50KTogdm9pZCB7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWFhMVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW5MYXJnZVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbk1lZGl1bVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlblNtYWxsVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuVGlueVZpZXcnKTtcbiAgICByb290LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGVYWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlWExWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTGFyZ2VWaWV3Jyk7XG4gICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlTWVkaXVtVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVNtYWxsVmlldycpO1xuICAgIHJvb3QuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZVRpbnlWaWV3Jyk7XG5cbiAgICBpZiAocm9vdCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50IHx8IHJvb3QgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudCB8fCByb290IGluc3RhbmNlb2YgSFRNTFNlbGVjdEVsZW1lbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2UgaWYgKHJvb3QuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvb3QuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBjID0gcm9vdC5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBpZiAoYykge1xuICAgICAgICAgIHRoaXMuc2hvd0VsZW1lbnRzUmVjdXJzaXZlbHkoYyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNvbGxlY3RFbGVtZW50UG9zaXRpb25zKGNvcHk6IEVsZW1lbnQsIG9yaWdpbmFsOiBFbGVtZW50LCBlbGVtZW50czogQXJyYXk8RWxlbWVudEFuZFBvc2l0aW9uPik6IEFycmF5PEVsZW1lbnRBbmRQb3NpdGlvbj4ge1xuICAgIGlmIChjb3B5IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQgfHwgY29weSBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50IHx8IGNvcHkgaW5zdGFuY2VvZiBIVE1MU2VsZWN0RWxlbWVudCkge1xuICAgICAgY29uc3QgcmVjdCA9IGNvcHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBlbGVtZW50QW5kUG9zID0ge1xuICAgICAgICBlbGVtZW50OiBvcmlnaW5hbCxcbiAgICAgICAgeDogTWF0aC5yb3VuZChyZWN0LmxlZnQpLFxuICAgICAgICB5OiBNYXRoLnJvdW5kKHJlY3QudG9wKSxcbiAgICAgIH0gYXMgRWxlbWVudEFuZFBvc2l0aW9uO1xuICAgICAgZWxlbWVudHMucHVzaChlbGVtZW50QW5kUG9zKTtcbiAgICB9IGVsc2UgaWYgKGNvcHkuY2hpbGRFbGVtZW50Q291bnQgPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvcHkuY2hpbGRFbGVtZW50Q291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBjID0gY29weS5jaGlsZHJlbi5pdGVtKGkpO1xuICAgICAgICBjb25zdCBvID0gb3JpZ2luYWwuY2hpbGRyZW4uaXRlbShpKTtcbiAgICAgICAgaWYgKGMgJiYgbykge1xuICAgICAgICAgIGVsZW1lbnRzID0gdGhpcy5jb2xsZWN0RWxlbWVudFBvc2l0aW9ucyhjLCBvLCBlbGVtZW50cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGVsZW1lbnRzO1xuICB9XG5cbiAgcHJpdmF0ZSBkb0luaXRQREZWaWV3ZXIoKSB7XG4gICAgY29uc3QgbGFuZ0xpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGlua1t0eXBlPVwiYXBwbGljYXRpb24vbDEwblwiXScpO1xuICAgIGNvbnN0IGxhbmdDb3VudCA9IGxhbmdMaW5rcy5sZW5ndGg7XG5cbiAgICBpZiAobGFuZ0NvdW50ID09PSAwKSB7XG4gICAgICBjb25zdCBkaWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9sMTBuXCJdJyk7XG4gICAgICBpZiAoIWRpY3QpIHtcbiAgICAgICAgaWYgKCF0aGlzLnVzZUJyb3dzZXJMb2NhbGUpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgICAgICAgXCJJZiB5b3Ugc2V0IHRoZSBhdHRyaWJ1dGUgJ3VzZUJyb3dzZXJMb2NhbGUnIHRvIGZhbHNlLCB5b3UgbXVzdCBwcm92aWRlIHRoZSB0cmFuc2xhdGlvbnMgeW91cnNlbGYgaW4gYSBzY3JpcHQgb3IgbGluayB0YWcuXCJcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1RoZSBlYXNpZXN0IHdheSB0byBkbyB0aGlzIGlzIHRvIGFkZCB0aGVtIHRvIHRoZSBpbmRleC5odG1sLicpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudXNlQnJvd3NlckxvY2FsZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgICAgICBcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy51c2VCcm93c2VyTG9jYWxlKSB7XG4gICAgICBjb25zdCBvID0gbGFuZ0xpbmtzWzBdLmF0dHJpYnV0ZXNbJ29yaWdpbiddO1xuICAgICAgaWYgKG8gJiYgby52YWx1ZSAhPT0gJ25neC1leHRlbmRlZC1wZGYtdmlld2VyJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgICAgICBcIlBsZWFzZSBzZXQgdGhlIGF0dHJpYnV0ZSAndXNlQnJvd3NlckxvY2FsZScgdG8gZmFsc2UgaWYgeW91IHByb3ZpZGUgdGhlIHRyYW5zbGF0aW9ucyB5b3Vyc2VsZiBpbiBhIHNjcmlwdCBvciBsaW5rIHRhZy5cIlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBjYWxsYmFjayA9IChlKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2NhbGl6ZWQnLCBjYWxsYmFjayk7XG4gICAgICB0aGlzLmluaXRUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuYWZ0ZXJMaWJyYXJ5SW5pdCgpO1xuICAgICAgICB0aGlzLm9wZW5QREYoKTtcbiAgICAgICAgdGhpcy5hc3NpZ25UYWJpbmRleGVzKCk7XG4gICAgICB9LCB0aGlzLmRlbGF5Rmlyc3RWaWV3KTtcbiAgICB9O1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2FmdGVycHJpbnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYWZ0ZXJQcmludC5lbWl0KCk7XG4gICAgfSk7XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JlcHJpbnQnLCAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMuYmVmb3JlUHJpbnQuZW1pdCgpO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbG9jYWxpemVkJywgY2FsbGJhY2spO1xuXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJZb3UncmUgdHJ5aW5nIHRvIG9wZW4gdHdvIGluc3RhbmNlcyBvZiB0aGUgUERGIHZpZXdlci4gTW9zdCBsaWtlbHksIHRoaXMgd2lsbCByZXN1bHQgaW4gZXJyb3JzLlwiKTtcbiAgICB9XG4gICAgY29uc3Qgb25Mb2FkZWQgPSAoKSA9PiB7XG4gICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd3ZWJ2aWV3ZXJsb2FkZWQnLCBvbkxvYWRlZCk7XG5cbiAgICB0aGlzLmFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3NhcnkobnVsbCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIFRoaXMgaW5pdGlhbGl6ZXMgdGhlIHdlYnZpZXdlciwgdGhlIGZpbGUgbWF5IGJlIHBhc3NlZCBpbiB0byBpdCB0byBpbml0aWFsaXplIHRoZSB2aWV3ZXIgd2l0aCBhIHBkZiBkaXJlY3RseVxuICAgICAgdGhpcy5wcmltYXJ5TWVudVZpc2libGUgPSB0cnVlO1xuICAgICAgY29uc3Qgc2hvd1NlY29uZGFyeU1lbnUgPSB0aGlzLmhpZGVLZWJhYk1lbnVGb3JTZWNvbmRhcnlUb29sYmFyICYmIHRoaXMuc2hvd1NlY29uZGFyeVRvb2xiYXJCdXR0b247XG5cbiAgICAgIGlmIChzaG93U2Vjb25kYXJ5TWVudSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xuICAgICAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XG4gICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XG4gICAgICAoPGFueT53aW5kb3cpLndlYlZpZXdlckxvYWQoKTtcblxuICAgICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5kZWZhdWx0VXJsID0gJyc7IC8vIElFIGJ1Z2ZpeFxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnLmZpbGVuYW1lRm9yRG93bmxvYWQgPSB0aGlzLmZpbGVuYW1lRm9yRG93bmxvYWQ7XG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdsb2NhbGUnLCB0aGlzLmxhbmd1YWdlKTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5zZXQoJ2ltYWdlUmVzb3VyY2VzUGF0aCcsIHRoaXMuaW1hZ2VSZXNvdXJjZXNQYXRoKTtcblxuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uaXNWaWV3ZXJFbWJlZGRlZCA9IHRydWU7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24ucHJpbnRLZXlEb3duTGlzdGVuZXIpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW50Q29udGFpbmVyJyk7XG4gICAgICBpZiAocGMpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5hcHBlbmRDaGlsZChwYyk7XG4gICAgICB9XG4gICAgfSwgMCk7XG4gIH1cblxuICAvKiogTm90aWZpZXMgZXZlcnkgd2lkZ2V0IHRoYXQgaW1wbGVtZW50cyBvbkxpYnJhcnlJbml0KCkgdGhhdCB0aGUgUERGIHZpZXdlciBvYmplY3RzIGFyZSBhdmFpbGFibGUgKi9cbiAgcHJpdmF0ZSBhZnRlckxpYnJhcnlJbml0KCkge1xuICAgIHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5uZXh0KCk7XG4gIH1cblxuICBwdWJsaWMgY2hlY2tIZWlnaHQoKTogdm9pZCB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnem9vbScpWzBdO1xuICAgIGlmIChjb250YWluZXIuY2xpZW50SGVpZ2h0ID09PSAwICYmIHRoaXMuX2hlaWdodC5pbmNsdWRlcygnJScpKSB7XG4gICAgICBjb25zdCBhdmFpbGFibGUgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICBjb25zdCByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgY29uc3QgdG9wID0gcmVjdC50b3A7XG4gICAgICBsZXQgbWggPSBhdmFpbGFibGUgLSB0b3A7XG4gICAgICBjb25zdCBmYWN0b3IgPSBOdW1iZXIodGhpcy5faGVpZ2h0LnJlcGxhY2UoJyUnLCAnJykpO1xuICAgICAgbWggPSAobWggKiBmYWN0b3IpIC8gMTAwO1xuICAgICAgaWYgKG1oID4gMTAwKSB7XG4gICAgICAgIHRoaXMubWluSGVpZ2h0ID0gbWggKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5taW5IZWlnaHQgPSAnMTAwcHgnO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblNwcmVhZENoYW5nZShuZXdTcHJlYWQ6ICdvZmYnIHwgJ2V2ZW4nIHwgJ29kZCcpOiB2b2lkIHtcbiAgICB0aGlzLnNwcmVhZENoYW5nZS5lbWl0KG5ld1NwcmVhZCk7XG4gIH1cblxuICBwcml2YXRlIGFjdGl2YXRlVGV4dGxheWVySWZOZWNlc3Nhcnkob3B0aW9uczogYW55KTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGV4dExheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmICghdGhpcy5oYW5kVG9vbCkge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50ZXh0TGF5ZXIgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5zaG93RmluZEJ1dHRvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyB0b2RvIHJlbW92ZSB0aGlzIGhhY2s6XG4gICAgICAgICAgICBjb25zdCB2aWV3RmluZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3RmluZCcpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKHZpZXdGaW5kKSB7XG4gICAgICAgICAgICAgIHZpZXdGaW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZmluZGJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kYmFyJykgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgICAgICBpZiAoZmluZGJhcikge1xuICAgICAgICAgICAgICBmaW5kYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmlzaWJsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICAgIG9wdGlvbnMuc2V0KCd0ZXh0TGF5ZXJNb2RlJywgdGhpcy5zaG93SGFuZFRvb2xCdXR0b24gPyAxIDogMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbikge1xuICAgICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uIHx8IHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5zaG93RmluZEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiZmluZFwiIGJ1dHRvbiBiZWNhdXNlIHRoZSB0ZXh0IGxheWVyIG9mIHRoZSBQREYgZmlsZSBpcyBub3QgcmVuZGVyZWQuIFVzZSBbdGV4dExheWVyXT1cInRydWVcIiB0byBlbmFibGUgdGhlIGZpbmQgYnV0dG9uLidcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB0aGlzLnNob3dIYW5kVG9vbEJ1dHRvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy50ZXh0TGF5ZXIpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dExheWVyID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuc2hvd0ZpbmRCdXR0b24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgLy8gdG9kbyByZW1vdmUgdGhpcyBoYWNrOlxuICAgICAgICAgICAgY29uc3Qgdmlld0ZpbmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndmlld0ZpbmQnKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgICAgICAgIGlmICh2aWV3RmluZCkge1xuICAgICAgICAgICAgICB2aWV3RmluZC5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZpbmRiYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZGJhcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgICAgaWYgKGZpbmRiYXIpIHtcbiAgICAgICAgICAgICAgZmluZGJhci5jbGFzc0xpc3QucmVtb3ZlKCdpbnZpc2libGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICBvcHRpb25zLnNldCgndGV4dExheWVyTW9kZScsIDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGV4dExheWVyID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLnNob3dGaW5kQnV0dG9uKSB7XG4gICAgICAgICAgaWYgKHRoaXMubG9nTGV2ZWwgPj0gVmVyYm9zaXR5TGV2ZWwuV0FSTklOR1MpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignSGlkaW5nIHRoZSBcImZpbmRcIiBidXR0b24gYmVjYXVzZSB0aGUgdGV4dCBsYXllciBvZiB0aGUgUERGIGZpbGUgaXMgbm90IHJlbmRlcmVkLiBVc2UgW3RleHRMYXllcl09XCJ0cnVlXCIgdG8gZW5hYmxlIHRoZSBmaW5kIGJ1dHRvbi4nKTtcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zaG93SGFuZFRvb2xCdXR0b24pIHtcbiAgICAgICAgICBpZiAodGhpcy5sb2dMZXZlbCA+PSBWZXJib3NpdHlMZXZlbC5XQVJOSU5HUykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgICAgICAgICdIaWRpbmcgdGhlIFwiaGFuZCB0b29sIC8gc2VsZWN0aW9uIG1vZGVcIiBtZW51IGJlY2F1c2UgdGhlIHRleHQgbGF5ZXIgb2YgdGhlIFBERiBmaWxlIGlzIG5vdCByZW5kZXJlZC4gVXNlIFt0ZXh0TGF5ZXJdPVwidHJ1ZVwiIHRvIGVuYWJsZSB0aGUgdGhlIG1lbnUgaXRlbXMuJ1xuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0hhbmRUb29sQnV0dG9uID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZURlZmF1bHRTZXR0aW5ncygpIHtcbiAgICBjb25zdCBvcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyBhcyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRlZmF1bHRPcHRpb25zKSB7XG4gICAgICBvcHRpb25zLnNldChrZXksIGRlZmF1bHRPcHRpb25zW2tleV0pO1xuICAgIH1cbiAgICBvcHRpb25zLnNldCgnZGlzYWJsZVByZWZlcmVuY2VzJywgdHJ1ZSk7XG4gICAgdGhpcy5zZXRab29tKCk7XG5cbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5Ym9hcmQnLCB0aGlzLmlnbm9yZUtleWJvYXJkKTtcbiAgICBvcHRpb25zLnNldCgnaWdub3JlS2V5cycsIHRoaXMuaWdub3JlS2V5cyk7XG4gICAgb3B0aW9ucy5zZXQoJ2FjY2VwdEtleXMnLCB0aGlzLmFjY2VwdEtleXMpO1xuICAgIHRoaXMuYWN0aXZhdGVUZXh0bGF5ZXJJZk5lY2Vzc2FyeShvcHRpb25zKTtcblxuICAgIGxldCBzaWRlYmFyVmlzaWJsZSA9IHRoaXMuc2lkZWJhclZpc2libGU7XG4gICAgaWYgKHNpZGViYXJWaXNpYmxlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHNpZGViYXJWaXNpYmxlID0gdGhpcy5zaG93U2lkZWJhck9uTG9hZDtcbiAgICB9XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcblxuICAgIGlmIChzaWRlYmFyVmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uYXBwQ29uZmlnKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmFwcENvbmZpZy5zaWRlYmFyVmlld09uTG9hZCA9IHNpZGViYXJWaXNpYmxlID8gMSA6IDA7XG4gICAgICB9XG4gICAgICBvcHRpb25zLnNldCgnc2lkZWJhclZpZXdPbkxvYWQnLCB0aGlzLnNpZGViYXJWaXNpYmxlID8gMSA6IDApO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcHJlYWQgPT09ICdldmVuJykge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAyKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnZXZlbicpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zcHJlYWQgPT09ICdvZGQnKSB7XG4gICAgICBvcHRpb25zLnNldCgnc3ByZWFkTW9kZU9uTG9hZCcsIDEpO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLm9uU3ByZWFkQ2hhbmdlKCdvZGQnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3B0aW9ucy5zZXQoJ3NwcmVhZE1vZGVPbkxvYWQnLCAwKTtcbiAgICAgIGlmIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xuICAgICAgfVxuICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2ZmJyk7XG4gICAgfVxuICAgIGlmICh0aGlzLnByaW50UmVzb2x1dGlvbikge1xuICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2hvd0JvcmRlcnMpIHtcbiAgICAgIG9wdGlvbnMuc2V0KCdzaG93Qm9yZGVycycsIHRoaXMuc2hvd0JvcmRlcnMpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb3BlblBERigpIHtcbiAgICBTZXJ2aWNlV29ya2VyT3B0aW9ucy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMgPSB0aGlzLnNob3dVbnZlcmlmaWVkU2lnbmF0dXJlcztcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmVuYWJsZVByaW50ID0gdGhpcy5lbmFibGVQcmludDtcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgaWYgKCF0aGlzLmxpc3RlblRvVVJMKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZMaW5rU2VydmljZS5zZXRIYXNoID0gZnVuY3Rpb24gKCkge307XG4gICAgfVxuICAgIHRoaXMuaW5pdFRpbWVvdXQgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0Q3Vyc29yVG9vbCgpO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3RleHRsYXllcnJlbmRlcmVkJywgKHg6IFRleHRMYXllclJlbmRlcmVkRXZlbnQpID0+IHtcbiAgICAgIHRoaXMudGV4dGxheWVyUmVuZGVyZWQuZW1pdCh4KTsgLy8gZGVwcmVjYXRlZCAtIGtlcHQgdG8gYXZvaWQgYSBicmVha2luZyBjaGFuZ2VcbiAgICAgIHRoaXMudGV4dExheWVyUmVuZGVyZWQuZW1pdCh4KTtcbiAgICB9KTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlc2xvYWRlZCcsICh4OiBQYWdlc0xvYWRlZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLnBhZ2VzTG9hZGVkLmVtaXQoeCk7XG4gICAgICBpZiAodGhpcy5yb3RhdGlvbikge1xuICAgICAgICBjb25zdCByID0gTnVtYmVyKHRoaXMucm90YXRpb24pO1xuICAgICAgICBpZiAociA9PT0gMCB8fCByID09PSA5MCB8fCByID09PSAxODAgfHwgciA9PT0gMjcwKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IDA7XG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMubmFtZWRkZXN0KSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmTGlua1NlcnZpY2UubmF2aWdhdGVUbyh0aGlzLm5hbWVkZGVzdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wYWdlKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGFnZSA9IE51bWJlcih0aGlzLnBhZ2UpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGFnZUxhYmVsKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRQYWdlTGFiZWwgPSB0aGlzLnBhZ2VMYWJlbDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLnNldFpvb20oKTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbigncGFnZXJlbmRlcmVkJywgKHg6IFBhZ2VSZW5kZXJlZEV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnBhZ2VSZW5kZXJlZC5lbWl0KHgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2Rvd25sb2FkJywgKHg6IFBkZkRvd25sb2FkZWRFdmVudCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5wZGZEb3dubG9hZGVkLmVtaXQoeCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc2NhbGVjaGFuZ2luZycsICh4OiBTY2FsZUNoYW5naW5nRXZlbnQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRab29tRmFjdG9yLmVtaXQoeC5zY2FsZSk7XG4gICAgICAgICAgICBpZiAodGhpcy56b29tICE9PSAnYXV0bycgJiYgdGhpcy56b29tICE9PSAncGFnZS1maXQnICYmIHRoaXMuem9vbSAhPT0gJ3BhZ2UtYWN0dWFsJyAmJiB0aGlzLnpvb20gIT09ICdwYWdlLXdpZHRoJykge1xuICAgICAgICAgICAgICB0aGlzLmVtaXRab29tQ2hhbmdlKHguc2NhbGUgKiAxMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3JvdGF0aW9uY2hhbmdpbmcnLCAoeDogUGFnZXNSb3RhdGlvbkV2ZW50KSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnJvdGF0aW9uQ2hhbmdlLmVtaXQoeC5wYWdlc1JvdGF0aW9uKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdmaWxlaW5wdXRjaGFuZ2UnLCAoeDogRmlsZUlucHV0Q2hhbmdlZCkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgcGF0aCA9IHguZmlsZUlucHV0LnZhbHVlLnJlcGxhY2UoJ0M6XFxcXGZha2VwYXRoXFxcXCcsICcnKTtcbiAgICAgICAgdGhpcy5zcmNDaGFuZ2UuZW1pdChwYXRoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdjdXJzb3J0b29sY2hhbmdlZCcsICh4OiBIYW5kdG9vbENoYW5nZWQpID0+IHtcbiAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICAgIHRoaXMuaGFuZFRvb2xDaGFuZ2UuZW1pdCh4LnRvb2wgPT09IFBkZkN1cnNvclRvb2xzLkhBTkQpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignc2lkZWJhcnZpZXdjaGFuZ2VkJywgKHg6IFNpZGViYXJ2aWV3Q2hhbmdlKSA9PiB7XG4gICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICB0aGlzLnNpZGViYXJWaXNpYmxlQ2hhbmdlLmVtaXQoeC52aWV3ID09PSAxKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRjb250cm9sc3RhdGUnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudCkge1xuICAgICAgICBpZiAoeC5zdGF0ZSA9PT0gRmluZFN0YXRlLk5PVF9GT1VORCkge1xuICAgICAgICAgIHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudC5lbWl0KHsgY3VycmVudDogMCwgdG90YWw6IDAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoeC5tYXRjaGVzQ291bnQudG90YWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh4Lm1hdGNoZXNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudXBkYXRlRmluZFN0YXRlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlRmluZFN0YXRlLmVtaXQoeC5zdGF0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZWZpbmRtYXRjaGVzY291bnQnLCAoeDogRmluZFJlc3VsdCkgPT4ge1xuICAgICAgaWYgKHRoaXMudXBkYXRlRmluZE1hdGNoZXNDb3VudCkge1xuICAgICAgICBpZiAoeC5tYXRjaGVzQ291bnQudG90YWwpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpbmRNYXRjaGVzQ291bnQuZW1pdCh4Lm1hdGNoZXNDb3VudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCdwYWdlY2hhbmdpbmcnLCAoeDogUGFnZU51bWJlckNoYW5nZSkgPT4ge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudFBhZ2UgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VOdW1iZXI7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRQYWdlTGFiZWwgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuY3VycmVudFBhZ2VMYWJlbDtcblxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2UuZW1pdChjdXJyZW50UGFnZSk7XG4gICAgICAgIHRoaXMucGFnZUxhYmVsQ2hhbmdlLmVtaXQoY3VycmVudFBhZ2VMYWJlbCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHRoaXMuY2hlY2tIZWlnaHQoKTtcbiAgICAvLyBvcGVuIGEgZmlsZSBpbiB0aGUgdmlld2VyXG4gICAgaWYgKCEhdGhpcy5fc3JjKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgdmVyYm9zaXR5OiB0aGlzLmxvZ0xldmVsLFxuICAgICAgfTtcbiAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9uRXJyb3IgPSAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcik7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5vcGVuKHRoaXMuX3NyYywgb3B0aW9ucykudGhlbigoKSA9PiB0aGlzLnBkZkxvYWRlZC5lbWl0KHsgcGFnZXNDb3VudDogUERGVmlld2VyQXBwbGljYXRpb24ucGFnZXNDb3VudCB9KSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wYWdlID0gTnVtYmVyKHRoaXMucGFnZSk7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgc2VsZWN0Q3Vyc29yVG9vbCgpIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdzd2l0Y2hjdXJzb3J0b29sJywgeyB0b29sOiB0aGlzLmhhbmRUb29sID8gMSA6IDAgfSk7XG4gIH1cblxuICBwdWJsaWMgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcblxuICAgIE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5pbml0VGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaW5pdFRpbWVvdXQpO1xuICAgICAgdGhpcy5pbml0VGltZW91dCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbGVhbnVwKCk7XG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5jbG9zZSgpO1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnByaW50S2V5RG93bkxpc3RlbmVyKSB7XG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wcmludEtleURvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoUERGVmlld2VyQXBwbGljYXRpb24uX2JvdW5kRXZlbnRzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZFdpbmRvd0V2ZW50cygpO1xuICAgICAgfVxuICAgICAgY29uc3QgYnVzID0gUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXM7XG4gICAgICBpZiAoYnVzKSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnVuYmluZEV2ZW50cygpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBidXMuX2xpc3RlbmVycykge1xuICAgICAgICAgIGlmIChidXMuX2xpc3RlbmVyc1trZXldKSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gYnVzLl9saXN0ZW5lcnNba2V5XTtcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIHRoZSBmb3IgbG9vcCBpcyBuZWNlc3NhcnkgLSBidXRcbiAgICAgICAgICAgIC8vIGl0IG1pZ2h0IGltcHJvdmUgZ2FyYmFnZSBjb2xsZWN0aW9uIGlmIHRoZSBcImxpc3RlbmVyc1wiXG4gICAgICAgICAgICAvLyBhcnJheSBpcyBzdG9yZWQgc29tZXdoZXJlIGVsc2VcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICBsaXN0W2ldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnVzLl9saXN0ZW5lcnNba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIChQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cyBhcyBhbnkpID0gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKTtcbiAgICBpZiAoYm9keVswXSkge1xuICAgICAgY29uc3QgdG9wTGV2ZWxFbGVtZW50cyA9IGJvZHlbMF0uY2hpbGRyZW47XG4gICAgICBmb3IgKGxldCBpID0gdG9wTGV2ZWxFbGVtZW50cy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICBjb25zdCBlID0gdG9wTGV2ZWxFbGVtZW50cy5pdGVtKGkpO1xuICAgICAgICBpZiAoZSAmJiBlLmlkID09PSAncHJpbnRDb250YWluZXInKSB7XG4gICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgfSBlbHNlIGlmIChlICYmIGUuaWQgPT09ICdmaWxlSW5wdXQnKSB7XG4gICAgICAgICAgYm9keVswXS5yZW1vdmVDaGlsZChlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNQcmltYXJ5TWVudVZpc2libGUoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgdmlzaWJsZSA9XG4gICAgICB0aGlzLnNob3dCb29rbWFya0J1dHRvbiB8fFxuICAgICAgdGhpcy5zaG93RG93bmxvYWRCdXR0b24gfHxcbiAgICAgIHRoaXMuc2hvd0ZpbmRCdXR0b24gfHxcbiAgICAgIHRoaXMuc2hvd09wZW5GaWxlQnV0dG9uIHx8XG4gICAgICB0aGlzLnNob3dQYWdpbmdCdXR0b25zIHx8XG4gICAgICB0aGlzLnNob3dQcmVzZW50YXRpb25Nb2RlQnV0dG9uIHx8XG4gICAgICB0aGlzLnNob3dQcmludEJ1dHRvbiB8fFxuICAgICAgdGhpcy5zaG93UHJvcGVydGllc0J1dHRvbiB8fFxuICAgICAgdGhpcy5zaG93U2lkZWJhckJ1dHRvbiB8fFxuICAgICAgdGhpcy5zaG93Wm9vbUJ1dHRvbnM7XG5cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgaWYgKE5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgIGlmICgnc3JjJyBpbiBjaGFuZ2VzIHx8ICdiYXNlNjRTcmMnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKCEhdGhpcy5fc3JjKSB7XG4gICAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLm9wZW4odGhpcy5fc3JjKS50aGVuKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5wZGZMb2FkZWQuZW1pdCh7IHBhZ2VzQ291bnQ6IFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2VzQ291bnQgfSksXG4gICAgICAgICAgICAoZXJyb3I6IEVycm9yKSA9PiB0aGlzLnBkZkxvYWRpbmdGYWlsZWQuZW1pdChlcnJvcilcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoJ3pvb20nIGluIGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5zZXRab29tKCk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnaGFuZFRvb2wnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RDdXJzb3JUb29sKCk7XG4gICAgICB9XG4gICAgICBpZiAoJ3BhZ2UnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMucGFnZSkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBhZ2UgPSB0aGlzLnBhZ2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgncGFnZUxhYmVsJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VMYWJlbCkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlci5jdXJyZW50UGFnZUxhYmVsID0gdGhpcy5wYWdlTGFiZWw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCdyb3RhdGlvbicgaW4gY2hhbmdlcykge1xuICAgICAgICBpZiAodGhpcy5yb3RhdGlvbikge1xuICAgICAgICAgIGNvbnN0IHIgPSBOdW1iZXIodGhpcy5yb3RhdGlvbik7XG4gICAgICAgICAgaWYgKHIgPT09IDAgfHwgciA9PT0gOTAgfHwgciA9PT0gMTgwIHx8IHIgPT09IDI3MCkge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnBhZ2VzUm90YXRpb24gPSByO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIucGFnZXNSb3RhdGlvbiA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgnc2lkZWJhclZpc2libGUnIGluIGNoYW5nZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuc2lkZWJhclZpc2libGUpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZTaWRlYmFyLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICgnZmlsZW5hbWVGb3JEb3dubG9hZCcgaW4gY2hhbmdlcykge1xuICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5hcHBDb25maWcuZmlsZW5hbWVGb3JEb3dubG9hZCA9IHRoaXMuZmlsZW5hbWVGb3JEb3dubG9hZDtcbiAgICAgIH1cbiAgICAgIGlmICgnbmFtZWRkZXN0JyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLm5hbWVkZGVzdCkge1xuICAgICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkxpbmtTZXJ2aWNlLm5hdmlnYXRlVG8odGhpcy5uYW1lZGRlc3QpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICgnc3ByZWFkJyBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmICh0aGlzLnNwcmVhZCA9PT0gJ2V2ZW4nKSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDI7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAyO1xuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ2V2ZW4nKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNwcmVhZCA9PT0gJ29kZCcpIHtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5zcHJlYWRNb2RlT25Mb2FkID0gMTtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5wZGZWaWV3ZXIuc3ByZWFkTW9kZSA9IDE7XG4gICAgICAgICAgdGhpcy5vblNwcmVhZENoYW5nZSgnb2RkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uc3ByZWFkTW9kZU9uTG9hZCA9IDA7XG4gICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnNwcmVhZE1vZGUgPSAwO1xuICAgICAgICAgIHRoaXMub25TcHJlYWRDaGFuZ2UoJ29mZicpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gdHJ1ZTtcbiAgICAgIGlmICghdGhpcy5zaG93U2Vjb25kYXJ5VG9vbGJhckJ1dHRvbiB8fCAhdGhpcy5oaWRlS2ViYWJNZW51Rm9yU2Vjb25kYXJ5VG9vbGJhcikge1xuICAgICAgICBpZiAoIXRoaXMuaXNQcmltYXJ5TWVudVZpc2libGUoKSkge1xuICAgICAgICAgIHRoaXMucHJpbWFyeU1lbnVWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMuY2FsY1ZpZXdlclBvc2l0aW9uVG9wKCk7XG4gICAgfVxuICAgIHRoaXMub25SZXNpemUoKTtcblxuICAgIGlmICgncHJpbnRSZXNvbHV0aW9uJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucy5zZXQoJ3ByaW50UmVzb2x1dGlvbicsIHRoaXMucHJpbnRSZXNvbHV0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdpZ25vcmVLZXlib2FyZCcgaW4gY2hhbmdlcykge1xuICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3ZlcnJpZGVEZWZhdWx0U2V0dGluZ3MoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCdpZ25vcmVLZXlzJyBpbiBjaGFuZ2VzKSB7XG4gICAgICBjb25zdCBvcHRpb25zID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vdmVycmlkZURlZmF1bHRTZXR0aW5ncygpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ2FjY2VwdEtleXMnIGluIGNoYW5nZXMpIHtcbiAgICAgIGNvbnN0IG9wdGlvbnMgPSBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgnc2hvd0JvcmRlcnMnIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmICghY2hhbmdlc1snc2hvd0JvcmRlcnMnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcbiAgICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgICB0aGlzLm92ZXJyaWRlRGVmYXVsdFNldHRpbmdzKCk7XG4gICAgICAgICAgY29uc3Qgdmlld2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdlcicpIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICAgIGlmICh0aGlzLnNob3dCb3JkZXJzKSB7XG4gICAgICAgICAgICB2aWV3ZXIuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlUGFnZUJvcmRlcnMnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmlld2VyLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZVBhZ2VCb3JkZXJzJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLnJlbW92ZVBhZ2VCb3JkZXJzID0gIXRoaXMuc2hvd0JvcmRlcnM7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHpvb21FdmVudCA9IHtcbiAgICAgICAgICAgIHNvdXJjZTogdmlld2VyLFxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgICAgIHNjYWxlOiAoTnVtYmVyKHRoaXMuem9vbSkgfCAxMDApIC8gMTAwLFxuICAgICAgICAgICAgcHJlc2V0VmFsdWU6IHRoaXMuem9vbSxcbiAgICAgICAgICB9IGFzIFNjYWxlQ2hhbmdpbmdFdmVudDtcbiAgICAgICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc2NhbGVjaGFuZ2luZycsIHpvb21FdmVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJ3Nob3dVbnZlcmlmaWVkU2lnbmF0dXJlcycgaW4gY2hhbmdlcykge1xuICAgICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uICYmIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50KSB7XG4gICAgICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZkRvY3VtZW50Ll90cmFuc3BvcnQubWVzc2FnZUhhbmRsZXIuc2VuZCgnc2hvd1VudmVyaWZpZWRTaWduYXR1cmVzJywgdGhpcy5zaG93VW52ZXJpZmllZFNpZ25hdHVyZXMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICgnZW5hYmxlUHJpbnQnIGluIGNoYW5nZXMpIHtcbiAgICAgIGlmICghY2hhbmdlc1snZW5hYmxlUHJpbnQnXS5pc0ZpcnN0Q2hhbmdlKCkpIHtcbiAgICAgICAgUERGVmlld2VyQXBwbGljYXRpb24uZW5hYmxlUHJpbnQgPSB0aGlzLmVuYWJsZVByaW50O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoXG4gICAgICAoJ2N1c3RvbUZpbmRiYXInIGluIGNoYW5nZXMgJiYgIWNoYW5nZXNbJ2N1c3RvbUZpbmRiYXInXS5pc0ZpcnN0Q2hhbmdlKCkpIHx8XG4gICAgICAoJ2N1c3RvbUZpbmRiYXJCdXR0b25zJyBpbiBjaGFuZ2VzICYmICFjaGFuZ2VzWydjdXN0b21GaW5kYmFyQnV0dG9ucyddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICgnY3VzdG9tRmluZGJhcklucHV0QXJlYScgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tRmluZGJhcklucHV0QXJlYSddLmlzRmlyc3RDaGFuZ2UoKSkgfHxcbiAgICAgICgnY3VzdG9tVG9vbGJhcicgaW4gY2hhbmdlcyAmJiAhY2hhbmdlc1snY3VzdG9tVG9vbGJhciddLmlzRmlyc3RDaGFuZ2UoKSlcbiAgICApIHtcbiAgICAgIGlmICh0aGlzLmR1bW15Q29tcG9uZW50cykge1xuICAgICAgICB0aGlzLmR1bW15Q29tcG9uZW50cy5hZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRab29tKCkge1xuICAgIGxldCB6b29tQXNOdW1iZXIgPSB0aGlzLnpvb207XG4gICAgaWYgKFN0cmluZyh6b29tQXNOdW1iZXIpLmVuZHNXaXRoKCclJykpIHtcbiAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcihTdHJpbmcoem9vbUFzTnVtYmVyKS5yZXBsYWNlKCclJywgJycpKSAvIDEwMDtcbiAgICB9IGVsc2UgaWYgKCFpc05hTihOdW1iZXIoem9vbUFzTnVtYmVyKSkpIHtcbiAgICAgIHpvb21Bc051bWJlciA9IE51bWJlcih6b29tQXNOdW1iZXIpIC8gMTAwO1xuICAgIH1cbiAgICBpZiAoIXpvb21Bc051bWJlcikge1xuICAgICAgem9vbUFzTnVtYmVyID0gJ2F1dG8nO1xuICAgIH1cbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuXG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uKSB7XG4gICAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM6IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zO1xuXG4gICAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMuc2V0KCdkZWZhdWx0Wm9vbVZhbHVlJywgem9vbUFzTnVtYmVyKTtcbiAgICB9XG4gICAgaWYgKFBERlZpZXdlckFwcGxpY2F0aW9uLnBkZlZpZXdlcikge1xuICAgICAgUERGVmlld2VyQXBwbGljYXRpb24ucGRmVmlld2VyLmN1cnJlbnRTY2FsZVZhbHVlID0gem9vbUFzTnVtYmVyO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvblJlc2l6ZSgpOiB2b2lkIHtcbiAgICBjb25zdCBwZGZWaWV3ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdodG1sJyk7XG4gICAgaWYgKHBkZlZpZXdlciAmJiBwZGZWaWV3ZXIubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dGVyQ29udGFpbmVyJyk7XG4gICAgICBpZiAoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLnRvb2xiYXJXaWR0aEluUGl4ZWxzID0gd2lkdGg7XG4gICAgICAgIGlmICh0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQpIHtcbiAgICAgICAgICB0aGlzLnNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQuY2hlY2tWaXNpYmlsaXR5KCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScpXG4gIHB1YmxpYyBvbkNvbnRleHRNZW51KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmNvbnRleHRNZW51QWxsb3dlZDtcbiAgfVxuXG4gIHB1YmxpYyBvblNlY29uZGFyeU1lbnVJc0VtcHR5KGhpZGVLZWJhYkJ1dHRvbjogYm9vbGVhbikge1xuICAgIHRoaXMuaGlkZUtlYmFiTWVudUZvclNlY29uZGFyeVRvb2xiYXIgPSBoaWRlS2ViYWJCdXR0b247XG4gIH1cbn1cbiJdfQ==