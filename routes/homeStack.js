import { createStackNavigator } from "react-navigation/stack";
import { NavigationContainer} from "react-navigation/native";
import Addtask from './addtask';
import Edittask from './edittask';
import Todolist from "./todolist";

const screen = {

    Home:{
        screen: Todolist
    },
    Addtask:{
        screen: Addtask
    },
    Edittask:{
        screen: Edittask
    },
}

const HomeStack = createStackNavigator(screen);

export default NavigationContainer(HomeStack);