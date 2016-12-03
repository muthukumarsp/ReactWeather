var React = require('react');

//statless components
var About = (props) => {
    return (
        <div>
            <h1 className="text-center"> About Compoenent</h1>
            <p> This is a weather application built on React. I have built async
                this for the Complete React Web Developer Course.</p>

            <p> Here are some of the tools I used:</p>

            <ul>
                <li><a href="https://facebook.github.io/react"> ReactJS - Java script framework used. </a></li>
                <li><a href="http://openweathermap.org"> Open Weather Map to search for weather data by citi name </a></li>
                <li><a href="http://foundation.zurb.com"> Foundation - CSS framework </a>
                </li>
            </ul>
        </div>
    );
};


module.exports = About;