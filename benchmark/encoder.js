import b from 'benny';
import { createDjsEncoder, createOpusScriptAsmEncoder, createOpusScriptWasmEncoder, generatePCMSample } from './common.js';

const config = {
    FRAME_SIZE: 960,
    SAMPLE_RATE: 48000,
    CHANNELS: 2,
};

const nativeEncoder = createDjsEncoder(config);
const wasmEncoder = createOpusScriptWasmEncoder(config);
const asmEncoder = createOpusScriptAsmEncoder(config);

const SAMPLE = generatePCMSample(config.FRAME_SIZE * config.CHANNELS * 6);

b.suite(
    'OpusEncoder Benchmark',
    b.add('@discordjs/opus', () => {
        nativeEncoder.encode(SAMPLE);
    }),
    b.add('opusscript', () => {
        wasmEncoder.encode(SAMPLE, config.FRAME_SIZE);
    }),
    b.add('opusscript (no wasm)', () => {
        asmEncoder.encode(SAMPLE, config.FRAME_SIZE);
    }),
    b.cycle(),
    b.complete(),
    b.save({
        format: "chart.html",
        details: true,
        file: "opus-encoder-benchmark",
        folder: "./results"
    }),
);
