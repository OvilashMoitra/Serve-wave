
import { Select } from 'antd';
import type { SelectProps } from 'antd';
import {  useForm } from 'react-hook-form';

type ISelectProps = {
    name:string,
    mode: "tags" | "multiple"|undefined,
    placeholder: string,
    options: SelectProps['options'],
    handleChange:(value:string)=>void
}

const DynamicSelect = (selectProps: ISelectProps) => {
    const {control}=useForm()
    return (
        <Select
        mode={selectProps.mode||undefined}
        style={{ width: '100%' }}
        placeholder={selectProps.placeholder||'Please select'}
        onChange={selectProps.handleChange}
        options={selectProps.options}
          />

)};

export default DynamicSelect;
