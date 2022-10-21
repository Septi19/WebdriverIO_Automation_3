const assert = require('assert');
const MenuPage = require('../pages/menu.page');
const MainPage = require('../pages/main.page');

describe('Navbar Test Suite', () => {
    beforeEach(async () => {
        await browser.url('https://www.kfc.ro/');
    })

    // afterEach(async () => {
    //     await browser.pause(3000);
    // })

    it('should display submenu', async () => {
        await MainPage.cookies.click();
        await MainPage.meniuLink.moveTo();
        assert.equal(await MenuPage.subMenuMeniu.isDisplayed(), true, 'Sub menu meniu is not displayed');
    })

    it('should open Noutăţi page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.noutatiLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/noutati', 'The Noutăţi Url is not correct');
    })

    it('should open Smart Choice page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.smartChoiceLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/smart-choice', 'The Smart Choice Url is not correct');
    })

    it('should open Pui page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.puiLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/pui', 'The Pui Url is not correct');
    })

    it('should open Burgers & Wraps page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.burgersWrapsLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/burgers-wraps', 'The Burgers & WrapsLink Url is not correct');
    })

    it('should open Meniuri page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.meniuriLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/meniuri', 'The Meniuri Url is not correct');
    })

    it('should open Meniu Copii page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.meniuCopiitiLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/meniu-copii', 'The Meniu Copii Url is not correct');
    })

    it('should open Boxes page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.boxesLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/boxes', 'The Boxes Url is not correct');
    })

    it('should open Buckets page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.bucketsLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/buckets', 'The Buckets Url is not correct');
    })

    it('should open Salate page', async () => {
        await MainPage.meniuLink.moveTo();
        await MenuPage.salateLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/salate', 'The Salate Url is not correct');
    })

    it('should open Garnituri page', async () => {
        await MainPage.meniuLink.moveTo();
        await browser.pause(1000);
        await MenuPage.garnituriLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/garnituri', 'The Garnituri Url is not correct');
    })

    it('should open Sosuri page', async () => {
        await MainPage.meniuLink.moveTo();
        await browser.pause(1000);
        await MenuPage.sosuriLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/sosuri', 'The Sosuri Url is not correct');
    })

    it('should open Băuturi page', async () => {
        await MainPage.meniuLink.moveTo();
        await browser.pause(1000);
        await MenuPage.bauturiLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/bauturi', 'The Băuturi Url is not correct');
    })

    it('should open Deserturi page', async () => {
        await MainPage.meniuLink.moveTo();
        await browser.pause(1000);
        await MenuPage.deserturiLink.click();

        assert.equal(await browser.getUrl(), 'https://www.kfc.ro/meniu/deserturi', 'The Deserturi Url is not correct');
    })
})