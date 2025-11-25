"use client";
import Form from "next/form";
export default function ContactPage() {
  return (
    <div className="bg-white/5 rounded-lg p-8 max-w-screen-md w-full mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <Form action="/submit-contact" className="flex flex-col gap-4 w-full">
        {/* On submission, the input value will be appended to
          the URL, e.g. /search?query=abc */}
        <fieldset>
          <legend className="text-lg mb-4">Personal Info</legend>
          <label htmlFor="fName" className="block mb-2">
            <p>First Name</p>
          </label>
          <input
            type="text"
            className="bg-white rounded px-4 py-2 w-full mb-4 text-black"
            name="fName"
          />

          <label htmlFor="lName" className="block mb-2">
            <p>Last Name</p>
          </label>
          <input
            type="text"
            className="bg-white rounded px-4 py-2 w-full mb-4 text-black"
            name="lName"
          />

          <label htmlFor="email" className="block mb-2">
            <p>Email</p>
          </label>
          <input
            type="email"
            className="bg-white rounded px-4 py-2 w-full mb-4 text-black"
            name="email"
          />

          <label htmlFor="message" className="block mb-2">
            Your Message
          </label>
          <textarea
            className="bg-white rounded px-4 py-2 w-full mb-4 text-black"
            name="message"
            rows={6}
          />
        </fieldset>

        <button
          className="text-white p-2 border border-white rounded-md max-w-30 hover:bg-white/10 transition hover:cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </Form>
    </div>
  );
}
