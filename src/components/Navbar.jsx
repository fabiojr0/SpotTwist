import IconLink from "./IconLink";
import { House, MusicNotesSimple, MicrophoneStage, MusicNotesPlus } from "@phosphor-icons/react";

const Navbar = () => {

    const linkList = [
        
        {
            page: "/",
            icon:  <House weight="fill" color="#ffffff"/>,
            label: "Home"
        },
        {
            page: "/TopTracks",
            icon:  <MusicNotesSimple  weight="fill" color="#ffffff"/>,
            label: "Top Tracks"
        },
        {
            page: "/TopArtists",
            icon:  <MicrophoneStage weight="fill" color="#ffffff"/>,
            label: "Top Artists"
        },
        // {
        //     page: "/Discover",
        //     icon:  <MusicNotesPlus weight="fill"  color="#ffffff"/>,
        //     label: "Discover"
        // }    
    ]
    return <nav className="w-screen flex justify-between fixed bottom-0 bg-black p-2 md:w-24 md:pt-4 md:h-full md:static md:bg-blackfy md:rounded-lg">
        <div className="w-full flex justify-between gap-2 md:flex-col md:justify-start md:gap-4">
            {linkList.map((link) => {
                return <IconLink page={link.page} label={link.label} icon={link.icon} key={link.label}/>
            })}
        </div>
    </nav>
}

export default Navbar;