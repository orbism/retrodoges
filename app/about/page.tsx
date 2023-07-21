"use client"; // this is a client component
import { Tabs } from "../components/tabs";
export default function Page() {

    const tabContent = [
        {
            title: 'What are Retrodoges?',
            tabTitle: <>Retro Doges</>,
            content: <>
                <p>Retrodoges is a collection of 6969 PFPs on the Ethereum blockchain lead by FeistyDao and Cryptopathic.</p>
                <p>The Retrodoge collection is a large pack of unique doges representing the FeistyDoge with an 80s and early 90s aesthetic.  
                </p>
            </>
        },
        {
            title: 'History',
            tabTitle: <>Our History</>,
            content: <>
                <p>The RetroDoge project started in May of 2022 after a brainstorming session at FeistyDao, led by CryptoPathic. </p>
                <p>The idea was to create a NFT collection that would bring together the community, by merging art and utility in a creative way. At the center of the discussion was the famous Kabosu NFT, called Feisty Doge. </p>
                <p>A resident artist of FeistyDAO, Lil’ Dojo came up with the idea of representing Feisty Doge in his own vision, with three primary tenets in mind: </p>
                <p>I. Cuteness | II. Time Distortion | III. Utility </p>
                
            </>
        },
        {
            title: 'Team',
            tabTitle: <>The Team</>,
            content: <>
                <p>Our team is comprised of members of FeistyDAO. </p> 
                <p>   An international and diverse group, collectively our skills check all the boxes of blockchain development, web marketing, community building, and more.
                </p>
                <div className="team">
                    <div className="team-member">
                        <img src="/lildojo.png" alt="Team member photo"/>
                        <h3>Lil'Dojo</h3>
                        <p>Artistic Directory</p>
                    </div>
                    <div className="team-member">
                        <img src="/cgknight.png" alt="Team member photo"/>
                        <h3>CGKNIGHT</h3>
                        <p>Graphics Lead</p>
                    </div>
                    <div className="team-member">
                        <img src="/path.png" alt="Team member photo"/>
                        <h3>Path</h3>
                        <p>NFD Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="/ultron.png" alt="Team member photo"/>
                        <h3>UltronMKII</h3>
                        <p>Marketing Lead</p>
                    </div>
                    <div className="team-member">
                        <img src="/louisinho.png" alt="Team member photo"/>
                        <h3>Louisinho</h3>
                        <p>Summer Intern</p>
                    </div>
                    <div className="team-member">
                        <img src="/Dres.png" alt="Team member photo"/>
                        <h3>Dresdlr</h3>
                        <p>Advisor / Helper</p>
                    </div>
                    <div className="team-member">
                        <img src="/renruts.png" alt="Team member photo"/>
                        <h3>Renruts</h3>
                        <p>Twitter Manager</p>
                    </div>
                    <div className="team-member">
                        <img src="/orb.png" alt="Team member photo"/>
                        <h3>Orb</h3>
                        <p>Dev/Operations</p>
                    </div>
                </div>

                
            </>
        },
        {
            title: 'Community',
            tabTitle: <>Community Model</>,
            content: <>
                <p>Our community model is focused on growth with multiple partners. </p>
                <p>FeistyDAO, Webaverse, Hyperfy and HologramLabs are all committed to growing together, in the metaverse, in VR, and across multiple social and chat networks. 
                </p>
                <p>
                    NEED GFX ASSETS / BRANDING / GIF
                </p>
            </>
        },
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
