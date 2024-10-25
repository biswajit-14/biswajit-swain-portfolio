import emailjs from "@emailjs/browser";
import React from "react";

const Contact = () => {
  const formRef = React.useRef();
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  //service_jc5o9np

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.send(
        "service_jc5o9np",
        "template_n2zx1bf",
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_name: "Biswajit Swain",
          to_email: "biswajitswain@820@gmail.com",
        },
        "PRkEKYHbqhnj0Y9dR"
      );
      setLoading(false);
      alert(
        "Thank you for reaching out. I will get back to you as soon as possible."
      );
    } catch (error) {
      setLoading(false);
      console.log(error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section className="c-space my-20">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />

        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600">
            Wheather you're looking to build new website, improve your existing
            platform, or bring a unique project to life, I'd love to hear from
            you.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                value={form.name}
                onChange={handleChange}
                name="name"
                required
                className="field-input"
                placeholder="John Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                value={form.email}
                onChange={handleChange}
                name="email"
                required
                className="field-input"
                placeholder="johndoe@example.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Your Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="Hi, I wanna give you a job ..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
              <img
                src="/assets/arrow-up.png"
                alt="arrow up"
                className="field-btn_arrow"
              />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
