import styled from "styled-components";
import { Input, Select } from "antd";

const Option = Select.Option;

const PhoneItem = ({
  label,
  requireStar,
  data,
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  return (
    <div>
      <FlexContainer>
        <LabelContainer>
          <label>{label}</label>
          {requireStar === "true" ? <LabelRequire>*</LabelRequire> : null}
        </LabelContainer>
        <InputContainer>
          <FlexContainer>
            <Select
              onChange={props.onChangeSelect}
              defaultValue={props.valueSelect}
              style={{ width: "35%" }}
            >
              {data.map(val => (
                <Option key={val.id} value={val.code}>
                  <FlexSelectContainer>
                    <img src={val.flag} style={{ width: "15px" }} />
                    <label>+{val.code}</label>
                  </FlexSelectContainer>
                </Option>
              ))}
            </Select>

            <InputForm
              style={{ width: "65%" }}
              onChange={props.onChangeInput}
              value={props.valueInput}
              name={props.name}
              border={errors[field.name] ? "1px solid red" : null}
            />
          </FlexContainer>
          <div className="error" style={{ marginLeft: "35%" }}>
            {(touched[field.name] && errors[field.name]) || errors[field.name]}
          </div>
        </InputContainer>
      </FlexContainer>
    </div>
  );
};

export default PhoneItem;

const FlexContainer = styled.div`
  display: flex;
`;

const FlexSelectContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LabelRequire = styled.div`
  color: red;
`;

const InputContainer = styled.div`
  margin-left: 10px;
  width: 100%;
`;

const InputForm = styled(Input)`
  width: 100%;

  border: ${props => props.border || "1px solid #ccc"};
  background-color: #fff;
`;

const LabelContainer = styled.label`
  display: flex;
  padding: 5px 15px;
  white-space: nowrap;
`;
