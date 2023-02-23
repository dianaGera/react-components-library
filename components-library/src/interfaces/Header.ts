interface BaseBlock {
    bgColor: string,
    borderColor: string,
    round: string,
    marginX: string,
    marginY: string,
    width: string,
    height: string,
}

interface BaseInLine {
    color: string,
    size: string,
}


interface Item extends BaseBlock, BaseInLine {
    metaName: string | null,
    icon: string | null,
    title: string,
}


interface Header extends BaseBlock {
    items: Item[] | null
}


export default Header