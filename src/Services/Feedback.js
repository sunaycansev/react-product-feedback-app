import Parse from 'parse/dist/parse.min.js'

export const fetchAllFeedbacks = async () => {
  const Feedback = new Parse.Object('Feedback')
  const query = new Parse.Query(Feedback)

  return await query.find()
}
