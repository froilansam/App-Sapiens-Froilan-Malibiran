/**
 * @var {interface} Params - Definitio  of Params Interface inside Navigation Interface
 * @memberof AppSapiens
 */
interface Params {
	[key: string]: any;
}

/**
 * @var {interface} NavigationInterface - Definition of Navigation Interface
 * @memberof AppSapiens
 */
export interface NavigationInterface {
	navigation: {
		navigate: (route: string, params?: Params) => void;
		goBack: () => void;
	};
	route?: {
		params: Params;
	};
}
