import { ThemeProviderProps } from 'styled-components';

interface ThemeProps {
	background: string;
	borderColor: string;
	textColor: string;
	cardColor: string;
	iconColor: string;
	linkColor: string;
	incomeColor: string;
	expenseColor: string;
}
/**
 * @var {interface} ThemeInterface - Definition of Theme Interface
 * @memberof AppSapiens
 */
export interface ThemePropsInterface {
	theme: ThemeProps;
}
