import "./App.css"
import { Provider } from "react-redux"
import Body from "./components/Body"
import AppStore from "./utils/AppStore.js"

function App() {
  return (
    <Provider store={AppStore}>
      <Body />
    </Provider>
  )
}

export default App
