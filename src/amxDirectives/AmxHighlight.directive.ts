import { Directive, ElementRef, HostListener, Input } from '@angular/core';


@Directive({ selector: '[AmxHighlight]' })
export class HighlightDirective {


constructor(private el: ElementRef) { }

@HostListener('mouseenter') onMouseEnter() {
  this.highlight('purple',"white");
  
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null,null);
}

private highlight(BGcolor: string, color: string) {
  this.el.nativeElement.style.backgroundColor = BGcolor;
  this.el.nativeElement.style.color = color;
}
}
