import type { CountryCode } from "libphonenumber-js";

export type Country = [
  CountryName: string,
  Iso2: CountryCode,
  DialCode: string,
  Priority?: number,
  AreaCodes?: string[]
];

export interface CountryObject {
  name: string;
  iso2: CountryCode;
  dialCode: string;
  priority: number;
  areaCodes: string[] | null;
}

export interface DropdownOptions {
  disabled?: boolean
  showDialCodeInList?: boolean
  showDialCodeInSelection?: boolean
  showFlags?: boolean
  showSearchBox?: boolean
  tabindex?: number
}

export interface InputOptions {
  autocomplete?: string
  autofocus?: boolean
  // dynamicPlaceholder?: boolean
  'aria-describedby'?: string
  id?: string
  maxlength?: number
  name?: string
  showDialCode?: boolean
  placeholder?: string
  readonly?: boolean
  required?: boolean
  tabindex?: number
  type?: string
  styleClasses?: string | any[] | Record<string, any>
}
