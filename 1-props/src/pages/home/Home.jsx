import Gallery from "../../components/shared/gallery/Gallery"
import "./Home.scss"
const Home = () => {
    const arrayZapatillas = [
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
    const arrayZapatillas2 = [
      {
      title: "adidas",
      id: "1",
      description: "Show off your Snipcart support with a logo sticker!",
      price: "2.00",
      image:
        "https://www.bfgcdn.com/out/pictures/generated/product/1/215_215_90/sol_023-0944-0111_pic1_1.jpg",
    },
    {
      title: "hoka",
      id: "2",
      description: "Show off your Snipcart support with a logo sticker!",
      price: "2.00",
      image:
        "https://www.bfgcdn.com/out/pictures/generated/product/1/215_215_90/sol_023-0944-0111_pic1_1.jpg",
    }
    ]
  return (
    <>
    <h1>Home</h1>
    {/* este primer campo es el nombre que nosotros le damos a nuestro objeto/array a mandar, y el segundo campo es el objeto a mandar */}
    <Gallery miArray={arrayZapatillas}/>
    <Gallery miArray={arrayZapatillas2}/>
    </>
  )
}

export default Home