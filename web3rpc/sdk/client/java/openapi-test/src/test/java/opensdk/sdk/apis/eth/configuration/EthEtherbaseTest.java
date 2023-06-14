package opensdk.sdk.apis.eth.configuration;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.EthEtherbaseResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

@DisplayName("Eth RPC Test")
public class EthEtherbaseTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC eth_etherbase")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        EthEtherbaseResponse response = w3.ethEtherbase().send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
