import React from 'react';

class ClickyGame extends React.Component {

    state = {
        data: [],
        topScore: 0,
        score: 10
    };

    componentDidMount = () => {
        console.log('mounted!')
    };

    render() {
        return (
            <div>
                
            </div>
        )
    }
};

export default ClickyGame;