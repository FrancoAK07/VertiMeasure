import { Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

export const routes: Routes = [
	{
		path: "tabs",
		component: TabsPage,
		children: [
			{
				path: "home",
				loadComponent: () => import("../home/home.page").then((m) => m.Home),
			},
			{
				path: "summary",
				loadComponent: () => import("../summary/summary.page").then((m) => m.Summary),
			},
			{
				path: "addWindow",
				loadComponent: () => import("../addWindow/addWindow.page").then((m) => m.AddWindow),
			},
			{
				path: "",
				redirectTo: "/tabs/home",
				pathMatch: "full",
			},
		],
	},
	{
		path: "",
		redirectTo: "/tabs/home",
		pathMatch: "full",
	},
];
