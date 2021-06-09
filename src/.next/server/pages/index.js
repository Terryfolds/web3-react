module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./connectors.ts":
/*!***********************!*\
  !*** ./connectors.ts ***!
  \***********************/
/*! exports provided: injected, bscConnector, network, walletconnect, walletlink, ledger, trezor, lattice, frame, authereum, fortmatic, magic, portis, torus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injected", function() { return injected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bscConnector", function() { return bscConnector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "network", function() { return network; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletconnect", function() { return walletconnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "walletlink", function() { return walletlink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ledger", function() { return ledger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trezor", function() { return trezor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lattice", function() { return lattice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "frame", function() { return frame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authereum", function() { return authereum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fortmatic", function() { return fortmatic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "magic", function() { return magic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "portis", function() { return portis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "torus", function() { return torus; });
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @binance-chain/bsc-connector */ "@binance-chain/bsc-connector");
/* harmony import */ var _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/network-connector */ "@web3-react/network-connector");
/* harmony import */ var _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/walletlink-connector */ "@web3-react/walletlink-connector");
/* harmony import */ var _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @web3-react/ledger-connector */ "@web3-react/ledger-connector");
/* harmony import */ var _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/trezor-connector */ "@web3-react/trezor-connector");
/* harmony import */ var _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @web3-react/lattice-connector */ "@web3-react/lattice-connector");
/* harmony import */ var _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @web3-react/authereum-connector */ "@web3-react/authereum-connector");
/* harmony import */ var _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @web3-react/fortmatic-connector */ "@web3-react/fortmatic-connector");
/* harmony import */ var _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @web3-react/magic-connector */ "@web3-react/magic-connector");
/* harmony import */ var _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @web3-react/portis-connector */ "@web3-react/portis-connector");
/* harmony import */ var _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @web3-react/torus-connector */ "@web3-react/torus-connector");
/* harmony import */ var _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13__);














const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/84842078b09946638c03157f83405213",
  4: "https://rinkeby.infura.io/v3/84842078b09946638c03157f83405213"
};
const injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_0__["InjectedConnector"]({
  supportedChainIds: [56, 97]
});
const bscConnector = new _binance_chain_bsc_connector__WEBPACK_IMPORTED_MODULE_1__["BscConnector"]({
  supportedChainIds: [56]
});
const network = new _web3_react_network_connector__WEBPACK_IMPORTED_MODULE_2__["NetworkConnector"]({
  urls: {
    1: RPC_URLS[1],
    4: RPC_URLS[4]
  },
  defaultChainId: 1
});
const walletconnect = new _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__["WalletConnectConnector"]({
  rpc: {
    1: RPC_URLS[1]
  },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});
const walletlink = new _web3_react_walletlink_connector__WEBPACK_IMPORTED_MODULE_4__["WalletLinkConnector"]({
  url: RPC_URLS[1],
  appName: 'web3-react example'
});
const ledger = new _web3_react_ledger_connector__WEBPACK_IMPORTED_MODULE_5__["LedgerConnector"]({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL
});
const trezor = new _web3_react_trezor_connector__WEBPACK_IMPORTED_MODULE_6__["TrezorConnector"]({
  chainId: 1,
  url: RPC_URLS[1],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: 'dummy@abc.xyz',
  manifestAppUrl: 'http://localhost:1234'
});
const lattice = new _web3_react_lattice_connector__WEBPACK_IMPORTED_MODULE_7__["LatticeConnector"]({
  chainId: 4,
  appName: 'web3-react',
  url: RPC_URLS[4]
});
const frame = new _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_8__["FrameConnector"]({
  supportedChainIds: [1]
});
const authereum = new _web3_react_authereum_connector__WEBPACK_IMPORTED_MODULE_9__["AuthereumConnector"]({
  chainId: 42
});
const fortmatic = new _web3_react_fortmatic_connector__WEBPACK_IMPORTED_MODULE_10__["FortmaticConnector"]({
  apiKey: "pk_test_A6260FCBAA2EBDFB",
  chainId: 4
});
const magic = new _web3_react_magic_connector__WEBPACK_IMPORTED_MODULE_11__["MagicConnector"]({
  apiKey: "pk_test_398B82F5F0E88874",
  chainId: 4,
  email: 'hello@example.org'
});
const portis = new _web3_react_portis_connector__WEBPACK_IMPORTED_MODULE_12__["PortisConnector"]({
  dAppId: "e9be171c-2b7f-4ff0-8db9-327707511ee2",
  networks: [1, 100]
});
const torus = new _web3_react_torus_connector__WEBPACK_IMPORTED_MODULE_13__["TorusConnector"]({
  chainId: 1
});

/***/ }),

/***/ "./hooks.ts":
/*!******************!*\
  !*** ./hooks.ts ***!
  \******************/
/*! exports provided: useEagerConnect, useInactiveListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useEagerConnect", function() { return useEagerConnect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInactiveListener", function() { return useInactiveListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./connectors */ "./connectors.ts");



function useEagerConnect() {
  const {
    activate,
    active
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    0: tried,
    1: setTried
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _connectors__WEBPACK_IMPORTED_MODULE_2__["injected"].isAuthorized().then(isAuthorized => {
      if (isAuthorized) {
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"], undefined, true).catch(() => {
          setTried(true);
        });
      } else {
        setTried(true);
      }
    });
  }, []); // intentionally only running on mount (make sure it's only mounted once :))
  // if the connection worked, wait until we get confirmation of that to flip the flag

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!tried && active) {
      setTried(true);
    }
  }, [tried, active]);
  return tried;
}
function useInactiveListener(suppress = false) {
  const {
    active,
    error,
    activate
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const {
      ethereum
    } = window;

    if (ethereum && ethereum.on && !active && !error && !suppress) {
      const handleConnect = () => {
        console.log("Handling 'connect' event");
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleChainChanged = chainId => {
        console.log("Handling 'chainChanged' event with payload", chainId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      const handleAccountsChanged = accounts => {
        console.log("Handling 'accountsChanged' event with payload", accounts);

        if (accounts.length > 0) {
          activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
        }
      };

      const handleNetworkChanged = networkId => {
        console.log("Handling 'networkChanged' event with payload", networkId);
        activate(_connectors__WEBPACK_IMPORTED_MODULE_2__["injected"]);
      };

      ethereum.on('connect', handleConnect);
      ethereum.on('chainChanged', handleChainChanged);
      ethereum.on('accountsChanged', handleAccountsChanged);
      ethereum.on('networkChanged', handleNetworkChanged);
      return () => {
        if (ethereum.removeListener) {
          ethereum.removeListener('connect', handleConnect);
          ethereum.removeListener('chainChanged', handleChainChanged);
          ethereum.removeListener('accountsChanged', handleAccountsChanged);
          ethereum.removeListener('networkChanged', handleNetworkChanged);
        }
      };
    }
  }, [active, error, suppress, activate]);
}

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @web3-react/core */ "@web3-react/core");
/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/injected-connector */ "@web3-react/injected-connector");
/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/walletconnect-connector */ "@web3-react/walletconnect-connector");
/* harmony import */ var _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @web3-react/frame-connector */ "@web3-react/frame-connector");
/* harmony import */ var _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ethersproject/providers */ "@ethersproject/providers");
/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ethersproject/units */ "@ethersproject/units");
/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks */ "./hooks.ts");
/* harmony import */ var _connectors__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../connectors */ "./connectors.ts");
var _jsxFileName = "C:\\Users\\jesh\\Desktop\\000O1T\\reward-checker\\src\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var ConnectorNames;

(function (ConnectorNames) {
  ConnectorNames["Injected"] = "CONNECT";
})(ConnectorNames || (ConnectorNames = {}));

const connectorsByName = {
  [ConnectorNames.Injected]: _connectors__WEBPACK_IMPORTED_MODULE_8__["injected"]
};

function getErrorMessage(error) {
  if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["NoEthereumProviderError"]) {
    return 'No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.';
  } else if (error instanceof _web3_react_core__WEBPACK_IMPORTED_MODULE_1__["UnsupportedChainIdError"]) {
    return "You're connected to an unsupported network.";
  } else if (error instanceof _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_2__["UserRejectedRequestError"] || error instanceof _web3_react_walletconnect_connector__WEBPACK_IMPORTED_MODULE_3__["UserRejectedRequestError"] || error instanceof _web3_react_frame_connector__WEBPACK_IMPORTED_MODULE_4__["UserRejectedRequestError"]) {
    return 'Please authorize this website to access your Ethereum account.';
  } else {
    console.error(error);
    return 'An unknown error occurred. Check the console for more details.';
  }
}

function getLibrary(provider) {
  const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_5__["Web3Provider"](provider);
  library.pollingInterval = 12000;
  return library;
}

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["Web3ReactProvider"], {
    getLibrary: getLibrary,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, __jsx(App, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }));
});

function Account() {
  const {
    account
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, "Account"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, account === null ? '-' : account ? `${account.substring(0, 6)}...${account.substring(account.length - 4)}` : ''));
}

function Balance() {
  const {
    account,
    library,
    chainId
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const [balance, setBalance] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (!!account && !!library) {
      let stale = false;
      library.getBalance(account).then(balance => {
        if (!stale) {
          setBalance(balance);
        }
      }).catch(() => {
        if (!stale) {
          setBalance(null);
        }
      });
      return () => {
        stale = true;
        setBalance(undefined);
      };
    }
  }, [account, library, chainId]); // ensures refresh if referential identity of library doesn't change across chainIds

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }
  }, "BNB Balance"), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, balance === null ? 'Error' : balance ? `${Object(_ethersproject_units__WEBPACK_IMPORTED_MODULE_6__["formatEther"])(balance).substring(0, 8)}` : ''));
}

function UserAccount() {
  const {
    active,
    error
  } = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h3", {
    style: {
      display: 'grid',
      gridGap: '.5rem',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '20rem',
      lineHeight: '2rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, __jsx(Account, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }), __jsx(Balance, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  })));
}

function App() {
  const context = Object(_web3_react_core__WEBPACK_IMPORTED_MODULE_1__["useWeb3React"])();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error
  } = context; // handle logic to recognize the connector currently being activated

  const [activatingConnector, setActivatingConnector] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState();
  react__WEBPACK_IMPORTED_MODULE_0___default.a.useEffect(() => {
    if (activatingConnector && activatingConnector === connector) {
      setActivatingConnector(undefined);
    }
  }, [activatingConnector, connector]); // handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already

  const triedEager = Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useEagerConnect"])(); // handle logic to connect in reaction to certain events on the injected ethereum provider, if it exists

  Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useInactiveListener"])(!triedEager || !!activatingConnector);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    style: {
      display: 'grid',
      gridGap: '1rem',
      gridTemplateColumns: '1fr',
      maxWidth: '15rem',
      margin: 'auto'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 7
    }
  }, Object.keys(connectorsByName).map(name => {
    const currentConnector = connectorsByName[name];
    const activating = currentConnector === activatingConnector;
    const connected = currentConnector === connector;
    const disabled = !triedEager || !!activatingConnector || connected || !!error;
    return __jsx("button", {
      style: {
        background: '#07c7ff',
        display: connected ? 'none' : 'unset',
        borderColor: activating ? 'orange' : connected ? '#07c7ff' : 'unset',
        cursor: disabled ? 'unset' : 'pointer',
        position: 'relative'
      },
      disabled: disabled,
      key: name,
      onClick: () => {
        setActivatingConnector(currentConnector);
        activate(connectorsByName[name]);
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }
    }, __jsx("div", {
      style: {
        position: 'absolute',
        top: '0',
        left: '0',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        color: 'black',
        margin: '0'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 15
      }
    }), name);
  }), (active || error) && __jsx("button", {
    style: {
      height: '3rem',
      margin: '0',
      borderRadius: '1rem',
      borderColor: 'none',
      cursor: 'pointer'
    },
    onClick: () => {
      deactivate();
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }, "DISCONNECT"), !!error && __jsx("h4", {
    style: {
      marginTop: '1rem',
      marginBottom: '0'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 23
    }
  }, getErrorMessage(error))), __jsx(UserAccount, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "@binance-chain/bsc-connector":
/*!***********************************************!*\
  !*** external "@binance-chain/bsc-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@binance-chain/bsc-connector");

/***/ }),

/***/ "@ethersproject/providers":
/*!*******************************************!*\
  !*** external "@ethersproject/providers" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/providers");

/***/ }),

/***/ "@ethersproject/units":
/*!***************************************!*\
  !*** external "@ethersproject/units" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ethersproject/units");

/***/ }),

/***/ "@web3-react/authereum-connector":
/*!**************************************************!*\
  !*** external "@web3-react/authereum-connector" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/authereum-connector");

/***/ }),

/***/ "@web3-react/core":
/*!***********************************!*\
  !*** external "@web3-react/core" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/core");

/***/ }),

/***/ "@web3-react/fortmatic-connector":
/*!**************************************************!*\
  !*** external "@web3-react/fortmatic-connector" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/fortmatic-connector");

/***/ }),

/***/ "@web3-react/frame-connector":
/*!**********************************************!*\
  !*** external "@web3-react/frame-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/frame-connector");

/***/ }),

/***/ "@web3-react/injected-connector":
/*!*************************************************!*\
  !*** external "@web3-react/injected-connector" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/injected-connector");

/***/ }),

/***/ "@web3-react/lattice-connector":
/*!************************************************!*\
  !*** external "@web3-react/lattice-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/lattice-connector");

/***/ }),

/***/ "@web3-react/ledger-connector":
/*!***********************************************!*\
  !*** external "@web3-react/ledger-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/ledger-connector");

/***/ }),

/***/ "@web3-react/magic-connector":
/*!**********************************************!*\
  !*** external "@web3-react/magic-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/magic-connector");

/***/ }),

/***/ "@web3-react/network-connector":
/*!************************************************!*\
  !*** external "@web3-react/network-connector" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/network-connector");

/***/ }),

/***/ "@web3-react/portis-connector":
/*!***********************************************!*\
  !*** external "@web3-react/portis-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/portis-connector");

/***/ }),

/***/ "@web3-react/torus-connector":
/*!**********************************************!*\
  !*** external "@web3-react/torus-connector" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/torus-connector");

/***/ }),

/***/ "@web3-react/trezor-connector":
/*!***********************************************!*\
  !*** external "@web3-react/trezor-connector" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/trezor-connector");

/***/ }),

/***/ "@web3-react/walletconnect-connector":
/*!******************************************************!*\
  !*** external "@web3-react/walletconnect-connector" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletconnect-connector");

/***/ }),

