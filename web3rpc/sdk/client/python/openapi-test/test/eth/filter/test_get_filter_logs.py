from base.testing import KlaytnBaseTesting
from base.eth import create_new_filter


class TestGetFilterLogs(KlaytnBaseTesting):

    def setUp(self) -> None:
        super().setUp()
        self.filter = create_new_filter()

    def test_post(self):
        self.response = self.w3.eth.get_filter_logs(
            self.filter.filter_id
        )
        self.assertResponseSuccess()

    # def test_post_wrong_with_lack_paramaters(self):
    #     with self.assertRaises(ValueError):
    #         self.response = self.w3.eth.get_filter_logs()

