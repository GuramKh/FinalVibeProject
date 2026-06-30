// netlify/functions/save-history.js
const { getStore } = require('@netlify/blobs');

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  const user = context.clientContext && context.clientContext.user;
  if (!user) {
    return { statusCode: 401, body: JSON.stringify({ error: 'Unauthorized' }) };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }

  const { ideaName, problem, audience, market, analysis } = payload;
  if (!ideaName || !analysis) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing ideaName or analysis' }) };
  }

  try {
    const store = getStore('launchiq-history');
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
    const key = `${user.sub}/${id}`;

    const record = {
      id,
      ideaName,
      problem: problem || '',
      audience: audience || '',
      market: market || '',
      analysis,
      createdAt: new Date().toISOString()
    };

    await store.setJSON(key, record);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, id })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || 'Failed to save history' })
    };
  }
};
