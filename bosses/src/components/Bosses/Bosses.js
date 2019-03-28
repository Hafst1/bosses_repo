import React from 'react';
import Form from '../Form/Form';
import Input from '../Input/Input';
import { connect } from 'react-redux';

class Bosses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            url: ''
        };
    };
    onFormSubmit(e) {
        e.preventDefault();

        // Dispatch action
        const { name, description, url } = this.state;
    };
    onInput(e) {
        this.setState({ [e.target.name]: e.target.value });
    };
    render() {
        const { name, description, url } = this.state;
        return (
            <div className="bosses-container">
                <div className="bosses-list">
                    <p>List of Bosses..</p>
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
                            label="NAME:" />
                        {/* Description */}
                        <Input
                            type="text"
                            onInput={ e => this.onInput(e) }
                            name="description"
                            value= { description }
                            htmlId="description"
                            label="DESCRIPTION:" />
                        {/* URL */}
                        <Input
                            type="file"
                            onInput={ e => this.onInput(e) }
                            name="url"
                            value= { url }
                            htmlId="url"
                            label="IMAGE URL:" />
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