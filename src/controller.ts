// Cursor handling for the donor form.
let busy = false;

export async function submit(send: () => Promise<void>): Promise<void> {
  busy = true;
  document.body.style.cursor = 'wait';
  try {
    await send();
  } finally {
    busy = false;
    document.body.style.cursor = '';
  }
}

export function isBusy(): boolean {
  return busy;
}
