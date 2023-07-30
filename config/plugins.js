module.exports = ({ env }) => ({
  //...
  meilisearch: {
    config: {
      host: env('SEARCH_HOST', '192.168.0.106:7700'),
      apiKey: "123123",
      flower: {
        settings: {
          searchableAttributes: [
            '_meilisearch_id',
            'title',
            'id'
          ]
        }
      },
      type: {
        settings: {
          searchableAttributes: [
            '_meilisearch_id',
            'title',
            'id'
          ]
        }
      },
    },
  },

  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          "api::global.global",
          "api::flower.flower",
        ],
      },
    },
  },
})
