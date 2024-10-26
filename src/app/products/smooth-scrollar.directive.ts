import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Scrollbar } from 'smooth-scrollbar/scrollbar';

@Directive({
  selector: '[appSmoothScrollar]',
})
export class SmoothScrollarDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    Scrollbar.bind(this.el.nativeElement);
  }
}
