import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
	const [formState, setFormState] = useState({
		username: " ",
		email: " ",
	});
	const { username, email } = formState;
	const onInputChange = ({ target }) => {
		const { name, value } = target;
		setFormState({ ...formState, [name]: value });
	}; // * va cambiando los nombres con forme los vamos cambiando

	useEffect(() => {
		console.log('useEffect called!');
	}, []);
	useEffect(() => {
		console.log('formState changed!');
	}, [formState]);
	useEffect(() => {
		console.log('email changed!');
	}, [email]);

    const clear = (e) => {
        setFormState({ ...formState,
            username: '',  
            email: ''
        }); 
    };
        

	return (
		<>
			<h1>Formulario Simple</h1>
			<hr />

            <input type='hidden' placeholder="1234"></input> 
			<input
				type="username"
				className="form-control"
				placeholder="Username"
				name="username"
				value={username}
				onChange={onInputChange} //* prop que llama funcion
			/>
			<input
				type="email"
				className="form-control mt-2"
				placeholder="a@gmail.com"
				name="email"
				value={email}
				onChange={onInputChange}
			/>
			{username === "sus" && <Message />}


            <button onClick= {clear}>
                enviar
            </button>
		</>
	);
};
