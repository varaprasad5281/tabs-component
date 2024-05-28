import { useState } from 'react';

const Tabs = () => {
    const tabs = [
        {
            id: 1,
            tabHead: "Tab 1",
            tabContent: "This is Tab 1"
        },
        {
            id: 2,
            tabHead: "Tab 2",
            tabContent: "This is Tab 2"
        },
        {
            id: 3,
            tabHead: "Tab 3",
            tabContent: "This is Tab 3"
        },
    ];

    // Set the default active tab to the first tab
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const handleClick = (id) => {
        const selectedTab = tabs.find(tab => tab.id === id);
        setActiveTab(selectedTab); // Setting activeTab to the selected tab object
        console.log(selectedTab.tabContent); // Logging the content of the selected tab
    };

    return (
        <div>
            <h1>This is Tabs and their respective content</h1>
            {tabs.map((item) => (
                <button onClick={() => handleClick(item.id)} key={item.id}>
                    {item.tabHead}
                </button>
            ))}
            {activeTab && (
                <div>
                    <p>{activeTab.tabContent}</p>
                </div>
            )}
        </div>
    );
};

export default Tabs;
