export interface ItemMenuProps {
    srcImage: string
    title: string
    endText?: string
    isEvent?: boolean | false
    button: boolean | false
    isIcon?: boolean | false
    detail?: boolean | false
    className?: string | undefined
    lines?: 'full' | 'inset' | 'none' | undefined
}
