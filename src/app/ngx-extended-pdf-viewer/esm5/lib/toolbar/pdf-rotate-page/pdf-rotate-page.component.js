/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PDFNotificationService } from './../../pdf-notification-service';
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
var PdfRotatePageComponent = /** @class */ (function () {
    function PdfRotatePageComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.showRotateButton = true;
        this.disableRotate = true;
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
    PdfRotatePageComponent.prototype.rotateCW = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotatecw');
    };
    /**
     * @return {?}
     */
    PdfRotatePageComponent.prototype.rotateCCW = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('rotateccw');
    };
    /**
     * @return {?}
     */
    PdfRotatePageComponent.prototype.onPdfJsInit = /**
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
    PdfRotatePageComponent.prototype.updateUIState = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.disableRotate = event.pagesCount === 0;
        this.button1.nativeElement.disabled = this.disableRotate;
        this.button2.nativeElement.disabled = this.disableRotate;
    };
    PdfRotatePageComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-rotate-page',
                    template: "<button\n  (click)=\"rotateCW()\"\n  type=\"button\"\n  [class.invisible]=\"!showRotateButton\"\n  id=\"primaryPageRotateCw\"\n  class=\"toolbarButton hiddenXLView rotateCw\"\n  title=\"Rotate Clockwise\"\n  data-l10n-id=\"page_rotate_cw\"\n  [disabled]=\"disableRotate\"\n  #button1>\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12S7.03 21 12 21C14 21 15.92 20.34 17.5 19.14L16.06 17.7C14.87 18.54 13.45 19 12 19C8.13 19 5 15.87 5 12S8.13 5 12 5 19 8.13 19 12H16L20 16L24 12H21C21 7.03 16.97 3 12 3\" />\n    </svg>\n</button>\n<button\n  (click)=\"rotateCCW()\"\n  type=\"button\"\n  [class.invisible]=\"!showRotateButton\"\n  id=\"primaryPageRotateCcw\"\n  class=\"toolbarButton hiddenXLView rotateCcw\"\n  title=\"Rotate Counterclockwise\"\n  data-l10n-id=\"page_rotate_ccw\"\n  [disabled]=\"disableRotate\"\n  #button2>\n    <svg style=\"width:23px;height:23px\" viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M12 3C7.03 3 3 7.03 3 12H0L4 16L8 12H5C5 8.13 8.13 5 12 5S19 8.13 19 12 15.87 19 12 19C10.55 19 9.13 18.54 7.94 17.7L6.5 19.14C8.08 20.34 10 21 12 21C16.97 21 21 16.97 21 12S16.97 3 12 3\" />\n    </svg>\n</button>\n",
                    styles: [":host{margin-top:-1px}:host:focus{outline:0}button:focus,svg:focus{outline:0}"]
                }] }
    ];
    /** @nocollapse */
    PdfRotatePageComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfRotatePageComponent.propDecorators = {
        showRotateButton: [{ type: Input }],
        button1: [{ type: ViewChild, args: ['button1',] }],
        button2: [{ type: ViewChild, args: ['button2',] }]
    };
    return PdfRotatePageComponent;
}());
export { PdfRotatePageComponent };
if (false) {
    /** @type {?} */
    PdfRotatePageComponent.prototype.showRotateButton;
    /** @type {?} */
    PdfRotatePageComponent.prototype.disableRotate;
    /**
     * @type {?}
     * @private
     */
    PdfRotatePageComponent.prototype.button1;
    /**
     * @type {?}
     * @private
     */
    PdfRotatePageComponent.prototype.button2;
    /**
     * @type {?}
     * @private
     */
    PdfRotatePageComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvcGRmLXJvdGF0ZS1wYWdlL3BkZi1yb3RhdGUtcGFnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJeEU7SUFpQkUsZ0NBQW9CLG1CQUEyQztRQUEvRCxpQkFLQztRQUxtQix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBVnhELHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUV4QixrQkFBYSxHQUFHLElBQUksQ0FBQzs7WUFTcEIsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUzs7O1FBQUM7WUFDbEUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUM7SUFDSixDQUFDOzs7O0lBRU0seUNBQVE7OztJQUFmOztZQUNRLG9CQUFvQixHQUEwQixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsb0JBQW9CO1FBQ3hGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDckQsQ0FBQzs7OztJQUVNLDBDQUFTOzs7SUFBaEI7O1lBQ1Esb0JBQW9CLEdBQTBCLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxvQkFBb0I7UUFDeEYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUN0RCxDQUFDOzs7O0lBR00sNENBQVc7OztJQUFsQjtRQUFBLGlCQUdDOztZQUZPLG9CQUFvQixHQUEwQixDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsb0JBQW9CO1FBQ3hGLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZTs7OztRQUFFLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsRUFBekIsQ0FBeUIsRUFBQyxDQUFDO0lBQzFGLENBQUM7Ozs7O0lBRU0sOENBQWE7Ozs7SUFBcEIsVUFBcUIsS0FBeUI7UUFDNUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN6RCxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUMzRCxDQUFDOztnQkE1Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHd0Q0FBK0M7O2lCQUVoRDs7OztnQkFUUSxzQkFBc0I7OzttQ0FXNUIsS0FBSzswQkFLTCxTQUFTLFNBQUMsU0FBUzswQkFHbkIsU0FBUyxTQUFDLFNBQVM7O0lBK0J0Qiw2QkFBQztDQUFBLEFBN0NELElBNkNDO1NBeENZLHNCQUFzQjs7O0lBQ2pDLGtEQUMrQjs7SUFFL0IsK0NBQTRCOzs7OztJQUU1Qix5Q0FDK0M7Ozs7O0lBRS9DLHlDQUMrQzs7Ozs7SUFFbkMscURBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUERGTm90aWZpY2F0aW9uU2VydmljZSB9IGZyb20gJy4vLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFVwZGF0ZVVJU3RhdGVFdmVudCB9IGZyb20gJy4uLy4uL2V2ZW50cy91cGRhdGUtdWktc3RhdGUtZXZlbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtcm90YXRlLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXJvdGF0ZS1wYWdlLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZGZSb3RhdGVQYWdlQ29tcG9uZW50ICB7XG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Um90YXRlQnV0dG9uID0gdHJ1ZTtcblxuICBwdWJsaWMgZGlzYWJsZVJvdGF0ZSA9IHRydWU7XG5cbiAgQFZpZXdDaGlsZCgnYnV0dG9uMScpXG4gIHByaXZhdGUgYnV0dG9uMTogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD47XG5cbiAgQFZpZXdDaGlsZCgnYnV0dG9uMicpXG4gIHByaXZhdGUgYnV0dG9uMjogRWxlbWVudFJlZjxIVE1MQnV0dG9uRWxlbWVudD47XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyByb3RhdGVDVygpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdyb3RhdGVjdycpO1xuICB9XG5cbiAgcHVibGljIHJvdGF0ZUNDVygpOiB2b2lkIHtcbiAgICBjb25zdCBQREZWaWV3ZXJBcHBsaWNhdGlvbjogSVBERlZpZXdlckFwcGxpY2F0aW9uID0gKHdpbmRvdyBhcyBhbnkpLlBERlZpZXdlckFwcGxpY2F0aW9uO1xuICAgIFBERlZpZXdlckFwcGxpY2F0aW9uLmV2ZW50QnVzLmRpc3BhdGNoKCdyb3RhdGVjY3cnKTtcbiAgfVxuXG5cbiAgcHVibGljIG9uUGRmSnNJbml0KCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ3VwZGF0ZXVpc3RhdGUnLCAoZXZlbnQpID0+IHRoaXMudXBkYXRlVUlTdGF0ZShldmVudCkpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZVVJU3RhdGUoZXZlbnQ6IFVwZGF0ZVVJU3RhdGVFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZVJvdGF0ZSA9IGV2ZW50LnBhZ2VzQ291bnQgPT09IDA7XG4gICAgdGhpcy5idXR0b24xLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVSb3RhdGU7XG4gICAgdGhpcy5idXR0b24yLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0aGlzLmRpc2FibGVSb3RhdGU7XG4gIH1cbn1cbiJdfQ==