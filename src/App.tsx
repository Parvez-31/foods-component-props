import "./App.css";
import FoodsItem from "./components/FoodsItem.tsx";
import { foods } from "./services/json/foods.json";
const App = () => {
  return (
    <>
      <section className="flex gap-4 justify-center">
        {foods.map((item) => {
          return <FoodsItem key={item.id} item={item} />;
        })}
      </section>
    </>
  );
};

export default App;
