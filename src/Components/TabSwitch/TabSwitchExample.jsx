import TabSwitch from './TabSwitch';

function TabSwitchExample() {
  // Define your tabs data
  const tabs = [
    {
      label: 'Mobile',
      content: (
        <div>
          <h3>Mobile Phones</h3>
          <p>Browse our latest collection of smartphones from top brands.</p>
          <ul>
            <li>iPhone 15 Pro</li>
            <li>Samsung Galaxy S24</li>
            <li>Google Pixel 8</li>
          </ul>
        </div>
      )
    },
    {
      label: 'Laptops',
      content: (
        <div>
          <h3>Laptops & Computers</h3>
          <p>High-performance laptops for work and gaming.</p>
          <ul>
            <li>MacBook Pro M3</li>
            <li>Dell XPS 13</li>
            <li>ASUS ROG Gaming</li>
          </ul>
        </div>
      )
    },
    {
      label: 'Accessories',
      content: (
        <div>
          <h3>Tech Accessories</h3>
          <p>Essential accessories for your devices.</p>
          <ul>
            <li>Wireless Headphones</li>
            <li>Phone Cases</li>
            <li>Charging Cables</li>
          </ul>
        </div>
      )
    }
  ];

  // Optional: Handle tab change events
  const handleTabChange = (index, tab) => {
    console.log(`Switched to tab: ${tab.label} (index: ${index})`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Tab Switch Example</h2>
      <TabSwitch 
        tabs={tabs} 
        defaultTab={0}
        onTabChange={handleTabChange}
      />
    </div>
  );
}

export default TabSwitchExample;
