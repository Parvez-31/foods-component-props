import ReviewsItem from "./ReviewsItem";
import SubFoodsItem from "./SubFoodsItem";
import type { FoodsItemProps } from "../typescript/type/props.type";

const FoodsItem = ({ item }: FoodsItemProps) => {
  return (
    <>
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
              return <SubFoodsItem key={item.id} item={item} />;
            })}
          </div>
        </section>

        {/* reviews */}

        <section>
          <h1 className="text-green-500 font-bold">reviews</h1>
          <div className="">
            {item.reviews.map((item) => {
              return <ReviewsItem key={item.id} item={item} />;
            })}
          </div>
        </section>
      </section>
    </>
  );
};

export default FoodsItem;
