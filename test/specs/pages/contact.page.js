class ContactPage {
    get articolImage() {
        return $('#block-1814');
    }

    get contactText() {
        return $('#block-3360')
    }

    get kfcContact() {
        return $('#block-3360 > div.row.full > div');
    }

    get contactDetails() {
        return $('#contactForm > div > div');
    }

    get contactDespreTine() {
        return $('#contactForm > div > div > h3:nth-child(1)');
    }

    get prenumeLabel() {
        return $('#contactForm > div > div > div:nth-child(2) > label');
    }

    get prenumeField() {
        return $('#firstName');
    }

    get prenumeError() {
        return $('#parsley-id-5 >li');
    }

    get numeLabel() {
        return $('#contactForm > div > div > div:nth-child(3) > label');
    }

    get numeField() {
        return $('#lastName');
    }

    get numeError() {
        return $('#parsley-id-7');
    }

    get dateDeContactLabel() {
        return $('#contactForm > div > div > h3:nth-child(4)');
    }

    get telefonLabel() {
        return $('#contactForm > div > div > div:nth-child(5) > label');
    }

    get telefonField() {
        return $('#telephone');
    }

    get telefonError() {
        return $('#parsley-id-9');
    }

    get emailLabel() {
        return $('#contactForm > div > div > div:nth-child(6) > label')
    }

    get emailField() {
        return $('#email');
    }

    get emailError() {
        return $('#parsley-id-11');
    }

    get subiectLabel() {
        return $('#contactForm > div > div > h3:nth-child(7)');
    }

    get selecteazaOrasulLabel() {
        return $('#oras');
    }

    get selecteazaOrasulError() {
        return $('#parsley-id-13');
    }

    get selecteazaRestaurantulLabel() {
        return $('#restaurant');
    }

    get selecteazaRestauarntulError() {
        return $('#parsley-id-15');
    }

    get selecteazaTipulDeServiciu() {
        return $('#tipserviciu');
    }

    get selecteazaTipulDeServiciuError() {
        return $('#parsley-id-17');
    }

    get alegeuUnSubiect() {
        return $('#feedback');
    }

    get alegeUnSubiectError() {
        return $('#parsley-id-19')
    }

    get mesajLabel() {
        return $('div:nth-child(12) > label');
    }

    get mesajField() {
        return $('#experience');
    }

    get mesajError() {
        return $('#parsley-id-21');
    }

    get radioButtonNo() {
        return $('div:nth-child(13) > label > input');
    }

    get radioTextNo() {
        return $('div > div:nth-child(13) > label > span');
    }

    get radioButtonYes() {
        return $('#gdpr_da');
    }

    get radioTextYes() {
        return $('div > div:nth-child(15) > label > span');
    }

    get informationText() {
        return $('div > div:nth-child(15) > label > span')
    }

    get telefonCheckbox() {
        return $('#contact_medium_tel');
    }

    get telefonText() {
        return $('div > div:nth-child(16) > div:nth-child(1) > label > span');
    }

    get emailCheckbox() {
        return $('#contact_medium_mail');
    }

    get emailText() {
        return $('div > div:nth-child(16) > div:nth-child(2) > label > span');
    }

    get notRobotCheckbox() {
        return $('.recaptcha-checkbox-borderAnimation');
    }

    get notRobotText() {
        return $('#recaptcha-anchor-label');
    }

    get trimiteButton() {
        return $('#contactFormSubmit');
    }
}

module.exports = new ContactPage();