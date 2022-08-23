export interface Props {
  onChange: (value: string) => void;
}

export const SearchInput = ({onChange}: Props) =>
    <input
        placeholder={"Search for country"}
        onChange={
          (event) =>
              onChange(event.target.value)
        }
    />;