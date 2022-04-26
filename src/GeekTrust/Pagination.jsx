import React from 'react'
import ReactPaginate from 'react-paginate'

const Pagination = ({pageCount, handlePageClick}) => {
  return (
    <div>
        <ReactPaginate  
            previousLabel={'< Previous'}
            nextLabel={'Next >'}
            marginPagesDisplayed={3}
            pageRangeDisplayed={4}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            />
    </div>
  )
}

export default Pagination