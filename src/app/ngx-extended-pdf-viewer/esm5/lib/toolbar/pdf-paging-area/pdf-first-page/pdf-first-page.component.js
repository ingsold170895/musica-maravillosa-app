/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PDFNotificationService } from './../../../pdf-notification-service';
import { Component, ViewChild, ElementRef } from '@angular/core';
var PdfFirstPageComponent = /** @class */ (function () {
    function PdfFirstPageComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.disableFirstPage = true;
        /** @type {?} */
        var subscription = this.notificationService.onPDFJSInit.subscribe((/**
         * @return {?}
         */
        function () {
            _this.onPdfJsInit();
            subscription.unsubscribe();
        }));
    }
    /**
     * @return {?}
     */
    PdfFirstPageComponent.prototype.firstPage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('firstpage');
    };
    /**
     * @return {?}
     */
    PdfFirstPageComponent.prototype.onPdfJsInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('updateuistate', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.updateUIState(event); }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PdfFirstPageComponent.prototype.updateUIState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.disableFirstPage = event.pageNumber <= 1;
        this.button.nativeElement.disabled = this.disableFirstPage;
    };
    PdfFirstPageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-first-page',
                    template: "<button type=\"button\"\n  class=\"toolbarButton hiddenLargeView\"\n  title=\"First page\"\n  id=\"primaryFirstPage\"\n  data-l10n-id=\"first_page\"\n  (click)=\"firstPage()\"\n  [disabled]=\"disableFirstPage\"\n  #button\n  >\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z\" />\n  </svg>\n  <span data-l10n-id=\"first_page_label\">First page</span>\n</button>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    PdfFirstPageComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfFirstPageComponent.propDecorators = {
        button: [{ type: ViewChild, args: ['button',] }]
    };
    return PdfFirstPageComponent;
}());
export { PdfFirstPageComponent };
if (false) {
    /** @type {?} */
    PdfFirstPageComponent.prototype.disableFirstPage;
    /**
     * @type {?}
     * @private
     */
    PdfFirstPageComponent.prototype.button;
    /**
     * @type {?}
     * @private
     */
    PdfFirstPageComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdG9vbGJhci9wZGYtcGFnaW5nLWFyZWEvcGRmLWZpcnN0LXBhZ2UvcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJaEU7SUFXRSwrQkFBb0IsbUJBQTJDO1FBQS9ELGlCQUtDO1FBTG1CLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBd0I7UUFMeEQscUJBQWdCLEdBQUcsSUFBSSxDQUFDOztZQU12QixZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7UUFBQztZQUNsRSxLQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdCLENBQUMsRUFBQztJQUNKLENBQUM7Ozs7SUFFTSx5Q0FBUzs7O0lBQWhCOztZQUNRLG9CQUFvQixHQUEwQixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsb0JBQW9CO1FBQ3hGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7OztJQUVNLDJDQUFXOzs7SUFBbEI7UUFBQSxpQkFHQzs7WUFGTyxvQkFBb0IsR0FBMEIsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQjtRQUN4RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWU7Ozs7UUFBRSxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEVBQXpCLENBQXlCLEVBQUMsQ0FBQztJQUMxRixDQUFDOzs7OztJQUVNLDZDQUFhOzs7O0lBQXBCLFVBQXFCLEtBQXlCO1FBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO0lBQzdELENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsd2ZBQThDOztpQkFFL0M7Ozs7Z0JBVFEsc0JBQXNCOzs7eUJBYTVCLFNBQVMsU0FBQyxRQUFROztJQXdCckIsNEJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTNCWSxxQkFBcUI7OztJQUNoQyxpREFBK0I7Ozs7O0lBRS9CLHVDQUM4Qzs7Ozs7SUFFbEMsb0RBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgVmlld0NoaWxkLCBFbGVtZW50UmVmfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBVcGRhdGVVSVN0YXRlRXZlbnQgfSBmcm9tICcuLi8uLi8uLi9ldmVudHMvdXBkYXRlLXVpLXN0YXRlLWV2ZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWZpcnN0LXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWZpcnN0LXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGRmRmlyc3RQYWdlQ29tcG9uZW50IHtcbiAgcHVibGljIGRpc2FibGVGaXJzdFBhZ2UgPSB0cnVlO1xuXG4gIEBWaWV3Q2hpbGQoJ2J1dHRvbicpXG4gIHByaXZhdGUgYnV0dG9uOiBFbGVtZW50UmVmPEhUTUxCdXR0b25FbGVtZW50PjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG5vdGlmaWNhdGlvblNlcnZpY2U6IFBERk5vdGlmaWNhdGlvblNlcnZpY2UpIHtcbiAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLm5vdGlmaWNhdGlvblNlcnZpY2Uub25QREZKU0luaXQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMub25QZGZKc0luaXQoKTtcbiAgICAgIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgcHVibGljIGZpcnN0UGFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdmaXJzdHBhZ2UnKTtcbiAgfVxuXG4gIHB1YmxpYyBvblBkZkpzSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLm9uKCd1cGRhdGV1aXN0YXRlJywgKGV2ZW50KSA9PiB0aGlzLnVwZGF0ZVVJU3RhdGUoZXZlbnQpKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVVSVN0YXRlKGV2ZW50OiBVcGRhdGVVSVN0YXRlRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmRpc2FibGVGaXJzdFBhZ2UgPSBldmVudC5wYWdlTnVtYmVyIDw9IDE7XG4gICAgdGhpcy5idXR0b24ubmF0aXZlRWxlbWVudC5kaXNhYmxlZCA9IHRoaXMuZGlzYWJsZUZpcnN0UGFnZTtcbiAgfVxufVxuIl19