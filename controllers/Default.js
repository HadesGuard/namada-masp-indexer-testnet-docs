'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.apiV1AccountAddressGET = function apiV1AccountAddressGET (req, res, next, address) {
  Default.apiV1AccountAddressGET(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainBlockLatestGET = function apiV1ChainBlockLatestGET (req, res, next) {
  Default.apiV1ChainBlockLatestGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainEpochLatestGET = function apiV1ChainEpochLatestGET (req, res, next) {
  Default.apiV1ChainEpochLatestGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainInnerTx_idGET = function apiV1ChainInnerTx_idGET (req, res, next, tx_id) {
  Default.apiV1ChainInnerTx_idGET(tx_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainParametersGET = function apiV1ChainParametersGET (req, res, next) {
  Default.apiV1ChainParametersGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainRpc_urlGET = function apiV1ChainRpc_urlGET (req, res, next) {
  Default.apiV1ChainRpc_urlGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainTokenGET = function apiV1ChainTokenGET (req, res, next) {
  Default.apiV1ChainTokenGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1ChainWrapperTx_idGET = function apiV1ChainWrapperTx_idGET (req, res, next, tx_id) {
  Default.apiV1ChainWrapperTx_idGET(tx_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1CrawlersTimestampsGET = function apiV1CrawlersTimestampsGET (req, res, next, crawler_names) {
  Default.apiV1CrawlersTimestampsGET(crawler_names)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GasTokenGET = function apiV1GasTokenGET (req, res, next, token) {
  Default.apiV1GasTokenGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Gas_priceTokenGET = function apiV1Gas_priceTokenGET (req, res, next, token) {
  Default.apiV1Gas_priceTokenGET(token)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GovProposalAllGET = function apiV1GovProposalAllGET (req, res, next, status, kind, pattern) {
  Default.apiV1GovProposalAllGET(status, kind, pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GovProposalGET = function apiV1GovProposalGET (req, res, next, page, status, kind, pattern) {
  Default.apiV1GovProposalGET(page, status, kind, pattern)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GovProposalIdGET = function apiV1GovProposalIdGET (req, res, next, id) {
  Default.apiV1GovProposalIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GovProposalIdVotesAddressGET = function apiV1GovProposalIdVotesAddressGET (req, res, next, id, address) {
  Default.apiV1GovProposalIdVotesAddressGET(id, address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GovProposalIdVotesGET = function apiV1GovProposalIdVotesGET (req, res, next, id) {
  Default.apiV1GovProposalIdVotesGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1GovVoterAddressVotesGET = function apiV1GovVoterAddressVotesGET (req, res, next, address) {
  Default.apiV1GovVoterAddressVotesGET(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosBondAddressGET = function apiV1PosBondAddressGET (req, res, next, address, page) {
  Default.apiV1PosBondAddressGET(address, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosMerged_bondsAddressGET = function apiV1PosMerged_bondsAddressGET (req, res, next, address, page) {
  Default.apiV1PosMerged_bondsAddressGET(address, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosMerged_unbondsAddressGET = function apiV1PosMerged_unbondsAddressGET (req, res, next, address, page) {
  Default.apiV1PosMerged_unbondsAddressGET(address, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosRewardAddressGET = function apiV1PosRewardAddressGET (req, res, next, address) {
  Default.apiV1PosRewardAddressGET(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosUnbondAddressGET = function apiV1PosUnbondAddressGET (req, res, next, address, page) {
  Default.apiV1PosUnbondAddressGET(address, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosValidatorAllGET = function apiV1PosValidatorAllGET (req, res, next, state) {
  Default.apiV1PosValidatorAllGET(state)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosValidatorGET = function apiV1PosValidatorGET (req, res, next, page, state, sortField, sortOrder) {
  Default.apiV1PosValidatorGET(page, state, sortField, sortOrder)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosVoting_powerGET = function apiV1PosVoting_powerGET (req, res, next) {
  Default.apiV1PosVoting_powerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1PosWithdrawAddressGET = function apiV1PosWithdrawAddressGET (req, res, next, address, epoch, page) {
  Default.apiV1PosWithdrawAddressGET(address, epoch, page)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.apiV1Revealed_public_keyAddressGET = function apiV1Revealed_public_keyAddressGET (req, res, next, address) {
  Default.apiV1Revealed_public_keyAddressGET(address)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.healthGET = function healthGET (req, res, next) {
  Default.healthGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
