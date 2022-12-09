function App() {
  return (
    <div className="p-6 bg-gray-800 text-gray-100 flex items-center	justify-center h-screen">
      <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-6">
        <div className="w-full px-6 pt-16 pb-36 rounded-md sm:px-12 md:px-16 xl:col-span-3 bg-gray-900">
          <span className="block mb-2 text-violet-400">California</span>
          <h1 className="text-5xl font-extrabold text-gray-50">Career Pathway Institute</h1>
          <p className="my-8">
            Build your own career path with unsplash. <strong>Subscribe for the waitlist</strong>
          </p>
          <iframe src="https://cdn.forms-content.sg-form.com/c1fc0066-774a-11ed-ab0c-7688e8800e8f" title="SubscriptionForm" className="w-full h-full" />
        </div>
        <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md lg:h-full xl:col-span-3 bg-gray-500" />
      </div>
    </div>
  );
}

export default App;
