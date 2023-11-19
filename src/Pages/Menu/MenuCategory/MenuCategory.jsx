import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="">
      {/* {title && <Cover img={coverImg} title={"Our Menu"}></Cover>} */}

      { title && <Cover img={img} title={title}></Cover>}

      <div className="grid md:grid-cols-2 gap-10 my-16 max-w-screen-xl mx-auto">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto mb-6 flex justify-center">
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4  text-xl">
          Order Now
        </button>
      </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
