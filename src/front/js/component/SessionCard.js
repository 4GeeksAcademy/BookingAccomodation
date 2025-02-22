import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";
import "../../styles/classes.css";



export const SessionCard = (props) => {
	const [state, setState] = useState({
		//initialize state here
	});

	const { store, actions } = useContext(Context);


	return (
		<div className="card mx-0 pl-0" style={{ width: "18rem", height: "25rem" }}>

			<img src={props.url_imagen} id="styleImageCard" className="card-img-top" alt="..." />

			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<span className="card-title"><strong>Asana Focus:</strong>  {props.asana_focus}</span><br></br>
				{/* Verifica si "props.instructor" es un objeto */}
				{typeof props.instructor === 'object' ? (
					<div>
						<span className="card-title"><strong>Teacher:</strong> {props.instructor.name}</span><br></br>
						{/* Puedes agregar más detalles del instructor si es necesario */}
					</div>
				) : (
					// Si no es un objeto, simplemente muestra el valor
					<>
						{/* // Si no es un objeto, simplemente muestra el valor */}
						<span className="card-title"><strong>Teacher:</strong> {props.instructor}</span><br></br></>
				)}
				<span className="card-title"><strong>Level:</strong> {props.level}</span>
				<br></br>
				<Link to={`/${props.type}/${props.id}`}>
					<button className="btn btn-outline-primary btn-sm mt-2">See details</button>
				</Link>
			</div>

		</div>
	);
};



/**
 * Define the data-types for
 * your component's properties
 **/

SessionCard.propTypes = {
	history: PropTypes.object,
	id: PropTypes.number,
	name: PropTypes.string,
	instructor: PropTypes.string,
	level: PropTypes.string,
	asana_focus: PropTypes.string,
	url_imagen: PropTypes.string,
	type: PropTypes.string
};

/**
 * Define the default values for
 * your component's properties
 **/

