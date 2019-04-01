import User from "../../models/User";
import { SimpleResponse } from "../other/SimpleResponse";
import { ChorusMeeting } from "../../models/ChorusMeeting";
import { Type } from "../../models/Type";
import { Article } from "../../models/Article";
import { Gallery } from "../../models/Gallery";
import { SiteData } from "../../models/SiteData";
import { Category } from "../../models/Category";
import { Song } from "../../models/Song";

export class AdminManager {
    user_getList() : User[] {
        throw new Error();
    }

    user_add(user: User) : SimpleResponse {
        throw new Error();
    }

    //uwzglednia modyfikacje typu usera, jego obecnosci, uprawnienia
    user_modify(user: User): SimpleResponse {
        throw new Error();
    }

    user_deactivate(user: User) : SimpleResponse {
        throw new Error();
    }

    meeting_getList() : ChorusMeeting[] {
        throw new Error();
    }

    meeting_add(meeting: ChorusMeeting) : SimpleResponse {
        throw new Error();
    }

    meeting_modify(meeting: ChorusMeeting) : SimpleResponse {
        throw new Error();
    }
    
    type_getList() : Type[] {
        throw new Error();
    }

    type_add(type: Type) : SimpleResponse {
        throw new Error();
    }

    type_modify(type: Type) : SimpleResponse {
        throw new Error();
    }

    type_remove(type: Type) : SimpleResponse {
        throw new Error();
    }

    article_getList() : Article[] {
        throw new Error();
    }

    article_add(article: Article): SimpleResponse {
        throw new Error();
    }

    article_modify(article: Article) : SimpleResponse {
        throw new Error();
    }

    article_remove(article: Article) : SimpleResponse {
        throw new Error();
    }

    //includes all photos
    gallery_add(gallery: Gallery) : SimpleResponse {
        throw new Error();
    }

    gallery_modify(gallery: Gallery) : SimpleResponse {
        throw new Error();
    }

    gallery_get(gallery: Gallery) : Gallery {
        throw new Error();
    }

    gallery_remove(gallery: Gallery) : SimpleResponse {
        throw new Error();
    }

    siteData_modify(param: SiteData) : SimpleResponse {
        throw new Error();
    }

    category_getList(): Category[] {
        throw new Error();
    }

    category_add(category: Category) : SimpleResponse {
        throw new Error();
    }

    category_modify(category: Category) : SimpleResponse {
        throw new Error();
    }

    category_remove(category: Category) : SimpleResponse {
        throw new Error();
    }

    song_add(song: Song) : SimpleResponse {
        throw new Error();
    }
    //includes Sample and Sheet
    song_modify(song: Song) : SimpleResponse {
        throw new Error();
    }

    song_remove(song: Song) : SimpleResponse {
        throw new Error();
    }

    event_add(event: Event) : SimpleResponse {
        throw new Error();
    }

    event_modify(event: Event) : SimpleResponse {
        throw new Error();
    }

    event_remove(event: Event) : SimpleResponse {
        throw new Error();
    }
}