/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class PdfPagingAreaComponent {
    constructor() {
        this.showPagingButtons = true;
    }
}
PdfPagingAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-paging-area',
                template: "<div\n[class.invisible]=\"!showPagingButtons\"\nclass=\"paging-left hiddenTinyView\"\n>\n<pdf-first-page style=\"margin-right: -3px;\"></pdf-first-page>\n<pdf-previous-page style=\"margin-left: -3px;\"></pdf-previous-page>\n</div>\n<pdf-page-number [showPagingButtons]=\"showPagingButtons\"></pdf-page-number>\n<div\n[class.invisible]=\"!showPagingButtons\"\nclass=\"paging-right hiddenTinyView\"\n>\n<pdf-next-page style=\"margin-right: -3px;margin-left: -3px;\"></pdf-next-page>\n<pdf-last-page style=\"margin-left: -3px;\"></pdf-last-page>\n</div>\n",
                styles: [".paging-right{float:right;display:block;margin-top:-2px}.paging-left{float:left;display:block;margin-top:-2px}"]
            }] }
];
PdfPagingAreaComponent.propDecorators = {
    showPagingButtons: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PdfPagingAreaComponent.prototype.showPagingButtons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELE1BQU0sT0FBTyxzQkFBc0I7SUFMbkM7UUFRUyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLG9qQkFBK0M7O2FBRWhEOzs7Z0NBR0UsS0FBSzs7OztJQUFOLG1EQUNnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLXBhZ2luZy1hcmVhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGRmUGFnaW5nQXJlYUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgcHVibGljIHNob3dQYWdpbmdCdXR0b25zID0gdHJ1ZTtcbn1cbiJdfQ==