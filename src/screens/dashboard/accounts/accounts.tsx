import React, { useContext, useEffect, useRef, useState } from 'react';
import { Modalize } from 'react-native-modalize';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { observer } from 'mobx-react-lite';
import moment from 'moment';

import { THEME } from '../../../global/theme';
import { TRANSACTION_TYPES } from '../../../global/transaction-types';
import { CATEGORIES } from '../../../global/categories';
import { DATE_FORMAT } from '../../../global/format';
import { PICKER } from '../../../global/route-names';
import { NavigationInterface } from '../../../global/interfaces/navigation-interface';
import { RootStoreContext } from '../../../store/root-store';
import { useTheme } from 'styled-components';

import {
	AccountsCard,
	AccountsText,
	AccountsView,
	AccountsIcon,
	ModalTextView,
	CloseView,
	CloseText,
	ModalTextInput,
	PickerView,
	PickerCard,
	PickerText,
	PickerTextView,
	SaveButtonView,
	SaveButtonText,
	CloseTextButton,
} from './accounts.styled-components';
import { PickerCardInterface } from './accounts.interfaces';
import {
	ADD_RECORD,
	CATEGORY,
	DATE_AND_TIME,
	ICONS,
	INCOME,
	TRANSACTION_TYPE,
} from './accounts.config';

/**
 * @description Accounts Component
 * @memberof AppSapiens
 */
const Accounts = observer(
	({ navigation }: NavigationInterface): JSX.Element => {
		const [financeValue, setFinanceValue] = useState<string>('');
		const [transactionType, setTransactionType] = useState<string>(
			TRANSACTION_TYPES[0].name,
		);
		const [category, setCategory] = useState<string>(CATEGORIES[0].name);
		const [date] = useState(moment().format(DATE_FORMAT));
		const modalizeRef = useRef<Modalize>(null);
		const isIncome = transactionType === INCOME;
		const theme = useTheme();
		// Wallet Store
		const { walletStore } = useContext(RootStoreContext);
		const { addWallet } = walletStore;
		const isDisabled = financeValue === '0';

		const pickerInfo: PickerCardInterface[] = [
			{
				pickerTitle: TRANSACTION_TYPE,
				pickerValue: transactionType,
				onPress: (): void =>
					navigation.navigate(PICKER, {
						headerTitle: TRANSACTION_TYPE,
						choices: TRANSACTION_TYPES,
						setter: setTransactionType,
					}),
			},
			{
				pickerTitle: CATEGORY,
				pickerValue: category,
				onPress: (): void =>
					navigation.navigate(PICKER, {
						headerTitle: CATEGORY,
						choices: CATEGORIES,
						setter: setCategory,
					}),
			},
			{
				pickerTitle: DATE_AND_TIME,
				pickerValue: date,
				onPress: (): void => {},
			},
		];

		useEffect((): void => {
			if (financeValue === '') {
				setFinanceValue('0');
			}
			if (financeValue === 'NaN') {
				setFinanceValue('0');
			}
		}, [financeValue]);

		/**
		 * @description Opens modal
		 * @memberof AppSapiens
		 */
		const onOpen = (): void => {
			modalizeRef.current?.open();
		};

		/**
		 * @description Closes modal
		 * @memberof AppSapiens
		 */
		const onClose = (): void => {
			modalizeRef.current?.close();
		};

		/**
		 * @description On change handler
		 * @memberof AppSapiens
		 */
		const handleOnChange = (text: string): void => {
			const toBeValue = parseInt(text).toString();
			if (toBeValue !== 'NaN') setFinanceValue(toBeValue);
			else setFinanceValue('0');
		};

		/**
		 * @description renders picker card
		 * @memberof AppSapiens
		 */
		const renderPickerCard = ({
			pickerTitle,
			pickerValue,
			onPress,
		}: PickerCardInterface): JSX.Element => (
			<PickerCard onPress={onPress}>
				<AccountsText>{pickerTitle}</AccountsText>
				<PickerTextView>
					<PickerText>{pickerValue}</PickerText>
					<MaterialCommunityIcons
						name={ICONS.arrow_right}
						color={theme.iconColor}
						size={30}
					/>
				</PickerTextView>
			</PickerCard>
		);

		return (
			<>
				<AccountsView>
					<AccountsCard onPress={onOpen}>
						<AccountsIcon color={theme.incomeColor}>
							<FontAwesome5
								name={ICONS.plus}
								color={theme.iconColor}
								size={20}
							/>
						</AccountsIcon>
						<AccountsText>{ADD_RECORD}</AccountsText>
					</AccountsCard>
				</AccountsView>
				<Modalize
					ref={modalizeRef}
					modalStyle={{ backgroundColor: theme.background }}
					modalHeight={550}
				>
					<ModalTextView>
						<CloseView>
							<CloseTextButton onPress={onClose}>
								<CloseText>Cancel</CloseText>
							</CloseTextButton>
							<ModalTextInput
								income={isIncome}
								keyboardType="number-pad"
								onChangeText={handleOnChange}
								value={financeValue}
							/>
						</CloseView>
						<PickerView>
							{pickerInfo.map(
								(info: PickerCardInterface): JSX.Element =>
									renderPickerCard(info),
							)}
						</PickerView>
						<SaveButtonView
							disabled={isDisabled}
							income={isIncome}
							onPress={(): void => {
								addWallet({
									category,
									transactionType,
									amount: financeValue,
									date,
								});
								onClose();
								setFinanceValue('0');
							}}
						>
							<SaveButtonText>Save</SaveButtonText>
						</SaveButtonView>
					</ModalTextView>
				</Modalize>
			</>
		);
	},
);

export default Accounts;