/***/ "@web3-react/walletlink-connector":
/*!***************************************************!*\
  !*** external "@web3-react/walletlink-connector" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@web3-react/walletlink-connector");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29ubmVjdG9ycy50cyIsIndlYnBhY2s6Ly8vLi9ob29rcy50cyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGJpbmFuY2UtY2hhaW4vYnNjLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBldGhlcnNwcm9qZWN0L3VuaXRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvYXV0aGVyZXVtLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9mb3J0bWF0aWMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbGF0dGljZS1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9sZWRnZXItY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvbmV0d29yay1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAd2ViMy1yZWFjdC9wb3J0aXMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3QvdHJlem9yLWNvbm5lY3RvclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkB3ZWIzLXJlYWN0L3dhbGxldGNvbm5lY3QtY29ubmVjdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlBPTExJTkdfSU5URVJWQUwiLCJSUENfVVJMUyIsInByb2Nlc3MiLCJSUENfVVJMXzQiLCJpbmplY3RlZCIsIkluamVjdGVkQ29ubmVjdG9yIiwic3VwcG9ydGVkQ2hhaW5JZHMiLCJic2NDb25uZWN0b3IiLCJCc2NDb25uZWN0b3IiLCJuZXR3b3JrIiwiTmV0d29ya0Nvbm5lY3RvciIsInVybHMiLCJkZWZhdWx0Q2hhaW5JZCIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0Q29ubmVjdG9yIiwicnBjIiwicXJjb2RlIiwicG9sbGluZ0ludGVydmFsIiwid2FsbGV0bGluayIsIldhbGxldExpbmtDb25uZWN0b3IiLCJ1cmwiLCJhcHBOYW1lIiwibGVkZ2VyIiwiTGVkZ2VyQ29ubmVjdG9yIiwiY2hhaW5JZCIsInRyZXpvciIsIlRyZXpvckNvbm5lY3RvciIsIm1hbmlmZXN0RW1haWwiLCJtYW5pZmVzdEFwcFVybCIsImxhdHRpY2UiLCJMYXR0aWNlQ29ubmVjdG9yIiwiZnJhbWUiLCJGcmFtZUNvbm5lY3RvciIsImF1dGhlcmV1bSIsIkF1dGhlcmV1bUNvbm5lY3RvciIsImZvcnRtYXRpYyIsIkZvcnRtYXRpY0Nvbm5lY3RvciIsImFwaUtleSIsIm1hZ2ljIiwiTWFnaWNDb25uZWN0b3IiLCJlbWFpbCIsInBvcnRpcyIsIlBvcnRpc0Nvbm5lY3RvciIsImRBcHBJZCIsIm5ldHdvcmtzIiwidG9ydXMiLCJUb3J1c0Nvbm5lY3RvciIsInVzZUVhZ2VyQ29ubmVjdCIsImFjdGl2YXRlIiwiYWN0aXZlIiwidXNlV2ViM1JlYWN0IiwidHJpZWQiLCJzZXRUcmllZCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiaXNBdXRob3JpemVkIiwidGhlbiIsInVuZGVmaW5lZCIsImNhdGNoIiwidXNlSW5hY3RpdmVMaXN0ZW5lciIsInN1cHByZXNzIiwiZXJyb3IiLCJldGhlcmV1bSIsIndpbmRvdyIsIm9uIiwiaGFuZGxlQ29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVDaGFpbkNoYW5nZWQiLCJoYW5kbGVBY2NvdW50c0NoYW5nZWQiLCJhY2NvdW50cyIsImxlbmd0aCIsImhhbmRsZU5ldHdvcmtDaGFuZ2VkIiwibmV0d29ya0lkIiwicmVtb3ZlTGlzdGVuZXIiLCJDb25uZWN0b3JOYW1lcyIsImNvbm5lY3RvcnNCeU5hbWUiLCJJbmplY3RlZCIsImdldEVycm9yTWVzc2FnZSIsIk5vRXRoZXJldW1Qcm92aWRlckVycm9yIiwiVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZCIsIlVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QiLCJVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZSIsImdldExpYnJhcnkiLCJwcm92aWRlciIsImxpYnJhcnkiLCJXZWIzUHJvdmlkZXIiLCJBY2NvdW50IiwiYWNjb3VudCIsInN1YnN0cmluZyIsIkJhbGFuY2UiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsIlJlYWN0Iiwic3RhbGUiLCJnZXRCYWxhbmNlIiwiZm9ybWF0RXRoZXIiLCJVc2VyQWNjb3VudCIsImRpc3BsYXkiLCJncmlkR2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIm1heFdpZHRoIiwibGluZUhlaWdodCIsIm1hcmdpbiIsIkFwcCIsImNvbnRleHQiLCJjb25uZWN0b3IiLCJkZWFjdGl2YXRlIiwiYWN0aXZhdGluZ0Nvbm5lY3RvciIsInNldEFjdGl2YXRpbmdDb25uZWN0b3IiLCJ0cmllZEVhZ2VyIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsIm5hbWUiLCJjdXJyZW50Q29ubmVjdG9yIiwiYWN0aXZhdGluZyIsImNvbm5lY3RlZCIsImRpc2FibGVkIiwiYmFja2dyb3VuZCIsImJvcmRlckNvbG9yIiwiY3Vyc29yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYm9yZGVyUmFkaXVzIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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REY7QUErQkQsR0FyQ0EsQ0FUSCxFQStDRyxDQUFDbEUsTUFBTSxJQUFJWSxLQUFYLEtBQ0c7QUFDRSxTQUFLLEVBQUU7QUFDTGlFLFlBQU0sRUFBRSxNQURIO0FBRUx0QixZQUFNLEVBQUUsR0FGSDtBQUdMeUIsa0JBQVksRUFBRSxNQUhUO0FBSUxSLGlCQUFXLEVBQUUsTUFKUjtBQUtMQyxZQUFNLEVBQUU7QUFMSCxLQURUO0FBUUUsV0FBTyxFQUFFLE1BQU07QUFDYmQsZ0JBQVU7QUFDWCxLQVZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBaEROLEVBZ0VLLENBQUMsQ0FBQy9DLEtBQUYsSUFBVztBQUFJLFNBQUssRUFBRTtBQUFFcUUsZUFBUyxFQUFFLE1BQWI7QUFBcUJDLGtCQUFZLEVBQUU7QUFBbkMsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXNEckQsZUFBZSxDQUFDakIsS0FBRCxDQUFyRSxDQWhFaEIsQ0FERixFQW9FRSxNQUFDLFdBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBFRixDQURGO0FBeUVELEM7Ozs7Ozs7Ozs7O0FDOU5ELHlEOzs7Ozs7Ozs7OztBQ0FBLHFEOzs7Ozs7Ozs7OztBQ0FBLGlEOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLDREOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLDZEOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgQnNjQ29ubmVjdG9yIH0gZnJvbSAnQGJpbmFuY2UtY2hhaW4vYnNjLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgTmV0d29ya0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3InXHJcbmltcG9ydCB7IFdhbGxldExpbmtDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRsaW5rLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgTGVkZ2VyQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvbGVkZ2VyLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVHJlem9yQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvdHJlem9yLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgTGF0dGljZUNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBGcmFtZUNvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2ZyYW1lLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgQXV0aGVyZXVtQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvYXV0aGVyZXVtLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgRm9ydG1hdGljQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgTWFnaWNDb25uZWN0b3IgfSBmcm9tICdAd2ViMy1yZWFjdC9tYWdpYy1jb25uZWN0b3InXHJcbmltcG9ydCB7IFBvcnRpc0Nvbm5lY3RvciB9IGZyb20gJ0B3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3InXHJcbmltcG9ydCB7IFRvcnVzQ29ubmVjdG9yIH0gZnJvbSAnQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yJ1xyXG5cclxuY29uc3QgUE9MTElOR19JTlRFUlZBTCA9IDEyMDAwXHJcbmNvbnN0IFJQQ19VUkxTOiB7IFtjaGFpbklkOiBudW1iZXJdOiBzdHJpbmcgfSA9IHtcclxuICAxOiBwcm9jZXNzLmVudi5SUENfVVJMXzEgYXMgc3RyaW5nLFxyXG4gIDQ6IHByb2Nlc3MuZW52LlJQQ19VUkxfNCBhcyBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFs1NiwgOTddIH0pXHJcblxyXG5leHBvcnQgY29uc3QgYnNjQ29ubmVjdG9yID0gbmV3IEJzY0Nvbm5lY3Rvcih7IHN1cHBvcnRlZENoYWluSWRzOiBbNTZdIH0pXHJcblxyXG5leHBvcnQgY29uc3QgbmV0d29yayA9IG5ldyBOZXR3b3JrQ29ubmVjdG9yKHtcclxuICB1cmxzOiB7IDE6IFJQQ19VUkxTWzFdLCA0OiBSUENfVVJMU1s0XSB9LFxyXG4gIGRlZmF1bHRDaGFpbklkOiAxXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgd2FsbGV0Y29ubmVjdCA9IG5ldyBXYWxsZXRDb25uZWN0Q29ubmVjdG9yKHtcclxuICBycGM6IHsgMTogUlBDX1VSTFNbMV0gfSxcclxuICBxcmNvZGU6IHRydWUsXHJcbiAgcG9sbGluZ0ludGVydmFsOiBQT0xMSU5HX0lOVEVSVkFMXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3Qgd2FsbGV0bGluayA9IG5ldyBXYWxsZXRMaW5rQ29ubmVjdG9yKHtcclxuICB1cmw6IFJQQ19VUkxTWzFdLFxyXG4gIGFwcE5hbWU6ICd3ZWIzLXJlYWN0IGV4YW1wbGUnXHJcbn0pXHJcblxyXG5leHBvcnQgY29uc3QgbGVkZ2VyID0gbmV3IExlZGdlckNvbm5lY3Rvcih7IGNoYWluSWQ6IDEsIHVybDogUlBDX1VSTFNbMV0sIHBvbGxpbmdJbnRlcnZhbDogUE9MTElOR19JTlRFUlZBTCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRyZXpvciA9IG5ldyBUcmV6b3JDb25uZWN0b3Ioe1xyXG4gIGNoYWluSWQ6IDEsXHJcbiAgdXJsOiBSUENfVVJMU1sxXSxcclxuICBwb2xsaW5nSW50ZXJ2YWw6IFBPTExJTkdfSU5URVJWQUwsXHJcbiAgbWFuaWZlc3RFbWFpbDogJ2R1bW15QGFiYy54eXonLFxyXG4gIG1hbmlmZXN0QXBwVXJsOiAnaHR0cDovL2xvY2FsaG9zdDoxMjM0J1xyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGxhdHRpY2UgPSBuZXcgTGF0dGljZUNvbm5lY3Rvcih7XHJcbiAgY2hhaW5JZDogNCxcclxuICBhcHBOYW1lOiAnd2ViMy1yZWFjdCcsXHJcbiAgdXJsOiBSUENfVVJMU1s0XVxyXG59KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZyYW1lID0gbmV3IEZyYW1lQ29ubmVjdG9yKHsgc3VwcG9ydGVkQ2hhaW5JZHM6IFsxXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhlcmV1bSA9IG5ldyBBdXRoZXJldW1Db25uZWN0b3IoeyBjaGFpbklkOiA0MiB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGZvcnRtYXRpYyA9IG5ldyBGb3J0bWF0aWNDb25uZWN0b3IoeyBhcGlLZXk6IHByb2Nlc3MuZW52LkZPUlRNQVRJQ19BUElfS0VZIGFzIHN0cmluZywgY2hhaW5JZDogNCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IG1hZ2ljID0gbmV3IE1hZ2ljQ29ubmVjdG9yKHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk1BR0lDX0FQSV9LRVkgYXMgc3RyaW5nLFxyXG4gIGNoYWluSWQ6IDQsXHJcbiAgZW1haWw6ICdoZWxsb0BleGFtcGxlLm9yZydcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCBwb3J0aXMgPSBuZXcgUG9ydGlzQ29ubmVjdG9yKHsgZEFwcElkOiBwcm9jZXNzLmVudi5QT1JUSVNfREFQUF9JRCBhcyBzdHJpbmcsIG5ldHdvcmtzOiBbMSwgMTAwXSB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IHRvcnVzID0gbmV3IFRvcnVzQ29ubmVjdG9yKHsgY2hhaW5JZDogMSB9KVxyXG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnXHJcblxyXG5pbXBvcnQgeyBpbmplY3RlZCB9IGZyb20gJy4vY29ubmVjdG9ycydcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VFYWdlckNvbm5lY3QoKSB7XHJcbiAgY29uc3QgeyBhY3RpdmF0ZSwgYWN0aXZlIH0gPSB1c2VXZWIzUmVhY3QoKVxyXG5cclxuICBjb25zdCBbdHJpZWQsIHNldFRyaWVkXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaW5qZWN0ZWQuaXNBdXRob3JpemVkKCkudGhlbigoaXNBdXRob3JpemVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgIGlmIChpc0F1dGhvcml6ZWQpIHtcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZCwgdW5kZWZpbmVkLCB0cnVlKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBzZXRUcmllZCh0cnVlKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0VHJpZWQodHJ1ZSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9LCBbXSkgLy8gaW50ZW50aW9uYWxseSBvbmx5IHJ1bm5pbmcgb24gbW91bnQgKG1ha2Ugc3VyZSBpdCdzIG9ubHkgbW91bnRlZCBvbmNlIDopKVxyXG5cclxuICAvLyBpZiB0aGUgY29ubmVjdGlvbiB3b3JrZWQsIHdhaXQgdW50aWwgd2UgZ2V0IGNvbmZpcm1hdGlvbiBvZiB0aGF0IHRvIGZsaXAgdGhlIGZsYWdcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCF0cmllZCAmJiBhY3RpdmUpIHtcclxuICAgICAgc2V0VHJpZWQodHJ1ZSlcclxuICAgIH1cclxuICB9LCBbdHJpZWQsIGFjdGl2ZV0pXHJcblxyXG4gIHJldHVybiB0cmllZFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5hY3RpdmVMaXN0ZW5lcihzdXBwcmVzczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgY29uc3QgeyBhY3RpdmUsIGVycm9yLCBhY3RpdmF0ZSB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpOiBhbnkgPT4ge1xyXG4gICAgY29uc3QgeyBldGhlcmV1bSB9ID0gd2luZG93IGFzIGFueVxyXG4gICAgaWYgKGV0aGVyZXVtICYmIGV0aGVyZXVtLm9uICYmICFhY3RpdmUgJiYgIWVycm9yICYmICFzdXBwcmVzcykge1xyXG4gICAgICBjb25zdCBoYW5kbGVDb25uZWN0ID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2Nvbm5lY3QnIGV2ZW50XCIpXHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlQ2hhaW5DaGFuZ2VkID0gKGNoYWluSWQ6IHN0cmluZyB8IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2NoYWluQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIGNoYWluSWQpXHJcbiAgICAgICAgYWN0aXZhdGUoaW5qZWN0ZWQpXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlQWNjb3VudHNDaGFuZ2VkID0gKGFjY291bnRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiSGFuZGxpbmcgJ2FjY291bnRzQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIGFjY291bnRzKVxyXG4gICAgICAgIGlmIChhY2NvdW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgaGFuZGxlTmV0d29ya0NoYW5nZWQgPSAobmV0d29ya0lkOiBzdHJpbmcgfCBudW1iZXIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkhhbmRsaW5nICduZXR3b3JrQ2hhbmdlZCcgZXZlbnQgd2l0aCBwYXlsb2FkXCIsIG5ldHdvcmtJZClcclxuICAgICAgICBhY3RpdmF0ZShpbmplY3RlZClcclxuICAgICAgfVxyXG5cclxuICAgICAgZXRoZXJldW0ub24oJ2Nvbm5lY3QnLCBoYW5kbGVDb25uZWN0KVxyXG4gICAgICBldGhlcmV1bS5vbignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKVxyXG4gICAgICBldGhlcmV1bS5vbignYWNjb3VudHNDaGFuZ2VkJywgaGFuZGxlQWNjb3VudHNDaGFuZ2VkKVxyXG4gICAgICBldGhlcmV1bS5vbignbmV0d29ya0NoYW5nZWQnLCBoYW5kbGVOZXR3b3JrQ2hhbmdlZClcclxuXHJcbiAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKSB7XHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY29ubmVjdCcsIGhhbmRsZUNvbm5lY3QpXHJcbiAgICAgICAgICBldGhlcmV1bS5yZW1vdmVMaXN0ZW5lcignY2hhaW5DaGFuZ2VkJywgaGFuZGxlQ2hhaW5DaGFuZ2VkKVxyXG4gICAgICAgICAgZXRoZXJldW0ucmVtb3ZlTGlzdGVuZXIoJ2FjY291bnRzQ2hhbmdlZCcsIGhhbmRsZUFjY291bnRzQ2hhbmdlZClcclxuICAgICAgICAgIGV0aGVyZXVtLnJlbW92ZUxpc3RlbmVyKCduZXR3b3JrQ2hhbmdlZCcsIGhhbmRsZU5ldHdvcmtDaGFuZ2VkKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmUsIGVycm9yLCBzdXBwcmVzcywgYWN0aXZhdGVdKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgV2ViM1JlYWN0UHJvdmlkZXIsIHVzZVdlYjNSZWFjdCwgVW5zdXBwb3J0ZWRDaGFpbklkRXJyb3IgfSBmcm9tICdAd2ViMy1yZWFjdC9jb3JlJ1xyXG5pbXBvcnQge1xyXG4gIE5vRXRoZXJldW1Qcm92aWRlckVycm9yLFxyXG4gIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvciBhcyBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JJbmplY3RlZFxyXG59IGZyb20gJ0B3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvcldhbGxldENvbm5lY3QgfSBmcm9tICdAd2ViMy1yZWFjdC93YWxsZXRjb25uZWN0LWNvbm5lY3RvcidcclxuaW1wb3J0IHsgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yIGFzIFVzZXJSZWplY3RlZFJlcXVlc3RFcnJvckZyYW1lIH0gZnJvbSAnQHdlYjMtcmVhY3QvZnJhbWUtY29ubmVjdG9yJ1xyXG5pbXBvcnQgeyBXZWIzUHJvdmlkZXIgfSBmcm9tICdAZXRoZXJzcHJvamVjdC9wcm92aWRlcnMnXHJcbmltcG9ydCB7IGZvcm1hdEV0aGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvdW5pdHMnXHJcblxyXG5pbXBvcnQgeyB1c2VFYWdlckNvbm5lY3QsIHVzZUluYWN0aXZlTGlzdGVuZXIgfSBmcm9tICcuLi9ob29rcydcclxuaW1wb3J0IHtcclxuICBpbmplY3RlZFxyXG59IGZyb20gJy4uL2Nvbm5lY3RvcnMnXHJcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL1NwaW5uZXInXHJcblxyXG5lbnVtIENvbm5lY3Rvck5hbWVzIHtcclxuICBJbmplY3RlZCA9ICdDT05ORUNUJ1xyXG59XHJcblxyXG5jb25zdCBjb25uZWN0b3JzQnlOYW1lOiB7IFtjb25uZWN0b3JOYW1lIGluIENvbm5lY3Rvck5hbWVzXTogYW55IH0gPSB7XHJcbiAgW0Nvbm5lY3Rvck5hbWVzLkluamVjdGVkXTogaW5qZWN0ZWRcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yOiBFcnJvcikge1xyXG4gIGlmIChlcnJvciBpbnN0YW5jZW9mIE5vRXRoZXJldW1Qcm92aWRlckVycm9yKSB7XHJcbiAgICByZXR1cm4gJ05vIEV0aGVyZXVtIGJyb3dzZXIgZXh0ZW5zaW9uIGRldGVjdGVkLCBpbnN0YWxsIE1ldGFNYXNrIG9uIGRlc2t0b3Agb3IgdmlzaXQgZnJvbSBhIGRBcHAgYnJvd3NlciBvbiBtb2JpbGUuJ1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IgaW5zdGFuY2VvZiBVbnN1cHBvcnRlZENoYWluSWRFcnJvcikge1xyXG4gICAgcmV0dXJuIFwiWW91J3JlIGNvbm5lY3RlZCB0byBhbiB1bnN1cHBvcnRlZCBuZXR3b3JrLlwiXHJcbiAgfSBlbHNlIGlmIChcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9ySW5qZWN0ZWQgfHxcclxuICAgIGVycm9yIGluc3RhbmNlb2YgVXNlclJlamVjdGVkUmVxdWVzdEVycm9yV2FsbGV0Q29ubmVjdCB8fFxyXG4gICAgZXJyb3IgaW5zdGFuY2VvZiBVc2VyUmVqZWN0ZWRSZXF1ZXN0RXJyb3JGcmFtZVxyXG4gICkge1xyXG4gICAgcmV0dXJuICdQbGVhc2UgYXV0aG9yaXplIHRoaXMgd2Vic2l0ZSB0byBhY2Nlc3MgeW91ciBFdGhlcmV1bSBhY2NvdW50LidcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICAgIHJldHVybiAnQW4gdW5rbm93biBlcnJvciBvY2N1cnJlZC4gQ2hlY2sgdGhlIGNvbnNvbGUgZm9yIG1vcmUgZGV0YWlscy4nXHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyOiBhbnkpOiBXZWIzUHJvdmlkZXIge1xyXG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKVxyXG4gIGxpYnJhcnkucG9sbGluZ0ludGVydmFsID0gMTIwMDBcclxuICByZXR1cm4gbGlicmFyeVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxyXG4gICAgICA8QXBwIC8+XHJcbiAgICA8L1dlYjNSZWFjdFByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZnVuY3Rpb24gQWNjb3VudCgpIHtcclxuICBjb25zdCB7IGFjY291bnQgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5BY2NvdW50PC9zcGFuPlxyXG4gICAgICA8c3Bhbj5cclxuICAgICAgICB7YWNjb3VudCA9PT0gbnVsbFxyXG4gICAgICAgICAgPyAnLSdcclxuICAgICAgICAgIDogYWNjb3VudFxyXG4gICAgICAgICAgPyBgJHthY2NvdW50LnN1YnN0cmluZygwLCA2KX0uLi4ke2FjY291bnQuc3Vic3RyaW5nKGFjY291bnQubGVuZ3RoIC0gNCl9YFxyXG4gICAgICAgICAgOiAnJ31cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBCYWxhbmNlKCkge1xyXG4gIGNvbnN0IHsgYWNjb3VudCwgbGlicmFyeSwgY2hhaW5JZCB9ID0gdXNlV2ViM1JlYWN0KClcclxuXHJcbiAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gUmVhY3QudXNlU3RhdGUoKVxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKTogYW55ID0+IHtcclxuICAgIGlmICghIWFjY291bnQgJiYgISFsaWJyYXJ5KSB7XHJcbiAgICAgIGxldCBzdGFsZSA9IGZhbHNlXHJcblxyXG4gICAgICBsaWJyYXJ5XHJcbiAgICAgICAgLmdldEJhbGFuY2UoYWNjb3VudClcclxuICAgICAgICAudGhlbigoYmFsYW5jZTogYW55KSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UoYmFsYW5jZSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIXN0YWxlKSB7XHJcbiAgICAgICAgICAgIHNldEJhbGFuY2UobnVsbClcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICBzdGFsZSA9IHRydWVcclxuICAgICAgICBzZXRCYWxhbmNlKHVuZGVmaW5lZClcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFthY2NvdW50LCBsaWJyYXJ5LCBjaGFpbklkXSkgLy8gZW5zdXJlcyByZWZyZXNoIGlmIHJlZmVyZW50aWFsIGlkZW50aXR5IG9mIGxpYnJhcnkgZG9lc24ndCBjaGFuZ2UgYWNyb3NzIGNoYWluSWRzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8c3Bhbj5CTkIgQmFsYW5jZTwvc3Bhbj5cclxuICAgICAgPHNwYW4+e2JhbGFuY2UgPT09IG51bGwgPyAnRXJyb3InIDogYmFsYW5jZSA/IGAke2Zvcm1hdEV0aGVyKGJhbGFuY2UpLnN1YnN0cmluZygwLCA4KX1gIDogJyd9PC9zcGFuPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBVc2VyQWNjb3VudCgpIHtcclxuICBjb25zdCB7IGFjdGl2ZSwgZXJyb3IgfSA9IHVzZVdlYjNSZWFjdCgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8aDNcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgICAgICAgZ3JpZEdhcDogJy41cmVtJyxcclxuICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcxZnIgMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMjByZW0nLFxyXG4gICAgICAgICAgbGluZUhlaWdodDogJzJyZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgPEFjY291bnQgLz5cclxuICAgICAgICA8QmFsYW5jZSAvPlxyXG4gICAgICA8L2gzPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiBBcHAoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZVdlYjNSZWFjdDxXZWIzUHJvdmlkZXI+KClcclxuICBjb25zdCB7IGNvbm5lY3RvciwgbGlicmFyeSwgY2hhaW5JZCwgYWNjb3VudCwgYWN0aXZhdGUsIGRlYWN0aXZhdGUsIGFjdGl2ZSwgZXJyb3IgfSA9IGNvbnRleHRcclxuXHJcbiAgLy8gaGFuZGxlIGxvZ2ljIHRvIHJlY29nbml6ZSB0aGUgY29ubmVjdG9yIGN1cnJlbnRseSBiZWluZyBhY3RpdmF0ZWRcclxuICBjb25zdCBbYWN0aXZhdGluZ0Nvbm5lY3Rvciwgc2V0QWN0aXZhdGluZ0Nvbm5lY3Rvcl0gPSBSZWFjdC51c2VTdGF0ZTxhbnk+KClcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGFjdGl2YXRpbmdDb25uZWN0b3IgJiYgYWN0aXZhdGluZ0Nvbm5lY3RvciA9PT0gY29ubmVjdG9yKSB7XHJcbiAgICAgIHNldEFjdGl2YXRpbmdDb25uZWN0b3IodW5kZWZpbmVkKVxyXG4gICAgfVxyXG4gIH0sIFthY3RpdmF0aW5nQ29ubmVjdG9yLCBjb25uZWN0b3JdKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gZWFnZXJseSBjb25uZWN0IHRvIHRoZSBpbmplY3RlZCBldGhlcmV1bSBwcm92aWRlciwgaWYgaXQgZXhpc3RzIGFuZCBoYXMgZ3JhbnRlZCBhY2Nlc3MgYWxyZWFkeVxyXG4gIGNvbnN0IHRyaWVkRWFnZXIgPSB1c2VFYWdlckNvbm5lY3QoKVxyXG5cclxuICAvLyBoYW5kbGUgbG9naWMgdG8gY29ubmVjdCBpbiByZWFjdGlvbiB0byBjZXJ0YWluIGV2ZW50cyBvbiB0aGUgaW5qZWN0ZWQgZXRoZXJldW0gcHJvdmlkZXIsIGlmIGl0IGV4aXN0c1xyXG4gIHVzZUluYWN0aXZlTGlzdGVuZXIoIXRyaWVkRWFnZXIgfHwgISFhY3RpdmF0aW5nQ29ubmVjdG9yKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICAgICAgICBncmlkR2FwOiAnMXJlbScsXHJcbiAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMWZyJyxcclxuICAgICAgICAgIG1heFdpZHRoOiAnMTVyZW0nLFxyXG4gICAgICAgICAgbWFyZ2luOiAnYXV0bydcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge09iamVjdC5rZXlzKGNvbm5lY3RvcnNCeU5hbWUpLm1hcChuYW1lID0+IHtcclxuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDb25uZWN0b3IgPSBjb25uZWN0b3JzQnlOYW1lW25hbWVdXHJcbiAgICAgICAgICBjb25zdCBhY3RpdmF0aW5nID0gY3VycmVudENvbm5lY3RvciA9PT0gYWN0aXZhdGluZ0Nvbm5lY3RvclxyXG4gICAgICAgICAgY29uc3QgY29ubmVjdGVkID0gY3VycmVudENvbm5lY3RvciA9PT0gY29ubmVjdG9yXHJcbiAgICAgICAgICBjb25zdCBkaXNhYmxlZCA9ICF0cmllZEVhZ2VyIHx8ICEhYWN0aXZhdGluZ0Nvbm5lY3RvciB8fCBjb25uZWN0ZWQgfHwgISFlcnJvclxyXG5cclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogJyMwN2M3ZmYnLFxyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogY29ubmVjdGVkID8gJ25vbmUnIDogJ3Vuc2V0JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBhY3RpdmF0aW5nID8gJ29yYW5nZScgOiBjb25uZWN0ZWQgPyAnIzA3YzdmZicgOiAndW5zZXQnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiBkaXNhYmxlZCA/ICd1bnNldCcgOiAncG9pbnRlcicsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgIGtleT17bmFtZX1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmF0aW5nQ29ubmVjdG9yKGN1cnJlbnRDb25uZWN0b3IpXHJcbiAgICAgICAgICAgICAgICBhY3RpdmF0ZShjb25uZWN0b3JzQnlOYW1lW25hbWVdKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgICAgICAgICAgICB0b3A6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaycsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzAnXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7bmFtZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSl9XHJcbiAgICAgICAgeyhhY3RpdmUgfHwgZXJyb3IpICYmIChcclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICczcmVtJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMXJlbScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIGRlYWN0aXZhdGUoKVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBESVNDT05ORUNUXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICB7ISFlcnJvciAmJiA8aDQgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMXJlbScsIG1hcmdpbkJvdHRvbTogJzAnIH19PntnZXRFcnJvck1lc3NhZ2UoZXJyb3IpfTwvaDQ+fVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxVc2VyQWNjb3VudCAvPlxyXG5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmluYW5jZS1jaGFpbi9ic2MtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBldGhlcnNwcm9qZWN0L3Byb3ZpZGVyc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZXRoZXJzcHJvamVjdC91bml0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9hdXRoZXJldW0tY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvZm9ydG1hdGljLWNvbm5lY3RvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAd2ViMy1yZWFjdC9mcmFtZS1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xhdHRpY2UtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L2xlZGdlci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvbWFnaWMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L25ldHdvcmstY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3BvcnRpcy1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3QvdG9ydXMtY29ubmVjdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkB3ZWIzLXJlYWN0L3RyZXpvci1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0Y29ubmVjdC1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHdlYjMtcmVhY3Qvd2FsbGV0bGluay1jb25uZWN0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==