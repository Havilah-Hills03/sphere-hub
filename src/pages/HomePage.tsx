import { ChoosePath } from "../Section/ChoosePath"
import HeroSlider from "../Section/HeroSection"
import { Wrapper } from "../Section/Wrapper"
import { Whathappening } from "../Section/Whathappening"
import { JoinSection } from "../Section/JoinSection" 

function HomePage() { 

  return (
  <>
  <HeroSlider />
  <Wrapper />
  <ChoosePath />
  <Whathappening />
  <JoinSection /> 
  </>
  )
}

export default HomePage 