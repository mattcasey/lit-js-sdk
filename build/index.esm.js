import e from"jszip";import"tweetnacl";import"tweetnacl-util";import t from"web3";import n from"@metamask/detect-provider";import r from"firebase/app";import"firebase/functions";import o from"multihashing";import i from"cids";import s from"libp2p";import a from"libp2p-websockets";import u from"libp2p-webrtc-direct";import{NOISE as c}from"libp2p-noise";import p from"libp2p-mplex";import d from"libp2p-kad-dht";import l from"peer-id";import"multiaddr";import y from"libp2p-bootstrap";import m from"it-pipe";import"it-length-prefixed";import"it-pushable";import f from"secrets.js-grempe";import g from"uint8arrays/from-string";import h from"uint8arrays/to-string";import v from"it-all";var b={name:"AES-CBC",length:256};function T(e,t,n){if(!e.s){if(n instanceof w){if(!n.s)return void(n.o=T.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(T.bind(null,e,t),T.bind(null,e,2));e.s=t,e.v=n;var r=e.o;r&&r(e)}}var w=function(){function e(){}return e.prototype.then=function(t,n){var r=new e,o=this.s;if(o){var i=1&o?t:n;if(i){try{T(r,1,i(this.v))}catch(e){T(r,2,e)}return r}return this}return this.o=function(e){try{var o=e.v;1&e.s?T(r,1,t?t(o):o):n?T(r,1,n(o)):T(r,2,o)}catch(e){T(r,2,e)}},r},e}(),P=function(e){try{return Promise.resolve(e.generateAsync({type:"blob"})).then(function(e){return Promise.resolve(e.arrayBuffer()).then(function(t){return console.log("blob",e),Promise.resolve(function(){try{return Promise.resolve(crypto.subtle.generateKey(b,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}()).then(function(e){return Promise.resolve(function(e,t){try{var n=window.crypto.getRandomValues(new Uint8Array(16));return Promise.resolve(crypto.subtle.encrypt({name:"AES-CBC",iv:n},e,t)).then(function(e){return new Blob([n,new Uint8Array(e)],{type:"application/octet-stream"})})}catch(e){return Promise.reject(e)}}(e,t)).then(function(t){return Promise.resolve(crypto.subtle.exportKey("jwk",e)).then(function(e){return console.log("exportedSymmKey",e),{symmetricKey:e,encryptedZip:t}})})})})})}catch(e){return Promise.reject(e)}},S=function(t,n){try{return Promise.resolve(function(e){try{return Promise.resolve(crypto.subtle.importKey("jwk",JSON.parse(e),b,!0,["encrypt","decrypt"]))}catch(e){return Promise.reject(e)}}(n)).then(function(n){return Promise.resolve(function(e,t){try{return Promise.resolve(e.slice(0,16).arrayBuffer()).then(function(n){return Promise.resolve(e.slice(16).arrayBuffer()).then(function(e){return Promise.resolve(crypto.subtle.decrypt({name:"AES-CBC",iv:n},t,e))})})}catch(e){return Promise.reject(e)}}(t,n)).then(function(t){var n=new e;return Promise.resolve(n.loadAsync(t)).then(function(e){return e.files})})})}catch(e){return Promise.reject(e)}},k={};r.initializeApp({apiKey:"AIzaSyDa3JnwzrjfY5DcPz4GtywdUUUY3zqWo0w",authDomain:"mintlit.firebaseapp.com",projectId:"mintlit",storageBucket:"mintlit.appspot.com",messagingSenderId:"1044454922569",appId:"1:1044454922569:web:a3cf1d5637f18413f66298",measurementId:"G-NC19HWVQPT"});var E=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"account",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"address",name:"userAddress",type:"address"},{indexed:!1,internalType:"address payable",name:"relayerAddress",type:"address"},{indexed:!1,internalType:"bytes",name:"functionSignature",type:"bytes"}],name:"MetaTransactionExecuted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256[]",name:"ids",type:"uint256[]"},{indexed:!1,internalType:"uint256[]",name:"values",type:"uint256[]"}],name:"TransferBatch",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"id",type:"uint256"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"TransferSingle",type:"event"},{anonymous:!1,inputs:[{indexed:!1,internalType:"string",name:"value",type:"string"},{indexed:!0,internalType:"uint256",name:"id",type:"uint256"}],name:"URI",type:"event"},{inputs:[],name:"ERC712_VERSION",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"uint256",name:"id",type:"uint256"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint256[]",name:"ids",type:"uint256[]"}],name:"balanceOfBatch",outputs:[{internalType:"uint256[]",name:"",type:"uint256[]"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"userAddress",type:"address"},{internalType:"bytes",name:"functionSignature",type:"bytes"},{internalType:"bytes32",name:"sigR",type:"bytes32"},{internalType:"bytes32",name:"sigS",type:"bytes32"},{internalType:"uint8",name:"sigV",type:"uint8"}],name:"executeMetaTransaction",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"payable",type:"function",payable:!0},{inputs:[],name:"getChainId",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"pure",type:"function",constant:!0},{inputs:[],name:"getDomainSeperator",outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"user",type:"address"}],name:"getNonce",outputs:[{internalType:"uint256",name:"nonce",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256[]",name:"ids",type:"uint256[]"},{internalType:"uint256[]",name:"amounts",type:"uint256[]"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeBatchTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"id",type:"uint256"},{internalType:"uint256",name:"amount",type:"uint256"},{internalType:"bytes",name:"data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[],name:"tokenIds",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"",type:"uint256"}],name:"uri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"uint256",name:"quantity",type:"uint256"}],name:"mint",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"_owner",type:"address"},{internalType:"address",name:"_operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"isOperator",type:"bool"}],stateMutability:"view",type:"function",constant:!0},{inputs:[{internalType:"bool",name:"enabled",type:"bool"}],name:"setOpenseaProxyEnabled",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newAdmin",type:"address"}],name:"changeAdmin",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"uri",type:"string"}],name:"setURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"getAdmin",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function",constant:!0}],A=require("protons")("\nmessage Request {\n  enum Type {\n    GET_KEY_FRAGMENT = 0;\n    STORE_KEY_FRAGMENT = 1;\n  }\n  required Type type = 1;\n  optional GetKeyFragment getKeyFragment = 2;\n  optional StoreKeyFragment storeKeyFragment = 3;\n  optional bytes authSig = 4;\n  optional TokenParams tokenParams = 5;\n}\nmessage Response {\n  enum Type {\n    GET_KEY_FRAGMENT_RESPONSE = 0;\n    STORE_KEY_FRAGMENT_RESPONSE = 1;\n  }\n  required Type type = 1;\n  optional GetKeyFragmentResponse getKeyFragmentResponse = 2;\n  optional StoreKeyFragmentResponse storeKeyFragmentResponse = 3;\n}\nmessage GetKeyFragment {\n  required bytes keyId = 4;\n}\nmessage GetKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    NOT_FOUND = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes keyId = 2;\n  optional bytes fragmentValue = 3;\n}\nmessage StoreKeyFragment {\n  required bytes fragmentValue = 4;\n}\nmessage StoreKeyFragmentResponse {\n  enum Result {\n    SUCCESS = 0;\n    AUTH_FAILURE = 1;\n    ERROR = 2;\n  }\n  required Result result = 1;\n  optional bytes errorMessage = 2;\n}\nmessage TokenParams {\n  required bytes tokenAddress = 1;\n  required bytes tokenId = 2;\n  required bytes chain = 3;\n}\n"),I={polygon:{contractAddress:"0xb9A323711528D0c5a70df790929f4739f1cDd7fD",chainId:137},ethereum:{contractAddress:"0x55485885e82E25446DEC314Ccb810Bda06B9e01B",chainId:1}},R=function(){try{var e=(new Date).toISOString(),t=C.replace("{{timestamp}}",e);return Promise.resolve(function(e){var t=e.body;try{return Promise.resolve(K()).then(function(e){var n=e.web3,r=e.account;return console.log("signing with ",r),Promise.resolve(n.eth.personal.sign(t,r)).then(function(e){var o=n.eth.accounts.recover(t,e).toLowerCase();if(console.log("Signature: ",e),console.log("recovered address: ",o),o!==r){var i="ruh roh, the user signed with a different address ("+o+") then they're using with web3 ("+r+").  this will lead to confusion.";throw console.error(i),alert("something seems to be wrong with your wallets message signing.  maybe restart your browser or your wallet.  your recovered sig address does not match your web3 account address"),new Error(i)}return{signature:e,address:o}})})}catch(e){return Promise.reject(e)}}({body:t})).then(function(e){localStorage.setItem("lit-auth-signature",JSON.stringify({sig:e.signature,derivedVia:"web3.eth.personal.sign",signedMessage:t,address:e.address}))})}catch(e){return Promise.reject(e)}},F=function(){try{var e=function(){return t=JSON.parse(t),Promise.resolve(K()).then(function(e){var n=e.account,r=function(){if(n!==t.address)return Promise.resolve(R()).then(function(){t=localStorage.getItem("lit-auth-signature"),t=JSON.parse(t)})}();return r&&r.then?r.then(function(){return t}):t})},t=localStorage.getItem("lit-auth-signature"),n=function(){if(!t)return Promise.resolve(R()).then(function(){t=localStorage.getItem("lit-auth-signature")})}();return Promise.resolve(n&&n.then?n.then(e):e())}catch(e){return Promise.reject(e)}},K=function(){try{if(void 0===window.ethereum)throw new Error({errorCode:"no_wallet",message:"No web3 wallet was found"});return Promise.resolve(n()).then(function(e){return Promise.resolve(e.request({method:"eth_requestAccounts"})).then(function(n){var r=n[0].toLowerCase();return{web3:new t(e),account:r}})})}catch(e){return Promise.reject(e)}},C="I am creating an account to use LITs at {{timestamp}}",M=function(e){var t=e.tokenId,n=e.chain,r=e.tokenAddress.toLowerCase(),s=t.toString(16).padStart(64,"0"),a=o(Buffer.from(r+"|"+s+"|"+n),"sha2-256");return new i(a).toString()},x=A.Request,N=A.Response,j=A.StoreKeyFragmentResponse,B=A.GetKeyFragmentResponse,_={zipAndEncryptString:function(t){try{var n=new e;return n.file("string.txt",t),P(n)}catch(e){return Promise.reject(e)}},zipAndEncryptFiles:function(t){try{for(var n=new e,r=0;r<t.length;r++)n.folder("encryptedAssets").file(t[r].name,t[r]);return P(n)}catch(e){return Promise.reject(e)}},encryptZip:P,decryptZip:S,connectWeb3:K,checkAndSignAuthMessage:F,createHtmlLIT:function(e){var t,n,r,o,i,s=e.title,a=e.htmlBody,u=e.css,c=e.encryptedSymmetricKey,p=e.encryptedZipDataUrl,d=e.npmPackages,l=void 0===d?[]:d;try{l.push("lit-js-sdk");var y="",m=(t=l,n=function(e){return Promise.resolve(function(e){try{return k[e]?Promise.resolve(k[e]):Promise.resolve(fetch("https://unpkg.com/"+e)).then(function(t){if(!t.ok)throw console.log("error with response: ",t),Error(t.statusText);return Promise.resolve(t.blob()).then(function(t){return Promise.resolve((n=t,new Promise(function(e,t){var r=new FileReader;r.onloadend=function(){e(r.result)},r.readAsDataURL(n)}))).then(function(t){return k[e]=t,t});var n})})}catch(e){return Promise.reject(e)}}(l[e])).then(function(e){y+='<script src="'+e+'"><\/script>\n'})},i=-1,function e(s){try{for(;++i<t.length;)if((s=n(i))&&s.then){if(!((a=s)instanceof w&&1&a.s))return void s.then(e,o||(o=T.bind(null,r=new w,2)));s=s.v}r?T(r,1,s):r=s}catch(e){T(r||(r=new w),2,e)}var a}(),r);return Promise.resolve(m&&m.then?m.then(function(){return"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+s+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+c+'\n      var encryptedZipDataUrl = "'+p+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+a+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  "}):"\n<!DOCTYPE html>\n<html>\n  <head>\n    <title>"+s+'</title>\n    <style id="jss-server-side">'+u+"</style>\n    "+y+"\n    <script>\n      var encryptedSymmetricKey = "+c+'\n      var encryptedZipDataUrl = "'+p+'"\n      var locked = true\n    <\/script>\n  </head>\n  <body>\n    <div id="root">'+a+"</div>\n    <script>\n      const unlockButton = document.getElementById('unlockButton')\n      unlockButton.onclick = function() {\n        LitJsSdk.default.toggleLock()\n      }\n    <\/script>\n  </body>\n</html>\n  ")}catch(e){return Promise.reject(e)}},mintLIT:function(e){var t=e.chain,n=e.quantity;try{return console.log("minting "+n+" tokens on "+t),Promise.resolve(F()).then(function(e){return Promise.resolve(K()).then(function(r){var o=r.web3,i=r.account;return Promise.resolve(o.eth.getChainId()).then(function(r){if(r!==I[t].chainId)return{errorCode:"wrong_chain"};var s=I[t].contractAddress,a=new o.eth.Contract(E,s);return console.log("sending to chain..."),function(t,r){try{var o=Promise.resolve(a.methods.mint(n).send({from:i})).then(function(t){return console.log("txReceipt: ",t),{txHash:t.transactionHash,tokenId:t.events.TransferSingle.returnValues.id,tokenAddress:s,mintingAddress:i,authSig:e}})}catch(e){return r(e)}return o&&o.then?o.then(void 0,r):o}(0,function(e){return console.log(e),4001===e.code?(console.log("User rejected request"),{errorCode:"user_rejected_request"}):(console.error(e),{errorCode:"unknown_error"})})})})})}catch(e){return Promise.reject(e)}},toggleLock:function(){try{var e=document.getElementById("mediaGridHolder"),t=document.getElementById("lockedHeader"),n=function(){if(window.locked)return window.publicContent=e.innerHTML,Promise.resolve(fetch(window.encryptedZipDataUrl)).then(function(n){return Promise.resolve(n.blob()).then(function(n){return Promise.resolve(S(n,JSON.stringify(window.encryptedSymmetricKey))).then(function(n){return Promise.resolve(n["string.txt"].async("text")).then(function(n){e.innerHTML=n,t.innerText="UNLOCKED",window.locked=!1})})})});e.innerHTML=window.publicContent,t.innerText="LOCKED",window.locked=!0}();return Promise.resolve(n&&n.then?n.then(function(){}):void 0)}catch(e){return Promise.reject(e)}},LIT_CHAINS:I,LitNodeClient:function(){function e(e){this.libp2p=null,this.connectedNodes=new Set}var t=e.prototype;return t.saveEncryptionKey=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.symmetricKey,o=e.authSig,i=e.chain;try{var s=Array.from(this.connectedNodes),a=s.length,u=Math.floor(a/2),c=Buffer.from(r).toString("hex");console.debug("splitting up into "+a+" shares with a threshold of "+u);var p=f.share(c,a,u);if(p.length!==s.length)throw new Error("kFrags.length ("+p.length+") !== nodes.length ("+s.length+")");for(var d=[],l=t.toLowerCase(),y=0;y<s.length;y++)console.debug("storing kFrag in node "+(y+1)+" of "+s.length),d.push(this.storeDataWithNode({peerId:s[y],tokenAddress:l,tokenId:n,val:p[y],authSig:o,chain:i}));return Promise.resolve(Promise.all(d)).then(function(){return console.log("all stored"),{success:!0}})}catch(e){return Promise.reject(e)}},t.getEncryptionKeyFragments=function(e){var t=e.tokenAddress,n=e.tokenId,r=e.authSig,o=e.chain;try{var s=this,a=t.toLowerCase(),u=M({tokenAddress:t,tokenId:n,chain:o}),c=new i(u);return Promise.resolve(v(s.libp2p.contentRouting.findProviders(c,{timeout:3e3}))).then(function(e){console.log("Found "+e.length+" providers");for(var t=[],i=0;i<e.length;i++){var c=e[i].id.toB58String();console.debug("Getting "+u+" from "+c),t.push(s.getDataFromNode({peerId:c,tokenAddress:a,tokenId:n,authSig:r,keyId:u,chain:o}))}return Promise.resolve(Promise.all(t))})}catch(e){return Promise.reject(e)}},t.storeDataWithNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.val,i=e.authSig,s=e.chain;try{console.debug("storing data with node "+t+" with tokenAddress "+n+" and tokenId "+r);var a=x.encode({type:x.Type.STORE_KEY_FRAGMENT,storeKeyFragment:{fragmentValue:g(o)},authSig:g(JSON.stringify(i)),tokenParams:{tokenAddress:g(n),tokenId:g(r.toString()),chain:g(s)}});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:a}))}catch(e){return Promise.reject(e)}},t.getDataFromNode=function(e){var t=e.peerId,n=e.tokenAddress,r=e.tokenId,o=e.keyId,i=e.authSig,s=e.chain;try{console.debug("getDataFromNode "+t+" with keyId "+o);var a=x.encode({type:x.Type.GET_KEY_FRAGMENT,getKeyFragment:{keyId:g(o)},authSig:g(JSON.stringify(i)),tokenParams:{tokenAddress:g(n),tokenId:g(r.toString()),chain:g(s)}});return Promise.resolve(this.sendCommandToPeer({peerId:t,data:a}))}catch(e){return Promise.reject(e)}},t.sendCommandToPeer=function(e){var t=e.peerId,n=e.data;try{var r=this.libp2p.connectionManager.get(l.createFromB58String(t));return Promise.resolve(r.newStream(["/lit/1.0.0"])).then(function(e){var r=e.stream;console.debug("sendCommandToPeer "+t);var o=null;return Promise.resolve(m([n],r,function(e){try{return console.debug("in sendCommandToPeer callback"),Promise.resolve(e.next()).then(function(e){var t=e.value;console.debug("got value from source.next()",t);var n=N.decode(t.slice());n.type===N.Type.STORE_KEY_FRAGMENT_RESPONSE?n.storeKeyFragmentResponse.result===j.Result.SUCCESS?(console.log("success storing key fragment"),o=!0):(console.log("error storing key fragment: "),console.log(h(n.storeKeyFragmentResponse.errorMessage)),o=!1):n.type===N.Type.GET_KEY_FRAGMENT_RESPONSE?n.getKeyFragmentResponse.result===B.Result.SUCCESS?(console.log("success getting key fragment"),o=h(n.getKeyFragmentResponse.fragmentValue)):n.getKeyFragmentResponse.result===B.Result.NOT_FOUND?(console.log("key fragment not found"),o=!1):(console.log("unknown error getting key fragment"),o=!1):console.log("unknown response type")})}catch(e){return Promise.reject(e)}})).then(function(){return o})})}catch(e){return Promise.reject(e)}},t.connect=function(){try{var e,t=this;return Promise.resolve(s.create({modules:{transport:[a,u],connEncryption:[c],streamMuxer:[p],dht:d,peerDiscovery:[y]},config:{dht:{enabled:!0},peerDiscovery:(e={},e[y.tag]={enabled:!0,list:["/ip4/127.0.0.1/tcp/9090/http/p2p-webrtc-direct/p2p/12D3KooWK1KtaAV5rWjbAmZcd62VYSmEz1k81jzr87JAcSS7rKdQ"]},e)}})).then(function(e){return t.libp2p=e,t.libp2p.on("peer:discovery",function(e){console.debug("Found peer "+e.toB58String())}),t.libp2p.connectionManager.on("peer:connect",function(e){try{var n=e.remotePeer.toB58String();return console.debug("Connected to "+n),t.connectedNodes.has(n)||t.connectedNodes.add(n),Promise.resolve()}catch(e){return Promise.reject(e)}}),t.libp2p.connectionManager.on("peer:disconnect",function(e){var n=e.remotePeer.toB58String();console.debug("Disconnected from "+n),t.connectedNodes.delete(n)}),Promise.resolve(t.libp2p.start()).then(function(){console.debug("libp2p id is "+t.libp2p.peerId.toB58String()),t.libp2p.multiaddrs.forEach(function(e){return console.debug(e.toString()+"/p2p/"+t.libp2p.peerId.toB58String())}),window.libp2p=t.libp2p,window.PeerId=l})})}catch(e){return Promise.reject(e)}},e}(),getUploadUrl:function(){try{var e=r.functions().httpsCallable("getUploadUrl");return Promise.resolve(e()).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}},createTokenMetadata:function(e){try{var t=r.functions().httpsCallable("createTokenMetadata");return Promise.resolve(t(e)).then(function(e){return console.log(e),e.data})}catch(e){return Promise.reject(e)}},protobufs:A,kFragKey:M};export default _;
//# sourceMappingURL=index.esm.js.map
