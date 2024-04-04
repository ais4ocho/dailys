function funcTransferWithFullEvent(fullEvent) {
  // testing destructuring fullEvent for params
  const { sender: transferFrom, receiver: transferTo, value } = fullEvent;
  console.log(
    `[TransferWithFullEvent]: ${transferFrom} transferred [${value}] eth to ${transferTo}`,
  );
}

function funcMintWithFullEvent(fullEvent) {
  const { sender: minter, tokenId, value } = fullEvent;
  console.log(
    `[MintWithFullEvent]: ${minter} minted nft ${tokenId} for [${value}] eth`,
  );
}

function funcBurnWithFullEvent(fullEvent) {
  const { sender: burner, tokenId } = fullEvent;
  console.log(`[MintWithFullEvent]: ${burner} burn nft ${tokenId}`);
}

function funcTransferWithArgs(transferFrom, transferTo, value) {
  // testing destructuring fullEvent for params
  console.log(
    `[TransferWithArgs]: ${transferFrom} transferred [${value}] eth to ${transferTo}`,
  );
}

function funcAlertEvent() {
  // function w/ no param
  console.log("[Alert] - alert condition detected");
}

module.exports = {
  funcTransferWithFullEvent,
  funcTransferWithArgs,
  funcBurnWithFullEvent,
  funcMintWithFullEvent,
  funcAlertEvent,
};
