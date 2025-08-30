/* eslint-disable @typescript-eslint/no-unused-vars */

import Image from "next/image";
import '@/styles/about.css'
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
// Add this import for the mobile navigation
import MobileNavPopup from "@/components/MobilePopup";

export default function About(){
    return(
        <>
            {/* Add Mobile Navigation at the top level */}
            <MobileNavPopup />
            
            <div className="about-container">
                <Navbar />
                <div className="TEDxAbout-container">
                    <h1>About TEDx</h1>
                    <p>TEDx is a program of local, self-organized events licensed by TED, designed to bring people together to share a TED-like experience and bring its spirit of "Ideas Worth Spreading" to local communities.
TEDx events blend live speakers, performers, and thought-provoking videos that spark deep discussions and connections. The "x" stands for "independently organized TED event."</p>
                </div>
                
                <div className="TEDxSvitAbout-container">
                    <h1>About TEDxSvit</h1>
                    <p>TEDxSVIT is an independently organized TEDx event hosted by Sardar Vallabhbhai Patel Institute of Technology (SVIT), Vasad, under the global TED initiative of "Ideas Worth Spreading." It serves as a platform for bold thinkers, innovators, artists, and changemakers from diverse fields to share their stories, spark conversations, and inspire action within and beyond our campus community. Launched in 2023, TEDxSVIT was founded by a visionary team of students: Shofiya Bootwala, Yesha Vyas, Harshil Bhatt, and Devanshi Patel - pioneers who laid the groundwork for what would become one of the most impactful platforms on campus. The journey continued in 2024, carried forward by a new set of changemakers: Devanshiraje Jadeja, Jasmin Kansagra, and Kabir Brahmbhatt, who expanded the vision and upheld the TEDx spirit with fresh voices and diverse ideas. Each year, TEDxSVIT has evolved into a space for curiosity, dialogue, and creative expression - bridging students, professionals, and thought leaders on a stage built by and for ideas that matter. At TEDxSVIT, we don't just host talks - we build legacies, one idea at a time.</p>
                </div>
                <Footer />
            </div>
           <img src="/aboutMandala.svg" alt="" className="aboutMandala"/>
        </>
    )
}