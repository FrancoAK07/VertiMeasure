import { Component, OnDestroy, OnInit } from "@angular/core";
import { WindowCardComponent } from "../components/window-card/window-card.component";
import { IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons } from "@ionic/angular/standalone";
import { CommonModule } from "@angular/common";
import { WindowData } from "../interfaces/window-data.interface";
import { Subscription } from "rxjs";
import { SharedDataService } from "../services/shared-data";

@Component({
	selector: "app-filtered-windows",
	templateUrl: "./filtered-windows.component.html",
	styleUrls: ["./filtered-windows.component.scss"],
	imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonBackButton, IonButtons, WindowCardComponent, CommonModule],
})
export class FilteredWindowsComponent implements OnInit, OnDestroy {
	public windowsArray: WindowData[] = [];
	public currentWindowType: string = "";
	private dataSubscription: Subscription | undefined;
	private windowSubscription: Subscription | undefined;

	constructor(private sharedDataService: SharedDataService) {}

	ngOnInit() {
		this.dataSubscription = this.sharedDataService.windowDataArray$.subscribe((dataArray: WindowData[]) => {
			this.windowsArray = dataArray;
			console.log("Received array with size:", this.windowsArray.length);
		});

		this.windowSubscription = this.sharedDataService.windowType$.subscribe((type: string) => {
			this.currentWindowType = type;
			console.log("the window type received is", type);
		});
	}

	ngOnDestroy(): void {
		this.dataSubscription?.unsubscribe();
	}
}
