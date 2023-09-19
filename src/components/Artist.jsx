import { Heart, SpotifyLogo } from '@phosphor-icons/react'
import React from 'react'

function Artist({item,index}) {
    
    const toUpperFirts = (array) => {
        return array.map((item)=> {
            return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();

        })
    }

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-2'>
                <p className='text-zinc-50 text-xs w-2'>{index}</p>
                <img src={item.images[0].url} className='aspect-square h-8'/>
                <div className='flex flex-col'>
                    <p className='text-zinc-50 text-sm line-clamp-1 w-full'>{item.name}</p>
                    <p className='text-zinc-300 text-xs line-clamp-1'>{toUpperFirts(item.genres).join(' - ')}</p>
                </div>
            </div>
            <p className='text-lightGreen flex gap-1 items-center'><Heart weight={item.follow ? 'fill' : 'regular'}/><a target='_blank' href={item.external_urls.spotify}><SpotifyLogo weight='fill' /></a></p>
        </div>
    )
}

export default Artist
