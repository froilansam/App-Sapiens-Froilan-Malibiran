import React, { FC, useContext, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
	RecordListSafeAreaView,
	RecordListScrollView,
	RecordListView,
} from './record-list.styled-components';
import { RECORD_LIST } from '../../../../global/route-names';
import { RootStoreContext } from '../../../../store/root-store';
import RecordItem from '../record-item/record-item';
import { Wallet } from '../../../../store/wallet-store';
import Header from '../../../../global/components/header/header';
import { AccountsText } from '../../accounts/accounts.styled-components';

/**
 * @description Record List Component
 * @memberof AppSapiens
 */
const RecordList = observer(
	(): JSX.Element => {
		// Mobx Wallet Store
		const { walletStore } = useContext(RootStoreContext);
		const { wallets, deleteWallet } = walletStore;

		return (
			<RecordListSafeAreaView>
				<Header headerTitle={RECORD_LIST} />
				<RecordListScrollView>
					<RecordListView>
						{wallets && wallets.length > 0 ? (
							wallets.map((wallet: Wallet, index: number):
								| JSX.Element
								| undefined => (
								<RecordItem
									wallet={wallet}
									deleteWallet={deleteWallet}
								/>
							))
						) : (
							<AccountsText>No Record</AccountsText>
						)}
					</RecordListView>
				</RecordListScrollView>
			</RecordListSafeAreaView>
		);
	},
);

export default RecordList;
