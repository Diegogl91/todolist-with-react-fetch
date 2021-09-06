import React, { useState } from "react";
import "/workspace/react-hello/src/styles/index.scss";

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
		<div className="titulo">
			<h1>todos</h1>
			<div className="container d-flex justify-content-center text-align-center">
				<div>
					<input
						className="input1"
						placeholder=" ¿What needs to be done?"
						onKeyUp={e => Enter(e)}
					/>
					<ul>
						{tasks.length === 0 ? (
							<li className="tareas notask">
								No task, add a task
							</li>
						) : (
							tasks.map((t, index) => {
								return (
									<div key={index}>
										<li className="tareas">
											<p>{t}</p>
											<button
												className="boton"
												onClick={() => {
													tasks.splice(index, 1);
													setTasks([...tasks]);
												}}>
												<i className="fas fa-times"></i>
											</button>
										</li>
									</div>
								);
							})
						)}
						{tasks.length > 0 ? (
							<li className="contadordetareas">
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
		</div>
	);
};

export default Home;
