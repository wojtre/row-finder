import React, {
  Component
} from 'react';


class Row extends Component {

  render() {
    return (<tr>
        <td>{this.props.person.firstName}</td>
        <td>{this.props.person.lastName}</td>
        <td>{this.props.person.email}</td>
      </tr>);
    }
  }

  export default Row
