import React, { useContext } from 'react';

import { Dimensions } from 'react-native';

import CardTitle from '../../../global/components/card-title/card-title';
import ShowMore from '../../../global/components/show-more/show-more';
import { Wallet } from '../../../store/wallet-store';
import { RECORD_LIST } from '../../../global/route-names';
import { NavigationInterface } from '../../../global/interfaces/navigation-interface';
import { RootStoreContext } from '../../../store/root-store';

import { AccountsText } from '../accounts/accounts.styled-components';

import {
	RecordCard,
	RecordListsView,
	RecordView,
} from './record.styled-components';
import { observer } from 'mobx-react-lite';
import RecordItem from './record-item/record-item';

/**
 * @description Records Component
 * @memberof AppSapiens
 */
const Records = observer(
	({ navigation }: NavigationInterface): JSX.Element => {
		const { walletStore } = useContext(RootStoreContext);
		const { wallets, deleteWallet } = walletStore;

		return (
			<RecordView>
				<RecordCard>
					<CardTitle title="Records" />
					<RecordListsView>
						{wallets && wallets.length > 0 ? (
							wallets.map((wallet: Wallet, index: number):
								| JSX.Element
								| undefined => {
								if (index < 3)
									return (
										<RecordItem
											wallet={wallet}
											deleteWallet={deleteWallet}
										/>
									);
							})
						) : (
							<AccountsText>No Record</AccountsText>
						)}
					</RecordListsView>
					<ShowMore
						onPress={(): void => navigation.navigate(RECORD_LIST)}
					/>
				</RecordCard>
			</RecordView>
		);
	},
);

export default Records;
