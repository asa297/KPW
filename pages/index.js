import React from "react";

import styled from "styled-components";
import { connect } from "react-redux";
import {
  FetchTitle,
  FetchNationality,
  FetchGender,
  FetchPhoneCode,
  FetchMember,
  FetchList
} from "../stores/actions";

import FormComponent from "../components/FormComponent";
import ListComponent from "../components/ListComponent";

class Main extends React.PureComponent {
  componentWillMount() {
    this.props.FetchTitle();
    this.props.FetchNationality();
    this.props.FetchGender();
    this.props.FetchPhoneCode();
    this.props.FetchMember();
    this.props.FetchList();
  }

  render() {
    return (
      <Container>
        <FormComponent />
        <LineSpace />
        <ListComponent />
      </Container>
    );
  }
}

export default connect(
  null,
  {
    FetchTitle,
    FetchNationality,
    FetchGender,
    FetchPhoneCode,
    FetchMember,
    FetchList
  }
)(Main);

const Container = styled.div`
  margin: 25px;
`;

const LineSpace = styled.div`
  margin-top: 10px;
`;
