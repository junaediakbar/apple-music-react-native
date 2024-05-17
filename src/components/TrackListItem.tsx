import { unknownTrackUrl } from '@/constants/images'
import { colors, fontSize } from '@/constants/token'
import { defaultStyles } from '@/styles'
import { Entypo } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import { Track, useActiveTrack } from 'react-native-track-player'

export type TrackItemProps = {
	track: Track
	onTrackSelect: (track: Track) => void
}

export default function TrackListItem({ track, onTrackSelect }: TrackItemProps) {
	const isTrackActive = useActiveTrack()?.url === track.url

	return (
		<TouchableHighlight onPress={() => onTrackSelect(track)}>
			<View style={{ ...styles.trackItemContainer }}>
				<View>
					<Image
						source={{
							uri: track.artwork ?? unknownTrackUrl(),
						}}
						style={{
							...styles.trackArtworkImage,
							opacity: isTrackActive ? 0.6 : 1,
						}}
					/>
				</View>
				<View
					style={{
						flex: 1,
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}
				>
					<View style={{ width: '100%' }}>
						<Text
							numberOfLines={1}
							style={{
								...styles.trackTitleText,
								color: isTrackActive ? colors.primary : colors.text,
							}}
						>
							{track.title}
						</Text>
						{track.artist && (
							<Text
								numberOfLines={1}
								style={{
									...styles.trackArtistText,
								}}
							>
								{track.artist}
							</Text>
						)}
					</View>
					<Entypo name="dots-three-horizontal" size={18} color={colors.icon} />
				</View>
			</View>
		</TouchableHighlight>
	)
}
const styles = StyleSheet.create({
	trackItemContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		columnGap: 14,
		paddingRight: 20,
	},
	trackArtworkImage: {
		width: 50,
		height: 50,
		borderRadius: 8,
	},
	trackTitleText: {
		...defaultStyles.text,
		fontSize: fontSize.sm,
		fontWeight: '600',
		maxWidth: '90%',
	},
	trackArtistText: {
		...defaultStyles.text,
		color: colors.textMuted,
		fontSize: 14,
		marginTop: 4,
	},
})
