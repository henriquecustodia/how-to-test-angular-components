import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleComponentComponent } from './simple-component.component';

describe('SimpleComponentComponent', () => {
  let component: SimpleComponentComponent;
  let nativeElement: HTMLElement;
  let fixture: ComponentFixture<SimpleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SimpleComponentComponent],
    });
    fixture = TestBed.createComponent(SimpleComponentComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('the title property should be the correct value', () => {
    fixture.detectChanges();

    expect(component.title)
      .withContext('title should be equal to "Simple Component"')
      .toEqual('Simple Component');

    const nativeElementText = nativeElement.querySelector(
      '[data-testid=title]'
    )?.textContent;

    expect(nativeElementText).toEqual('Simple Component');
  });
});
