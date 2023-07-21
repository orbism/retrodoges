import {Tab} from "@headlessui/react";
import React, {useState} from "react";
import Link from "next/link";
import {usePathname} from 'next/navigation';

export const Tabs = (props: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const pathname = usePathname();

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className='flex items-start md:justify-between'>
                <Tab.List className="tab-list flex flex-col bordered p-3 pr-0">
                    <button className="upone tab"><Link href="/info" className={pathname == "/info" ? "nope" : ""}><span>../</span></Link></button>

                    {props.tabcontent.map((item: any) => (
                        <Tab className="tab" key={item.id}>
                            <div className="flex justify-between"><span>{item.title}</span><span className="text-green">{item.size}</span>
                            </div>
                        </Tab>

                    ))}
                    <div className="current-tab">{props.tabcontent[selectedIndex].title}</div>
                </Tab.List>
                <Tab.Panels className="tab-panels">
                    {props.tabcontent.map((item: any) => (
                        <Tab.Panel className="tab-panel bordered p-6" key={item.id}>
                            <div className="tab-panel-header">{item.tabTitle}</div>
                            <div className="tab-content">{item.content}</div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </div>
        </Tab.Group>
    )
}
