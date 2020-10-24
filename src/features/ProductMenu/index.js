
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';

const ProductMenuPage = React.lazy(() => import('./pages/ProductMenuPage'));

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();

    return (
        <Switch>
            <Route exact path={`${match.url}/`}
                render={({ match }) => <ProductMenuPage match={match} />} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Product;