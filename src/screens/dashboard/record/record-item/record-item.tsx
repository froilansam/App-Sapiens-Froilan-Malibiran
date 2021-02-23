import React from 'react';
import { Alert } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import numeral from 'numeral';

import { Wallet } from '../../../../store/wallet-store';
import { CATEGORIES } from '../../../../global/categories';
import { PickerInterface } from '../../../../global/components/picker/picker.interfaces';
import { THEME } from '../../../../global/theme';

import { INCOME } from '../../accounts/accounts.config';

import {
	RecordCategoryFlex,
	RecordCategoryText,
	RecordDate,
	RecordDetailsFlex,
	RecordIconFlex,
	RecordIconView,
	RecordItemView,
	RecordMoney,
} from '../record.styled-components';

/**
 * @description Record Item Component
 * @memberof AppSapiens
 */
const RecordItem = ({
	wallet,
	deleteWallet,
}: {
	wallet: Wallet;
	deleteWallet: (id: number) => void;
}): JSX.Element => {
	const selectedCategory = CATEGORIES.find(
		(category: PickerInterface): boolean =>
			category.name === wallet.category,
	);

	/**
	 * @description Long press handler
	 * @memberof AppSapiens
	 */
	const handleLongPress = (): void => {
		Alert.alert(
			'Are you sure?',
			'Do you want to delete this record?',
			[
				{
					text: 'Cancel',
					onPress: (): void => {},
					style: 'cancel',
				},
				{
					text: 'Delete',
					onPress: (): void => {
						deleteWallet(wallet.id || 0);
					},
				},
			],
			{ cancelable: false },
		);
	};

	/**
	 * @description On press handler
	 * @memberof AppSapiens
	 */
	const handlePress = (): void => {
		Alert.alert('Hold it to delete');
	};

	return (
		<RecordItemView onLongPress={handleLongPress} onPress={handlePress}>
			<RecordIconFlex>
				<RecordIconView color={selectedCategory?.color}>
					{selectedCategory?.type === 'MaterialCommunityIcon' ? (
						<MaterialCommunityIcons
							name={selectedCategory?.icon || ''}
							color={THEME.iconColor}
							size={15}
						/>
					) : (
						<FontAwesome5Icon
							name={selectedCategory?.icon || ''}
							color={THEME.iconColor}
							size={15}
						/>
					)}
				</RecordIconView>
			</RecordIconFlex>
			<RecordCategoryFlex>
				<RecordCategoryText>{wallet.category}</RecordCategoryText>
			</RecordCategoryFlex>
			<RecordDetailsFlex>
				<RecordMoney income={wallet.transactionType === INCOME}>
					${numeral(wallet.amount).format('0,0.00')}
				</RecordMoney>
				<RecordDate>{wallet.date}</RecordDate>
			</RecordDetailsFlex>
		</RecordItemView>
	);
};

export default RecordItem;
