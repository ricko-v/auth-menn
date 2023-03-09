export default async function ({ store, $axios, app }) {
    if (!store.state.Auth.isChecked) {
        try {
            await $axios(`/api/me`)
            store.commit('Auth/setIsAuth', true);
        } catch (e) {
            store.commit('Auth/setIsAuth', false);
        } finally {
            store.commit('Auth/setIsChecked', true)
        }
    }
}