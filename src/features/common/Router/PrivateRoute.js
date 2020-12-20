import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Path} from 'common/constant/path'
import {useSelector, useDispatch} from 'react-redux'
import {setReferrer} from 'app/reducers/locationSlice'

const LoginPage = React.lazy(() => import('features/login/pages/LoginPage'));

function PrivateRoute({component: Component, exact, path, strict, ...props}) {
  const dispatch = useDispatch();
  const referrer = useSelector(state => state.location.referrer);
  const isLoggedIn = useSelector(state => state.account.loggedIn);
  let currentLocation = window.location.pathname;
  if (isLoggedIn) currentLocation = '/'
  dispatch(setReferrer(currentLocation));

  if(!isLoggedIn){
    return <Route exact path="/login" component={LoginPage}/>
  }else{
    if(path.includes(Path.login)){
      return <Redirect to='/'/>
    }else {
      return referrer ? <Redirect to={referrer}/> :
        <Route {...props} component={Component} exact={exact} strict={strict} path={path}/>
    }
  }
  
  // return (!isLoggedIn ?
  //     <Redirect to={{pathname: Path.login}}/>
  //     : (
  //       path.includes.includes(Path.login) ?
  //         <Redirect to='/'/> : (referrer ? <Redirect to={referrer}/> :
  //         <Route {...props} component={Component} exact={exact} strict={strict} path={path}/>)
  //     )
  // )
}

export default PrivateRoute;