import PageHead from "@/Layouts/PageHead";
import { Head } from "@inertiajs/react";
import React from "react";
import workpic from "../../assets/images/pic02.jpg";
import Close from "@/Components/Close";
const Work = () => {
    return (
        <>
            <Head title="" description="" keywords="" />
            <div className="text-white bg-home bg-center bg-cover bg-no-repeat ">
            <div className="relative bg-black py-20 px-5 bg-opacity-40 w-full h-full">
                <div className="flex flex-col gap-10 max-w-3xl bg-black rounded-md mx-auto p-10">
                    <Close />
                    <PageHead title="Work" />
                    <div>
                        <img loading="lazy" className="pointer-events-none" src={workpic} alt="work-image" />
                    </div>
                    <div className="md:text-base text-sm flex flex-col gap-10">
                        <p>
                            Adipiscing magna sed dolor elit. Praesent eleifend
                            dignissim arcu, at eleifend sapien imperdiet ac.
                            Aliquam erat volutpat. Praesent urna nisi, fringila
                            lorem et vehicula lacinia quam. Integer sollicitudin
                            mauris nec lorem luctus ultrices.
                        </p>
                        <p>
                            Nullam et orci eu lorem consequat tincidunt vivamus
                            et sagittis libero. Mauris aliquet magna magna sed
                            nunc rhoncus pharetra. Pellentesque condimentum sem.
                            In efficitur ligula tate urna. Maecenas laoreet
                            massa vel lacinia pellentesque lorem ipsum dolor.
                            Nullam et orci eu lorem consequat tincidunt. Vivamus
                            et sagittis libero. Mauris aliquet magna magna sed
                            nunc rhoncus amet feugiat tempus.
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
};

export default Work;
