import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { WindowData } from "../interfaces/window-data.interface";

@Injectable({
	providedIn: "root",
})
export class SharedDataService {
	private _windowDataArray = new BehaviorSubject<WindowData[]>([]);
	private _windowType = new BehaviorSubject<string>("");

	public readonly windowDataArray$: Observable<WindowData[]> = this._windowDataArray.asObservable();
	public readonly windowType$: Observable<string> = this._windowType.asObservable();

	constructor() {}

	setWindowDataArray(data: WindowData[]): void {
		this._windowDataArray.next(data);
		console.log("SharedDataService: Data array updated", data);
	}

	setWindowType(type: string): void {
		this._windowType.next(type);
		console.log("the window type is", type);
	}

	getCurrentWindowDataArray(): WindowData[] {
		return this._windowDataArray.getValue();
	}

	getCurrentWindowType(): string {
		return this._windowType.getValue();
	}
}
