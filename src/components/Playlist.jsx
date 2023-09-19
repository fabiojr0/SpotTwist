import { Circle } from '@phosphor-icons/react'
import React from 'react'

function Playlist({item}) {
    return (
        <a className="flex flex-col " key={item.id} href={item.external_urls.spotify} target="_blank">
              <img src={item.images[0].url} alt={item.name} className="aspect-square object-cover"/>
              <p className="text-sm text-zinc-50 line-clamp-1 w-full">{item.name}</p>
              <p className="text-xs text-zinc-400 font-semibold w-full line-clamp-2">Playlist <Circle size={10} weight="fill"  className="inline pb-1"/> {item.description.length > 1 ? item.description.replace('&#x2F;','/') : `From ${userInfos.display_name}`}</p>
        </a>
    )
}

export default Playlist
