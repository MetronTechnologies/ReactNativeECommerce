import StackNavigator from "./src/navigators/Stack/StackNavigator";
import store from "./src/redux/store";
import {UserContext} from "./src/UserContext";
import {Provider} from "react-redux";
import {ModalPortal} from "react-native-modals/src";
import SplashScreen from "react-native-splash-screen";
import {useEffect} from "react";

const App = () => {

    useEffect(() => {
        SplashScreen.hide()
    }, []);
    return (
        <Provider store={store}>
            <UserContext>
                <StackNavigator/>
                <ModalPortal />
            </UserContext>
        </Provider>
    );
};

export default App;
