import { createContext } from 'react';

import { WalletStore } from './wallet-store';

/**
 * @description A class for root store
 * @memberof AppSapiens
 */
export class RootStore {
	walletStore: WalletStore = new WalletStore();
}

export const RootStoreContext = createContext(new RootStore());
