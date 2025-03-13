import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Retail from "./retail";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Retail Security Solutions | Uniview',
    description: 'Comprehensive security solutions for retail stores including video surveillance, access control, and customer analytics.',
}

export default function RetailPage() {
    return (
        <>
            <Navbar />
            <Retail />
            <Footer />
        </>
    )
}




