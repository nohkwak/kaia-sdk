const OpenSdk = require("opensdk-javascript");

(() => {
    const sdk = new OpenSdk(new OpenSdk.ApiClient("https://api.baobab.klaytn.net:8651"));


    sdk.admin.stopStateMigration({}, (err, data, response) => {
        console.log(data);
    });
}
)()