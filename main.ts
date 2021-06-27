let min_hand = 0
let angle = 0
let five_x: number[] = []
let five_y: number[] = []
let list2: number[] = []
let list3: number[] = []
input.onButtonPressed(Button.A, function () {
    if (min_hand >= 11) {
        min_hand = 0
    } else {
        min_hand += 1
    }
})
basic.forever(function () {
    angle = 0.062832
    five_x = [2, 4, 4, 0, 0]
    five_y = [2, 0, 4, 4, 0]
    list2 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
    list3 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
    for (let min_hand = 0; min_hand <= 11; min_hand++) {
        led.plotBrightness(list2[min_hand], list3[min_hand], 255)
        for (let five_count = 0; five_count <= 4; five_count++) {
            for (let index = 0; index < 12; index++) {
                for (let index = 0; index <= 49; index++) {
                    led.plotBrightness(five_x[five_count], five_y[five_count], 255 * Math.sin((index + 1) * angle))
                    basic.pause(1)
                }
            }
        }
        led.toggle(list2[min_hand], list3[min_hand])
    }
})
