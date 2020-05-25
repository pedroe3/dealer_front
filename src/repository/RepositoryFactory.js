import UserRepository from './UserRepository';
import AuthRepository from "./AuthRepository";
import RealmRepository from "./RealmRepository";

const repositories = {
    'auth': AuthRepository,
    'user': UserRepository,
    'realm': RealmRepository
}
export default {
    get: name => repositories[name]
};
