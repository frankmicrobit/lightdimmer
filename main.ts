radio.onReceivedNumber(function (receivedNumber) {
    if (Level == 0) {
        StartTimeMs = control.millis()
        Level = receivedNumber
    } else {
        Level = 0
    }
    pins.analogWritePin(AnalogPin.P1, Level)
})
input.onButtonPressed(Button.A, function () {
    Level += 255
    if (Level >= 1023) {
        Level = 1023
    }
    pins.analogWritePin(AnalogPin.P1, Level)
})
input.onButtonPressed(Button.AB, function () {
    Level = 0
    pins.analogWritePin(AnalogPin.P1, Level)
})
input.onButtonPressed(Button.B, function () {
    Level += -255
    if (Level <= 0) {
        Level = 0
    }
    pins.analogWritePin(AnalogPin.P1, Level)
})
let StartTimeMs = 0
let Level = 0
radio.setGroup(1)
Level = 0
StartTimeMs = 0
basic.forever(function () {
    if (Level > 0) {
        if (control.millis() > StartTimeMs + 60000) {
            Level = 0
            pins.analogWritePin(AnalogPin.P1, Level)
        }
    }
    basic.pause(1000)
})
