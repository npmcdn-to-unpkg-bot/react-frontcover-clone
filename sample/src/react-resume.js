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
  background="http://cdn.wonderfulengineering.com/wp-content/uploads/2014/04/code-wallpaper-2.jpg"
  avatar="https://d13yacurqjgara.cloudfront.net/users/74133/screenshots/1888531/avatar-cool.jpg"
  name="Ricky Yu"
  id="zakufish"
  job="Bachelor of Science/Computer Science"
  company="University of New South Wales"
  github="https://github.com/zakufish"
  linkedin="https://linkedin.com/in/lijierickyyu"
  email="mailto:lijierickyyu@gmail.com"
  resume="http://rickyyu.me/CV.pdf"
  />,
  document.getElementById('content')
);
