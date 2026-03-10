import AddContactForm from "./AddContactForm";

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
}

export default async function ContactPage() {
  const res = await fetch("http://localhost:3001/contacts", {
    cache: "no-store",
  });
  const contacts: Contact[] = await res.json();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-500 mt-1">{contacts.length} contacts found</p>
        </div>
      </div>

      <AddContactForm />

      <div className="grid gap-4 mt-8">
        {contacts.map((contact) => (
          <div key={contact.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-lg font-bold">
                {contact.name.charAt(0).toUpperCase()}
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-gray-900">{contact.name}</h2>
                <p className="text-gray-500 text-sm">{contact.email}</p>
              </div>
              <div className="text-right text-sm text-gray-400">
                <p>{contact.phone}</p>
                <p>{contact.city}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
