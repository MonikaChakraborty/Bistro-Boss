const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={image}
          alt=""
        />
      </figure>
      <p className="bg-[#111827] text-white absolute right-0 mr-8 mt-4 px-3 py-1 font-semibold">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p className="">{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline bg-slate-100  border-0 border-b-4 border-[#BB8506] mt-4 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
