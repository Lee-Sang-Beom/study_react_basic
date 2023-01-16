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
    // 동적으로 변경되는 값은 []:name]으로 관리. 해당 페이지에서 useParams로 받을 수 있음
    path: "/blogs/:id", // 순서 중요
    component: <ShowPage />,
  },
];

// module export
export default routes;