import {Component} from 'react'

import './index.css'

import '../../App'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {denominationTotalAmount: 2000}

  denominationAmount = (id, value) => {
    // console.log('button clicked')
    // console.log(id)
    // console.log(value)
    this.setState(prevState => ({
      denominationTotalAmount: prevState.denominationTotalAmount - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {denominationTotalAmount} = this.state

    return (
      <div className="cash-withdrawal-container">
        <div className="app-container">
          <div className="name-container">
            <div className="name-initial">s</div>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div>
              <p className="rupees">{denominationTotalAmount}</p>
              <p className="rupees-text">In Rupees</p>
            </div>
          </div>
          <div className="denominations-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="sum-description">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachDenomination => (
                <DenominationItem
                  key={eachDenomination.id}
                  denominationDetails={eachDenomination}
                  denominationAmount={this.denominationAmount}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
