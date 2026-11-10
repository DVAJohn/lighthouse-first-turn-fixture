// Cursor handling for the donor form.
let busy = false;

export async function submit(send: () => Promise<void>): Promise<void> {
  busy = true;
  document.body.style.cursor = 'wait';
  await send(); // If send() throws, busy and the cursor are never reset: the stuck cursor.
  busy = false;
  document.body.style.cursor = '';
}

export function isBusy(): boolean {
  return busy;
}
