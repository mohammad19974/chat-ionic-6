/**@param  StoriesGridProps this is interface for props stories  **/
export interface IValuesStoies {
    name: string
    imageStore: string
    profileImage: string
}
export interface StoriesGridProps {
    values?: IValuesStoies[] | []
}
