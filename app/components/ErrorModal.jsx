let React = require('react');
let ReactDOM = require('react-dom');
let ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
    getDefaultProps: function () {
        return {
            title: 'Error'
        };
    },
    propTypes: {
        title: React.PropTypes.string,
        message: React.PropTypes.string.isRequired
    },
    componentDidMount: function () {
        var {title, message} = this.props;

        var modalMarkup = (<div id="error-modal" className="tiny reveal text-center" data-reveal="">
                <h4> {title}</h4>
                <p> {message}</p>
                <button className=" button hollow" data-close="">
                    Okay
                </button>

            </div>

        );

        var $modal = $(ReactDOMServer.renderToString(modalMarkup));
        $(ReactDOM.findDOMNode(this)).html($modal);

        var modal = new Foundation.Reveal($("#error-modal"));
        this.setState({
            modal: modal
        });
        modal.open();
    },

    render: function () {

        return (
            <div></div>
        );
    }
});

module.exports = ErrorModal;