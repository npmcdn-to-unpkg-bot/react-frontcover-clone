var FrontCover = React.createClass({
  render: function(){
    return (
      <div>
        <img src={this.props.background} id="fullscreen" />
        <div id="main-body">
          <img src={this.props.avatar} id="avatar" />
          <h1>{this.props.name} ({this.props.id})</h1>
          <h3>{this.props.job} @ {this.props.company}</h3>
          <ul class-name="icon-list">
            <li><a class="fa fa-2x fa-github" href={this.props.github}><span class="description">GitHub</span></a></li>
            <li><a class="fa fa-2x fa-linkedin" href={this.props.linkedin}><span class="description">LinkedIn</span></a></li>
            <li><a class="fa fa-2x fa-email" href={this.props.email}><span class="description">Email</span></a></li>
            <li><a class="fa fa-2x fa-file-text-o" href={this.props.resume}><span class="description">CV</span></a></li>
          </ul>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <FrontCover
  background="http://yourbackground.jpg"
  avatar="https://youravatar.jpg"
  name="Your name"
  id="Your ID"
  job="Your job title"
  company="Your working place"
  github="https://github.com/yourgithub"
  linkedin="https://linkedin.com/in/yourlinkedin"
  email="mailto:yourmailbox@someemail.com"
  resume="http://yourresume.pdf"
  />,
  document.getElementById('content')
);
