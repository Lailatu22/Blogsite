import {createContext} from 'react'

export const AboutContext = createContext();

function AboutContextProvider({children}) {
    const about={
        name:"lailat",
        hobbies:["Singing", "Dancing"],
        bio:"I am a lady who desires community growth"
        
    }
  return (
    <AboutContext.Provider value={{about}}>{children}</AboutContext.Provider>
  )
}

export default AboutContextProvider
