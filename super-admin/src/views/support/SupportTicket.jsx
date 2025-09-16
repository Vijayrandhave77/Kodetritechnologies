import Box from "@mui/material/Box"
import NoRecords from "../../components/NoRecords"
import SubHeader from "../../components/SubHeader"
import Paper from "@mui/material/Paper"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableCell from "@mui/material/TableCell"
import Checkbox from "@mui/material/Checkbox"
import TableRow from "@mui/material/TableRow"

function SupportTicket() {
  return (
    <div>
      <SubHeader></SubHeader>
      <div>
        {[]?.length != 0 ? (
          <>
            <NoRecords />
          </>
        ) : (
          <div className="itemTable">
            {/* {multiDelete && multiDelete.length > 0 && (
                      <div className="w-full cp flex items-center justify-between text-2xl">
                        <div style={{ fontSize: "16px" }}>
                          {multiDelete?.length} selecte to Delete
                        </div>
                        <DeleteSweetalert
                          endpoint={"configuration/status"}
                          type={"multi-delete"}
                          // multiDelete={multiDelete}
                          // refresh={fetchData}
                        />
                      </div>
                    )} */}
            <Box sx={{ width: "100%" }}>
              <Paper sx={{ width: "100%", mb: 2 }}>
                <TableContainer>
                  <Table sx={{ minWidth: 750 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell padding="checkbox">
                          <Checkbox
                            color="primary"
                            onChange={(e) => {
                              if (e.target.checked) {
                                // setMultiDelete(data.map((row) => row._id));
                              } else {
                                // setMultiDelete([]);
                              }
                            }}
                          />
                        </TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Color</TableCell>
                        <TableCell align="center">Type</TableCell>
                        <TableCell align="center">Created</TableCell>
                        <TableCell align="center">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    {/* <TableBody>
                              {data?.map((row) => (
                                <TableRow
                                  key={row._id}
                                  hover
                                  sx={{ cursor: "pointer" }}
                                >
                                  <TableCell padding="checkbox">
                                    <Checkbox
                                      name={row.name}
                                      value={row._id}
                                      color="primary"
                                      checked={multiDelete.includes(row._id)}
                                      onChange={handleMultiDelete}
                                    />
                                  </TableCell>
                                  <TableCell align="center">{row.name}</TableCell>
                                  <TableCell align="center">{row.color}</TableCell>
                                  <TableCell align="center">{row.type}</TableCell>
      
                                  <TableCell align="center">
                                    {row.createdAt}
                                  </TableCell>
                                  <TableCell align="center">
                                    <div className="flex items-center gap-1 text-2xl">
                                      <NavLink to={`/master/status/${row._id}/edit`}>
                                        <MdCreate className="text-blue-500" />
                                      </NavLink>
                                      <DeleteSweetalert
                                        endpoint={"configuration/status"}
                                        type={"delete"}
                                        // deleteID={row?._id}
                                        // refresh={fetchData}
                                      />
                                    </div>
                                  </TableCell>
                                </TableRow>
                              ))}
                            </TableBody> */}
                  </Table>
                </TableContainer>
                {/* <TablePagination
                          rowsPerPageOptions={[1, 2, 5, 15, 30, 45, 100]}
                          component="div"
                          count={pagination?.totalData}
                          rowsPerPage={pagination?.limit || 5}
                          page={pagination?.page - 1}
                          onPageChange={(e, newPage) => {
                            console.log(newPage);
                            setSearchParams(`?page=${newPage + 1}`);
                          }}
                          onRowsPerPageChange={(e) => {
                            setSearchParams(`?count=${e.target.value}`);
                          }}
                        /> */}
              </Paper>
            </Box>
          </div>
        )}
      </div>
    </div>
  )
}

export default SupportTicket
