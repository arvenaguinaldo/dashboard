/* eslint-disable no-undef */
import React from 'react';
import { DatePicker, Form, Input, TimePicker, Select, InputNumber } from "antd";
import { getIn } from 'formik';


const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

const FormikField = AntComponent => ({
  field,
  form,
  hasFeedback,
  label,
  help,
  selectOptions,
  submitCount,
  type,
  required,
  layout,
  componentStyle,
  formItemStyle,
  ...props
}) => {
  const reg = /^-?(0|[1-9][0-9]*)(\.[0-9]*)?$/;
  const touched = getIn(form.touched, field.name);
  const submitted = submitCount > 0;
  const hasError = getIn(form.errors, field.name);
  const submittedError = hasError && submitted;
  const touchedError = hasError && touched;
  const onInputChange = ({ target: { value } }) => {
    if(type === 'number') {
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        form.setFieldValue(field.name, value);
      }
    } else {
      form.setFieldValue(field.name, value);
    }
  }
  const onChange = value => form.setFieldValue(field.name, value);
  const onBlur = () => form.setFieldTouched(field.name, true);

  return (
      <FormItem
        label={label}
        required={required}
        hasFeedback={(hasFeedback && submitted) || (hasFeedback && touched) ? true : false}
        help={(submittedError || touchedError ? hasError : false) || help }
        validateStatus={submittedError || touchedError ? "error" : "success"}
        style={formItemStyle}
        {...layout}
      >
        <AntComponent
          {...field}
          {...props}
          onBlur={onBlur}
          style={componentStyle}
          onChange={type ? onInputChange : onChange}
        >
          {/* {selectOptions &&
            selectOptions.map(name => <Option key={name}>{name}</Option>)} */}
        </AntComponent>
      </FormItem>
  );
};

export const AntInput = FormikField(Input);
export const AntInputPassword = FormikField(Input.Password);
export const AntSelect = FormikField(Select);
export const AntDatePicker = FormikField(DatePicker);
export const AntTimePicker = FormikField(TimePicker);
export const AntRangePicker = FormikField(RangePicker);
export const AntInputNumber = FormikField(InputNumber);
export const AntTextArea = FormikField(TextArea);

