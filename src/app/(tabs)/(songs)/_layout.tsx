import { StackScreenAndroid, StackScreenWithSearchBar } from '@/constants/layout'
import { defaultStyles } from '@/styles'
import { Stack } from 'expo-router'
import { Platform, View } from 'react-native'
import 'react-native-reanimated'

const SongsScreenLayout = () => {
	const platform = Platform.OS

	const platformStyle = platform === 'ios' ? StackScreenWithSearchBar : StackScreenAndroid

	return (
		<View style={defaultStyles.container}>
			<Stack>
				<Stack.Screen
					name="index"
					options={{
						...platformStyle,
						headerTitle: 'Songs',
					}}
				/>
			</Stack>
		</View>
	)
}

export default SongsScreenLayout
