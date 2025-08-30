/* eslint-disable @typescript-eslint/no-unused-vars */

'use client'
import React, { useState, useEffect, useRef } from 'react';
import './team.css'; // Make sure to place the CSS file in the same directory or adjust the path
import Image from "next/image";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import MobileNavPopup from '@/components/MobilePopup';

// Define the type for an image object (Website Team)
interface ImageType {
  src: string;
  alt: string;
}

// Define the type for a member object (Other Teams)
interface Member {
  name: string;
  role: string;
  department: string;
  imageUrl?: string;
}

// Define the type for a group of members
interface MemberGroup {
  groupName: string;
  members: Member[];
}

// Props interface for the Website Team carousel
interface WebsiteTeamCarouselProps {
  images: ImageType[];
}

// Props interface for the Other Teams component
interface OtherTeamsProps {
  groups: MemberGroup[];
}

// Website Team Carousel Component
const WebsiteTeamCarousel: React.FC<WebsiteTeamCarouselProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animateScroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const duplicatedImages = [...images, ...images];

  return (
    <>
    <div className="app-container">
      
      <div className='WebsiteTeam'>
        <div className='WebsiteTeamTitle'>
          <h1 className="title">Website Team</h1>
        </div>
        <div className="carousel-wrapper"> {/* New wrapper for padding */}
          <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            >
            <div className="carousel-track" ref={containerRef}>
              {duplicatedImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image.src} alt={image.alt} />
                  <div className="image-text">
                    <h3>{image.alt.split('\n')[0]}</h3>
                    <p>{image.alt.split('\n')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
       
    </>
  );
};

// Component to decide whether to render a carousel or a static grid for other teams
const CarouselOrGrid: React.FC<{ group: MemberGroup }> = ({ group }) => {
  if (group.members.length > 4) {
    return <InfiniteCarousel group={group} />;
  } else {
    return <StaticGrid group={group} />;
  }
};

