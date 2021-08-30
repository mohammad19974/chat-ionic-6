import { IonChip, IonSegment, IonSegmentButton } from '@ionic/react'
import { SegmentMenuProps } from './props'
import './style.scss'
export const SegmentMenu: React.FC<SegmentMenuProps> = ({
    onSelect,
    value,
}) => {
    const segment = [
        {
            name: 'Story',
            key: 'STORY',
        },
        {
            name: 'Friends',
            key: 'FRIENDS',
        },
    ]
    return (
        <div className="segment-menu">
            {segment.map((data, index) => {
                return (
                    <IonChip
                        key={index}
                        onClick={() => onSelect(data.key)}
                        className={`segment ${
                            value == data.key ? 'active' : ''
                        }`}
                    >
                        {data.name}
                    </IonChip>
                )
            })}
        </div>
    )
}
