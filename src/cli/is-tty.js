import thirdParty from "../common/third-party.cjs";

// Some CI pipelines incorrectly report process.stdout.isTTY status,
// which causes unwanted lines in the output. An additional check for isCI() helps.
// See https://github.com/prettier/prettier/issues/5801
export default function isTTY() {
  return process.stdout.isTTY && !thirdParty.isCI();
}
