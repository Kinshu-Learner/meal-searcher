import { FaArrowRight } from "react-icons/fa"

type MealProps = {
    strMeal: string;
    strMealThumb: string;
}

const MealCard = ({ strMeal, strMealThumb }: MealProps) => {

    return (

        <div className="flex gap-4 w-[100%]">

            <div className="rounded-full overflow-hidden aspect-square object-contain max-h-24 w-28">
                <img
                    src={`${strMealThumb}/preview`}
                    alt="Meal"
                    className="h-24 w-28 aspect-square object-cover"
                />
            </div>

            <div className="flex flex-col text-lime-900 font-semibold w-full">
                <div className="flex justify-between py-2 text-2xl w-full border-b border-dashed border-slate-300">
                    <div className="">
                        {strMeal}
                    </div>
                    <div className="">&#8377;120</div>
                </div>
                <div className="flex justify-between py-2 w-full">
                    <div className="text-sm">
                        Lorem ipsum dolor sit amet consectetur ad, quia.
                    </div>
                    <a href="/shop" className="flex items-center cursor-pointer">SHOP NOW <FaArrowRight size={12} /></a>
                </div>
            </div>

        </div>
    )
}

export default MealCard
