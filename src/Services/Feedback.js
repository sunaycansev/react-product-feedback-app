import Parse from 'parse/dist/parse.min';

const fetchAllFeedbacks = async () => {
  const Feedback = new Parse.Object('Feedback');
  const query = new Parse.Query(Feedback);

  return query.find();
};

export { fetchAllFeedbacks };
