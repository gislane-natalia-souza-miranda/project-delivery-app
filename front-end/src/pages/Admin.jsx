import React, { useEffect, useState } from 'react';
import AdminUsersTable from '../components/AdminUsersTable';
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
      <div className="admin-container">
        <NewUser getUsers={ getUsers } />
        <h4>Lista de Usuários</h4>
        <div className="adm-users-table">
          <AdminUsersTable users={ users } deleteUser={ deleteUser } />
        </div>
      </div>
    </>
  );
}

export default Admin;
