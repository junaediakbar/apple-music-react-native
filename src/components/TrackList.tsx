import { utilsStyles } from '@/styles'

import TrackListItem from '@/components/TrackListItem'
import { unknownTrackUrl } from '@/constants/images'
import React from 'react'
import { FlatList, FlatListProps, Text, View } from 'react-native'
import FastImage from 'react-native-fast-image'
import TrackPlayer, { Track } from 'react-native-track-player'

export type TrackListProps = Partial<FlatListProps<Track>> & {
	tracks: Track[]
}

const ItemDevider = () => (
	<View style={{ ...utilsStyles.itemSeparator, marginVertical: 9, marginLeft: 60 }} />
)
export default function TrackList({ tracks, ...flatlistProps }: TrackListProps) {
	const handleTrackSelect = async (track: Track) => {
		await TrackPlayer.load(track)
		await TrackPlayer.play()
	}
	return (
		<FlatList
			contentContainerStyle={{
				paddingTop: 10,
				paddingBottom: 128,
			}}
			data={tracks}
			ListEmptyComponent={() => (
				<View>
					<Text style={utilsStyles.emptyContentText}>No songs found</Text>
					<FastImage
						source={{ uri: unknownTrackUrl(), priority: FastImage.priority.normal }}
						style={utilsStyles.emptyContentImage}
					/>
				</View>
			)}
			ItemSeparatorComponent={ItemDevider}
			renderItem={({ item: track }) => (
				<TrackListItem track={track} onTrackSelect={handleTrackSelect} />
			)}
			{...flatlistProps}
		/>
	)
}
