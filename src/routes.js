/** 
  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Soft UI Dashboard React layouts
import Dashboard from "layouts/dashboard";
import RoomList from "layouts/room-list";
import Room from "layouts/room";
import Profile from "layouts/profile";
import SignIn from "layouts/authentication/sign-in";
import SignUp from "layouts/authentication/sign-up";

// Soft UI Dashboard React icons
import Shop from "examples/Icons/Shop";
import Document from "examples/Icons/Document";
import SpaceShip from "examples/Icons/SpaceShip";
import CustomerSupport from "examples/Icons/CustomerSupport";


const routes = [
  {
    type: "collapse",
    name: "Home",
    key: "home",
    route: "/home",
    icon: <Shop size="12px" />,
    component: <Dashboard />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Lista de Salas",
    key: "room-list",
    route: "/room-list",
    icon: <SpaceShip size="12px" />, // Escolha um ícone apropriado
    component: <RoomList />, // Crie o componente RoomList
    noCollapse: false,
    
  },
  { type: "title", title: "Account Pages", key: "account-pages" },
  {
    type: "collapse",
    name: "conta",
    key: "profile",
    route: "/profile",
    icon: <CustomerSupport size="12px" />,
    component: <Profile />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign In",
    key: "sign-in",
    route: "/authentication/sign-in",
    icon: <Document size="12px" />,
    component: <SignIn />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "Sign Up",
    key: "sign-up",
    route: "/authentication/sign-up",
    icon: <SpaceShip size="12px" />,
    component: <SignUp />,
    noCollapse: true,
  },
  {
    key: "room",
    route: "/room/:id",
    component: <Room />,
    noCollapse: true,
  },
];

export default routes;
