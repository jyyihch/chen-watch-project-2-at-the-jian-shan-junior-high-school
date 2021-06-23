list2: List[number] = []
list3: List[number] = []

def on_forever():
    global list2, list3
    list2 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
    list3 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
    for index in range(12):
        led.plot(list2[index], list3[index])
        basic.pause(83.333)
        led.toggle(list2[index], list3[index])
basic.forever(on_forever)
