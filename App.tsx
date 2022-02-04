import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/navigation/tabs";
import { Provider } from "react-redux"
import { store } from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Provider>
  );
}
