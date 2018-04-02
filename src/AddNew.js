import React, { Component } from "react";

class AddNew extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			author: "",
			tags: ""
		};
	}
	handleClick = event => {
		this.props.onSubmit(this.state);
	};
	handleChange = event => {
		this.setState({
			[event.target.id]: event.target.value
		});
	};
	render() {
		return (
			<div className="AddNew">
				<h2>Dodaj książkę</h2>
				<div className="AddNewInput">
					<div className="AddNewInputTitle">
						<p>Tytuł:</p>
						<input
							id="title"
							type="text"
							placeholder="np. Jądro Ciemności"
							onChange={this.handleChange}
							value={this.state.title}
						/>
					</div>
					<div className="AddNewInputAuthor">
						<p>Author:</p>
						<input
							id="author"
							type="text"
							placeholder="np. J.R.R. Tolkien"
							onChange={this.handleChange}
							value={this.state.author}
						/>
					</div>
					<div className="AddNewInputTags">
						<p>Tagi:</p>
						<input
							id="tags"
							type="text"
							placeholder="np. fantastyka"
							onChange={this.handleChange}
							value={this.state.tags}
						/>
					</div>
				</div>
				<br />
				<button
					className="ButtonAdd"
					type="submit"
					onClick={this.handleClick}
				>
					dodaj
				</button>
			</div>
		);
	}
}
export default AddNew;
