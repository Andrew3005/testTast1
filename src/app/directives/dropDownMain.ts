import { Directive, Input, Output, EventEmitter, HostListener, ElementRef } from "@angular/core";

@Directive({
    exportAs: 'mainDrop',
    selector: '[dropDownMain], dropDownMain',
    host: {
        '(document:keydown.esc)': 'closeFromOutsideEsc($e)',
        '(document:click)': 'closeFromClick($event)'        
    }
})
export class DropDownMain {
    isOpen: boolean = true;

    constructor(private el: ElementRef) {}

    @Output() result: EventEmitter<boolean> = new EventEmitter();

    closeFromClick($event) {
        if (this.isEventFrom($event)) {
            this.isOpen = !this.isOpen;
            this.result.emit(this.isOpen);
        } else {
            this.isOpen = true;
            this.result.emit(this.isOpen);
        }
    }

    closeFromOutsideEsc($e){
        this.isOpen = true;
        this.result.emit(this.isOpen);
    }

    isEventFrom($event) { return this.el.nativeElement.contains($event.target); }

}