import { Track } from '@/types/Track'

export const trackTitleFilter = (title: string) => (track: Track) =>
	track.title?.toLowerCase().includes(title.toLowerCase())
