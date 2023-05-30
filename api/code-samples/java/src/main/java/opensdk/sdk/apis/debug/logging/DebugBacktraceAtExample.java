package opensdk.sdk.apis.debug.logging;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.DebugBacktraceAtResponse;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

public class DebugBacktraceAtExample {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.TEST_URL));

    void debugBacktraceAtExample() throws IOException {
        String location = "server.go:443";

        DebugBacktraceAtResponse response = w3.debugBacktraceAt(location).send();
        response.getResult();
    }
}
