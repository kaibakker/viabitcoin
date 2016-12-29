var React = require("react");

var QRCode = require("qrcode.react");
var CardHeader = require(".././CardHeader");

var { bitcoinURI } = require("utils/request_helpers");

import makeRequestFromProtocolURI from "utils/get-request-object";


export default function BitcoinPanel(props) {
    var request = makeRequestFromProtocolURI()

    return (
        <div className="panel panel-default panel-checkout">
            <CardHeader title='Pay to Bitcoin Address' />

            <div className="list-group-item">
                <a href={bitcoinURI(request)}>
                    <div className="center-block qrcode">
                        <QRCode value={bitcoinURI(request)} />
                    </div>
                </a>

                <div className="text-center">
                    Send exactly <code>{ request.amount }</code> to this address <code>{ request.address }</code>
                </div>
            </div>
        </div>
    );
}