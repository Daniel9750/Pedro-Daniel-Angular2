import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EventBindingComponent } from './event-binding.component';

describe('EventBindingComponent', () => {
  let component: EventBindingComponent;
  let fixture: ComponentFixture<EventBindingComponent>;
	let button: HTMLButtonElement;

  beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({imports: [EventBindingComponent]}).compileComponents();
  }));

	beforeEach(() => {
    fixture = TestBed.createComponent(EventBindingComponent);
    component = fixture.componentInstance;
		button = fixture.nativeElement.querySelector("button");
		fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeDefined();
  });

	it("after clicking the button, a new 👍🏻 appears and #likesNumber input's value increments, not the likesNumber property", 
	() => {
		button.click();
		fixture.detectChanges();
		expect(document.getElementById(`👍🏻-${component.emojiCount}`)).withContext("Unexisting new 👍🏻 emoji")
		.not.toEqual(null);

		const input = document.getElementById("likesNumber") as HTMLInputElement;
		expect(input.getAttribute("value")).withContext("Unexpected #likesNumber input value")
		.toBeGreaterThan(component.likesNumber);
	});
});