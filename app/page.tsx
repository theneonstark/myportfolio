"use client"
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import { useState, useEffect } from "react";


export default function Home() {
  
 


  return(
    <main className="flex bg-black-100 mx-auto w-full overflow-x-hidden">
    <div className="  max-w-7xl w-full flex flex-col m-auto ">
      <FloatingNav navItems={navItems} />
      <Hero />
      <Grid />
      <RecentProjects />
      <Clients />
      <Experience />
      <Footer />
    </div>
  </main>
  
  
  )
}