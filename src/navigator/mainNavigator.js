import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList177102Navigator from '../features/ArticleList177102/navigator';
import ArticleList177101Navigator from '../features/ArticleList177101/navigator';
import ArticleList177100Navigator from '../features/ArticleList177100/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList177102: { screen: ArticleList177102Navigator },
ArticleList177101: { screen: ArticleList177101Navigator },
ArticleList177100: { screen: ArticleList177100Navigator },

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
