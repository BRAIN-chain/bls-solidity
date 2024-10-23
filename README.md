# Multisig

1. ECDSAs
2. BLS

FYI, we use JS-transcompiled version of [EVMBLS' scripts](https://github.com/kilic/evmbls) with some additional features:
- Add a function `pubkeyFromSecret(secret)`


# How to Use

```bash
$ npm i
$ git submodule init && git submodule update
```

```bash
$ npx hardhat test benchmarks/ecdsa/ecdsa.js --network hardhat
```

```bash
$ npx hardhat test benchmarks/bls/bls.js --network hardhat
```


# References

- https://ethresear.ch/t/bls-signatures-in-solidity/7919
- https://github.com/kilic/evmbls
