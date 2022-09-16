let _hour = new Date().getHours()
let _min = new Date().getMinutes()
document.getElementById('time').innerHTML = _hour + ':' + _min

let _nameCard = document.getElementsByClassName('nameCard')[0]
let _numberCard = document.getElementsByClassName('numberCard')[0]
let _cvv = document.getElementsByClassName('cvv')[0]
let _month = document.getElementsByClassName('month')[0]
let _year = document.getElementsByClassName('year')[0]

let _nameInput = document.getElementsByClassName('nameInput')[0]
let _cvvInput = document.getElementsByClassName('cvvInput')[0]
let _monthInput = document.getElementsByClassName('monthInput')[0]
let _yearInput = document.getElementsByClassName('yearInput')[0]

/* ******* */

function _checkType(self, num) {
    temp = self.value
    if ((num == 4) && ((temp.length) == 4)) {
        _nameInput.focus()
    } else if ((num == 5) && ((temp.length) > 12)) {
        _cvvInput.focus()
    } else if ((num == 6) && ((temp.length) == 3)) {
        _monthInput.focus()
    } else if ((num == 7) && ((temp.length) == 2)) {
        let d = _monthInput
        document.getElementsByClassName('month')[0].innerHTML = d.value + ' / '
        _yearInput.focus()
    } else if (num == 8 && temp.length > 2) {
        alert('ERROR !!')
    }

    else {
        if ((num < 5) && (temp.length == 4)) {
            self.nextElementSibling.focus()
        } else if (temp.length == 0) {
            if (num != 1) {
                self.previousElementSibling.focus()
            }
        } else if ((num < 5) && (temp.length > 4)) {
            alert('must be 4 characters !!!')
        }
    }

    /* ******* */

    let a = document.querySelectorAll('.secc2>input')
    _numberCard.innerHTML = a[0].value + ' ' + a[1].value + ' ' + a[2].value + ' ' + a[3].value
    let b = _nameInput
    _nameCard.innerHTML = b.value
    let c = _cvvInput
    _cvv.innerHTML = c.value
    let e = _yearInput
    _year.innerHTML = e.value
}