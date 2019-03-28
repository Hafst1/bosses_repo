import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="welcome">
                <h1>Welcome</h1>
                <br />
                <p>Here at Bosses.. you can create and edit your own customized boss!</p>
                <p>
                    Whether it's your favourite boss from Megaman or even your own boss at work, you can create 
                    them here at Bosses..! Hit the link "Bosses" in the navigation bar and start creating!
                </p>
            </div>
        );
    };
};

export default Home;