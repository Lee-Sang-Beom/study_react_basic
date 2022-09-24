import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

const routes = [
  {
    path: "/",
    component: <HomePage />,
  },
  {
    path: "/blogs",
    component: <ListPage />,
  },
  {
    path: "/blogs/create",
    component: <CreatePage />,
  },
  {
    path: "/blogs/edit",
    component: <EditPage />,
  },
];

// module export
export default routes;