"use client"; // this is a client component
import { Tabs } from "../components/tabs";
export default function Page() {

    const tabContent = [
        {
            title: 'Connecting Your Avatar',
            tabTitle: <>Join Multiple Metaverses</>,
            content: <>
                <p>
                    1 - Wallet Connect (Hyperfy.io, Oncyber.io, Hologram.xyz)
                    <br/>
                    In the profile settings section, please connect your wallet. Once you have signed in to grant access, click on the backpack icon to select your avatar.
                </p>
                <p>
                    2 - VRM Upload (Moemate.io, Upstreet.io, Substrata.info, Monaverse.com, Craftopia, Vrast)
                    <br/>
                    For these platforms, you will need to upload the VRM file (the 3D raw file of your RetroDoge) first. You can easily download your VRM, it is stored in the metadata smart contract of your RetroDoge. 
                    To do this, go to your OpenSea avatar page, under your avatar image, click on your token ID link in the details section.
                </p>
                
                <div className="image-gallery">
                    <div className="imgcont massive"><img src="clickvrm.png" alt="metaverse"/></div>
                </div>

                <p>
                    Then, a new tab will open; click on the VRM link, and it will automatically download your VRM.


                <div className="image-gallery">
                    <div className="imgcont massive2"><img src="tokenid.png" alt="metaverse"/></div>
                </div>

                    Once you have your VRM file, each platform has an upload section where you can add your VRM avatar file.
                </p>


            </>
        },
        {
            title: 'Where Can I Play?',
            tabTitle: <>Pick a Platform!</>,
            content: <>
                <p>
                    You can find a list of platforms and details on how to use your RetroDoge under the "Utility" section on this website. 
                </p>
                
            </>
        },
        {
            title: 'Meet other Retrodoges',
            tabTitle: <>Meet your Retrodoge friends in the metaverse</>,
            content: <>
                <p>
                    By selecting a common world from the list on hyperfy.io (for example), and you can meet up to chat and/or have fun playing car races, FPS games, and more. 
                    <br/>
                    Your friends simply need to connect their wallets, and you can all meet in common worlds and metaverses.
                </p>
                
            </>
        },
        {
            title: 'Multiple Retrodoges',
            tabTitle: <>Multiple Retrodoges in difference metaverses</>,
            content: <>
                <p>
                    You can hold as many RetroDoges as you want, especially in open metaverses. Once you are connected, it will display all the avatars that your wallet contains, and you are then free to choose the one you want to play or stream with.
                </p>
                
            </>
        },
        
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
