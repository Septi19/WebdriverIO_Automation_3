const ContactPage = require('../pages/contact.page');
const MainPage = require('../pages/main.page');
const assert = require('assert');

describe('Contact Test Suite', () => {
    beforeEach(async () => {
        await browser.url('https://www.kfc.ro/');
    })
    afterEach(async () => {
        await browser.pause(3000);
    })
    it('should verify image', async () => {
        await MainPage.cookies.click();
        await MainPage.contactLink.scrollIntoView();
        await MainPage.contactLink.click();
    })

    it('should verify texts', async () => {
        await MainPage.contactLink.scrollIntoView();
        await MainPage.contactLink.click();

        assert.equal(await ContactPage.kfcContact.isDisplayed(), true, 'This Texts is not displayed');
        assert.equal(await ContactPage.kfcContact.getAttribute('class'), 'col-lg-8 col-lg-offset-2 col-sm-12', 'This text dont have correct attribute');
    })

    it('should have default values', async () => {
        const noText = 'NU, nu sunt de acord cu colectarea și procesarea datelor mele cu caracter personal';
        const yesText = 'DA, îmi doresc să fiu contactat pe adresa de e-mail/numărul de telefon înscrise';

        await MainPage.contactLink.scrollIntoView();
        await MainPage.contactLink.click();

        assert.equal(await ContactPage.contactDespreTine.getText(), 'DESPRE TINE', 'DESPRE TINE TEXT is not correct');
        assert.equal(await ContactPage.prenumeLabel.getText(), 'Prenume', 'Prenume Text is not correct');
        assert.equal(await ContactPage.numeLabel.getText(), 'Nume', 'Nume Text is not correct');

        await browser.pause(1000);
        await ContactPage.dateDeContactLabel.scrollIntoView();

        assert.equal(await ContactPage.dateDeContactLabel.getText(), 'DATE DE CONTACT', 'Date de contact Text is not correct');
        assert.equal(await ContactPage.telefonLabel.getText(), 'Telefon', 'Telefon Text is not correct');
        assert.equal(await ContactPage.emailLabel.getText(), 'E-mail', 'Email Text is not correct');
        assert.equal(await ContactPage.subiectLabel.getText(), 'SUBIECT', 'Subiect Text is not correct');
        assert.equal(await ContactPage.selecteazaOrasulLabel.getAttribute('name'), 'oras', 'Selectează orașul Text is not correct');
        assert.equal(await ContactPage.selecteazaRestaurantulLabel.getAttribute('name'), 'restaurant', 'Selectează restaurantul Text is not correct');
        assert.equal(await ContactPage.selecteazaTipulDeServiciu.getAttribute('name'), 'tipserviciu', 'Selectează tipul de serviciu Text is not correct');
        assert.equal(await ContactPage.alegeuUnSubiect.getAttribute('name'), 'feedback', 'Alege un subiect is not correct');

        await browser.pause(1000);
        await ContactPage.radioButtonNo.scrollIntoView();

        assert.equal(await ContactPage.radioButtonNo.isDisplayed(), true, 'Radio Button No is not displayed');
        assert.equal(await ContactPage.radioTextNo.getText(), noText, 'Radio button No is not correct');
        assert.equal(await ContactPage.radioButtonYes.isDisplayed(), true, 'Radio Buuton Yes is not displayed');
        assert.equal(await ContactPage.radioTextYes.getText(), yesText, 'Radio button Yes is not correct');
        assert.equal(await ContactPage.telefonCheckbox.isDisplayed(), true, 'Telefon Checkbox is not displayed');
        assert.equal(await ContactPage.telefonText.getText(), 'Telefon', 'Telefon text is not correct');
        assert.equal(await ContactPage.emailCheckbox.isDisplayed(), true, 'Email Checkbox is not displayed');
        assert.equal(await ContactPage.emailText.getText(), 'E-mail', 'Email text is not correct');
        assert.equal(await ContactPage.trimiteButton.isClickable(), true, 'Trimite Button can not be clicked');
        assert.equal(await ContactPage.trimiteButton.getAttribute('class'), 'btn', 'Trimite button does not have a attribute');
    })

    it.only('should display error when all fields are not written', async () => {
        await MainPage.cookies.click();
        await MainPage.contactLink.scrollIntoView();
        await MainPage.contactLink.click();

        await ContactPage.trimiteButton.scrollIntoView();
        await ContactPage.trimiteButton.click();
        await browser.pause(2000);

        assert.equal(await ContactPage.prenumeError.isDisplayed(), true, 'Prenume error is not displayed');
        assert.equal(await ContactPage.numeError.isDisplayed(), true, 'Nume error is not displayed');
        assert.equal(await ContactPage.telefonError.isDisplayed(), true, 'Telefon error is not displayed');

        await ContactPage.emailError.scrollIntoView();

        assert.equal(await ContactPage.emailError.isDisplayed(), true, 'Email error is not displayed');
        assert.equal(await ContactPage.selecteazaOrasulError.isDisplayed(), true, 'Selecteaza Orasul Error is not displayed');
        assert.equal(await ContactPage.selecteazaRestauarntulError.isDisplayed(), true, 'Selecteaza Restaurantul Error is not displayed');
        assert.equal(await ContactPage.selecteazaTipulDeServiciuError.isDisplayed(), true, 'Selecteaza Tipul de Serviciu Error is not displayed');
        assert.equal(await ContactPage.alegeUnSubiectError.isDisplayed(), true, 'Alege un subiect Error is not displayed');
        assert.equal(await ContactPage.mesajError.isDisplayed(), true, 'Mesaj Error is not displayed');
    })
})