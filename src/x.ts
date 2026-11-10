// Small helpers for the donor form.
export function foo(amount: number): number {
  return Math.round(amount * 100);
}

export function totalCents(amounts: number[]): number {
  return amounts.reduce((sum, amount) => sum + foo(amount), 0);
}
