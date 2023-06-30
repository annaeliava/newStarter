import { plannerColumns } from "configs/PlannerConfig";
import React, {useRef} from "react";
import { useDrop } from 'react-dnd';

const Board = ({ children, image, boardStyles, importBtn }) => {
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
                style={boardStyles}>
                    {children}
                    {
                        importBtn   
                        ?
                        <div style={{display:'flex', justifyContent: 'flex-end', alignContent: 'center'}}>
                            <button>Import</button>
                        </div>
                        :
                            <></>
                    }
            </div>
        </>
    );
}

export default Board;