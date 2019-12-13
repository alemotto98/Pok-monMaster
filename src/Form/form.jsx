import React, { Component } from 'react'
import './form.scss'

export default class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                surname: '',
                gender: 'M',
                email: ''
            }
        }

        this.onChangeValue = this.onChangeValue.bind(this);
        this.toggleGender = this.toggleGender.bind(this);
    }

    onChangeValue(event) {
        const control = event.target.name;
        const value = event.target.value;
        console.log(control, value);
    }

    toggleGender(event) {
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        });
    }

    render() {
        return (
            <section className="signup">
                <header>
                    <h1>Become a Pokémon master!</h1>
                </header>
                <form className="form signup-form">
                    <div className="form-group">
                        <label>Name*</label>
                        <input
                            id="name-control"
                            className="form-control"
                            type="text"
                            value={this.state.form.name}
                            onChange={this.onChangeValue}
                            placeholder="Start typing here..."
                        />
                        <small className="form-error-message"></small>
                    </div>
                    <div className="form-group">
                        <label>Surname*</label>
                        <input
                            id="surname-control"
                            className="form-control"
                            type="text"
                            value={this.state.form.surname}
                            onChange={this.onChangeValue}
                            placeholder="Start typing here..."
                        />
                        <small className="form-error-message"></small>
                    </div>
                    <div className="form-group">
                        <label>Gender*</label>
                        <div className="form-control">
                            <button
                                type="button"
                                className={this.state.form.gender === 'M' ? 'active' : ''}
                                name="gender"
                                value="M"
                                onClick={this.toggleGender}
                            >
                                Male
                            </button>
                            <button
                                type="button"
                                className={this.state.form.gender === 'F' ? 'active' : ''}
                                name="gender"
                                value="F"
                                onClick={this.toggleGender}
                            >
                                Female
                            </button>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Email*</label>
                        <input
                            id="email-control"
                            className="form-control"
                            type="text"
                            value={this.state.form.email}
                            onChange={this.onChangeValue}
                            placeholder="mario@rossi.it"
                        />
                        <small className="form-error-message"></small>
                    </div>
                </form>
            </section>
        );
    }
}