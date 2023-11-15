import SectionTitle from "../../../components/SectionTitle/SectionTitle";

 import img1 from '../../../assets/home/featured.jpg';
 import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20 bg-slate-500 bg-opacity-70">
            <SectionTitle heading="Featured Item" subHeading="check it out"></SectionTitle>
           <div>
           <div className="md:flex justify-center items-center pb-20 pt-12 px-36 bg-gray-900 bg-opacity-50">
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className="md:ml-10 ">
                    <p>Aug 20, 2029</p>
                    <p className="uppercase">Where can I get some?</p>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque mollitia libero similique facere perferendis ea molestias quos ullam et, ut nisi obcaecati temporibus nemo sequi eum aliquam, officia aut recusandae quia autem atque ratione repudiandae. Repellendus, similique dolore. Debitis, aut sapiente! Hic, fuga? Enim et expedita rem inventore illum!</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Featured;


// import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import img1 from '../../../assets/home/featured.jpg';
// import './Featured.css';

// const Featured = () => {
//   return (
//     <div className="featured-item bg-fixed text-white pt-8 my-20 relative">
//       <SectionTitle  heading="Featured Item" subHeading="check it out" />
//       <div className="md:flex justify-center items-center pb-20 pt-12 px-36 relative z-10">
//         <div>
//           <img src={img1} alt="" />
//         </div>
//         <div className="md:ml-10">
//           <p>Aug 20, 2029</p>
//           <p className="uppercase">Where can I get some?</p>
//           <p className="">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam doloremque mollitia libero similique facere
//             perferendis ea molestias quos ullam et, ut nisi obcaecati temporibus nemo sequi eum aliquam, officia aut
//             recusandae quia autem atque ratione repudiandae. Repellendus, similique dolore. Debitis, aut sapiente! Hic,
//             fuga? Enim et expedita rem inventore illum!
//           </p>
//           <button className="btn btn-outline">Order Now</button>
//         </div>
//       </div>
//       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
//     </div>
//   );
// };

// export default Featured;
