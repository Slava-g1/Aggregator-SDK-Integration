import { Wallet } from 'ethers'
import { UnsignedTransaction, formatUnits } from 'ethers/lib/utils'
import { tokens } from '../src/common/tokens'

import { FixedNumber } from '../src/common/fixedNumber'
import HyperliquidAdapterV1 from '../src/exchanges/hyperliquid'
import { StaticJsonRpcProvider } from '@ethersproject/providers'
import {
  approveAgent,
  cancelOrders,
  checkIfRageTradeAgent,
  getExtraAgents,
  getMeta,
  getOpenOrders,
  getWebdata2,
  modifyOrders,
  placeOrders,
  updateIsolatedMargin,
  updateLeverage
} from '../src/configs/hyperliquid/api/client'
import { UnsignedTransactionWithMetadata } from '../src/interfaces/IActionExecutor'

async function main() {
  const hl = new HyperliquidAdapterV1()

  const provider = new StaticJsonRpcProvider('https://arb1.arbitrum.io/rpc')

  const wallet = new Wallet('INPUT_PK', provider)
  const walletAgent = new Wallet('INPUT_PK', provider)

  // ** DEPOSIT ** //

  // const bal = await hl.usdc.balanceOf(wallet.address)
  // console.log('usdc bal', formatUnits(bal, 6))
  //
  // const { tx: txn } = (await hl.deposit(tokens.USDC, FixedNumber.fromString(formatUnits(bal, 6))))[0] as UnsignedTransactionWithMetadata
  //
  // const txData = await wallet.populateTransaction({ to: txn.to, data: txn.data })
  // const tx = await wallet.signTransaction(txData)
  // const response = await provider.sendTransaction(tx)
  //
  // console.log(response)

  // ** WITHDRAW ** //

  // const account = await hl.getAccountInfo(wallet.address)
  // console.log(account)
  //
  // const apiReq = (await hl.withdraw(tokens.USDC, account.withdrawable, wallet))[0]
  //
  // if (isPopulatedTransaction(apiReq)) return
  //
  // const response = await (await fetch(...apiReq.apiArgs)).json()
  // console.log(response)

  // ** CREATE & APPROVE AGENT ** //

  // const agentWallet = Wallet.createRandom()
  // console.log(agentWallet.privateKey)
  //
  // const apiReq = await approveAgent(wallet, agentWallet.address)
  //
  // const responseAgent = await (await fetch(...apiReq)).json()
  // console.log(responseAgent)

  // ** CREATE ORDER ** //

  // const apiReqOrder = await placeOrders(
  //   walletAgent,
  //   [
  //     {
  //       coin: "ETH",
  //       is_buy: true,
  //       sz: 0.02,
  //       limit_px: 2400,
  //       cloid: null,
  //       order_type: {
  //         limit: {
  //           tif: "Gtc",
  //         }
  //       },
  //       reduce_only: false
  //     }, {
  //       coin: "ETH",
  //       is_buy: false,
  //       sz: 0.02,
  //       limit_px: 2800,
  //       cloid: null,
  //       order_type: {
  //         limit: {
  //           tif: "Gtc",
  //         }
  //       },
  //       reduce_only: false
  //     }
  //   ],
  //   await getMeta()
  // )
  // console.log(apiReqOrder)
  //
  // const response = await fetch(...apiReqOrder)
  //
  // if (response.ok) {
  //   console.dir(await response.json(), { depth: 4 })
  // } else {
  //   console.log(response)
  // }

  // ** GET ACTIVE AGENT ADDRESS ** //

  // console.dir((await getWebdata2(wallet.address)), { depth: 6 })
  // console.dir((await getExtraAgents(wallet.address)), { depth: 6 })

  // ** EDIT ORDER ** //

  // const order = (await getOpenOrders(wallet.address))[0]
  //
  // const apiReqOrder = await modifyOrders(
  //   walletAgent,
  //   [{
  //     order: {
  //       coin: "ETH",
  //       is_buy: true,
  //       sz: 0.04,
  //       limit_px: 2400,
  //       cloid: null,
  //       order_type: {
  //         limit: {
  //           tif: "Gtc",
  //         }
  //       },
  //       reduce_only: false
  //     },
  //     oid: order.oid
  //   }],
  //   await getMeta()
  // )
  // console.log(apiReqOrder)
  //
  // const response = await fetch(...apiReqOrder)
  //
  // if (response.ok) {
  //   console.dir(await response.json(), { depth: 6 })
  // } else {
  //   console.log(response)
  // }

  // ** CANCEL ORDER ** //

  // const order = (await getOpenOrders(wallet.address))
  //
  // const apiReqOrder = await cancelOrders(
  //   walletAgent,
  //   order.map((o) => { return { coin: 'ETH', oid: o.oid } }),
  //   await getMeta()
  // )
  // console.log(apiReqOrder)
  //
  // const response = await fetch(...apiReqOrder)
  //
  // if (response.ok) {
  //   console.dir(await response.json(), { depth: 6 })
  // } else {
  //   console.log(response)
  // }

  // ** CHANGE MODE / UPDATE LEVERAGE ** //

  // const apiReqOrder = await updateLeverage(walletAgent, 5, 'ETH', false, await getMeta())
  // console.log(apiReqOrder)
  //
  // const response = await fetch(...apiReqOrder)
  //
  // if (response.ok) {
  //   console.dir(await response.json(), { depth: 6 })
  // } else {
  //   console.log(response)
  // }

  // ** UPDATE ISOLATED MARGIN ** //

  // const apiReqOrder = await updateIsolatedMargin(walletAgent, -0.999, 'ETH', await getMeta())
  // console.log(apiReqOrder)
  //
  // const response = await fetch(...apiReqOrder)
  //
  // if (response.ok) {
  //   console.dir(await response.json(), { depth: 6 })
  // } else {
  //   console.log(response)
  // }

  // ** CHECK RAGE TRADE PERSISTENT AGENT ** //

  // console.log(await checkIfRageTradeAgent(wallet.address))
}

main()
