import React from 'react'
import Cards from '../components/elements/Cards'
import ComparisonTable from '../components/elements/ComparisonTable'
import Faqs from '../components/elements/Faqs'
import Firstcomp from '../components/elements/Firstcomp'
import HeroOne from '../components/elements/HeroOne'
import Platfoam from '../components/elements/Platfoam'
import Roadmap from '../components/elements/Roadmap'
import Secondcomp from '../components/elements/Secondcomp'
import Token from '../components/elements/Token'
import Utilites from '../components/elements/Utilites'
import Video from '../components/elements/Video'



const Home = () => {
  return (
    <>
   
    <HeroOne/>
    <div className="others">
    <Firstcomp/>
    <Cards/>
    <Secondcomp/>
    <Video/>
    <Token/>
    <Platfoam/>
    <Utilites/>
     <ComparisonTable/> 
    <Roadmap/>
    <Faqs/>
    </div>
    </>
  )
}

export default Home