// Component for the infinite carousel (for teams with more than 4 members)
const InfiniteCarousel: React.FC<{ group: MemberGroup }> = ({ group }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animateScroll = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        if (scrollPosition >= container.scrollWidth / 2) {
          scrollPosition = 0;
        }
        container.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationFrameId = requestAnimationFrame(animateScroll);
    };

    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);

  const duplicatedMembers = [...group.members, ...group.members];

  return (
    <div className="carousel-wrapper"> {/* New wrapper for padding */}
      <div
        className="carousel-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="carousel-track" ref={containerRef}>
          {duplicatedMembers.map((member, index) => (
            <div key={index} className="carousel-slide">
              {member.imageUrl ? (
                <img src={member.imageUrl} alt={member.name} className="card-image" />
              ) : (
                <div className="image-placeholder"></div>
              )}
              <div className="image-text">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Component for the static grid (for teams with 4 or fewer members)
const StaticGrid: React.FC<{ group: MemberGroup }> = ({ group }) => {
  return (
    <div className="static-grid-container">
      {group.members.map((member, index) => (
        <div key={index} className="static-card">
          {member.imageUrl ? (
            <img src={member.imageUrl} alt={member.name} className="card-image" />
          ) : (
            <div className="image-placeholder"></div>
          )}
          <div className="image-text">
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Component for rendering all other team groups
const OtherTeams: React.FC<OtherTeamsProps> = ({ groups }) => {
  return (
    <div className="app-container">
      {groups.map((group, index) => (
        <React.Fragment key={index}>
          <h2 className="group-title">{group.groupName}</h2>
          <CarouselOrGrid group={group} />
        </React.Fragment>
      ))}
    </div>
  );
};

// Main HomePage component that combines all sections
export default function HomePage() {
  // Website Team data
  const websiteTeamImages = [
    { src: 'https://placehold.co/400x500/262626/8c8c8c?text=Aditi+Patel\nCo-Organizer', alt: 'Aditi Patel\nCo-Organizer' },
    { src: 'https://placehold.co/400x500/262626/8c8c8c?text=Dhyani+Upadhyay\nChief+Coordinator', alt: 'Dhyani Upadhyay\nChief+Coordinator' },
    { src: 'https://placehold.co/400x500/262626/8c8c8c?text=Kabir+Brahmbhatt\nOrganizer', alt: 'Kabir Brahmbhatt\nOrganizer' },
    { src: 'https://placehold.co/400x500/262626/8c8c8c?text=Vipul+Patel\nChief+Organizer', alt: 'Vipul Patel\nChief+Organizer' },
    { src: 'https://placehold.co/400x500/262626/8c8c8c?text=Jane+Doe\nDesigner', alt: 'Krish\nDesigner' },
    { src: 'https://placehold.co/400x500/262626/8c8c8c?text=John+Smith\nDeveloper', alt: 'Shaakal\nDeveloper' },
  ];

  // Other teams data
  const otherTeamsData: MemberGroup[] = [
    {
      groupName: 'Admin & Logistics',
      members: [
        { name: 'Aadi Joshi', role: 'TY', department: 'Mechanical', imageUrl: 'AdminAndLogistics/' },
        { name: 'Jal Panchal', role: 'TY', department: 'Civil', imageUrl: 'AdminAndLogistics/' },
        { name: 'Miraj Mistry', role: 'SY', department: 'Mechanical', imageUrl: 'AdminAndLogistics/' },
        { name: 'Mishit Shah', role: 'SY', department: 'Mechanical', imageUrl: 'AdminAndLogistics/' },
        { name: 'Netra Rakeshkumar Patel', role: 'TY', department: 'CE', imageUrl: 'AdminAndLogistics/Netra Patel.jpg' },
      ],
    },
    {
      groupName: 'Graphic Design',
      members: [
        { name: 'Chaitanya Giri', role: 'TY', department: 'CSD', imageUrl: 'GraphicDesignImages/' },
        { name: 'Meher Rathod', role: 'SY', department: 'CSD', imageUrl: 'GraphicDesignImages/Meher Rathod.jpg' },
        { name: 'Rudra Joshi', role: 'TY', department: 'IT', imageUrl: 'GraphicDesignImages/Rudra Joshi Ashutosh.jpg' },
      ],
    },
    {
      groupName: 'Videography',
      members: [
        { name: 'Akshita Vimawala', role: 'TY', department: 'Aeronautical', imageUrl: 'VideographyImages/Akshita.jpeg' },
        { name: 'Vyom Patel', role: 'SY', department: 'Civil', imageUrl: 'VideographyImages/Vyom Patel.jpeg' },
      ],
    },
    {
      groupName: 'Video Editing',
      members: [
        { name: 'Deep Patoriya', role: 'TY', department: 'CE', imageUrl: 'VideoEditing/Deep Patoriya.jpg' },
        { name: 'Parth Soni', role: 'TY', department: 'CE', imageUrl: 'VideoEditing/Parth Soni.jpeg' },
        { name: 'Sambhrant Shukla', role: 'FY', department: 'Mechanical', imageUrl: 'VideoEditing/Sambhrant Shukla.jpg' },
      ],
    },
    {
      groupName: 'Social Media',
      members: [
        { name: 'Krish Patel', role: 'SY', department: 'CE', imageUrl: 'SocialMedia/' },
        { name: 'Malek Noor', role: 'TY', department: 'IT', imageUrl: 'SocialMedia/Malek Noor.jpeg' },
        { name: 'Rajat Haathi', role: 'SY', department: 'CE', imageUrl: 'SocialMedia/Rajat Haathi.jpg' },
      ],
    },
    {
      groupName: 'Anchoring',
      members: [
        { name: 'Anjali Panchal', role: 'FY', department: 'CSD', imageUrl: 'Anchoring/Anjali Panchal.jpg' },
        { name: 'Devanshi Chaudhary', role: 'FY', department: 'IT', imageUrl: 'Anchoring/Devanshi Chaudhary.jpg' },
        { name: 'Shrey Shah', role: 'FY', department: 'IT', imageUrl: 'Anchoring/shrey pic.png' },
      ],
    },
    {
      groupName: 'Dance',
      members: [
        { name: 'Kavya Thakkar', role: 'SY', department: 'Aeronautical', imageUrl: 'Dance/Kavya Gaurav Thakkar.jpg' },
        { name: 'Kritika Panchal', role: 'SY', department: 'CE', imageUrl: 'Dance/Kritika Panchal.jpg' },
        { name: 'Sakhi Bhagat', role: 'SY', department: 'CSD', imageUrl: 'Dance/Sakhi Bhagat.jpeg' },
      ],
    },
    {
      groupName: 'Music',
      members: [
        { name: 'Meet Barot', role: 'LY', department: 'IT', imageUrl: 'Music/Meet Barot.jpg' },
        { name: 'Ishmael Tinodiwanshaie Ruzungunde', role: 'SY', department: 'Aeronautical', imageUrl: 'Music/Ishmael Tynoe.jpeg' },
        { name: 'Nisarg Vimalkumar Rana', role: 'TY', department: 'Aeronautical', imageUrl: 'Music/Nisarg Rana.jpg' },
        { name: 'Manan Sutariya', role: 'TY', department: 'IT', imageUrl: 'Music/Manan Sutariya.jpg' },
        { name: 'Mahek Doshi', role: 'SY', department: 'CE', imageUrl: 'Music/Mahek Doshi.jpg' },
        { name: 'Dhruva Pratik Shah', role: 'TY', department: 'Mechanical', imageUrl: 'Music/Dhruva Shah.png' },
        { name: 'Harshil Sharma', role: 'SY', department: 'Mechanical', imageUrl: 'Music/Harshil Dharmik.jpg' },
        { name: 'Yug Kalpesh Patel', role: 'SY', department: 'Mechanical', imageUrl: 'Music/Yug Patel.jpeg' },
        { name: 'Salaita Gandhi', role: 'FY', department: 'IT', imageUrl: 'Music/Samhita Gandhi.pdf' },
        { name: 'Shubhamkumar Harshadkumar Panchal', role: 'SY', department: 'Mechanical', imageUrl: 'Music/Shubham Panchal.JPG' },
        { name: 'Harshadkumar Panchal', role: 'SY', department: 'Mechanical', imageUrl: 'Music/Harshadkumar Panchal.jpg' },
      ],
    },
  ];
  return (
    <>
      {/* <Navbar /> */}
      <div className="teamContainer">

      <div className='HeroSectionContainer'>
        <Image
          src="/TeamMandala.png"
          width={1920}
          height={1080}
          alt="Picture of the author"
          className="TeamMandala"
          />
        <h1>Meet the team behind this event</h1>
      </div>
      <WebsiteTeamCarousel images={websiteTeamImages} />
      <OtherTeams groups={otherTeamsData} />
      <FAQs />
      <Footer />
          </div>
    </>
  );
}
