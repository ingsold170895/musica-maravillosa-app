/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { NgxExtendedPdfViewerComponent } from './ngx-extended-pdf-viewer.component';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * @record
 */
export function FindOptions() { }
if (false) {
    /** @type {?|undefined} */
    FindOptions.prototype.highlightAll;
    /** @type {?|undefined} */
    FindOptions.prototype.matchCase;
    /** @type {?|undefined} */
    FindOptions.prototype.wholeWords;
    /** @type {?|undefined} */
    FindOptions.prototype.ignoreAccents;
    /** @type {?|undefined} */
    FindOptions.prototype.findMultipleSearchTexts;
}
var NgxExtendedPdfViewerService = /** @class */ (function () {
    function NgxExtendedPdfViewerService() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
    }
    /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.findMultiple = /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    function (text, options) {
        if (options === void 0) { options = {}; }
        options = tslib_1.__assign({}, options, { findMultipleSearchTexts: true });
        /** @type {?} */
        var searchString = text.join('\n') + '\n';
        return this.find(searchString, options);
    };
    /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.find = /**
     * @param {?} text
     * @param {?=} options
     * @return {?}
     */
    function (text, options) {
        if (options === void 0) { options = {}; }
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call find() later.");
            return false;
        }
        else {
            /** @type {?} */
            var highlightAllCheckbox = (/** @type {?} */ (document.getElementById('findHighlightAll')));
            if (highlightAllCheckbox) {
                highlightAllCheckbox.checked = options.highlightAll || false;
            }
            /** @type {?} */
            var matchCaseCheckbox = (/** @type {?} */ (document.getElementById('findMatchCase')));
            if (matchCaseCheckbox) {
                matchCaseCheckbox.checked = options.matchCase || false;
            }
            /** @type {?} */
            var entireWordCheckbox = (/** @type {?} */ (document.getElementById('findEntireWord')));
            if (entireWordCheckbox) {
                entireWordCheckbox.checked = options.wholeWords || false;
            }
            /** @type {?} */
            var findIgnoreAccentsCheckbox = (/** @type {?} */ (document.getElementById('findIgnoreAccents')));
            if (findIgnoreAccentsCheckbox) {
                findIgnoreAccentsCheckbox.checked = options.ignoreAccents || false;
            }
            /** @type {?} */
            var multipleSearchTerms = options.findMultipleSearchTexts || text.includes('\n') || false;
            /** @type {?} */
            var findMultipleSearchTextsCheckbox = (/** @type {?} */ (document.getElementById('findMultipleSearchTexts')));
            if (findMultipleSearchTextsCheckbox) {
                findMultipleSearchTextsCheckbox.checked = multipleSearchTerms;
            }
            /** @type {?} */
            var individualWordsModeCheckbox = (/** @type {?} */ (document.getElementById('individualWordsMode')));
            if (individualWordsModeCheckbox) {
                individualWordsModeCheckbox.checked = false;
            }
            /** @type {?} */
            var inputField = multipleSearchTerms ? document.getElementById('findInputMultiline') : document.getElementById('findInput');
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
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.findNext = /**
     * @return {?}
     */
    function () {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findNext() later.");
            return false;
        }
        else {
            /** @type {?} */
            var button = document.getElementById('findNext');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    };
    /**
     * @return {?}
     */
    NgxExtendedPdfViewerService.prototype.findPrevious = /**
     * @return {?}
     */
    function () {
        if (!NgxExtendedPdfViewerComponent.ngxExtendedPdfViewerInitialized) {
            // tslint:disable-next-line:quotemark
            console.error("The PDF viewer hasn't finished initializing. Please call findPrevious() later.");
            return false;
        }
        else {
            /** @type {?} */
            var button = document.getElementById('findPrevious');
            if (button) {
                button.click();
                return true;
            }
            return false;
        }
    };
    NgxExtendedPdfViewerService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NgxExtendedPdfViewerService.ctorParameters = function () { return []; };
    /** @nocollapse */ NgxExtendedPdfViewerService.ngInjectableDef = i0.defineInjectable({ factory: function NgxExtendedPdfViewerService_Factory() { return new NgxExtendedPdfViewerService(); }, token: NgxExtendedPdfViewerService, providedIn: "root" });
    return NgxExtendedPdfViewerService;
}());
export { NgxExtendedPdfViewerService };
if (false) {
    /** @type {?} */
    NgxExtendedPdfViewerService.prototype.onPDFJSInit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL25neC1leHRlbmRlZC1wZGYtdmlld2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSw2QkFBNkIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7Ozs7O0FBRS9CLGlDQU1DOzs7SUFMQyxtQ0FBdUI7O0lBQ3ZCLGdDQUFvQjs7SUFDcEIsaUNBQXFCOztJQUNyQixvQ0FBd0I7O0lBQ3hCLDhDQUFrQzs7QUFHcEM7SUFPRTs7UUFGTyxnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUFFMUIsQ0FBQzs7Ozs7O0lBRVQsa0RBQVk7Ozs7O0lBQW5CLFVBQW9CLElBQW1CLEVBQUUsT0FBeUI7UUFBekIsd0JBQUEsRUFBQSxZQUF5QjtRQUNoRSxPQUFPLHdCQUNGLE9BQU8sSUFDVix1QkFBdUIsRUFBRSxJQUFJLEdBQzlCLENBQUM7O1lBQ0ksWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSTtRQUMzQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVNLDBDQUFJOzs7OztJQUFYLFVBQVksSUFBWSxFQUFFLE9BQXlCO1FBQXpCLHdCQUFBLEVBQUEsWUFBeUI7UUFDakQsSUFBSSxDQUFDLDZCQUE2QixDQUFDLCtCQUErQixFQUFFO1lBQ2xFLHFDQUFxQztZQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUM7WUFDeEYsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNOztnQkFDQyxvQkFBb0IsR0FBRyxtQkFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLEVBQW9CO1lBQzVGLElBQUksb0JBQW9CLEVBQUU7Z0JBQ3hCLG9CQUFvQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLEtBQUssQ0FBQzthQUM5RDs7Z0JBQ0ssaUJBQWlCLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUMsRUFBb0I7WUFDdEYsSUFBSSxpQkFBaUIsRUFBRTtnQkFDckIsaUJBQWlCLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDO2FBQ3hEOztnQkFDSyxrQkFBa0IsR0FBRyxtQkFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLGdCQUFnQixDQUFDLEVBQW9CO1lBQ3hGLElBQUksa0JBQWtCLEVBQUU7Z0JBQ3RCLGtCQUFrQixDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQzthQUMxRDs7Z0JBQ0sseUJBQXlCLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxFQUFvQjtZQUNsRyxJQUFJLHlCQUF5QixFQUFFO2dCQUM3Qix5QkFBeUIsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLGFBQWEsSUFBSSxLQUFLLENBQUM7YUFDcEU7O2dCQUNLLG1CQUFtQixHQUFHLE9BQU8sQ0FBQyx1QkFBdUIsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUs7O2dCQUNyRiwrQkFBK0IsR0FBRyxtQkFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLHlCQUF5QixDQUFDLEVBQW9CO1lBQzlHLElBQUksK0JBQStCLEVBQUU7Z0JBQ25DLCtCQUErQixDQUFDLE9BQU8sR0FBRyxtQkFBbUIsQ0FBQzthQUMvRDs7Z0JBQ0ssMkJBQTJCLEdBQUcsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFvQjtZQUN0RyxJQUFJLDJCQUEyQixFQUFFO2dCQUMvQiwyQkFBMkIsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO2FBQzdDOztnQkFFSyxVQUFVLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUM7WUFDN0gsSUFBSSxVQUFVLEVBQUU7Z0JBQ2QsSUFBSSxVQUFVLFlBQVksbUJBQW1CLEVBQUU7b0JBQzdDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO29CQUV4QixtQkFBbUI7b0JBQ25CLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0QyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsV0FBVyxDQUFDLEVBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNuRixDQUFDLG1CQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsMEJBQTBCLENBQUMsRUFBb0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JHLENBQUMsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDaEcsd0JBQXdCO2lCQUN6QjtxQkFBTSxJQUFJLFVBQVUsWUFBWSxnQkFBZ0IsRUFBRTtvQkFDakQsVUFBVSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ3hCLG1CQUFtQjtvQkFDbkIsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsbUJBQUEsUUFBUSxDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFvQixDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDNUYsQ0FBQyxtQkFBQSxRQUFRLENBQUMsY0FBYyxDQUFDLDBCQUEwQixDQUFDLEVBQW9CLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUNsRyxDQUFDLG1CQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMscUJBQXFCLENBQUMsRUFBb0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzdGLHdCQUF3QjtpQkFDekI7Z0JBQ0QsVUFBVSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxPQUFPLElBQUksQ0FBQzthQUNiO2lCQUFNO2dCQUNMLHFDQUFxQztnQkFDckMsT0FBTyxDQUFDLEtBQUssQ0FBQyx5RUFBeUUsQ0FBQyxDQUFDO2dCQUN6RixPQUFPLEtBQUssQ0FBQzthQUNkO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRU0sOENBQVE7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLDZCQUE2QixDQUFDLCtCQUErQixFQUFFO1lBQ2xFLHFDQUFxQztZQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLDRFQUE0RSxDQUFDLENBQUM7WUFDNUYsT0FBTyxLQUFLLENBQUM7U0FDZDthQUFNOztnQkFDQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUM7WUFDbEQsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNmLE9BQU8sSUFBSSxDQUFDO2FBQ2I7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNkO0lBQ0gsQ0FBQzs7OztJQUVNLGtEQUFZOzs7SUFBbkI7UUFDRSxJQUFJLENBQUMsNkJBQTZCLENBQUMsK0JBQStCLEVBQUU7WUFDbEUscUNBQXFDO1lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0ZBQWdGLENBQUMsQ0FBQztZQUNoRyxPQUFPLEtBQUssQ0FBQztTQUNkO2FBQU07O2dCQUNDLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLGNBQWMsQ0FBQztZQUN0RCxJQUFJLE1BQU0sRUFBRTtnQkFDVixNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2YsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDOztnQkE1R0YsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7c0NBZEQ7Q0F5SEMsQUE3R0QsSUE2R0M7U0ExR1ksMkJBQTJCOzs7SUFFdEMsa0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJDb21wb25lbnQgfSBmcm9tICcuL25neC1leHRlbmRlZC1wZGYtdmlld2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmluZE9wdGlvbnMge1xuICBoaWdobGlnaHRBbGw/OiBib29sZWFuO1xuICBtYXRjaENhc2U/OiBib29sZWFuO1xuICB3aG9sZVdvcmRzPzogYm9vbGVhbjtcbiAgaWdub3JlQWNjZW50cz86IGJvb2xlYW47XG4gIGZpbmRNdWx0aXBsZVNlYXJjaFRleHRzPzogYm9vbGVhbjtcbn1cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4RXh0ZW5kZWRQZGZWaWV3ZXJTZXJ2aWNlIHtcbiAgLy8gdGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwZGYuanMgbGlicmFyeSBoYXMgYmVlbiBsb2FkZWQgYW5kIG9iamVjdHMgbGlrZSBQREZBcHBsaWNhdGlvbiBhcmUgYXZhaWxhYmxlXG4gIHB1YmxpYyBvblBERkpTSW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIHB1YmxpYyBmaW5kTXVsdGlwbGUodGV4dDogQXJyYXk8c3RyaW5nPiwgb3B0aW9uczogRmluZE9wdGlvbnMgPSB7fSk6IGJvb2xlYW4ge1xuICAgIG9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgZmluZE11bHRpcGxlU2VhcmNoVGV4dHM6IHRydWVcbiAgICB9O1xuICAgIGNvbnN0IHNlYXJjaFN0cmluZyA9IHRleHQuam9pbignXFxuJykgKyAnXFxuJztcbiAgICByZXR1cm4gdGhpcy5maW5kKHNlYXJjaFN0cmluZywgb3B0aW9ucyk7XG4gIH1cblxuICBwdWJsaWMgZmluZCh0ZXh0OiBzdHJpbmcsIG9wdGlvbnM6IEZpbmRPcHRpb25zID0ge30pOiBib29sZWFuIHtcbiAgICBpZiAoIU5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgUERGIHZpZXdlciBoYXNuJ3QgZmluaXNoZWQgaW5pdGlhbGl6aW5nLiBQbGVhc2UgY2FsbCBmaW5kKCkgbGF0ZXIuXCIpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBoaWdobGlnaHRBbGxDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kSGlnaGxpZ2h0QWxsJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmIChoaWdobGlnaHRBbGxDaGVja2JveCkge1xuICAgICAgICBoaWdobGlnaHRBbGxDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5oaWdobGlnaHRBbGwgfHwgZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBtYXRjaENhc2VDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kTWF0Y2hDYXNlJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmIChtYXRjaENhc2VDaGVja2JveCkge1xuICAgICAgICBtYXRjaENhc2VDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5tYXRjaENhc2UgfHwgZmFsc2U7XG4gICAgICB9XG4gICAgICBjb25zdCBlbnRpcmVXb3JkQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZEVudGlyZVdvcmQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGVudGlyZVdvcmRDaGVja2JveCkge1xuICAgICAgICBlbnRpcmVXb3JkQ2hlY2tib3guY2hlY2tlZCA9IG9wdGlvbnMud2hvbGVXb3JkcyB8fCBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGZpbmRJZ25vcmVBY2NlbnRzQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmluZElnbm9yZUFjY2VudHMnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGZpbmRJZ25vcmVBY2NlbnRzQ2hlY2tib3gpIHtcbiAgICAgICAgZmluZElnbm9yZUFjY2VudHNDaGVja2JveC5jaGVja2VkID0gb3B0aW9ucy5pZ25vcmVBY2NlbnRzIHx8IGZhbHNlO1xuICAgICAgfVxuICAgICAgY29uc3QgbXVsdGlwbGVTZWFyY2hUZXJtcyA9IG9wdGlvbnMuZmluZE11bHRpcGxlU2VhcmNoVGV4dHMgfHwgdGV4dC5pbmNsdWRlcygnXFxuJykgfHwgZmFsc2U7XG4gICAgICBjb25zdCBmaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRNdWx0aXBsZVNlYXJjaFRleHRzJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICAgIGlmIChmaW5kTXVsdGlwbGVTZWFyY2hUZXh0c0NoZWNrYm94KSB7XG4gICAgICAgIGZpbmRNdWx0aXBsZVNlYXJjaFRleHRzQ2hlY2tib3guY2hlY2tlZCA9IG11bHRpcGxlU2VhcmNoVGVybXM7XG4gICAgICB9XG4gICAgICBjb25zdCBpbmRpdmlkdWFsV29yZHNNb2RlQ2hlY2tib3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAoaW5kaXZpZHVhbFdvcmRzTW9kZUNoZWNrYm94KSB7XG4gICAgICAgIGluZGl2aWR1YWxXb3Jkc01vZGVDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGlucHV0RmllbGQgPSBtdWx0aXBsZVNlYXJjaFRlcm1zID8gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dE11bHRpbGluZScpIDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dCcpO1xuICAgICAgaWYgKGlucHV0RmllbGQpIHtcbiAgICAgICAgaWYgKGlucHV0RmllbGQgaW5zdGFuY2VvZiBIVE1MVGV4dEFyZWFFbGVtZW50KSB7XG4gICAgICAgICAgaW5wdXRGaWVsZC52YWx1ZSA9IHRleHQ7XG5cbiAgICAgICAgICAvLyB0b2RvIGRpcnR5IGhhY2shXG4gICAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dCcpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZUxhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRpdmlkdWFsV29yZHNNb2RlJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgLy8gZW5kIG9mIHRoZSBkaXJ0eSBoYWNrXG4gICAgICAgIH0gZWxzZSBpZiAoaW5wdXRGaWVsZCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpIHtcbiAgICAgICAgICBpbnB1dEZpZWxkLnZhbHVlID0gdGV4dDtcbiAgICAgICAgICAvLyB0b2RvIGRpcnR5IGhhY2shXG4gICAgICAgICAgaW5wdXRGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpbmRJbnB1dE11bHRpbGluZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5kaXZpZHVhbFdvcmRzTW9kZUxhYmVsJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmRpdmlkdWFsV29yZHNNb2RlJykgYXMgSFRNTElucHV0RWxlbWVudCkuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgLy8gZW5kIG9mIHRoZSBkaXJ0eSBoYWNrXG4gICAgICAgIH1cbiAgICAgICAgaW5wdXRGaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOnF1b3RlbWFya1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5leHBlY3RlZCBlcnJvcjogdGhlIGlucHV0IGZpZWxkIHVzZWQgdG8gc2VhcmNoIGlzbid0IHBhcnQgb2YgdGhlIERPTS5cIik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZmluZE5leHQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCFOZ3hFeHRlbmRlZFBkZlZpZXdlckNvbXBvbmVudC5uZ3hFeHRlbmRlZFBkZlZpZXdlckluaXRpYWxpemVkKSB7XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6cXVvdGVtYXJrXG4gICAgICBjb25zb2xlLmVycm9yKFwiVGhlIFBERiB2aWV3ZXIgaGFzbid0IGZpbmlzaGVkIGluaXRpYWxpemluZy4gUGxlYXNlIGNhbGwgZmluZE5leHQoKSBsYXRlci5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kTmV4dCcpO1xuICAgICAgaWYgKGJ1dHRvbikge1xuICAgICAgICBidXR0b24uY2xpY2soKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGZpbmRQcmV2aW91cygpOiBib29sZWFuIHtcbiAgICBpZiAoIU5neEV4dGVuZGVkUGRmVmlld2VyQ29tcG9uZW50Lm5neEV4dGVuZGVkUGRmVmlld2VySW5pdGlhbGl6ZWQpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpxdW90ZW1hcmtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJUaGUgUERGIHZpZXdlciBoYXNuJ3QgZmluaXNoZWQgaW5pdGlhbGl6aW5nLiBQbGVhc2UgY2FsbCBmaW5kUHJldmlvdXMoKSBsYXRlci5cIik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaW5kUHJldmlvdXMnKTtcbiAgICAgIGlmIChidXR0b24pIHtcbiAgICAgICAgYnV0dG9uLmNsaWNrKCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuIl19