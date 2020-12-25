import { browser } from 'protractor';

export async function navigate(path: string) {
    browser.waitForAngularEnabled(true);
    await browser.get(path);
    browser.waitForAngularEnabled(false);
}
