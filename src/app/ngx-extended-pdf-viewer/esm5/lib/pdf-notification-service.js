/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var PDFNotificationService = /** @class */ (function () {
    function PDFNotificationService() {
        // this event is fired when the pdf.js library has been loaded and objects like PDFApplication are available
        this.onPDFJSInit = new Subject();
    }
    PDFNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */ PDFNotificationService.ngInjectableDef = i0.defineInjectable({ factory: function PDFNotificationService_Factory() { return new PDFNotificationService(); }, token: PDFNotificationService, providedIn: "root" });
    return PDFNotificationService;
}());
export { PDFNotificationService };
if (false) {
    /** @type {?} */
    PDFNotificationService.prototype.onPDFJSInit;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcGRmLW5vdGlmaWNhdGlvbi1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBRS9CO0lBQUE7O1FBS1MsZ0JBQVcsR0FBRyxJQUFJLE9BQU8sRUFBUSxDQUFDO0tBQzFDOztnQkFOQSxVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7aUNBTEQ7Q0FTQyxBQU5ELElBTUM7U0FIWSxzQkFBc0I7OztJQUVqQyw2Q0FBeUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBERk5vdGlmaWNhdGlvblNlcnZpY2Uge1xuICAvLyB0aGlzIGV2ZW50IGlzIGZpcmVkIHdoZW4gdGhlIHBkZi5qcyBsaWJyYXJ5IGhhcyBiZWVuIGxvYWRlZCBhbmQgb2JqZWN0cyBsaWtlIFBERkFwcGxpY2F0aW9uIGFyZSBhdmFpbGFibGVcbiAgcHVibGljIG9uUERGSlNJbml0ID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbn1cbiJdfQ==