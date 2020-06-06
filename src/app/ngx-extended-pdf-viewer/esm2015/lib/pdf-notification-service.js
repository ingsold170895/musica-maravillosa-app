/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class PDFNotificationService {
    constructor() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
    }
}
PDFNotificationService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ PDFNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function PDFNotificationService_Factory() { return new PDFNotificationService(); }, token: PDFNotificationService, providedIn: "root" });
if (false) {
    /** @type {?} */
    PDFNotificationService.prototype.onPDFJSInit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSy9CLE1BQU0sT0FBTyxzQkFBc0I7SUFIbkM7O1FBS1MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBQzFDOzs7WUFOQSxVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7O0lBR0MsNkNBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBQREZOb3RpZmljYXRpb25TZXJ2aWNlIHtcbiAgLy8gdGhpcyBldmVudCBpcyBmaXJlZCB3aGVuIHRoZSBwZGYuanMgbGlicmFyeSBoYXMgYmVlbiBsb2FkZWQgYW5kIG9iamVjdHMgbGlrZSBQREZBcHBsaWNhdGlvbiBhcmUgYXZhaWxhYmxlXG4gIHB1YmxpYyBvblBERkpTSW5pdCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG59XG4iXX0=