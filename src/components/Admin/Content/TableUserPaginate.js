import { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

const TableUserPaginate = (props) => {
    const [pageCount, setPageCount] = useState(0);
    const handlePageClick = (event) => {
        props.fetchListUserPaginate(+event.selected+1);
        props.setCurrentPage(+event.selected+1)
        console.log(`User requested page number ${event.selected+1}`);
    };

    const {listUsers} = props;

    return (
        <>
            <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                <th scope="col">No</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers&&listUsers.length>0&&
                                listUsers.map((item, index)=>{
                                    return (
                                        <tr key={`table-users-${index}`}>
                                        <td>{item.id}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <button className="btn btn-success" onClick={()=>props.handleClickBtnView(item)} >View</button>
                                            <button className="btn btn-warning mx-3" onClick={()=>props.handleClickBtnUpdate(item)}>Update</button>
                                            <button className="btn btn-danger" onClick={()=>props.handleClickBtnDelUser(item)}>Delete</button>
                                        </td>
                                        </tr>
                                    )
                                })
                                }
                               {listUsers&&listUsers.length===0&&<tr ><td colSpan={'4'}>User Not found</td></tr>}
                               
                            </tbody>
                            </table>
                            <div className="d-flex justify-content-end">
                                <ReactPaginate
                                    nextLabel="next >"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    marginPagesDisplayed={2}
                                    pageCount={props.pageCount}
                                    previousLabel="< prev"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    containerClassName="pagination"
                                    activeClassName="active"
                                    renderOnZeroPageCount={null}
                                    forcePage={props.currentPage-1}
                                /></div>
                            
        </>
    )
}
export default TableUserPaginate;