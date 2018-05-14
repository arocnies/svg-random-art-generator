package color

open class RGBA(val r: Int = 0, val g: Int = 0, val b: Int = 0, val a: Double = 0.0) {
    companion object {
        fun fromHexString(hex: String): RGBA {
            val results = "#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})".toRegex(RegexOption.IGNORE_CASE).find(hex)
                    ?: error("Not a hex string")
            val r = results.groupValues[1].toInt(16)
            val g = results.groupValues[2].toInt(16)
            val b = results.groupValues[3].toInt(16)
            return RGBA(r, g, b)
        }
    }

    override fun toString(): String {
        return "rgba($r, $g, $b, $a)"
    }

    fun toHexString(): String {
        fun Int.toHex(): String {
            val hex: String = this.asDynamic().toString(16) as String
            return if (hex.length == 1) "0$hex" else hex
        }

        return "#${r.toHex()}${g.toHex()}${b.toHex()}"
    }

    operator fun plus(other: RGBA) = RGBA(r + other.r, g + other.g, b + other.b, a)
}

