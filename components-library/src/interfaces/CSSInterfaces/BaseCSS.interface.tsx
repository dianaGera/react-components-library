import ThemesCSSInterface from "./ThemesCSS.interface"
import PseudoClassesCSSInterface from "./PseudoClassesCSS.interface"
import OnSizeCSSInterface from "./SizeCSS.interface"


export default interface BaseCSSInterface {
    
    /**
     * display
     */
    display?: string,

    /**
     * alignItems
     */
    alignItems?: string

    /**
     * margin
     */
    margin?: string,

    /**
     * padding
     */
    padding?: string,

    /**
     * color
     */
    color?: string,

    /**
     * fontSize
     */
    fontSize?: string,

    /**
     * fontWeight
     */
    fontWeight?: string,

    /**
     * background color
     */
    bgColor?: string,

    /**
     * border
     */
    border?: string,

    /**
     * round
     */
    round?: string,

    /**
     * columnGap
     */
    columnGap?: string

    /**
     * pseudoClasses
     */
    pseudoClasses?: PseudoClassesCSSInterface[],

    /**
     * onSize
     */
    onSize?: OnSizeCSSInterface[],

    /**
     * themes
     */
    themes?: ThemesCSSInterface[],
}