import type { ReviewsTypeProps } from "../typescript/type/props.type";
const ReviewsItem = ({ item }: ReviewsTypeProps) => {
  return (
    <>
      <div key={item.id}>
        <p>{item.userName}</p>
        <p>{item.rating}</p>
        <p>{item.comment}</p>
        <p>{item.createdAt}</p>
      </div>
    </>
  );
};

export default ReviewsItem;
