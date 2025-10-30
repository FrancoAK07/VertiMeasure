import { Component, OnInit, Input } from "@angular/core";
import { IonCard, IonCardHeader, IonCardTitle, IonIcon, IonLabel } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { addIcons } from "ionicons";
import { pin } from "ionicons/icons";

@Component({
	selector: "app-window-card",
	templateUrl: "./window-card.component.html",
	styleUrls: ["./window-card.component.scss"],
	imports: [IonCard, IonCardHeader, IonCardTitle, CommonModule, IonIcon],
})
export class WindowCardComponent implements OnInit {
	constructor() {
		addIcons({ pin });
	}

	@Input() windowName: string = "Title";
	@Input() timestamp: string = "Now";
	@Input() imageWidth: string = "100%";
	@Input() imageHeight: string = "180px";
	@Input() width_ft: number = 180;
	@Input() width_in: number = 180;
	@Input() height_ft: number = 180;
	@Input() height_in: number = 180;
	@Input() latitude: string = "180";
	@Input() longitud: string = "180";
	// Optional: you can bind a real image URL later
	@Input() imageUrl?: string;

	ngOnInit() {}
}
