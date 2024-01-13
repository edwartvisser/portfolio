import Card from '@/components/card'; 
import Navigation from '@/components/navigation';

export default function Home() {
  return (
    <div>
      <header className="bg-gray-100 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <div className="logo">
                <img src="path-to-your-logo.png" alt="Logo" className="h-8" />
            </div>
           
            <Navigation activePage="/" />
        </div>
    </header>

    <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
        <Card title="Card Title 1" description="This is a description for card 1." />
        <Card title="Card Title 2" description="This is a description for card 2." />
        <Card title="Card Title 3" description="This is a description for card 3." />
        <Card title="Card Title 4" description="This is a description for card 4." />

        <Card title="Card Title 11" description="This is a description for card 11." />
        <Card title="Card Title 21" description="This is a description for card 21." />
        <Card title="Card Title 31" description="This is a description for card 31." />
        <Card title="Card Title 41" description="This is a description for card 41." />
            
        </div>
    </main>
    </div>
  )
}
