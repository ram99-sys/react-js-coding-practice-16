import './index.css'

const DenominationItem = props => {
  const {denominationDetails, denominationAmount} = props
  const {value, id} = denominationDetails

  const onClickDenomination = () => {
    denominationAmount(id, value)
  }

  return (
    <li className="denomination-item">
      <button type="button" className="button" onClick={onClickDenomination}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
