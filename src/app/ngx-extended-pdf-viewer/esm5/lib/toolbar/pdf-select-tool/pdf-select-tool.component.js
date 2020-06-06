/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PdfCursorTools } from './../../options/pdf-cursor-tools';
import { Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
var PdfSelectToolComponent = /** @class */ (function () {
    function PdfSelectToolComponent(notificationService) {
        var _this = this;
        this.notificationService = notificationService;
        this.showSelectToolButton = true;
        this.isSelected = true;
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
     * @private
     * @return {?}
     */
    PdfSelectToolComponent.prototype.onPdfJsInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.on('cursortoolchanged', (/**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var tool = _a.tool;
            return (_this.isSelected = tool === PdfCursorTools.SELECT);
        }));
    };
    /**
     * @return {?}
     */
    PdfSelectToolComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var PDFViewerApplication = ((/** @type {?} */ (window))).PDFViewerApplication;
        PDFViewerApplication.eventBus.dispatch('switchcursortool', { tool: PdfCursorTools.SELECT });
    };
    PdfSelectToolComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-select-tool',
                    template: "<button\n  (click)=\"onClick()\"\n  type=\"button\"\n  [class.invisible]=\"!showSelectToolButton\"\n  [class.toggled]=\"isSelected\"\n  id=\"primaryCursorSelectTool\"\n  class=\"toolbarButton hiddenXXLView\"\n  title=\"Enable text selection tool\"\n  data-l10n-id=\"cursor_text_select_tool\">\n  <svg style=\"width:22px;height:22px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M2 4C2 2.89 2.9 2 4 2H7V4H4V7H2V4M22 4V7H20V4H17V2H20C21.1 2 22 2.89 22 4M2 20V17H4V20H7V22H4C2.9 22 2 21.11 2 20M10 2H14V4H10V2M10 20H14V22H10V20M2 10H4V14H2V10M18.5 13C20.4 13 22 14.6 22 16.5C22 19.1 18.5 23 18.5 23C18.5 23 15 19.1 15 16.5C15 14.6 16.6 13 18.5 13M18.5 17.8C19.2 17.8 19.8 17.2 19.7 16.6C19.7 16 19.1 15.4 18.5 15.4C17.9 15.4 17.3 15.9 17.3 16.6C17.3 17.2 17.8 17.8 18.5 17.8M20 10H22V12.34C21.42 11.84 20.74 11.45 20 11.23V10Z\" />\n  </svg>\n  <span data-l10n-id=\"cursor_text_select_tool_label\">Text selection tool</span>\n</button>\n",
                    styles: [":host{margin-top:0;margin-right:-3px}:host:focus{outline:0}button:focus,svg:focus{outline:0}.toggled{background-color:#646464;border-color:rgba(0,0,0,.4) rgba(0,0,0,.45) rgba(0,0,0,.5);box-shadow:0 1px 1px rgba(0,0,0,.1) inset,0 0 1px rgba(0,0,0,.2) inset,0 1px 0 rgba(255,255,255,.05)}"]
                }] }
    ];
    /** @nocollapse */
    PdfSelectToolComponent.ctorParameters = function () { return [
        { type: PDFNotificationService }
    ]; };
    PdfSelectToolComponent.propDecorators = {
        showSelectToolButton: [{ type: Input }]
    };
    return PdfSelectToolComponent;
}());
export { PdfSelectToolComponent };
if (false) {
    /** @type {?} */
    PdfSelectToolComponent.prototype.showSelectToolButton;
    /** @type {?} */
    PdfSelectToolComponent.prototype.isSelected;
    /**
     * @type {?}
     * @private
     */
    PdfSelectToolComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvcGRmLXNlbGVjdC10b29sL3BkZi1zZWxlY3QtdG9vbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUd4RTtJQVdFLGdDQUFvQixtQkFBMkM7UUFBL0QsaUJBS0M7UUFMbUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUF3QjtRQUp4RCx5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFFNUIsZUFBVSxHQUFHLElBQUksQ0FBQzs7WUFHakIsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLENBQUMsU0FBUzs7O1FBQUM7WUFDbEUsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUM7SUFDSixDQUFDOzs7OztJQUVPLDRDQUFXOzs7O0lBQW5CO1FBQUEsaUJBSUM7O1lBSE8sb0JBQW9CLEdBQTBCLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxvQkFBb0I7UUFDeEYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUI7Ozs7UUFDbEQsVUFBQyxFQUF5QjtnQkFBdkIsY0FBSTtZQUF3QixPQUFBLENBQUMsS0FBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUFsRCxDQUFrRCxFQUFDLENBQUM7SUFDdkYsQ0FBQzs7OztJQUVNLHdDQUFPOzs7SUFBZDs7WUFDUSxvQkFBb0IsR0FBMEIsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQjtRQUN4RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlGLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsazhCQUErQzs7aUJBRWhEOzs7O2dCQVBRLHNCQUFzQjs7O3VDQVM1QixLQUFLOztJQXNCUiw2QkFBQztDQUFBLEFBNUJELElBNEJDO1NBdkJZLHNCQUFzQjs7O0lBQ2pDLHNEQUNtQzs7SUFFbkMsNENBQXlCOzs7OztJQUViLHFEQUFtRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBkZkN1cnNvclRvb2xzIH0gZnJvbSAnLi8uLi8uLi9vcHRpb25zL3BkZi1jdXJzb3ItdG9vbHMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSVBERlZpZXdlckFwcGxpY2F0aW9uIH0gZnJvbSAnLi4vLi4vb3B0aW9ucy9wZGYtdmlld2VyLWFwcGxpY2F0aW9uJztcbmltcG9ydCB7IFBERk5vdGlmaWNhdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9wZGYtbm90aWZpY2F0aW9uLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGFuZHRvb2xDaGFuZ2VkIH0gZnJvbSAnLi4vLi4vZXZlbnRzL2hhbmR0b29sLWNoYW5nZWQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtc2VsZWN0LXRvb2wnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLXNlbGVjdC10b29sLmNvbXBvbmVudC5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBQZGZTZWxlY3RUb29sQ29tcG9uZW50IHtcbiAgQElucHV0KClcbiAgcHVibGljIHNob3dTZWxlY3RUb29sQnV0dG9uID0gdHJ1ZTtcblxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBub3RpZmljYXRpb25TZXJ2aWNlOiBQREZOb3RpZmljYXRpb25TZXJ2aWNlKSB7XG4gICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5ub3RpZmljYXRpb25TZXJ2aWNlLm9uUERGSlNJbml0LnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm9uUGRmSnNJbml0KCk7XG4gICAgICBzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25QZGZKc0luaXQoKSB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5vbignY3Vyc29ydG9vbGNoYW5nZWQnLFxuICAgICAgKHsgdG9vbCB9OiBIYW5kdG9vbENoYW5nZWQpID0+ICh0aGlzLmlzU2VsZWN0ZWQgPSB0b29sID09PSBQZGZDdXJzb3JUb29scy5TRUxFQ1QpKTtcbiAgfVxuXG4gIHB1YmxpYyBvbkNsaWNrKCk6IHZvaWQge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMuZGlzcGF0Y2goJ3N3aXRjaGN1cnNvcnRvb2wnLCB7IHRvb2w6IFBkZkN1cnNvclRvb2xzLlNFTEVDVCB9KTtcbiAgfVxufVxuIl19