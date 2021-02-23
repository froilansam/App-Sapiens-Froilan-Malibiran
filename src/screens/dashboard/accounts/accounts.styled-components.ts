/**
 * This file is for account styles
 */
import React, { FC } from 'react';
import {
	Dimensions,
	TextInput,
	TextInputProps,
	TouchableOpacityProps,
	TextProps,
	ViewProps,
} from 'react-native';

import styled from 'styled-components/native';

import { ColorInterface } from '../../../global/interfaces/color-interface';
import { ThemePropsInterface } from '../../../global/interfaces/theme-interface';
import { THEME } from '../../../global/theme';
import normalize from '../../../utils/normalizeText';

const { width } = Dimensions.get('window');

export const AccountsView: FC<ViewProps & ThemePropsInterface> = styled.View`
	flex-direction: row;
	justify-content: space-evenly;
	padding-horizontal: 25px;
`;

export const AccountsCard: FC<
	TouchableOpacityProps & ThemePropsInterface
> = styled.TouchableOpacity`
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.cardColor};
	width: 100%;
	min-height: ${normalize(30)}px;
	border-radius: 10px;
	margin-vertical: 10px;
	align-items: center;
	justify-content: flex-start;
	flex-direction: row;
	padding: 10px;
`;

export const AccountsText: React.FC<
	TextProps & ThemePropsInterface
> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
	font-size: ${normalize(13)}px;
`;

export const AccountsAmount: React.FC<
	TextProps & ThemePropsInterface
> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
	font-size: ${normalize(15)}px;
	font-weight: bold;
`;

export const AccountsIcon: FC<ViewProps & ColorInterface> = styled.View`
	height: ${normalize(30)}px;
	width: ${normalize(30)}px;
	background-color: ${({ color }: ColorInterface) => color};
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	margin-right: 10px;
`;

export const ModalTextView: FC<ViewProps & ThemePropsInterface> = styled.View`
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.cardColor};
	height: ${normalize(100)}px;
	width: 100%;
	border-top-right-radius: 15px;
	border-top-left-radius: 15px;
`;

export const CloseView: FC<ViewProps & ThemePropsInterface> = styled.View`
	width: 100%;
	padding-left: 10px;
	padding-vertical: 10px;
`;

export const CloseTextButton: FC<
	TouchableOpacityProps & ThemePropsInterface
> = styled.TouchableOpacity`
	justify-content: center;
`;

export const CloseText: React.FC<TextProps & ThemePropsInterface> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.linkColor};
	font-size: ${normalize(12)}px;
	font-weight: bold;
`;

export const ModalTextInput: React.FC<
	TextInputProps & { income?: boolean }
> = styled.TextInput`
	text-align: right;
	width: 100%;
	color: ${({
		income,
		theme,
	}: { income?: boolean } & ThemePropsInterface): string =>
		income ? theme.incomeColor : theme.expenseColor};
	font-size: ${normalize(30)}px;
	font-weight: bold;
	padding: 10px;
`;

export const AccountKeyboardAvoidView = styled.KeyboardAvoidingView`
	flex: 1;
	justify-content: flex-start;
`;

export const PickerView: FC<ViewProps & ThemePropsInterface> = styled.View`
	width: 100%;
	margin-top: 50px;
`;
export const PickerCard: React.FC<
	TouchableOpacityProps & ThemePropsInterface
> = styled.TouchableOpacity`
	width: 100%;
	height: ${normalize(50)}px;
	background-color: ${({ theme }: ThemePropsInterface): string =>
		theme.cardColor};
	border-top-width: 0.5px;
	border-bottom-width: 0.5px;
	border-bottom-color: ${({ theme }: ThemePropsInterface): string =>
		theme.borderColor};
	border-top-color: ${({ theme }: ThemePropsInterface): string =>
		theme.borderColor};
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

export const PickerTextView: FC<ViewProps & ThemePropsInterface> = styled.View`
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

export const PickerText: React.FC<
	TextProps & ThemePropsInterface
> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.borderColor};
	font-size: ${normalize(13)}px;
	text-align: right;
`;

export const SaveButtonView: FC<
	TouchableOpacityProps & { income: boolean; disabled: boolean }
> = styled.TouchableOpacity`
	margin-horizontal: 10px;
	background-color: ${({ income, theme }: { income: boolean }): string =>
		income ? theme.incomeColor : theme.expenseColor};
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	margin-top: 10px;
	opacity: ${({ disabled }: { disabled: boolean }) => (disabled ? 0.3 : 1)};
`;

export const SaveButtonText: React.FC<
	TextProps & ThemePropsInterface
> = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.textColor};
	font-size: ${normalize(12)}px;
	font-weight: bold;
	padding: 10px;
`;
