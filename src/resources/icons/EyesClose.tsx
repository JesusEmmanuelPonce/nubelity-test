const EyeClose = ({ className = "", style = {}, ...rest }) => (
	<svg
		style={{
			height : "1em",
			width  : "1em",
			...style,
		}}
		className={className}
		viewBox="0 0 640 512"
		xmlns="http://www.w3.org/2000/svg"
		{...rest}
	>
		<path fill="currentColor" d="M172.12 101.27A311.47 311.47 0 0 1 320 64c122.93 0 230.29 71.59 284.52 177.4a32.35 32.35 0 0 1 0 29.19 332.58 332.58 0 0 1-81 102.25l-72.81-56.27a144 144 0 0 0-222.2-171.73zm239 184.73c.55-1.68 1.07-3.38 1.54-5.11a95 95 0 0 0-118-117.08 47.73 47.73 0 0 1 8.21 38.55zM320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a143.62 143.62 0 0 1-26 2.61z" />
		<path fill="currentColor" d="M636.64 480.55L617 505.82a16 16 0 0 1-22.45 2.8L6.18 53.9a16 16 0 0 1-2.81-22.45L23 6.18a16 16 0 0 1 22.45-2.8L633.82 458.1a16 16 0 0 1 2.82 22.45z" />
	</svg>
);

export default EyeClose;