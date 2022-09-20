import { Redirect,Route} from "react-router-dom";
import {GetAuth} from './AuthProvider';

export default function PrivateRoute({ children,allowedRole, ...rest }) {
    console.log(children);
    return (
      <Route
        {...rest}
        render={({ location }) =>
           sessionStorage.getItem("isLogged") ?
           sessionStorage.getItem("role")===allowedRole
          ?(children):
          (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
          : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }