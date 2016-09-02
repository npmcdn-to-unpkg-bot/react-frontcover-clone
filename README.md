# React-frontcover-clone

React-frontcover-clone is a clone of Jekyll theme (which is apparently the theme my personal blog is using: [Ricky Yu's personal blog](http://rickyyu.me/)) in ReactJS. I built this simple component for study purpose.

## How to Use?
Similar to configure config.yml file in Jekyll, just replace the following attributes with your own information:
```
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
```
Notice: Please leave "mailto" at the very beginning of your email address.

### Known Issue
1. FontAwesome support: Due to JSX's unique syntax, it won't recognize the fa class. This can be fixed via installing [react-fontawesome](https://www.npmjs.com/package/react-fontawesome).

2. Chrome browser support: Cross-file rendering is not supported by Chrome unless served via HTTP. Please view the project in Safari.

3. Another similar issue: local images can't be displayed through JSX unless it's served via HTTP.
