// TypesFromSerializers CacheKey 6774f7cbf07614cf9b4136fbd0c8b441
//
// DO NOT MODIFY: This file was automatically generated by TypesFromSerializers.
import type Composer from './Composer'
import type Video from './Video'

export default interface SongWithVideos {
  id: number
  composer: Composer
  title?: string
  videos: Video[]
}

