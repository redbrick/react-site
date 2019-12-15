const base = 'https://api.uptimerobot.com/';

export const ok = { text: 'All Services Are Currently Active', colour: 'green' };

export function getStatus(apiKey) {
  return fetch(`${base}v2/getMonitors`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
      'cache-control': 'no-cache',
    },
    body: {
      api_key: apiKey,
      format: 'json',
      logs: 1,
    },
  })
    .then(resp => resp.json)
    .then(parseStatus)
    .catch(() => ok);
}

function parseStatus(data) {
  const brokenChecks = data.monitors.reduce(check => check.status === 2);
  if (brokenChecks.length === 0) return ok;
  const checkNames = brokenChecks.map(check => check.friendly_name).join(', ');
  return {
    text: `The Following Services are Currently non functional ${checkNames}`,
    colour: 'red',
  };
}
