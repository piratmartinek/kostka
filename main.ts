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
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Diamond)
        basic.showIcon(IconNames.SmallDiamond)
    }
    number = randint(1, 6)
})
let number = 0
number = 0
