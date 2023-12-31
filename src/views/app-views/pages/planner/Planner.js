import React, {useState} from "react";
import Board from './Board';
import { Table } from './Table';
import { plannerColumns, tables } from "configs/PlannerConfig";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Planner = () => {
    const tableStyles = {
        width: '20vw',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }

    const boardStyles = {
        backgroundColor: 'gray',
        padding: '2% 2% 2% 2%',
        width: '50%',
        height: '100vh',
        borderRadius: 10
    }

    const [items, setItems] = useState(tables);

    const moveCardHandler = (dragIndex, hoverIndex) => {
        const dragItem = items[dragIndex];


        if (dragItem) {
            setItems((prevState) => {
                const coppiedStateArray = [...prevState];

        // remove item by "hoverIndex" and put "dragItem" instead
                const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

        // remove item by "dragIndex" and put "prevItem" instead
                coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

                return coppiedStateArray;
            });
        }
    };

    const returnItemsForColumn = (columnName) => {
        return items
            .filter((item) => item.column === columnName)
            .map((item, index) => (
                <Table
                    key={item.id}
                    image={item.image}
                    currentColumnName={item.column}
                    setItems={setItems}
                    index={index}
                    moveCardHandler={moveCardHandler}
                    />
            ));
        };

        const handleSave = () => {
            const input = document.getElementById('divToPrint');
            html2canvas(input)
                .then((canvas) => {
                    const imgData = canvas.toDataURL('image/png');
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, 'JPEG', 0, 0);
            // pdf.output('dataurlnewwindow');
                    pdf.save("download.pdf");
                });
        }

    const { OPTIONS, SEATING_CHARTS } = plannerColumns;
    return (
        <>
            <Board image={OPTIONS} boardStyles={tableStyles}>
                {returnItemsForColumn(OPTIONS)}
            </Board>
            <Board image={SEATING_CHARTS} boardStyles={boardStyles} idDiv={true}>
                {returnItemsForColumn(SEATING_CHARTS)}
                <div style={{display:'flex', justifyContent: 'flex-end', alignContent: 'center'}}>
                    <button onClick={handleSave}>Save</button>
                </div>
            </Board>
        </>
    );
}

export default Planner;