import Listing from "../components/restaurantListing/Listing";
import Search from "../components/restaurantListing/Search";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function RestaurantListing() {
  return (
    <div>
      <Nav />
      <Header />
      <p className="text-center justify-center font-zain font-semibold underline underline-offset-8 decoration-customColor text-2xl mt-10">
        Most Popular
      </p>
      <Search />
      <Listing />
      <Footer />
    </div>
  );
}

export default RestaurantListing;
