import { Component } from "@angular/core";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from "@ionic/angular/standalone";
import { WindowCardComponent } from "../components/window-card/window-card.component";
import { CommonModule } from "@angular/common";
import { SharedDataService } from "../services/shared-data";
import { WindowData } from "../interfaces/window-data.interface";
import { Router } from "@angular/router";

@Component({
	selector: "app-summary",
	templateUrl: "summary.page.html",
	styleUrls: ["summary.page.scss"],
	imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, WindowCardComponent, CommonModule],
})
export class Summary {
	constructor(private router: Router, private sharedDataService: SharedDataService) {}

	public groupedWindows: any[] = [];

	myArray = [
		{
			window_nameCode: "typeA",
			imageUrl: "https://picsum.photos/800/450",
			content: "Description for card 1...",
			nameCode: "type1",
			width_ft: 2,
			width_in: 5,
			height_ft: 6,
			height_in: 7,
			captured_at: "2025-10-29 10:00",
			latitude: `48° 51\' 29" N`,
			longitude: `2° 17\' 40" E`,
			image_uri: "",
			thumb_uri: "",
		},
		{
			window_nameCode: "typeB",
			imageUrl: "https://picsum.photos/800/450",
			content: "Description for card 1...",
			nameCode: "type1",
			width_ft: 2,
			width_in: 5,
			height_ft: 6,
			height_in: 7,
			captured_at: "2025-10-29 10:00",
			latitude: `48° 51\' 29" N`,
			longitude: `2° 17\' 40" E`,
			image_uri: "",
			thumb_uri: "",
		},
		{
			window_nameCode: "typeC",
			imageUrl: "https://picsum.photos/800/450",
			content: "Description for card 1...",
			nameCode: "type1",
			width_ft: 2,
			width_in: 5,
			height_ft: 6,
			height_in: 7,
			captured_at: "2025-10-29 10:00",
			latitude: `48° 51\' 29" N`,
			longitude: `2° 17\' 40" E`,
			image_uri: "",
			thumb_uri: "",
		},
		{
			window_nameCode: "typeA",
			imageUrl: "https://picsum.photos/800/450",
			content: "Description for card 1...",
			nameCode: "type1",
			width_ft: 2,
			width_in: 5,
			height_ft: 6,
			height_in: 7,
			captured_at: "2025-10-29 10:00",
			latitude: `48° 51\' 29" N`,
			longitude: `2° 17\' 40" E`,
			image_uri: "",
			thumb_uri: "",
		},
		{
			window_nameCode: "typeB",
			imageUrl: "https://picsum.photos/800/450",
			content: "Description for card 1...",
			nameCode: "type1",
			width_ft: 2,
			width_in: 5,
			height_ft: 6,
			height_in: 7,
			captured_at: "2025-10-29 10:00",
			latitude: `48° 51\' 29" N`,
			longitude: `2° 17\' 40" E`,
			image_uri: "",
			thumb_uri: "",
		},
		{
			window_nameCode: "typeB",
			imageUrl: "https://picsum.photos/800/450",
			content: "Description for card 1...",
			nameCode: "type1",
			width_ft: 2,
			width_in: 5,
			height_ft: 6,
			height_in: 7,
			captured_at: "2025-10-29 10:00",
			latitude: `48° 51\' 29" N`,
			longitude: `2° 17\' 40" E`,
			image_uri: "",
			thumb_uri: "",
		},
	];

	groupByType(): void {
		this.groupedWindows = Object.values(
			this.myArray.reduce((accumulator: any, currentItem: any) => {
				const windowCode = currentItem.window_nameCode;
				if (accumulator[windowCode]) {
					accumulator[windowCode].quantity += 1;
					currentItem.width_ft && accumulator[windowCode].width_ft.push(currentItem.width_ft);
					currentItem.width_in && accumulator[windowCode].width_in.push(currentItem.width_in);
					currentItem.height_ft && accumulator[windowCode].height_ft.push(currentItem.height_ft);
					currentItem.height_in && accumulator[windowCode].height_in.push(currentItem.height_in);
				} else {
					accumulator[windowCode] = {
						window_nameCode: windowCode,
						width_ft: currentItem.width_ft ? [currentItem.width_ft] : [],
						width_in: currentItem.width_in ? [currentItem.width_in] : [],
						height_ft: currentItem.height_ft ? [currentItem.height_ft] : [],
						height_in: currentItem.height_in ? [currentItem.height_in] : [],
						image_uri: currentItem.image_uri ?? currentItem.image_uri,
						quantity: 1,
					};
				}
				return accumulator;
			}, {})
		);
		console.log(this.groupedWindows);
	}

	typeA: WindowData[] = [];
	typeB: WindowData[] = [];
	typeC: WindowData[] = [];

	filterByType(): void {
		this.typeA = this.myArray.filter((window) => window.window_nameCode === "typeA");

		this.typeB = this.myArray.filter((window) => window.window_nameCode === "typeB");

		this.typeC = this.myArray.filter((window) => window.window_nameCode === "typeC");

		console.log(this.typeA);
		console.log(this.typeB);
		console.log(this.typeC);
	}

	public goToDetailPage(windowType: string): void {
		let arrayToSend: WindowData[] = [];

		switch (windowType) {
			case "typeA":
				arrayToSend = this.typeA;
				break;
			case "typeB":
				arrayToSend = this.typeB;
				break;
			case "typeC":
				arrayToSend = this.typeC;
				break;
			default:
				console.warn(`Unknown window type: ${windowType}. Not navigating.`);
				return;
		}

		this.sharedDataService.setWindowDataArray(arrayToSend);
		this.sharedDataService.setWindowType(windowType);

		this.router.navigate(["/filteredWindows"]);
	}

	ngOnInit() {
		this.filterByType();
		this.groupByType();
	}
}
