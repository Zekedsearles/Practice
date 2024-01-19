const element = React.createElement(
    'h1',
    {
      className: 'title',
      onClick: () => {console.log('clicked');}
    },
    'Hello World!'
);

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(element)
