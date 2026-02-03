function Contact() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "contact-section fade-in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, /*#__PURE__*/React.createElement("h2", null, "Contact Me"), /*#__PURE__*/React.createElement("form", {
    action: "https://formspree.io/f/xqadopwk",
    method: "POST",
    className: "contact-form"
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "name"
  }, "Name"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    id: "name",
    name: "name",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "email"
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    id: "email",
    name: "email",
    required: true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "message"
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    id: "message",
    name: "message",
    rows: "5",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn-primary"
  }, "Send Message"))));
}
window.Contact = Contact;