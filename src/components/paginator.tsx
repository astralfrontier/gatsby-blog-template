import { navigate } from "gatsby"
import Pagination from "react-bootstrap/Pagination"

// Note: pages start at 1
const paginationFor = (urlPrefix = "", numPages, currentPage) => {
  const onClickFor = page => () =>
    navigate(page > 1 ? `${urlPrefix}/page/${page}` : `${urlPrefix}/`)
  const pageWindow = 3

  let items = []
  items.push(
    <Pagination.First disabled={currentPage === 1} onClick={onClickFor(1)} />
  )
  items.push(
    <Pagination.Prev
      disabled={currentPage === 1}
      onClick={onClickFor(Math.max(1, currentPage - 1))}
    />
  )
  if (currentPage > pageWindow) {
    items.push(<Pagination.Ellipsis key={"early"} />)
  }
  for (
    let page = Math.max(1, currentPage - pageWindow);
    page <= Math.min(numPages, currentPage + pageWindow);
    page++
  ) {
    items.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={onClickFor(page)}
      >
        {page}
      </Pagination.Item>
    )
  }
  if (currentPage < numPages - pageWindow) {
    items.push(<Pagination.Ellipsis key={"late"} />)
  }
  items.push(
    <Pagination.Next
      disabled={currentPage === numPages}
      onClick={onClickFor(Math.min(numPages, currentPage + 1))}
    />
  )
  items.push(
    <Pagination.Last
      disabled={currentPage === numPages}
      onClick={onClickFor(numPages)}
    />
  )
  return <Pagination>{items}</Pagination>
}

export default paginationFor