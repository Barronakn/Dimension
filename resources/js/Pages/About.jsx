import PageHead from "@/Layouts/PageHead";
import { Head } from "@inertiajs/react";
import React from "react";
import aboutpic from "../../assets/images/pic03.jpg";
import Close from "@/Components/Close";
const About = () => {
    return (
        <>
            <Head title="" description="" keywords="" />
            <div className="text-white bg-home bg-center bg-cover bg-no-repeat ">
            <div className="relative bg-black py-20 px-5 bg-opacity-40 w-full h-full">
                <div className="flex flex-col gap-10 max-w-3xl bg-black rounded-md mx-auto p-10">
                    <Close />
                    <PageHead title="About" />
                    <div>
                        <img loading="lazy" className="pointer-events-none" src={aboutpic} alt="about-image" />
                    </div>
                    <div className="md:text-base text-sm">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default About;
