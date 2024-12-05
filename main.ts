basic.forever(function () {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    2957,
    1541,
    255,
    0,
    500,
    SoundExpressionEffect.None,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
})
basic.forever(function () {
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        # . # . .
        . # # . .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # . .
        . # . # .
        # . . . #
        `)
    basic.showIcon(IconNames.No)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        # . . # .
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . # . .
        . # . # #
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . # . .
        # # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.showLeds(`
        . . . # .
        # # . # .
        . . # . .
        . # . # #
        . # . . .
        `)
    basic.showLeds(`
        . # . . .
        . # . # #
        . . # . .
        # # . # .
        . . . # .
        `)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
basic.forever(function () {
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0xff0000)
    basic.pause(500)
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0xff0000)
    basic.pause(500)
    basic.setLedColors(0xff0000, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0xff0000)
    basic.pause(500)
    basic.setLedColors(0x00ff00, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0x00ff00)
    basic.pause(500)
    basic.setLedColors(0x0000ff, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0x0000ff)
    basic.pause(500)
    basic.setLedColors(0x0000ff, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x0000ff, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0x0000ff)
    basic.pause(500)
    basic.setLedColors(0x0000ff, 0x000000, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x0000ff, 0x000000)
    basic.pause(500)
    basic.setLedColors(0x000000, 0x000000, 0x0000ff)
    basic.pause(500)
})
