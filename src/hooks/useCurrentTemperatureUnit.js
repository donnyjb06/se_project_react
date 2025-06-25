import { useContext } from "react"
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnit/CurrentTemperatureUnit.context"

export const useCurrentTemperatureUnit = () => {
  const context = useContext(CurrentTemperatureUnitContext);

  if (!context) {
    throw new Error("useCurrentTemperatureUnit must be used within a CurrentTemperatureUnitProvider")
  }

  return context
}