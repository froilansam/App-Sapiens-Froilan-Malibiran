import { action, makeObservable, observable } from 'mobx';

/**
 * @var {interface} Wallet - A definition of Wallet Interface
 * @memberof AppSapiens
 */
export interface Wallet {
	id?: number;
	category: string;
	transactionType: string;
	amount: string;
	date: string;
}

/**
 * @description Wallet Store
 * @memberof AppSapiens
 */
export class WalletStore {
	wallets: Wallet[] = [];
	constructor() {
		makeObservable(this, {
			wallets: observable,
			addWallet: action,
			deleteWallet: action,
		});
	}

	/**
	 * @description A function that adds record to the wallet
	 * @memberof AppSapiens
	 */
	addWallet = ({ category, transactionType, amount, date }: Wallet): void => {
		const walletItem: Wallet = {
			id: Math.random(),
			category,
			transactionType,
			amount,
			date,
		};
		this.wallets.push(walletItem);
	};

	/**
	 * @description A function that deletes record to the wallet
	 * @memberof AppSapiens
	 */
	deleteWallet = (id: number) => {
		const selectedIndex = this.wallets.findIndex(
			(wallet: Wallet) => wallet.id === id,
		);

		const wallets = this.wallets;
		this.wallets = [
			...wallets.slice(0, selectedIndex),
			...wallets.slice(selectedIndex + 1),
		];
	};
}
