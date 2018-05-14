package svg

import color.RGBA
import org.w3c.dom.svg.SVGSVGElement
import kotlin.js.Math.random
import kotlin.math.roundToInt

object RandomSvgFactory {
    private var seed: RGBA = RGBA()

    fun buildSvg(width: Int, height: Int, numOfShapes: Int, seed: RGBA): SVGSVGElement {
        RandomSvgFactory.seed = seed

        return SvgBuilder.svg {
            this.width = width
            this.height = height

            repeat(numOfShapes) {
                randomShape()
            }
        }
    }

    private fun SvgBuilder.randomShape(): Unit = when (random()) {
        in 0.0..0.3 -> randomRect()
        in 0.3..0.6 -> randomCircle()
        in 0.6..1.0 -> randomPoly()
        else -> {
        }
    }

    private fun SvgBuilder.randomRect() = rect(
            x = (random() * width.toDouble()).roundToInt(),
            y = (random() * height.toDouble()).roundToInt(),
            width = (random() * width.toDouble()).roundToInt(),
            height = (random() * height.toDouble()).roundToInt(),
            style = "fill: ${getRandomColor()}"
    )

    private fun SvgBuilder.randomCircle() = circle(
            x = (random() * width.toDouble()).roundToInt(),
            y = (random() * height.toDouble()).roundToInt(),
            radius = (random() * (width.toDouble() / 3)).roundToInt(),
            style = "fill: ${getRandomColor()}"
    )

    private fun SvgBuilder.randomPoly() = polygon(
            points = *arrayOf(
                    (random() * width.toDouble()).roundToInt() * 2 to (random() * height.toDouble()).roundToInt() * 2,
                    (random() * width.toDouble()).roundToInt() * 2 to (random() * height.toDouble()).roundToInt() * 2,
                    (random() * width.toDouble()).roundToInt() * 2 to (random() * height.toDouble()).roundToInt() * 2),
            style = "fill: ${getRandomColor()}"
    )

    private fun getRandomColor(): RGBA {
        val randomColor = RGBA(rand(127), rand(127), rand(127), random() / 2.0)
        return randomColor + seed
    }

    private fun rand(upperBoundInclusive: Int) = (random() * upperBoundInclusive.toDouble()).roundToInt()
}
