import { Field } from './field-types';

export interface ColumnMap {
  fieldName: string;
  columnName: string;
  key: 'primary' | 'foreign' | 'not';
  type: Field;
  isNullable: boolean;
  isUnique: boolean;
  isAutoIncrement: boolean;
}
