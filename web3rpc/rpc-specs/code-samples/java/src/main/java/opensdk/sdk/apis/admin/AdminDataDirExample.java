package opensdk.sdk.apis.admin;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.AdminDatadirResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class AdminDataDirExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void adminDataDirExample() throws IOException {
        AdminDatadirResponse response = w3.adminDatadir().send();
        response.getResult();
    }
}
