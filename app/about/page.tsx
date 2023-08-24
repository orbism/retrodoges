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
                <div className="image-gallery">
                    <div className="imgcont"><img src="01.png" alt="Image 01"/></div>
                    <div className="imgcont"><img src="02.png" alt="Image 02"/></div>
                    <div className="imgcont"><img src="03.png" alt="Image 03"/></div>
                    <div className="imgcont"><img src="04.png" alt="Image 04"/></div>
                    <div className="imgcont"><img src="05.png" alt="Image 05"/></div>
                    <div className="imgcont"><img src="06.png" alt="Image 06"/></div>
                    <div className="imgcont"><img src="07.png" alt="Image 07"/></div>
                </div>


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
                        <img src="/lildojo.jpg" alt="Team member photo"/>
                        <h3>Lil'Dojo</h3>
                        <p>Artistic Director</p>
                    </div>
                    <div className="team-member">
                        <img src="/cgknight.jpg" alt="Team member photo"/>
                        <h3>CGKNIGHT</h3>
                        <p>Graphics Lead</p>
                    </div>
                    <div className="team-member">
                        <img src="/path.jpg" alt="Team member photo"/>
                        <h3>Path</h3>
                        <p>NFD Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="/ultron.jpg" alt="Team member photo"/>
                        <h3>UltronMKII</h3>
                        <p>Marketing Lead</p>
                    </div>
                    <div className="team-member">
                        <img src="/louisinho.jpg" alt="Team member photo"/>
                        <h3>Louisinho</h3>
                        <p>Summer Intern</p>
                    </div>
                    <div className="team-member">
                        <img src="/dres.jpg" alt="Team member photo"/>
                        <h3>Dresdlr</h3>
                        <p>Advisor / Helper</p>
                    </div>
                    <div className="team-member">
                        <img src="/renruts.jpg" alt="Team member photo"/>
                        <h3>Renruts</h3>
                        <p>Twitter Manager</p>
                    </div>
                    <div className="team-member">
                        <img src="/orb.jpg" alt="Team member photo"/>
                        <h3>Orb</h3>
                        <p>DevOps / Web</p>
                    </div>
                    <div className="team-member">
                        <img src="/chax.jpg" alt="Team member photo"/>
                        <h3>Chax</h3>
                        <p>Metadata Expert</p>
                    </div>
                </div>

                
            </>
        },
        {
            title: 'Community',
            tabTitle: <>Community Model</>,
            content: <>
                <p>Our community model is focused on growth with multiple partners. </p>
                <p>Hyperfy, FeistyDAO, Moemate by Webaverse, and HologramLabs are all committed to growing together, in the metaverse, in VR, and across multiple social and chat networks. 
                </p>
                <div className="image-gallery">
                    <div className="imgcont big"><img src="hyperfy.png" alt="Hyperfy"/></div>
                    <div className="imgcont big"><img src="hologramlabs.gif" alt="Hologram Labs"/></div>
                    <div className="imgcont big"><img src="moemate.png" alt="Moemate by Webaverse"/></div>
                </div>

                <img className="centered" src="/rdgif1.gif" alt="utility"/>
            </>
        },
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
