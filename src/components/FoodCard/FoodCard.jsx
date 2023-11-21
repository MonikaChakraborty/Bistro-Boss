import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";


const FoodCard = ({item}) => {
    const {name, image, price, recipe, _id} = item;
    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = food => {
      if(user && user.email){
        // TODO: send cart item to the database
        console.log(user.email, food);
        const cartItem = {
          menuId: _id,
          email: user.email,
          name,
          image,
          price
        }

        axios.post('http://localhost:5000/carts', cartItem)
        .then(res => {
          console.log(res.data);
          if(res.data.insertedId){
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
      }
      else{
        Swal.fire({
          title: "You are not logged in",
          text: "Please login to add a cart item",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Login"
        }).then((result) => {
          if (result.isConfirmed) {
            // send the user to the login page
            navigate('/login', {state: {from: location}})
          }
        });
      }

      // console.log(food, user.email);
    }

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
          <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100  border-0 border-b-4 border-[#BB8506] mt-4 ">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
