import React from "react"
import { signOut } from "firebase/auth"
import auth from "../utils/Firebase"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged } from "firebase/auth"
import { addUser, removeUser } from "../utils/UserSlice.js"
import { useEffect } from "react"
import { NETFLIX_LOGO } from "../utils/Constants.js"
import { toggleGptSearchView } from "../utils/GptSlice.js"
import { SUPPORTED_LANGUAGE } from "../utils/Constants.js"
import changeLanguage from "../utils/configSlice.js"
const Header = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        )
        navigate("/browse")

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    })

    //unsubscribe when component unmount
    return () => unsubscribe()
  }, [])
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error")
      })
  }
  const onHandleGptSearchClick = () => {
    //Toggle Gpt
    dispatch(toggleGptSearchView())
  }
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }
  return (
    <div className="absolute w-screen z-10 flex justify-between  px-8 py-2 bg-gradient-to-b from-black  flex-row">
      <img className=" w-44 mx-auto md:mx-0 " src={NETFLIX_LOGO} alt="logo" />
      {user && (
        <div className="flex p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGE.map((lang) => (
                <option key={lang?.identifier} value={lang?.identifier}>
                  {lang?.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white
           rounded-lg"
            onClick={onHandleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "Gpt Search"}
          </button>
          <img className="w-12 h-12" alt="icon" src={user?.photoURL} />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  )
}

export default Header
