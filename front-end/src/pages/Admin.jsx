import React, { useEffect, useState } from 'react';
import HeaderAdmin from '../components/Header-Admin';
import NewUser from '../components/NewUser';
import api from '../services/axios';

function Admin() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const { token } = JSON.parse(localStorage.getItem('user'));
    if (token) {
      try {
        const { data } = await api.get('/admin/manage');
        setUsers(data);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const deleteUser = async (id) => {
    try {
      await api.delete(`/admin/manage/${id}`);
      getUsers();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <HeaderAdmin />
      <NewUser getUsers={ getUsers } />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>E-mail</th>
            <th>Role</th>
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
                >
                  Remover
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </>
  );
}

export default Admin;
