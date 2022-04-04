import {createContext} from 'react'

export const AboutContext = createContext();

function AboutContextProvider({children}) {
    const about={
        name:"lailat",
        bio:"I am a lady who desires community growth",
        hobbies:["Singing,Dancing"]
    }
  return (
    <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
  )
}

export default AboutContextProvider
