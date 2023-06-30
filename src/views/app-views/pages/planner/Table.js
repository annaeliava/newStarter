import React, { useRef } from "react";
import {plannerColumns, tables} from "configs/PlannerConfig";
import { useDrag, useDrop } from 'react-dnd';


export const Table = ({
	image,
	title,
	id,
	currentColumnName,
	moveCardHandler,
	setItems
}) => {
	const styles = {
		display: 'flex', 
		flexDirection: 'column', 
		justifyContent: 'space-between',
		paddingTop: 10,
		paddingRight: 10,
		paddingLeft: 10,
		padddingBottom: 10, 
		width: 150, 
		height: 150,
	}

	const changeItemColumn = (currentItem, columnName) => {
		setItems((prevState) => {
			return prevState.map((e) => {
				return {
					...e,
					column: e.image === currentItem.image ? columnName : e.column
				};
			});
		});
	};
	
	const ref = useRef(null);
	
	const [, drop] = useDrop({
		accept: "Our first type",
		hover(item, monitor) {
			if (!ref.current) {
				return;
			}
			const dragIndex = item.id;
			const hoverIndex = id;
		  // Don't replace items with themselves
			if (dragIndex === hoverIndex) {
				return;
			}
		  // Determine rectangle on screen
			const hoverBoundingRect = ref.current?.getBoundingClientRect();
		  // Get vertical middle
			const hoverMiddleY =
			(hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
		  // Determine mouse position
			const clientOffset = monitor.getClientOffset();
		  // Get pixels to the top
			const hoverClientY = clientOffset.y - hoverBoundingRect.top;
		  // Only perform the move when the mouse has crossed half of the items height
		  // When dragging downwards, only move when the cursor is below 50%
		  // When dragging upwards, only move when the cursor is above 50%
		  // Dragging downwards
			if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
				return;
			}
		  // Dragging upwards
			if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
				return;
			}
		  // Time to actually perform the action
			moveCardHandler(dragIndex, hoverIndex);
			
			item.index = hoverIndex;
		}
	});
	
	const [{ isDragging }, drag] = useDrag({
		item: { id, image, currentColumnName, type: "Our first type" },
		end: (item, monitor) => {
		const dropResult = monitor.getDropResult();
	
		if (dropResult) {
			const { image } = dropResult;
			const {OPTIONS, SEATING_CHARTS} = plannerColumns;
			switch (image) {
				case SEATING_CHARTS:
					changeItemColumn(item, SEATING_CHARTS);
				break;
				case OPTIONS:
					changeItemColumn(item, OPTIONS);
				break;
				default:
				break;
			}
			}
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging()
		})
	});
	
	drag(drop(ref));
	

	return (
		<>
			<div style={styles} ref={ref}>
				<img src={image} style={{ width: 100, cursor: 'pointer'}}/>
				<div>{title}</div>
			</div>
		</>
	)
}