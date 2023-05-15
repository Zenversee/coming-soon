import {
    InstagramLogoSVG,
    LinkdinLogoSVG,
    TwitterLogoSVG,
} from "@zenversee/assets";
import {
    outfitMedium,
    outfitRegular,
    poppinsRegular,
    syneBold,
    trapBold,
} from "@zenversee/fonts";

export default function Home() {
    return (
        <>
            <div className="absolute h-full w-full bg-noice">
                <div className="bg-gradient-to-b h-full from-[#254af1] from-0% to-[#478f825e] to-100%  mix-blend-color" />
            </div>
            <main className="z-10 absolute background-image w-full h-full">
                <div className="">
                    <div
                        className={`${trapBold.className} text-6xl md:text-[9rem] text-center mt-[10vh]`}
                    >
                        Zenversee
                    </div>
                    <div
                        className={`${syneBold.className} text-center text-lg md:text-3xl md:translate-y-[-2rem]`}
                    >
                        Product . Design . Marketing
                    </div>
                </div>
                <div className="text-center mt-[10vh] gap-6 grid">
                    <div
                        className={`${outfitMedium.className} text-4xl md:text-7xl text-primary font-medium`}
                    >
                        Coming Soon
                    </div>
                    <div
                        className={`${outfitRegular.className} text-subText md:text-2xl`}
                    >
                        Have an awesome project? Drop a text we&apos;ll get back
                        to you
                    </div>
                    <div className="flex justify-center">
                        <a
                            href="https://knccspfxa0x.typeform.com/to/U4F628eG"
                            className={`${outfitMedium.className} z-[10rem] text-xl py-[10px] md:py-[18px] px-[25px] md:px-[50px] text-black bg-white rounded-full`}
                        >
                            Submit Idea
                        </a>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <table className=" border border-white border-y-2 border-x-0  absolute bottom-0 w-screen">
                        <tbody>
                            <tr className="divide-x-2 divide-white items-center">
                                <td>
                                    <div className="p-5 flex gap-10 justify-center items-center">
                                        <div
                                            className={`${syneBold.className} text-primary text-2xl text-center`}
                                        >
                                            AGENCY x SAAS PRODUCTS
                                        </div>
                                        <div className="w-[0.5px] h-[8vh] bg-white" />
                                        <div
                                            className={`${poppinsRegular.className}  text-base max-w-[30rem]`}
                                        >
                                            We help businesses with their
                                            production, designs & marketing. We
                                            also launch our cool SaaS products{" "}
                                        </div>
                                    </div>
                                </td>
                                <td className="p-5 justify-center items-center gap-5">
                                    <div className="flex justify-center items-center gap-5">
                                        <a
                                            href="https://www.instagram.com/zenversee/"
                                            className={` border-2 border-[#5C6267] p-10 rounded-full hover:bg-white hover:text-[#000606] hover:border-transparent transition-colors duration-300 ease-in-out`}
                                        >
                                            <InstagramLogoSVG className="text-5xl" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/company/zenversee/"
                                            className={` border-2 border-[#5C6267] p-10 rounded-full hover:bg-white hover:text-[#000606] hover:border-transparent transition-colors duration-300 ease-in-out`}
                                        >
                                            <LinkdinLogoSVG className="text-5xl" />
                                        </a>
                                        <a
                                            href="https://twitter.com/zenversee_"
                                            className={` border-2 border-[#5C6267] p-10 rounded-full hover:bg-white hover:text-[#000606] hover:border-transparent transition-colors duration-300 ease-in-out`}
                                        >
                                            <TwitterLogoSVG className="text-5xl" />
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* mobile */}
                <div className="md:hidden flex">
                    <div className="absolute bottom-0 w-screen">
                        <div className="p-5 grid gap-5 justify-center items-center border border-white border-x-0">
                            <div
                                className={`${syneBold.className} text-primary text-xl text-center`}
                            >
                                AGENCY <br /> x <br />
                                SAAS PRODUCTS
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="h-[0.5px] w-[20vw] bg-white" />
                            </div>

                            <div
                                className={`${poppinsRegular.className}  text-sm max-w-[30rem] text-center`}
                            >
                                We help businesses with their production,
                                designs & marketing. We also launch our cool
                                SaaS products{" "}
                            </div>
                        </div>
                        <div className="p-5">
                            <div className="flex justify-center items-center gap-5">
                                <a
                                    href="https://www.instagram.com/zenversee/"
                                    className={` border-2 border-[#5C6267] p-8 rounded-full hover:bg-white hover:text-[#000606] hover:border-transparent transition-colors duration-300 ease-in-out`}
                                >
                                    <InstagramLogoSVG className="text-3xl" />
                                </a>
                                <a
                                    href="https://www.linkedin.com/company/zenversee/"
                                    className={` border-2 border-[#5C6267] p-8 rounded-full hover:bg-white hover:text-[#000606] hover:border-transparent transition-colors duration-300 ease-in-out`}
                                >
                                    <LinkdinLogoSVG className="text-3xl" />
                                </a>
                                <a
                                    href="https://twitter.com/zenversee_"
                                    className={` border-2 border-[#5C6267] p-8 rounded-full hover:bg-white hover:text-[#000606] hover:border-transparent transition-colors duration-300 ease-in-out`}
                                >
                                    <TwitterLogoSVG className="text-3xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
