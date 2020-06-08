/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
/**
 * List of all field that can be customized
 * @type {?}
 */
var requiredIds = [
    'toolbarViewer',
    'numPages',
    'pageNumber',
    'scaleSelectContainer',
    'customScaleOption',
    'previous',
    'next',
    'zoomIn',
    'zoomOut',
    'viewFind',
    'openFile',
    'print',
    'presentationMode',
    'download',
    'viewBookmark',
    'secondaryToolbar',
    'secondaryToolbarToggle',
    'secondaryToolbarButtonContainer',
    'secondaryPresentationMode',
    'secondaryOpenFile',
    'secondaryPrint',
    'secondaryDownload',
    'secondaryViewBookmark',
    'firstPage',
    'lastPage',
    'pageRotateCw',
    'pageRotateCcw',
    'cursorSelectTool',
    'cursorHandTool',
    'scrollVertical',
    'scrollHorizontal',
    'scrollWrapped',
    'spreadNone',
    'spreadOdd',
    'spreadEven',
    'documentProperties',
    'contextFirstPage',
    'contextLastPage',
    'contextPageRotateCw',
    'contextPageRotateCcw',
    'outerContainer',
    'viewerContainer',
    'sidebarToggle',
    'viewThumbnail',
    'viewOutline',
    'viewAttachments',
    'thumbnailView',
    'outlineView',
    'attachmentsView',
    'outerContainer',
    'sidebarResizer',
    'findbar',
    'viewFind',
    'findInput',
    'findInputMultiline',
    'findHighlightAll',
    'findMatchCase',
    'findEntireWord',
    'findMultipleSearchTexts',
    'findIgnoreAccents',
    'findMsg',
    'findResultsCount',
    'findPrevious',
    'findNext',
    'passwordOverlay',
    'passwordText',
    'password',
    'passwordSubmit',
    'passwordCancel',
    'documentPropertiesOverlay',
    'documentPropertiesClose',
    'fileNameField',
    'fileSizeField',
    'titleField',
    'authorField',
    'subjectField',
    'keywordsField',
    'creationDateField',
    'modificationDateField',
    'creatorField',
    'producerField',
    'versionField',
    'pageCountField',
    'pageSizeField',
    'linearizedField',
    'errorWrapper',
    'errorMessage',
    'errorClose',
    'errorMoreInfo',
    'errorShowMore',
    'errorShowLess',
    'scaleSelectContainer'
];
var PdfDummyComponentsComponent = /** @class */ (function () {
    function PdfDummyComponentsComponent() {
    }
    /**
     * @return {?}
     */
    PdfDummyComponentsComponent.prototype.addMissingStandardWidgets = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.dummyComponentsContainer = document.getElementsByClassName('dummy-pdf-viewer-components')[0];
        /** @type {?} */
        var container = (/** @type {?} */ (this.dummyComponentsContainer));
        if (container) {
            for (var i = 0; i < container.children.length; i++) {
                /** @type {?} */
                var child = container.firstChild;
                if (child) {
                    container.removeChild(child);
                }
            }
        }
        requiredIds.forEach((/**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            if (_this.needsDummyWidget(id)) {
                /** @type {?} */
                var dummy = document.createElement('span');
                dummy.id = id;
                dummy.className = 'invisible dummy-component';
                _this.dummyComponentsContainer.appendChild(dummy);
            }
        }));
        if (this.needsDummyWidget('scaleSelect')) {
            /** @type {?} */
            var dummy = document.createElement('select');
            dummy.id = 'scaleSelect';
            dummy.className = 'invisible dummy-component';
            this.dummyComponentsContainer.appendChild(dummy);
        }
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    PdfDummyComponentsComponent.prototype.needsDummyWidget = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var widget = document.getElementById(id);
        if (!widget) {
            return true;
        }
        return false;
    };
    PdfDummyComponentsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-dummy-components',
                    template: "<span class=\"invisible dummy-pdf-viewer-components\">\n</span>\n"
                }] }
    ];
    return PdfDummyComponentsComponent;
}());
export { PdfDummyComponentsComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    PdfDummyComponentsComponent.prototype.dummyComponentsContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvcGRmLWR1bW15LWNvbXBvbmVudHMvcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQUdwQyxXQUFXLEdBQUc7SUFDbEIsZUFBZTtJQUNmLFVBQVU7SUFDVixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLFVBQVU7SUFDVixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7SUFDWixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxjQUFjO0lBQ2QsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsZUFBZTtJQUNmLHNCQUFzQjtDQUN2QjtBQUVEO0lBQUE7SUEyQ0EsQ0FBQzs7OztJQXBDUSwrREFBeUI7OztJQUFoQztRQUFBLGlCQTJCQztRQTFCQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBQzVGLFNBQVMsR0FBRyxtQkFBQSxJQUFJLENBQUMsd0JBQXdCLEVBQWU7UUFDOUQsSUFBSSxTQUFTLEVBQUU7WUFDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O29CQUM1QyxLQUFLLEdBQUcsU0FBUyxDQUFDLFVBQVU7Z0JBQ2xDLElBQUksS0FBSyxFQUFFO29CQUNULFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUVELFdBQVcsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBQSxFQUFFO1lBQ3BCLElBQUksS0FBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxFQUFFOztvQkFDdkIsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxLQUFLLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztnQkFDZCxLQUFLLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO2dCQUM5QyxLQUFJLENBQUMsd0JBQXdCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2xEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFFSCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsRUFBRTs7Z0JBQ2xDLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQztZQUM5QyxLQUFLLENBQUMsRUFBRSxHQUFHLGFBQWEsQ0FBQztZQUN6QixLQUFLLENBQUMsU0FBUyxHQUFHLDJCQUEyQixDQUFDO1lBQzlDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDOzs7Ozs7SUFFTyxzREFBZ0I7Ozs7O0lBQXhCLFVBQXlCLEVBQVU7O1lBQzNCLE1BQU0sR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBMUNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyw2RUFBb0Q7aUJBQ3JEOztJQXdDRCxrQ0FBQztDQUFBLEFBM0NELElBMkNDO1NBdkNZLDJCQUEyQjs7Ozs7O0lBQ3RDLCtEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKiogTGlzdCBvZiBhbGwgZmllbGQgdGhhdCBjYW4gYmUgY3VzdG9taXplZCAqL1xuY29uc3QgcmVxdWlyZWRJZHMgPSBbXG4gICd0b29sYmFyVmlld2VyJyxcbiAgJ251bVBhZ2VzJyxcbiAgJ3BhZ2VOdW1iZXInLFxuICAnc2NhbGVTZWxlY3RDb250YWluZXInLFxuICAnY3VzdG9tU2NhbGVPcHRpb24nLFxuICAncHJldmlvdXMnLFxuICAnbmV4dCcsXG4gICd6b29tSW4nLFxuICAnem9vbU91dCcsXG4gICd2aWV3RmluZCcsXG4gICdvcGVuRmlsZScsXG4gICdwcmludCcsXG4gICdwcmVzZW50YXRpb25Nb2RlJyxcbiAgJ2Rvd25sb2FkJyxcbiAgJ3ZpZXdCb29rbWFyaycsXG4gICdzZWNvbmRhcnlUb29sYmFyJyxcbiAgJ3NlY29uZGFyeVRvb2xiYXJUb2dnbGUnLFxuICAnc2Vjb25kYXJ5VG9vbGJhckJ1dHRvbkNvbnRhaW5lcicsXG4gICdzZWNvbmRhcnlQcmVzZW50YXRpb25Nb2RlJyxcbiAgJ3NlY29uZGFyeU9wZW5GaWxlJyxcbiAgJ3NlY29uZGFyeVByaW50JyxcbiAgJ3NlY29uZGFyeURvd25sb2FkJyxcbiAgJ3NlY29uZGFyeVZpZXdCb29rbWFyaycsXG4gICdmaXJzdFBhZ2UnLFxuICAnbGFzdFBhZ2UnLFxuICAncGFnZVJvdGF0ZUN3JyxcbiAgJ3BhZ2VSb3RhdGVDY3cnLFxuICAnY3Vyc29yU2VsZWN0VG9vbCcsXG4gICdjdXJzb3JIYW5kVG9vbCcsXG4gICdzY3JvbGxWZXJ0aWNhbCcsXG4gICdzY3JvbGxIb3Jpem9udGFsJyxcbiAgJ3Njcm9sbFdyYXBwZWQnLFxuICAnc3ByZWFkTm9uZScsXG4gICdzcHJlYWRPZGQnLFxuICAnc3ByZWFkRXZlbicsXG4gICdkb2N1bWVudFByb3BlcnRpZXMnLFxuICAnY29udGV4dEZpcnN0UGFnZScsXG4gICdjb250ZXh0TGFzdFBhZ2UnLFxuICAnY29udGV4dFBhZ2VSb3RhdGVDdycsXG4gICdjb250ZXh0UGFnZVJvdGF0ZUNjdycsXG4gICdvdXRlckNvbnRhaW5lcicsXG4gICd2aWV3ZXJDb250YWluZXInLFxuICAnc2lkZWJhclRvZ2dsZScsXG4gICd2aWV3VGh1bWJuYWlsJyxcbiAgJ3ZpZXdPdXRsaW5lJyxcbiAgJ3ZpZXdBdHRhY2htZW50cycsXG4gICd0aHVtYm5haWxWaWV3JyxcbiAgJ291dGxpbmVWaWV3JyxcbiAgJ2F0dGFjaG1lbnRzVmlldycsXG4gICdvdXRlckNvbnRhaW5lcicsXG4gICdzaWRlYmFyUmVzaXplcicsXG4gICdmaW5kYmFyJyxcbiAgJ3ZpZXdGaW5kJyxcbiAgJ2ZpbmRJbnB1dCcsXG4gICdmaW5kSW5wdXRNdWx0aWxpbmUnLFxuICAnZmluZEhpZ2hsaWdodEFsbCcsXG4gICdmaW5kTWF0Y2hDYXNlJyxcbiAgJ2ZpbmRFbnRpcmVXb3JkJyxcbiAgJ2ZpbmRNdWx0aXBsZVNlYXJjaFRleHRzJyxcbiAgJ2ZpbmRJZ25vcmVBY2NlbnRzJyxcbiAgJ2ZpbmRNc2cnLFxuICAnZmluZFJlc3VsdHNDb3VudCcsXG4gICdmaW5kUHJldmlvdXMnLFxuICAnZmluZE5leHQnLFxuICAncGFzc3dvcmRPdmVybGF5JyxcbiAgJ3Bhc3N3b3JkVGV4dCcsXG4gICdwYXNzd29yZCcsXG4gICdwYXNzd29yZFN1Ym1pdCcsXG4gICdwYXNzd29yZENhbmNlbCcsXG4gICdkb2N1bWVudFByb3BlcnRpZXNPdmVybGF5JyxcbiAgJ2RvY3VtZW50UHJvcGVydGllc0Nsb3NlJyxcbiAgJ2ZpbGVOYW1lRmllbGQnLFxuICAnZmlsZVNpemVGaWVsZCcsXG4gICd0aXRsZUZpZWxkJyxcbiAgJ2F1dGhvckZpZWxkJyxcbiAgJ3N1YmplY3RGaWVsZCcsXG4gICdrZXl3b3Jkc0ZpZWxkJyxcbiAgJ2NyZWF0aW9uRGF0ZUZpZWxkJyxcbiAgJ21vZGlmaWNhdGlvbkRhdGVGaWVsZCcsXG4gICdjcmVhdG9yRmllbGQnLFxuICAncHJvZHVjZXJGaWVsZCcsXG4gICd2ZXJzaW9uRmllbGQnLFxuICAncGFnZUNvdW50RmllbGQnLFxuICAncGFnZVNpemVGaWVsZCcsXG4gICdsaW5lYXJpemVkRmllbGQnLFxuICAnZXJyb3JXcmFwcGVyJyxcbiAgJ2Vycm9yTWVzc2FnZScsXG4gICdlcnJvckNsb3NlJyxcbiAgJ2Vycm9yTW9yZUluZm8nLFxuICAnZXJyb3JTaG93TW9yZScsXG4gICdlcnJvclNob3dMZXNzJyxcbiAgJ3NjYWxlU2VsZWN0Q29udGFpbmVyJ1xuXTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGRmLWR1bW15LWNvbXBvbmVudHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGRmLWR1bW15LWNvbXBvbmVudHMuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIFBkZkR1bW15Q29tcG9uZW50c0NvbXBvbmVudCB7XG4gIHByaXZhdGUgZHVtbXlDb21wb25lbnRzQ29udGFpbmVyOiBFbGVtZW50O1xuXG4gIHB1YmxpYyBhZGRNaXNzaW5nU3RhbmRhcmRXaWRnZXRzKCk6IHZvaWQge1xuICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHVtbXktcGRmLXZpZXdlci1jb21wb25lbnRzJylbMF07XG4gICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIgYXMgSFRNTEVsZW1lbnQ7XG4gICAgaWYgKGNvbnRhaW5lcikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjb250YWluZXIuZmlyc3RDaGlsZDtcbiAgICAgICAgaWYgKGNoaWxkKSB7XG4gICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVpcmVkSWRzLmZvckVhY2goaWQgPT4ge1xuICAgICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldChpZCkpIHtcbiAgICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGR1bW15LmlkID0gaWQ7XG4gICAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcbiAgICAgICAgdGhpcy5kdW1teUNvbXBvbmVudHNDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVtbXkpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMubmVlZHNEdW1teVdpZGdldCgnc2NhbGVTZWxlY3QnKSkge1xuICAgICAgY29uc3QgZHVtbXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgIGR1bW15LmlkID0gJ3NjYWxlU2VsZWN0JztcbiAgICAgIGR1bW15LmNsYXNzTmFtZSA9ICdpbnZpc2libGUgZHVtbXktY29tcG9uZW50JztcbiAgICAgIHRoaXMuZHVtbXlDb21wb25lbnRzQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1bW15KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG5lZWRzRHVtbXlXaWRnZXQoaWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHdpZGdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICBpZiAoIXdpZGdldCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl19