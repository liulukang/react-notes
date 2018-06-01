import React from 'react';
import { Link ,withRouter} from 'react-router-dom';

class Layout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return <div>
      <div className="links">
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      <br />
      <div>
        {this.props.children}
      </div>
    </div>
  }
}

export default withRouter(Layout);