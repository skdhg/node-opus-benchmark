# node-opus-benchmark

Benchmarking node.js libopus bindings

## Run Yourself

```bash
$ pnpm install
$ pnpm bench
```

## Results

Benchmarking was done by using a constant sample of opus and pcm data. The benchmark was done among following packages using [mitata](https://npm.im/mitata) as the benchmarking library:

### [mediaplex](https://npm.im/mediaplex)

Mediaplex provides native bindings to libopus 1.4 and is a drop-in replacement for [@discordjs/opus](https://npm.im/@discordjs/opus).

### [@discordjs/opus](https://npm.im/@discordjs/opus)

Native bindings to libopus v1.3 

### [opusscript](https://npm.im/opusscript)

JS bindings for libopus 1.4, ported with Emscripten.

### [@evan/opus](https://npm.im/@evan/opus) & [@evan/wasm](https://npm.im/@evan/wasm)

Fast opus bindings for node and browsers.

---

> Note: I ran this test on github codespaces, so the results may vary on your machine.

### OpusEncoder

```js
cpu: AMD EPYC 7763 64-Core Processor
runtime: node v20.6.1 (x64-linux)

benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
• OpusEncoder
------------------------------------------------------------ -----------------------------
mediaplex             479.46 µs/iter   (442.81 µs … 1.86 ms) 465.78 µs 730.83 µs 789.35 µs
@discordjs/opus       544.07 µs/iter   (517.77 µs … 1.77 ms) 536.05 µs 804.11 µs   1.26 ms
opusscript            306.54 µs/iter  (208.27 µs … 25.62 ms) 234.58 µs   1.27 ms   1.82 ms
opusscript (no wasm)    5.81 ms/iter    (4.25 ms … 12.72 ms)   7.63 ms  12.08 ms  12.72 ms
@evan/opus            418.43 µs/iter (394.61 µs … 699.62 µs) 407.55 µs 654.99 µs 681.89 µs
@evan/opus (wasm)      884.1 µs/iter   (668.14 µs … 9.36 ms) 730.79 µs   2.21 ms   6.08 ms
@evan/wasm            810.87 µs/iter  (613.38 µs … 10.04 ms) 674.75 µs   2.65 ms   4.99 ms

summary for OpusEncoder
  opusscript
   1.37x faster than @evan/opus
   1.56x faster than mediaplex
   1.77x faster than @discordjs/opus
   2.65x faster than @evan/wasm
   2.88x faster than @evan/opus (wasm)
   18.96x faster than opusscript (no wasm)
cpu: AMD EPYC 7763 64-Core Processor
runtime: node v20.6.1 (x64-linux)

benchmark                 time (avg)             (min … max)       p75       p99      p995
------------------------------------------------------------ -----------------------------
• OpusDecoder
------------------------------------------------------------ -----------------------------
mediaplex              47.76 µs/iter     (41.1 µs … 1.21 ms)   45.1 µs  90.48 µs 118.01 µs
@discordjs/opus        42.24 µs/iter  (38.26 µs … 442.65 µs)  40.09 µs  76.77 µs  83.23 µs
opusscript             75.95 µs/iter     (57.5 µs … 13.6 ms)  60.24 µs 243.81 µs 250.49 µs
opusscript (no wasm)  548.76 µs/iter   (157.45 µs … 12.2 ms) 376.78 µs   7.92 ms   9.24 ms
@evan/opus             51.62 µs/iter    (38.03 µs … 5.73 ms)  59.61 µs 116.26 µs 144.65 µs
@evan/opus (wasm)       65.7 µs/iter    (51.92 µs … 8.21 ms)  55.65 µs  179.4 µs 185.44 µs
@evan/wasm              63.6 µs/iter   (56.45 µs … 11.44 ms)  57.75 µs 131.86 µs 164.64 µs

summary for OpusDecoder
  @discordjs/opus
   1.13x faster than mediaplex
   1.22x faster than @evan/opus
   1.51x faster than @evan/wasm
   1.56x faster than @evan/opus (wasm)
   1.8x faster than opusscript
   12.99x faster than opusscript (no wasm)
```
