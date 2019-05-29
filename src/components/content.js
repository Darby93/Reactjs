import React, { Component } from 'react';


class Content extends Component {
    render() {
      return (
        <article className="Content">
          <h2>{this.props.title}</h2>
          {this.props.desc}
        </article>
      );
    }
}

export default Content;