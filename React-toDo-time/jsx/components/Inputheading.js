//Importing Libraries
import React, {Components, PropTypes} from 'react'

export default class Inputheading extends Components {

  constructor(props) {
    super(props)
  }

  getDefaultProps() {
    return {heading: "What Is On Todays Schedule?"}
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <div className="input-heading">
            {this.props.heading}
          </div>
        </div>
      </div>
    )
  }
}

Inputheading.propTypes = {
  heading: PropTypes.string
};
