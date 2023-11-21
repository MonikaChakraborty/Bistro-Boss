import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
       <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>

      <Cover img={orderCoverImg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className='mb-10 border-b-2 max-w-screen-xl mx-auto flex justify-center mt-10 text-lg font-semibold bg-amber-600 rounded w-96 py-2 text-white'

        >
          <Tab selectedClassName="bg-white text-gray-600 rounded-t border">Salad</Tab>
          <Tab selectedClassName="bg-white text-gray-600 rounded-t">Pizza</Tab>
          <Tab selectedClassName="bg-white text-gray-600 rounded-t">Soup</Tab>
          <Tab selectedClassName="bg-white text-gray-600 rounded-t">Dessert</Tab>
          <Tab selectedClassName="bg-white text-gray-600 rounded-t">Drinks</Tab>
        </TabList>

        <TabPanel className=''>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        
        <TabPanel>
        <OrderTab items={soup}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={desserts}></OrderTab>
        </TabPanel>

        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};



export default Order;
