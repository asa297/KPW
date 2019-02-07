import styled from "styled-components";
import { DatePicker } from "antd";

const InputDateItem = ({
  label,
  requireStar,
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
          <DatePickerForm
            {...field}
            {...props}
            border={errors[field.name] ? "1px solid red" : null}
          />
          <div className="error">
            {(touched[field.name] && errors[field.name]) || errors[field.name]}
          </div>
        </InputContainer>
      </FlexContainer>
    </div>
  );
};

export default InputDateItem;

const FlexContainer = styled.div`
  display: flex;
`;

const LabelRequire = styled.div`
  color: red;
`;

const InputContainer = styled.div`
  margin-left: 10px;
  width: 100%;
`;

const DatePickerForm = styled(DatePicker)`
  width: 100%;
  border: ${props => props.border || "0px solid #ccc"};
  background-color: #fff;
`;

const LabelContainer = styled.label`
  display: flex;
  padding: 5px 15px;
`;
