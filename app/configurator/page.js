"use client";

import React from 'react';
import Navbar from "../components/NavBar";
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';
import OfferteForm from '../components/OfferteForm';

function page(props) {
    const router = useRouter();

    return (
        <div className="bg-background font-outfit">
            <Navbar />
            <div className="flex flex-col items-center justify-center md:py-20">  
                <img 
                    src="/illustrations/develope.svg"
                    alt="Illustratie van werkzaamheden – ontwikkeling in uitvoering" 
                    className="w-[300px] mb-5"
                />
                <h1
                    className="text-3xl font-semibold text-black text-center max-w-[600px]"
                >
                    Onze configurator is momenteel in ontwikkeling. Bedankt voor uw geduld!
                </h1>
                <div className="flex flex-row items-center justify-center mt-10 gap-x-5">
                    {/* Vraag offerte aan Button */}
                    <a
                        href="#offerte"
                        className="cursor-pointer w-[200px] flex justify-center items-center bg-primary hover:bg-primaryDark text-lg text-white py-3 font-medium rounded-4xl transition-all duration-500"
                    >
                        Offerte aanvragen
                    </a>
                    {/* Go back Button */}
                    <button
                        onClick={() => router.back()}
                        className="cursor-pointer w-[200px] flex justify-center items-center border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 font-medium rounded-4xl transition-all duration-500"
                    >
                        Ga terug
                    </button>
                </div>
            </div>
            <OfferteForm />
            <Footer />
        </div>
    );
}

export default page;