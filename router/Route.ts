import { FixedNumber, addFN } from '../src/common/fixedNumber'
import { Token } from '../src/common/tokens'
import {
  AmountInfo,
  DynamicMarketMetadata,
  MarketInfo,
  OpenTradePreviewInfo,
  TradeDirection
} from '../src/interfaces/V1/IRouterAdapterBaseV1'

export type RouteOptions = {
  allowedChains: string[]
}

export type TokenWithPrice = {
  token: Token
  price: FixedNumber
}

export type RouteData = {
  marketSymbol: string
  collateralTokens: TokenWithPrice[]
  direction: TradeDirection
  sizeDeltaUSD: FixedNumber
  marginDeltaUSD: FixedNumber
  opts?: RouteOptions
}

export type MarketTag = {
  market: MarketInfo
  collateralToken: Token | undefined
  tagDesc: string
  tagColor: string
}

export type MarketWithMetadata = {
  market: MarketInfo
  metadata: DynamicMarketMetadata
}

export type MarketWithPreview = {
  market: MarketInfo
  collateralToken: Token
  preview: OpenTradePreviewInfo
}

export function getBestFundingReduceCallback(tradeDirection: TradeDirection) {
  if (tradeDirection == 'LONG')
    return (prev: MarketWithMetadata, curr: MarketWithMetadata) =>
      prev &&
      addFN(prev.metadata.longFundingRate, prev.metadata.longBorrowRate).gt(
        addFN(curr.metadata.longFundingRate, curr.metadata.longBorrowRate)
      )
        ? prev
        : curr
  else
    return (prev: MarketWithMetadata, curr: MarketWithMetadata) =>
      prev &&
      addFN(prev.metadata.shortFundingRate, prev.metadata.shortBorrowRate).gt(
        addFN(curr.metadata.shortFundingRate, curr.metadata.shortBorrowRate)
      )
        ? prev
        : curr
}

export function getBestPriceReduceCallback(tradeDirection: TradeDirection) {
  if (tradeDirection == 'LONG')
    return (prev: MarketWithPreview, curr: MarketWithPreview) =>
      prev && prev.preview.avgEntryPrice.lt(curr.preview.avgEntryPrice) ? prev : curr
  else
    return (prev: MarketWithPreview, curr: MarketWithPreview) =>
      prev && prev.preview.avgEntryPrice.gt(curr.preview.avgEntryPrice) ? prev : curr
}

export function getMinFeeReduceCallback() {
  return (prev: MarketWithPreview, curr: MarketWithPreview) =>
    prev && prev.preview.fee.lt(curr.preview.fee) ? prev : curr
}
