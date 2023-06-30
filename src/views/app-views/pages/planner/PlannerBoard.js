import React  from "react";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import Planner from "./Planner";

const PlannerBoard = () => {
    const styles = {
        display: 'flex',
        flexDirection: 'row',
    }

    return (
        <>
        <div style={styles}>
            <DndProvider backend={HTML5Backend}>
                <Planner />
            </DndProvider>
        </div>
        </>
    );
}

export default PlannerBoard;