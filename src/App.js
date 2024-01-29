import "./styles/app.css";
import Header from "./components/header";
import Menu from "./components/menu";
import Footer from "./components/footer";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: "6$",
    photoName: "pizzas/focaccia.jpg",
    photoSlider: "pizzas-slider/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: "10$",
    photoName: "pizzas/margherita.jpg",
    photoSlider: "pizzas-slider/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: "12$",
    photoName: "pizzas/spinaci.jpg",
    photoSlider: "pizzas-slider/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: "12$",
    photoName: "pizzas/funghi.jpg",
    photoSlider: "pizzas-slider/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: "15$",
    photoName: "pizzas/salamino.jpg",
    photoSlider: "pizzas-slider/salami.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: "18$",
    photoName: "pizzas/prosciutto.jpg",
    photoSlider: "pizzas-slider/Prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <>
      <div className="container">
        <Header></Header>
        <Menu pizzaArray={pizzaData}></Menu>
      </div>
      <Footer></Footer>
    </>
  );
}
export default App;
