import { useEffect, useState } from "react";
import { Message } from "./Message";
import "./Form.css"

export const Form = () => {
	const [formState, setFormState] = useState({
		Matricula: "",
		Nombre: "",
		Apellidos: "",
		Edad: "",
		Universidad: "",
		Carrera: "",
	});

	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		console.log("useEffect called!");
	}, []);
	useEffect(() => {
		console.log("formState changed!");
	}, [formState]);
	useEffect(() => {
		console.log("Nombre changed!");
	}, [formState.Nombre]);

	const { Matricula, Nombre, Apellidos, Edad, Universidad, Carrera } = formState;

	const onSubmit = (e) => {
		e.preventDefault(); 
		console.log("Submitting form", formState);
		setFormState({
			Matricula: "",
			Nombre: "",
			Apellidos: "",
			Edad: "",
			Universidad: "",
			Carrera: "",
		});
	};

	return (
		<>
		<div className="background">
			<div className="shape"></div>
			<div className="shape"></div>
		</div>
		<form>
			<h3>Login Here</h3>

			<label htmlFor="Nombre">Nombre</label>
			<input type="text"
				className="form-control"
				placeholder="Nombre"
				name="Nombre"
				value={Nombre}
				onChange={onInputChange}/>


			<label htmlFor="Apellidos">Apellidos</label>
			<input type="text"
				className="form-control"
				placeholder="Apellidos"
				name="Apellidos"
				value={Apellidos}
				onChange={onInputChange}/>


			<label htmlFor="Matricula">Matricula</label>
			<input type="text"
				className="form-control"
				placeholder="Matricula"
				name="Matricula"
				value={Matricula}
				onChange={onInputChange}/>

			<label htmlFor="Edad">Edad</label>
			<input type="number"
				className="form-control"
				placeholder="Edad"
				name="Edad"
				value={Edad}
				onChange={onInputChange}/>
			
			<label htmlFor="Universidad">Universidad</label>
			<input type="text"
				className="form-control"
				placeholder="Universidad"
				name="Universidad"
				value={Universidad}
				onChange={onInputChange}/>

			<label htmlFor="Carrera">Carrera</label>
			<input type="text"
				className="form-control"
				placeholder="Carrera"
				name="Carrera"
				value={Carrera}
				onChange={onInputChange}/>
			

			<button  onClick= {onSubmit}>Log In</button>
		</form>
		</>
	);
};
