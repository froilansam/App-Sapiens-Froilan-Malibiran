/**
 * This file is for show more styles
 */
import styled from 'styled-components/native';

import normalize from '../../../utils/normalizeText';
import { ThemePropsInterface } from '../../interfaces/theme-interface';

export const ShowMoreView = styled.TouchableOpacity`
	flex-direction: row;
	justify-content: flex-end;
	margin-top: 10px;
	width: 100%;
	margin-bottom: 10px;
`;

export const ShowMoreText = styled.Text`
	color: ${({ theme }: ThemePropsInterface): string => theme.linkColor};
	font-size: ${normalize(12)}px;
	font-weight: bold;
`;
