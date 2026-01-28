export function generateScore(number) {
  let score = 100

  if (number.startsWith('+55')) score -= 5
  if (number.includes('9999')) score -= 20

  let status = 'Seguro'
  if (score < 70) status = 'Atenção'
  if (score < 40) status = 'Alto Risco'

  return {
    number,
    score,
    status,
    recommendation:
      status === 'Seguro'
        ? 'Uso liberado'
        : 'Evite WhatsApp até validação'
  }
}
