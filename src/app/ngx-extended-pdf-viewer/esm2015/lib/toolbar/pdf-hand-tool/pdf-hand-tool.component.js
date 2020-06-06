/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PdfCursorTools } from './../../options/pdf-cursor-tools';
import { Component, Input } from '@angular/core';
import { PDFNotificationService } from '../../pdf-notification-service';
export class PdfHandToolComponent {
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
if (false) {
    /** @type {?} */
    PdfHandToolComponent.prototype.showHandToolButton;
    /** @type {?} */
    PdfHandToolComponent.prototype.isSelected;
    /**
     * @type {?}
     * @private
     */
    PdfHandToolComponent.prototype.notificationService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWhhbmQtdG9vbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZXh0ZW5kZWQtcGRmLXZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi90b29sYmFyL3BkZi1oYW5kLXRvb2wvcGRmLWhhbmQtdG9vbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNsRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVqRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQVF4RSxNQUFNLE9BQU8sb0JBQW9COzs7O0lBTS9CLFlBQW9CLG1CQUEyQztRQUEzQyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXdCO1FBSnhELHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUUxQixlQUFVLEdBQUcsS0FBSyxDQUFDOztjQUdsQixZQUFZLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDdkUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QixDQUFDLEVBQUM7SUFDSixDQUFDOzs7OztJQUVPLFdBQVc7O2NBQ1gsb0JBQW9CLEdBQTBCLENBQUMsbUJBQUEsTUFBTSxFQUFPLENBQUMsQ0FBQyxvQkFBb0I7UUFDeEYsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxtQkFBbUI7Ozs7UUFDbEQsQ0FBQyxFQUFFLElBQUksRUFBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxjQUFjLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQztJQUNyRixDQUFDOzs7O0lBRU0sT0FBTzs7Y0FDTixvQkFBb0IsR0FBMEIsQ0FBQyxtQkFBQSxNQUFNLEVBQU8sQ0FBQyxDQUFDLG9CQUFvQjtRQUN4RixvQkFBb0IsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsSUFBSSxFQUFFLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7OztZQTNCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLCtsQkFBNkM7O2FBRTlDOzs7O1lBUFEsc0JBQXNCOzs7aUNBUzVCLEtBQUs7Ozs7SUFBTixrREFDaUM7O0lBRWpDLDBDQUEwQjs7Ozs7SUFFZCxtREFBbUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQZGZDdXJzb3JUb29scyB9IGZyb20gJy4vLi4vLi4vb3B0aW9ucy9wZGYtY3Vyc29yLXRvb2xzJztcbmltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElQREZWaWV3ZXJBcHBsaWNhdGlvbiB9IGZyb20gJy4uLy4uL29wdGlvbnMvcGRmLXZpZXdlci1hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlJztcbmltcG9ydCB7IEhhbmR0b29sQ2hhbmdlZCB9IGZyb20gJy4uLy4uL2V2ZW50cy9oYW5kdG9vbC1jaGFuZ2VkJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWhhbmQtdG9vbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtaGFuZC10b29sLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vcGRmLWhhbmQtdG9vbC5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGRmSGFuZFRvb2xDb21wb25lbnQge1xuICBASW5wdXQoKVxuICBwdWJsaWMgc2hvd0hhbmRUb29sQnV0dG9uID0gdHJ1ZTtcblxuICBwdWJsaWMgaXNTZWxlY3RlZCA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uU2VydmljZTogUERGTm90aWZpY2F0aW9uU2VydmljZSkge1xuICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9IHRoaXMubm90aWZpY2F0aW9uU2VydmljZS5vblBERkpTSW5pdC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5vblBkZkpzSW5pdCgpO1xuICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uUGRmSnNJbml0KCkge1xuICAgIGNvbnN0IFBERlZpZXdlckFwcGxpY2F0aW9uOiBJUERGVmlld2VyQXBwbGljYXRpb24gPSAod2luZG93IGFzIGFueSkuUERGVmlld2VyQXBwbGljYXRpb247XG4gICAgUERGVmlld2VyQXBwbGljYXRpb24uZXZlbnRCdXMub24oJ2N1cnNvcnRvb2xjaGFuZ2VkJyxcbiAgICAgICh7IHRvb2wgfTogSGFuZHRvb2xDaGFuZ2VkKSA9PiAodGhpcy5pc1NlbGVjdGVkID0gdG9vbCA9PT0gUGRmQ3Vyc29yVG9vbHMuSEFORCkpO1xuICB9XG5cbiAgcHVibGljIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgY29uc3QgUERGVmlld2VyQXBwbGljYXRpb246IElQREZWaWV3ZXJBcHBsaWNhdGlvbiA9ICh3aW5kb3cgYXMgYW55KS5QREZWaWV3ZXJBcHBsaWNhdGlvbjtcbiAgICBQREZWaWV3ZXJBcHBsaWNhdGlvbi5ldmVudEJ1cy5kaXNwYXRjaCgnc3dpdGNoY3Vyc29ydG9vbCcsIHsgdG9vbDogUGRmQ3Vyc29yVG9vbHMuSEFORCB9KTtcbiAgfVxufVxuIl19