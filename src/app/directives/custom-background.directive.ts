import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from "@angular/core"

@Directive({
    selector: "[appCustBg]"
})

export class CustomBackgroundDirective implements OnInit {
    @HostBinding('style.backgroundColor') bgColor: string = 'white';

    constructor(private elementRef: ElementRef, private renderer: Renderer2) {}
    ngOnInit(): void {
        //this.elementRef.nativeElement.style.backgroundColor = 'lightgray';
    }
    @HostListener('mouseenter') onMouseEnter(event: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', '#e9e9d8');
        this.bgColor = '#e9e9d8';
    }
    @HostListener('mouseleave') onMouseLeave(event: Event) {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
        this.bgColor = 'white';
    }
}