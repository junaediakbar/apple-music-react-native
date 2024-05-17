import unknownArtistImage from '@/assets/unknown_artist.png'
import unknownAlbumImage from '@/assets/unknown_track.png'
import { Image, Platform } from 'react-native'

export const unknownTrackUrl = () => {
	if (Platform.OS === 'web') {
		return (Image.resolveAssetSource = unknownAlbumImage)
	}
	return Image.resolveAssetSource(unknownAlbumImage).uri
}

export const unknownArtistUrl = () => {
	if (Platform.OS === 'web') {
		return (Image.resolveAssetSource = unknownArtistImage)
	}
	return Image.resolveAssetSource(unknownArtistImage).uri
}
