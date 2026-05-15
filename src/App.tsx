import "./App.css";
import { foods } from "./services/json/foods.json";
const App = () => {
  return (
    <>
      <section className="flex gap-4 justify-center">
        {foods.map((item) => {
          return (
            <section className="border border-red-400" key={item.id}>
              <h1>{item.name}</h1>
              <p>{item.slug}</p>
              <p>{item.description}</p>
              <p>{item.restaurant}</p>
              <p>{item.price}</p>
              <p>{item.discountPrice}</p>
              <p>{item.stock}</p>
              <p>{item.isAvailable}</p>
              <div>
                {item.tags.map((item, i) => {
                  return <div key={i}>{item}</div>;
                })}
              </div>

              {/* category */}

              <section>
                <h1 className="text-green-500 font-bold">Category</h1>
                <div className="">{item.category.id}</div>
                <div className="">{item.category.name}</div>
                <div className="">{item.category.slug}</div>
                <div className="">{item.category.icon}</div>
              </section>

              {/* images */}

              <section>
                <h1 className="text-green-500 font-bold">Images</h1>
                <div className="">
                  {item.images.map((item, i) => {
                    return (
                      <div key={i}>
                        <img src={item} alt="foods-image" />
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* subFoods */}

              <section>
                <h1 className="text-green-500 font-bold">subFoobs</h1>
                <div className="">
                  {item.subFoods.map((item) => {
                    return (
                      <div key={item.id}>
                        <p>{item.size}</p>
                        <p>{item.price}</p>
                        <p>{item.stock}</p>
                        <div>
                          {item.extras?.map((item, i) => {
                            return (
                              <div className="" key={i}>
                                {item}
                              </div>
                            );
                          })}
                        </div>
                        <p>{item.spiceLevel}</p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* reviews */}

              <section>
                <h1 className="text-green-500 font-bold">reviews</h1>
                <div className="">
                  {item.reviews.map((item) => {
                    return (
                      <div key={item.id}>
                        <p>{item.userName}</p>
                        <p>{item.rating}</p>
                        <p>{item.comment}</p>
                        <p>{item.createdAt}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default App;
