let 動態 = 0
function _‍️ () {
    pins.servoWritePin(AnalogPin.P1, 45)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 65)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 85)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 105)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 90)
}
function _ () {
    pins.servoWritePin(AnalogPin.P0, 50)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 70)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 110)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P0, 90)
}
function domoonwalkr (Speed: number) {
    pins.servoWritePin(AnalogPin.P2, 135)
    basic.pause(Speed)
    pins.servoWritePin(AnalogPin.P1, 45)
    basic.pause(Speed)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(Speed)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(Speed)
}
input.onButtonPressed(Button.A, function () {
    動態 = randint(1, 3)
    if (動態 == 1) {
        _()
    } else if (動態 == 2) {
        _2()
    } else if (動態 == 3) {
        _‍️()
    }
})
function doMoonWalkL (Speed: number) {
    pins.servoWritePin(AnalogPin.P1, 45)
    basic.pause(Speed)
    pins.servoWritePin(AnalogPin.P2, 135)
    basic.pause(Speed)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(Speed)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(Speed)
}
function _2 () {
    pins.servoWritePin(AnalogPin.P2, 40)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 60)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 80)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 100)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P2, 90)
}
input.onButtonPressed(Button.B, function () {
    basic.showString("Moon walk")
    for (let index = 0; index < 4; index++) {
        doMoonWalkL(500)
        doMoonWalkL(300)
        domoonwalkr(500)
        domoonwalkr(300)
    }
})
