input.onButtonPressed(Button.A, function () {
    led.toggle(list2[min_hand], list3[min_hand])
    if (min_hand < 11) {
        min_hand += 1
    } else {
        min_hand = 0
    }
    led.plotBrightness(list2[min_hand], list3[min_hand], 255)
})
let five_count = 0
let min_hand = 0
let list3: number[] = []
let list2: number[] = []
let angle = 0.062832
let five_x = [2, 4, 4, 0, 0]
let five_y = [2, 0, 4, 4, 0]
list2 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
list3 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
basic.forever(function () {
    led.plotBrightness(list2[min_hand], list3[min_hand], 255)
    for (let index = 0; index < 12; index++) {
        for (let index = 0; index <= 49; index++) {
            led.plotBrightness(five_x[five_count], five_y[five_count], 255 * Math.sin((index + 1) * angle))
            basic.pause(1)
        }
    }
    if (five_count < 4) {
        five_count += 1
    } else {
        five_count = 0
        led.toggle(list2[min_hand], list3[min_hand])
        if (min_hand < 11) {
            min_hand += 1
        } else {
            min_hand = 0
        }
    }
})
