module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '89148ecac885f19537c9274be7c191ac'),
  },
});
