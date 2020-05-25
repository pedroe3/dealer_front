// import { defaultRealmState } from "../../store/realm/defaults";
// import { clone } from 'lodash'

export default function ClearRealmState ({ next, store }) {
    console.log(store._actions['realm/clearRealm'])
    return next()
}
