import moment from 'moment'
import { productMenu } from './product-menu-data'

export const filter = (productId, startDate, endDate) => {

    const result = productMenu.filter(menu => {
        const isInTime = moment(menu.date, 'YYYY-MM-DD')
            .isBetween(moment(startDate, 'YYYY-MM-DD').diff(1, 'days'), moment(endDate, 'YYYY-MM-DD').add(1, 'days'))
        return parseInt(menu.productId) === parseInt(productId) && isInTime
    });

    return result.sort((currently, next) => {
        return currently.date - next.date
    })
}
