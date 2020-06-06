/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class PdfBookmarkComponent {
    constructor() {
        this.showBookmarkButton = true;
    }
}
PdfBookmarkComponent.decorators = [
    { type: Component, args: [{
                selector: 'pdf-bookmark',
                template: "<a\n  href=\"#\"\n  [class.invisible]=\"!showBookmarkButton\"\n  id=\"viewBookmark\"\n  class=\"toolbarButton hiddenTinyView\"\n  title=\"Current view (copy or open in new window)\"\n  data-l10n-id=\"bookmark\"\n>\n  <svg style=\"width:24px;height:24px\" viewBox=\"0 0 24 24\">\n    <path fill=\"currentColor\" d=\"M17,18L12,15.82L7,18V5H17M17,3H7A2,2 0 0,0 5,5V21L12,18L19,21V5C19,3.89 18.1,3 17,3Z\" />\n  </svg>\n  <span data-l10n-id=\"bookmark_label\">Current View</span>\n</a>\n",
                styles: [":host{margin-top:4px}:host:focus{outline:0}a:focus,svg:focus{outline:0}"]
            }] }
];
PdfBookmarkComponent.propDecorators = {
    showBookmarkButton: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    PdfBookmarkComponent.prototype.showBookmarkButton;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWJvb2ttYXJrLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvcGRmLWJvb2ttYXJrL3BkZi1ib29rbWFyay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT2pELE1BQU0sT0FBTyxvQkFBb0I7SUFMakM7UUFRUyx1QkFBa0IsR0FBRyxJQUFJLENBQUM7SUFDbkMsQ0FBQzs7O1lBVEEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QiwrZUFBNEM7O2FBRTdDOzs7aUNBR0UsS0FBSzs7OztJQUFOLGtEQUNpQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWJvb2ttYXJrJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BkZi1ib29rbWFyay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BkZi1ib29rbWFyay5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgUGRmQm9va21hcmtDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93Qm9va21hcmtCdXR0b24gPSB0cnVlO1xufVxuIl19