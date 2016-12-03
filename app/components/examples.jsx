var React = require('react');
var {Link} = require('react-router');


var Examples = (props) => {
    return (
        <div>
            <h1 classname="text-center"> Examples </h1>
            <p> Here are few example locations to try out:</p>
            <ol>
                <li><Link to='/?location=Sydney'> Sydney,AU</Link></li>
                <li> <Link to='/?location=Melbourne'> Melbourne,AU</Link></li>
                <li> <Link to='/?location=Brisbane'> Brisbane,AU</Link></li>
            </ol>
        </div>
    );
};
module.exports = Examples;