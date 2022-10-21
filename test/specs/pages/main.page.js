class MainPage {
    get cookies() {
        return $('#CybotCookiebotDialogBodyLevelButtonAccept');
    }

    get kfcLogo() {
        return $('#navigation__logo');
    }

    get meniuLink() {
        return $('ul.navigation__primary.cf > li:nth-child(2) > a > span.navigation__primary__buttonCopy');
    }

    get deliveryLink() {
        return $('ul.navigation__primary.cf > li:nth-child(3) > a > span.navigation__primary__buttonCopy');
    }

    get restaurantLink() {
        return $('ul.navigation__primary.cf > li:nth-child(4) > a > span.navigation__primary__buttonCopy');
    }

    get aboutUsLink() {
        return $('ul.navigation__primary.cf > li:nth-child(5) > a > span.navigation__primary__buttonCopy');
    }

    get mediaLink() {
        return $('ul.navigation__primary.cf > li:nth-child(6) > a > span.navigation__primary__buttonCopy')
    }

    get careerLink() {
        return $('ul.navigation__primary.cf > li:nth-child(7) > a > span.navigation__primary__buttonCopy')
    }

    get previousButton() {
        return $('#kfc-carousel-controls > button.carousel-control-prev > span');
    }

    get nextButton() {
        return $('#kfc-carousel-controls > button.carousel-control-next > span');
    }

    get firstContent() {
        return $('#main > div > div > div:nth-child(1)');
    }

    get commandClickCollectImage() {
        return $('div:nth-child(1) > div.col-header > img');
    }

    get commandClickCollectLabel() {
        return $('div:nth-child(1) > div.col-main.text-center > p');
    }

    get commandClickCollectButton() {
        return $('#main > div > div > div:nth-child(1) > div.col-footer > a');
    }

    get secondContent() {
        return $('#main > div > div > div:nth-child(2)')
    }

    get kfcDriveImage() {
        return $('div:nth-child(2) > div.col-header > img');
    }

    get kfcDriveLabel() {
        return $('div:nth-child(2) > div.col-main.text-center > p');
    }

    get kfcDriveButton() {
        return $('div:nth-child(2) > div.col-footer > a');
    }

    get thirdContent() {
        return $('#main > div > div > div:nth-child(3)');
    }

    get favoriteOfferImage() {
        return $('div:nth-child(3) > div.col-header > img');
    }

    get favoriteOfferLabel() {
        return $('div:nth-child(3) > div.col-main.text-center > p');
    }

    get favoriteOfferButton() {
        return $('div:nth-child(3) > div.col-footer > a');
    }

    get acceptCookies() {
        return $('#CybotCookiebotDialogBodyLevelButtonAccept');
    }

    get footerTextSocials() {
        return $('div > div:nth-child(1) > div.footer-title.text-center');
    }

    get footerFacebook() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(1)');
    }
    get footerFacebookImage() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(1) > img');
    }

    get footerYoutube() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(2)');
    }

    get footerYoutubeImage() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(2) > img');
    }

    get footerInstagram() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(3)');
    }

    get footerInstagramImage() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(3) > img');
    }

    get footerTiktok() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(4)');
    }

    get footerTiktokImage() {
        return $('div.footer-social-icons.mt-3 > a:nth-child(4) > img');
    }

    get footerClickColectText() {
        return $(' div:nth-child(2) > div.footer-title.text-center');
    }

    get appleStoreButton() {
        return $('div.footer-store-links.mt-3 > a.me-1.me-sm-1.me-md-0.ext > img');
    }

    get googlePlayButton() {
        return $('div.footer-store-links.mt-3 > a.ms-1.mf-sm-1.ms-md-0.ext > img');
    }

    get questionnaireLabel() {
        return $('#footer > div > div > div:nth-child(3) > div');
    }

    get questionnaireButton() {
        return $('#footer > div > div > div:nth-child(3) > a');
    }

    get contactLink() {
        return $('div.col-xs-12.mt-5 > div > a:nth-child(1)');
    }
}

module.exports = new MainPage();