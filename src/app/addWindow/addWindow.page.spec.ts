import { ComponentFixture, TestBed } from "@angular/core/testing";

import { AddWindow } from "./addWindow.page";

describe("AddWindow", () => {
	let component: AddWindow;
	let fixture: ComponentFixture<AddWindow>;

	beforeEach(async () => {
		fixture = TestBed.createComponent(AddWindow);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it("should create", () => {
		expect(component).toBeTruthy();
	});
});
