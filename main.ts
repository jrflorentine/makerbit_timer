makerbit.onTouch(TouchSensor.T5, TouchAction.Touched, function () {
    minutes = 0
    seconds = 0
})
function DisplayTime () {
    if (minutes < 10) {
        makerbit.showStringOnLcd1602("0", makerbit.position1602(LcdPosition1602.Pos1), 1)
        makerbit.showStringOnLcd1602("" + (minutes), makerbit.position1602(LcdPosition1602.Pos2), 1)
    } else {
        makerbit.showStringOnLcd1602("" + (minutes), makerbit.position1602(LcdPosition1602.Pos2), 2)
    }
    makerbit.showStringOnLcd1602(":", makerbit.position1602(LcdPosition1602.Pos3), 1)
    if (seconds < 10) {
        makerbit.showStringOnLcd1602("0", makerbit.position1602(LcdPosition1602.Pos4), 1)
        makerbit.showStringOnLcd1602("" + (seconds), makerbit.position1602(LcdPosition1602.Pos5), 1)
    } else {
        makerbit.showStringOnLcd1602("" + (seconds), makerbit.position1602(LcdPosition1602.Pos4), 2)
    }
}
let minutes = 0
let seconds = 0
basic.showLeds(`
    # . . . #
    # # . # #
    # . # . #
    # . . . #
    # . . . #
    `)
led.enable(false)
makerbit.setLedPins(makerbit.level(PinLevel.Low))
seconds = 0
minutes = 0
basic.forever(function () {
    DisplayTime()
    basic.pause(1000)
    seconds += 1
    if (seconds == 60) {
        minutes += 1
        seconds = 0
    }
})
