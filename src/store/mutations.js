//商城 Vuex-mutations 读取
export default {
    saveUserName(state, username) {
        state.username = username
    },
    saveCartCount(state, count) {
        state.cartCount = count
    }
}