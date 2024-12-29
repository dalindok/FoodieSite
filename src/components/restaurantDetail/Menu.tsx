import React, { useState } from "react";
import chickenSoup from "../../assets/menu/chicken soup.webp";
import { GiBread, GiForkKnifeSpoon } from "react-icons/gi";
import { TbSoup } from "react-icons/tb";
import { MdOutlineIcecream } from "react-icons/md";
import Search from "../Search";

// Menu data
const menuData = [
  { id: 1, category: "Breakfast", name: "Pancakes", description: "Delicious pancakes with syrup and soup.", price: "$5.00", image: "https://via.placeholder.com/150" },
  { id: 2, category: "Breakfast", name: "Omelette", description: "Fluffy omelette with veggies and soup.", price: "$4.50", image: "https://via.placeholder.com/150" },
  { id: 3, category: "Lunch", name: "Chicken Sandwich", description: "Grilled chicken sandwich and soup.", price: "$6.00", image: "https://via.placeholder.com/150" },
  { id: 4, category: "Lunch", name: "Caesar Salad", description: "Fresh salad with Caesar dressing and soup.", price: "$5.50", image: "https://via.placeholder.com/150" },
  { id: 5, category: "Dinner", name: "Steak", description: "Juicy steak cooked to perfection with soup.", price: "$12.00", image: "https://via.placeholder.com/150" },
  { id: 6, category: "Dinner", name: "Chicken Soup", description: "Warm and hearty chicken soup.", price: "$5.00", image: chickenSoup },
  { id: 7, category: "Dinner", name: "Chicken Soup", description: "Warm and hearty chicken soup.", price: "$5.00", image: chickenSoup },
  { id: 8, category: "Desserts", name: "Chocolate Cake", description: "Rich and moist chocolate cake.", price: "$4.00", image: "https://via.placeholder.com/150" },
  { id: 9, category: "Desserts", name: "Ice Cream", description: "Vanilla ice cream with toppings.", price: "$3.50", image: "https://via.placeholder.com/150" },
];

// Categories data with icons
const categories = [
  { name: "Breakfast", icon: <GiBread /> },
  { name: "Lunch", icon: <GiForkKnifeSpoon /> },
  { name: "Dinner", icon: <TbSoup /> },
  { name: "Desserts", icon: <MdOutlineIcecream /> },
];

const CategoriesMenu = () => {
  const [activeTab, setActiveTab] = useState("Dinner"); // Default to "Dinner" category

  // Filter logic: show all items if activeTab is "All", else filter by category
  const filteredMenu = activeTab === "All" ? menuData : menuData.filter((item) => item.category === activeTab);

  return (
    <div className="font-zain pl-20 pr-20 pt-0.5 pb-5 bg-slate-50">
      <Search />
      <p className="text-2xl font-semibold text-center mb-6 mt-5">Categories</p>

      {/* Category Tabs */}
      <div className="flex flex-row justify-center space-x-48 mb-5">
        {categories.map((category) => (
          <div
            key={category.name}
            className={`flex flex-row items-center justify-center px-2 h-14 border rounded-xl cursor-pointer transition-colors duration-300 ${
              activeTab === category.name
                ? "bg-customColor text-black"
                : "text-black border-customColor bg-white"
            }`}
            onClick={() => setActiveTab(category.name)}
          >
            <span className="text-2xl">{category.icon}</span>
            <p className="mt-2 font-light ml-2">{category.name}</p>
          </div>
        ))}
      </div>
      <p className="text-2xl font-semibold text-center mb-6">Menu</p>
      {/* Menu Items */}
      <div className=" grid-cols-3 grid gap-6 mt-10">
        {filteredMenu.map((item) => (
          <div className="flex flex-col border p-4 rounded-lg shadow-md bg-white">
          <div key={item.id} className=" flex flex-row">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-md mb-4" />
            <div className="flex flex-col ml-5">
            <h3 className="text-lg font-semibold mx-auto">{item.name}</h3>
            <p className="text-sm text-gray-600 items-start my-auto">{item.description}</p>
          </div> 
          </div> <p className="text-lg font-bold mt-2 ml-10">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;
