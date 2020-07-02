export default function ({route, store, redirect}) {
  if (route.name !== 'login' && !store.getters['auth/IS_AUTH']) {
    redirect('/login')}
}