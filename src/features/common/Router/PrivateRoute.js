import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {Path} from 'common/constant/path'
import {useSelector, useDispatch} from 'react-redux'
import {setReferrer} from 'app/reducers/locationSlice'


function PrivateRoute({component: Component, exact, path, strict, ...props}) {
  const dispatch = useDispatch();
  const referrer = useSelector(state => state.location.referrer);
  const isLoggedIn = useSelector(state => state.account.loggedIn);
  let currentLocation = window.location.pathname;
  if (isLoggedIn) currentLocation = '/'
  dispatch(setReferrer(currentLocation));

  return (!isLoggedIn ?
      <Redirect to={{pathname: Path.login}} />
      : (
          path === Path.login && isLoggedIn ? <Redirect to={referrer}/>
          : <Route {...props} component={Component} exact={exact} strict={strict} path={path} />
      )
  )
}

export default PrivateRoute;