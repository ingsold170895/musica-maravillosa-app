import { Subject } from 'rxjs';
export interface FindOptions {
    highlightAll?: boolean;
    matchCase?: boolean;
    wholeWords?: boolean;
    ignoreAccents?: boolean;
    findMultipleSearchTexts?: boolean;
}
export declare class NgxExtendedPdfViewerService {
    onPDFJSInit: Subject<void>;
    constructor();
    findMultiple(text: Array<string>, options?: FindOptions): boolean;
    find(text: string, options?: FindOptions): boolean;
    findNext(): boolean;
    findPrevious(): boolean;
}
