const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shkedo29@gmail.com",
    subject: "Thanks for joining in",
    text: `Welcome abroad ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "shkedo29@gmail.com",
    subject: "It's so sad to say goodbye",
    text: `${name}, it's was my pleasure to share with you my app! I hope to see you soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail,
};
