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

	const { Matricula, Nombre } = formState;

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
	}, [Nombre]);

	const onSubmit = (e) => {
		e.preventDefault(); // prevent full page reload
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
		<div className="login-body">
			<div className="row">
				<div className="input-cart col s12 m10 push-m1 z-depth-2 grey lighten-5">
					<div className="col s12 m5 login">
						<h4 className="center">Log in</h4>
						<br />
						<form onSubmit={onSubmit} autoComplete="off">
							<div className="row">
								<div className="input-field">
									<input
										type="text"
										className="validate"
										placeholder="Matricula"
										name="Matricula"
										value={Matricula}
										onChange={onInputChange}
									/>
								</div>
							</div>
							<div className="row">
								<div className="input-field">
									<input
										type="text"
										className="validate"
										placeholder="Nombre"
										name="Nombre"
										value={Nombre}
										onChange={onInputChange}
									/>
								</div>
							</div>
							<div className="row">
								<div className="col s6">
									<button type="submit" name="login" className="btn waves-effect waves-light blue right">
										Log in
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
