import React from "react";
import Head from "@/Layouts/Head";
import Navbar from "@/Layouts/Navbar";
import Logo from "@/Components/Logo";
import Footer from "@/Layouts/Footer";
import Fill from "@/Components/Home/Fill";
import HomeText from "@/Components/Home/HomeText";

const Welcome = () => {
    return (
        <>
            <Head title="" description="" keywords="" />
            <div className="text-white bg-home bg-center bg-cover bg-no-repeat h-screen">
                <div className="relative bg-black bg-opacity-40 w-full h-full">
                    <div className="absolute w-9/12 md:w-auto left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Logo />
                        <Fill />
                        <HomeText />
                        <Fill />
                        <Navbar />
                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;
