import Index from "../views/index";
import LargeData from "../views/modules/table/AgGrid";

export const AppRouter =[
    {
      path:'/index',
      element:<Index/>
    },
    {
      path:'/datagrid',
      element:<LargeData />
    }
    ]