import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

const categories = [
    "Shirts",
    "Shorts",
    "Shoes",
    "Eyewear",
    // "Baby & Kids",
    // "Home & Furniture",
    // "Sports, Books & More",
    // "Flights",
    // "Offer Zone",
    // "Grocery",
];

const MinCategory = () => {
    return (
        <section className="hidden min-w-full p-0 px-12 bg-white sm:block">
          <div className="flex justify-center space-x-4 group">
                {categories.map((el, i) => (
                    <Link
                        to="/products"
                        key={i}
                        className="text-sm p-2 text-gray-800 font-medium hover:text-gray-500 flex items-center gap-0.5 group"
                    >
                        {el}
                        <span className="pt-1 pb-2 mx-10 text-base font-light text-black uppercase border-b-2 border-transparent hover:border-black">
                        {/* <ExpandMoreIcon sx={{ fontSize: "16px" }} /> */}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default MinCategory;
