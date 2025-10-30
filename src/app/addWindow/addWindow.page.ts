import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { addIcons } from "ionicons";
import { pin } from "ionicons/icons";
import { StorageService } from "../services/storage-service";
import { WindowData } from "../interfaces/window-data.interface";
import {
	IonHeader,
	IonToolbar,
	IonTitle,
	IonContent,
	IonButtons,
	IonBackButton,
	IonCard,
	IonItem,
	IonLabel,
	IonInput,
	IonCardContent,
	IonIcon,
	IonButton,
	IonToggle,
} from "@ionic/angular/standalone";

@Component({
	selector: "app-addWindow",
	templateUrl: "addWindow.page.html",
	styleUrls: ["addWindow.page.scss"],
	imports: [
		IonHeader,
		IonToolbar,
		IonTitle,
		IonContent,
		IonButtons,
		IonBackButton,
		IonCard,
		IonItem,
		IonLabel,
		IonInput,
		IonCardContent,
		IonIcon,
		CommonModule,
		FormsModule,
		IonButton,
		IonToggle,
	],
})
export class AddWindow {
	public windowName: string = "";
	public imageUrl: string = "";
	public width_ft: string = "";
	public width_in: string = "";
	public height_ft: string = "";
	public height_in: string = "";
	public timestamp: string = "";
	public latitude: string = "";
	public longitud: string = "";
	public currentDateTime: string = "";
	public isToggled: boolean = true;

	constructor(private myStorage: StorageService) {
		addIcons({ pin });
		this.updateDateTime();
	}

	updateDateTime() {
		const now = new Date();
		this.currentDateTime = now.toLocaleString();
	}

	async saveWindow() {
		const uniqueId: string = `win_${Date.now()}_${Math.floor(Math.random() * 10000)}`;

		const windowData = {
			id: uniqueId,
			windowName: this.windowName,
			width: {
				feet: this.width_ft ?? 0,
				inches: this.width_in ?? 0,
			},
			height: {
				feet: this.height_ft ?? 0,
				inches: this.height_in ?? 0,
			},
			timestamp: this.currentDateTime,
			locationOn: this.isToggled,
		};

		await this.myStorage.set(windowData.id, windowData);
		return windowData.id;
	}

	async testStorage() {
		const id = await this.saveWindow();
		const savedData = await this.myStorage.get(id);
		console.log("Saved data:", savedData);
	}

	async getAll() {
		const allWindows = await this.myStorage.getAll();
		console.log("all windows", allWindows);
	}
}
