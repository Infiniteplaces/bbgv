import SanityClient from '@sanity/client';
import hashify from 'object-hash';

const ProjectId = 'zx06oci2';

const Sanity = SanityClient({
  projectId: ProjectId,
  dataset: 'production',
  useCdn: true,
});

class Client {
  private cache: { [key: string]: any };
  private SanityClient: typeof Sanity;

  constructor(client: typeof Sanity) {
    this.SanityClient = client;

    this.cache = {};
  }

  async getDocuments(ids: string[]) {
    return new Promise((resolve, reject) => {
      const hash: string = hashify(ids);

      if (!!this.cache[hash]) return resolve(this.cache[hash]);

      return this.SanityClient.getDocuments(ids)

        .then((response: unknown) => {
          this.cache[hash] = response;

          return resolve(response);
        })

        .catch(reject);
    });
  }

  async getDocument(id: string) {
    return new Promise((resolve, reject) => {
      const hash: string = hashify(id);

      if (!!this.cache[hash]) return resolve(this.cache[hash]);

      return this.SanityClient.getDocument(id)

        .then((response: unknown) => {
          this.cache[hash] = response;

          return resolve(response);
        })

        .catch(reject);
    });
  }

  async fetch(query: string) {
    return new Promise((resolve, reject) => {
      const hash: string = hashify(query);

      if (!!this.cache[hash]) return resolve(this.cache[hash]);

      return this.SanityClient.fetch(query)

        .then((response: unknown) => {
          this.cache[hash] = response;

          return resolve(response);
        })

        .catch(reject);
    });
  }
}

export default new Client(Sanity);
