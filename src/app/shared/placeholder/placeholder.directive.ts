import { Directive, ViewContainerRef } from '@angular/core';

type NewType = ViewContainerRef;

@Directive({
  selector: '[appPlaceholder]',
})
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
