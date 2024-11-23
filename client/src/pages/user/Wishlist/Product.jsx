/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { getDiscount } from "../../../utils/functions";
import DeleteIcon from "@mui/icons-material/Delete";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

const Product = (props) => {
    const {
        _id,
        name,
        price,
        discountPrice,
        images,
        ratings,
        numOfReviews,
        func,
    } = props;
    const [isDeleting, setIsDeleting] = useState(false);
    const deleteProduct = async () => {
        setIsDeleting(true);
        try {
            // Make the delete request here
            await func(_id);
        } catch (error) {
            // Handle any errors if necessary
        } finally {
            setIsDeleting(false);
        }
    };
    // Check if 'images' is defined before rendering
    const shouldRenderImage = images && images.length > 0;

    return (
        <div className="flex w-full gap-4 p-4 overflow-hidden border-b sm:pb-8 group">
            <div className="flex-shrink-0 w-1/6 h-28">
                <img
                    draggable="false"
                    className="object-contain w-full h-full"
                    src={shouldRenderImage ? images[0].url : ""}
                    alt={name}
                />
            </div>

            {/* <!-- description --> */}
            <div className="flex flex-col w-full gap-5 p-1">
                {/* <!-- product title --> */}
                <div className="flex items-start justify-between sm:pr-5">
                    <Link
                        to={`/product/${_id}`}
                        className="flex flex-col gap-0.5"
                    >
                        <p className="w-56 truncate group-hover:text-primary-blue sm:w-full">
                            {name?.length > 70
                                ? `${name?.substring(0, 70)}...`
                                : name}
                        </p>
                        {/* <!-- rating badge --> */}
                        <span className="flex items-center gap-2 text-sm font-medium text-gray-500">
                            <span className="text-xs px-1.5 py-0.5 bg-[#22ba20] rounded-sm text-white flex items-center gap-0.5">
                                {ratings} <StarIcon sx={{ fontSize: "14px" }} />
                            </span>
                            <span>({numOfReviews?.toLocaleString()})</span>
                            {/* <span>
                                <img
                                    draggable="false"
                                    className="w-[60px] h-[20px] ml-4 object-contain"
                                    src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                                    alt={name}
                                />
                            </span> */}
                        </span>
                        {/* <!-- rating badge --> */}
                    </Link>
                    <button
                        onClick={deleteProduct}
                        className="text-gray-400 hover:text-red-500"
                    >
                        <span>
                            <DeleteIcon />
                        </span>
                    </button>
                </div>
                {/* <!-- product title --> */}

                {/* <!-- price desc --> */}
                <div className="flex items-center gap-2 text-2xl font-medium">
                    <span>₱{discountPrice?.toLocaleString()}</span>
                    <span className="mt-1 text-sm font-normal text-gray-500 line-through">
                        ₱{price?.toLocaleString()}
                    </span>
                    <span className="text-sm text-[#22ba20] mt-1">
                        {getDiscount(price, discountPrice)}%&nbsp;off
                    </span>
                </div>
                {/* <!-- price desc --> */}
            </div>
            {/* <!-- description --> */}
        </div>
    );
};

export default Product;
