import { Chain, ClobClient,  Side } from "./clob-client/src/index";
import { Wallet } from "./clob-client/node_modules/@ethersproject/wallet";
const POLYMARKET_API_KEY = process.env.POLYMARKET_API_KEY
const POLYMARKET_PASS_PHRASE = process.env.POLYMARKET_PASS_PHRASE
const POLYMARKET_API_SECRET = process.env.POLYMARKET_API_SECRET

const ETH_PRIVATE_KEY = process.env.PRIVATE_KEY;
const TOKEN_ID = "52114319501245915516055106046884209969926127482827954674443846427813813222426"

if (!ETH_PRIVATE_KEY) {
  throw new Error("PRIVATE_KEY is not set");
}

const host = process.env.CLOB_API_URL || "https://clob.polymarket.com";
const signer = new Wallet(ETH_PRIVATE_KEY);

const clobClient = new ClobClient(host, Chain.POLYGON, signer,{
    key: POLYMARKET_API_KEY!,
    secret: POLYMARKET_API_SECRET!,
    passphrase: POLYMARKET_PASS_PHRASE!
});
// const apiResponse = await clobClient.createOrDeriveApiKey();
// console.log(apiResponse)

// const response = await clobClient.getOrderBook(
//      TOKEN_ID
//     );

const order = await clobClient.createOrder({
    tokenID : TOKEN_ID,
    price : 0.5,
    side : Side.BUY,
    size : 100,
    feeRateBps : 0
})

// Send it to the server
// console.log(response)