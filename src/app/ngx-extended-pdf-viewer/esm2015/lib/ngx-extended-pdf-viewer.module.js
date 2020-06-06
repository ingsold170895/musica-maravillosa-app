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
export class NgxExtendedPdfViewerModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQzs7QUFHdkYsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsZ0JBQWdCLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUNwRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUNoRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2REFBNkQsQ0FBQztBQUNsRyxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNoRyxPQUFPLEVBQUUscUNBQXFDLEVBQUUsTUFBTSxpR0FBaUcsQ0FBQztBQUN4SixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUNyRixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUNwRyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2Q0FBNkMsQ0FBQztBQUNsRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSw2RkFBNkYsQ0FBQztBQUNsSixPQUFPLEVBQUUsc0NBQXNDLEVBQUUsTUFBTSxxR0FBcUcsQ0FBQztBQUM3SixPQUFPLEVBQUUsd0NB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bUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLGtCQUFrQjtvQkFDbEIsbUJBQW1CO29CQUNuQiw2QkFBNkI7aUJBQzlCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZGZIYW5kVG9vbENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtaGFuZC10b29sL3BkZi1oYW5kLXRvb2wuY29tcG9uZW50Jztcbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxuXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIExvY2F0aW9uLCBMb2NhdGlvblN0cmF0ZWd5LCBQYXRoTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbk9wdGlvbnMgfSBmcm9tICcuL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbi1vcHRpb25zJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE5neEV4dGVuZGVkUGRmVmlld2VyU2VydmljZSB9IGZyb20gJy4vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZSc7XG5pbXBvcnQgeyBQYWdlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wYWdlLW51bWJlci9wYWdlLW51bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmQm9va21hcmtDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWJvb2ttYXJrL3BkZi1ib29rbWFyay5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmQ29udGV4dE1lbnVDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWNvbnRleHQtbWVudS9wZGYtY29udGV4dC1tZW51LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZEb2N1bWVudFByb3BlcnRpZXNPdmVybGF5Q29tcG9uZW50IH0gZnJvbSAnLi9kb2N1bWVudC1wcm9wZXJ0aWVzL3BkZi1kb2N1bWVudC1wcm9wZXJ0aWVzLW92ZXJsYXkvcGRmLWRvY3VtZW50LXByb3BlcnRpZXMtb3ZlcmxheS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRG93bmxvYWRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWRvd25sb2FkL3BkZi1kb3dubG9hZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRHVtbXlDb21wb25lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi9wZGYtZHVtbXktY29tcG9uZW50cy9wZGYtZHVtbXktY29tcG9uZW50cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIvcGRmLWZpbmRiYXItbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zT25lQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVGhyZWVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIvcGRmLWZpbmRiYXItb3B0aW9ucy10aHJlZS1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRiYXJPcHRpb25zVHdvQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdHdvLWNvbnRhaW5lci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRCdXR0b25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmQtYnV0dG9uL3BkZi1maW5kLWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZEVudGlyZVdvcmRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLWZpbmRiYXIvcGRmLWZpbmRiYXItb3B0aW9ucy10d28tY29udGFpbmVyL3BkZi1maW5kLWVudGlyZS13b3JkL3BkZi1maW5kLWVudGlyZS13b3JkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kSGlnaGxpZ2h0QWxsQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtb25lLWNvbnRhaW5lci9wZGYtZmluZC1oaWdobGlnaHQtYWxsL3BkZi1maW5kLWhpZ2hsaWdodC1hbGwuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRJZ25vcmVBY2NlbnRzQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kYmFyLW9wdGlvbnMtdGhyZWUtY29udGFpbmVyL3BkZi1maW5kLWlnbm9yZS1hY2NlbnRzL3BkZi1maW5kLWlnbm9yZS1hY2NlbnRzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1maW5kYmFyL3BkZi1maW5kLWlucHV0LWFyZWEvcGRmLWZpbmQtaW5wdXQtYXJlYS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZE1hdGNoQ2FzZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLW9uZS1jb250YWluZXIvcGRmLWZpbmQtbWF0Y2gtY2FzZS9wZGYtZmluZC1tYXRjaC1jYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXR3by1jb250YWluZXIvcGRmLWZpbmQtZW50aXJlLXBocmFzZS9wZGYtZmluZC1lbnRpcmUtcGhyYXNlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZGaW5kTmV4dENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1uZXh0L3BkZi1maW5kLW5leHQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZC1wcmV2aW91cy9wZGYtZmluZC1wcmV2aW91cy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmRmluZFJlc3VsdHNDb3VudENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtZmluZGJhci1vcHRpb25zLXRocmVlLWNvbnRhaW5lci9wZGYtZmluZC1yZXN1bHRzLWNvdW50L3BkZi1maW5kLXJlc3VsdHMtY291bnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkZpcnN0UGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWZpcnN0LXBhZ2UvcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZkxhc3RQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbGFzdC1wYWdlL3BkZi1sYXN0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZk5leHRQYWdlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbmV4dC1wYWdlL3BkZi1uZXh0LXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZk9wZW5GaWxlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1vcGVuLWZpbGUvcGRmLW9wZW4tZmlsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUGFnZU51bWJlckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2UtbnVtYmVyL3BkZi1wYWdlLW51bWJlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmVzZW50YXRpb24tbW9kZS9wZGYtcHJlc2VudGF0aW9uLW1vZGUuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLXByZXZpb3VzLXBhZ2UvcGRmLXByZXZpb3VzLXBhZ2UuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlByaW50Q29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi1wcmludC9wZGYtcHJpbnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlJvdGF0ZVBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmU2VhcmNoSW5wdXRGaWVsZENvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtc2VhcmNoLWlucHV0LWZpZWxkL3BkZi1zZWFyY2gtaW5wdXQtZmllbGQuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQgfSBmcm9tICcuL3NlY29uZGFyeS10b29sYmFyL3BkZi1zZWNvbmRhcnktdG9vbGJhci9wZGYtc2Vjb25kYXJ5LXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNpZGViYXJDb21wb25lbnQgfSBmcm9tICcuL3NpZGViYXIvcGRmLXNpZGViYXIvcGRmLXNpZGViYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNwbGl0VG9vbGJhckJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtZmluZGJhci9wZGYtc3BsaXQtdG9vbGJhci1idXR0b24vcGRmLXNwbGl0LXRvb2xiYXItYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZUb2dnbGVTZWNvbmRhcnlUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b2dnbGUtc2Vjb25kYXJ5LXRvb2xiYXIvcGRmLXRvZ2dsZS1zZWNvbmRhcnktdG9vbGJhci5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmVG9nZ2xlU2lkZWJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtdG9nZ2xlLXNpZGViYXIvcGRmLXRvZ2dsZS1zaWRlYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZUb29sYmFyQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi10b29sYmFyL3BkZi10b29sYmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tRHJvcGRvd25Db21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS1kcm9wZG93bi9wZGYtem9vbS1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgUGRmWm9vbUluQ29tcG9uZW50IH0gZnJvbSAnLi90b29sYmFyL3BkZi16b29tLXRvb2xiYXIvcGRmLXpvb20taW4vcGRmLXpvb20taW4uY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlpvb21PdXRDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXpvb20tdG9vbGJhci9wZGYtem9vbS1vdXQvcGRmLXpvb20tb3V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBQZGZab29tVG9vbGJhckNvbXBvbmVudCB9IGZyb20gJy4vdG9vbGJhci9wZGYtem9vbS10b29sYmFyL3BkZi16b29tLXRvb2xiYXIuY29tcG9uZW50JztcbmltcG9ydCB7IFBkZlNlbGVjdFRvb2xDb21wb25lbnQgfSBmcm9tICcuL3Rvb2xiYXIvcGRmLXNlbGVjdC10b29sL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRHluYW1pY0Nzc0NvbXBvbmVudCB9IGZyb20gJy4vZHluYW1pYy1jc3MvZHluYW1pYy1jc3MuY29tcG9uZW50JztcblxuXG5mdW5jdGlvbiBpc0tleUlnbm9yZWQoY21kOiBudW1iZXIsIGtleWNvZGU6IG51bWJlciB8ICdXSEVFTCcpOiBib29sZWFuIHtcbiAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zOiBJUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uT3B0aW9ucztcblxuICBjb25zdCBpZ25vcmVLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5cycpO1xuICBjb25zdCBhY2NlcHRLZXlzOiBBcnJheTxzdHJpbmc+ID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnYWNjZXB0S2V5cycpO1xuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xuICAgIGlmIChpc0tleUluTGlzdChpZ25vcmVLZXlzLCBjbWQsICdXSEVFTCcpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCEhYWNjZXB0S2V5cyAmJiBhY2NlcHRLZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiAhaXNLZXlJbkxpc3QoYWNjZXB0S2V5cywgY21kLCAnV0hFRUwnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoa2V5Y29kZSA9PT0gMTYgfHwga2V5Y29kZSA9PT0gMTcgfHwga2V5Y29kZSA9PT0gMTggfHwga2V5Y29kZSA9PT0gMjI0KSB7XG4gICAgLy8gaWdub3JlIHNvbGl0YXJ5IFNISUZULCBBTFQsIENNRCwgYW5kIENUUkwgYmVjYXVzZSB0aGV5IG9ubHkgbWFrZSBzZW5zZSBhcyB0d28ta2V5LWNvbWJpbmF0aW9uc1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIGNtZCBpcyBhIGJpdC1hcnJheTpcbiAgLy8gMSA9PSBDVFJMXG4gIC8vIDIgPT0gQUxUXG4gIC8vIDQgPT0gU0hJRlRcbiAgLy8gOCA9PSBNRVRBXG4gIGNvbnN0IGlnbm9yZUtleWJvYXJkID0gUERGVmlld2VyQXBwbGljYXRpb25PcHRpb25zLmdldCgnaWdub3JlS2V5Ym9hcmQnKTtcbiAgaWYgKCEhaWdub3JlS2V5Ym9hcmQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICghIWlnbm9yZUtleXMgJiYgaWdub3JlS2V5cy5sZW5ndGggPiAwKSB7XG4gICAgaWYgKGlzS2V5SW5MaXN0KGlnbm9yZUtleXMsIGNtZCwga2V5Y29kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICghIWFjY2VwdEtleXMgJiYgYWNjZXB0S2V5cy5sZW5ndGggPiAwKSB7XG4gICAgcmV0dXJuICFpc0tleUluTGlzdChhY2NlcHRLZXlzLCBjbWQsIGtleWNvZGUpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gaXNLZXlJbkxpc3Qoc2V0dGluZ3M6IEFycmF5PHN0cmluZz4sIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGlmICghc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gc2V0dGluZ3Muc29tZShrZXlEZWYgPT4gaXNLZXkoa2V5RGVmLCBjbWQsIGtleWNvZGUpKTtcbn1cblxuZnVuY3Rpb24gaXNLZXkoa2V5RGVmOiBzdHJpbmcsIGNtZDogbnVtYmVyLCBrZXljb2RlOiBudW1iZXIgfCAnV0hFRUwnKTogYm9vbGVhbiB7XG4gIGxldCBjbWREZWYgPSAwO1xuICBsZXQga2V5ID0gMDtcbiAga2V5RGVmID0ga2V5RGVmLnRvTG93ZXJDYXNlKCk7XG4gIC8vIHRzbGludDpkaXNhYmxlOiBuby1iaXR3aXNlXG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ2N0cmwrJykpIHtcbiAgICBjbWREZWYgfD0gMTtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnY3RybCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnY21kKycpKSB7XG4gICAgY21kRGVmIHw9IDg7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2NtZCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnYWx0KycpKSB7XG4gICAgY21kRGVmIHw9IDI7XG4gICAga2V5RGVmID0ga2V5RGVmLnJlcGxhY2UoJ2FsdCsnLCAnJyk7XG4gIH1cbiAgaWYgKGtleURlZi5pbmNsdWRlcygnc2hpZnQrJykpIHtcbiAgICBjbWREZWYgfD0gNDtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnc2hpZnQrJywgJycpO1xuICB9XG4gIGlmIChrZXlEZWYuaW5jbHVkZXMoJ21ldGErJykpIHtcbiAgICBjbWREZWYgfD0gODtcbiAgICBrZXlEZWYgPSBrZXlEZWYucmVwbGFjZSgnbWV0YSsnLCAnJyk7XG4gIH1cblxuICBpZiAoa2V5RGVmID09PSAndXAnKSB7XG4gICAga2V5ID0gMzg7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnZG93bicpIHtcbiAgICBrZXkgPSA0MDtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICcrJyB8fCBrZXlEZWYgPT09ICdcIitcIicpIHtcbiAgICBrZXkgPSAxNzE7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnLScgfHwga2V5RGVmID09PSAnXCItXCInKSB7XG4gICAga2V5ID0gMTczO1xuICB9IGVsc2UgaWYgKGtleURlZiA9PT0gJ2VzYycpIHtcbiAgICBrZXkgPSAyNztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbnRlcicpIHtcbiAgICBrZXkgPSAxMztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdzcGFjZScpIHtcbiAgICBrZXkgPSAzMjtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdmNCcpIHtcbiAgICBrZXkgPSAxMTU7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnYmFja3NwYWNlJykge1xuICAgIGtleSA9IDg7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnaG9tZScpIHtcbiAgICBrZXkgPSAzNjtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdlbmQnKSB7XG4gICAga2V5ID0gMzU7XG4gIH0gZWxzZSBpZiAoa2V5RGVmID09PSAnbGVmdCcpIHtcbiAgICBrZXkgPSAzNztcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdyaWdodCcpIHtcbiAgICBrZXkgPSAzOTtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdlZG93bicpIHtcbiAgICBrZXkgPSAzNDtcbiAgfSBlbHNlIGlmIChrZXlEZWYgPT09ICdwYWdldXAnKSB7XG4gICAga2V5ID0gMzM7XG4gIH0gZWxzZSB7XG4gICAga2V5ID0ga2V5RGVmLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKTtcbiAgfVxuICBpZiAoa2V5Y29kZSA9PT0gJ1dIRUVMJykge1xuICAgIHJldHVybiBrZXlEZWYgPT09ICd3aGVlbCcgJiYgY21kID09PSBjbWREZWY7XG4gIH1cbiAgcmV0dXJuIGtleSA9PT0ga2V5Y29kZSAmJiBjbWQgPT09IGNtZERlZjtcbn1cblxuaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICh3aW5kb3cgYXMgYW55KS5pc0tleUlnbm9yZWQgPSBpc0tleUlnbm9yZWQ7XG59XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRHluYW1pY0Nzc0NvbXBvbmVudCxcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudCxcbiAgICBQZGZab29tRHJvcGRvd25Db21wb25lbnQsXG4gICAgUGRmQ29udGV4dE1lbnVDb21wb25lbnQsXG4gICAgUGRmUHJlc2VudGF0aW9uTW9kZUNvbXBvbmVudCxcbiAgICBQZGZPcGVuRmlsZUNvbXBvbmVudCxcbiAgICBQZGZQcmludENvbXBvbmVudCxcbiAgICBQZGZEb3dubG9hZENvbXBvbmVudCxcbiAgICBQZGZCb29rbWFya0NvbXBvbmVudCxcbiAgICBQZGZab29tVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZQYWdpbmdBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJDb21wb25lbnQsXG4gICAgUGRmU2lkZWJhckNvbXBvbmVudCxcbiAgICBQZGZIYW5kVG9vbENvbXBvbmVudCxcbiAgICBQZGZTZWxlY3RUb29sQ29tcG9uZW50LFxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheUNvbXBvbmVudCxcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kTmV4dENvbXBvbmVudCxcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zVHdvQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zT25lQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcbiAgICBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1RocmVlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmU3BsaXRUb29sYmFyQnV0dG9uQ29tcG9uZW50LFxuICAgIFBkZlRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmRmluZEJ1dHRvbkNvbXBvbmVudCxcbiAgICBQZGZUb2dnbGVTaWRlYmFyQ29tcG9uZW50LFxuICAgIFBkZlRvZ2dsZVNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmTGFzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmRmlyc3RQYWdlQ29tcG9uZW50LFxuICAgIFBkZk5leHRQYWdlQ29tcG9uZW50LFxuICAgIFBkZlByZXZpb3VzUGFnZUNvbXBvbmVudCxcbiAgICBQYWdlTnVtYmVyQ29tcG9uZW50LFxuICAgIFBkZlBhZ2VOdW1iZXJDb21wb25lbnQsXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcbiAgICBQZGZab29tSW5Db21wb25lbnQsXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcbiAgICBQZGZEdW1teUNvbXBvbmVudHNDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlLCBMb2NhdGlvbiwge3Byb3ZpZGU6IExvY2F0aW9uU3RyYXRlZ3ksIHVzZUNsYXNzOiBQYXRoTG9jYXRpb25TdHJhdGVneX1dLFxuICBleHBvcnRzOiBbXG4gICAgIFBkZlpvb21Ecm9wZG93bkNvbXBvbmVudCxcbiAgICBQZGZDb250ZXh0TWVudUNvbXBvbmVudCxcbiAgICBQZGZQcmVzZW50YXRpb25Nb2RlQ29tcG9uZW50LFxuICAgIFBkZk9wZW5GaWxlQ29tcG9uZW50LFxuICAgIFBkZlByaW50Q29tcG9uZW50LFxuICAgIFBkZkRvd25sb2FkQ29tcG9uZW50LFxuICAgIFBkZkJvb2ttYXJrQ29tcG9uZW50LFxuICAgIFBkZlpvb21Ub29sYmFyQ29tcG9uZW50LFxuICAgIFBkZlBhZ2luZ0FyZWFDb21wb25lbnQsXG4gICAgUGRmRmluZGJhckNvbXBvbmVudCxcbiAgICBQZGZTaWRlYmFyQ29tcG9uZW50LFxuICAgIFBkZlNlY29uZGFyeVRvb2xiYXJDb21wb25lbnQsXG4gICAgUGRmRG9jdW1lbnRQcm9wZXJ0aWVzT3ZlcmxheUNvbXBvbmVudCxcbiAgICBQZGZTZWFyY2hJbnB1dEZpZWxkQ29tcG9uZW50LFxuICAgIFBkZkZpbmRQcmV2aW91c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kTmV4dENvbXBvbmVudCxcbiAgICBQZGZGaW5kSW5wdXRBcmVhQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zVHdvQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRiYXJPcHRpb25zT25lQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRNYXRjaENhc2VDb21wb25lbnQsXG4gICAgUGRmRmluZEhpZ2hsaWdodEFsbENvbXBvbmVudCxcbiAgICBQZGZGaW5kRW50aXJlV29yZENvbXBvbmVudCxcbiAgICBQZGZGaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kSWdub3JlQWNjZW50c0NvbXBvbmVudCxcbiAgICBQZGZGaW5kYmFyT3B0aW9uc1RocmVlQ29udGFpbmVyQ29tcG9uZW50LFxuICAgIFBkZkZpbmRSZXN1bHRzQ291bnRDb21wb25lbnQsXG4gICAgUGRmRmluZGJhck1lc3NhZ2VDb250YWluZXJDb21wb25lbnQsXG4gICAgUGRmUm90YXRlUGFnZUNvbXBvbmVudCxcbiAgICBQZGZTcGxpdFRvb2xiYXJCdXR0b25Db21wb25lbnQsXG4gICAgUGRmVG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZGaW5kQnV0dG9uQ29tcG9uZW50LFxuICAgIFBkZlRvZ2dsZVNpZGViYXJDb21wb25lbnQsXG4gICAgUGRmVG9nZ2xlU2Vjb25kYXJ5VG9vbGJhckNvbXBvbmVudCxcbiAgICBQZGZMYXN0UGFnZUNvbXBvbmVudCxcbiAgICBQZGZGaXJzdFBhZ2VDb21wb25lbnQsXG4gICAgUGRmTmV4dFBhZ2VDb21wb25lbnQsXG4gICAgUGRmUHJldmlvdXNQYWdlQ29tcG9uZW50LFxuICAgIFBhZ2VOdW1iZXJDb21wb25lbnQsXG4gICAgUGRmUGFnZU51bWJlckNvbXBvbmVudCxcbiAgICBQZGZab29tSW5Db21wb25lbnQsXG4gICAgUGRmWm9vbU91dENvbXBvbmVudCxcbiAgICBOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neEV4dGVuZGVkUGRmVmlld2VyTW9kdWxlIHtcbiAgY29uc3RydWN0b3IoKSB7fVxufVxuIl19