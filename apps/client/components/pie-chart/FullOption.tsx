import React, { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { useDispatch, useSelector } from "react-redux";
import { changeSkillPieId } from "../../store/actions/skillAction";

type IProps = {
	color?: string;
	value?: number;
	key?: string | number;
	title?: string | number;
	[key: string]: any;
};

export default function FullOption(props: IProps) {
	const [selected, setSelected] = useState<number | undefined>(0);
	const [hovered, setHovered] = useState<number | undefined>(undefined);

	const count = useSelector((state: any) => state.skillReducer.skillPicked);
	const dispatch = useDispatch();
	// console.log(props)
	const data = props.data.map((entry, i) => {
		if (hovered === i) {
			return {
				...entry,
				color: "grey",
			};
		}
		return entry;
	});

	const lineWidth = 30;

	return (
		<PieChart
			style={{
				height: "100%",
				fontFamily:
					'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
				fontSize: "8px",
			}}
			data={data}
			// radius={PieChart.defaultProps.radius - 6}
			lineWidth={lineWidth}
			segmentsStyle={{ transition: "stroke .3s", cursor: "pointer" }}
			segmentsShift={(index) => (index === selected ? 6 : 1)}
			// labelPosition={100 - lineWidth / 2}
			label={({ dataEntry }) => dataEntry.title}
			labelStyle={(index) => ({
				fill: data[index].color,
				fontSize: "3px",
				fontFamily: "sans-serif",
			})}
			radius={25}
			labelPosition={112}
			animate
			onClick={(_, index) => {
				setSelected(index === selected ? undefined : index);
				dispatch(changeSkillPieId(index));
				//REDUX STUFF
			}}
			onMouseOver={(_, index) => {
				setHovered(index);
			}}
			onMouseOut={() => {
				setHovered(undefined);
			}}
		/>
	);
}
