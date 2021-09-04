/**@param  StoriesGridProps this is interface for props stories  **/
export interface IValuesStoies {
    name: string
    imageStore: string
    profileImage: string
    onClickStories?: () => void
}
export interface StoriesGridProps {
    onClickStories?: () => void
    values?: IValuesStoies[] | []
}
