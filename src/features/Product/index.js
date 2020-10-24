
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import NotFound from 'components/NotFound';

const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage'));

Product.propTypes = {};

function Product(props) {
    const match = useRouteMatch();

    return (
        <Switch>

            <Route exact path={`${match.url}/:id`}
                render={({ match }) => <ProductDetailPage match={match} />} />

            <Route component={NotFound} />
        </Switch>
    );
}

export default Product;