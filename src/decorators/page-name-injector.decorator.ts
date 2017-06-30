import {PagesNames} from "../config/pages-name";
/**
 * Created by ihab on 6/30/17.
 */
export function PageNameInjector(pageName:string)
{
  return function(constructor: Function)
  {
    constructor.prototype.pageTitle = PagesNames[pageName];
  };

}
