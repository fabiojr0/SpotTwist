import { Heart, SpotifyLogo } from '@phosphor-icons/react'
import React from 'react'

function Track({item, index}) {
    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <p className='text-zinc-50 text-xs w-2'>{index}</p>
                <img src={item.album.images[0].url} className='aspect-square h-8'/>
                <div className='flex flex-col'>
                    <p className='text-zinc-50 text-sm line-clamp-1 w-full'>{item.name}</p>
                    <p className='text-zinc-300 text-xs line-clamp-1'>{item.artists[0].name}</p>
                </div>
            </div>
            <p className='text-lightGreen flex gap-1 items-center'><Heart weight='regular'/><SpotifyLogo weight='fill' /></p>
        </div>
    )
}

export default Track
