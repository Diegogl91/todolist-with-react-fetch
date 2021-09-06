import React, { useState } from "react";

//create your first component
const Home = props => {
	const [tasks, setTasks] = useState([]);

	const Enter = e => {
		if (e.key === "Enter" && e.target.value !== "") {
			tasks.push(e.target.value);
			setTasks([...tasks]);
			e.target.value = "";
		}
	};

	return (
		<div>
			<div>
				<input onKeyUp={e => Enter(e)} />
			</div>
			<div>
				<ul>
					{tasks.length === 0 ? (
						<li>No task, add a task</li>
					) : (
						tasks.map((t, index) => {
							return (
								<div key={index}>
									<li>
										<div>
											{t}
											<button
												onClick={() => {
													tasks.splice(index, 1);
													setTasks([...tasks]);
												}}>
												x
											</button>
										</div>
									</li>
								</div>
							);
						})
					)}
					{tasks.length > 0 ? (
						<li>
							{tasks.length > 1
								? `${tasks.length} items left`
								: `${tasks.length} item left`}
						</li>
					) : (
						""
					)}
				</ul>
			</div>
		</div>
	);
};

export default Home;
