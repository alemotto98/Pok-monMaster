class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                name: '',
                surname: '',
                gender: '',
                email: ''
            }
        }
    }

    render() {
        return (
            <section className="signup">
                <header>
                    <h1>Become a Pokémon master!</h1>
                </header>
                <form>
                    <div className="signup-field">
                        <label for="name">Name*</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={this.state.form.name}
                            placeholder="Start typing here..."
                        />
                    </div>
                    <div className="signup-field">
                        <label for="name">Surname*</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={this.state.form.name}
                            placeholder="Start typing here..."
                        />
                    </div>
                </form>
            </section>
        );
    }
}