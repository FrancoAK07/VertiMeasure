import { Injectable } from "@angular/core";
import { Storage } from "@ionic/storage-angular";

@Injectable({
	providedIn: "root",
})
export class StorageService {
	private _storage: Storage | null = null;

	constructor(private storage: Storage) {
		this.init();
	}

	async init() {
		// Initialize storage only once
		this._storage = await this.storage.create();
	}

	// Save data
	async set(key: string, value: any) {
		await this._storage?.set(key, value);
	}

	// Get data
	async get(key: string): Promise<any> {
		return await this._storage?.get(key);
	}

	// Remove data
	async remove(key: string) {
		await this._storage?.remove(key);
	}

	// Clear all
	async clear() {
		await this._storage?.clear();
	}

	//get keys
	async keys() {
		return await this._storage?.keys();
	}

	//get all data
	async getAll(): Promise<{ [key: string]: any }> {
		const allData: any[] = [];
		const keys = await this._storage?.keys();

		if (keys) {
			for (const key of keys) {
				const value = await this._storage?.get(key);
				allData.push(value);
			}
		}

		return allData;
	}
}
