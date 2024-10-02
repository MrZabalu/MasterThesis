declare namespace TcHmi.Controls.Helpers {
    class SplitView extends HTMLElement {
        static resizeBarTolerance: number;
        constructor(options?: {
            initSizeOfFirstContainer?: number;
            alignment?: SplitView.Alignment;
        });
        protected __container: Element[];
        protected __resizeBar: HTMLDivElement;
        protected __alignment: SplitView.Alignment;
        protected __resizeInProgress: boolean;
        protected __previousDownPosition: number;
        protected __previousSize: number;
        connectedCallback(): void;
        disconnectedCallback(): void;
        private __resizeBarOnPointerDown;
        private __resizeBarOnPointerMove;
        private __resizeBarOnPointerUp;
        /**
         * Remove all events.
         */
        private __removeEvents;
        isResizeInProgress(): boolean;
    }
    namespace SplitView {
        enum Alignment {
            horizontal = 0,
            vertical = 1
        }
    }
}
//# sourceMappingURL=TcHmiSplitView.d.ts.map