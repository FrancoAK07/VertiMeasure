import { ComponentFixture, TestBed } from "@angular/core/testing";

import { Summary } from "./summary.page";

describe("Summary", () => {
	let component: Summary;
	let fixture: ComponentFixture<Summary>;

	beforeEach(async () => {
		fixture = TestBed.createComponent(Summary);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
