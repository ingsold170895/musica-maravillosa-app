/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var PdfPagingAreaComponent = /** @class */ (function () {
    function PdfPagingAreaComponent() {
        this.showPagingButtons = true;
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
    return PdfPagingAreaComponent;
}());
export { PdfPagingAreaComponent };
if (false) {
    /** @type {?} */
    PdfPagingAreaComponent.prototype.showPagingButtons;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLXBhZ2luZy1hcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1leHRlbmRlZC1wZGYtdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Rvb2xiYXIvcGRmLXBhZ2luZy1hcmVhL3BkZi1wYWdpbmctYXJlYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpEO0lBQUE7UUFRUyxzQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFDbEMsQ0FBQzs7Z0JBVEEsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLG9qQkFBK0M7O2lCQUVoRDs7O29DQUdFLEtBQUs7O0lBRVIsNkJBQUM7Q0FBQSxBQVRELElBU0M7U0FKWSxzQkFBc0I7OztJQUVqQyxtREFDZ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BkZi1wYWdpbmctYXJlYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9wZGYtcGFnaW5nLWFyZWEuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFBkZlBhZ2luZ0FyZWFDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHB1YmxpYyBzaG93UGFnaW5nQnV0dG9ucyA9IHRydWU7XG59XG4iXX0=