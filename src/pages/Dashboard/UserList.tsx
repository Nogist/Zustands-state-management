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
import { AiOutlineDelete } from 'react-icons/ai';
import ClockLoader from "react-spinners/ClockLoader";
import Pagination from '@mui/material/Pagination';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: {
    city: string;
    zipcode: string;
  };
}

const UserList: React.FC = () => {
  const { users, currentPage, usersPerPage, loading, error, getUsers, deleteUser, setCurrentPage } = useUserStore();
  const pageNumbers = Math.ceil(users.length / usersPerPage);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const handleDelete = (id: number) => {
    deleteUser(id);
  };

  const displayUsers = users
    .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
    .map((user: User, index: number) => (
      <TableRow key={user.id}>
        <TableCell>{index + 1 + (currentPage - 1) * usersPerPage}</TableCell>
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>{user.phone}</TableCell>
        <TableCell>{user.address.city}</TableCell>
        <TableCell>{user.address.zipcode}</TableCell>
        <TableCell>
          <Button
            variant="outlined"
            startIcon={<AiOutlineDelete />}
            onClick={() => handleDelete(user.id)}
          >
            Delete
          </Button>
        </TableCell>
      </TableRow>
    ));

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <>
      {loading && <div className='abstract w-full h-screen flex items-center justify-center'>
        <ClockLoader
          size={45} 
          color={'#82c8e6'} 
          loading={loading}
        />
      </div>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table aria-label="users table" className="bg-[aqua] flex flex-col text-white !important">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Name</TableCell>
                <TableCell >Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Zipcode</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{displayUsers}</TableBody>
          </Table>
          <p className='bg-[aqua] w-full flex justify-end py-2'>
            <Pagination count={pageNumbers} color="primary" onChange={handlePageChange} />
          </p>
        </TableContainer>
      )}
    </>
  );
};

export default UserList;
