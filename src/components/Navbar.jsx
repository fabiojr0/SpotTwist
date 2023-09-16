import IconLink from "./IconLink";
import { House, MusicNotesSimple, MicrophoneStage, MusicNotesPlus } from "@phosphor-icons/react";

const Navbar = () => {

    const linkList = [
        
        {
            page: "/",
            icon:  <House size={20} weight="fill" color="#ffffff"/>,
            label: "Home"
        },
        {
            page: "/TopTracks",
            icon:  <MusicNotesSimple size={20} weight="fill" color="#ffffff"/>,
            label: "Top Tracks"
        },
        {
            page: "/TopArtists",
            icon:  <MicrophoneStage size={20} weight="fill" color="#ffffff"/>,
            label: "Top Artists"
        },
        {
            page: "/Discover",
            icon:  <MusicNotesPlus size={20} weight="fill"  color="#ffffff"/>,
            label: "Discover"
        }
    ]
    return <nav className="w-screen flex justify-between fixed bottom-0 bg-black p-2 ">
        <div className="w-full flex justify-between gap-2">
            {linkList.map((link) => {
                return <IconLink page={link.page} label={link.label} icon={link.icon} key={link.label}/>
            })}
        </div>
    </nav>
}

export default Navbar;