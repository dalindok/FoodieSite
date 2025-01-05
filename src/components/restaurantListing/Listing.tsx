import Restaurant from "../../assets/restaurant.jpg";
import RestaurantItem from "../RestaurantItem";
const listings: IRestaurant[] = [
  {
    id: 1,
    name: "Street Wok",
    description: "Modern food with a rustic twist.",
    image: Restaurant,
    price: 12.23,
  },
  {
    id: 2,
    name: "Urban Bites",
    description: "Modern food with a rustic twist.",
    image: Restaurant,
    price: 12.23,
  },
  {
    id: 3,
    name: "Cozy Corner",
    description: "A place to relax and enjoy.",
    image: Restaurant,
    price: 12.23,
  },
  {
    id: 4,
    name: "Food Haven",
    description: "Savor every bite in a delightful setting.",
    image: Restaurant,
    price: 12.23,
  },
  {
    id: 5,
    name: "Tasty Treats",
    description: "Delicious food, unforgettable taste.",
    image: Restaurant,
    price: 12.23,
  },
  {
    id: 6,
    name: "Grill & Chill",
    description: "Experience food with a difference.",
    image: Restaurant,
    price: 12.23,
  },
];

const Listing = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {listings.map((item) => (
          <RestaurantItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Listing;
