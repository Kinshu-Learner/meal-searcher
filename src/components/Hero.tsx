const Hero = () => {
    return (
        <div className="absolute w-full h-screen items-center flex top-0">
            <div className="bg-stone-100 w-[60%] h-full"></div>
            <div className="bg-lime-900 w-[40%] h-full"></div>

            <div className="h-[70%] aspect-square absolute left-[50%]">

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
