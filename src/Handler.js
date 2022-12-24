let emailReg = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let letterReg = /^[a-zA-Z]+$/
let numbersReg = /[0-9]/
let telReg = /.{18,}/
let letterNumberReg = /^[a-zA-Z0-9_.-]*$/
let emptyErrorMessage = "Fill this field"
let tooLongTextError = "Text is too long"
let handlers = new Map([
    ["email", emailHandler],
    ["password", passwordHandler],
    ["tel", phoneHandler],
    ["name", fIOHandler],
    ["sName", fIOHandler],
    ["mName", fIOHandler],
    ["birth", dateHandler],
    ["group", groupHandler],
    ["gender", genderHandler],
])

export function selectHandler(name, text, currentError) {
    try {
        if ((currentError === emptyErrorMessage) && !Boolean(text)) {
            throw currentError
        }
        lengthHandler(text)
        let func = handlers.get(name)
        func(text)
    } catch (err) {
        return err
    }
    return ""
}

export function selectSubmitHandler(name, text) {
    try {
        emptyErrorHandler(text)
        lengthHandler(text)
        let func = handlers.get(name)
        func(text)
    } catch (err) {
        return err
    }
    return ""

}

function emailHandler(email) {
    if (!email.match(emailReg) && email) {
        throw "Email is incorrect"
    }

}

function passwordHandler(password) {
    if (password.length < 8 && password) {
        throw "Password has to contain minimum 7 characters"
    }
}

function phoneHandler(tel) {
    if (!tel.match(telReg) && tel) {
        throw "Please finish entering the phone number"
    }
}

function fIOHandler(name) {
    let characerCheck = letterReg.test(name)
    if (numbersReg.test(name) && name && name.match(letterNumberReg)) {
        throw "Numbers  are forbidden"
    }
    if (!characerCheck && name) {
        throw "Such characters are forbidden"
    }


}

function dateHandler(birth) {
    if (new Date() < new Date(birth) && birth) {
        throw "Please reduce date of birthday"
    }
}

function lengthHandler(text) {
    if (text.length > 25) {
        throw tooLongTextError
    }
}

function emptyErrorHandler(text) {
    if (!Boolean(text)) {
        throw emptyErrorMessage
    }
}

function groupHandler(group) {

}

function genderHandler(radio) {

}

