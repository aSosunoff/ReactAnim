import React, { useState } from "react";
import { Transition, CSSTransition } from "react-transition-group";
import List from "./List";

export default () => {
	const [toggle, setToggle] = useState(true);
	const [toggle2, setToggle2] = useState(true);
	const [items, setItems] = useState([
		{ id: 1, title: "1" },
		{ id: 2, title: "2" },
		{ id: 3, title: "3" },
	]);

	const onDelete = (id) => {
		setItems(items.filter((item) => item.id !== id));
	};

	const onAddedItem = () => {
		const title = prompt();
		setItems([
			...items,
			{
				id: Date.now(),
				title,
			},
		]);
	};

	return (
		<div className="container">
			<button
				onClick={() => {
					setToggle(!toggle);
				}}
			>
				Toggle
			</button>
			<button
				onClick={() => {
					setToggle2(!toggle2);
				}}
			>
				Toggle 2
			</button>
			<button
				onClick={() => {
					onAddedItem();
				}}
			>
				Added item
			</button>
			<hr />
			<div className="blocks">
				<Transition
					in={toggle}
					timeout={{
						enter: 1000,
						exit: 500,
					}}
					mountOnEnter
					unmountOnExit
					onEnter={() => console.log("onEnter")}
					onEntering={() => console.log("onEntering")}
					onEntered={() => console.log("onEntered")}
					onExit={() => console.log("onExit")}
					onExiting={() => console.log("onExiting")}
					onExited={() => console.log("onExited")}
				>
					{(state) => <div className={`square blue ${state}`}>{state}</div>}
				</Transition>

				<CSSTransition
					in={toggle2}
					timeout={1000}
					mountOnEnter
					unmountOnExit
					classNames="os"
					onEnter={() => console.log("onEnter")}
					onEntering={() => console.log("onEntering")}
					onEntered={() => console.log("onEntered")}
					onExit={() => console.log("onExit")}
					onExiting={() => console.log("onExiting")}
					onExited={() => console.log("onExited")}
				>
					<div className="square orange">{toggle2}</div>
				</CSSTransition>
			</div>

			<div className="blocks">
				<List items={items} onDelete={onDelete} />
			</div>
		</div>
	);
};
