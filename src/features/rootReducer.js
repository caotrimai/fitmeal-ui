import { combineReducers } from 'redux'

//common reducers
import authen from 'app/reducers/authenticationSlice'
import location from 'app/reducers/locationSlice'
import language from 'app/reducers/languageSlice'
import cart from 'app/reducers/cartSlice'
import order from 'app/reducers/orderSlice'
import user from 'app/reducers/userSlice'
import foodCombo from 'app/reducers/foodComboSlice'

//component reducers
import register from 'features/register/reducer/registerSlice'
import login from 'features/login/reducer/loginSlice'


export default combineReducers({
    authen,
    location,
    language,
    cart,
    order,
    user,
    foodCombo,

    register,
    login,
})