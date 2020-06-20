import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default ({ items, onDelete }) => {
	return (
		<TransitionGroup component={"ul"}>
			{items.map(({ id, title }) => (
				<CSSTransition key={id} classNames="os" timeout={1000}>
					<li onClick={() => onDelete(id)}>
						{title}
					</li>
				</CSSTransition>
			))}
		</TransitionGroup>
	);
};
