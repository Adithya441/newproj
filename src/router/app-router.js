import Index from "../views/index";
import LargeData from "../views/modules/table/AgGrid";
import Apicall from "../views/modules/charts/GetCommunication";
import GetNotCommunicated from "../views/modules/charts/GetNotCommunicated";
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
      path: '/getnotcommunicated',
      element:<GetNotCommunicated/>
    }
    ]