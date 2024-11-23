'use strict';


/**
 * Get the all the tokens balances of an address
 *
 * address String The address account
 * returns List
 **/
exports.apiV1AccountAddressGET = function(address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "tokenAddress" : "tokenAddress",
  "balance" : "balance"
}, {
  "tokenAddress" : "tokenAddress",
  "balance" : "balance"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the latest block processed by the chain crawler
 *
 * returns inline_response_200_7
 **/
exports.apiV1ChainBlockLatestGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "height" : "height"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the latest epoch processed by the chain crawler
 *
 * returns inline_response_200_8
 **/
exports.apiV1ChainEpochLatestGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "height" : "height"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the inner transaction by hash
 *
 * tx_id String Tx id hash
 * returns InnerTransaction
 **/
exports.apiV1ChainInnerTx_idGET = function(tx_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "wrapperId" : "wrapperId",
  "data" : "data",
  "kind" : "transparentTransfer",
  "txId" : "txId",
  "exitCode" : "applied",
  "memo" : "memo"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get chain parameters
 *
 * returns Parameters
 **/
exports.apiV1ChainParametersGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "checksums" : {
    "key" : "checksums"
  },
  "apr" : "apr",
  "minDuration" : "minDuration",
  "cubicSlashingWindowLength" : "cubicSlashingWindowLength",
  "genesisTime" : "genesisTime",
  "pipelineLength" : "pipelineLength",
  "unbondingLength" : "unbondingLength",
  "epochSwitchBlocksDelay" : "epochSwitchBlocksDelay",
  "minNumOfBlocks" : "minNumOfBlocks",
  "nativeTokenAddress" : "nativeTokenAddress",
  "chainId" : "chainId",
  "epochsPerYear" : "epochsPerYear",
  "maxBlockTime" : "maxBlockTime"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get rpc url that indexer connects to
 *
 * returns RpcUrl
 **/
exports.apiV1ChainRpc_urlGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get chain tokens
 *
 * returns List
 **/
exports.apiV1ChainTokenGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the wrapper transaction by hash
 *
 * tx_id String Tx id hash
 * returns WrapperTransaction
 **/
exports.apiV1ChainWrapperTx_idGET = function(tx_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "gasLimit" : "gasLimit",
  "feePayer" : "feePayer",
  "blockHeight" : "blockHeight",
  "innerTransactions" : [ {
    "data" : "data",
    "kind" : "transparentTransfer",
    "txId" : "txId",
    "exitCode" : "applied",
    "memo" : "memo"
  }, {
    "data" : "data",
    "kind" : "transparentTransfer",
    "txId" : "txId",
    "exitCode" : "applied",
    "memo" : "memo"
  } ],
  "atomic" : true,
  "txId" : "txId",
  "feeToken" : "feeToken",
  "exitCode" : "applied"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get timestamps of the last activity of the crawlers
 *
 * crawler_names List The crawler names (optional)
 * returns List
 **/
exports.apiV1CrawlersTimestampsGET = function(crawler_names) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "chain",
  "timestamp" : 0.8008281904610115
}, {
  "name" : "chain",
  "timestamp" : 0.8008281904610115
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the gas limit per tx kind per token. Native token gas can be queried by using `native` as {token} parameter
 *
 * token String The gas token. For native token use `native`.
 * returns GasLimitTable
 **/
exports.apiV1GasTokenGET = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "gasLimit" : 0.8008281904610115,
  "txKind" : "transparentTransfer"
}, {
  "gasLimit" : 0.8008281904610115,
  "txKind" : "transparentTransfer"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the gas price per token type
 *
 * token String The gas token.
 * returns GasPriceTable
 **/
exports.apiV1Gas_priceTokenGET = function(token) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "amount",
  "token" : "token"
}, {
  "amount" : "amount",
  "token" : "token"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of all governance proposals
 *
 * status String The status of the proposal (optional)
 * kind String The status of the proposal (optional)
 * pattern String The status of the proposal (optional)
 * returns List
 **/
exports.apiV1GovProposalAllGET = function(status,kind,pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "data" : "data",
  "abstainVotes" : "abstainVotes",
  "author" : "author",
  "endEpoch" : "endEpoch",
  "nayVotes" : "nayVotes",
  "type" : "default",
  "startEpoch" : "startEpoch",
  "yayVotes" : "yayVotes",
  "content" : "content",
  "currentTime" : "currentTime",
  "tallyType" : "twoThirds",
  "activationEpoch" : "activationEpoch",
  "startTime" : "startTime",
  "id" : "id",
  "endTime" : "endTime",
  "activationTime" : "activationTime",
  "status" : "pending"
}, {
  "data" : "data",
  "abstainVotes" : "abstainVotes",
  "author" : "author",
  "endEpoch" : "endEpoch",
  "nayVotes" : "nayVotes",
  "type" : "default",
  "startEpoch" : "startEpoch",
  "yayVotes" : "yayVotes",
  "content" : "content",
  "currentTime" : "currentTime",
  "tallyType" : "twoThirds",
  "activationEpoch" : "activationEpoch",
  "startTime" : "startTime",
  "id" : "id",
  "endTime" : "endTime",
  "activationTime" : "activationTime",
  "status" : "pending"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a list of governance proposals
 *
 * page Integer Pagination parameter (optional)
 * status String The status of the proposal (optional)
 * kind String The status of the proposal (optional)
 * pattern String The status of the proposal (optional)
 * returns inline_response_200_5
 **/
exports.apiV1GovProposalGET = function(page,status,kind,pattern) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "data" : "data",
    "abstainVotes" : "abstainVotes",
    "author" : "author",
    "endEpoch" : "endEpoch",
    "nayVotes" : "nayVotes",
    "type" : "default",
    "startEpoch" : "startEpoch",
    "yayVotes" : "yayVotes",
    "content" : "content",
    "currentTime" : "currentTime",
    "tallyType" : "twoThirds",
    "activationEpoch" : "activationEpoch",
    "startTime" : "startTime",
    "id" : "id",
    "endTime" : "endTime",
    "activationTime" : "activationTime",
    "status" : "pending"
  }, {
    "data" : "data",
    "abstainVotes" : "abstainVotes",
    "author" : "author",
    "endEpoch" : "endEpoch",
    "nayVotes" : "nayVotes",
    "type" : "default",
    "startEpoch" : "startEpoch",
    "yayVotes" : "yayVotes",
    "content" : "content",
    "currentTime" : "currentTime",
    "tallyType" : "twoThirds",
    "activationEpoch" : "activationEpoch",
    "startTime" : "startTime",
    "id" : "id",
    "endTime" : "endTime",
    "activationTime" : "activationTime",
    "status" : "pending"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a governance proposal by proposal id
 *
 * id Integer Proposal id
 * returns Proposal
 **/
exports.apiV1GovProposalIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : "data",
  "abstainVotes" : "abstainVotes",
  "author" : "author",
  "endEpoch" : "endEpoch",
  "nayVotes" : "nayVotes",
  "type" : "default",
  "startEpoch" : "startEpoch",
  "yayVotes" : "yayVotes",
  "content" : "content",
  "currentTime" : "currentTime",
  "tallyType" : "twoThirds",
  "activationEpoch" : "activationEpoch",
  "startTime" : "startTime",
  "id" : "id",
  "endTime" : "endTime",
  "activationTime" : "activationTime",
  "status" : "pending"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the votes for a governance proposal from an address
 *
 * id Integer Proposal id
 * address String The voter address
 * returns List
 **/
exports.apiV1GovProposalIdVotesAddressGET = function(id,address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "voterAddress" : "voterAddress",
  "vote" : "yay",
  "proposalId" : "proposalId"
}, {
  "voterAddress" : "voterAddress",
  "vote" : "yay",
  "proposalId" : "proposalId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the votes for a governance proposal
 *
 * id Integer Proposal id
 * returns inline_response_200_6
 **/
exports.apiV1GovProposalIdVotesGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "voterAddress" : "voterAddress",
    "vote" : "yay",
    "proposalId" : "proposalId"
  }, {
    "voterAddress" : "voterAddress",
    "vote" : "yay",
    "proposalId" : "proposalId"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the votes from a voter
 *
 * address String The voter address
 * returns List
 **/
exports.apiV1GovVoterAddressVotesGET = function(address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "voterAddress" : "voterAddress",
  "vote" : "yay",
  "proposalId" : "proposalId"
}, {
  "voterAddress" : "voterAddress",
  "vote" : "yay",
  "proposalId" : "proposalId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the bonds for an address
 *
 * address String The delegator address
 * page Integer Pagination parameter (optional)
 * returns inline_response_200_1
 **/
exports.apiV1PosBondAddressGET = function(address,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "amount" : "amount",
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    },
    "startEpoch" : "startEpoch",
    "status" : "active"
  }, {
    "amount" : "amount",
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    },
    "startEpoch" : "startEpoch",
    "status" : "active"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the bonds for an address, with merged amounts, regardless of the status
 *
 * address String The delegator address
 * page Integer Pagination parameter (optional)
 * returns inline_response_200_2
 **/
exports.apiV1PosMerged_bondsAddressGET = function(address,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "amount" : "amount",
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    }
  }, {
    "amount" : "amount",
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the unbonds for an an address with merged withdraw amounts
 *
 * address String The delegator address
 * page Integer Pagination parameter (optional)
 * returns inline_response_200_3
 **/
exports.apiV1PosMerged_unbondsAddressGET = function(address,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "amount" : "amount",
    "withdrawEpoch" : "withdrawEpoch",
    "canWithdraw" : true,
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    },
    "withdrawTime" : "withdrawTime"
  }, {
    "amount" : "amount",
    "withdrawEpoch" : "withdrawEpoch",
    "canWithdraw" : true,
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    },
    "withdrawTime" : "withdrawTime"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the rewards for an address
 *
 * address String The delegator address
 * returns List
 **/
exports.apiV1PosRewardAddressGET = function(address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "amount" : "amount",
  "validator" : {
    "website" : "website",
    "address" : "address",
    "discordHandle" : "discordHandle",
    "validatorId" : "validatorId",
    "description" : "description",
    "avatar" : "avatar",
    "votingPower" : "votingPower",
    "name" : "name",
    "rank" : 0.8008281904610115,
    "commission" : "commission",
    "state" : "consensus",
    "email" : "email",
    "maxCommission" : "maxCommission"
  }
}, {
  "amount" : "amount",
  "validator" : {
    "website" : "website",
    "address" : "address",
    "discordHandle" : "discordHandle",
    "validatorId" : "validatorId",
    "description" : "description",
    "avatar" : "avatar",
    "votingPower" : "votingPower",
    "name" : "name",
    "rank" : 0.8008281904610115,
    "commission" : "commission",
    "state" : "consensus",
    "email" : "email",
    "maxCommission" : "maxCommission"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the unbonds for an an address
 *
 * address String The delegator address
 * page Integer Pagination parameter (optional)
 * returns inline_response_200_3
 **/
exports.apiV1PosUnbondAddressGET = function(address,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "amount" : "amount",
    "withdrawEpoch" : "withdrawEpoch",
    "canWithdraw" : true,
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    },
    "withdrawTime" : "withdrawTime"
  }, {
    "amount" : "amount",
    "withdrawEpoch" : "withdrawEpoch",
    "canWithdraw" : true,
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    },
    "withdrawTime" : "withdrawTime"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all validators, non paginated
 *
 * state List Validator status parameter (optional)
 * returns List
 **/
exports.apiV1PosValidatorAllGET = function(state) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "website" : "website",
  "address" : "address",
  "discordHandle" : "discordHandle",
  "validatorId" : "validatorId",
  "description" : "description",
  "avatar" : "avatar",
  "votingPower" : "votingPower",
  "name" : "name",
  "rank" : 0.8008281904610115,
  "commission" : "commission",
  "state" : "consensus",
  "email" : "email",
  "maxCommission" : "maxCommission"
}, {
  "website" : "website",
  "address" : "address",
  "discordHandle" : "discordHandle",
  "validatorId" : "validatorId",
  "description" : "description",
  "avatar" : "avatar",
  "votingPower" : "votingPower",
  "name" : "name",
  "rank" : 0.8008281904610115,
  "commission" : "commission",
  "state" : "consensus",
  "email" : "email",
  "maxCommission" : "maxCommission"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all validators, paginated
 *
 * page Integer Pagination parameter (optional)
 * state List Validator status parameter (optional)
 * sortField String Sort field (optional)
 * sortOrder String Sort order - ignored if sortField is not provided (optional)
 * returns inline_response_200
 **/
exports.apiV1PosValidatorGET = function(page,state,sortField,sortOrder) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "website" : "website",
    "address" : "address",
    "discordHandle" : "discordHandle",
    "validatorId" : "validatorId",
    "description" : "description",
    "avatar" : "avatar",
    "votingPower" : "votingPower",
    "name" : "name",
    "rank" : 0.8008281904610115,
    "commission" : "commission",
    "state" : "consensus",
    "email" : "email",
    "maxCommission" : "maxCommission"
  }, {
    "website" : "website",
    "address" : "address",
    "discordHandle" : "discordHandle",
    "validatorId" : "validatorId",
    "description" : "description",
    "avatar" : "avatar",
    "votingPower" : "votingPower",
    "name" : "name",
    "rank" : 0.8008281904610115,
    "commission" : "commission",
    "state" : "consensus",
    "email" : "email",
    "maxCommission" : "maxCommission"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get the total voting power
 *
 * returns VotingPower
 **/
exports.apiV1PosVoting_powerGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalVotingPower" : "totalVotingPower"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all the withdraws for an address at a specific epoch
 *
 * address String The delegator address
 * epoch Integer The epoch (optional)
 * page Integer Pagination parameter (optional)
 * returns inline_response_200_4
 **/
exports.apiV1PosWithdrawAddressGET = function(address,epoch,page) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "pagination" : {
    "totalItems" : "totalItems",
    "perPage" : "perPage",
    "totalPages" : "totalPages",
    "page" : "page"
  },
  "results" : [ {
    "amount" : "amount",
    "withdrawEpoch" : "withdrawEpoch",
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    }
  }, {
    "amount" : "amount",
    "withdrawEpoch" : "withdrawEpoch",
    "validator" : {
      "website" : "website",
      "address" : "address",
      "discordHandle" : "discordHandle",
      "validatorId" : "validatorId",
      "description" : "description",
      "avatar" : "avatar",
      "votingPower" : "votingPower",
      "name" : "name",
      "rank" : 0.8008281904610115,
      "commission" : "commission",
      "state" : "consensus",
      "email" : "email",
      "maxCommission" : "maxCommission"
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get revealed public key for an address if exists
 *
 * address String The address account
 * returns RevealedPk
 **/
exports.apiV1Revealed_public_keyAddressGET = function(address) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "publicKey" : "publicKey"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 *
 * no response value expected for this operation
 **/
exports.healthGET = function() {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

