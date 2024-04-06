import http from 'http';

export default {
    id: 'operation-azizi-sms',
    handler: ({ phone_number: toNumber, message }, { env }) => {

        return new Promise((resolve, reject) => {
            const atUsername = env.AT_USERNAME;
            const atApiKey = env.AT_API_KEY;
            const atSMSUrl = new URL(env.AT_SMS_URL);
            const atFrom = env.AT_FROM;

            const postData = JSON.stringify({
                username: atUsername,
                to: toNumber,
                message: message,
                from: atFrom
            });

            const options = {
                hostname: atSMSUrl.hostname,
                path: atSMSUrl.pathname,
                method: 'POST',
                headers: {

                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Content-Length': Buffer.byteLength(postData),
                    'apiKey': Buffer.from(atUsername + ':' + atApiKey).toString('base64')
                }
            };

            const req = http.request(options, (res) => {
                let response = '';

                res.on('data', (chunk) => {
                    response += chunk;
                });

                res.on('end', () => {
                    resolve(response);
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.write(postData);
            req.end();
        });
    },
};
