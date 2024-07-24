'use client'
import React from 'react'
import { Navbar } from '@/components/Navbar'
import { HomePage } from '@/components/HomePage'
//import { Plan } from '@/components/Plan'
import { About } from '@/components/About'
import { Goods } from '@/components/Goods'
import DietPlanForm from '@/components/DietPlanForm'
const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Goods />
      <DietPlanForm />
      {/* <Plan /> */}
      <About />
    </>
  )
}

export default Home