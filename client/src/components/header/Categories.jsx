import shirts from "../../assets/images/Categories/phone.png";
import shorts from "../../assets/images/Categories/fashion.png";
import shoes from "../../assets/images/Categories/home.png";
import eyewear from "../../assets/images/Categories/travel.png";
import { Link } from "react-router-dom";

const catNav = [
    {
        name: "Shirts",
        icon: shirts,
    },
    {
        name: "Shorts",
        icon: shorts,
    },
    {
        name: "Shoes",
        icon: shoes,
    },
    {
        name: "Eyewear",
        icon: eyewear,
    },
];

const Categories = () => {
    return (
        <section className="hidden min-w-full p-0 px-12 bg-white sm:block">
          <div className="flex justify-center space-x-4 group">
            {catNav.map((item, i) => (
              <Link
                to={`/products?category=${item.name}`}
                className="flex flex-col items-center"
                key={i}
              >
                <span className="pt-1 pb-2 mx-10 text-base font-light text-black uppercase border-b-2 border-transparent hover:border-black">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      );
};

export default Categories;
