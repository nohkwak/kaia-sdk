package opensdk.sdk.apis.governance;


import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceIdxCacheResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class GovernanceIdxCacheExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void governanceIdxCacheExample() throws IOException {
        GovernanceIdxCacheResponse response = w3.governanceIdxCache().send();
        response.getResult();
    }
}
