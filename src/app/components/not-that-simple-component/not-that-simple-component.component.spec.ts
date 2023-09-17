import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotThatSimpleComponentComponent } from './not-that-simple-component.component';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NotThatSimpleComponentComponent', () => {
  let fixture: ComponentFixture<NotThatSimpleComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
    });

    fixture = TestBed.createComponent(NotThatSimpleComponentComponent);
  });

  it("button's label should be equal to Label Input", () => {
    const onClick = jasmine.createSpy('onClick');

    fixture.componentInstance.label = 'fake-label'; //Input

    fixture.detectChanges();

    // get the button's text
    const buttonText = fixture.nativeElement.querySelector(
      '[data-testid=button]'
    )?.textContent;

    expect(buttonText).toEqual('fake-label');
  });

  it('click event should be emitted when the button is clicked', () => {
    const myEventSpy = jasmine.createSpy('myEvent');

    fixture.componentInstance.myEventEmitter.subscribe(myEventSpy);

    // trigger a click event
    fixture.debugElement
      .query(By.css('[data-testid=button]'))
      .triggerEventHandler('click');

    expect(myEventSpy).toHaveBeenCalled();
  });
});
