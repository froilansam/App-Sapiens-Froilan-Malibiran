import React, { useEffect, useState } from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationInterface } from '../../interfaces/navigation-interface';
import { ThemePropsInterface } from '../../interfaces/theme-interface';
import { THEME } from '../../theme';

import Header from '../header/header';

import { PickerInterface } from './picker.interfaces';
import {
	ChoiceCard,
	ChoiceIconFlex,
	ChoiceIconView,
	ChoiceText,
	PickerScreenSafeAreaView,
	PickerScreenScrollView,
	PickerScreenView,
} from './picker.styled.components';

/**
 * @description A component for picker
 * @memberof AppSapiens
 */
const Picker = ({ navigation, route }: NavigationInterface): JSX.Element => {
	const [headerTitle, setHeaderTitle] = useState<string>('');
	const { params } = route;
	const { choices, setter } = params;

	useEffect((): void => {
		if (params.headerTitle) {
			setHeaderTitle(params.headerTitle);
		}
	}, [params]);

	/**
	 * @description A functional component for choices
	 * @memberof AppSapiens
	 */
	const renderChoices = (choice: PickerInterface): JSX.Element => (
		<ChoiceIconFlex>
			<ChoiceIconView color={choice.color}>
				{choice.type === 'MaterialCommunityIcon' ? (
					<MaterialCommunityIcons
						name={choice.icon || ''}
						color={({ theme }: ThemePropsInterface): string =>
							theme.iconColor
						}
						size={15}
					/>
				) : (
					<FontAwesome5Icon
						name={choice.icon || ''}
						color={({ theme }: ThemePropsInterface): string =>
							theme.iconColor
						}
						size={15}
					/>
				)}
			</ChoiceIconView>
		</ChoiceIconFlex>
	);

	return (
		<PickerScreenSafeAreaView>
			<Header headerTitle={headerTitle} />
			<PickerScreenScrollView>
				<PickerScreenView>
					{choices.map(
						(choice: PickerInterface): JSX.Element => (
							<ChoiceCard
								onPress={(): void => {
									setter(choice.name);
									navigation.goBack();
								}}
							>
								{choice.icon && renderChoices(choice)}
								<ChoiceText>{choice.name}</ChoiceText>
							</ChoiceCard>
						),
					)}
				</PickerScreenView>
			</PickerScreenScrollView>
		</PickerScreenSafeAreaView>
	);
};

Picker.propTypes = {};

export default Picker;
