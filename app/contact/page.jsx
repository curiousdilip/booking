import ContactForm from "../components/ContactForm";
import Heading from "../components/Heading";
import Subheading from "../components/SubHeading";
import "./contact.scss";
export const metadata = {
  title: "Contact | Dilip Kumar Maurya",
  description:
    "Whether you are interested in hiring me, to work on a project together or to discuss any other proposal, feel free to contact me anytime. I am very much looking forward to your message!",
  keywords: "curiousdilip, web developer dilip",
  authors: [
    {
      name: "Dilip Kumar",
      url: "https://www.dilipmaurya.in",
    },
  ],
  openGraph: {
    title: "Contact | Dilip Kumar Maurya",
    description:
      "Whether you are interested in hiring me, to work on a project together or to discuss any other proposal, feel free to contact me anytime. I am very much looking forward to your message!",
    url: "https://www.dilipmaurya.in/contact",
    siteName: "Contact | Dilip Kumar Maurya",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@curiousdilip",
    title: "Contact | Dilip Kumar Maurya",
    description:
      "Whether you are interested in hiring me, to work on a project together or to discuss any other proposal, feel free to contact me anytime. I am very much looking forward to your message!",
  },
  robots: "index, follow",
};
export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="container">
          <Heading title="contact" />
          <Subheading
            description="Whether you are interested in hiring me, to work on a project
            together or to discuss any other proposal, feel free to contact me
            anytime. I am very much looking forward to your message!"
          />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
