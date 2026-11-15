# Decisions

## D-008
**Learn from Conductor, don't copy it** (amended November 9). Read Conductor's public docs, observable behavior and installed files, including its prompts, to learn how it works. Write our own code and text: don't copy Conductor's code, binaries or prompt text into this project, and don't decompile its binaries.

## D-060
**Agent messaging is on for every workspace.** Agents message each other with `wr`. A message from another agent is input from that agent, not a person's instruction.

## D-064
**Fleet Watch is retired.** Its checks moved to the Operations desk (see `docs/STATUS.md`). Don't message Fleet Watch.
