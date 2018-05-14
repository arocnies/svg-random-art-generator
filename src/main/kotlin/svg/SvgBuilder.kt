package svg

import org.w3c.dom.svg.*
import kotlin.browser.document

open class SvgBuilder {
    private val children: MutableList<SVGElement> = mutableListOf()

    var width: Int = 0
    var height: Int = 0

    fun build(): SVGSVGElement {
        val svg = document.createElementNS(SVG_NS, "svg") as SVGSVGElement
        svg.setAttribute("width", width.toString())
        svg.setAttribute("height", height.toString())
        children.forEach { svg.appendChild(it) }
        return svg
    }

    fun rect(x: Int, y: Int, width: Int, height: Int, style: String = "fill: 0xbada55") {
        val rect = document.createElementNS(SVG_NS, "rect") as SVGRectElement

        children += rect.apply {
            setAttributeNS(null, "x", x.toString())
            setAttributeNS(null, "y", y.toString())
            setAttributeNS(null, "width", width.toString())
            setAttributeNS(null, "height", height.toString())
            setAttributeNS(null, "style", style)
        }
    }

    fun circle(x: Int, y: Int, radius: Int, style: String = "fill: 0xbada55") {
        val circle = document.createElementNS(SVG_NS, "circle") as SVGCircleElement

        children += circle.apply {
            setAttributeNS(null, "cx", x.toString())
            setAttributeNS(null, "cy", y.toString())
            setAttributeNS(null, "r", radius.toString())
            setAttributeNS(null, "style", style)
        }
    }

    fun polygon(vararg points: Pair<Int, Int>, style: String = "fill: 0xbada55") {
        val poly = document.createElementNS(SVG_NS, "polygon") as SVGPolygonElement
        children += poly.apply {
            setAttributeNS(null, "points", points.joinToString { "${it.first} ${it.second}" })
            setAttributeNS(null, "style", style)
        }
    }

    companion object {
        const val SVG_NS = "http://www.w3.org/2000/svg"
        fun svg(block: SvgBuilder.() -> Unit): SVGSVGElement {
            val svgBuilder = SvgBuilder()
            svgBuilder.block()
            return svgBuilder.build()
        }
    }
}