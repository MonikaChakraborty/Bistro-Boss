import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import axios from "axios";

const PopularMenu = ({ item }) => {
  // const {name, image, price, recipe, _id} = item;
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // TODO: send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: food._id,
        email: user.email,
        name: food.name,
        image: food.image,
        price: food.price,
      };

      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please login to add a cart item",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }

    // console.log(food, user.email);
  };

  return (
    <section className="mb-24 max-w-screen-xl mx-auto">
      <SectionTitle
        heading={"Popular Menu"}
        subHeading={"From Our Menu"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {popular.map((item, index) => (
          <div key={index} className="">
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={item.image} alt="" />
              </figure>
              <p className="bg-[#111827] text-white absolute right-0 mr-8 mt-4 px-3 py-1 font-semibold">
                ${item.price}
              </p>
              <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{item.name}</h2>
                <p className="">{item.recipe}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="btn btn-outline bg-slate-100  border-0 border-b-4 border-[#BB8506] mt-4 "
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/menu">
          <button className="btn btn-outline border-0 border-b-4 mt-4">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};



export default PopularMenu;
