from base.testing import KlaytnBaseTesting


class TestEthGetBlockByNumber(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.blockTag = "0x100"
        self.transactionObject = False

    def test_post(self):
        self.response = self.w3.eth.get_block(
            self.blockTag, self.transactionObject
        )
        self.assertResponseSuccess()

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_block_by_number(self.blockTag)

