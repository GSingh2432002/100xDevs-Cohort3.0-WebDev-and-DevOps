import React from 'react';

// Card: A functional component to display content in a styled card layout.
// { children }: Props Destructuring: Extracts the children prop passed to the component. children: Refers to the nested content inside the <Card> tags when used in JSX.
const Card = ({ children }) => {
    return (
        <div style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '20px',
            margin: '10px',
            boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.1)',
        }}>
            {/* {children}: Renders whatever content is nested inside the <Card> component when it’s used. */}
            {children}
        </div>
    );
};

const App = () => {
    return (
        <div>
            <Card>
                <h2>Card Title</h2>
                <p>This is some content inside the card.</p>
            </Card>
            <Card>
                <h2>Another Card</h2>
                <p>This card has different content!</p>
            </Card>
        </div>
    );
};

export default App;
