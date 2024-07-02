import { useEffect, useState } from "react"
import MealCard from "./MealCard";

const ShopByCat = () => {

    const [DataFetched, setDataFetched] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian`);
            const response = await data.json();
            setDataFetched(response);
        };

        fetchData();
    }, [])


    const handleClick = async (cat: string) => {
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`);

        const response = await data.json();
        setDataFetched(response);
    }

    return (
        <div className="flex justify-center w-full">

            <div className="max-w-screen-2xl w-full flex flex-col justify-center items-center">
                <div className="h-[94vh]"></div>
                <div className="2xl:pt-2 font-bold text-xl">Shop by Category</div>
                <div className="text-3xl font-semibold text-center font-libre py-3 px-2">Top Category of Organic Food</div>

                <div className="flex flex-wrap gap-3 font-medium p-2">
                    <button onClick={() => handleClick("Vegetarian")} className="px-7 bg-stone-200 rounded-full py-1 hover:bg-lime-900 hover:text-stone-200 duration-200 cursor-pointer focus:bg-lime-900 focus:text-stone-200">VEGETARIAN</button>
                    <button onClick={() => handleClick("Chicken")} className="px-7 bg-stone-200 rounded-full py-1 hover:bg-lime-900 hover:text-stone-200 duration-200 cursor-pointer focus:bg-lime-900 focus:text-stone-200">CHICKEN</button>
                    <button onClick={() => handleClick("Dessert")} className="px-7 bg-stone-200 rounded-full py-1 hover:bg-lime-900 hover:text-stone-200 duration-200 cursor-pointer focus:bg-lime-900 focus:text-stone-200">DESSERT</button>
                    <button onClick={() => handleClick("Pasta")} className="px-7 bg-stone-200 rounded-full py-1 hover:bg-lime-900 hover:text-stone-200 duration-200 cursor-pointer focus:bg-lime-900 focus:text-stone-200">PASTA</button>
                    <button onClick={() => handleClick("Seafood")} className="px-7 bg-stone-200 rounded-full py-1 hover:bg-lime-900 hover:text-stone-200 duration-200 cursor-pointer focus:bg-lime-900 focus:text-stone-200">SEAFOOD</button>
                    <button onClick={() => handleClick("Starter")} className="px-7 bg-stone-200 rounded-full py-1 hover:bg-lime-900 hover:text-stone-200 duration-200 cursor-pointer focus:bg-lime-900 focus:text-stone-200">STARTER</button>
                </div>

                <div className="grid grid-cols-2 gap-5 py-10 gap-x-20 max-xl:grid-cols-1 px-4 max-lg:px-2">
                    {DataFetched && DataFetched.meals.map((meal: any) => (
                        <MealCard key={meal.idMeal} strMeal={meal.strMeal} strMealThumb={meal.strMealThumb} />
                    ))}
                </div>

            </div>
        </div>

    )
}

export default ShopByCat
