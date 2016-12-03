var React = require('react');
var {IndexLink} = require('react-router');


var Nav = React.createClass({
    onSearch: function (e) {
        e.preventDefault();
        // alert( this.refs.location.value);
        let location = this.refs.location.value;
        var encodedLocation = encodeURIComponent(location);
        if (location.length > 0) {
            this.refs.location.value = '';
            window.location.hash = '#/?location=' + encodedLocation;
        }
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"> React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold', color: 'red'}}>
                                Get
                                Weather</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                About</IndexLink>
                        </li>
                        <li>
                            <IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>
                                Examples</IndexLink>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li>
                                <input type="search" ref="location" placeholder="Search Weather by City"/>
                            </li>
                            <li>
                                <input type="submit" className="button"/>
                            </li>
                        </ul>

                    </form>
                </div>

            </div>);
    }
});

module.exports = Nav;

