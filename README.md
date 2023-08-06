# node-opus-benchmark

Benchmarking @discordjs/opus and opusscript

## Run Yourself

```bash
$ pnpm install
$ pnpm bench
```

## Results

Tested on `Ubuntu 20.04.6 LTS x86_64` with `Intel Xeon Platinum 8272` CPU.

### OpusEncoder

**[View online](https://skdhg.github.io/node-opus-benchmark/results/opus-encoder-benchmark.chart.html)**

```js
Running "OpusEncoder Benchmark" suite...
Progress: 100%

    @discordjs/opus:
        2 410 ops/s, ±1.93%   | 35.41% slower

    opusscript:
        3 731 ops/s, ±3.52%   | fastest

    opusscript (no wasm):
        169 ops/s, ±9.63%     | slowest, 95.47% slower

Finished 3 cases!
  Fastest: opusscript
  Slowest: opusscript (no wasm)
```

### OpusDecoder

**[View online](https://skdhg.github.io/node-opus-benchmark/results/opus-decoder-benchmark.chart.html)**

```js
Running "OpusDecoder Benchmark" suite...
Progress: 100%

    @discordjs/opus:
        8 134 ops/s, ±4.82%   | fastest

    opusscript:
        5 252 ops/s, ±4.47%   | 35.43% slower

    opusscript (no wasm):
        1 504 ops/s, ±13.54%  | slowest, 81.51% slower

Finished 3 cases!
    Fastest: @discordjs/opus
    Slowest: opusscript (no wasm)
```
