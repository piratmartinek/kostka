input.onButtonPressed(Button.A, function () {
    basic.showString("ahoj")
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
})
input.onGesture(Gesture.ScreenUp, function () {
    if (number > 0) {
        basic.showNumber(number)
    } else {
        basic.clearScreen()
    }
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("ahoj")
    basic.showIcon(IconNames.LeftTriangle)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("ahoj")
    basic.showIcon(IconNames.Triangle)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(2000)
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    number = randint(1, 6)
})
let number = 0
number = 0
