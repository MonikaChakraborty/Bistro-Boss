import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
   
    return (
        <section className="mb-24">
            <SectionTitle
            heading={"Popular Menu"}
            subHeading={"From Our Menu"}
            >
            </SectionTitle>
          
            <div className="text-center mt-10">
            <button className="btn btn-outline border-0 border-b-4 mt-4 ">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;