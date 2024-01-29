import "../styles/menu.css";
import Pizza from "./pizza";
export default function Menu({pizzaArray}) {
  return (
    <main className="main-menu">
      <h1>our menu</h1>
      <div className="pizzas">
        {pizzaArray.map((pizzaObj) => <Pizza pizza = {pizzaObj}></Pizza>)}
      </div>
    </main>
  );
}
