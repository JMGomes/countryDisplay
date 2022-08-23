export interface Props {
  border: string;
  commonName: string;
}

export const BorderCountryButton = ({border, commonName}: Props) => {
  return (
      <a style={{
        padding: '8px 25px',
        margin: '5px',
      }} className="elementsColor" href={`/country/${border}`}>{commonName}</a>
  )
}