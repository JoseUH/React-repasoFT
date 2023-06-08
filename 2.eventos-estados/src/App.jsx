import './App.css'
import Gallery from './components/Gallery/Gallery'
// import Contador from './components/contador/Contador'

function App() {
  const array = [
    {
      title: "Hoka one",
      id: "1",
      description: "Show off your Snipcart support with a logo sticker!",
      price: "2.00",
      image:
        "https://www.bfgcdn.com/out/pictures/generated/product/1/215_215_90/sol_023-0944-0111_pic1_1.jpg",
    },
    {
      title: "Nike",
      id: "2",
      description: "Show off your Snipcart support with a logo sticker!",
      price: "2.00",
      image:
        "https://www.bfgcdn.com/out/pictures/generated/product/1/215_215_90/sol_023-0944-0111_pic1_1.jpg",
    }
  ]

  return (
    <>
      {/* <Contador/> */}
      <Gallery array={array}/>
    </>
  )
}

export default App
