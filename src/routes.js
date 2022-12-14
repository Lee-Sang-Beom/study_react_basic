import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";
import ShowPage from "./pages/ShowPage";

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
  {
    path: "/blogs/:id", // 순서 중요
    component: <ShowPage />,
  },
];

// module export
export default routes;