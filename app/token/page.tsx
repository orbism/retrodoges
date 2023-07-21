"use client"; // this is a client component
import { Tabs } from "../components/tabs";
export default function Page() {

    const tabContent = [
        {
            title: 'Token Specs',
            tabTitle: <>Overview</>,
            content: <>
                <p>The Retrodoges collection has 6969 unique combinations.</p>
                <p>There are 14 different trait layers.</p>
                <p>There are exactly 3 types of Doges.</p>
                <h3>NEED TO UPDATE IMAGES FOR THESE</h3>

                <div className="team tunnel">
                    <div className="team-member">
                        <img src="/rd_1.png" alt="Team member photo"/>
                        <h3>Common Doge</h3>
                    </div>
                    <div className="team-member">
                        <img src="/rd_2.png" alt="Team member photo"/>
                        <h3>Rare Doge</h3>
                    </div>
                    <div className="team-member">
                        <img src="/rd_3.png" alt="Team member photo"/>
                        <h3>Legendary Doge</h3>
                    </div>
                </div>
            </>
        },
        {
            title: 'Technicals & Hidden Content',
            tabTitle: <>Technical Deets</>,
            content: <>
                <p>All the traits are generated in JSON files, distributed, and used to generate all PFPs in .avif format (2D) as well as for hidden contents in .glb & .vrm files (3D). 
 </p>
                <p>
                    NEED GFX ASSETS / BRANDING / GIF
                </p>
                <div className="team tunnel">
                    <div className="team-member">
                        <img src="/rd_1.png" alt="Team member photo"/>
                        <h3>Common Doge</h3>
                    </div>
                    <div className="team-member">
                        <img src="/rd_2.png" alt="Team member photo"/>
                        <h3>Rare Doge</h3>
                    </div>
                    <div className="team-member">
                        <img src="/rd_3.png" alt="Team member photo"/>
                        <h3>Legendary Doge</h3>
                    </div>
                </div>

            </>
        },
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
