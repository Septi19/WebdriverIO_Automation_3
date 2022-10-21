class MenuPage {
    get subMenuMeniu() {
        return $('#sub-meniu');
    }

    get noutatiLink() {
        return $('#sub-meniu > li:nth-child(1) > a');
    }

    get smartChoiceLink() {
        return $('#sub-meniu > li:nth-child(2) > a');
    }

    get puiLink() {
        return $('#sub-meniu > li:nth-child(3) > a');
    }

    get burgersWrapsLink() {
        return $('#sub-meniu > li:nth-child(4) > a');
    }

    get meniuriLink() {
        return $('#sub-meniu > li:nth-child(5) > a');
    }

    get meniuCopiitiLink() {
        return $('#sub-meniu > li:nth-child(6) > a');
    }

    get boxesLink() {
        return $('#sub-meniu > li:nth-child(7) > a');
    }

    get bucketsLink() {
        return $('#sub-meniu > li:nth-child(8) > a');
    }

    get salateLink() {
        return $('#sub-meniu > li:nth-child(9) > a');
    }

    get garnituriLink() {
        return $('#sub-meniu > li:nth-child(10) > a');
    }

    get sosuriLink() {
        return $('#sub-meniu > li:nth-child(11) > a');
    }

    get bauturiLink() {
        return $('#sub-meniu > li:nth-child(12) > a');
    }

    get deserturiLink() {
        return $('#sub-meniu > li:nth-child(13) > a');
    }
}

module.exports = new MenuPage();