/* eslint-disable react/prop-types */
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Slider from "@mui/material/Slider";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import StarIcon from "@mui/icons-material/Star";
import { categories } from "../../utils/constants";
import { useState, useRef, useEffect } from "react";

const SideFilter = ({
    price,
    category,
    ratings,
    setPrice,
    setCategory,
    setRatings,
}) => {
    const [categoryToggle, setCategoryToggle] = useState(true);
    const [ratingsToggle, setRatingsToggle] = useState(true);

    const debounceTimeout = useRef(null);

    // Debounce priceHandler to prevent multiple API calls on slider change
    const priceHandler = (_, newPrice) => {
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }
        debounceTimeout.current = setTimeout(() => {
            // Round the price values to the nearest multiple of 1000
            let newVal = [
                Math.round(newPrice[0] / 1000) * 1000,
                Math.round(newPrice[1] / 1000) * 1000,
            ];
            setPrice(newVal);
        }, 100);
    };

    useEffect(() => {
        return () => {
            // Clean up the timeout when the component unmounts
            if (debounceTimeout.current) {
                clearTimeout(debounceTimeout.current);
            }
        };
    }, []);

    const clearFilters = () => {
        setPrice([0, 200000]);
        setCategory("");
        setRatings(0);
    };

    return (
        <div className="flex-col hidden w-1/5 px-1 sm:flex">
            <div className="flex flex-col bg-white rounded-2xl">
                <div className="flex items-center justify-between gap-5 px-4 py-2 border-b">
                    <p className="text-lg font-medium">Filters</p>
                    <span
                        className="text-xs font-medium text-black uppercase border-b-2 border-black cursor-pointer hover:text-gray-500"
                        onClick={() => clearFilters()}
                    >
                        clear all
                    </span>
                </div>

                <div className="h-10 bg-gray-100 border-gray-100">

                </div>

                <div className="flex flex-col gap-2 py-3 overflow-hidden text-sm">
                    {/* Price slider filter */}
                    <div className="flex flex-col gap-2 px-4 border-b">
                        <span className="text-xs font-medium">PRICE</span>

                        <Slider
                            value={price}
                            onChange={priceHandler}
                            valueLabelDisplay="auto"
                            getAriaLabel={() => "Price range slider"}
                            min={0}
                            max={200000}
                        />

                        <div className="flex items-center gap-3 mb-2">
                            <span className="flex-1 min-w-[70px] border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                            ₱{price[0].toLocaleString()}
                            </span>
                            <span className="font-medium text-gray-400">
                                -
                            </span>
                            <span className="flex-1 min-w-[70px] border px-4 py-1 rounded-sm text-gray-800 bg-gray-50">
                            ₱{price[1].toLocaleString()}
                            </span>
                        </div>
                    </div>

                    <div className="h-10 bg-gray-100 border-gray-100">

                </div>

                    {/* Category filter */}
                    <div className="flex flex-col px-4 border-b">
                        <div
                            className="flex items-center justify-between py-2 pb-4 cursor-pointer"
                            onClick={() => setCategoryToggle(!categoryToggle)}
                        >
                            <p className="text-xs font-medium uppercase">
                                Category
                            </p>
                            {categoryToggle ? (
                                <ExpandLessIcon sx={{ fontSize: "20px" }} />
                            ) : (
                                <ExpandMoreIcon sx={{ fontSize: "20px" }} />
                            )}
                        </div>

                        {categoryToggle && (
                            <div className="flex flex-col pb-1">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="category-radio-buttons-group"
                                        onChange={(e) =>
                                            setCategory(e.target.value)
                                        }
                                        name="category-radio-buttons"
                                        value={category}
                                    >
                                        {categories.map((el, i) => (
                                            <FormControlLabel
                                                value={el}
                                                key={i}
                                                control={<Radio size="small" />}
                                                label={
                                                    <span
                                                        className="text-sm"
                                                        key={i}
                                                    >
                                                        {el}
                                                    </span>
                                                }
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        )}
                    </div>

                    <div className="h-10 bg-gray-100 border-gray-100">

                </div>

                    {/* Ratings filter */}
                    <div className="flex flex-col px-4 -mb-4 border-b">
                        <div
                            className="flex items-center justify-between py-2 pb-4 cursor-pointer"
                            onClick={() => setRatingsToggle(!ratingsToggle)}
                        >
                            <p className="text-xs font-medium uppercase">
                                Ratings
                            </p>
                            {ratingsToggle ? (
                                <ExpandLessIcon sx={{ fontSize: "20px" }} />
                            ) : (
                                <ExpandMoreIcon sx={{ fontSize: "20px" }} />
                            )}
                        </div>

                        {ratingsToggle && (
                            <div className="flex flex-col pb-1">
                                <FormControl>
                                    <RadioGroup
                                        aria-labelledby="ratings-radio-buttons-group"
                                        onChange={(e) =>
                                            setRatings(e.target.value)
                                        }
                                        value={ratings}
                                        name="ratings-radio-buttons"
                                    >
                                        {[4, 3, 2, 1].map((el, i) => (
                                            <FormControlLabel
                                                value={el}
                                                key={i}
                                                control={<Radio size="small" />}
                                                label={
                                                    <span className="flex items-center text-sm">
                                                        {el}
                                                        <StarIcon
                                                            sx={{
                                                                fontSize:
                                                                    "12px",
                                                                mx: 0.5,
                                                            }}
                                                        />
                                                        & above
                                                    </span>
                                                }
                                            />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideFilter;
