import { ViewContainerRef, TemplateRef } from '@angular/core'

import { MyUnlessDirective } from './my-unless.directive';

describe('MyUnlessDirective', () => {
  it('should create an instance', () => {
    const directive = new MyUnlessDirective({} as TemplateRef<any>, {} as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
