import {SocialNetwork} from "./social-network";


class App implements SocialNetwork {
    title = "Learning TypeScript";

    getUsers() {
        return [{name: 'John'}]
    }
}