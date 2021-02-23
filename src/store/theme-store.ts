import { action, makeObservable, observable } from 'mobx';

/**
 * @var {interface} ThemeInterface - A definition of ThemeInterface Interface
 * @memberof AppSapiens
 */
export interface ThemeInterface {
	isDay: boolean;
}

/**
 * @description Theme Store
 * @memberof AppSapiens
 */
export class ThemeStore {
	theme: ThemeInterface = {
		isDay: false,
	};
	constructor() {
		makeObservable(this, {
			theme: observable,
			toggleTheme: action,
		});
	}

	/**
	 * @description A function that toggle the theme
	 * @memberof AppSapiens
	 */
	toggleTheme = ({ isDay }: ThemeInterface): void => {
		const themeItem: ThemeInterface = {
			isDay,
		};
		this.theme = themeItem;
	};
}
