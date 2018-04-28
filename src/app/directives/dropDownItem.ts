import {
    Directive,
    Input,
    Host,
    Optional,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ElementRef,
    Renderer2
} from "@angular/core";
import { Subscription } from "rxjs/Subscription";

import { DropDownMain } from "./dropDownMain";

@Directive({
    exportAs: 'itemDrop',
    selector: '[dropDownItem], [withItem], dropDownItem'
})
export class DropDownItem implements OnChanges, OnDestroy {
    @Input() withItem: DropDownMain;

    sub: Subscription;

    item: DropDownMain = this.dropDownMain;

    constructor(
        @Host() @Optional() private dropDownMain: DropDownMain,
        private el: ElementRef,
        private renderer: Renderer2) { }

    ngOnChanges(changes: SimpleChanges) {
        const { withItem } = changes;
        if (withItem) {
            this.item = this.withItem || this.dropDownMain;
        }
        this.sub = this.item.result
            .subscribe((isOpen) => {
                if (!isOpen) {
                    this.renderer.setStyle(this.el.nativeElement, 'display', 'block')
                } else {
                    this.renderer.setStyle(this.el.nativeElement, 'display', 'none')
                }
            })
    }

    ngOnDestroy() {
        if (this.sub) this.sub.unsubscribe();
    }
}
