import logo from "../../assets/about/logo.png";

const Mission = () => {
  return (
    <div className="py-10">
      <div className="text-center">
        <p className="text-4xl font-bold font-zain">Our Mission</p>
        <p className="text-lg p-6 sm:py-6 sm:px-40">
          We are passionate about connecting diners with local restaurants,
          showcasing the creativity of chefs, and making it easy for you to
          find, book, and enjoy a dining experience that suits your style.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="flex flex-col space-y-6 px-6 pt-6 sm:p-10">
          <div className="bg-customColor rounded-xl p-4 ">
            <p className="text-xl font-zain font-semibold">
              Connect People with Local Restaurants:
            </p>
            <p>
              Help diners discover the best local eateries, from hidden gems to
              popular favorites.
            </p>
          </div>
          <div className="bg-customColor rounded-xl p-4 ">
            <p className="text-xl font-zain font-semibold">
              Simplify the Dining Experience:
            </p>
            <p>
              Make it easy for users to explore menus, book tables, and place
              orders all in one convenient platform.
            </p>
          </div>
        </div>
        <div>
          <img src={logo} alt="" className="hidden sm:block" />
        </div>
        <div className="flex flex-col space-y-6 p-6 sm:p-10">
          <div className="bg-customColor rounded-xl p-4 ">
            <p className="text-xl font-zain font-semibold">
              Support Local Businesses :
            </p>
            <p>
              Promote and uplift local restaurants by providing them with a
              platform to reach more customers.
            </p>
          </div>
          <div className="bg-customColor rounded-xl p-4 ">
            <p className="text-xl font-zain font-semibold">
              Create Memorable Dining Moments:
            </p>
            <p>
              Encourage people to explore new flavors and share meaningful
              experiences over great meals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
