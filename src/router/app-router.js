import Index from "../views/index";
import LargeData from "../views/modules/table/AgGrid";
import Apicall from "../views/modules/charts/Apicall";
export const AppRouter =[
    {
      path:'/index',
      element:<Index/>
    },
    {
      path:'/datagrid',
      element:<LargeData />
    },
    {
      path: '/comm',
      element:<Apicall/>
    }
    ]