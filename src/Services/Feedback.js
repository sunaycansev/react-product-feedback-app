import Parse from 'parse/dist/parse.min';

export const fetchAllFeedbacks = async () => {
  const Feedback = new Parse.Object('Feedback');
  const query = new Parse.Query(Feedback);

  return query.find();
};

export const toggleUpvote = async (id, payload) => {
  const Feedback = new Parse.Object('Feedback');
  Feedback.set('objectId', id);
  Feedback.set('upvotes', payload);

  try {
    await Feedback.save();
  } catch (e) {
    console.log(e);
  }
};
