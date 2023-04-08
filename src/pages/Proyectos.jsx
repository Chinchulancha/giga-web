
import Select from "../components/proyectos/Select"
import {SlArrowDown} from "react-icons/sl"

const Proyectos = () => {
  return (
    <div className="lg:container lg:mx-auto text-white w-full h-full mt-20 md:mt-0 flex flex-col">
    
      <div className="flex justify-center mb-52 md:mb-72"><SlArrowDown className="text-8xl icon"/></div>
      <Select></Select>
    </div>
  )
}

export default Proyectos