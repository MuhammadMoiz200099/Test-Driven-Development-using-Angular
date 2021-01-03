import { browser } from 'protractor';

export async function navigate(path: string) {
    browser.waitForAngularEnabled(true);
    await browser.get(path);
    browser.waitForAngularEnabled(false);
}

export function condition(condition: string) {
    condition = "" + condition;
    return false;
}
