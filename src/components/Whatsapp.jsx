const Whatsapp = () => {
  return (
    <div className="fixed bottom-4 right-0 bg-whatsapp px-2 rounded-l-full transition-all ease-in duration-500">
      <a href="https://wa.me/6281397011944" className="text-sm group flex gap-1 items-center transform-flat">
        <i className="ri-whatsapp-line text-2xl"></i>{" "}
        <span className="max-w-0 overflow-hidden whitespace-nowrap translate-x-10 group-hover:max-w-fit group-hover:translate-x-0 group-hover:ml-2 transition-all duration-500 ease-in-out font-medium">
          Hubungi Kami
        </span>
      </a>
    </div>
  );
};

export default Whatsapp;
