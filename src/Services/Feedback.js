import Parse from 'parse/dist/parse.min';

const fetchAllFeedbacks = async () => {
  const Feedback = new Parse.Object('Feedback');
  const query = new Parse.Query(Feedback);

  return query.find();
};

const getSingleFeedback = async (id) => {
  // const Feedback = new Parse.Object('Feedback');

  const query = new Parse.Query('Feedback');
  // eslint-disable-next-line no-return-await
  return await query.get(id);
};

export { fetchAllFeedbacks, getSingleFeedback };
