function process(value: string | number): string {
  if (typeof value === 'string') {
  return value.toUpperCase();
} else {
  return value.toFixed(1);
  }
}
