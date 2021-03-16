import React, { Component, PropTypes } from 'react'
import Mozaik                          from 'mozaik/browser';
import { ListenerMixin }               from 'reflux';
import reactMixin                      from 'react-mixin';


class Build extends Component {

    constructor(props) {
        super(props);
        this.state = {
          build : null
        }  
    }

    getApiRequest() {
      let { name } = this.props;

      return {
          id:     `jenkins.build.${ name }`,
          params: {
              name : name
          }
      };
  }

  onApiData(build) {
    console.log(JSON.stringify(build));
    this.setState({
        build : build
    });
  }


  render() {

    const { build } = this.state;

    let style = {
      padding : '1em',
      backgroundColor : '#7f8fa6',
      borderRadius : '2px'
    }

    let node = (
      <div style={style}>
        Hello from builds component children {build != null && build.actions[2].buildableTimeMillis}
      </div>
    );
      return (
        {node}
      );
  }
}

Build.displayName = 'Build';

reactMixin(Build.prototype, ListenerMixin);
reactMixin(Build.prototype, Mozaik.Mixin.ApiConsumer);

export default Build;
