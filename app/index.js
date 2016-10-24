var USER_DATA = {
	name: "Grant",
	username: "ghwilley",
	image: "http://cdn3-www.cattime.com/assets/uploads/2011/08/best-kitten-names-1.jpg"
}

var React = require('react');
var ReactDOM = require('react-dom');

var ProfilePic = React.createClass({
	render: function () {
		return <img src={this.props.imageUrl} style={{height:100, width:100}} />
	}
});

var ProfileLink = React.createClass({
	render: function () {
		return (
			<div> 
				<a href={'http://www.github.com/' + this.props.username}>
					{this.props.username}
				</a>
			</div>
			)
	}
});

var ProfileName = React.createClass({
	render: function () {
		return (
				<div>{this.props.name}</div>
			)
	}
});

var Avatar = React.createClass({
	render: function () {
		return (
				<div> 
					<ProfilePic imageUrl={this.props.user.image} />
					<ProfileName name={this.props.user.name} />
					<ProfileLink username={this.props.user.username} />
				</div>
			)
	}
})

ReactDOM.render(
	<Avatar user={USER_DATA} />,
	document.getElementById('app')
);

