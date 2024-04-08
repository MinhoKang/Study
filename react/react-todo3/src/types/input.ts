export type InputType = {
  index?: number;
  type: string;
  id: string;
  autoFocus?: boolean;
  required: boolean;
  autoComplete: string;
  className: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
