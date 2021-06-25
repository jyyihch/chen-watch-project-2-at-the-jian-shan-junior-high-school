pi = 0
angle = 0
lumi: List[number] = []

def on_forever():
    global pi, angle, lumi
    pi = 3.14159
    angle = pi / 180
    for index in range(18):
        led.plot_brightness(2, 2, 255 * Math.sin(index * 10 * angle))
        basic.pause(46)
        lumi = [0, 79, 150, 206, 243, 255, 243, 206, 150, 79]
basic.forever(on_forever)