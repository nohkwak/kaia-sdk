package opensdk.sdk.apis.governance;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNull;

import opensdk.sdk.apis.constant.UrlConstants;
import org.web3j.protocol.klaytn.core.method.response.GovernanceItemsAtResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.web3j.protocol.http.HttpService;
import org.web3j.protocol.klaytn.Web3j;

import java.io.IOException;

@DisplayName("Governance RPC Test")
public class GovernanceItemsAtTest {
    private Web3j w3 = Web3j.build(new HttpService(UrlConstants.SERVER_URL));

    @Test
    @DisplayName("RPC governance_itemsAt")
    void whenRequestValid_ThenCall200ResponseReturns() throws IOException {
        int blockTag = 0;

        GovernanceItemsAtResponse response = w3.governanceItemsAt(blockTag).send();
        assertNotNull(response);
        assertNull(response.getError());
    }
}
