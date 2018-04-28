import { Directive, Input, Output, EventEmitter, HostListener } from "@angular/core";

@Directive({
    exportAs: 'mainDrop',
    selector: '[dropDownMain], dropDownMain'
})
export class DropDownMain {
    isOpen: boolean = false;

    @Output() result: EventEmitter<boolean> = new EventEmitter();

    @HostListener('click') onClick() {
        this.isOpen = !this.isOpen;
        this.result.emit(this.isOpen);
    }

}