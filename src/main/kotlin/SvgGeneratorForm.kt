import color.RGBA
import org.w3c.dom.HTMLButtonElement
import org.w3c.dom.HTMLElement
import org.w3c.dom.HTMLInputElement

class SvgGeneratorForm(rootElement: HTMLElement) {
    private val widthInput: HTMLInputElement = rootElement.querySelector("#width") as HTMLInputElement
    private val heightInput: HTMLInputElement = rootElement.querySelector("#height") as HTMLInputElement
    private val numOfShapesInput: HTMLInputElement = rootElement.querySelector("#numOfShapes") as HTMLInputElement
    private val colorInput: HTMLInputElement = rootElement.querySelector("#color") as HTMLInputElement
    private val genButton: HTMLButtonElement = rootElement.querySelector("#genButton") as HTMLButtonElement

    val width: Int get() = widthInput.value.toInt()
    val height: Int get() = heightInput.value.toInt()
    val numOfShapes: Int get() = numOfShapesInput.value.toInt()
    val color: RGBA get() = RGBA.fromHexString(colorInput.value)

    var onGenerate: SvgGeneratorForm.() -> Unit = {}
        set(value) {
            field = value
            genButton.onclick = { onGenerate() }
        }
}