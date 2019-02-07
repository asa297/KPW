import styled from "styled-components";
import { Radio } from "antd";
const RadioGroup = Radio.Group;

const RatioItem = ({
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
          <RadioGroup {...field} {...props}>
            {data.map(val => (
              <Radio value={val} key={val.id}>
                {val.value}
              </Radio>
            ))}
          </RadioGroup>
        </InputContainer>
        <div className="error">
          {(touched[field.name] && errors[field.name]) || errors[field.name]}
        </div>
      </FlexContainer>
    </div>
  );
};

export default RatioItem;

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
