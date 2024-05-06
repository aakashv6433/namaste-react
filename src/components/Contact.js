const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl p-3 m-3">Contact Us</h2>
      <form>
        <input
          type="text"
          className="border border-black p-1 m-1 ml-10"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-1 m-1"
          placeholder="message"
        />
        <button className="border border-black p-1 m-1">submit</button>
      </form>
    </div>
  );
};

export default Contact;
