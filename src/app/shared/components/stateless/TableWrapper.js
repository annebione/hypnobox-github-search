import styled from 'styled-components'

const TableWrapper = styled.div`
    .react-pagination-table > .table {
        border-collapse: collapse;
    }
    .react-pagination-table > .table > tr {
        border: 1px solid #dfe2e5;
    }
    .react-pagination-table > .table > tbody > tr {
        border: 1px solid #dfe2e5;
    }
    .react-pagination-table > .table > tbody > tr > td {
        padding: 20px;
        color: #24292e;
        font-size: 0.9rem;
    }
    .react-pagination-table > table > thead > tr {
        border: 1px solid #dfe2e5;
    }
    .react-pagination-table > table > thead > tr > th {
        padding: 10px 15px;
        font-weight: 510;
        color: #24292e;
    }
    .react-pagination-table > .clearfix > .pagination-status {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    .react-pagination-table > .clearfix > .pagination-status > li > button {
        padding: 10px;
        border-radius: 3px;
        border: 1px solid #3ce8b0;
        color: #3ce8b0;
        cursor: pointer;
      }
`


export default TableWrapper