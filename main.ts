radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Happy)
        pattern01()
        turrrrrrrrn()
    }
})
function moveForward () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
function turnLeft (duration: number) {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 1)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(duration)
    stopMovement()
}
function pattern01 () {
    for (let index = 0; index < 4; index++) {
        ArmLeft(90)
        ArmRight(30)
        turnLeft(1000)
        basic.showLeds(`
            . . . . .
            # . # . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        ArmLeft(150)
        ArmRight(90)
        turnRight(1000)
        basic.showLeds(`
            . . . . .
            . . # . #
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    }
}
function shakeRight () {
    servos.P1.setAngle(90)
    basic.pause(100)
    servos.P1.setAngle(30)
}
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    pattern01()
    turrrrrrrrn()
})
function shakeLeft () {
    servos.P2.setAngle(90)
    basic.pause(100)
    servos.P2.setAngle(30)
}
function turnRight (duration: number) {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(duration)
    stopMovement()
}
input.onButtonPressed(Button.B, function () {
    ArmLeft(0)
    ArmRight(0)
})
function ArmRight (数値: number) {
    servos.P1.setAngle(数値)
}
function stopMovement () {
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 0)
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    ArmLeft(150)
    ArmRight(150)
})
function turrrrrrrrn () {
    turnRight(7000)
    basic.showIcon(IconNames.Heart)
}
function moveBackward () {
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.digitalWritePin(DigitalPin.P14, 0)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.digitalWritePin(DigitalPin.P16, 1)
}
function ArmLeft (数値: number) {
    servos.P2.setAngle(数値)
}
basic.showIcon(IconNames.House)
radio.setGroup(90)
basic.forever(function () {
	
})
