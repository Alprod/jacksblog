export async function fetchJson(url, options = {}) {
    const resp = await fetch(url, { headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
        ...options,
    });
    if(!resp.ok) {
        const text = await resp.text().catch(() => '');
        const err = new Error(`HTTP ${resp.status}`);
        err.status = resp.status;
        err.body = text;
        throw err;
    }

    if(resp.code === 204) return null;
    return resp.json();
}

export function normalizeUserResponse(payload) {
    return  payload?.data?.user ?? payload?.user ?? payload?.data ?? payload ?? null;
}