import { createContext } from 'react';

import { WalletStore } from './wallet-store';
import { ThemeStore } from './theme-store';

/**
 * @description A class for root store
 * @memberof AppSapiens
 */
export class RootStore {
	walletStore: WalletStore = new WalletStore();
	themeStore: ThemeStore = new ThemeStore();
}

export const RootStoreContext = createContext(new RootStore());
