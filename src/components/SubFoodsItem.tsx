import type { SubFoodsProps } from "../typescript/type/props.type";
const SubFoodsItem = ({ item }: SubFoodsProps) => {
  return (
    <>
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
    </>
  );
};

export default SubFoodsItem;
