package opensdk.sdk.apis.eth.filter;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.core.methods.response.EthFilter;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class EthNewBlockFilterExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.LOCAL_URL));
    void ethNewBlockFilterExample() throws IOException {
        EthFilter response = w3.ethNewBlockFilter().send();
        response.getResult();
    }
}
