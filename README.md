# node-opus-benchmark

Benchmarking node.js libopus bindings

## Run Yourself

```bash
$ pnpm install
$ pnpm bench
```

## Results

Benchmarking was done by using a constant sample of opus and pcm data. The benchmark was done among following packages using [mitata](https://npm.im/mitata) as the benchmarking library:

#### [mediaplex](https://npm.im/mediaplex)

Mediaplex provides bindings for libopus 1.4 and is a drop-in replacement for [@discordjs/opus](https://npm.im/@discordjs/opus).

- [@discordjs/opus](https://npm.im/@discordjs/opus)
- [opusscript](https://npm.im/opusscript)
- [@evan/opus](https://npm.im/@evan/opus)
- [@evan/wasm](https://npm.im/@evan/wasm)

> Note: I ran this test on github codespaces, so the results may vary on your machine.

### OpusEncoder

```js
cpu: AMD EPYC 7763 64-Core Processor
runtime: node v20.6.1 (x64-linux)

benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
• OpusEncoder
------------------------------------------------------------ -----------------------------
mediaplex             549.76 µs/iter   (441.63 µs … 6.29 ms) 615.77 µs   1.88 ms   2.94 ms
@discordjs/opus       551.23 µs/iter   (518.32 µs … 1.88 ms) 539.68 µs 977.06 µs   1.09 ms
opusscript            326.99 µs/iter   (207.89 µs … 9.93 ms) 345.27 µs 857.78 µs   1.88 ms
opusscript (no wasm)     5.3 ms/iter     (4.25 ms … 9.43 ms)   5.21 ms   9.09 ms   9.43 ms
@evan/opus            473.24 µs/iter   (394.69 µs … 5.01 ms) 537.32 µs 834.25 µs 883.62 µs
@evan/opus (wasm)      748.8 µs/iter   (661.16 µs … 2.59 ms) 725.23 µs   1.25 ms   1.51 ms
@evan/wasm            763.94 µs/iter  (613.83 µs … 15.63 ms) 688.31 µs   1.42 ms   4.52 ms

summary for OpusEncoder
  opusscript
   1.45x faster than @evan/opus
   1.68x faster than mediaplex
   1.69x faster than @discordjs/opus
   2.29x faster than @evan/opus (wasm)
   2.34x faster than @evan/wasm
   16.2x faster than opusscript (no wasm)
```

### OpusDecoder

```js
cpu: AMD EPYC 7763 64-Core Processor
runtime: node v20.6.1 (x64-linux)

benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
• OpusDecoder
------------------------------------------------------------ -----------------------------
mediaplex              47.45 µs/iter    (41.27 µs … 1.28 ms)  45.45 µs  84.19 µs  91.53 µs
@discordjs/opus        42.77 µs/iter  (38.23 µs … 347.49 µs)  40.08 µs  81.59 µs 103.55 µs
opusscript             70.86 µs/iter     (57.09 µs … 6.4 ms)  59.56 µs 239.13 µs 244.96 µs
opusscript (no wasm)  378.14 µs/iter  (156.59 µs … 24.48 ms) 277.74 µs   4.22 ms  12.29 ms
@evan/opus             89.81 µs/iter   (38.02 µs … 22.29 ms)  65.45 µs  89.24 µs 226.35 µs
@evan/opus (wasm)      97.34 µs/iter   (51.91 µs … 20.14 ms)  79.99 µs 209.11 µs 216.94 µs
@evan/wasm             98.83 µs/iter   (56.33 µs … 12.62 ms)  94.08 µs 225.32 µs 306.18 µs

summary for OpusDecoder
  @discordjs/opus
   1.11x faster than mediaplex
   1.66x faster than opusscript
   2.1x faster than @evan/opus
   2.28x faster than @evan/opus (wasm)
   2.31x faster than @evan/wasm
   8.84x faster than opusscript (no wasm)
```
