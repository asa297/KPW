import styled from "styled-components";
import { Input } from "antd";

const InputItem = ({
  label,
  requireStar,
  labelafter,
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
          {labelafter ? (
            <FlexContainerCenter>
              <InputForm
                type="text"
                {...field}
                {...props}
                border={errors[field.name] ? "1px solid red" : null}
              />
              <label>{labelafter}</label>
            </FlexContainerCenter>
          ) : (
            <InputForm
              type="text"
              {...field}
              {...props}
              border={errors[field.name] ? "1px solid red" : null}
            />
          )}

          <div className="error">
            {(touched[field.name] && errors[field.name]) || errors[field.name]}
          </div>
        </InputContainer>
      </FlexContainer>
    </div>
  );
};

export default InputItem;

const FlexContainer = styled.div`
  display: flex;
`;
const FlexContainerCenter = styled.div`
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
  height: 35px;
  border: ${props => props.border || "1px solid #ccc"};
  background-color: #fff;
  padding: 5px 15px;
`;

const LabelContainer = styled.label`
  display: flex;
  padding: 5px 15px;
  white-space: nowrap;
`;
