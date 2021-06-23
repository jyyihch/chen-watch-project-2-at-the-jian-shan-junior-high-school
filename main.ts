let list2: number[] = []
let list3: number[] = []
basic.forever(function () {
    list2 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
    list3 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
    for (let index = 0; index <= 11; index++) {
        led.plot(list2[index], list3[index])
        basic.pause(83.333)
        led.toggle(list2[index], list3[index])
    }
})
