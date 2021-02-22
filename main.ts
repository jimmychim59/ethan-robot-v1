function doResetMotor (speed: number) {
    pins.servoWritePin(AnalogPin.P0, 45)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P0, 135)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P0, 90)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P1, 45)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P1, 135)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P2, 45)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P2, 135)
    basic.pause(speed)
    pins.servoWritePin(AnalogPin.P2, 90)
    basic.pause(speed)
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
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Moon walk")
    for (let index = 0; index < 4; index++) {
        doMoonWalkL(500)
        doMoonWalkL(300)
        domoonwalkr(500)
        domoonwalkr(300)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    doResetMotor(1000)
})
