import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective {
    isOpen = false;

    constructor(private elementRef: ElementRef, private renderer: Renderer2) { 

    }

    @HostListener('click') toggleList() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
            this.renderer.addClass(this.elementRef.nativeElement.children[1], 'show');
        } else {
            this.renderer.removeClass(this.elementRef.nativeElement.children[1], 'show');
        }
    }
}