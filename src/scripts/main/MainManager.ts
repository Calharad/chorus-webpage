import { Article } from "../../models/Article";
import { Photo } from "../../models/Photo";
import { SiteData } from "../../models/SiteData";
import { ChorusMeeting } from "../../models/ChorusMeeting";
import { Sample } from "../../models/Sample";
import { Gallery } from "../../models/Gallery";
import { Social } from "../../models/Social";

export class MainManager {
    getNearestEvents(count: number) : Event[]{
        throw new Error();
    }

    getNextEvents(): Event[] {
        throw new Error();
    }

    getRecrutationData(): SiteData {
        throw new Error();
    }

    getRecrutationMainText() : SiteData {
        throw new Error();
    }

    getHistoryText() : SiteData {
        throw new Error();
    }

    getRepertuarData() : SiteData {
        throw new Error();
    }

    getDirigentData() : SiteData {
        throw new Error();
    }

    getNearestMeetings(count: number) : ChorusMeeting[] {
        throw new Error();
    }

    getFutureMeetings() : ChorusMeeting[] {
        throw new Error();
    }

    getAllContacts() : SiteData[] {
        throw new Error();
    }

    getSlideshowPhotos() : Photo[] {
        throw new Error();
    }

    getNews(count: number, start: number = 1) : Article[]{
        throw new Error();
    }

    getFullArticle(article: Article) : Article {
        throw new Error();
    }

    getSamples() : Sample[] {
        throw new Error();
    }

    getGreetings() : SiteData {
        throw new Error();
    }

    getGalleries() : Gallery[] {
        throw new Error();
    }

    getGalleryPhotos() : Photo[] {
        throw new Error();
    }

    getChorusData() : SiteData {
        throw new Error();
    }

    getSocial() : Social[] {
        throw new Error();
    }

}