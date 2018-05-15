package color

enum class Color(val rgba: RGBA) {
    RED(RGBA(r = 128)),
    ORANGE(RGBA(r = 128, g = 64)),
    YELLOW(RGBA(r = 128, g = 128)),
    GREEN(RGBA(g = 128)),
    CYAN(RGBA(g = 128, b = 128)),
    BLUE(RGBA(b = 128)),
    PURPLE(RGBA(r = 64, b = 128)),
    PINK(RGBA(r = 128, b = 128)),
    GRAY(RGBA(r = 64, g = 64, b = 64)),
    ALL(RGBA())
}
