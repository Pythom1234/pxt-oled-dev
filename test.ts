// Tady jsou testy. Při použití tohoto balíčku jako rozšíření nebude zkompilováno.
OLED.init()
OLED.clear(false)
OLED.addChar("_", `
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . . . . .
. . . . # . . .
. . . # # . . .
. . # . # # # .
. . . . . . . .
. . . . . . . .`)
OLED.drawText("_", 0, 0, true, false)
OLED.draw()