import { Provider } from "react-redux"
import { store } from "./src/store";
import MainNav from "./src/navigation/mainNav";

export default function App() {
  return (
    <Provider store={store}>
        <MainNav />
    </Provider>
  );
}
