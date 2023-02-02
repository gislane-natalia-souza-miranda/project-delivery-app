import React from 'react';
import propTypes from 'prop-types';

export default function AdminUsersTable({ users, deleteUser }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>E-mail</th>
          <th>Role</th>
          <th>Remove</th>
        </tr>
      </thead>
      { users && users.map((item, index) => (
        <tbody key={ index }>
          <tr>
            <td data-testid={ `admin_manage__element-user-table-item-number-${index}` }>
              { item.id }
            </td>
            <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
              { item.name }
            </td>
            <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
              { item.email }
            </td>
            <td data-testid={ `admin_manage__element-user-table-role-${index}` }>
              { item.role }
            </td>
            <td>
              <button
                type="button"
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
                onClick={ () => deleteUser(item.id) }
                className="btn btn-outline-danger"
              >
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      ))}
    </table>
  );
}

AdminUsersTable.propTypes = {
  users: propTypes.object,
  deleteUser: propTypes.func,
}.isRequired;
