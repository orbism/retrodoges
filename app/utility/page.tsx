"use client"; // this is a client component
import { Tabs } from "../components/tabs";
export default function Page() {

    const tabContent = [
        {
            title: 'Multiverse Overview',
            tabTitle: <>Utility - Metaverse</>,
            content: <>
                <h2 className="important">The most important thing for us is <strong>Interoperability.</strong></h2>
                <p>In addition to being unique pieces of art in a sizeable NFT collection, the creative team has thought deeply about fun being the corner stone of the project's utility. As fans of gaming and the Web3 world, the concept of Multiverse is the perfect fit for our team and the community we are building. </p>
                <p>To pursue the gamification aspect, the RetroDoge project has set up a collaboration with Webaverse, Hyperfy and HologramLabs as leaders in the field of open world metaverses and live stream allowing customization driven gaming experiences.</p>
                <p>In order to integrate the RetroDoge avatars into the metaverses, the artist team generated corresponding .glb & .vrm files that pair with each generated PFP. Essentially, the holder of a token from the collection gets both the original artwork, and a 3D avatar in the metaverses reflecting their PFP's traits. </p>
                <p>With access to the metaverses with their avatars, holders will have the chance to be a part of another active Web3 community, where they can meet and chat with each other, and members of other projects. </p>
                <p>In addition to web3 perks, the hidden content of the .vrm files will allow Vtube features (for Twitch, Zoom, Animaze, and more), which is the format used for face-morphing across platforms. </p>
                <br></br>
                <p>The infinite possibilities of the metaverses will allow the RetroDoge team to create many different worlds, as well as quests to play and earn. In order to enter the metaverses, the FeistyDAO has purchased its own land. On the Feisty / RetroDoge lands, the holders will be able to wander and meet other members of the community openly - by holding a RetroDoge PFP, you will have a key to tokengated property that hosts a diverse, thriving group of individuals. </p>
                <p>As time passes, value will increase with the introduction of different games. From delivery quests to car races, and FPS to guild wars, quests and incentives will evolve over time to bring fresh experiences and new rewards. Our community will grow alongside our world in the metaverses.</p>

                <div className="image-gallery">
                    <div className="imgcont huge"><img src="rdgif2.gif" alt="metaverse"/></div>
                    <div className="imgcont huge"><img src="rdgif3.gif" alt="metaverse"/></div>
                </div>


            </>
        },
        {
            title: 'Hyperfy',
            tabTitle: <>Hyperfy Details</>,
            content: <>
                <p>Introducing Hyperfy: Unlock a new dimension of interaction for your profile picture (PFP) with Hyperfy, a cutting-edge product that breathes life into your PFP by transforming it into a dynamic 3D entity. </p>

                <iframe className="ytvideo" src="https://www.youtube.com/embed/RbS2C4p0qIE?si=0G1ZCu2Ati9Q1qac" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <p>Immerse yourself in a vibrant community experience as you engage with fellow members, not just within your community but across various communities. Step into the RD metaverse through our Hyperfy world and witness your PFP come alive in ways you've never imagined. To get started, simply link your wallet via Metamask or Wallet Connect – it's a seamless process that opens the door to a world of captivating interactions. Join us on this exciting journey by visiting [<a target="_blank" href="https://hyperfy.io/retrodoge">RD Hyperfy World</a>] and watch your PFP evolve into a dynamic conduit of connection and creativity.</p>
               
                <br/>
            </>
        },
        {
            title: 'Moemate',
            tabTitle: <>Moemate: Your Living RD Assistant</>,
            content: <>
                <p>Elevate your RetroDoge experience with Moemate – the AI assistant that brings your RD to life, offering assistance and information whenever you need it. </p>
                    
                <iframe className="ytvideo" src="https://www.youtube.com/embed/zH704EF9YOE?si=YOvyOVbgjzE4EmIQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <p>By uploading your VRM asset, you unlock a world where your RD becomes more than an avatar, becoming an interactive companion. Explore the possibilities at [<a target="_blank" href="https://www.moemate.io/">Moemate</a>] and let your RD's vibrant personality enhance your journey.</p>
            </>
        },
        {
            title: 'Hologram Labs',
            tabTitle: <>Hologram Labs: Embrace the RD Persona</>,
            content: <>
                <p>Enter the RD persona like never before with Hologram Labs. Whether streaming on Twitch or engaging in a Google Meet call, Hologram Labs transforms you into your RD self. </p>
                
                <iframe className="ytvideo" src="https://www.youtube.com/embed/2EjOjcY_d7g?si=VBKFbQBmeLsnXdF1" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <p>Seamlessly connect via Metamask or Wallet Connect, and let your RD charm shine through. Discover the future of interaction at [<a target="_blank" href="https://www.hologram.xyz/">Hologram Labs</a>] and engage in a new dimension of virtual presence.</p>
                
                <br/>
            </>
        },
        {
            title: 'Substrata',
            tabTitle: <>Substrata: Unveil the Substrata Metaverse</>,
            content: <>
                <p>Step into the captivating Substrata metaverse and redefine your RD experience. </p>
                    
                <iframe className="ytvideo" src="https://www.youtube.com/embed/iiMdEsjdPKg?si=pPNeTM7Iyeaf7CNN" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                <p>Through VRM export, you can seamlessly immerse yourself in a world of endless possibilities. Discover more at [<a target="_blank" href="https://substrata.info/">Substrata</a>] and become a part of a vibrant community that celebrates creativity and connection.</p>

        
                
                <br/>
            </>
        },
        {
            title: 'OnCyber',
            tabTitle: <>OnCyber: Dive into the OnCyber Metaverse</>,
            content: <>
                <p>Embark on a journey into the OnCyber metaverse, where your RD takes center stage. </p>

                <iframe className="ytvideo" src="https://www.youtube.com/embed/BwZJTBRL4dk?si=71DJ57MvBPn-rhg4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                <p>Connect through Metamask or Wallet Connect and explore the endless horizons of this virtual realm. Unveil the future of digital interaction at [<a target="_blank" href="https://oncyber.io/">OnCyber</a>] and let your RD be your guide.</p>
                
                <br/>
            </>
        },
        {
            title: 'Monaverse',
            tabTitle: <>Monaverse: Shape Your Reality with Monaverse</>,
            content: <>
                <p>In Monaverse's immersive metaverse, your RD takes on a new life. Upload your VRM to their server and watch as your character becomes a part of your chosen environment. </p>

                <iframe className="ytvideo" src="https://www.youtube.com/embed/GFS_lmTnI8A?si=bfclmggmkrp3FFX8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                <p>Begin your transformation at [<a target="_blank" href="https://monaverse.com/">Monaverse</a>] and experience a universe where imagination knows no bounds.</p>
                
                <br/>
            </>
        },
        {
            title: 'Wonder Studio',
            tabTitle: <>Wonder Studio: Make Every Scene Yours</>,
            content: <>
                <p>Wonder Studio introduces a revolutionary way to insert yourself into videos. </p>

                <iframe className="ytvideo" src="https://www.youtube.com/embed/q5gjPXfWLho?si=bmF3FYJToiaNgyaY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    
                <p>Track your movements, replace characters, and create a cinematic experience that's uniquely yours. Elevate your content at [<a target="_blank" href="https://wonderdynamics.com/">Wonder Studio</a>] and redefine the way you interact with media.</p>
                
                <br/>
            </>
        },
        {
            title: 'GTA',
            tabTitle: <>GTA: The RD Adventure in GTA</>,
            content: <>
                <p>Experience Grand Theft Auto like never before with your RD identity. Submit your VRM to the Chilling Chiliz team and watch as your RD navigates the thrilling world of GTA. </p>
                    
                <iframe className="ytvideo" src="https://www.youtube.com/embed/VoPb78cJ_LY?si=dJXa_Hvn0Qu8zZKJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                <p>Dive into the action at [<a target="_blank" href="https://linktr.ee/chillingchiliz">Chilling Chiliz</a>] and embrace the fusion of virtual and gaming realms.</p>

                <br/>
            </>
        },
        {
            title: 'Craftopia',
            tabTitle: <>Craftopia: Craft Your RD Journey</>,
            content: <>
                <p>Craftopia takes gaming to a whole new level by allowing you to upload your VRM and become your RD character. </p>
                    
                <iframe className="ytvideo" src="https://www.youtube.com/embed/tVHg_PY4GNs?si=ASgetlPZKjavXlbw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                <p>Immerse yourself in this enchanting world and shape your own adventure. Begin your journey at [<a target="_blank" href="https://store.steampowered.com/app/1307550/Craftopia/">Craftopia</a>] and explore a universe where creativity knows no bounds.</p>
                
                <br/>
            </>
        },
        {
            title: 'Upstreet',
            tabTitle: <>Upstreet - Create Endlessly</>,
            content: <>
                <p>Drag and drop your avatar into the wonderful world of Upstreet. This new metaverse also offers many promising and fun opportunities where builders can create endlessly. </p>
                    
                <iframe width="560" height="315" src="https://www.youtube.com/embed/tVHg_PY4GNs?si=89TUFiQJrorpCoSp" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                
                <p><a target="_blank" href="https://upstreet.ai/">Check out Upstreet by clicking here.</a></p>

                <br/>
            </>
        },
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
