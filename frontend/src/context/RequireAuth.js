import { Redirect,Route} from "react-router-dom";
import useAuth from "../hooks/useAuth";


export default function PrivateRoute({ children, ...rest }) {
    const {auth} = useAuth();
 
    return (
      <Route
        {...rest}
        render={({ location }) =>
           auth.isLogged ? (
            children
          ) : (
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