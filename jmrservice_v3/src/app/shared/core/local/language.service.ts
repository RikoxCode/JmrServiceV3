import {Injectable} from '@angular/core';
import {LocalInit} from './init'

@Injectable({
    providedIn: 'root'
})
export class LanguageService {


    constructor(
        private init: LocalInit
    ) { }

    public setTranslations() {
        this.init.setMulti([
            {
                key: 'Jungmusik Rottal',
                values: [
                    this.getCH('Jungmusik Rottal'),
                    this.getEN('Young music Rottal')
                ]
            },
            {
                key: 'Sign in to your account',
                values: [
                    this.getCH('Loggen sie sich ein'),
                    this.getEN('Sign in to your account')
                ]
            },
            {
                key: 'Sign in',
                values: [
                    this.getCH('Einloggen'),
                    this.getEN('Sign in')
                ]
            },
            {
                key: 'Sign Up',
                values: [
                    this.getCH('Registrieren'),
                    this.getEN('Sign up')
                ]
            },
            {
                key: 'Forgot password',
                values: [
                    this.getCH('Passwort vergessen'),
                    this.getEN('Forgot password')
                ]
            },
            {
                key: 'Email',
                values: [
                    this.getCH('E-Mail'),
                    this.getEN('Email')
                ]
            },
            {
                key: 'Password',
                values: [
                    this.getCH('Passwort'),
                    this.getEN('Password')
                ]
            },
            {
                key: 'Don’t have an account yet',
                values: [
                    this.getCH('Noch keinen Account angelegt'),
                    this.getEN('Don’t have an account yet')
                ]
            },
            {
                key: 'Dashboard',
                values: [
                    this.getCH('Dashboard'),
                    this.getEN('Dashboard')
                ]
            },
            {
                key: 'View Demo',
                values: [
                    this.getCH('Demo anschauen'),
                    this.getEN('View Demo')
                ]
            },
            {
                key: 'The Jungmusik Rottal, founded in 1988, records camps, youth music festivals and performances with changes of conductor to this day',
                values: [
                    this.getCH('Die Jungmusik Rottal, gegründet 1988, verzeichnet Lager, Jugendmusikfeste und Auftritte mit Dirigentenwechseln bis heute'),
                    this.getEN('The Jungmusik Rottal, founded in 1988, records camps, youth music festivals and performances with changes of conductor to this day')
                ]
            },
            {
                key: 'Copyright 2024. All Rights Reserved',
                values: [
                    this.getCH('Copyright 2024. Alle Rechte sind vorbehalten'),
                    this.getCH('Copyright 2024. All Rights Reserved')
                ]
            },
            {
                key: 'Teams',
                values: [
                    this.getCH('Teams'),
                    this.getEN('Teams')
                ]
            },
            {
                key: 'Privacy',
                values: [
                    this.getCH('Privatsphäre'),
                    this.getEN('Privacy')
                ]
            },
            {
                key: 'Cookies',
                values: [
                    this.getCH('Cookies'),
                    this.getEN('Cookies')
                ]
            },
        ])
    }

    private getCH(value: string){
        return {
            key: 'de-CH',
            value
        }
    }

    private getEN(value: string){
        return {
            key: 'en-US',
            value
        }
    }
}
