import React from 'react'
import { HeroSection } from './sections/WorkspaceheroSection'
import { HubFeatures } from './sections/HubFeatures'
import {SpaceCategory} from './sections/SpaceCategory'
import {Faq} from './sections/Faq'

export const OfficeSpace:React.FC = () => {
  return (
    <div>
           <HeroSection />
           <HubFeatures />
           <SpaceCategory />
           <Faq />
    </div>
  )
}
