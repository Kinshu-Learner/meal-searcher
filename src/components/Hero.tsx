import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
    return (
        <div className="absolute w-full h-screen items-center flex top-0 max-xl:overflow-hidden">

            <div className="h-full w-full flex max-lg:flex-col">
                <div className="bg-stone-100 w-[60%] max-lg:w-full max-lg:h-[60%] h-full"></div>
                <div className="bg-lime-900 w-[40%] max-lg:w-full max-lg:h-[40%] h-full"></div>
            </div>

            <div className="absolute left-[10%] w-[40%] max-lg:left-5 max-lg:w-[60%]">

                <div className="text-xl max-xl:text-lg font-semibold py-2">Discount up to 20%</div>

                <div className="text-6xl max-xl:text-4xl font-semibold font-libre">
                    Buy Fresh and Organic Grocery Food
                </div>

                <div className="text-gray-400 py-12 max-xl:py-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam voluptatem ducimus quae alias asperiores soluta, non ad quam laboriosam minus?</div>

                <div className="flex max-lg:flex-col max-lg:gap-4">

                    <div className="flex items-center p-2 gap-2 rounded-full bg-lime-800 text-white px-5 font-medium cursor-pointer hover:bg-lime-700 duration-200 max-lg:w-fit max-lg:text-lime-800 max-lg:bg-stone-100 max-lg:hover:bg-stone-300 max-lg:border-2 border-lime-800">SHOP NOW <FaArrowRight size={14} /></div>

                    <div className="flex max-lg:text-stone-200">

                        <div className="border-r border-stone-300 lg:px-14 max-xl:pr-8 ">
                            <div className="text-3xl font-cormorant font-bold max-lg:text-xl">
                                35k+
                            </div>
                            <div className="text-gray-500 max-lg:text-stone-400">Users</div>
                        </div>
                        <div className="lg:px-14 max-xl:pl-8 ">
                            <div className="text-3xl font-cormorant font-bold max-lg:text-xl">
                                18k+
                            </div>
                            <div className="text-gray-500 max-lg:text-stone-400">Products</div>
                        </div>

                    </div>

                </div>

            </div>

            <div className="h-[70%] aspect-square absolute left-[50%] max-lg:left-[70%]">
                <div className="overflow-hidden rounded-full">
                    <img
                        src="/hero-image2.jpeg"
                        alt="hero image"
                        className="scale-105"
                    />
                </div>
            </div>
        </div>
    );
};

export default Hero;
