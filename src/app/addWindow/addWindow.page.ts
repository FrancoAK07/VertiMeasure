import { Component } from "@angular/core";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton } from "@ionic/angular/standalone";

@Component({
	selector: "app-addWindow",
	templateUrl: "addWindow.page.html",
	styleUrls: ["addWindow.page.scss"],
	imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton],
})
export class AddWindow {
	constructor() {}
}
