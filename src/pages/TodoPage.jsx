import React, { useState, useEffect } from 'react';
import { Add, Close, Edit } from '@mui/icons-material'
import {
      DialogTitle, DialogActions, DialogContent, Grid, IconButton, Typography, Dialog, Button,
      TextField,
      TableContainer,
      Paper,
      Table,
      TableHead,
      TableBody,
      TableRow
} from '@mui/material'
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import * as Yup from 'yup';
import { styled } from "@mui/material/styles"
import { useFormik } from 'formik';
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
      '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
      },
      '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
      },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
            backgroundColor: "red",
            color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
      },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      // '&:last-child td, &:last-child th': {
      //       border: 0,
      // },
}));


const TodoPage = () => {
      const [open, setOpen] = React.useState(false);
      const [formData, setFormData] = useState([]);
      const [selectedRow, setSelectedRow] = useState(null);

      const handleClose = () => {
            setOpen(false);
            resetForm();

      }
      const handleOpen = () => {
            setOpen(true);
      }

      const { handleChange, handleSubmit, errors, values, setValues, resetForm } = useFormik({
            initialValues: {
                  title: "",
                  description: "",
            },
            validationSchema: Yup.object({
                  title: Yup.string().required("Title is required"),
                  description: Yup.string().required("Description is required"),
            }),
            onSubmit: (values, { resetForm }) => {
                  if (selectedRow) {
                        setFormData((prev) => prev?.map((item) => item.id === selectedRow.id ? { ...item, ...values } : item));
                  } else {
                        setFormData((prev) => [...prev, { id: Date.now(), ...values }]);// Add new item to the array
                  }
                  resetForm();
                  setOpen(false)
            }
      })


      useEffect(() => {
            formData.length > 0 && localStorage.setItem("todos", JSON.stringify(formData));
      }, [formData]);

      useEffect(() => {
            const saveData = JSON.parse(localStorage.getItem("todos") || []);
            setFormData(saveData);
      }, []);




      console.log(values, "values")

      useEffect(() => {
            if (selectedRow) {
                  setValues({
                        title: selectedRow.title,
                        description: selectedRow.description,
                  })
            }
      }, [selectedRow]);

      console.log(selectedRow, "seletedRow")

      // console.log(formData)

      return (
            <>
                  <Grid container spacing={2}>
                        <Grid size={{ xs: 'auto' }} sx={{ display: 'flex', mb: 3, justifyContent: 'space-between', width: '250px' }}>
                              <Typography color='info' variant='h4' fontWeight='bold'>Todo Page</Typography>
                              <Button variant="contained" color="secondary" onClick={() => { handleOpen(), setSelectedRow(null) }}><Add /></Button>
                        </Grid>

                        {/* dailog box code */}
                        <BootstrapDialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} fullWidth maxWidth="sm">
                              <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
                                    Modal title
                              </DialogTitle>
                              <IconButton aria-label="close"
                                    onClick={handleClose}
                                    sx={(theme) => ({
                                          position: 'absolute',
                                          right: 8,
                                          top: 8,
                                          color: theme.palette.grey[500],
                                    })}>
                                    <Close />
                              </IconButton>

                              <DialogContent dividers>
                                    <form onSubmit={handleSubmit} id="ok">
                                          <Grid container spacing={2}>
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                      <TextField label="Title" error={errors.title} helperText={errors.title} fullWidth name="title" value={values?.title || ""} onChange={handleChange} />
                                                </Grid>
                                                <Grid size={{ xs: 12, sm: 6 }}>
                                                      <TextField name="description" error={errors.description} helperText={errors.description} onChange={handleChange} value={values?.description || ""} label="Description" fullWidth />
                                                </Grid>
                                          </Grid>
                                    </form>
                              </DialogContent>

                              <DialogActions>
                                    <Button type='submit' form="ok">Save</Button>
                              </DialogActions>
                        </BootstrapDialog>
                  </Grid>


                  <TableContainer component={Paper} elevation={10}>
                        <Table>
                              <TableHead>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell>Todo Name</StyledTableCell>
                                    <StyledTableCell>Description</StyledTableCell>
                                    <StyledTableCell>Action</StyledTableCell>
                              </TableHead>
                              <TableBody>
                                    {
                                          formData?.map((item, index) => (
                                                <StyledTableRow key={index}>
                                                      <StyledTableCell>{index + 1}</StyledTableCell>
                                                      <StyledTableCell>{item.title}</StyledTableCell>
                                                      <StyledTableCell>{item.description}</StyledTableCell>
                                                      <StyledTableCell>
                                                            <IconButton>
                                                                  <Edit onClick={() => { setOpen(true), setSelectedRow(item) }} />
                                                            </IconButton>
                                                      </StyledTableCell>
                                                </StyledTableRow>
                                          ))
                                    }
                                    {/* <StyledTableRow>
                                          <StyledTableCell>1</StyledTableCell>
                                          <StyledTableCell>Fruite</StyledTableCell>
                                          <StyledTableCell>Fruite: orange, mango</StyledTableCell>
                                          <StyledTableCell>
                                                <IconButton>
                                                      <Edit onClick={() => setOpen(true)} />
                                                </IconButton>
                                          </StyledTableCell>
                                    </StyledTableRow> */}
                              </TableBody>
                        </Table>
                  </TableContainer>
            </>
      )
}

export default TodoPage;
