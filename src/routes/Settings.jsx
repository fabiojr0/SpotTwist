import React from 'react'
import Button from '../components/Button'
import { SpotifyLogo } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

function Settings() {
    const navigate = useNavigate();
    const logout = () => {
        const accessToken = localStorage.removeItem('accessToken')
        navigate('/Auth')
    }

    return (
        <div className='p-2 flex'>
            <Button onClick={() => logout()} selected>Logout<SpotifyLogo weight='fill'/></Button>
        </div>
    )
}

export default Settings
