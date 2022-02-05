import { Provider } from "react-redux"
import { store } from "./src/store";
import MainNav from "./src/navigation/mainNav";
import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);

  return (
    <Provider store={store}>
        <MainNav />
    </Provider>
  );
}
