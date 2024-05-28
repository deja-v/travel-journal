import Header from "./header.jsx"
import Content from './content.jsx'
import data from './data.jsx'


function App() {
  const cards = data.map((item)=>{
    return (<Content 
    title={item.title}
    location={item.location}
    mapsUrl={item.googleMapsUrl}
    startDate={item.startDate}
    endDate={item.endDate}
    desc={item.description}
    imageUrl={item.imageUrl}
    />)
  })
  
  console.log(cards)
  return (
    <>
    <Header />
    <section className="cards-list">
                {cards}
    </section>
    </>
  )
}

export default App
