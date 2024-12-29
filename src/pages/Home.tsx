import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SubHead from "../components/home/SubHead";
import Listing from "../components/restaurantListing/Listing";
import Header from "../components/Header";

const Home = () => {
  return (
    <div>
      <Nav />
      <Header />
      <SubHead />
      <p className="text-center font-zain font-semibold underline underline-offset-8  text-2xl mt-10">
        Recommended
      </p>
      <Listing />
      <Footer />
    </div>
  );
};

export default Home;
