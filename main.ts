let angle = 0
let five_x: number[] = []
let five_y: number[] = []
basic.forever(function () {
    angle = 0.062832
    five_x = [2, 4, 4, 0, 0]
    five_y = [2, 0, 4, 4, 0]
    for (let five_count = 0; five_count <= 4; five_count++) {
        for (let index = 0; index < 12; index++) {
            for (let index = 0; index <= 49; index++) {
                led.plotBrightness(five_x[five_count], five_y[five_count], 255 * Math.sin((index + 1) * angle))
                basic.pause(100)
            }
        }
    }
})
