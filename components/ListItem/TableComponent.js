import { Table, Checkbox } from "antd";

const TableComponent = ({ data, onEdit, onDelete, onChangeCheckBox }) => {
  const columns = [
    {
      title: "",
      dataIndex: "checked",
      render: (text, record) => {
        return (
          <Checkbox
            checked={record.checked}
            onChange={() => onChangeCheckBox(record)}
          />
        );
      }
    },
    {
      title: "Name",
      dataIndex: "name"
    },
    {
      title: "Gender",
      dataIndex: "gender"
    },
    {
      title: "Mobile Phone",
      dataIndex: "phone"
    },
    {
      title: "Nationality",
      dataIndex: "nationality"
    },
    {
      title: "",
      dataIndex: "",
      render: (text, record) => {
        return (
          <div>
            <a onClick={() => onEdit(record)}>Edit</a>/
            <a onClick={() => onDelete(record)}>Delete</a>
          </div>
        );
      }
    }
  ];

  return <Table columns={columns} dataSource={data} pagination={false} />;
};

export default TableComponent;
