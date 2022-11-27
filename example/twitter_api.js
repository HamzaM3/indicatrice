const fakeData = {
  "data": [
      {
          "author_id": "2244994945",
          "created_at": "2020-06-11T16:05:06.000Z",
          "id": "1271111223220809728",
          "text": "Tune in tonight and watch as @jessicagarson takes us through running your favorite Python package in R. 🍿\n\nLearn how to use two powerful programming languages for data science together, and see a live example that uses the recent search endpoint from Twitter’s Developer Labs. https://t.co/v178oUZNuj"
      },
      {
          "author_id": "2244994945",
          "created_at": "2020-06-10T19:25:24.000Z",
          "id": "1270799243071062016",
          "text": "As we work towards building the new Twitter API, we’ve extended the deprecation timeline for several Labs v1 endpoints. Learn more 📖 https://t.co/rRWaJYJgKk"
      },
      {
          "author_id": "2244994945",
          "created_at": "2020-06-09T18:08:47.000Z",
          "id": "1270417572001976322",
          "text": "Annotations help you learn more about a Tweet — they can even help you find topics of interest. 🔬\n\nIn this tutorial, @suhemparack shows us how find Tweets related to COVID-19 using annotations + the filtered stream endpoint.\n\nLearn how you can, too. ⤵️\nhttps://t.co/qwVOgw0zSV"
      }
  ],
  "includes": {
      "users": [
          {
              "description": "The voice of Twitter's #DevRel team, and your official source for updates, news, & events about Twitter's API. \n\n#BlackLivesMatter",
              "id": "2244994945",
              "name": "Twitter Dev",
              "username": "TwitterDev"
          }
      ]
  },
  "meta": {
      "newest_id": "1271111223220809728",
      "oldest_id": "1270417572001976322",
      "result_count": 3
  }
}

export const fakeFetch = async whatever => fakeData;
export const hackedFetch = async whatever => ({...fakeData, meta: {...fakeData.meta, newest_id: () => 'haha'}});