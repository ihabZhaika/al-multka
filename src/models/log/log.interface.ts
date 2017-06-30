import {LogTag} from "./log-tag.enum";
import {Page} from "../page/page.enum";
/**
 * Created by ihab on 6/30/17.
 */
export interface Log
{
  date:Date;
  userId:string
  tag:LogTag
  page:Page;
  description:string;
}
