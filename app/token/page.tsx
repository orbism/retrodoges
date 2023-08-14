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

                
                <div className="image-gallery">
                    <div className="imgcont big"><img src="common.jpg" alt="common retrodoge"/><h3>Common Doge</h3></div>
                    <div className="imgcont big"><img src="rare.jpg" alt="rare retrodoges"/><h3>Rare Doge</h3></div>
                    <div className="imgcont big"><img src="legendary.jpg" alt="legendary retrodoge"/><h3>Legendary Doge</h3></div>
                </div>
            </>
        },
        {
            title: 'Technicals & Hidden Content',
            tabTitle: <>Technical Deets</>,
            content: <>
                <p>All the traits are generated in JSON files, distributed, and used to generate all PFPs in .avif format (2D) as well as for hidden contents in .glb & .vrm files (3D). 
 </p>
                <div className="image-gallery">
                    <div className="imgcont fit"><img src="avif.jpg" alt="retrodoges avif asset"/><h3>.avif</h3></div>
                    <div className="imgcont fit"><img src="vrm.png" alt="retrodoges vrm asset"/><h3>.vrm</h3></div>
                    <div className="imgcont fit"><img src="glb.png" alt="retrodoges glb asset"/><h3>.glb</h3></div>
                </div>

            </>
        },
    ];

    return (
        <Tabs tabcontent={tabContent} />
    )
}
