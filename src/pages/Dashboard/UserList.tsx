  import React, { useEffect } from 'react';
  import { useUserStore } from '../../store/useUserStore';
  import TableRow from '@mui/material/TableRow';
  import TableBody from '@mui/material/TableBody';
  import TableCell from '@mui/material/TableCell';
  import TableHead from '@mui/material/TableHead';
  import Table from '@mui/material/Table';
  import TableContainer from '@mui/material/TableContainer';
  import Paper from '@mui/material/Paper';
  import Button from '@mui/material/Button';
  import { AiOutlineDelete } from 'react-icons/ai'

  interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: {
      city: string;
      zipcode: string;
    }
  }

  const UserList: React.FC = () => {
    const { users, loading, error, getUsers, deleteUser } = useUserStore();

    useEffect(() => {
      getUsers();
    }, [getUsers]);

    const handleDelete = (id: number) => {
      deleteUser(id);
    }

    return (
      <>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <TableContainer component={Paper} >
            <Table aria-label="users table" className='bg-[aqua] text-white !important' >
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: 'white' }}>#</TableCell>
                  <TableCell style={{ color: 'white' }}>Name</TableCell>
                  <TableCell style={{ color: 'white' }}>Email</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>Zipcode</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user: User, index: number) => (
                  <TableRow key={user.id}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.phone}</TableCell>
                    <TableCell>{user.address.city}</TableCell>
                    <TableCell>{user.address.zipcode}</TableCell>
                    <TableCell>
                      <Button variant="outlined" startIcon={<AiOutlineDelete />}
                        onClick={() => handleDelete(user.id)}>
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </>
    );
  };

  export default UserList;
