import { useCallback, useState } from "react";
import Tooltip from "./Tooltip";
import TooltipContent from "./TooltipContent";
import styles from "./MyHoverableComponent.module.css";

export default function HelloBox() {
	const [isHovering, setIsHovering] = useState(false);
	const [count, setCount] = useState(0);

	const onClick = useCallback(() => {
		console.log("Clicked!");
		setCount((c) => c + 1);
	}, []);

	return (
		<div
			className={`${styles.root} ${isHovering ? styles.hovering : ""}`}
			onMouseEnter={() => setIsHovering(true)}
			onMouseLeave={() => setIsHovering(false)}
			onClick={onClick}
		>
			<div>HELLO WORLD!</div>
			<div>Count: {count}</div>

			{isHovering && (
				<Tooltip>
					<TooltipContent />
				</Tooltip>
			)}
		</div>
	);
}
