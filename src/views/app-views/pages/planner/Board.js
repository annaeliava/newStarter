import { plannerColumns } from "configs/PlannerConfig";
import React, {useRef} from "react";
import { useDrop } from 'react-dnd';

const Board = ({ children, image, boardStyles, importBtn, idDiv }) => {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: "Our first type",
        drop: () => ({ image: image }),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
        }),

        canDrop: (item) => {
            const { OPTIONS, SEATING_CHARTS } = plannerColumns;
            const { currentColumnName } = item;
            return (
                currentColumnName === image ||
                (currentColumnName === OPTIONS && image === SEATING_CHARTS) ||
                (currentColumnName === SEATING_CHARTS && image === OPTIONS)
            );
        }
    });


    return (
        <>
            <div 
                ref={drop}
                style={boardStyles}
                id={idDiv?'divToPrint':''}>
                    {children}
            </div>
        </>
    );
}

export default Board;