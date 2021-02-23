/**
 * This file is for picker styles
 */
import React, { FC } from 'react';
import {
	TouchableOpacityProps,
	TextProps,
	ViewProps,
	ScrollViewProps,
} from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';

import styled from 'styled-components/native';

import { ColorInterface } from '../../../global/interfaces/color-interface';
import { THEME } from '../../../global/theme';
import normalize from '../../../utils/normalizeText';

export const PickerScreenSafeAreaView: FC<SafeAreaViewProps> = styled.SafeAreaView`
	flex: 1;
	background-color: ${THEME.background};
`;

export const PickerScreenScrollView: FC<ScrollViewProps> = styled.ScrollView`
	flex: 2;
`;
export const PickerScreenView: FC<ViewProps> = styled.View`
	flex: 2;
	background-color: ${THEME.background};
	padding-vertical: 10px;
`;

export const ChoiceCard: React.FC<TouchableOpacityProps> = styled.TouchableOpacity`
	width: 100%;
	height: ${normalize(50)}px;
	background-color: ${THEME.cardColor};
	border-top-width: 0.5px;
	border-bottom-width: 0.5px;
	border-bottom-color: ${THEME.borderColor};
	border-top-color: ${THEME.borderColor};
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
`;

export const ChoiceText: React.FC<TextProps> = styled.Text`
	color: ${THEME.textColor};
	font-size: ${normalize(13)}px;
`;

export const ChoiceIconFlex: FC<ViewProps> = styled.View`
	justify-content: center;
	align-items: center;
	width: 10%;
`;

export const ChoiceIconView: FC<ViewProps & ColorInterface> = styled.View`
	width: ${normalize(30)}px;
	height: ${normalize(30)}px;
	background-color: ${({ color }: ColorInterface) => color || 'lightblue'};
	border-radius: ${normalize(15)}px;
	justify-content: center;
	align-items: center;
`;
