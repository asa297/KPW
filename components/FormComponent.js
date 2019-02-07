import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import {
  SelectItem,
  InputItem,
  InputDateItem,
  CitizenItem,
  RatioItem,
  PhoneItem
} from "./FormItem/Index";
import { Formik, Field } from "formik";
import { InformationSchema, CihzenValidation } from "../static/validation";
import { Button } from "antd";
import { PostInformation } from "../stores/actions";

class FormComponent extends React.PureComponent {
  render() {
    return (
      <FormComponentContainer>
        <Formik
          initialValues={{
            title: this.props.TitleReducer[0],
            nationality: this.props.NationalityReducer[0],
            cihzen: "",
            gender: this.props.GenderReducer[0],
            phoneCode: this.props.PhoneCodeReducer[0].code,
            phoneNumber: "",
            passport: "",
            salary: ""
          }}
          validationSchema={InformationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            values.cihzen = values.cihzen.slice(0, 13);

            this.props.PostInformation(values);
            if (this.props.PostInfomationReducer) {
              alert("sucess");
              resetForm();
            }
          }}
        >
          {({ values, handleChange, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit} style={{ padding: "2%" }}>
              <RowContainerSpacBetween>
                <InputField width="10%">
                  <Field
                    label="Title"
                    name="title"
                    component={SelectItem}
                    value={values.title}
                    requireStar="true"
                    onChange={e => setFieldValue("title", e)}
                    data={this.props.TitleReducer}
                  />
                </InputField>
                <InputField width="40%">
                  <Field
                    label="FirstName"
                    name="firstName"
                    component={InputItem}
                    value={values.firstName}
                    requireStar="true"
                    onChange={handleChange}
                  />
                </InputField>
                <InputField width="40%">
                  <Field
                    label="LastName"
                    name="lastName"
                    component={InputItem}
                    value={values.lastName}
                    requireStar="true"
                    onChange={handleChange}
                  />
                </InputField>
              </RowContainerSpacBetween>
              <RowContainer>
                <InputField width="30%">
                  <Field
                    label="BirthDay"
                    name="birthDay"
                    component={InputDateItem}
                    value={values.birthDay}
                    requireStar="true"
                    onChange={e => setFieldValue("birthDay", e)}
                    handleBlur
                  />
                </InputField>
                <InputField width="45%">
                  <Field
                    label="Nationality"
                    name="nationality"
                    component={SelectItem}
                    value={values.nationality}
                    requireStar="false"
                    onChange={e => setFieldValue("nationality", e)}
                    data={this.props.NationalityReducer}
                  />
                </InputField>
              </RowContainer>
              <RowContainer>
                <InputField width="40%">
                  <Field
                    label="CihzenID"
                    name="cihzen"
                    component={CitizenItem}
                    value={values.cihzen}
                    requireStar="false"
                    validate={CihzenValidation}
                    onChangeInput1={e => {
                      setFieldValue(
                        "cihzen",
                        `${e.target.value}${values.cihzen.slice(1)}`
                      );
                      if (e.target.value.length === 1)
                        this.state.input2.focus();
                    }}
                    onChangeInput2={e => {
                      if (e.target.value.length === 0)
                        this.state.input1.focus();
                      setFieldValue(
                        "cihzen",
                        `${values.cihzen.slice(0, 1)}${
                          e.target.value
                        }${values.cihzen.slice(5)}`
                      );
                      if (e.target.value.length === 4)
                        this.state.input3.focus();
                    }}
                    onChangeInput3={e => {
                      if (e.target.value.length === 0)
                        this.state.input2.focus();
                      setFieldValue(
                        "cihzen",
                        `${values.cihzen.slice(0, 5)}${
                          e.target.value
                        }${values.cihzen.slice(10)}`
                      );
                      if (e.target.value.length === 5)
                        this.state.input4.focus();
                    }}
                    onChangeInput4={e => {
                      if (e.target.value.length === 0)
                        this.state.input3.focus();
                      setFieldValue(
                        "cihzen",
                        `${values.cihzen.slice(0, 10)}${
                          e.target.value
                        }${values.cihzen.slice(12)}`
                      );
                      if (e.target.value.length === 2)
                        this.state.input5.focus();
                    }}
                    onChangeInput5={e => {
                      if (e.target.value.length === 0)
                        this.state.input4.focus();
                      setFieldValue(
                        "cihzen",
                        `${values.cihzen.slice(0, 12)}${e.target.value}`
                      );
                    }}
                    setInput1={input => this.setState({ input1: input })}
                    setInput2={input => this.setState({ input2: input })}
                    setInput3={input => this.setState({ input3: input })}
                    setInput4={input => this.setState({ input4: input })}
                    setInput5={input => this.setState({ input5: input })}
                  />
                </InputField>
              </RowContainer>

              <RowContainer>
                <Field
                  label="Gender"
                  name="gender"
                  component={RatioItem}
                  value={values.gender || null}
                  requireStar="false"
                  onChange={e => {
                    setFieldValue("gender", e.target.value);
                  }}
                  data={this.props.GenderReducer}
                />
              </RowContainer>
              <RowContainer>
                <Field
                  label="Mobile Phone"
                  component={PhoneItem}
                  name="phoneNumber"
                  valueSelect={values.phoneCode}
                  valueInput={values.phoneNumber}
                  requireStar="true"
                  onChangeSelect={e => setFieldValue("phoneCode", e)}
                  onChangeInput={e =>
                    setFieldValue("phoneNumber", e.target.value)
                  }
                  data={this.props.PhoneCodeReducer}
                />
              </RowContainer>
              <RowContainer>
                <InputField width="40%">
                  <Field
                    label="Passport No"
                    name="passport"
                    component={InputItem}
                    value={values.passport}
                    requireStar="false"
                    onChange={handleChange}
                  />
                </InputField>
              </RowContainer>

              <RowContainerSpacBetween>
                <InputField width="50%">
                  <Field
                    label="Expected Salary"
                    name="salary"
                    component={InputItem}
                    value={values.salary}
                    requireStar="true"
                    onChange={handleChange}
                    labelafter="THB"
                  />
                </InputField>

                <div style={{ width: "25%" }}>
                  <Button type="primary" htmlType="submit">
                    SUBMIT
                  </Button>
                </div>
              </RowContainerSpacBetween>
            </form>
          )}
        </Formik>
      </FormComponentContainer>
    );
  }
}

export default connect(
  ({
    TitleReducer,
    NationalityReducer,
    GenderReducer,
    PhoneCodeReducer,
    PostInfomationReducer
  }) => ({
    TitleReducer,
    NationalityReducer,
    GenderReducer,
    PhoneCodeReducer,
    PostInfomationReducer
  }),
  { PostInformation }
)(FormComponent);

const FormComponentContainer = styled.div`
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  :hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

const RowContainerSpacBetween = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 5px 0px;
`;

const RowContainer = styled.div`
  display: flex;
  padding: 5px 0px;
`;

const InputField = styled.div`
  ${props => (props.width ? `width: ${props.width}` : null)};
`;
