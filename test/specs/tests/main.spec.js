const MainPage = require('../pages/main.page');
const assert = require('assert');

describe('Main Test Suite', () => {
    beforeEach(async () => {
        await browser.url('https://www.kfc.ro/');
        await MainPage.cookies.click();
    })
    afterEach(async () => {
        await browser.pause(3000);
    })

    it('should verify display', async () => {

        await MainPage.kfcLogo.click();
        await browser.deleteCookies();
        assert.equal(await MainPage.kfcLogo.getAttribute('class'), 'navigation__primary__item', 'KFC Logo is not correct');

        assert.equal(await MainPage.meniuLink.isDisplayed(), true, 'Meniu link is not displayed');
        assert.equal(await MainPage.deliveryLink.isDisplayed(), true, 'Delivery link is not displayed');
        assert.equal(await MainPage.restaurantLink.isDisplayed(), true, 'Restaurant link is not displayed');
        assert.equal(await MainPage.aboutUsLink.isDisplayed(), true, 'About us link is not displayed');
        assert.equal(await MainPage.mediaLink.isDisplayed(), true, 'Media link is not displayed');
        assert.equal(await MainPage.careerLink.isDisplayed(), true, 'Career link is not displayed');

        assert.equal(await MainPage.previousButton.isDisplayed(), true, 'Previous button is not displayed');
        assert.equal(await MainPage.nextButton.isDisplayed(), true, 'Next button is not displayed');

        await MainPage.firstContent.scrollIntoView();
        assert.equal(await MainPage.firstContent.isDisplayed(), true, 'First Image is not displayed');
        assert.equal(await MainPage.commandClickCollectImage.getAttribute('src'), 'newkfc/img/box-1.jpg', 'First src attribute is not correct');
        await MainPage.commandClickCollectLabel.scrollIntoView();
        await browser.pause(3000);
        assert.equal(await MainPage.commandClickCollectLabel.getText(), 'COMANDĂ PRIN CLICK & COLLECT', 'Command Label text is not correct');
        assert.equal(await MainPage.commandClickCollectButton.isClickable(), true, 'Command button can not click');

        await MainPage.secondContent.scrollIntoView();
        assert.equal(await MainPage.secondContent.isDisplayed(), true, 'Second Image is not displayed');
        assert.equal(await MainPage.kfcDriveImage.getAttribute('src'), 'newkfc/img/hpbox-drive-15sept.jpg', 'Second src attribute is not correct');
        await MainPage.kfcDriveLabel.scrollIntoView();
        await browser.pause(3000);
        assert.equal(await MainPage.kfcDriveLabel.getText(), 'DOAR LA KFC DRIVE', 'Kfc Drive text is not correct');
        assert.equal(await MainPage.kfcDriveButton.isClickable(), true, 'Kfc drive button can not click')

        await MainPage.thirdContent.scrollIntoView();
        assert.equal(await MainPage.thirdContent.isDisplayed(), true, 'Third Content is not displayed');
        assert.equal(await MainPage.favoriteOfferImage.getAttribute('src'), 'newkfc/img/cupoane-box.jpg', 'Third src attribute is not correct')
        await MainPage.favoriteOfferLabel.scrollIntoView();
        await browser.pause(3000);
        assert.equal(await MainPage.favoriteOfferLabel.getText(), 'REVENDICĂ-ȚI OFERTA PREFERATĂ!', 'Favorite label offer text is not correct');
        assert.equal(await MainPage.favoriteOfferButton.isClickable(), true, 'Favorite offer button can not click');

        assert.equal(await MainPage.footerTextSocials.getText(), 'URMĂREȘTE-NE ȘI PE:', 'Footer text social is not correct');
        assert.equal(await MainPage.footerFacebook.isClickable(), true, 'Footer Facebook is not correct');
        assert.equal(await MainPage.footerFacebookImage.getAttribute('src'), 'newkfc/img/social/icon-fb.png', 'Footer Facebook image is not correct');
        assert.equal(await MainPage.footerYoutube.isClickable(), true, 'Footer Instagram is not correct');
        assert.equal(await MainPage.footerYoutubeImage.getAttribute('src'), 'newkfc/img/social/icon-yt.png', 'Footer Youtube image is not correct');
        assert.equal(await MainPage.footerInstagram.isClickable(), true, 'Footer Instagram is not correct');
        assert.equal(await MainPage.footerInstagramImage.getAttribute('src'), 'newkfc/img/social/icon-instagram.png', 'Footer Instagram image is not correct');
        assert.equal(await MainPage.footerTiktok.isClickable(), true, 'Footer Tiktok is not correct');
        assert.equal(await MainPage.footerTiktokImage.getAttribute('src'), '/newkfc/img/social/tiktok_logo_kfc.png', 'Footer Tiktok image is not correct');

        assert.equal(await MainPage.footerClickColectText.getText(), 'CLICK & COLLECT', 'Footer Click Colect text is not correct');
        assert.equal(await MainPage.appleStoreButton.getAttribute('class'), 'cc-appstore', 'Apple Store button is not correct');
        assert.equal(await MainPage.googlePlayButton.getAttribute('class'), 'cc-playstore', 'GooglePlay button is not correct');

        assert.equal(await MainPage.questionnaireLabel.getText(), 'SPUNE-NE CUM TE-AI SIMȚIT LA NOI', 'Questionnaire Label is not correct');
        assert.equal(await MainPage.questionnaireButton.getText(), 'COMPLETEAZĂ CHESTIONARUL', 'Qustionnaire button text is not correct');
        assert.equal(await MainPage.questionnaireButton.isClickable(), true, 'Questionnaire button is not correct');


    })
})