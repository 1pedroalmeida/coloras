const coloras = require("../dist/lib/index")

// Color
describe("Converts color codes among different color systems", () => {
    it("Converts from hex to rgb", () => {
        const color = new coloras.Color("#1f1f1f")
        expect(color.toRgb()).toEqual("rgb(31, 31, 31)")
    })

    it("Converts from hex to hsl", () => {
        const color = new coloras.Color("#1f1f1f")
        expect(color.toHsl()).toEqual("hsl(0, 0%, 12%)")
    })

    it("Converts from hex to hsv", () => {
        const color = new coloras.Color("#1f1f1f")
        expect(color.toHsv()).toEqual("hsv(0, 0%, 12%)")
    })

    it("Converts from hex to cmyk", () => {
        const color = new coloras.Color("#1f1f1f")
        expect(color.toCmyk()).toEqual("cmyk(0, 0, 0, 88)")
    })

    it("Converts from rgb to hex", () => {
        const color = new coloras.Color("rgb(31, 31, 31)")
        expect(color.toHex()).toEqual("#1f1f1f")
    })

    it("Converts from rgb to hsl", () => {
        const color = new coloras.Color("rgb(31, 31, 31)")
        expect(color.toHsl()).toEqual("hsl(0, 0%, 12%)")
    })

    it("Converts from rgb to hsv", () => {
        const color = new coloras.Color("rgb(31, 31, 31)")
        expect(color.toHsv()).toEqual("hsv(0, 0%, 12%)")
    })

    it("Converts from rgb to cmyk", () => {
        const color = new coloras.Color("rgb(31, 31, 31)")
        expect(color.toCmyk()).toEqual("cmyk(0, 0, 0, 88)")
    })

    it("Converts from hsl to hex", () => {
        const color = new coloras.Color("hsl(0, 0%, 12%)")
        expect(color.toHex()).toEqual("#1f1f1f")
    })

    it("Converts from hsl to rgb", () => {
        const color = new coloras.Color("hsl(0, 0%, 12%)")
        expect(color.toRgb()).toEqual("rgb(31, 31, 31)")
    })

    it("Converts from hsl to hsv", () => {
        const color = new coloras.Color("hsl(0, 0%, 12%)")
        expect(color.toHsv()).toEqual("hsv(0, 0%, 12%)")
    })

    it("Converts from hsl to cmyk", () => {
        const color = new coloras.Color("hsl(0, 0%, 12%)")
        expect(color.toCmyk()).toEqual("cmyk(0, 0, 0, 88)")
    })

    it("Converts from hsv to hex", () => {
        const color = new coloras.Color("hsv(0, 0%, 12%)")
        expect(color.toHex()).toEqual("#1f1f1f")
    })

    it("Converts from hsv to rgb", () => {
        const color = new coloras.Color("hsv(0, 0%, 12%)")
        expect(color.toRgb()).toEqual("rgb(31, 31, 31)")
    })

    it("Converts from hsv to hsl", () => {
        const color = new coloras.Color("hsv(0, 0%, 12%)")
        expect(color.toHsl()).toEqual("hsl(0, 0%, 12%)")
    })

    it("Converts from hsv to cmyk", () => {
        const color = new coloras.Color("hsv(0, 0%, 12%)")
        expect(color.toCmyk()).toEqual("cmyk(0, 0, 0, 88)")
    })

    it("Converts from cmyk to hex", () => {
        const color = new coloras.Color("cmyk(0, 0, 0, 88)")
        expect(color.toHex()).toEqual("#1f1f1f")
    })

    it("Converts from cmyk to rgb", () => {
        const color = new coloras.Color("cmyk(0, 0, 0, 88)")
        expect(color.toRgb()).toEqual("rgb(31, 31, 31)")
    })

    it("Converts from cmyk to hsl", () => {
        const color = new coloras.Color("cmyk(0, 0, 0, 88)")
        expect(color.toHsl()).toEqual("hsl(0, 0%, 12%)")
    })

    it("Converts from cmyk to hsv", () => {
        const color = new coloras.Color("cmyk(0, 0, 0, 88)")
        expect(color.toHsv()).toEqual("hsv(0, 0%, 12%)")
    })
})

// isColor
describe("Detects if a string is a color", () => {
    it("isColor ~ hex", () => {
        expect(coloras.isColor("#1f1f1f")).toEqual({ color: true, colorSystem: "hex" })
    })

    it("isColor ~ rgb", () => {
        expect(coloras.isColor("rgb(31, 31, 31)")).toEqual({ color: true, colorSystem: "rgb" })
    })

    it("isColor ~ hsl", () => {
        expect(coloras.isColor("hsl(0, 0%, 12%)")).toEqual({ color: true, colorSystem: "hsl" })
    })

    it("isColor ~ hsv", () => {
        expect(coloras.isColor("hsv(0, 0%, 12%)")).toEqual({ color: true, colorSystem: "hsv" })
    })

    it("isColor ~ cmyk", () => {
        expect(coloras.isColor("cmyk(0, 0, 0, 88)")).toEqual({ color: true, colorSystem: "cmyk" })
    })

    it("isColor ~ false", () => {
        expect(coloras.isColor("coloras")).toEqual({ color: false, colorSystem: null })
    })
})

