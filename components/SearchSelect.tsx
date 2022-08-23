export interface Props {
  regions: string[]
  onChange: (value: string) => void;
}

export const SearchSelect = ({onChange, regions}: Props) =>
    <select onChange={(event) => onChange(event.target.value)}>
      {regions.map((region) =>
          <option key={region} value={region}>{region}</option>
      )}
    </select>