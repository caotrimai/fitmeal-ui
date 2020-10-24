import moment from 'moment'
import { userProductMenu } from './user-product-menu-data'

export const filter = (userId, productId, startDate, endDate) => {

    const result = userProductMenu.filter(menu => {
        const isInTime = moment(menu.date, 'YYYY-MM-DD')
            .isBetween(moment(startDate, 'YYYY-MM-DD').subtract(1, "days"), moment(endDate, 'YYYY-MM-DD').add(1, 'days'))
        return menu.userId === userId && parseInt(menu.productId) === parseInt(productId) && isInTime
    });

    return result.sort((currently, next) => {
        return currently.date - next.date
    })
}
