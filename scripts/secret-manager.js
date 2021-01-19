const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const { appendFile } = require('fs').promises;
const parent = `projects/${process.env.GOOGLE_CLOUD_PROJECT}`;

// Instantiates a client
const client = new SecretManagerServiceClient();

/**
 * Use the GCP Secret Manager API to list all the secrets for the currently running project
 * @returns {Promise<[google.cloud.secretmanager.v1.ISecret[], (google.cloud.secretmanager.v1.IListSecretsRequest | null), google.cloud.secretmanager.v1.IListSecretsResponse]>}
 */
async function listSecrets() {
    return await client.listSecrets({
        parent: parent,
    });
}

/**
 * extract the REACT_APP secrets and write them a .env file required for the
 * app to run properly
 * @param secrets - all the GCP Secret Manager secrets
 * @returns {Promise<void>}
 */
async function writeEnv(secrets) {
    for (const secret of secrets) {
        if (secret.name.indexOf('REACT_APP') !== -1) {
            const [version] = await client.accessSecretVersion({
                name: `${secret.name}/versions/latest`,
            });

            const key = secret.name.substr(secret.name.indexOf('REACT_APP'));
            const content = `${key}=${version.payload.data.toString()}`;
            // WARNING: Do not print the secret in a production environment - this
            // snippet is showing how to access the secret material.
            await appendFile('.env', content, 'utf8');
        }
    }
}

const [secrets] = await listSecrets();
// TODO: if the .env file already exists, don't list the secrets and generate a new file
await writeEnv(secrets);
