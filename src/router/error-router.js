import ComingSoon from "../views/modules/extra-pages/coming-soon";
import Error404 from "../views/modules/extra-pages/error-404";
import Error500 from "../views/modules/extra-pages/error-500";
import Maintenance from "../views/modules/extra-pages/maintenance";

export  const ErrorRouter = [
    {
        path:'/error-404',
        element:<Error404/>
    },
    {
        path:'/error-500',
        element:<Error500/>
    },
    {
        path:'/maintenance',
        element:<Maintenance/>
    },
    {
        path:'/coming-soon',
        element:<ComingSoon/>
    }
]