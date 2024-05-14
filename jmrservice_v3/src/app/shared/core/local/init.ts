import {LanguageService} from "./language.service";

export interface ITranslationValues{
    key: string,
    value: string
}

export interface ITranslation {
    key: string,
    values: ITranslationValues[]
}

export interface ILocalInit {
    local: string,
    translations: ITranslation[]
}

export class LocalInit{
    private translations: ITranslation[] = [];
    private local: string = "de-CH";

    constructor( ) {
        const languageService = new LanguageService(this)
        languageService.setTranslations()
        this.local = this.getLocalLanguage()
    }

    public getLocalLanguage(): string {
        let language = navigator.language || (navigator as any).userLanguage;
        language = language.replace('-', '_');
        if(language === 'de')
            language = 'de-CH';

        if(!this.checkIfLocalIsValid(language))
            language = 'de-CH'

        return `${language}`;
    }

    public changeLocal(newLocal: string){
        if(this.checkIfLocalIsValid(newLocal))
            this.local = newLocal
        else throw new Error("Invalid local!")
    }

    private checkIfLocalIsValid(language: string): boolean {
        const languageRegex = /^[a-z]{2}-[A-Z]{2}$/;
        return languageRegex.test(language);
    }


    public set(key: string, translations: ITranslationValues[]): void{
        this.translations.push({
            key,
            values: translations
        })
    }

    public setMulti(translations: ITranslation[]): void{
        this.translations = translations
    }

    public _(key: string){
        const translation = this.translations.find(value => value.key === key);
        if (translation) {
            const localTranslation = translation.values.find(local => local.key === this.local);
            if (localTranslation) {
                return localTranslation.value;
            }
        }
        return key;
    }

}

let localInit = new LocalInit()

export function __(key: string){
    localInit.changeLocal('de-CH')
    return localInit._(key);
}
