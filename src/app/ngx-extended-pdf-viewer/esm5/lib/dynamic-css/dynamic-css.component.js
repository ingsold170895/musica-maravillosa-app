/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Renderer2, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
var DynamicCssComponent = /** @class */ (function () {
    function DynamicCssComponent(renderer, document) {
        this.renderer = renderer;
        this.document = document;
        this.zoom = 1.0;
        this.width = 100;
        this.xs = 490;
        this.sm = 560;
        this.md = 610;
        this.lg = 660;
        this.xl = 740;
        this.xxl = 830;
    }
    Object.defineProperty(DynamicCssComponent.prototype, "style", {
        get: /**
         * @return {?}
         */
        function () {
            return "\n@media all and (max-width: " + this.xl + "px) {\n  #toolbarViewerMiddle {\n    display: table;\n    margin: auto;\n    left: auto;\n    position: inherit;\n    transform: none;\n  }\n}\n\n@media all and (max-width: 840px) {\n  #sidebarContent {\n    background-color: rgba(0, 0, 0, 0.7);\n  }\n\n  html[dir='ltr'] #outerContainer.sidebarOpen #viewerContainer {\n    left: 0px !important;\n  }\n  html[dir='rtl'] #outerContainer.sidebarOpen #viewerContainer {\n    right: 0px !important;\n  }\n\n  #outerContainer .hiddenLargeView,\n  #outerContainer .hiddenMediumView {\n    display: inherit;\n  }\n  #outerContainer .visibleLargeView,\n  #outerContainer .visibleMediumView {\n    display: none;\n  }\n}\n\n@media all and (max-width: " + this.lg + "px) {\n  .toolbarButtonSpacer {\n    width: 15px;\n  }\n\n  #outerContainer .hiddenLargeView {\n    display: none;\n  }\n  #outerContainer .visibleLargeView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.md + "px) {\n  .toolbarButtonSpacer {\n    display: none;\n  }\n  #outerContainer .hiddenMediumView {\n    display: none;\n  }\n  #outerContainer .visibleMediumView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.sm + "px) {\n  .hiddenSmallView,\n  .hiddenSmallView * {\n    display: none;\n  }\n  .visibleSmallView {\n    display: inherit;\n  }\n  .toolbarButtonSpacer {\n    width: 0;\n  }\n  html[dir='ltr'] .findbar {\n    left: 38px;\n  }\n  html[dir='rtl'] .findbar {\n    right: 38px;\n  }\n}\n\n@media all and (max-width: " + this.xs + "px) {\n  #scaleSelectContainer {\n    display: none;\n  }\n}\n\n.visibleXLView,\n.visibleXXLView,\n.visibleTinyView {\n  display: none;\n}\n\n.hiddenXLView,\n.hiddenXXLView {\n  display: unset;\n}\n\n@media all and (max-width: " + this.xl + "px) {\n  #outerContainer .hiddenXLView {\n    display: none;\n  }\n  #outerContainer .visibleXLView {\n    display: inherit;\n  }\n\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-36%);\n    transform: translateX(-36%);\n    display: unset;\n    margin: unset;\n    left: 50%;\n    position: absolute;\n  }\n}\n\n@media all and (max-width: " + this.xxl + "px) {\n  #outerContainer .hiddenXXLView {\n    display: none;\n  }\n  #outerContainer .visibleXXLView {\n    display: inherit;\n  }\n}\n\n@media all and (max-width: " + this.md + "px) {\n  #toolbarViewerMiddle {\n    -webkit-transform: translateX(-26%);\n    transform: translateX(-26%);\n  }\n}\n\n@media all and (max-width: " + this.xs + "px) {\n  .hiddenTinyView,\n  .hiddenTinyView * {\n    display: none;\n  }\n  .visibleTinyView {\n    display: inherit;\n  }\n}\n  ";
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    DynamicCssComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.injectStyle();
    };
    /**
     * @return {?}
     */
    DynamicCssComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fullWith = this.document.body.clientWidth;
        /** @type {?} */
        var partialViewScale = fullWith / this.width;
        /** @type {?} */
        var scaleFactor = partialViewScale * (this.zoom ? this.zoom : 1);
        this.xs = scaleFactor * 490;
        this.sm = scaleFactor * 560;
        this.md = scaleFactor * 610;
        this.lg = scaleFactor * 660;
        this.xl = scaleFactor * 740;
        this.xxl = scaleFactor * 830;
        /** @type {?} */
        var styles = this.document.getElementById('pdf-dynamic-css');
        if (styles) {
            styles.innerHTML = this.style;
        }
    };
    /**
     * @private
     * @return {?}
     */
    DynamicCssComponent.prototype.injectStyle = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styles = (/** @type {?} */ (this.document.createElement('STYLE')));
        styles.id = 'pdf-dynamic-css';
        styles.innerHTML = this.style;
        this.renderer.appendChild(this.document.head, styles);
    };
    /**
     * @return {?}
     */
    DynamicCssComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styles = (/** @type {?} */ (this.document.getElementById('pdf-dynamic-css')));
        if (styles && styles.parentElement) {
            ((/** @type {?} */ (styles.parentElement))).removeChild(styles);
        }
    };
    DynamicCssComponent.decorators = [
        { type: Component, args: [{
                    selector: 'pdf-dynamic-css',
                    template: "",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    DynamicCssComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    DynamicCssComponent.propDecorators = {
        zoom: [{ type: Input }],
        width: [{ type: Input }]
    };
    return DynamicCssComponent;
}());
export { DynamicCssComponent };
if (false) {
    /** @type {?} */
    DynamicCssComponent.prototype.zoom;
    /** @type {?} */
    DynamicCssComponent.prototype.width;
    /** @type {?} */
    DynamicCssComponent.prototype.xs;
    /** @type {?} */
    DynamicCssComponent.prototype.sm;
    /** @type {?} */
    DynamicCssComponent.prototype.md;
    /** @type {?} */
    DynamicCssComponent.prototype.lg;
    /** @type {?} */
    DynamicCssComponent.prototype.xl;
    /** @type {?} */
    DynamicCssComponent.prototype.xxl;
    /**
     * @type {?}
     * @private
     */
    DynamicCssComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    DynamicCssComponent.prototype.document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1jc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvZHluYW1pYy1jc3MvZHluYW1pYy1jc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFNBQVMsRUFBRSxNQUFNLEVBQWEsS0FBSyxFQUFhLE1BQU0sZUFBZSxDQUFDO0FBQ2xHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUUzQztJQXFLRSw2QkFBb0IsUUFBbUIsRUFBNEIsUUFBYTtRQUE1RCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUE5SnpFLFNBQUksR0FBRyxHQUFHLENBQUM7UUFHWCxVQUFLLEdBQUcsR0FBRyxDQUFDO1FBRVosT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxPQUFFLEdBQUcsR0FBRyxDQUFDO1FBRVQsT0FBRSxHQUFHLEdBQUcsQ0FBQztRQUVULE9BQUUsR0FBRyxHQUFHLENBQUM7UUFFVCxRQUFHLEdBQUcsR0FBRyxDQUFDO0lBK0lrRSxDQUFDO0lBN0lwRixzQkFBVyxzQ0FBSzs7OztRQUFoQjtZQUNFLE9BQU8sa0NBQ2tCLElBQUksQ0FBQyxFQUFFLDRyQkFnQ1AsSUFBSSxDQUFDLEVBQUUsb09BYVAsSUFBSSxDQUFDLEVBQUUsc09BWVAsSUFBSSxDQUFDLEVBQUUsK1RBbUJQLElBQUksQ0FBQyxFQUFFLDJPQWlCUCxJQUFJLENBQUMsRUFBRSwwV0FrQlAsSUFBSSxDQUFDLEdBQUcsNktBU1IsSUFBSSxDQUFDLEVBQUUsMEpBT1AsSUFBSSxDQUFDLEVBQUUsdUlBU2pDLENBQUM7UUFDSixDQUFDOzs7T0FBQTs7OztJQUlDLHNDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQseUNBQVc7OztJQUFYOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXOztZQUN6QyxnQkFBZ0IsR0FBRyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUs7O1lBQ3hDLFdBQVcsR0FBRyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVsRSxJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsRUFBRSxHQUFHLFdBQVcsR0FBRyxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFXLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQzs7WUFFdkIsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLGlCQUFpQixDQUFDO1FBQzlELElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFTyx5Q0FBVzs7OztJQUFuQjs7WUFDUSxNQUFNLEdBQUcsbUJBQUEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQW9CO1FBQ3ZFLE1BQU0sQ0FBQyxFQUFFLEdBQUcsaUJBQWlCLENBQUM7UUFDOUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3hELENBQUM7Ozs7SUFFTSx5Q0FBVzs7O0lBQWxCOztZQUNRLE1BQU0sR0FBRyxtQkFBQSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFlO1FBQzdFLElBQUksTUFBTSxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUU7WUFDbEMsQ0FBQyxtQkFBQSxNQUFNLENBQUMsYUFBYSxFQUFPLENBQUMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDOztnQkF6TUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLFlBQTJDOztpQkFFNUM7Ozs7Z0JBUDJCLFNBQVM7Z0RBd0tPLE1BQU0sU0FBQyxRQUFROzs7dUJBL0p4RCxLQUFLO3dCQUdMLEtBQUs7O0lBaU1SLDBCQUFDO0NBQUEsQUExTUQsSUEwTUM7U0FyTVksbUJBQW1COzs7SUFDOUIsbUNBQ2tCOztJQUVsQixvQ0FDbUI7O0lBRW5CLGlDQUFnQjs7SUFFaEIsaUNBQWdCOztJQUVoQixpQ0FBZ0I7O0lBRWhCLGlDQUFnQjs7SUFFaEIsaUNBQWdCOztJQUVoQixrQ0FBaUI7Ozs7O0lBK0lMLHVDQUEyQjs7Ozs7SUFBRSx1Q0FBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgUmVuZGVyZXIyLCBJbmplY3QsIE9uQ2hhbmdlcywgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwZGYtZHluYW1pYy1jc3MnLFxuICB0ZW1wbGF0ZVVybDogJy4vZHluYW1pYy1jc3MuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9keW5hbWljLWNzcy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgRHluYW1pY0Nzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKVxuICBwdWJsaWMgem9vbSA9IDEuMDtcblxuICBASW5wdXQoKVxuICBwdWJsaWMgd2lkdGggPSAxMDA7XG5cbiAgcHVibGljIHhzID0gNDkwO1xuXG4gIHB1YmxpYyBzbSA9IDU2MDtcblxuICBwdWJsaWMgbWQgPSA2MTA7XG5cbiAgcHVibGljIGxnID0gNjYwO1xuXG4gIHB1YmxpYyB4bCA9IDc0MDtcblxuICBwdWJsaWMgeHhsID0gODMwO1xuXG4gIHB1YmxpYyBnZXQgc3R5bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYFxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhsfXB4KSB7XG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcbiAgICBkaXNwbGF5OiB0YWJsZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbGVmdDogYXV0bztcbiAgICBwb3NpdGlvbjogaW5oZXJpdDtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogODQwcHgpIHtcbiAgI3NpZGViYXJDb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gIH1cblxuICBodG1sW2Rpcj0nbHRyJ10gI291dGVyQ29udGFpbmVyLnNpZGViYXJPcGVuICN2aWV3ZXJDb250YWluZXIge1xuICAgIGxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gIGh0bWxbZGlyPSdydGwnXSAjb3V0ZXJDb250YWluZXIuc2lkZWJhck9wZW4gI3ZpZXdlckNvbnRhaW5lciB7XG4gICAgcmlnaHQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5MYXJnZVZpZXcsXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTWVkaXVtVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuICAjb3V0ZXJDb250YWluZXIgLnZpc2libGVMYXJnZVZpZXcsXG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLmxnfXB4KSB7XG4gIC50b29sYmFyQnV0dG9uU3BhY2VyIHtcbiAgICB3aWR0aDogMTVweDtcbiAgfVxuXG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuTGFyZ2VWaWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZUxhcmdlVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuXG5AbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiAke3RoaXMubWR9cHgpIHtcbiAgLnRvb2xiYXJCdXR0b25TcGFjZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5NZWRpdW1WaWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZU1lZGl1bVZpZXcge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnNtfXB4KSB7XG4gIC5oaWRkZW5TbWFsbFZpZXcsXG4gIC5oaWRkZW5TbWFsbFZpZXcgKiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAudmlzaWJsZVNtYWxsVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuICAudG9vbGJhckJ1dHRvblNwYWNlciB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgaHRtbFtkaXI9J2x0ciddIC5maW5kYmFyIHtcbiAgICBsZWZ0OiAzOHB4O1xuICB9XG4gIGh0bWxbZGlyPSdydGwnXSAuZmluZGJhciB7XG4gICAgcmlnaHQ6IDM4cHg7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhzfXB4KSB7XG4gICNzY2FsZVNlbGVjdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuXG4udmlzaWJsZVhMVmlldyxcbi52aXNpYmxlWFhMVmlldyxcbi52aXNpYmxlVGlueVZpZXcge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uaGlkZGVuWExWaWV3LFxuLmhpZGRlblhYTFZpZXcge1xuICBkaXNwbGF5OiB1bnNldDtcbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhsfXB4KSB7XG4gICNvdXRlckNvbnRhaW5lciAuaGlkZGVuWExWaWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhMVmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxuXG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzYlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTM2JSk7XG4gICAgZGlzcGxheTogdW5zZXQ7XG4gICAgbWFyZ2luOiB1bnNldDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG5cbkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6ICR7dGhpcy54eGx9cHgpIHtcbiAgI291dGVyQ29udGFpbmVyIC5oaWRkZW5YWExWaWV3IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gICNvdXRlckNvbnRhaW5lciAudmlzaWJsZVhYTFZpZXcge1xuICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLm1kfXB4KSB7XG4gICN0b29sYmFyVmlld2VyTWlkZGxlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjYlKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTI2JSk7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogJHt0aGlzLnhzfXB4KSB7XG4gIC5oaWRkZW5UaW55VmlldyxcbiAgLmhpZGRlblRpbnlWaWV3ICoge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLnZpc2libGVUaW55VmlldyB7XG4gICAgZGlzcGxheTogaW5oZXJpdDtcbiAgfVxufVxuICBgO1xufVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaW5qZWN0U3R5bGUoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIGNvbnN0IGZ1bGxXaXRoID0gdGhpcy5kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO1xuICAgIGNvbnN0IHBhcnRpYWxWaWV3U2NhbGUgPSBmdWxsV2l0aCAvIHRoaXMud2lkdGg7XG4gICAgY29uc3Qgc2NhbGVGYWN0b3IgPSBwYXJ0aWFsVmlld1NjYWxlICogKHRoaXMuem9vbSA/IHRoaXMuem9vbSA6IDEpO1xuXG4gICAgdGhpcy54cyA9IHNjYWxlRmFjdG9yICogNDkwO1xuICAgIHRoaXMuc20gPSBzY2FsZUZhY3RvciAqIDU2MDtcbiAgICB0aGlzLm1kID0gc2NhbGVGYWN0b3IgKiA2MTA7XG4gICAgdGhpcy5sZyA9IHNjYWxlRmFjdG9yICogNjYwO1xuICAgIHRoaXMueGwgPSBzY2FsZUZhY3RvciAqIDc0MDtcbiAgICB0aGlzLnh4bCA9IHNjYWxlRmFjdG9yICogODMwO1xuXG4gICAgY29uc3Qgc3R5bGVzID0gdGhpcy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGRmLWR5bmFtaWMtY3NzJyk7XG4gICAgaWYgKHN0eWxlcykge1xuICAgICAgc3R5bGVzLmlubmVySFRNTCA9IHRoaXMuc3R5bGU7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpbmplY3RTdHlsZSgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUWUxFJykgYXMgSFRNTFN0eWxlRWxlbWVudDtcbiAgICBzdHlsZXMuaWQgPSAncGRmLWR5bmFtaWMtY3NzJztcbiAgICBzdHlsZXMuaW5uZXJIVE1MID0gdGhpcy5zdHlsZTtcbiAgICB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQuaGVhZCwgc3R5bGVzKTtcbiAgfVxuXG4gIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB0aGlzLmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZGYtZHluYW1pYy1jc3MnKSBhcyBIVE1MRWxlbWVudDtcbiAgICBpZiAoc3R5bGVzICYmIHN0eWxlcy5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAoc3R5bGVzLnBhcmVudEVsZW1lbnQgYXMgYW55KS5yZW1vdmVDaGlsZChzdHlsZXMpO1xuICAgIH1cbiAgfVxufVxuIl19