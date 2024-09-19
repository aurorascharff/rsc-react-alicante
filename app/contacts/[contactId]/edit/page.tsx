import ContactForm from './_components/ContactForm';

type PageProps = {
  params: {
    contactId: string;
  };
};

export default function EditContactPage({ params }: PageProps) {
  return <ContactForm contactId={params.contactId} />;
}
