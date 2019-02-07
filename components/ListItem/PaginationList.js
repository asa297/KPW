import { Pagination } from "antd";

function itemRender(current, type, originalElement) {
  if (type === "prev") {
    return <a>Previous</a>;
  }
  if (type === "next") {
    return <a>Next</a>;
  }
  return originalElement;
}

const PaginationList = ({ ...props }) => {
  return <Pagination itemRender={itemRender} {...props} />;
};

export default PaginationList;
