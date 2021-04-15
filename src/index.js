import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import searchCity from "./modules/api-calls"

// loads the Icon plugin
UIkit.use(Icons);
searchCity()

// components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');
