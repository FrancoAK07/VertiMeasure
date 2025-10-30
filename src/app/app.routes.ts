import { Routes } from "@angular/router";
import { FilteredWindowsComponent } from "./filtered-windows/filtered-windows.component";

export const routes: Routes = [
	{
		path: "",
		loadChildren: () => import("./tabs/tabs.routes").then((m) => m.routes),
	},
	{
		path: "filteredWindows",
		component: FilteredWindowsComponent,
	},
];
