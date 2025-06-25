import { useState } from "react"
import { CurrentTemperatureUnitContext } from "./CurrentTemperatureUnit.context"

const CurrentTemperatureUnitProvider = ({children}) => {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F")

  const handleToggleSwitchChange = (isCelcius) => {
    setCurrentTemperatureUnit(prevTempUnit => isCelcius ? "C" : "F")
  }
  
  return (
    <CurrentTemperatureUnitContext.Provider value={{currentTemperatureUnit, handleToggleSwitchChange}}>
      {children}
    </CurrentTemperatureUnitContext.Provider>
  )
}

export default CurrentTemperatureUnitProvider