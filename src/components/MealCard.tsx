import { FaArrowRight } from "react-icons/fa"

type MealProps = {
    strMeal: string;
    strMealThumb: string;
}

const MealCard = ({ strMeal, strMealThumb }: MealProps) => {

    return (

        <div className="flex gap-4 w-[100%]">

            <div className="rounded-full overflow-hidden aspect-square object-contain max-h-24 w-28 max-lg:h-20 max-lg:mt-2">
                <img
                    src={`${strMealThumb}/preview`}
                    alt="Meal"
                    className="h-24 w-28 max-lg:h-20 aspect-square object-cover"
                />
            </div>

            <div className="flex flex-col text-lime-900 font-semibold w-full">
                <div className="flex justify-between py-2 lg:text-2xl text-xl w-full border-b border-dashed border-slate-300">
                    <div className="">
                        {strMeal}
                    </div>
                    <div className="">&#8377;120</div>
                </div>
                <div className="flex justify-between py-2 w-full max-lg:gap-x-2">
                    <div className="lg:text-sm text-xs">
                        Lorem ipsum dolor sit amet consectetur ad, quia.
                    </div>
                    <a href="/shop" className="flex items-center cursor-pointer max-lg:text-xs max-lg:bg-lime-200 px-2 py-1 rounded-lg">SHOP NOW <FaArrowRight size={12} /></a>
                </div>
            </div>

        </div>
    )
}

export default MealCard
