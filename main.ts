input.onButtonPressed(Button.A, function () {
    if (hour_hand == min_hand) {
        led.plotBrightness(list2[min_hand], list3[min_hand], 85)
    } else {
        led.plotBrightness(list2[hour_hand], list3[hour_hand], 0)
    }
    if (hour_hand < 11) {
        hour_hand += 1
    } else {
        hour_hand = 0
    }
    led.plotBrightness(list2[hour_hand], list3[hour_hand], 255)
})
input.onButtonPressed(Button.AB, function () {
    if (five_count == 0) {
        led.plotBrightness(five_x[five_count], five_y[five_count], 170)
    } else {
        led.plotBrightness(five_x[five_count], five_y[five_count], 0)
    }
    if (five_count < 4) {
        five_count += 1
    } else {
        five_count = 0
        led.plotBrightness(five_x[five_count], five_y[five_count], 255)
    }
})
input.onButtonPressed(Button.B, function () {
    led.plotBrightness(octo_x[min_hand], octo_y[min_hand], 0)
    if (hour_hand == min_hand) {
        led.plotBrightness(list2[hour_hand], list3[hour_hand], 255)
    } else {
        led.plotBrightness(list2[min_hand], list3[min_hand], 0)
    }
    if (min_hand < 11) {
        min_hand += 1
    } else {
        min_hand = 0
    }
    led.plotBrightness(list2[min_hand], list3[min_hand], 85)
    led.plotBrightness(octo_x[min_hand], octo_y[min_hand], 128)
})
let five_count = 0
let min_hand = 0
let hour_hand = 0
let octo_y: number[] = []
let octo_x: number[] = []
let list3: number[] = []
let list2: number[] = []
let five_y: number[] = []
let five_x: number[] = []
let angle = 0.062832
five_x = [2, 4, 4, 0, 0]
five_y = [2, 0, 4, 4, 0]
list2 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
list3 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
octo_x = [2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 2]
octo_y = [1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 1]
basic.forever(function () {
    led.plotBrightness(2, 2, 170)
    led.plotBrightness(octo_x[min_hand], octo_y[min_hand], 128)
    led.plotBrightness(list2[min_hand], list3[min_hand], 85)
    led.plotBrightness(list2[hour_hand], list3[hour_hand], 255)
    for (let index = 0; index < 12; index++) {
        for (let index2 = 0; index2 <= 49; index2++) {
            led.plotBrightness(five_x[five_count], five_y[five_count], 255 * Math.sin((index2 + 1) * angle))
            basic.pause(100)
        }
    }
    if (five_count < 4) {
        five_count += 1
    } else {
        five_count = 0
        led.plotBrightness(list2[min_hand], list3[min_hand], 0)
        led.plotBrightness(octo_x[min_hand], octo_y[min_hand], 0)
        if (min_hand < 11) {
            min_hand += 1
        } else {
            min_hand = 0
            led.toggle(list2[hour_hand], list3[hour_hand])
            if (hour_hand < 11) {
                hour_hand += 1
            } else {
                hour_hand = 0
            }
        }
    }
})
