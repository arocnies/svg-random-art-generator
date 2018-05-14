import org.w3c.dom.Element
import org.w3c.dom.HTMLElement
import svg.RandomSvgFactory
import kotlin.browser.document
import kotlin.dom.clear

fun main(args: Array<String>) {
    val svgContainer = getSvgContainerElement() ?: error("Could not find experimental.svg container")
    val svgGenForm = initSvgGeneratorForm()

    svgGenForm.onGenerate = {
        svgContainer.clear()
        val svg = RandomSvgFactory.buildSvg(width, height, numOfShapes, color)
        svg.setStyleCentered()
        svgContainer.appendChild(svg)
    }
}

private fun getSvgContainerElement() = document.getElementById("svgContainer")
private fun initSvgGeneratorForm() = SvgGeneratorForm(document.getElementById("generateForm") as HTMLElement)
private fun Element.setStyleCentered() = setAttribute("style", "display: block; margin-left: auto; margin-right: auto;")
