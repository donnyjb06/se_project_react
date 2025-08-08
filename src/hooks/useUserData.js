import { useContext } from "react";
import { UserDataContext } from "../contexts/UserData/UserData.context";

export const useUserData = () => {
  const context = useContext(UserDataContext)

  if (!context) {
    throw new Error("useUserData must be used within a UserDataProvider")
  }

  return context
}