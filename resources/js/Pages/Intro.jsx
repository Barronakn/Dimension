import PageHead from "@/Layouts/PageHead";
import { Head } from "@inertiajs/react";
import React from "react";
import intropic from "../../assets/images/pic01.jpg";
import Close from "@/Components/Close";
const Intro = () => {
    return (
        <>
            <Head title="" description="" keywords="" />
            <div className="text-white bg-home bg-center bg-cover bg-no-repeat ">
            <div className="relative bg-black px-5 py-20 bg-opacity-40 w-full h-full">
                <div className="flex flex-col gap-10 max-w-3xl bg-black rounded-md mx-auto p-10">
                    <Close />
                    <PageHead title="Intro" />
                    <div>
                        <img loading="lazy" className="pointer-events-none" src={intropic} alt="intro-image" />
                    </div>
                    <div className="md:text-base text-sm flex flex-col gap-10">
                        <p>
                        Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin aliquam facilisis ante interdum congue. Integer mollis, nisl amet convallis, porttitor magna ullamcorper, amet egestas mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas. By the way, check out my awesome work.
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam tristique libero eu nibh porttitor fermentum. Nullam venenatis erat id vehicula viverra. Nunc ultrices eros ut ultricies condimentum. Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In non lorem sit amet elit placerat maximus. Pellentesque aliquam maximus risus, vel sed vehicula.</p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
