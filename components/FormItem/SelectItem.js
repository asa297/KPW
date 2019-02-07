import { Select } from "antd";
import styled from "styled-components";

const Option = Select.Option;

const SelectItem = ({
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
          <Select {...field} {...props}>
            {data.map(value => (
              <Option key={value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
          <div className="error">
            {(touched[field.name] && errors[field.name]) || errors[field.name]}
          </div>
        </InputContainer>
      </FlexContainer>
    </div>
  );
};

export default SelectItem;

const FlexContainer = styled.div`
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

const LabelContainer = styled.label`
  display: flex;
  padding: 5px 15px;
`;
