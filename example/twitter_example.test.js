import { fakeFetch, hackedFetch } from "./twitter_api.js";
import { object, array, string, number } from '../src';



describe('twitter api validation with indicatrice', () => {
  const indicator = object({
    data: array(object({
      author_id: string,
      created_at: string,
      id: string,
      text: string,
    })),
    includes: object({
      users: array(object({
        description: string,
        id: string,
        name: string,
        username: string,
      }))
    }),
    meta: object({
      newest_id: string,
      oldest_id: string,
      result_count: number,
    })
  });

  it('works !', () => {
    const action = console.log;
    const reportError = console.error;
    fakeFetch().then(indicator).then(action).catch(reportError)
  })

  it('detects wrong data', () => {
    const action = console.log;
    const reportError = console.error;
    hackedFetch().then(indicator).then(action).catch(reportError)
  })
})