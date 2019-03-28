import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { connect } from 'react-redux';
import ListView from '../ListView/ListView';

class Bosses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                name: '',
                description: '',
                url: ''
            },
            errors: {
                nameError: '',
                descriptionError: '',
                urlError: ''
            }
        };
    };
    onInput(e) {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.name]: e.target.value
            }
        });
    };
    validateForm() {
        const { name, description, url } = this.state.fields;
        const errors = {};
        if (name === '') { errors.name = 'NAME IS REQUIRED!'; }
        if (description === '') { errors.name = 'DESCRIPTION IS REQUIRED!'; }
        if (url === '') { errors.name = 'URL IS REQUIRED!'; }

        if (Object.keys(errors).length > 0) {
            this.setState({ ...this.state.errors, errors });
            return false;
        }

        return true;
    };
    onFormSubmit(e) {
        e.preventDefault();

        // Dispatch action
        const { name, description, url } = this.state;
    };
    render() {
        const { name, description, url } = this.state;
        return (
            <div className="bosses-container">
                <div className="bosses-list">
                    <p>List of Bosses..</p>
                    <ListView />
                </div>
                <div className="bosses-input">
                    <h4>CREATE NEW BOSS</h4>
                    <Form onSubmit={ e => this.onFormSubmit(e) }>
                        {/* Name */}
                        <Input
                            type="text"
                            onInput={ e => this.onInput(e) }
                            name="name"
                            value= { name }
                            htmlId="name"
                            label="NAME:"
                            /*errorMessage={ nameError }*/ />
                        {/* Description */}
                        <Input
                            type="text"
                            onInput={ e => this.onInput(e) }
                            name="description"
                            value= { description }
                            htmlId="description"
                            label="DESCRIPTION:" 
                            /*errorMessage={ descriptionError }*/ />
                        {/* URL */}
                        <Input
                            type="file"
                            onInput={ e => this.onInput(e) }
                            name="url"
                            value= { url }
                            htmlId="url"
                            label="IMAGE URL:" 
                            /*errorMessage={ urlError }*/ />
                        <input type="submit" value="CREATE" className="btn btn-success btn-block" />
                    </Form>
                </div>
            </div>
        );
    };
};

const mapStateToProps = reduxStoreState => {
    return {

    };
};

export default connect(mapStateToProps)(Bosses);