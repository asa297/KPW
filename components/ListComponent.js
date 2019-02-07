import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Table, CheckBox, PaginationList } from "./ListItem/Index";
import { DeleteList, ChangeChecked } from "../stores/actions";
import { Button } from "antd";

class ListComponent extends React.PureComponent {
  state = {
    page: 1
  };

  _onDelete(item, status) {
    if (status === "SINGLE") {
      const { key } = item;
      this.props.DeleteList(status, this.props.ListReducer, key);
    } else if (status === "ALL") {
      this.props.DeleteList(status, this.props.ListReducer, null);
    }
  }

  _onChangeCheckBox(item, status) {
    if (status === "SINGLE") {
      const { key } = item;
      this.props.ChangeChecked(status, this.props.ListReducer, key);
    } else if (status === "ALL") {
      this.props.ChangeChecked(status, this.props.ListReducer, null);
    }
  }

  _onChangePagination(page) {
    this.setState({ page });
  }

  render() {
    return (
      <ListComponentContainer>
        <FlexContainer>
          <HeaderBlock>
            <CheckBox onChange={() => this._onChangeCheckBox(null, "ALL")} />
            <Button type="danger" onClick={() => this._onDelete(null, "ALL")}>
              Delete
            </Button>
          </HeaderBlock>
          <HeaderBlock>
            <PaginationList
              defaultPageSize={5}
              total={this.props.ListReducer.length}
              onChange={page => this._onChangePagination(page)}
            />
          </HeaderBlock>
        </FlexContainer>

        <Table
          data={this.props.ListReducer.slice(
            (this.state.page - 1) * 5,
            this.state.page * 5
          )}
          onEdit={item => alert(`edit on ${item.name}`)}
          onDelete={item => this._onDelete(item, "SINGLE")}
          onChangeCheckBox={item => this._onChangeCheckBox(item, "SINGLE")}
        />
      </ListComponentContainer>
    );
  }
}

export default connect(
  ({ ListReducer }) => ({ ListReducer }),
  { DeleteList, ChangeChecked }
)(ListComponent);

const ListComponentContainer = styled.div`
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderBlock = styled.div`
  padding: 10px;
`;
