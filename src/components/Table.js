import React, {
  Component
} from 'react';
import Row from './Row'


class Table extends Component {

  constructor () {
    super();
    this.state = {
      rows: [
        {
          firstName: 'Wojciech',
          lastName: 'Trefon',
          'email': 'wojciech.trefon@gmail.com'
        },

        {
          firstName: 'Michal',
          lastName: 'Adamek',
          'email': 'michal.adamek@leszcz.com'
        },
        {
          firstName: 'Muster',
          lastName: 'Mann',
          'email': 'muster.mann@xd.vt'
        }


      ]
    };
  }
renderRows() {
  var keyword = this.props.keyword;
  let rowsRendered = this.state.rows.map((row) => {
    if (!keyword || row.firstName.toLowerCase().indexOf(keyword.toLowerCase()) !== -1 || row.lastName.toLowerCase().indexOf(keyword) !== -1) {
      return (<Row person={row}/>);
    }
  });
  return rowsRendered;
}
  render() {
    return (
      <table className="table table-hover">
  <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
    {this.renderRows()}
    </tbody>
  </table>);
    }
  }

  export default Table;
