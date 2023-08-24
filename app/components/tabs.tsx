import { Tab } from "@headlessui/react";
import React, { useState, useRef, useEffect } from "react";

export const Tabs = (props: any) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const contentRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // simple window check
        if (window.innerWidth < 1024) {
            contentRef.current?.scrollIntoView({
                behavior: "smooth"
            });
        }
    }, [selectedIndex]);

    return (
        <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
            <div className='tabbox items-start'>
                <Tab.List className="tab-list flex flex-col bordered p-3 pr-0">
                    {props.tabcontent.map((item: any) => (
                        <Tab className="tab" key={item.id}>
                            <div className="flex justify-between">
                                <span>{item.title}</span>
                                <span className="text-green">{item.size}</span>
                            </div>
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="tab-panels" ref={contentRef}>  {/* Attach the ref here */}
                    {props.tabcontent.map((item: any) => (
                        <Tab.Panel className="tab-panel bordered p-6" key={item.id}>
                            <div className="tab-panel-header">{item.tabTitle}</div>
                            <div className="tab-content">{item.content}</div>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </div>
        </Tab.Group>
    );
};
