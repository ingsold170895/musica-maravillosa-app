/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const _isIE11 = typeof window === 'undefined' ? false : !!((/** @type {?} */ (window))).MSInputMethodContext && !!((/** @type {?} */ (document))).documentMode;
/** @type {?} */
const isEdge = /Edge\/\d./i.test(navigator.userAgent);
/** @type {?} */
export const defaultOptions = {
    cursorToolOnLoad: 0,
    defaultUrl: '',
    defaultZoomValue: '',
    disableHistory: false,
    disablePageLabels: false,
    enablePrintAutoRotate: false,
    enableWebGL: false,
    eventBusDispatchToDOM: false,
    externalLinkRel: 'noopener noreferrer nofollow',
    externalLinkTarget: 0,
    historyUpdateUrl: false,
    imageResourcesPath: './images/',
    maxCanvasPixels: 16777216,
    pdfBugEnabled: false,
    removePageBorders: false,
    renderer: 'canvas',
    renderInteractiveForms: false,
    sidebarViewOnLoad: -1,
    scrollModeOnLoad: -1,
    spreadModeOnLoad: -1,
    textLayerMode: 1,
    useOnlyCssZoom: false,
    viewOnLoad: 0,
    cMapPacked: true,
    cMapUrl: '../assets/cmaps/',
    disableAutoFetch: false,
    disableCreateObjectURL: false,
    disableFontFace: false,
    disableRange: false,
    disableStream: false,
    isEvalSupported: true,
    maxImageSize: -1,
    pdfBug: false,
    postMessageTransfers: true,
    verbosity: 1,
    workerPort: null,
    workerSrc: _isIE11 || isEdge ? './assets/pdf.worker-es5.js' : './assets/pdf.worker.js',
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC1vcHRpb25zLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWV4dGVuZGVkLXBkZi12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvb3B0aW9ucy9kZWZhdWx0LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7TUFBTSxPQUFPLEdBQUcsT0FBTyxNQUFNLEtBQUssV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFLLE1BQU0sRUFBQSxDQUFDLENBQUMsb0JBQW9CLElBQUksQ0FBQyxDQUFDLENBQUMsbUJBQUssUUFBUSxFQUFBLENBQUMsQ0FBQyxZQUFZOztNQUN4SCxNQUFNLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDOztBQUVyRCxNQUFNLE9BQU8sY0FBYyxHQUFHO0lBQzVCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsVUFBVSxFQUFFLEVBQUU7SUFDZCxnQkFBZ0IsRUFBRSxFQUFFO0lBQ3BCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIscUJBQXFCLEVBQUUsS0FBSztJQUM1QixXQUFXLEVBQUUsS0FBSztJQUNsQixxQkFBcUIsRUFBRSxLQUFLO0lBQzVCLGVBQWUsRUFBRSw4QkFBOEI7SUFDL0Msa0JBQWtCLEVBQUUsQ0FBQztJQUNyQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLGtCQUFrQixFQUFFLFdBQVc7SUFDL0IsZUFBZSxFQUFFLFFBQVE7SUFDekIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsaUJBQWlCLEVBQUUsS0FBSztJQUN4QixRQUFRLEVBQUUsUUFBUTtJQUNsQixzQkFBc0IsRUFBRSxLQUFLO0lBQzdCLGlCQUFpQixFQUFFLENBQUMsQ0FBQztJQUNyQixnQkFBZ0IsRUFBRSxDQUFDLENBQUM7SUFDcEIsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLGNBQWMsRUFBRSxLQUFLO0lBQ3JCLFVBQVUsRUFBRSxDQUFDO0lBQ2IsVUFBVSxFQUFFLElBQUk7SUFDaEIsT0FBTyxFQUFFLGtCQUFrQjtJQUMzQixnQkFBZ0IsRUFBRSxLQUFLO0lBQ3ZCLHNCQUFzQixFQUFFLEtBQUs7SUFDN0IsZUFBZSxFQUFFLEtBQUs7SUFDdEIsWUFBWSxFQUFFLEtBQUs7SUFDbkIsYUFBYSxFQUFFLEtBQUs7SUFDcEIsZUFBZSxFQUFFLElBQUk7SUFDckIsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUNoQixNQUFNLEVBQUUsS0FBSztJQUNiLG9CQUFvQixFQUFFLElBQUk7SUFDMUIsU0FBUyxFQUFFLENBQUM7SUFDWixVQUFVLEVBQUUsSUFBSTtJQUNoQixTQUFTLEVBQUUsT0FBTyxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtDQUN2RiIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IF9pc0lFMTEgPSB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/IGZhbHNlIDogISEoPGFueT53aW5kb3cpLk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhKDxhbnk+ZG9jdW1lbnQpLmRvY3VtZW50TW9kZTtcbmNvbnN0IGlzRWRnZSA9IC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgY3Vyc29yVG9vbE9uTG9hZDogMCxcbiAgZGVmYXVsdFVybDogJycsXG4gIGRlZmF1bHRab29tVmFsdWU6ICcnLFxuICBkaXNhYmxlSGlzdG9yeTogZmFsc2UsXG4gIGRpc2FibGVQYWdlTGFiZWxzOiBmYWxzZSxcbiAgZW5hYmxlUHJpbnRBdXRvUm90YXRlOiBmYWxzZSxcbiAgZW5hYmxlV2ViR0w6IGZhbHNlLFxuICBldmVudEJ1c0Rpc3BhdGNoVG9ET006IGZhbHNlLFxuICBleHRlcm5hbExpbmtSZWw6ICdub29wZW5lciBub3JlZmVycmVyIG5vZm9sbG93JyxcbiAgZXh0ZXJuYWxMaW5rVGFyZ2V0OiAwLFxuICBoaXN0b3J5VXBkYXRlVXJsOiBmYWxzZSxcbiAgaW1hZ2VSZXNvdXJjZXNQYXRoOiAnLi9pbWFnZXMvJyxcbiAgbWF4Q2FudmFzUGl4ZWxzOiAxNjc3NzIxNixcbiAgcGRmQnVnRW5hYmxlZDogZmFsc2UsXG4gIHJlbW92ZVBhZ2VCb3JkZXJzOiBmYWxzZSxcbiAgcmVuZGVyZXI6ICdjYW52YXMnLFxuICByZW5kZXJJbnRlcmFjdGl2ZUZvcm1zOiBmYWxzZSxcbiAgc2lkZWJhclZpZXdPbkxvYWQ6IC0xLFxuICBzY3JvbGxNb2RlT25Mb2FkOiAtMSxcbiAgc3ByZWFkTW9kZU9uTG9hZDogLTEsXG4gIHRleHRMYXllck1vZGU6IDEsXG4gIHVzZU9ubHlDc3Nab29tOiBmYWxzZSxcbiAgdmlld09uTG9hZDogMCxcbiAgY01hcFBhY2tlZDogdHJ1ZSxcbiAgY01hcFVybDogJy4uL2Fzc2V0cy9jbWFwcy8nLFxuICBkaXNhYmxlQXV0b0ZldGNoOiBmYWxzZSxcbiAgZGlzYWJsZUNyZWF0ZU9iamVjdFVSTDogZmFsc2UsXG4gIGRpc2FibGVGb250RmFjZTogZmFsc2UsXG4gIGRpc2FibGVSYW5nZTogZmFsc2UsXG4gIGRpc2FibGVTdHJlYW06IGZhbHNlLFxuICBpc0V2YWxTdXBwb3J0ZWQ6IHRydWUsXG4gIG1heEltYWdlU2l6ZTogLTEsXG4gIHBkZkJ1ZzogZmFsc2UsXG4gIHBvc3RNZXNzYWdlVHJhbnNmZXJzOiB0cnVlLFxuICB2ZXJib3NpdHk6IDEsXG4gIHdvcmtlclBvcnQ6IG51bGwsXG4gIHdvcmtlclNyYzogX2lzSUUxMSB8fCBpc0VkZ2UgPyAnLi9hc3NldHMvcGRmLndvcmtlci1lczUuanMnIDogJy4vYXNzZXRzL3BkZi53b3JrZXIuanMnLFxufTtcbiJdfQ==