var React = require('react');


var BitcoinPanel = require('./BitcoinPanel');
var ShapeShiftPanel = require('./Services/ShapeShiftPanel');
var CirclePanel = require('./Services/CirclePanel');
var CoinbasePanel = require('./Services/CoinbasePanel');
var TransactionStatusPanel = require('./TransactionStatusPanel');

var ListGroupItem = require('./ListGroupItem')

var IndexPanel = React.createClass({
  handleClick(panel) {
    return () => this.props.panelController.setPanel(panel)
  },
  render() {
    return (
      <div className="card">
        <div className="card-header">How would you like to pay?</div>
        <ListGroupItem onClick={this.handleClick(BitcoinPanel)} name='Bitcoin Address' />
        <ListGroupItem onClick={this.handleClick(CoinbasePanel)} name='Coinbase' image='assets/images/coinbase.png'/>
        <ListGroupItem onClick={this.handleClick(CirclePanel)} name='Circle' />
        <ListGroupItem onClick={this.handleClick(ShapeShiftPanel)} name='ShapeShift' image='assets/images/shapeshift.png'/>
        <ListGroupItem onClick={this.handleClick(TransactionStatusPanel)} name='Transaction Status' />
      </div>
    )
	}
});

module.exports = IndexPanel;
