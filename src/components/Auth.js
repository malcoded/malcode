import React, { useEffect, useState } from "react"
import firebase from "gatsby-plugin-firebase"

export const AuthContext = React.createContext()
export const AuthProvider = ({ children }) => {
  const money = firebase && firebase.auth ? firebase.auth().currentUser : null
  const [currentUser, setCurrentUser] = useState(money)
  useEffect(() => {
    firebase &&
      firebase.auth() &&
      firebase.auth().onAuthStateChanged(setCurrentUser)
  }, [])
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}
