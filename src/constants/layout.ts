import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

import { colors } from './token'

export const StackScreenWithSearchBar: NativeStackNavigationOptions = {
	headerLargeTitle: true,
	headerLargeStyle: {
		backgroundColor: colors.background,
	},
	headerLargeTitleStyle: {
		color: colors.text,
	},
	headerTintColor: colors.text,
	headerTransparent: true,
	headerBlurEffect: 'prominent',
	headerShadowVisible: false,

	headerStyle: {
		backgroundColor: colors.background,
	},
	statusBarColor: colors.background,
}

export const StackScreenAndroid: NativeStackNavigationOptions = {
	//use search bar for android
	headerLargeTitle: true,
	headerStyle: {
		backgroundColor: colors.background,
	},
	statusBarColor: colors.background,
	headerTintColor: colors.text,
}
