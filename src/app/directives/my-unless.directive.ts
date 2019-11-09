import { 
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
} from '@angular/core';

@Directive({
  selector: '[myUnless]'
})
export class MyUnlessDirective {
  @Input() set myUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef)
      this.hasView = true
    } else if (condition && this.hasView) {
      this.viewContainer.clear()
      this.hasView = false
    }
  }

  hasView = false

  constructor(
    public templateRef: TemplateRef<any>,
    public viewContainer: ViewContainerRef
  ) { }

}
