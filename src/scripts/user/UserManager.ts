import User, { LoginData } from "../../models/User";
import { SimpleResponse } from "../other/SimpleResponse";
import { Type } from "../../models/Type";
import { Category } from "../../models/Category";
import { Song } from "../../models/Song";
import { Sheet } from "../../models/Sheet";
import { Sample } from "../../models/Sample";
import { UserPresence } from "../../models/UserPresence";

export class UserManager {
    login(data: LoginData) : SimpleResponse {
        throw new Error();
    }

    modifyYourself(user: User) : SimpleResponse {
        throw new Error();
    }

    getYourself(user: User) : SimpleResponse {
        throw new Error();
    }

    getTypeList(): Type[] {
        throw new Error();
    }

    getCategoryList() : Category[] {
        throw new Error();
    }

    getSongList(category: Category = undefined) : Song[]{
        throw new Error();
    }

    getSheet(song: Song): Sheet {
        throw new Error();
    }

    getSamples(type: Type = undefined) : Sample[] {
        throw new Error();
    }

    getUserPresence(user: User) : UserPresence[] {
        throw new Error();
    }

}