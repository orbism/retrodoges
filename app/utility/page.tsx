"use client"; // this is a client component
import { Tabs } from "../components/tabs";
export default function Page() {

    const tabContent = [
        {
            title: 'Multiverse Overview',
            tabTitle: <>Utility - Metaverse</>,
            content: <>
                <p>In addition to being unique pieces of art in a sizeable NFT collection, the creative team has thought deeply about fun being the corner stone of the project's utility. As fans of gaming and the Web3 world, the concept of Multiverse is the perfect fit for our team and the community we are building. </p>
                <p>To pursue the gamification aspect, the RetroDoge project has set up a collaboration with Webaverse, Hyperfy and HologramLabs as leaders in the field of open world metaverses and live stream allowing customization driven gaming experiences.</p>
                <p>In order to integrate the RetroDoge avatars into the metaverses, the artist team generated corresponding .glb & .vrm files that pair with each generated PFP. Essentially, the holder of a token from the collection gets both the original artwork, and a 3D avatar in the metaverses reflecting their PFP's traits. </p>
                <p>With access to the metaverses with their avatars, holders will have the chance to be a part of another active Web3 community, where they can meet and chat with each other, and members of other projects. </p>
                <p>In addition to web3 perks, the hidden content of the .vrm files will allow Vtube features (for Twitch, Zoom, Animaze, and more), which is the format used for face-morphing across platforms. </p>
                <br></br>
                <p>The infinite possibilities of the metaverses will allow the RetroDoge team to create many different worlds, as well as quests to play and earn. In order to enter the metaverses, the FeistyDAO has purchased its own land. On the Feisty / RetroDoge lands, the holders will be able to wander and meet other members of the community openly - by holding a RetroDoge PFP, you will have a key to tokengated property that hosts a diverse, thriving group of individuals. </p>
                <p>As time passes, value will increase with the introduction of different games. From delivery quests to car races, and FPS to guild wars, quests and incentives will evolve over time to bring fresh experiences and new rewards. Our community will grow alongside our world in the metaverses.</p>


            </>
        },
        {
            title: 'Webaverse',
            tabTitle: <>Webaverse Details</>,
            content: <>
                <p>Project Deets + Media</p>
            </>
        },
        {
            title: 'Hyperfy',
            tabTitle: <>Hyperfy Details</>,
            content: <>
                <p>Project Deets + Media</p>
            </>
        },
        {
            title: 'HologramLabs',
            tabTitle: <>Hologram Labs Details</>,
            content: <>
                <p>Project Deets + Media</p>
            </>
        },
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
