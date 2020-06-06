/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PDFNotificationService } from './../../../pdf-notification-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
export class PdfLastPageComponent {
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
if (false) {
    /** @type {?} */
    PdfLastPageComponent.prototype.disableLastPage;
    /**
     * @type {?}
     * @private
     */
    PdfLastPageComponent.prototype.button;
    /**
     * @type {?}
     * @private
     */
    PdfLastPageComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWxhc3QtcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3BkZi1wYWdpbmctYXJlYS9wZGYtbGFzdC1wYWdlL3BkZi1sYXN0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTakUsTUFBTSxPQUFPLG9CQUFvQjs7OztJQU0vQixZQUFvQixtQkFBMkM7UUFBM0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUx4RCxvQkFBZSxHQUFHLElBQUksQ0FBQzs7Y0FNdEIsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDN0IsQ0FBQyxFQUFDO0lBQ0osQ0FBQzs7OztJQUVNLFNBQVM7O2NBQ1Isb0JBQW9CLEdBQTBCLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxvQkFBb0I7UUFDeEYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBRU0sV0FBVzs7Y0FDVixvQkFBb0IsR0FBMEIsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQjtRQUN4RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUN4RixDQUFDOzs7OztJQUVNLGFBQWEsQ0FBQyxLQUF5QjtRQUM1QyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLFVBQVUsQ0FBQztRQUM3RCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM1RCxDQUFDOzs7O0lBRU0sUUFBUTs7Y0FDUCxvQkFBb0IsR0FBMEIsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQjtRQUN4RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3JELENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDhlQUE2Qzs7YUFFOUM7Ozs7WUFUUSxzQkFBc0I7OztxQkFhNUIsU0FBUyxTQUFDLFFBQVE7Ozs7SUFGbkIsK0NBQThCOzs7OztJQUU5QixzQ0FDOEM7Ozs7O0lBRWxDLG1EQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLy4uLy4uLy4uL3BkZi1ub3RpZmljYXRpb24tc2VydmljZSc7XG5pbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFVwZGF0ZVVJU3RhdGVFdmVudCB9IGZyb20gJy4uLy4uLy4uL2V2ZW50cy91cGRhdGUtdWktc3RhdGUtZXZlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtbGFzdC1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1sYXN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtbGFzdC1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZGZMYXN0UGFnZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBkaXNhYmxlTGFzdFBhZ2UgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicpXG4gIHByaXZhdGUgYnV0dG9uOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpcnN0UGFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdmaXJzdHBhZ2UnKTtcbiAgfVxuXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGV1aXN0YXRlJywgZXZlbnQgPT4gdGhpcy51cGRhdGVVSVN0YXRlKGV2ZW50KSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlVUlTdGF0ZShldmVudDogVXBkYXRlVUlTdGF0ZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlTGFzdFBhZ2UgPSBldmVudC5wYWdlTnVtYmVyID09PSBldmVudC5wYWdlc0NvdW50O1xuICAgIHRoaXMuYnV0dG9uLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVMYXN0UGFnZTtcbiAgfVxuXG4gIHB1YmxpYyBsYXN0UGFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdsYXN0cGFnZScpO1xuICB9XG59XG4iXX0=