import styled from "styled-components";
import { Input } from "antd";

const CitizenItem = ({
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
          <FlexCitizenContainer>
            <InputForm
              {...field}
              style={{ width: "10%" }}
              onChange={props.onChangeInput1}
              value={props.value.substring(0, 1) || ""}
              ref={input => {
                props.setInput1(input);
              }}
              border={errors[field.name] ? "1px solid red" : null}
            />
            <div>-</div>

            <InputForm
              {...field}
              style={{ width: "30%" }}
              onChange={props.onChangeInput2}
              value={props.value.substring(1, 5) || ""}
              ref={input => {
                props.setInput2(input);
              }}
              border={errors[field.name] ? "1px solid red" : null}
            />
            <div>-</div>
            <InputForm
              {...field}
              style={{ width: "40%" }}
              onChange={props.onChangeInput3}
              value={props.value.substring(5, 10) || ""}
              ref={input => {
                props.setInput3(input);
              }}
              border={errors[field.name] ? "1px solid red" : null}
            />
            <div>-</div>
            <InputForm
              {...field}
              style={{ width: "15%" }}
              onChange={props.onChangeInput4}
              value={props.value.substring(10, 12) || ""}
              ref={input => {
                props.setInput4(input);
              }}
              border={errors[field.name] ? "1px solid red" : null}
            />
            <div>-</div>
            <InputForm
              {...field}
              style={{ width: "10%" }}
              onChange={props.onChangeInput5}
              value={props.value.substring(12, 13) || ""}
              ref={input => {
                props.setInput5(input);
              }}
              border={errors[field.name] ? "1px solid red" : null}
            />
          </FlexCitizenContainer>
          <div className="error">
            {(touched[field.name] && errors[field.name]) || errors[field.name]}
          </div>
        </InputContainer>
      </FlexContainer>
    </div>
  );
};

export default CitizenItem;

const FlexContainer = styled.div`
  display: flex;
`;

const FlexCitizenContainer = styled.div`
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
