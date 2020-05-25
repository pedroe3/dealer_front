import { defaultRealmState } from "./defaults";
import { clone } from 'lodash'

const STATE = {
    realms: [],
    realm: clone(defaultRealmState),
    meta: {
        paginationData: {
            total: 0,
            per_page: 0,
            current_page: 0,
            last_page: 0,
            next_page_url: null,
            prev_page_url: null,
            from: 0,
            to: 0,
        }
    }
};

export default STATE;
