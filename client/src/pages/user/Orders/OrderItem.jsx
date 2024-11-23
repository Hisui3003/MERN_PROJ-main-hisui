/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import { formatDate } from "../../../utils/functions";

const OrderItem = ({
    item,
    orderId,
    orderStatus,
    createdAt,
    paymentId,
    buyer,
    shippingInfo,
    amount,
}) => {
    return (
        <Link
            to={`./order_details/${orderId}`}
            className="flex flex-col items-start gap-5 px-4 py-5 mx-2 bg-white border rounded sm:flex-row sm:px-8 hover:shadow-lg sm:mx-10 "
        >
            {/* <!-- image container --> */}
            <div className="w-full h-20 sm:w-32">
                <img
                    draggable="false"
                    className="object-contain w-full h-full"
                    src={item?.image}
                    alt={item?.name}
                />
            </div>
            {/* <!-- image container --> */}

            {/* <!-- order desc container --> */}
            <div className="flex flex-col justify-between w-full sm:flex-row ">
                <div className="flex flex-col w-[300px] gap-1 overflow-hidden">
                    <p className="text-sm">
                        {item?.name.length > 40
                            ? `${item?.name.substring(0, 40)}...`
                            : item?.name}
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                        Quantity: {item?.quantity}
                    </p>
                </div>

                <div className="flex flex-col gap-2 mt-1 sm:flex-row sm:mt-0 sm:gap-20 sm:w-1/2">
                    <p className="text-sm w-[100px]">
                        ₱{item?.discountPrice.toLocaleString()}
                    </p>

                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-medium flex items-center gap-1 w-[250px]">
                            {orderStatus === "Shipped" ? (
                                <>
                                    <span className="text-orange pb-0.5">
                                        <CircleIcon sx={{ fontSize: "14px" }} />
                                    </span>
                                    Shipped
                                </>
                            ) : orderStatus === "Delivered" ? (
                                <>
                                    <span className="text-primaryGreen pb-0.5">
                                        <CircleIcon sx={{ fontSize: "14px" }} />
                                    </span>
                                    Delivered
                                </>
                            ) : orderStatus === "Out For Delivery" ? (
                                <>
                                    <span className="text-yellow-400 pb-0.5">
                                        <CircleIcon sx={{ fontSize: "14px" }} />
                                    </span>
                                    Out For Delivery
                                </>
                            ) : (
                                <>
                                    <span className="text-primaryBlue pb-0.5">
                                        <CircleIcon sx={{ fontSize: "14px" }} />
                                    </span>
                                    Ordered on {formatDate(createdAt)}
                                </>
                            )}
                        </p>
                        {orderStatus === "Delivered" ? (
                            <p className="ml-1 text-xs">
                                Your item has been Delivered
                            </p>
                        ) : orderStatus === "Shipped" ? (
                            <p className="ml-1 text-xs">
                                Your item has been Shipped
                            </p>
                        ) : orderStatus === "Processed" ? (
                            <p className="ml-1 text-xs">
                                Seller has processed your order
                            </p>
                        ) : orderStatus === "Out For Delivery" ? (
                            <p className="ml-1 text-xs">
                                Your order is Out for Delivery
                            </p>
                        ) : (
                            <p className="ml-1 text-xs">
                                Your order has been placed
                            </p>
                        )}
                    </div>
                </div>
            </div>
            {/* <!-- order desc container --> */}
        </Link>
    );
};

export default OrderItem;
