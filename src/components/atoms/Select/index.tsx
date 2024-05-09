"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
  CrossCircledIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import React from "react";
import type {
  ClearIndicatorProps,
  DropdownIndicatorProps,
  GroupBase,
  InputActionMeta,
  MultiValueProps,
  NoticeProps,
  OptionProps,
  Props,
  StylesConfig,
} from "react-select";
import Select, { components } from "react-select";
import { Checkbox } from "../Checkbox";

export interface OptionType {
  value: string | number;
  label: string;
}

export type SingleOrMultipleOption<M extends boolean> = M extends false
  ? OptionType
  : OptionType[];

const OptionComponent: React.ComponentType<
  OptionProps<OptionType, boolean, GroupBase<OptionType>>
> = props => {
  return (
    <div>
      <components.Option {...props}>
        <Checkbox checked={props.isSelected} id={props.label} />
      </components.Option>
    </div>
  );
};

const MultiValueComponent: React.ComponentType<
  MultiValueProps<OptionType, boolean, GroupBase<OptionType>>
> = props => {
  const labelToBeDisplayed = `${props.data.label} `;
  return (
    <components.MultiValue {...props}>
      {labelToBeDisplayed}
    </components.MultiValue>
  );
};

const NoOptionsMessage: React.ComponentType<
  NoticeProps<OptionType, boolean, GroupBase<OptionType>>
> = props => {
  return (
    <components.NoOptionsMessage {...props}>
      <span className='custom-css-class'>{"No Options"}</span>
    </components.NoOptionsMessage>
  );
};

const DropdownIndicator: React.ComponentType<
  DropdownIndicatorProps<OptionType, boolean, GroupBase<OptionType>>
> = props => {
  return (
    <components.DropdownIndicator {...props}>
      <>
        {props.selectProps.isSearchable ? (
          <MagnifyingGlassIcon className='text-black-300 h-4 w-4 p-0' />
        ) : null}
        {props.isFocused ? (
          <ChevronUpIcon className='text-black-400 h-4 w-4 p-0' />
        ) : (
          <ChevronDownIcon className='text-black-400 h-4 w-4 p-0' />
        )}
      </>
    </components.DropdownIndicator>
  );
};

const ClearIndicator: React.ComponentType<
  ClearIndicatorProps<OptionType, boolean, GroupBase<OptionType>>
> = props => {
  return (
    <components.ClearIndicator {...props}>
      <CrossCircledIcon className='text-black-400 -mr-3 h-4 p-0' />
    </components.ClearIndicator>
  );
};

interface SelectInputProps<M extends boolean> {
  label?: string | React.ReactNode;
  showLabel?: boolean;
  defaultValue?: Props<OptionType>["defaultValue"];
  options?: OptionType[];
  onChange?: (value: SingleOrMultipleOption<M>) => void;
  isLoading?: Props<OptionType>["isLoading"];
  error?: string;
  id?: string;
  placeholder?: string | React.ReactNode;
  name?: string;
  value?: SingleOrMultipleOption<M>;
  disabled?: boolean;
  className?: string;
  multiple?: boolean;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  controlShouldRenderValue?: boolean;
  size?: "sm" | "md";
  //to be added later
  // field?: ControllerRenderProps<any, any>;
  required?: boolean;
  handleSearchInputChange?: (_: string, __: InputActionMeta) => void;
  onMenuScrollToBottom?: () => void;
  selectBoxBorder?: string;
  disabledOptions?: OptionType[];
  errorClassName?: string;
  disableErrorPlaceholder?: boolean;
  menuListClassName?: string;
  containerClassName?: string;
  controlClassName?: string;
  borderLess?: boolean;
}

const outer = cva("w-full flex flex-col gap-2");

const selectContainer = cva(
  " focus-within:border-primary focus-within:outline focus-within:outline-[3px] focus-within:outline-primary-200/30 rounded-lg flex items-center bg-white",
  {
    variants: {
      error: {
        true: "!border-error-500 focus-within:!border-error-500 focus-within:!outline-error-200/30",
      },
      disabled: {
        true: "!bg-error bg-gray-100",
      },
    },
  }
);

const selectControl = cva(
  "!p-0  !border-none !shadow-transparent !rounded-lg  !cursor-pointer "
);

