package svg

import color.RGBA
import org.w3c.dom.svg.SVGSVGElement
import kotlin.js.Math.random
import kotlin.math.max
import kotlin.math.roundToInt

object RandomSvgFactory {
    private var seed: RGBA = RGBA()

    fun createSvg(width: Int, height: Int, numOfShapes: Int, seed: RGBA): SVGSVGElement {
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
            x = getRandomX(),
            y = getRandomY(),
            width = getRandomLength(),
            height = getRandomLength(),
            style = "fill: ${getRandomColor()}"
    )

    private fun SvgBuilder.randomCircle() = circle(
            x = getRandomX(),
            y = getRandomY(),
            radius = getRandomLength() / 3,
            style = "fill: ${getRandomColor()}"
    )

    private fun SvgBuilder.randomPoly() = polygon(
            points = *arrayOf(
                    getRandomX() to getRandomY(),
                    getRandomX() to getRandomY(),
                    getRandomX() to getRandomY()),
            style = "fill: ${getRandomColor()}"
    )

    private fun SvgBuilder.getRandomX() = (width * random()).roundToInt()
    private fun SvgBuilder.getRandomY() = (height * random()).roundToInt()
    private fun SvgBuilder.getRandomLength() = (max(width, height) * random()).roundToInt()

    private fun getRandomColor(): RGBA {
        val randomColor = RGBA(rand(127), rand(127), rand(127), random() / 2.0)
        return randomColor + seed
    }

    private fun rand(upperBoundInclusive: Int) = (random() * upperBoundInclusive.toDouble()).roundToInt()
}
