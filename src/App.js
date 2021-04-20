import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddService from "./componetns/admin/addservice/AddService";
import Login from "./componetns/admin/login/Login";
import Home from "./componetns/home/home/Home";
import Review from "./componetns/dasbord/review/Review";
import PrivetRoute from "./componetns/privetroute/PrivetRoute";
import OrderList from "./componetns/order/orderlist/OrderList";
import CheakOutOrder from "./componetns/dasbord/cheakoutorder/CheakOutOrder";
import Dasbord from "./componetns/admin/dasbord/Dasbord";
import AdminOrderList from "./componetns/admin/adminorderlist/AdminOrderList";
import MangeService from "./componetns/admin/mangeservice/MangeService";
import AddAdmin from "./componetns/admin/addadmin/AddAdmin";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addservice">
            <AddService></AddService>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivetRoute path="/cheakoutorder/:serviceId">
            <CheakOutOrder></CheakOutOrder>
          </PrivetRoute>
          <Route path="/userorder">
            <OrderList></OrderList>
          </Route>
          <Route path="/review">
              <Review></Review>
          </Route>
          <Route path="/dasbord">
            <Dasbord></Dasbord>
          </Route>
          <Route path="/adminorderlist">
            <AdminOrderList></AdminOrderList>
          </Route>
          <Route path="/mangeservice">
            <MangeService></MangeService>
          </Route>
          <Route path="/addadmin">
              <AddAdmin></AddAdmin>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
