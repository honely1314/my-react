import React, {Component} from 'react';



class ContentLayout extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
        <div>
           {this.props.children}
        </div>
    );
  }
}
export default ContentLayout;