import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps171886Navigator from '../features/Maps171886/navigator';
import Additem171885Navigator from '../features/Additem171885/navigator';
import Maps171881Navigator from '../features/Maps171881/navigator';
import UserProfile171877Navigator from '../features/UserProfile171877/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps171886: { screen: Maps171886Navigator },
Additem171885: { screen: Additem171885Navigator },
Maps171881: { screen: Maps171881Navigator },
UserProfile171877: { screen: UserProfile171877Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
