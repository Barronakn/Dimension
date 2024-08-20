import React, { useState } from "react";
import PageHead from "@/Layouts/PageHead";
import { Head } from "@inertiajs/react";
import Close from "@/Components/Close";
import { Inertia } from "@inertiajs/inertia";

const Contact = ({ errors }) => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        message: "",
    });

    const [success, setSuccess] = useState(false);
    const csrf = async () => await fetch("/sanctum/csrf-cookie");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await csrf();
            Inertia.post("/contact", formData, {
                onSuccess: () => {
                    console.log("Form submitted successfully!");
                    setFormData({
                        username: "",
                        email: "",
                        message: "",
                    });

                    setSuccess(true);
                },

            });
        } catch (error) {
            console.error("Error submitting:", error);
        }
    };


    const handleReset = () => {
        setFormData({
            username: "",
            email: "",
            message: "",
        });
    };

    return (
        <>
            <Head title="Contact" description="" keywords="" />
            <div className="text-white bg-home bg-center bg-cover bg-no-repeat">
            <div className="relative bg-black py-20 px-5 bg-opacity-40 w-full h-full">
                <div className="flex flex-col gap-10 max-w-3xl bg-gray-900 rounded-md mx-auto p-10">
                    <Close />

                    <PageHead title="Contact" />

                    <form
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-10 uppercase"
                    >
                        {success && (
                            <p className="text-green-600 lowercase">
                                Message envoyé avec succès !
                            </p>
                        )}
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className="flex flex-col justify-between w-full">
                                <label htmlFor="username">Name</label>
                                {errors && errors.username && (
                                    <span className="text-red-500 lowercase">
                                        {errors.username}
                                    </span>
                                )}
                                <input
                                    onChange={handleChange}
                                    value={formData.username}
                                    className="w-full rounded-sm h-10 bg-transparent border-white"
                                    type="text"
                                    name="username"
                                />
                            </div>
                            <div className="flex flex-col gap-3 w-full">
                                <label htmlFor="email">Email</label>
                                {errors && errors.email && (
                                    <span className="text-red-500 lowercase">
                                        {errors.email}
                                    </span>
                                )}
                                <input
                                    onChange={handleChange}
                                    value={formData.email}
                                    className="w-full rounded-sm h-10 bg-transparent border-white"
                                    type="email"
                                    name="email"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label htmlFor="message">Message</label>
                            {errors && errors.message && (
                                <span className="text-red-500 lowercase">
                                    {errors.message}
                                </span>
                            )}
                            <textarea
                                onChange={handleChange}
                                value={formData.message}
                                className="rounded-sm bg-transparent border-white"
                                name="message"
                                cols="30"
                                rows="5"
                            ></textarea>
                        </div>

                        <div className="flex flex-col md:flex-row gap-4">
                            <input
                                className="rounded-sm bg-white text-gray-900 h-10 cursor-pointer border-white px-5 py-2 uppercase"
                                type="submit"
                                value="Send message"
                            />
                            <input
                                onClick={handleReset}
                                className="rounded-sm h-10 bg-transparent border border-white cursor-pointer hover:bg-white hover:bg-opacity-20 px-5 py-2 uppercase"
                                type="reset"
                                value="Reset"
                            />
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
