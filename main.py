def on_button_pressed_a():
    global hour_hand
    led.plot_brightness(octo_x[hour_hand], octo_y[hour_hand], 0)
    if hour_hand == min_hand:
        led.plot_brightness(list2[min_hand], list3[min_hand], 255)
    else:
        led.plot_brightness(list2[hour_hand], list3[hour_hand], 0)
    if hour_hand < 11:
        hour_hand += 1
    else:
        hour_hand = 0
    led.plot_brightness(list2[hour_hand], list3[hour_hand], 85)
    led.plot_brightness(octo_x[hour_hand], octo_y[hour_hand], 170)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global five_count
    if five_count == 0:
        led.plot_brightness(five_x[five_count], five_y[five_count], 170)
    else:
        led.plot_brightness(five_x[five_count], five_y[five_count], 0)
    if five_count < 4:
        five_count += 1
    else:
        five_count = 0
        led.plot_brightness(five_x[five_count], five_y[five_count], 255)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global min_hand
    if hour_hand == min_hand:
        led.plot_brightness(list2[hour_hand], list3[hour_hand], 85)
    else:
        led.plot_brightness(list2[min_hand], list3[min_hand], 0)
    if min_hand < 11:
        min_hand += 1
    else:
        min_hand = 0
    led.plot_brightness(list2[min_hand], list3[min_hand], 255)
input.on_button_pressed(Button.B, on_button_pressed_b)

five_count = 0
min_hand = 0
hour_hand = 0
octo_y: List[number] = []
octo_x: List[number] = []
list3: List[number] = []
list2: List[number] = []
five_y: List[number] = []
five_x: List[number] = []
angle = 0.062832
five_x = [2, 4, 4, 0, 0]
five_y = [2, 0, 4, 4, 0]
list2 = [2, 3, 4, 4, 4, 3, 2, 1, 0, 0, 0, 1]
list3 = [0, 0, 1, 2, 3, 4, 4, 4, 3, 2, 1, 0]
octo_x = [2, 2, 3, 3, 3, 2, 2, 2, 1, 1, 1, 2]
octo_y = [1, 1, 2, 2, 2, 3, 3, 3, 2, 2, 2, 1]

def on_forever():
    global five_count, min_hand, hour_hand
    led.plot_brightness(2, 2, 170)
    led.plot_brightness(octo_x[hour_hand], octo_y[hour_hand], 170)
    led.plot_brightness(list2[hour_hand], list3[hour_hand], 85)
    led.plot_brightness(list2[min_hand], list3[min_hand], 255)
    for index in range(12):
        for index2 in range(50):
            led.plot_brightness(five_x[five_count],
                five_y[five_count],
                255 * Math.sin((index2 + 1) * angle))
            basic.pause(100)
    if five_count < 4:
        five_count += 1
    else:
        five_count = 0
        led.toggle(list2[min_hand], list3[min_hand])
        if min_hand < 11:
            min_hand += 1
        else:
            min_hand = 0
            led.plot_brightness(list2[hour_hand], list3[hour_hand], 0)
            led.plot_brightness(octo_x[hour_hand], octo_y[hour_hand], 0)
            if hour_hand < 11:
                hour_hand += 1
            else:
                hour_hand = 0
basic.forever(on_forever)
