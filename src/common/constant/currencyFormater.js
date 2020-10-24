import currencyFormatter from 'currency-formatter';

export const vndFormatter = (amount) => {
    return currencyFormatter.format(amount, { code: 'VND' })
}