import { KokoroTTS, TextSplitterStream } from "kokoro-js";

const model_id = "onnx-community/Kokoro-82M-v1.0-ONNX";
const tts = await KokoroTTS.from_pretrained(model_id, {
  dtype: "q4", // Options: "fp32", "fp16", "q8", "q4", "q4f16"
  //device: "cpu", // Options: "wasm", "webgpu" (web) or "cpu" (node).
});

// First, set up the stream
export const splitter = new TextSplitterStream();
export const stream = tts.stream(splitter, { voice: "af_nicole"});

/*
(async () => {
  let i = 0;
  for await (const { text, phonemes, audio } of stream) {
    console.log({ text, phonemes });
    //audio.save(`audio-${i++}.wav`);
  }
})();

// Next, add text to the stream. Note that the text can be added at different times.
const text = "";
const tokens = text.match(/\s*\S+/g);
for (const token of tokens) {
  splitter.push(token);
  await new Promise((resolve) => setTimeout(resolve, 10));
}
*/
// Finally, close the stream to signal that no more text will be added.
//splitter.close();

// Alternatively, if you'd like to keep the stream open, but flush any remaining text, you can use the `flush` method.
splitter.flush();