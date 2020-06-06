/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PdfHandToolComponent } from './toolbar/pdf-hand-tool/pdf-hand-tool.component';
// tslint:disable:max-line-length
import { CommonModule, Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { NgxExtendedPdfViewerService } from './ngx-extended-pdf-viewer.service';
import { PageNumberComponent } from './toolbar/pdf-paging-area/page-number/page-number.component';
import { PdfBookmarkComponent } from './toolbar/pdf-bookmark/pdf-bookmark.component';
import { PdfContextMenuComponent } from './toolbar/pdf-context-menu/pdf-context-menu.component';
import { PdfDocumentPropertiesOverlayComponent } from './document-properties/pdf-document-properties-overlay/pdf-document-properties-overlay.component';
import { PdfDownloadComponent } from './toolbar/pdf-download/pdf-download.component';
import { PdfDummyComponentsComponent } from './pdf-dummy-components/pdf-dummy-components.component';
import { PdfFindbarComponent } from './toolbar/pdf-findbar/pdf-findbar.component';
import { PdfFindbarMessageContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-message-container/pdf-findbar-message-container.component';
import { PdfFindbarOptionsOneContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-findbar-options-one-container.component';
import { PdfFindbarOptionsThreeContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-findbar-options-three-container.component';
import { PdfFindbarOptionsTwoContainerComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-findbar-options-two-container.component';
import { PdfFindButtonComponent } from './toolbar/pdf-find-button/pdf-find-button.component';
import { PdfFindEntireWordComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-word/pdf-find-entire-word.component';
import { PdfFindHighlightAllComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-highlight-all/pdf-find-highlight-all.component';
import { PdfFindIgnoreAccentsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-ignore-accents/pdf-find-ignore-accents.component';
import { PdfFindInputAreaComponent } from './toolbar/pdf-findbar/pdf-find-input-area/pdf-find-input-area.component';
import { PdfFindMatchCaseComponent } from './toolbar/pdf-findbar/pdf-findbar-options-one-container/pdf-find-match-case/pdf-find-match-case.component';
import { PdfFindMultipleSearchTextsComponent } from './toolbar/pdf-findbar/pdf-findbar-options-two-container/pdf-find-entire-phrase/pdf-find-entire-phrase.component';
import { PdfFindNextComponent } from './toolbar/pdf-findbar/pdf-find-next/pdf-find-next.component';
import { PdfFindPreviousComponent } from './toolbar/pdf-findbar/pdf-find-previous/pdf-find-previous.component';
import { PdfFindResultsCountComponent } from './toolbar/pdf-findbar/pdf-findbar-options-three-container/pdf-find-results-count/pdf-find-results-count.component';
import { PdfFirstPageComponent } from './toolbar/pdf-paging-area/pdf-first-page/pdf-first-page.component';
import { PdfLastPageComponent } from './toolbar/pdf-paging-area/pdf-last-page/pdf-last-page.component';
import { PdfNextPageComponent } from './toolbar/pdf-paging-area/pdf-next-page/pdf-next-page.component';
import { PdfOpenFileComponent } from './toolbar/pdf-open-file/pdf-open-file.component';
import { PdfPageNumberComponent } from './toolbar/pdf-paging-area/pdf-page-number/pdf-page-number.component';
import { PdfPagingAreaComponent } from './toolbar/pdf-paging-area/pdf-paging-area.component';
import { PdfPresentationModeComponent } from './toolbar/pdf-presentation-mode/pdf-presentation-mode.component';
import { PdfPreviousPageComponent } from './toolbar/pdf-paging-area/pdf-previous-page/pdf-previous-page.component';
import { PdfPrintComponent } from './toolbar/pdf-print/pdf-print.component';
import { PdfRotatePageComponent } from './toolbar/pdf-rotate-page/pdf-rotate-page.component';
import { PdfSearchInputFieldComponent } from './toolbar/pdf-findbar/pdf-search-input-field/pdf-search-input-field.component';
import { PdfSecondaryToolbarComponent } from './secondary-toolbar/pdf-secondary-toolbar/pdf-secondary-toolbar.component';
import { PdfSidebarComponent } from './sidebar/pdf-sidebar/pdf-sidebar.component';
import { PdfSplitToolbarButtonComponent } from './toolbar/pdf-findbar/pdf-split-toolbar-button/pdf-split-toolbar-button.component';
import { PdfToggleSecondaryToolbarComponent } from './toolbar/pdf-toggle-secondary-toolbar/pdf-toggle-secondary-toolbar.component';
import { PdfToggleSidebarComponent } from './toolbar/pdf-toggle-sidebar/pdf-toggle-sidebar.component';
import { PdfToolbarComponent } from './toolbar/pdf-toolbar/pdf-toolbar.component';
import { PdfZoomDropdownComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-dropdown/pdf-zoom-dropdown.component';
import { PdfZoomInComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-in/pdf-zoom-in.component';
import { PdfZoomOutComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-out/pdf-zoom-out.component';
import { PdfZoomToolbarComponent } from './toolbar/pdf-zoom-toolbar/pdf-zoom-toolbar.component';
import { PdfSelectToolComponent } from './toolbar/pdf-select-tool/pdf-select-tool.component';
import { DynamicCssComponent } from './dynamic-css/dynamic-css.component';
/**
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKeyIgnored(cmd, keycode) {
    /** @type {?} */
    var PDFViewerApplicationOptions = ((/** @type {?} */ (window))).PDFViewerApplicationOptions;
    /** @type {?} */
    var ignoreKeys = PDFViewerApplicationOptions.get('ignoreKeys');
    /** @type {?} */
    var acceptKeys = PDFViewerApplicationOptions.get('acceptKeys');
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
    var ignoreKeyboard = PDFViewerApplicationOptions.get('ignoreKeyboard');
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
    function (keyDef) { return isKey(keyDef, cmd, keycode); }));
}
/**
 * @param {?} keyDef
 * @param {?} cmd
 * @param {?} keycode
 * @return {?}
 */
function isKey(keyDef, cmd, keycode) {
    /** @type {?} */
    var cmdDef = 0;
    /** @type {?} */
    var key = 0;
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
var NgxExtendedPdfViewerModule = /** @class */ (function () {
    function NgxExtendedPdfViewerModule() {
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
    NgxExtendedPdfViewerModule.ctorParameters = function () { return []; };
    return NgxExtendedPdfViewerModule;
}());
export { NgxExtendedPdfViewerModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFHdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUN4SixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUNsSixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQztBQUM3SixPQUFPLEVBQUUsd0NB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d0JBQ25CLHNCQUFzQjt3QkFDdEIsa0JBQWtCO3dCQUNsQixtQkFBbUI7d0JBQ25CLDZCQUE2QjtxQkFDOUI7aUJBQ0Y7Ozs7SUFHRCxpQ0FBQztDQUFBLEFBbEdELElBa0dDO1NBRlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGRmSGFuZFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWhhbmQtdG9vbC9wZGYtaGFuZC10b29sLmNvbXBvbmVudCc7XG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcblxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBMb2NhdGlvbiwgTG9jYXRpb25TdHJhdGVneSwgUGF0aExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zIH0gZnJvbSAnLi9vcHRpb25zL3BkZi12aWV3ZXItYXBwbGljYXRpb24tb3B0aW9ucyc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlclNlcnZpY2UgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUGFnZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGFnZS1udW1iZXIvcGFnZS1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkJvb2ttYXJrQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1ib29rbWFyay9wZGYtYm9va21hcmsuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkNvbnRleHRNZW51Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1jb250ZXh0LW1lbnUvcGRmLWNvbnRleHQtbWVudS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheUNvbXBvbmVudCB9IGZyb20gJy4vZG9jdW1lbnQtcHJvcGVydGllcy9wZGYtZG9jdW1lbnQtcHJvcGVydGllcy1vdmVybGF5L3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLW92ZXJsYXkuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkRvd25sb2FkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1kb3dubG9hZC9wZGYtZG93bmxvYWQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB9IGZyb20gJy4vcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyL3BkZi1maW5kYmFyLW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc1RocmVlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kYmFyT3B0aW9uc1R3b0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kLWJ1dHRvbi9wZGYtZmluZC1idXR0b24uY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRFbnRpcmVXb3JkQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtZmluZC1lbnRpcmUtd29yZC9wZGYtZmluZC1lbnRpcmUtd29yZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtaGlnaGxpZ2h0LWFsbC9wZGYtZmluZC1oaWdobGlnaHQtYWxsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy9wZGYtZmluZC1pZ25vcmUtYWNjZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1pbnB1dC1hcmVhL3BkZi1maW5kLWlucHV0LWFyZWEuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy1vbmUtY29udGFpbmVyL3BkZi1maW5kLW1hdGNoLWNhc2UvcGRmLWZpbmQtbWF0Y2gtY2FzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS1waHJhc2UvcGRmLWZpbmQtZW50aXJlLXBocmFzZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZE5leHRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtbmV4dC9wZGYtZmluZC1uZXh0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmQtcHJldmlvdXMvcGRmLWZpbmQtcHJldmlvdXMuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmQtcmVzdWx0cy1jb3VudC9wZGYtZmluZC1yZXN1bHRzLWNvdW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaXJzdFBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1maXJzdC1wYWdlL3BkZi1maXJzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZMYXN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWxhc3QtcGFnZS9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZOZXh0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLW5leHQtcGFnZS9wZGYtbmV4dC1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZPcGVuRmlsZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtb3Blbi1maWxlL3BkZi1vcGVuLWZpbGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlBhZ2VOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdlLW51bWJlci9wZGYtcGFnZS1udW1iZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlBhZ2luZ0FyZWFDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJlc2VudGF0aW9uLW1vZGUvcGRmLXByZXNlbnRhdGlvbi1tb2RlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wcmV2aW91cy1wYWdlL3BkZi1wcmV2aW91cy1wYWdlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQcmludENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcHJpbnQvcGRmLXByaW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZSb3RhdGVQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1yb3RhdGUtcGFnZS9wZGYtcm90YXRlLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNlYXJjaElucHV0RmllbGRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNlYXJjaC1pbnB1dC1maWVsZC9wZGYtc2VhcmNoLWlucHV0LWZpZWxkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXNlY29uZGFyeS10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTaWRlYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9zaWRlYmFyL3BkZi1zaWRlYmFyL3BkZi1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTcGxpdFRvb2xiYXJCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLXNwbGl0LXRvb2xiYXItYnV0dG9uL3BkZi1zcGxpdC10b29sYmFyLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNlY29uZGFyeS10b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXRvZ2dsZS1zaWRlYmFyL3BkZi10b2dnbGUtc2lkZWJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9vbGJhci9wZGYtdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tZHJvcGRvd24vcGRmLXpvb20tZHJvcGRvd24uY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlpvb21JbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLWluL3BkZi16b29tLWluLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tT3V0Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20tb3V0L3BkZi16b29tLW91dC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZTZWxlY3RUb29sQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1zZWxlY3QtdG9vbC9wZGYtc2VsZWN0LXRvb2wuY29tcG9uZW50JztcbmltcG9ydCB7IER5bmFtaWNDc3NDb21wb25lbnQgfSBmcm9tICcuL2R5bmFtaWMtY3NzL2R5bmFtaWMtY3NzLmNvbXBvbmVudCc7XG5cblxuZnVuY3Rpb24gaXNLZXlJZ25vcmVkKGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9uczogSVBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucyA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnM7XG5cbiAgY29uc3QgaWdub3JlS2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleXMnKTtcbiAgY29uc3QgYWNjZXB0S2V5czogQXJyYXk8c3RyaW5nPiA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2FjY2VwdEtleXMnKTtcbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcbiAgICBpZiAoaXNLZXlJbkxpc3QoaWdub3JlS2V5cywgY21kLCAnV0hFRUwnKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gIWlzS2V5SW5MaXN0KGFjY2VwdEtleXMsIGNtZCwgJ1dIRUVMJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGtleWNvZGUgPT09IDE2IHx8IGtleWNvZGUgPT09IDE3IHx8IGtleWNvZGUgPT09IDE4IHx8IGtleWNvZGUgPT09IDIyNCkge1xuICAgIC8vIGlnbm9yZSBzb2xpdGFyeSBTSElGVCwgQUxULCBDTUQsIGFuZCBDVFJMIGJlY2F1c2UgdGhleSBvbmx5IG1ha2Ugc2Vuc2UgYXMgdHdvLWtleS1jb21iaW5hdGlvbnNcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvLyBjbWQgaXMgYSBiaXQtYXJyYXk6XG4gIC8vIDEgPT0gQ1RSTFxuICAvLyAyID09IEFMVFxuICAvLyA0ID09IFNISUZUXG4gIC8vIDggPT0gTUVUQVxuICBjb25zdCBpZ25vcmVLZXlib2FyZCA9IFBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucy5nZXQoJ2lnbm9yZUtleWJvYXJkJyk7XG4gIGlmICghIWlnbm9yZUtleWJvYXJkKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAoISFpZ25vcmVLZXlzICYmIGlnbm9yZUtleXMubGVuZ3RoID4gMCkge1xuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsIGtleWNvZGUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAoISFhY2NlcHRLZXlzICYmIGFjY2VwdEtleXMubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCBrZXljb2RlKTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KHNldHRpbmdzOiBBcnJheTxzdHJpbmc+LCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xuICBpZiAoIXNldHRpbmdzKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIHNldHRpbmdzLnNvbWUoa2V5RGVmID0+IGlzS2V5KGtleURlZiwgY21kLCBrZXljb2RlKSk7XG59XG5cbmZ1bmN0aW9uIGlzS2V5KGtleURlZjogc3RyaW5nLCBjbWQ6IG51bWJlciwga2V5Y29kZTogbnVtYmVyIHwgJ1dIRUVMJyk6IGJvb2xlYW4ge1xuICBsZXQgY21kRGVmID0gMDtcbiAgbGV0IGtleSA9IDA7XG4gIGtleURlZiA9IGtleURlZi50b0xvd2VyQ2FzZSgpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZTogbm8tYml0d2lzZVxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdjdHJsKycpKSB7XG4gICAgY21kRGVmIHw9IDE7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2N0cmwrJywgJycpO1xuICB9XG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2NtZCsnKSkge1xuICAgIGNtZERlZiB8PSA4O1xuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdjbWQrJywgJycpO1xuICB9XG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2FsdCsnKSkge1xuICAgIGNtZERlZiB8PSAyO1xuICAgIGtleURlZiA9IGtleURlZi5yZXBsYWNlKCdhbHQrJywgJycpO1xuICB9XG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ3NoaWZ0KycpKSB7XG4gICAgY21kRGVmIHw9IDQ7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ3NoaWZ0KycsICcnKTtcbiAgfVxuICBpZiAoa2V5RGVmLmluY2x1ZGVzKCdtZXRhKycpKSB7XG4gICAgY21kRGVmIHw9IDg7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ21ldGErJywgJycpO1xuICB9XG5cbiAgaWYgKGtleURlZiA9PT0gJ3VwJykge1xuICAgIGtleSA9IDM4O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2Rvd24nKSB7XG4gICAga2V5ID0gNDA7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnKycgfHwga2V5RGVmID09PSAnXCIrXCInKSB7XG4gICAga2V5ID0gMTcxO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJy0nIHx8IGtleURlZiA9PT0gJ1wiLVwiJykge1xuICAgIGtleSA9IDE3MztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlc2MnKSB7XG4gICAga2V5ID0gMjc7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZW50ZXInKSB7XG4gICAga2V5ID0gMTM7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnc3BhY2UnKSB7XG4gICAga2V5ID0gMzI7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZjQnKSB7XG4gICAga2V5ID0gMTE1O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2JhY2tzcGFjZScpIHtcbiAgICBrZXkgPSA4O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2hvbWUnKSB7XG4gICAga2V5ID0gMzY7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZW5kJykge1xuICAgIGtleSA9IDM1O1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2xlZnQnKSB7XG4gICAga2V5ID0gMzc7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncmlnaHQnKSB7XG4gICAga2V5ID0gMzk7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncGFnZWRvd24nKSB7XG4gICAga2V5ID0gMzQ7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAncGFnZXVwJykge1xuICAgIGtleSA9IDMzO1xuICB9IGVsc2Uge1xuICAgIGtleSA9IGtleURlZi50b1VwcGVyQ2FzZSgpLmNoYXJDb2RlQXQoMCk7XG4gIH1cbiAgaWYgKGtleWNvZGUgPT09ICdXSEVFTCcpIHtcbiAgICByZXR1cm4ga2V5RGVmID09PSAnd2hlZWwnICYmIGNtZCA9PT0gY21kRGVmO1xuICB9XG4gIHJldHVybiBrZXkgPT09IGtleWNvZGUgJiYgY21kID09PSBjbWREZWY7XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAod2luZG93IGFzIGFueSkuaXNLZXlJZ25vcmVkID0gaXNLZXlJZ25vcmVkO1xufVxuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIER5bmFtaWNDc3NDb21wb25lbnQsXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQsXG4gICAgUGRmWm9vbURyb3Bkb3duQ29tcG9uZW50LFxuICAgIFBkZkNvbnRleHRNZW51Q29tcG9uZW50LFxuICAgIFBkZlByZXNlbnRhdGlvbk1vZGVDb21wb25lbnQsXG4gICAgUGRmT3BlbkZpbGVDb21wb25lbnQsXG4gICAgUGRmUHJpbnRDb21wb25lbnQsXG4gICAgUGRmRG93bmxvYWRDb21wb25lbnQsXG4gICAgUGRmQm9va21hcmtDb21wb25lbnQsXG4gICAgUGRmWm9vbVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyQ29tcG9uZW50LFxuICAgIFBkZlNpZGViYXJDb21wb25lbnQsXG4gICAgUGRmSGFuZFRvb2xDb21wb25lbnQsXG4gICAgUGRmU2VsZWN0VG9vbENvbXBvbmVudCxcbiAgICBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQsXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQsXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXG4gICAgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1R3b0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50LFxuICAgIFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQsXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXG4gICAgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQsXG4gICAgUGRmRmluZElnbm9yZUFjY2VudHNDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZlNwbGl0VG9vbGJhckJ1dHRvbkNvbXBvbmVudCxcbiAgICBQZGZUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRCdXR0b25Db21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkxhc3RQYWdlQ29tcG9uZW50LFxuICAgIFBkZkZpcnN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZOZXh0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZQcmV2aW91c1BhZ2VDb21wb25lbnQsXG4gICAgUGFnZU51bWJlckNvbXBvbmVudCxcbiAgICBQZGZQYWdlTnVtYmVyQ29tcG9uZW50LFxuICAgIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQsXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXG4gICAgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW05neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSwgTG9jYXRpb24sIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogUGF0aExvY2F0aW9uU3RyYXRlZ3l9XSxcbiAgZXhwb3J0czogW1xuICAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcbiAgICBQZGZQcmludENvbXBvbmVudCxcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcbiAgICBQZGZCb29rbWFya0NvbXBvbmVudCxcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50LFxuICAgIFBkZkRvY3VtZW50UHJvcGVydGllc092ZXJsYXlDb21wb25lbnQsXG4gICAgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCxcbiAgICBQZGZGaW5kUHJldmlvdXNDb21wb25lbnQsXG4gICAgUGRmRmluZE5leHRDb21wb25lbnQsXG4gICAgUGRmRmluZElucHV0QXJlYUNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1R3b0NvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc09uZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kTWF0Y2hDYXNlQ29tcG9uZW50LFxuICAgIFBkZkZpbmRIaWdobGlnaHRBbGxDb21wb25lbnQsXG4gICAgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQsXG4gICAgUGRmRmluZE11bHRpcGxlU2VhcmNoVGV4dHNDb21wb25lbnQsXG4gICAgUGRmRmluZElnbm9yZUFjY2VudHNDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck9wdGlvbnNUaHJlZUNvbnRhaW5lckNvbXBvbmVudCxcbiAgICBQZGZGaW5kUmVzdWx0c0NvdW50Q29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQsXG4gICAgUGRmU3BsaXRUb29sYmFyQnV0dG9uQ29tcG9uZW50LFxuICAgIFBkZlRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmRmlyc3RQYWdlQ29tcG9uZW50LFxuICAgIFBkZk5leHRQYWdlQ29tcG9uZW50LFxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcbiAgICBQYWdlTnVtYmVyQ29tcG9uZW50LFxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXG4gICAgUGRmWm9vbUluQ29tcG9uZW50LFxuICAgIFBkZlpvb21PdXRDb21wb25lbnQsXG4gICAgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hFeHRlbmRlZFBkZlZpZXdlck1vZHVsZSB7XG4gIGNvbnN0cnVjdG9yKCkge31cbn1cbiJdfQ==