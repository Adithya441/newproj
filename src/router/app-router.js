import Index from "../views";
import LargeData from "../views/modules/table/AgGrid";
import GetNotCommunicated from "../views/modules/charts/GetNotCommunicated";
import DataAvailabilty from "../views/modules/charts/DataAvailability";
import Metertabs from "../views/modules/table/Metertabs";
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
    },
    {
      path: '/getdataavailability',
      element:<DataAvailabilty/>
    },
    {
      path: '/meterdetails',
      element:<Metertabs/>
    },
  ]