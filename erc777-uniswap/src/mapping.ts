import { InterfaceImplementerSet } from '../generated/TokenRegistry/TokenRegistry'
import { PairCreated } from '../generated/UniswapFactory/UniswapFactory'
import { RegisteredToken, UniswapExchange } from '../generated/schema'

import { log } from '@graphprotocol/graph-ts'

// export function handleInterfaceImplementerSet(event: InterfaceImplementerSet): void {
// 	//log.error("Implementer set {}", [event.params.addr.toHexString()])
//   if (event.params.interfaceHash.toHexString() != '0xac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce2177054') {
//     return
//   }
// }

// export function handleNewExchange(event: PairCreated): void {
// 	log.error("PairCreated created {}", [event.params.pair.toHexString()])
// }

export function handleInterfaceImplementerSet(event: InterfaceImplementerSet): void {
	if (event.params.interfaceHash.toHexString() != '0xac7fbab5f54a3ca8194167523c6753bfeb96a445279294b6125b68cce2177054') {
		return
	}

	let tokenAddress = event.params.addr
	let tokenId = tokenAddress.toHexString()
  log.info("Token Id: {}", [tokenId])

	let token = RegisteredToken.load(tokenId)
	if (!token) {
		token = new RegisteredToken(tokenId)
		token.address = tokenAddress
		token.save()
	}
}

export function handleNewExchange(event: PairCreated): void {
	let exchangeAddress = event.params.pair
	let exchangeId = exchangeAddress.toHexString()

	let exchange = UniswapExchange.load(exchangeId)
	if (!exchange) {
		exchange = new UniswapExchange(exchangeId)
		exchange.address = exchangeAddress
		exchange.token = event.params.pair
		exchange.isErc777Token = false
		exchange.save()
	}
}