const generateSelectClassNames = ({
  error,
  disabled,
  menuListClassName,
  containerClassName,
  controlClassName,
  isMulti,
  borderLess,
}: {
  error?: string;
  disabled: boolean;
  menuListClassName?: string;
  containerClassName?: string;
  isMulti: boolean;
  controlClassName?: string;
  borderLess?: boolean;
}) => {
  const commonProps = {
    valueContainer: () => "!p-0 !m-0 !text-sm",
    loadingIndicator: () => "-ml-10",
    indicatorSeparator: () => "hidden",
    input: () => "!h-full !p-0 !m-0",
    indicatorsContainer: () => "p-0 flex items-center shrink-0",
    menu: () => "p-0 z-[9999]",
    menuList: () => `my-2 z-[9999] ${menuListClassName}`,
    option: () => `!py-2 !px-2 bg-none !cursor-pointer !text-xs`,
  };

  const classNames = {
    default: {
      ...commonProps,
      container: () =>
        `h-10 w-full p-0 ${
          borderLess ? "border-none" : "border border-secondary-75"
        } ${selectContainer({
          error: Boolean(error),
        })}
        ${
          disabled && !borderLess
            ? "!bg-[#E6E6E6]"
            : disabled && borderLess
              ? "!bg-white !text-brack"
              : " !bg-white"
        } ${containerClassName}`,
      control: () =>
        ` !px-1 w-full grow !h-10 ${selectControl()} ${
          disabled ? "!bg-transparent " : " !bg-transparent"
        } ${controlClassName}`,
      singleValue: () =>
        disabled
          ? "!text-black-400"
          : disabled && borderLess
            ? "!text-brack"
            : "",
      placeholder: () =>
        "!text-secondary-200 max-[370px]:!text-xs !text-sm !sm:text-md",
      clearIndicator: () => "flex w-full p-0",
    },
    multi: {
      ...commonProps,
      container: () =>
        `min-h-10 w-full ${
          borderLess ? "border-none" : "border border-secondary-75"
        } ${selectContainer({
          error: Boolean(error),
        })} ${
          disabled && !borderLess
            ? "!bg-[#E6E6E6] "
            : disabled && borderLess
              ? "!bg-white"
              : " !bg-white"
        } ${containerClassName}`,
      control: () =>
        `w-full grow
        ${selectControl()} !p-1 ${
          disabled ? "!bg-transparent " : " !bg-transparent"
        } ${controlClassName}`,
      multiValue: () => `!text-xs rounded-md`,
    },
  };

  return isMulti ? classNames.multi : classNames.default;
};

const customStyles: StylesConfig<OptionType, boolean, GroupBase<OptionType>> = {
  control: base => ({
    ...base,
    height: "100%",
    border: "none",
    boxShadow: "none",
    "&:hover": {
      border: "none",
    },
  }),
};

export const SelectInput = <M extends boolean>({
  label,
  showLabel = true,
  error,
  name,
  onChange,
  disabled = false,
  className,
  placeholder,
  multiple = false,
  closeMenuOnSelect,
  hideSelectedOptions = false,
  isClearable = false,
  isSearchable = false,
  controlShouldRenderValue,
  containerClassName,
  id,
  onMenuScrollToBottom,
  required = false,
  handleSearchInputChange,
  disabledOptions,
  disableErrorPlaceholder = false,
  menuListClassName,
  controlClassName,
  errorClassName,
  value,
  borderLess = false,
  ...props
}: SelectInputProps<M>) => {
  //tobe added later
  // const { t } = useTranslation()
  // let errorName = "";
  // if (name?.length) {
  //   errorName = name;
  // } else if (typeof label === "string") {
  //   errorName = label;
  // }

  return (
    <div
      className={`${outer({ className })} ${
        disableErrorPlaceholder ? "mb-0" : "mb-2"
      }`}
    >
      <Select<OptionType, boolean>
        {...props}
        id={id ?? name}
        name={name}
        styles={customStyles}
        menuPlacement='auto'
        menuPortalTarget={
          typeof document !== "undefined"
            ? document.getElementById("root")
            : undefined
        }
        isMulti={multiple}
        formatOptionLabel={data => data.label}
        isDisabled={disabled}
        hideSelectedOptions={hideSelectedOptions}
        placeholder={(placeholder as string) || "Please Select"}
        isClearable={isClearable}
        isSearchable={isSearchable}
        closeMenuOnSelect={closeMenuOnSelect}
        isOptionDisabled={options =>
          disabledOptions?.includes(options) ?? false
        }
        value={value}
        classNames={generateSelectClassNames({
          error,
          disabled,
          menuListClassName,
          isMulti: multiple,
          containerClassName,
          controlClassName,
          borderLess,
        })}
        // ref={ref as any}
        blurInputOnSelect={!multiple}
        onChange={newValue => {
          if (!onChange) return;
          onChange(newValue as SingleOrMultipleOption<M>);
        }}
        classNamePrefix={multiple ? "react-select-multi" : "react-select"}
        onMenuScrollToBottom={onMenuScrollToBottom}
        components={
          multiple
            ? {
                Option: OptionComponent,
                MultiValue: MultiValueComponent,
                NoOptionsMessage,
                DropdownIndicator,
                ClearIndicator,
              }
            : { NoOptionsMessage, DropdownIndicator, ClearIndicator }
        }
        controlShouldRenderValue={controlShouldRenderValue}
        onInputChange={handleSearchInputChange}
      />
      {/* tobe added later */}
      {/* {!disableErrorPlaceholder && (
        <ErrorMessage
          error={error}
          className={errorClassName}
          name={errorName}
        />
      )} */}
    </div>
  );
};
